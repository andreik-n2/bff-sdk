package node

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net"
	"net/http"
	"net/http/httptest"
	"net/http/httputil"
	"net/url"
	"os"
	"strings"
	"time"

	"github.com/dgraph-io/ristretto"
	"github.com/golang/protobuf/proto"
	"github.com/gorilla/mux"
	"github.com/pires/go-proxyproto"
	"github.com/rs/cors"
	"github.com/valyala/fasthttp"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
	"go.uber.org/zap"
	"golang.org/x/sync/errgroup"
	"golang.org/x/time/rate"

	"github.com/wundergraph/wundergraph/pkg/apihandler"
	"github.com/wundergraph/wundergraph/pkg/engineconfigloader"
	"github.com/wundergraph/wundergraph/pkg/hooks"
	"github.com/wundergraph/wundergraph/pkg/httpidletimeout"
	"github.com/wundergraph/wundergraph/pkg/loadvariable"
	"github.com/wundergraph/wundergraph/pkg/metrics"
	"github.com/wundergraph/wundergraph/pkg/node/nodetemplates"
	"github.com/wundergraph/wundergraph/pkg/pool"
	"github.com/wundergraph/wundergraph/pkg/trace"
	"github.com/wundergraph/wundergraph/pkg/validate"
	"github.com/wundergraph/wundergraph/pkg/wgpb"
)

const (
	rootEndpoint        = "/"
	healthCheckEndpoint = "/health"
)

func New(ctx context.Context, info BuildInfo, wundergraphDir string, log *zap.Logger) *Node {
	return &Node{
		info:           info,
		ctx:            ctx,
		configCh:       make(chan *WunderNodeConfig),
		pool:           pool.New(),
		log:            log.With(zap.String("component", "@virgograph/node")),
		WundergraphDir: wundergraphDir,
		apiClient: &fasthttp.Client{
			ReadTimeout:              time.Second * 10,
			WriteTimeout:             time.Second * 10,
			MaxIdleConnDuration:      time.Minute * 5,
			MaxConnDuration:          time.Minute * 10,
			MaxConnsPerHost:          100,
			DialDualStack:            true,
			NoDefaultUserAgentHeader: true,
		},
	}
}

type Node struct {
	ctx            context.Context
	info           BuildInfo
	configCh       chan *WunderNodeConfig
	builder        *apihandler.Builder
	server         *http.Server
	internalServer *http.Server
	metrics        metrics.Metrics
	pool           *pool.Pool
	log            *zap.Logger
	apiClient      *fasthttp.Client
	options        options
	WundergraphDir string
	tracer         *sdktrace.TracerProvider
}

type options struct {
	staticConfig                 *WunderNodeConfig
	fileSystemConfig             *string
	enableRequestResponseLogging bool
	forceHttpsRedirects          bool
	enableIntrospection          bool
	configFileChange             chan struct{}
	globalRateLimit              struct {
		enable      bool
		requests    int
		perDuration time.Duration
	}
	disableGracefulShutdown bool
	insecureCookies         bool
	githubAuthDemo          GitHubAuthDemo
	devMode                 bool
	idleTimeout             time.Duration
	idleHandler             func()
	hooksServerHealthCheck  bool
	healthCheckTimeout      time.Duration
	onServerConfigLoad      func(config *WunderNodeConfig)
	onServerError           func(err error)
	traceBatchTimeout       time.Duration
	natsDefaultServerURL    string
}

type Option func(options *options)

func WithHooksServerHealthCheck(timeout time.Duration) Option {
	return func(options *options) {
		options.hooksServerHealthCheck = true
		options.healthCheckTimeout = timeout
	}
}

func WithStaticWunderNodeConfig(config *WunderNodeConfig) Option {
	return func(options *options) {
		options.staticConfig = config
	}
}

func WithServerConfigLoadHandler(callback func(config *WunderNodeConfig)) Option {
	return func(options *options) {
		options.onServerConfigLoad = callback
	}
}

func WithServerErrorHandler(callback func(err error)) Option {
	return func(options *options) {
		options.onServerError = callback
	}
}

func WithGitHubAuthDemo(authDemo GitHubAuthDemo) Option {
	return func(options *options) {
		options.githubAuthDemo = authDemo
	}
}

// WithDevMode will set cookie secrets to a static, insecure, string
// This way, you stay logged in during development
// Should never be used in production
func WithDevMode() Option {
	return func(options *options) {
		options.devMode = true
	}
}

