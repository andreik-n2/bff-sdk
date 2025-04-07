package bundler

import (
	"context"
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"strings"

	"github.com/evanw/esbuild/pkg/api"
	"github.com/hashicorp/go-multierror"
	"go.uber.org/zap"

	"github.com/wundergraph/wundergraph/pkg/watcher"
)

const watchFileLimit = 1000

// NonNodeModuleReg copied from https://github.com/egoist/tsup/blob/dev/src/esbuild/external.ts#L5
var NonNodeModuleReg = regexp.MustCompile(`^[^./]|^\.[^./]|^\.\.[^/]`) // Must not start with "/" or "./" or "../"

type Bundler struct {
	name                  string
	production            bool
	entryPoints           []api.EntryPoint
	absWorkingDir         string
	watchPaths            []*watcher.WatchPath
	ignorePaths           []string
	log                   *zap.Logger
	skipWatchOnEntryPoint bool
	outFile               string
	outDir                string
	outExtension          map[string]string
	fileLoaders           []string
	buildContext          api.BuildContext
	//buildResult           *api.BuildResult
	onAfterBundle func(buildErr error, rebuild bool) error
	onWatch       func(paths []string)

	newWatchPath chan *watcher.WatchPath
}

type Config struct {
	Name                  string
	Production            bool
	Logger                *zap.Logger
	AbsWorkingDir         string
	SkipWatchOnEntryPoint bool
	EntryPoints           []string
	WatchPaths            []*watcher.WatchPath
	IgnorePaths           []string
	OutFile               string
	OutDir                string
	OutExtension          map[string]string
	OnAfterBundle         func(buildErr error, rebuild bool) error
	OnWatch               func(paths []string)
}

func NewBundler(config Config) *Bundler {

	return &Bundler{
		name:                  config.Name,
		production:            config.Production,
		absWorkingDir:         config.AbsWorkingDir,
		outFile:               config.OutFile,
		outDir:                config.OutDir,
		outExtension:          config.OutExtension,
		entryPoints:           entryPoints(config),
		watchPaths:            config.WatchPaths,
		ignorePaths:           config.IgnorePaths,
		skipWatchOnEntryPoint: config.SkipWatchOnEntryPoint,
		onAfterBundle:         config.OnAfterBundle,
		onWatch:               config.OnWatch,
		log:                   config.Logger,
		fileLoaders:           []string{".graphql", ".gql", ".graphqls", ".yml", ".yaml"},
		newWatchPath:          make(chan *watcher.WatchPath),
	}
}

func entryPoints(config Config) []api.EntryPoint {

	if config.OutFile != "" && len(config.EntryPoints) == 1 {
		entryPoint := config.EntryPoints[0]
		return []api.EntryPoint{
			{
				InputPath:  entryPoint,
				OutputPath: strings.TrimSuffix(entryPoint, filepath.Ext(entryPoint)),
			},
		}
	}

	entries := make([]api.EntryPoint, len(config.EntryPoints))
	for i, entryPoint := range config.EntryPoints {
		// remove file extension from entryPoint
		outPath := strings.TrimSuffix(entryPoint, filepath.Ext(entryPoint))
		entries[i] = api.EntryPoint{
			InputPath:  entryPoint,
			OutputPath: outPath,
		}
	}

	return entries
}

func (b *Bundler) buildErr(errors []api.Message) error {
	var err error

	for _, message := range errors {
		file := "????"
		line := 0
		column := 0
		lineText := ""
		if message.Location != nil {
			file = message.Location.File
			line = message.Location.Line
			column = message.Location.Column
			lineText = message.Location.LineText
		}
		err = multierror.Append(err, fmt.Errorf("%s (%d:%d):\n%s\n%s", file, line, column, lineText, message.Text))
	}

	return err
}

func (b *Bundler) Bundle() error {
	if b.buildContext != nil {
		buildResult := b.buildContext.Rebuild()
		if len(buildResult.Errors) != 0 {
			b.log.Error("Build failed",
				zap.String("bundlerName", b.name),
				zap.Any("errors", buildResult.Errors),
			)
			if b.onAfterBundle != nil {
				return b.onAfterBundle(b.buildErr(buildResult.Errors), true)
			}
			return b.buildErr(buildResult.Errors)
		}

		b.log.Debug("Build successful", zap.String("bundlerName", b.name))

		if b.onAfterBundle != nil {
			return b.onAfterBundle(b.buildErr(buildResult.Errors), true)
		}
	} else {
		buildCtx, ctxError := b.initialBuildContext()
		if ctxError != nil && len(ctxError.Errors) != 0 {
			b.log.Error("Initial Build failed",
				zap.String("bundlerName", b.name),
				zap.Any("errors", ctxError.Errors),
			)
			if b.onAfterBundle != nil {
				return b.onAfterBundle(b.buildErr(ctxError.Errors), false)
			}
			return b.buildErr(ctxError.Errors)
		}

		buildResult := buildCtx.Rebuild()
		if len(buildResult.Errors) != 0 {
			b.log.Error("Initial Build failed",
				zap.String("bundlerName", b.name),
				zap.Any("errors", buildResult.Errors),
			)
			if b.onAfterBundle != nil {
				return b.onAfterBundle(b.buildErr(buildResult.Errors), false)
			}
			return b.buildErr(buildResult.Errors)
		}

		b.buildContext = buildCtx

		b.log.Debug("Initial Build successful", zap.String("bundlerName", b.name))

		if b.onAfterBundle != nil {
			return b.onAfterBundle(b.buildErr(buildResult.Errors), false)
		}
	}

	return nil
}