func WithInsecureCookies() Option {
	return func(options *options) {
		options.insecureCookies = true
	}
}

func WithIntrospection(enable bool) Option {
	return func(options *options) {
		options.enableIntrospection = enable
	}
}

func WithGlobalRateLimit(requests int, perDuration time.Duration) Option {
	return func(options *options) {
		options.globalRateLimit.enable = true
		options.globalRateLimit.requests = requests
		options.globalRateLimit.perDuration = perDuration
	}
}

// WithTraceBatchTimeout sets the timeout for the trace batch exporter.
// It defines how long the exporter will wait for a batch to be filled before sending it.
// If the timeout is less or equal than 0, the default value of 5 seconds will be used
func WithTraceBatchTimeout(batchTimeout time.Duration) Option {
	return func(options *options) {
		if batchTimeout <= 0 {
			batchTimeout = 3000 * time.Millisecond
		}
		options.traceBatchTimeout = batchTimeout
	}
}

func WithFileSystemConfig(configFilePath string) Option {
	return func(options *options) {
		options.fileSystemConfig = &configFilePath
	}
}

func WithConfigFileChange(event chan struct{}) Option {
	return func(options *options) {
		options.configFileChange = event
	}
}

func WithRequestResponseLogging(enable bool) Option {
	return func(options *options) {
		options.enableRequestResponseLogging = enable
	}
}

func WithForceHttpsRedirects(forceHttpsRedirects bool) Option {
	return func(options *options) {
		options.forceHttpsRedirects = forceHttpsRedirects
	}
}

// WithIdleTimeout makes the Node call the given handler after idleTimeout
// has elapsed without any requests while the server is running. If there
// are no requests, the handler will be called after idleTimeout counting
// from the server start.
func WithIdleTimeout(idleTimeout time.Duration, idleHandler func()) Option {
	return func(options *options) {
		options.idleTimeout = idleTimeout
		options.idleHandler = idleHandler
	}
}

// WithNATSDefaultServerURL sets the URL for the default NATS server
func WithNATSDefaultServerURL(serverURL string) Option {
	return func(options *options) {
		options.natsDefaultServerURL = serverURL
	}
}

func (n *Node) StartBlocking(opts ...Option) error {
	var options options
	for i := range opts {
		opts[i](&options)
	}

	n.options = options

	g := errgroup.Group{}

	switch {
	case options.staticConfig != nil:
		n.log.Debug("Api config: static")

		g.Go(func() error {
			err := n.startServer(options.staticConfig)
			if err != nil {
				n.log.Error("could not start a node",
					zap.Error(err),
				)
				return err
			}
			return nil
		})
	case options.fileSystemConfig != nil:
		n.log.Debug("Api config: file polling",
			zap.String("config_file_name", *options.fileSystemConfig),
		)
		if options.configFileChange != nil {
			g.Go(func() error {
				err := n.reconfigureOnConfigUpdate()
				if err != nil {
					n.log.Error("could not reconfigure config update",
						zap.Error(err),
					)
					return err
				}
				return nil
			})

			g.Go(func() error {
				err := n.filePollConfig(*options.fileSystemConfig)
				if err != nil {
					n.log.Error("could not load config",
						zap.Error(err),
					)
					return err
				}
				return nil
			})
		}
	default:
		return errors.New("could not start a node. no config present")
	}

	return g.Wait()
}

func (n *Node) startTracer(traceConfig *trace.Config) error {
	tp, err := trace.StartAgent(n.log, *traceConfig)
	if err != nil {
		return err
	}
	n.tracer = tp

	return nil
}

func (n *Node) Shutdown(ctx context.Context) error {
	if n.metrics != nil {
		if err := n.metrics.Shutdown(ctx); err != nil {
			return err
		}
	}

	if n.server != nil {
		if err := n.server.Shutdown(ctx); err != nil {
			return err
		}
	}

	if n.internalServer != nil {
		if err := n.internalServer.Shutdown(ctx); err != nil {
			return err
		}
	}

	if n.tracer != nil {
		if err := n.tracer.ForceFlush(ctx); err != nil {
			n.log.Error("could not force flush tracer", zap.Error(err))
		}
		if err := n.tracer.Shutdown(ctx); err != nil {
			return err
		}
	}

	return nil
}

// Close closes the node and all its dependencies.
// It is doing that without waiting for the node to shutdown properly.
func (n *Node) Close() error {
	if n.metrics != nil {
		n.metrics.Close()
		n.metrics = nil
	}
	if n.builder != nil {
		if err := n.builder.Close(); err != nil {
			return err
		}
		n.builder = nil
	}

	if n.server != nil {
		if err := n.server.Close(); err != nil {
			return err
		}
		n.server = nil
	}

	if n.internalServer != nil {
		if err := n.internalServer.Close(); err != nil {
			return err
		}
		n.internalServer = nil
	}

	if n.tracer != nil {
		if err := n.tracer.Shutdown(context.Background()); err != nil {
			return err
		}
	}

	return nil
}

func (n *Node) newListeners(configuration *apihandler.Listener) ([]net.Listener, error) {
	cfg := net.ListenConfig{
		KeepAlive: 90 * time.Second,
	}

	host, port := configuration.Host, configuration.Port

	var addrs []net.IP
	// Calling LookupHost on an IP address will return the same
	// address, so we don't need to handle addresses and hostnames
	// differently
	hostAddrs, err := net.DefaultResolver.LookupHost(n.ctx, host)
	if err != nil {
		return nil, fmt.Errorf("can't resolve host to listen on %s: %w", host, err)
	}
	for _, addr := range hostAddrs {
		if ip := net.ParseIP(addr); ip != nil {
			addrs = append(addrs, ip)
		}
	}
	if len(addrs) == 0 {
		return nil, fmt.Errorf("host %s didn't resolve to any valid IP adddresses", host)
	}

	var listeners []net.Listener
	for _, addr := range addrs {
		saddr := addr.String()
		var bindAddr string
		var bindProto string
		// By default, Go uses dual stack. That means, if we pass 0.0.0.0 (ipv4), it will
		// bind on both IPv4 and IPv6. If we want to listen on IPv4 only, we need
		// to pass the network as tcp4. Dual stack has produced some issues in container environments
		// for those reasons we are using tcp4 or tcp6 explicitly.
		if addr.To4() != nil {
			bindProto = "tcp4"
			bindAddr = saddr
		} else {
			bindProto = "tcp6"
			bindAddr = fmt.Sprintf("[%s]", saddr)
		}

		toListen := fmt.Sprintf("%s:%d", bindAddr, port)
		listener, err := cfg.Listen(n.ctx, bindProto, toListen)
		if err != nil {
			return nil, fmt.Errorf("error listening on %s: %w", toListen, err)
		}

		listeners = append(listeners, &proxyproto.Listener{
			Listener: listener,
		})
	}

	return listeners, nil
}

func (n *Node) HandleGracefulShutdown(gracefulTimeoutInSeconds int) {
	<-n.ctx.Done()

	n.log.Debug("Initialize WunderNode shutdown ....")

	gracefulTimeoutDur := time.Duration(gracefulTimeoutInSeconds) * time.Second
	n.log.Debug("Graceful shutdown WunderNode ...", zap.String("gracefulTimeout", gracefulTimeoutDur.String()))
	shutdownCtx, cancel := context.WithTimeout(context.Background(), gracefulTimeoutDur)
	defer cancel()

	if err := n.Shutdown(shutdownCtx); err != nil {
		n.log.Error("Error during WunderNode shutdown", zap.Error(err))
	}

	n.log.Info("WunderNode shutdown complete")
}

func (n *Node) GetHealthReport(ctx context.Context, hooksClient *hooks.Client) (*HealthCheckReport, bool) {
	deploymentId := os.Getenv("WG_CLOUD_DEPLOYMENT_ID")
	commitSHA := os.Getenv("WG_CLOUD_DEPLOYMENT_COMMIT_SHA")
	commitURL := os.Getenv("WG_CLOUD_DEPLOYMENT_COMMIT_URL")
	healthCheck := &HealthCheckReport{
		ServerStatus: "NOT_READY",
		// For now we assume that the server is ready
		// because we don't have any health checks
		NodeStatus:   "READY",
		BuildInfo:    n.info,
		DeploymentId: deploymentId,
		CommitSHA:    commitSHA,
		CommitURL:    commitURL,
	}

	if n.options.hooksServerHealthCheck {
		ctx, cancel := context.WithTimeout(ctx, n.options.healthCheckTimeout)
		defer cancel()
		ok := hooksClient.DoHealthCheckRequest(ctx)
		if ok {
			healthCheck.ServerStatus = "READY"
		} else {
			return healthCheck, false
		}
	} else {
		healthCheck.ServerStatus = "SKIP"
	}

	return healthCheck, true
}