func (b *Bundler) Watch(ctx context.Context) {
	if len(b.watchPaths) == 0 {
		return
	}
	if b.buildContext == nil {
		return
	}
	if len(b.watchPaths) > 0 {
		b.log.Debug("Watching for file changes",
			zap.String("bundlerName", b.name),
			zap.String("outFile", b.outFile),
			zap.Any("watchPaths", b.watchPaths),
			zap.Strings("fileLoaders", b.fileLoaders),
		)
		b.watch(ctx)
	}
}

func (b *Bundler) BundleAndWatch(ctx context.Context) {
	b.Bundle()
	if len(b.watchPaths) > 0 {
		b.log.Debug("Watching for file changes",
			zap.String("bundlerName", b.name),
			zap.String("outFile", b.outFile),
			zap.Strings("fileLoaders", b.fileLoaders),
		)
		b.watch(ctx)
	}
}

func (b *Bundler) initialBuildContext() (api.BuildContext, *api.ContextError) {
	options := api.BuildOptions{
		Outfile:      b.outFile,
		Outdir:       b.outDir,
		OutExtension: b.outExtension,
		Bundle:       true,
		//Incremental:         true,
		EntryPointsAdvanced: b.entryPoints,
		Platform:            api.PlatformNode,
		Sourcemap:           api.SourceMapLinked,
		// Don't bundle external modules
		Packages:      api.PackagesExternal,
		AbsWorkingDir: b.absWorkingDir,
		Loader: map[string]api.Loader{
			".json": api.LoaderJSON,
		},
		Format: api.FormatCommonJS,
		Color:  api.ColorAlways,
		Engines: []api.Engine{
			// https://nodejs.org/en/about/releases/
			{Name: api.EngineNode, Version: "16"}, // Maintenance
			{Name: api.EngineNode, Version: "18"}, // LTS
		},
		Write: true,
	}

	if b.production {
		options.MinifySyntax = true
		options.TreeShaking = api.TreeShakingTrue
		options.MinifyIdentifiers = true
		options.MinifyWhitespace = true
	}

	watchTypescriptFile := func(file string) {
		// typescript imports have no file extension
		// we need to check if the real file exists and append the extension
		_, err := os.Stat(file)
		if os.IsNotExist(err) {
			if fileInfo, err := os.Stat(file + ".ts"); err == nil {
				if !fileInfo.IsDir() {
					file += ".ts"
				}
			}
		}

		// check if we want to ignore the file
		ignore := false
		for _, ignorePath := range b.ignorePaths {
			if strings.Contains(file, ignorePath) {
				ignore = true
				break
			}
		}

		if !ignore {
			// check if the path already exist
			exists := false
			for _, watchPath := range b.watchPaths {
				if watchPath.Path == file {
					exists = true
					break
				}
			}
			if !exists {
				if len(b.watchPaths) < watchFileLimit {
					// each plugin runs on a separate go routine
					go func(watchPath *watcher.WatchPath) {
						b.newWatchPath <- watchPath
					}(&watcher.WatchPath{Path: file})

				} else {
					b.log.Error("Bundler watching limit exceeded", zap.String("bundlerName", b.name), zap.Int("limit", watchFileLimit), zap.Error(err))
				}
			}
		}
	}

	options.Plugins = append(options.Plugins, api.Plugin{
		Name: "watch-imports",
		Setup: func(build api.PluginBuild) {
			build.OnResolve(api.OnResolveOptions{Filter: `.*`},
				func(args api.OnResolveArgs) (api.OnResolveResult, error) {
					var file string
					if filepath.IsAbs(args.Path) {
						file = args.Path
					} else {
						file = filepath.Join(args.ResolveDir, args.Path)
					}

					if args.Kind == api.ResolveJSImportStatement || (!b.skipWatchOnEntryPoint && args.Kind == api.ResolveEntryPoint) {
						isExternal := NonNodeModuleReg.MatchString(args.Path)
						if isExternal {
							return api.OnResolveResult{}, nil
						}
						watchTypescriptFile(file)
					}

					return api.OnResolveResult{}, nil
				})
		}})

	for _, loader := range b.fileLoaders {
		options.Loader[loader] = api.LoaderText
	}

	return api.Context(options)
}

func (b *Bundler) watch(ctx context.Context) {
	watcherCtx, cancel := context.WithCancel(ctx)
	b.runWatcher(watcherCtx)

	for {
		select {
		case <-ctx.Done():
			cancel()
			return
		case watchPath := <-b.newWatchPath:
			b.watchPaths = append(b.watchPaths, watchPath)
			cancel()
			watcherCtx, cancel = context.WithCancel(ctx)
			b.runWatcher(watcherCtx)
		}
	}
}

func (b *Bundler) runWatcher(ctx context.Context) {
	w := watcher.NewWatcher(b.name, &watcher.Config{
		IgnorePaths: b.ignorePaths,
		WatchPaths:  b.watchPaths,
	}, b.log)

	go func() {
		err := w.Watch(ctx, func(paths []string) error {
			if b.onWatch != nil {
				b.onWatch(paths)
			}

			buildResult := b.buildContext.Rebuild()
			if b.onAfterBundle != nil {
				if err := b.onAfterBundle(b.buildErr(buildResult.Errors), true); err != nil {
					b.log.Error("Bundler build error on watch", zap.Error(err), zap.String("bundlerName", b.name))
				}
			}
			return nil
		})
		if err != nil {
			b.log.Error("Could not watch files",
				zap.String("watcherName", b.name),
				zap.Error(err),
			)
		}
	}()
}