func (n *Node) startServer(nodeConfig *WunderNodeConfig) error {
	if nodeConfig.Api.Options.OpenTelemetry.Enabled {
		endpoint := nodeConfig.Api.Options.OpenTelemetry.ExporterHTTPEndpoint
		sampler := nodeConfig.Api.Options.OpenTelemetry.Sampler

		n.log.Info("OpenTelemetry enabled",
			zap.String("endpoint", endpoint),
			zap.Float64("sampler", sampler),
			zap.String("batchTimeout", n.options.traceBatchTimeout.String()),
		)

		if err := n.startTracer(&trace.Config{
			Name:         "wundernode",
			Endpoint:     endpoint,
			Batcher:      "otlphttp",
			OtlpHttpPath: "/v1/traces",
			BatchTimeout: n.options.traceBatchTimeout,
			Sampler:      sampler,
			OtlpHeaders: map[string]string{
				"Authorization": fmt.Sprintf("Bearer %s", nodeConfig.Api.Options.OpenTelemetry.AuthToken),
			},
		}); err != nil {
			return err
		}
	}

	router := mux.NewRouter()
	internalRouter := mux.NewRouter()

	if nodeConfig.Api.Options.Prometheus.Enabled {
		port := nodeConfig.Api.Options.Prometheus.Port
		n.log.Debug("serving Prometheus metrics", zap.Int("port", port))
		n.metrics = metrics.NewPrometheus(port)
	} else {
		n.metrics = metrics.NewNone()
	}

	if n.options.globalRateLimit.enable {
		limiter := rate.NewLimiter(rate.Every(n.options.globalRateLimit.perDuration), n.options.globalRateLimit.requests)
		handler := func(handler http.Handler) http.Handler {
			return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
				if !limiter.Allow() {
					http.Error(w, "too many requests", http.StatusTooManyRequests)
					return
				}
				handler.ServeHTTP(w, r)
			})
		}
		router.Use(handler)
		internalRouter.Use(handler)
	}

	var streamClosers []chan struct{}

	n.setApiDevConfigDefaults(nodeConfig.Api)

	valid, messages := validate.ApiConfig(nodeConfig.Api)

	if !valid {
		n.log.Error("API config invalid",
			zap.Strings("errors", messages),
		)
		return errors.New("API config invalid")
	}

	hooksClient := hooks.NewClient(&hooks.ClientOptions{
		EnableTracing: nodeConfig.Api.Options.OpenTelemetry.Enabled,
		ServerURL:     nodeConfig.Api.Options.ServerUrl,
		Logger:        n.log,
	})

	dialer := &net.Dialer{
		Timeout:   10 * time.Second,
		KeepAlive: 90 * time.Second,
	}

	defaultTransport := &http.Transport{
		DialContext: func(ctx context.Context, network, addr string) (net.Conn, error) {
			return dialer.DialContext(ctx, network, addr)
		},
		ForceAttemptHTTP2:   true,
		MaxIdleConns:        1024,
		IdleConnTimeout:     90 * time.Second,
		TLSHandshakeTimeout: 10 * time.Second,
	}

	if proxyURL := nodeConfig.Api.Options.DefaultHTTPProxyURL; proxyURL != nil {
		n.log.Debug("using global HTTP proxy", zap.String("proxy", proxyURL.String()))
		defaultTransport.Proxy = func(r *http.Request) (*url.URL, error) {
			return proxyURL, nil
		}
	}

	transportFactory := apihandler.NewApiTransportFactory(apihandler.ApiTransportOptions{
		API:                  nodeConfig.Api,
		HooksClient:          hooksClient,
		EnableRequestLogging: n.options.enableRequestResponseLogging,
		EnableTracing:        nodeConfig.Api.Options.OpenTelemetry.Enabled,
		Metrics:              n.metrics,
	})

	n.log.Debug("http.Client.Transport",
		zap.Bool("enableRequestLogging", n.options.enableRequestResponseLogging),
	)

	loaderOptions := engineconfigloader.EngineConfigLoaderOptions{
		WunderGraphDir:       n.WundergraphDir,
		NATSDefaultServerURL: n.options.natsDefaultServerURL,
	}
	loader := engineconfigloader.New(loaderOptions, engineconfigloader.NewDefaultFactoryResolver(
		transportFactory,
		defaultTransport,
		n.log,
		hooksClient,
	))

	builderConfig := apihandler.BuilderConfig{
		InsecureCookies:            n.options.insecureCookies,
		ForceHttpsRedirects:        n.options.forceHttpsRedirects,
		EnableRequestLogging:       n.options.enableRequestResponseLogging,
		EnableIntrospection:        n.options.enableIntrospection,
		GitHubAuthDemoClientID:     n.options.githubAuthDemo.ClientID,
		GitHubAuthDemoClientSecret: n.options.githubAuthDemo.ClientSecret,
		DevMode:                    n.options.devMode,
		Metrics:                    n.metrics,
	}

	n.builder = apihandler.NewBuilder(n.pool, n.log, loader, hooksClient, builderConfig)

	internalBuilderConfig := apihandler.InternalBuilderConfig{
		Pool:                n.pool,
		Client:              hooksClient,
		Loader:              loader,
		EnableIntrospection: n.options.enableIntrospection,
		Metrics:             n.metrics,
		InsecureCookies:     n.options.insecureCookies,
		Log:                 n.log,
		DevMode:             n.options.devMode,
	}
	internalBuilder := apihandler.NewInternalBuilder(internalBuilderConfig)

	// this planCache is used across both internal GraphQL handlers
	planCache, err := ristretto.NewCache(&ristretto.Config{
		MaxCost:     1024 * 4,      // keep 4k execution plans in the cache
		NumCounters: 1024 * 4 * 10, // 4k * 10
		BufferItems: 64,            // number of keys per Get buffer.
	})
	if err != nil {
		n.log.Error("create plan cache failed", zap.Error(err))
		return err
	}

	publicClosers, err := n.builder.BuildAndMountApiHandler(n.ctx, router, nodeConfig.Api, planCache)
	if err != nil {
		n.log.Error("BuildAndMountApiHandler", zap.Error(err))
		return err
	}
	streamClosers = append(streamClosers, publicClosers...)

	internalClosers, err := internalBuilder.BuildAndMountInternalApiHandler(n.ctx, internalRouter, nodeConfig.Api, planCache)
	if err != nil {
		n.log.Error("BuildAndMountInternalApiHandler", zap.Error(err))
		return err
	}

	streamClosers = append(streamClosers, internalClosers...)

	defer func() {
		for _, closer := range streamClosers {
			close(closer)
		}
	}()

	router.Handle(rootEndpoint, http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		template, err := nodetemplates.GetTemplateByPath(rootEndpoint)
		if err != nil {
			n.log.Error("GetTemplateByPath", zap.Error(err))
			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		report, healthy := n.GetHealthReport(r.Context(), hooksClient)
		if !healthy {
			w.WriteHeader(http.StatusServiceUnavailable)
		}
		w.Header().Set("Cache-Control", "no-cache, no-store, must-revalidate")
		w.Header().Set("Content-Type", "text/html")

		if err := template.Execute(w, report); err != nil {
			n.log.Error("template.Execute", zap.Error(err))
			return
		}
	}))

	router.Handle(healthCheckEndpoint, http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		report, healthy := n.GetHealthReport(r.Context(), hooksClient)
		if !healthy {
			w.WriteHeader(http.StatusServiceUnavailable)
		}
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Cache-Control", "no-cache, no-store, must-revalidate")
		_ = json.NewEncoder(w).Encode(report)
	}))

	handler := n.setupGlobalMiddlewares(router, nodeConfig)
	internalHandler := http.Handler(internalRouter)

	connContext := func(ctx context.Context, c net.Conn) context.Context {
		return context.WithValue(ctx, "conn", c)
	}

	if nodeConfig.Api.Options.OpenTelemetry.Enabled {
		handler = trace.WrapHandler(handler, trace.PublicServerAttribute)
		internalHandler = trace.WrapHandler(internalHandler, trace.InternalServerAttribute)
	}

	n.server = &http.Server{
		Handler:     handler,
		ConnContext: connContext,
		// ErrorLog: log.New(ioutil.Discard, "", log.LstdFlags),
	}

	n.internalServer = &http.Server{
		Handler:     internalHandler,
		ConnContext: connContext,
		// ErrorLog: log.New(ioutil.Discard, "", log.LstdFlags),
	}

	if n.options.idleTimeout > 0 {
		opts := []httpidletimeout.Option{
			httpidletimeout.WithSkip(func(r *http.Request) bool {
				return r.URL.Path == healthCheckEndpoint
			}),
		}
		timeoutMiddleware := httpidletimeout.New(n.options.idleTimeout, opts...)
		router.Use(timeoutMiddleware.Handler)
		internalRouter.Use(timeoutMiddleware.Handler)
		n.server.RegisterOnShutdown(timeoutMiddleware.Cancel)
		n.internalServer.RegisterOnShutdown(timeoutMiddleware.Cancel)
		timeoutMiddleware.Start()
		go func() {
			_ = timeoutMiddleware.Wait(n.ctx)
			n.options.idleHandler()
		}()
	}

	listeners, err := n.newListeners(nodeConfig.Api.Options.Listener)
	if err != nil {
		return err
	}

	internalListeners, err := n.newListeners(nodeConfig.Api.Options.InternalListener)
	if err != nil {
		return err
	}

	g, _ := errgroup.WithContext(n.ctx)

	for _, listener := range listeners {
		l := listener
		g.Go(func() error {
			n.log.Info(fmt.Sprintf("Node listening at http://%s", l.Addr().String()))

			err := n.server.Serve(l)
			if err == nil {
				return nil
			}
			if err == http.ErrServerClosed {
				n.log.Debug("Listener closed",
					zap.String("addr", l.Addr().String()),
				)
				return nil
			}
			return err
		})
	}

	for _, listener := range internalListeners {
		l := listener
		g.Go(func() error {
			n.log.Debug(fmt.Sprintf("Internal node listening at http://%s", l.Addr().String()))

			err := n.internalServer.Serve(l)
			if err == nil {
				return nil
			}
			if err == http.ErrServerClosed {
				n.log.Debug("Listener closed",
					zap.String("addr", l.Addr().String()),
				)
				return nil
			}
			return err
		})
	}

	g.Go(func() error {
		if err := n.metrics.Serve(); err != nil && err != metrics.ErrServerClosed {
			n.log.Error("serving metrics", zap.Error(err))
			return err
		}
		return nil
	})

	n.log.Debug("public node url",
		zap.String("publicNodeUrl", nodeConfig.Api.Options.PublicNodeUrl),
	)

	return g.Wait()
}

// setupGlobalMiddlewares sets up middlewares that must run in all endpoints, not just valid ones.
// gorilla/mux only runs middlewares when a handler path/method matches, that's why this workaround
// is needed. See https://github.com/gorilla/mux/issues/416
func (n *Node) setupGlobalMiddlewares(router *mux.Router, nodeConfig *WunderNodeConfig) http.Handler {
	handler := http.Handler(router)
	if corsConfig := nodeConfig.Api.CorsConfiguration; corsConfig != nil {
		corsMiddleware := cors.New(cors.Options{
			MaxAge:           int(corsConfig.MaxAge),
			AllowCredentials: corsConfig.AllowCredentials,
			AllowedHeaders:   corsConfig.AllowedHeaders,
			AllowedMethods:   corsConfig.AllowedMethods,
			AllowedOrigins:   loadvariable.Strings(corsConfig.AllowedOrigins),
			ExposedHeaders:   corsConfig.ExposedHeaders,
		})
		handler = corsMiddleware.Handler(handler)
		n.log.Debug("configuring CORS",
			zap.Strings("allowedOrigins", loadvariable.Strings(corsConfig.AllowedOrigins)),
		)
	}
	if n.options.enableRequestResponseLogging {
		return logRequestResponseHandler(os.Stderr, handler)
	}
	return handler
}

// setApiDevConfigDefaults sets default values for the api config in dev mode
func (n *Node) setApiDevConfigDefaults(api *apihandler.Api) {
	var warnMessages []string
	// we set these values statically so that auth never drops login sessions during development
	if n.options.devMode {
		api.CookieBasedSecrets, warnMessages = apihandler.NewDevModeCookieBasedSecrets()
	} else {
		api.CookieBasedSecrets, warnMessages = apihandler.NewCookieBasedSecrets()
	}
	for _, errorMessage := range warnMessages {
		n.log.Warn(errorMessage)
	}
}

func (n *Node) filterHosts(api apihandler.Api) []string {
	hosts := []string{api.PrimaryHost}
WithNext:
	for _, host := range api.Hosts {
		for _, existing := range hosts {
			if host == existing {
				continue WithNext
			}
		}
		hosts = append(hosts, host)
	}
	var filtered []string
	for _, host := range hosts {
		switch host {
		case "":
			continue
		default:
			filtered = append(filtered, host)
		}
	}
	return filtered
}

func (n *Node) reconfigureOnConfigUpdate() error {
	g, ctx := errgroup.WithContext(n.ctx)

	for {
		select {
		case config := <-n.configCh:
			n.log.Debug("Updated config -> (re-)configuring server")
			_ = n.Close()

			if n.options.onServerConfigLoad != nil {
				n.options.onServerConfigLoad(config)
			}

			// in a new routine, startServer is blocking
			g.Go(func() error {
				err := n.startServer(config)
				if err != nil {
					if n.options.onServerError != nil {
						n.options.onServerError(err)
					}
					return err
				}
				return nil
			})

		case <-ctx.Done():
			return g.Wait()
		}
	}
}

func (n *Node) filePollConfig(filePath string) error {
	for {
		select {
		case <-n.ctx.Done():
			return nil
		case _, ok := <-n.options.configFileChange:
			if !ok {
				return nil
			}
			err := n.reloadFileConfig(filePath)
			if err != nil {
				return err
			}
		}
	}
}

func (n *Node) reloadFileConfig(filePath string) error {
	data, err := os.ReadFile(filePath)
	if err != nil {
		n.log.Error("reloadFileConfig os.ReadFile", zap.String("filePath", filePath), zap.Error(err))
		return err
	}
	if len(data) == 0 {
		return errors.New("empty config file")
	}
	var graphConfig wgpb.WunderGraphConfiguration
	if err := proto.Unmarshal(data, &graphConfig); err != nil {
		n.log.Error("decoding config file", zap.Error(err))
		return err
	}

	config, err := CreateConfig(&graphConfig)
	if err != nil {
		n.log.Error("reloadFileConfig CreateConfig", zap.String("filePath", filePath), zap.Error(err))
		return err
	}

	n.configCh <- config

	return nil
}

// shouldLogWithHeader returns true iff a request or response with the
// given headers should be logged
func shouldLogWithHeader(header http.Header) bool {
	// If the request looks like a file upload, avoid printing the whole
	// encoded file as a debug message.
	return !strings.HasPrefix(header.Get("Content-Type"), "multipart/form-data")
}

// returns an http.Handler that logs all requests and responses to the given io.Writer.
// If reading or copying any of the data fails, it panics. DON'T USE THIS IN PRODUCTION
func logRequestResponseHandler(output io.Writer, handler http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Do not intercept streaming responses
		query := r.URL.Query()
		if query.Has(apihandler.WgLiveParam) || query.Has(apihandler.WgSSEParam) || query.Has(apihandler.WgJSONPatchParam) {
			handler.ServeHTTP(w, r)
			return
		}
		requestBody, err := io.ReadAll(r.Body)
		if err != nil {
			panic(err)
		}
		r.Body = io.NopCloser(bytes.NewReader(requestBody))
		requestAnnotation := ""
		shouldRequestLogBody := shouldLogWithHeader(r.Header)
		if !shouldRequestLogBody {
			requestAnnotation = " (body omitted)"
		}
		request, err := httputil.DumpRequest(r, shouldRequestLogBody)
		r.Body = io.NopCloser(bytes.NewReader(requestBody))
		if err != nil {
			panic(err)
		}
		fmt.Fprintf(output, "incoming request%s: %s\n", requestAnnotation, string(request))
		rec := httptest.NewRecorder()
		handler.ServeHTTP(rec, r)
		resp := rec.Result()
		defer resp.Body.Close()
		responseBody, err := io.ReadAll(resp.Body)
		if err != nil {
			panic(err)
		}
		resp.Body = io.NopCloser(bytes.NewReader(responseBody))
		responseAnnotation := ""
		shouldLogResponseBody := shouldLogWithHeader(resp.Header)
		if !shouldLogResponseBody {
			responseAnnotation = " (body omitted)"
		}
		response, err := httputil.DumpResponse(resp, shouldLogResponseBody)
		resp.Body = io.NopCloser(bytes.NewReader(responseBody))
		if err != nil {
			panic(err)
		}
		fmt.Fprintf(output, "outgoing response%s: %s\n", responseAnnotation, string(response))
		for k := range resp.Header {
			w.Header()[k] = resp.Header[k]
		}
		w.WriteHeader(resp.StatusCode)
		if _, err := io.Copy(w, resp.Body); err != nil {
			panic(err)
		}
	})
}
