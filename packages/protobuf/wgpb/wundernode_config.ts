/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "wgpb";

export enum LogLevel {
  TRACE = 0,
  DEBUG = 1,
  INFO = 2,
  ERROR = 3,
  WARNING = 4,
  PANIC = 5,
  FATAL = 6,
}

export function logLevelFromJSON(object: any): LogLevel {
  switch (object) {
    case 0:
    case "TRACE":
      return LogLevel.TRACE;
    case 1:
    case "DEBUG":
      return LogLevel.DEBUG;
    case 2:
    case "INFO":
      return LogLevel.INFO;
    case 3:
    case "ERROR":
      return LogLevel.ERROR;
    case 4:
    case "WARNING":
      return LogLevel.WARNING;
    case 5:
    case "PANIC":
      return LogLevel.PANIC;
    case 6:
    case "FATAL":
      return LogLevel.FATAL;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum LogLevel");
  }
}

export function logLevelToJSON(object: LogLevel): string {
  switch (object) {
    case LogLevel.TRACE:
      return "TRACE";
    case LogLevel.DEBUG:
      return "DEBUG";
    case LogLevel.INFO:
      return "INFO";
    case LogLevel.ERROR:
      return "ERROR";
    case LogLevel.WARNING:
      return "WARNING";
    case LogLevel.PANIC:
      return "PANIC";
    case LogLevel.FATAL:
      return "FATAL";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum LogLevel");
  }
}

export enum AuthProviderKind {
  AuthProviderGithub = 0,
  AuthProviderOIDC = 1,
  AuthProviderAuth0 = 2,
}

export function authProviderKindFromJSON(object: any): AuthProviderKind {
  switch (object) {
    case 0:
    case "AuthProviderGithub":
      return AuthProviderKind.AuthProviderGithub;
    case 1:
    case "AuthProviderOIDC":
      return AuthProviderKind.AuthProviderOIDC;
    case 2:
    case "AuthProviderAuth0":
      return AuthProviderKind.AuthProviderAuth0;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum AuthProviderKind");
  }
}

export function authProviderKindToJSON(object: AuthProviderKind): string {
  switch (object) {
    case AuthProviderKind.AuthProviderGithub:
      return "AuthProviderGithub";
    case AuthProviderKind.AuthProviderOIDC:
      return "AuthProviderOIDC";
    case AuthProviderKind.AuthProviderAuth0:
      return "AuthProviderAuth0";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum AuthProviderKind");
  }
}

export enum OperationExecutionEngine {
  ENGINE_GRAPHQL = 0,
  ENGINE_NODEJS = 1,
}

export function operationExecutionEngineFromJSON(object: any): OperationExecutionEngine {
  switch (object) {
    case 0:
    case "ENGINE_GRAPHQL":
      return OperationExecutionEngine.ENGINE_GRAPHQL;
    case 1:
    case "ENGINE_NODEJS":
      return OperationExecutionEngine.ENGINE_NODEJS;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum OperationExecutionEngine");
  }
}

export function operationExecutionEngineToJSON(object: OperationExecutionEngine): string {
  switch (object) {
    case OperationExecutionEngine.ENGINE_GRAPHQL:
      return "ENGINE_GRAPHQL";
    case OperationExecutionEngine.ENGINE_NODEJS:
      return "ENGINE_NODEJS";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum OperationExecutionEngine");
  }
}

export enum PostResolveTransformationKind {
  GET_POST_RESOLVE_TRANSFORMATION = 0,
}

export function postResolveTransformationKindFromJSON(object: any): PostResolveTransformationKind {
  switch (object) {
    case 0:
    case "GET_POST_RESOLVE_TRANSFORMATION":
      return PostResolveTransformationKind.GET_POST_RESOLVE_TRANSFORMATION;
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum PostResolveTransformationKind",
      );
  }
}

export function postResolveTransformationKindToJSON(object: PostResolveTransformationKind): string {
  switch (object) {
    case PostResolveTransformationKind.GET_POST_RESOLVE_TRANSFORMATION:
      return "GET_POST_RESOLVE_TRANSFORMATION";
    default:
      throw new tsProtoGlobalThis.Error(
        "Unrecognized enum value " + object + " for enum PostResolveTransformationKind",
      );
  }
}

export enum InjectVariableKind {
  UUID = 0,
  DATE_TIME = 1,
  ENVIRONMENT_VARIABLE = 2,
}

export function injectVariableKindFromJSON(object: any): InjectVariableKind {
  switch (object) {
    case 0:
    case "UUID":
      return InjectVariableKind.UUID;
    case 1:
    case "DATE_TIME":
      return InjectVariableKind.DATE_TIME;
    case 2:
    case "ENVIRONMENT_VARIABLE":
      return InjectVariableKind.ENVIRONMENT_VARIABLE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum InjectVariableKind");
  }
}

export function injectVariableKindToJSON(object: InjectVariableKind): string {
  switch (object) {
    case InjectVariableKind.UUID:
      return "UUID";
    case InjectVariableKind.DATE_TIME:
      return "DATE_TIME";
    case InjectVariableKind.ENVIRONMENT_VARIABLE:
      return "ENVIRONMENT_VARIABLE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum InjectVariableKind");
  }
}

export enum HookType {
  HTTP_TRANSPORT = 0,
}

export function hookTypeFromJSON(object: any): HookType {
  switch (object) {
    case 0:
    case "HTTP_TRANSPORT":
      return HookType.HTTP_TRANSPORT;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum HookType");
  }
}

export function hookTypeToJSON(object: HookType): string {
  switch (object) {
    case HookType.HTTP_TRANSPORT:
      return "HTTP_TRANSPORT";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum HookType");
  }
}

export enum ClaimType {
  /** ISSUER - iss */
  ISSUER = 0,
  /** PROVIDER - alias for iss, deprecated */
  PROVIDER = 0,
  /** SUBJECT - sub */
  SUBJECT = 1,
  /** USERID - alias for sub */
  USERID = 1,
  /** NAME - name */
  NAME = 2,
  /** GIVEN_NAME - given_name */
  GIVEN_NAME = 3,
  /** FAMILY_NAME - family_name */
  FAMILY_NAME = 4,
  /** MIDDLE_NAME - middle_name */
  MIDDLE_NAME = 5,
  /** NICKNAME - nickname */
  NICKNAME = 6,
  /** PREFERRED_USERNAME - preferred_username */
  PREFERRED_USERNAME = 7,
  /** PROFILE - profile */
  PROFILE = 8,
  /** PICTURE - picture */
  PICTURE = 9,
  /** WEBSITE - website */
  WEBSITE = 10,
  /** EMAIL - email */
  EMAIL = 11,
  /** EMAIL_VERIFIED - email_verified */
  EMAIL_VERIFIED = 12,
  /** GENDER - gender */
  GENDER = 13,
  /** BIRTH_DATE - birthdate */
  BIRTH_DATE = 14,
  /** ZONE_INFO - zoneinfo */
  ZONE_INFO = 15,
  /** LOCALE - locale */
  LOCALE = 16,
  /** LOCATION - location */
  LOCATION = 17,
  CUSTOM = 999,
}

export function claimTypeFromJSON(object: any): ClaimType {
  switch (object) {
    case 0:
    case "ISSUER":
      return ClaimType.ISSUER;
    case 0:
    case "PROVIDER":
      return ClaimType.PROVIDER;
    case 1:
    case "SUBJECT":
      return ClaimType.SUBJECT;
    case 1:
    case "USERID":
      return ClaimType.USERID;
    case 2:
    case "NAME":
      return ClaimType.NAME;
    case 3:
    case "GIVEN_NAME":
      return ClaimType.GIVEN_NAME;
    case 4:
    case "FAMILY_NAME":
      return ClaimType.FAMILY_NAME;
    case 5:
    case "MIDDLE_NAME":
      return ClaimType.MIDDLE_NAME;
    case 6:
    case "NICKNAME":
      return ClaimType.NICKNAME;
    case 7:
    case "PREFERRED_USERNAME":
      return ClaimType.PREFERRED_USERNAME;
    case 8:
    case "PROFILE":
      return ClaimType.PROFILE;
    case 9:
    case "PICTURE":
      return ClaimType.PICTURE;
    case 10:
    case "WEBSITE":
      return ClaimType.WEBSITE;
    case 11:
    case "EMAIL":
      return ClaimType.EMAIL;
    case 12:
    case "EMAIL_VERIFIED":
      return ClaimType.EMAIL_VERIFIED;
    case 13:
    case "GENDER":
      return ClaimType.GENDER;
    case 14:
    case "BIRTH_DATE":
      return ClaimType.BIRTH_DATE;
    case 15:
    case "ZONE_INFO":
      return ClaimType.ZONE_INFO;
    case 16:
    case "LOCALE":
      return ClaimType.LOCALE;
    case 17:
    case "LOCATION":
      return ClaimType.LOCATION;
    case 999:
    case "CUSTOM":
      return ClaimType.CUSTOM;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ClaimType");
  }
}

export function claimTypeToJSON(object: ClaimType): string {
  switch (object) {
    case ClaimType.ISSUER:
      return "ISSUER";
    case ClaimType.PROVIDER:
      return "PROVIDER";
    case ClaimType.SUBJECT:
      return "SUBJECT";
    case ClaimType.USERID:
      return "USERID";
    case ClaimType.NAME:
      return "NAME";
    case ClaimType.GIVEN_NAME:
      return "GIVEN_NAME";
    case ClaimType.FAMILY_NAME:
      return "FAMILY_NAME";
    case ClaimType.MIDDLE_NAME:
      return "MIDDLE_NAME";
    case ClaimType.NICKNAME:
      return "NICKNAME";
    case ClaimType.PREFERRED_USERNAME:
      return "PREFERRED_USERNAME";
    case ClaimType.PROFILE:
      return "PROFILE";
    case ClaimType.PICTURE:
      return "PICTURE";
    case ClaimType.WEBSITE:
      return "WEBSITE";
    case ClaimType.EMAIL:
      return "EMAIL";
    case ClaimType.EMAIL_VERIFIED:
      return "EMAIL_VERIFIED";
    case ClaimType.GENDER:
      return "GENDER";
    case ClaimType.BIRTH_DATE:
      return "BIRTH_DATE";
    case ClaimType.ZONE_INFO:
      return "ZONE_INFO";
    case ClaimType.LOCALE:
      return "LOCALE";
    case ClaimType.LOCATION:
      return "LOCATION";
    case ClaimType.CUSTOM:
      return "CUSTOM";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ClaimType");
  }
}

export enum ValueType {
  STRING = 0,
  INT = 1,
  FLOAT = 2,
  BOOLEAN = 3,
  ANY = 4,
}

export function valueTypeFromJSON(object: any): ValueType {
  switch (object) {
    case 0:
    case "STRING":
      return ValueType.STRING;
    case 1:
    case "INT":
      return ValueType.INT;
    case 2:
    case "FLOAT":
      return ValueType.FLOAT;
    case 3:
    case "BOOLEAN":
      return ValueType.BOOLEAN;
    case 4:
    case "ANY":
      return ValueType.ANY;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ValueType");
  }
}

export function valueTypeToJSON(object: ValueType): string {
  switch (object) {
    case ValueType.STRING:
      return "STRING";
    case ValueType.INT:
      return "INT";
    case ValueType.FLOAT:
      return "FLOAT";
    case ValueType.BOOLEAN:
      return "BOOLEAN";
    case ValueType.ANY:
      return "ANY";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ValueType");
  }
}

export enum OperationType {
  INVALID = 0,
  QUERY = 1,
  MUTATION = 2,
  SUBSCRIPTION = 3,
}

export function operationTypeFromJSON(object: any): OperationType {
  switch (object) {
    case 0:
    case "INVALID":
      return OperationType.INVALID;
    case 1:
    case "QUERY":
      return OperationType.QUERY;
    case 2:
    case "MUTATION":
      return OperationType.MUTATION;
    case 3:
    case "SUBSCRIPTION":
      return OperationType.SUBSCRIPTION;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum OperationType");
  }
}

export function operationTypeToJSON(object: OperationType): string {
  switch (object) {
    case OperationType.INVALID:
      return "INVALID";
    case OperationType.QUERY:
      return "QUERY";
    case OperationType.MUTATION:
      return "MUTATION";
    case OperationType.SUBSCRIPTION:
      return "SUBSCRIPTION";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum OperationType");
  }
}

export enum DataSourceKind {
  STATIC = 0,
  REST = 1,
  GRAPHQL = 2,
  POSTGRESQL = 3,
  MYSQL = 4,
  SQLSERVER = 5,
  MONGODB = 6,
  SQLITE = 7,
  PRISMA = 8,
  NATSKV = 9,
}

export function dataSourceKindFromJSON(object: any): DataSourceKind {
  switch (object) {
    case 0:
    case "STATIC":
      return DataSourceKind.STATIC;
    case 1:
    case "REST":
      return DataSourceKind.REST;
    case 2:
    case "GRAPHQL":
      return DataSourceKind.GRAPHQL;
    case 3:
    case "POSTGRESQL":
      return DataSourceKind.POSTGRESQL;
    case 4:
    case "MYSQL":
      return DataSourceKind.MYSQL;
    case 5:
    case "SQLSERVER":
      return DataSourceKind.SQLSERVER;
    case 6:
    case "MONGODB":
      return DataSourceKind.MONGODB;
    case 7:
    case "SQLITE":
      return DataSourceKind.SQLITE;
    case 8:
    case "PRISMA":
      return DataSourceKind.PRISMA;
    case 9:
    case "NATSKV":
      return DataSourceKind.NATSKV;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DataSourceKind");
  }
}

export function dataSourceKindToJSON(object: DataSourceKind): string {
  switch (object) {
    case DataSourceKind.STATIC:
      return "STATIC";
    case DataSourceKind.REST:
      return "REST";
    case DataSourceKind.GRAPHQL:
      return "GRAPHQL";
    case DataSourceKind.POSTGRESQL:
      return "POSTGRESQL";
    case DataSourceKind.MYSQL:
      return "MYSQL";
    case DataSourceKind.SQLSERVER:
      return "SQLSERVER";
    case DataSourceKind.MONGODB:
      return "MONGODB";
    case DataSourceKind.SQLITE:
      return "SQLITE";
    case DataSourceKind.PRISMA:
      return "PRISMA";
    case DataSourceKind.NATSKV:
      return "NATSKV";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum DataSourceKind");
  }
}

export enum NatsKvOperation {
  NATSKV_GET = 0,
  NATSKV_GETREVISION = 1,
  NATSKV_KEYS = 2,
  NATSKV_HISTORY = 3,
  NATSKV_PUT = 4,
  NATSKV_CREATE = 5,
  NATSKV_UPDATE = 6,
  NATSKV_DELETE = 7,
  NATSKV_PURGE = 8,
  NATSKV_WATCH = 9,
  NATSKV_WATCHALL = 10,
}

export function natsKvOperationFromJSON(object: any): NatsKvOperation {
  switch (object) {
    case 0:
    case "NATSKV_GET":
      return NatsKvOperation.NATSKV_GET;
    case 1:
    case "NATSKV_GETREVISION":
      return NatsKvOperation.NATSKV_GETREVISION;
    case 2:
    case "NATSKV_KEYS":
      return NatsKvOperation.NATSKV_KEYS;
    case 3:
    case "NATSKV_HISTORY":
      return NatsKvOperation.NATSKV_HISTORY;
    case 4:
    case "NATSKV_PUT":
      return NatsKvOperation.NATSKV_PUT;
    case 5:
    case "NATSKV_CREATE":
      return NatsKvOperation.NATSKV_CREATE;
    case 6:
    case "NATSKV_UPDATE":
      return NatsKvOperation.NATSKV_UPDATE;
    case 7:
    case "NATSKV_DELETE":
      return NatsKvOperation.NATSKV_DELETE;
    case 8:
    case "NATSKV_PURGE":
      return NatsKvOperation.NATSKV_PURGE;
    case 9:
    case "NATSKV_WATCH":
      return NatsKvOperation.NATSKV_WATCH;
    case 10:
    case "NATSKV_WATCHALL":
      return NatsKvOperation.NATSKV_WATCHALL;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum NatsKvOperation");
  }
}

export function natsKvOperationToJSON(object: NatsKvOperation): string {
  switch (object) {
    case NatsKvOperation.NATSKV_GET:
      return "NATSKV_GET";
    case NatsKvOperation.NATSKV_GETREVISION:
      return "NATSKV_GETREVISION";
    case NatsKvOperation.NATSKV_KEYS:
      return "NATSKV_KEYS";
    case NatsKvOperation.NATSKV_HISTORY:
      return "NATSKV_HISTORY";
    case NatsKvOperation.NATSKV_PUT:
      return "NATSKV_PUT";
    case NatsKvOperation.NATSKV_CREATE:
      return "NATSKV_CREATE";
    case NatsKvOperation.NATSKV_UPDATE:
      return "NATSKV_UPDATE";
    case NatsKvOperation.NATSKV_DELETE:
      return "NATSKV_DELETE";
    case NatsKvOperation.NATSKV_PURGE:
      return "NATSKV_PURGE";
    case NatsKvOperation.NATSKV_WATCH:
      return "NATSKV_WATCH";
    case NatsKvOperation.NATSKV_WATCHALL:
      return "NATSKV_WATCHALL";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum NatsKvOperation");
  }
}

export enum UpstreamAuthenticationKind {
  UpstreamAuthenticationJWT = 0,
  UpstreamAuthenticationJWTWithAccessTokenExchange = 1,
}

export function upstreamAuthenticationKindFromJSON(object: any): UpstreamAuthenticationKind {
  switch (object) {
    case 0:
    case "UpstreamAuthenticationJWT":
      return UpstreamAuthenticationKind.UpstreamAuthenticationJWT;
    case 1:
    case "UpstreamAuthenticationJWTWithAccessTokenExchange":
      return UpstreamAuthenticationKind.UpstreamAuthenticationJWTWithAccessTokenExchange;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum UpstreamAuthenticationKind");
  }
}

export function upstreamAuthenticationKindToJSON(object: UpstreamAuthenticationKind): string {
  switch (object) {
    case UpstreamAuthenticationKind.UpstreamAuthenticationJWT:
      return "UpstreamAuthenticationJWT";
    case UpstreamAuthenticationKind.UpstreamAuthenticationJWTWithAccessTokenExchange:
      return "UpstreamAuthenticationJWTWithAccessTokenExchange";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum UpstreamAuthenticationKind");
  }
}

export enum SigningMethod {
  SigningMethodHS256 = 0,
}

export function signingMethodFromJSON(object: any): SigningMethod {
  switch (object) {
    case 0:
    case "SigningMethodHS256":
      return SigningMethod.SigningMethodHS256;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SigningMethod");
  }
}

export function signingMethodToJSON(object: SigningMethod): string {
  switch (object) {
    case SigningMethod.SigningMethodHS256:
      return "SigningMethodHS256";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum SigningMethod");
  }
}

export enum HTTPMethod {
  GET = 0,
  POST = 1,
  PUT = 2,
  DELETE = 3,
  OPTIONS = 4,
}

export function hTTPMethodFromJSON(object: any): HTTPMethod {
  switch (object) {
    case 0:
    case "GET":
      return HTTPMethod.GET;
    case 1:
    case "POST":
      return HTTPMethod.POST;
    case 2:
    case "PUT":
      return HTTPMethod.PUT;
    case 3:
    case "DELETE":
      return HTTPMethod.DELETE;
    case 4:
    case "OPTIONS":
      return HTTPMethod.OPTIONS;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum HTTPMethod");
  }
}

export function hTTPMethodToJSON(object: HTTPMethod): string {
  switch (object) {
    case HTTPMethod.GET:
      return "GET";
    case HTTPMethod.POST:
      return "POST";
    case HTTPMethod.PUT:
      return "PUT";
    case HTTPMethod.DELETE:
      return "DELETE";
    case HTTPMethod.OPTIONS:
      return "OPTIONS";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum HTTPMethod");
  }
}

export enum ArgumentSource {
  OBJECT_FIELD = 0,
  FIELD_ARGUMENT = 1,
}

export function argumentSourceFromJSON(object: any): ArgumentSource {
  switch (object) {
    case 0:
    case "OBJECT_FIELD":
      return ArgumentSource.OBJECT_FIELD;
    case 1:
    case "FIELD_ARGUMENT":
      return ArgumentSource.FIELD_ARGUMENT;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ArgumentSource");
  }
}

export function argumentSourceToJSON(object: ArgumentSource): string {
  switch (object) {
    case ArgumentSource.OBJECT_FIELD:
      return "OBJECT_FIELD";
    case ArgumentSource.FIELD_ARGUMENT:
      return "FIELD_ARGUMENT";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ArgumentSource");
  }
}

export enum ArgumentRenderConfiguration {
  RENDER_ARGUMENT_DEFAULT = 0,
  RENDER_ARGUMENT_AS_GRAPHQL_VALUE = 1,
  RENDER_ARGUMENT_AS_ARRAY_CSV = 2,
}

export function argumentRenderConfigurationFromJSON(object: any): ArgumentRenderConfiguration {
  switch (object) {
    case 0:
    case "RENDER_ARGUMENT_DEFAULT":
      return ArgumentRenderConfiguration.RENDER_ARGUMENT_DEFAULT;
    case 1:
    case "RENDER_ARGUMENT_AS_GRAPHQL_VALUE":
      return ArgumentRenderConfiguration.RENDER_ARGUMENT_AS_GRAPHQL_VALUE;
    case 2:
    case "RENDER_ARGUMENT_AS_ARRAY_CSV":
      return ArgumentRenderConfiguration.RENDER_ARGUMENT_AS_ARRAY_CSV;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ArgumentRenderConfiguration");
  }
}

export function argumentRenderConfigurationToJSON(object: ArgumentRenderConfiguration): string {
  switch (object) {
    case ArgumentRenderConfiguration.RENDER_ARGUMENT_DEFAULT:
      return "RENDER_ARGUMENT_DEFAULT";
    case ArgumentRenderConfiguration.RENDER_ARGUMENT_AS_GRAPHQL_VALUE:
      return "RENDER_ARGUMENT_AS_GRAPHQL_VALUE";
    case ArgumentRenderConfiguration.RENDER_ARGUMENT_AS_ARRAY_CSV:
      return "RENDER_ARGUMENT_AS_ARRAY_CSV";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ArgumentRenderConfiguration");
  }
}

export enum WebhookVerifierKind {
  HMAC_SHA256 = 0,
}

export function webhookVerifierKindFromJSON(object: any): WebhookVerifierKind {
  switch (object) {
    case 0:
    case "HMAC_SHA256":
      return WebhookVerifierKind.HMAC_SHA256;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum WebhookVerifierKind");
  }
}

export function webhookVerifierKindToJSON(object: WebhookVerifierKind): string {
  switch (object) {
    case WebhookVerifierKind.HMAC_SHA256:
      return "HMAC_SHA256";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum WebhookVerifierKind");
  }
}

export enum ConfigurationVariableKind {
  STATIC_CONFIGURATION_VARIABLE = 0,
  ENV_CONFIGURATION_VARIABLE = 1,
  PLACEHOLDER_CONFIGURATION_VARIABLE = 2,
}

export function configurationVariableKindFromJSON(object: any): ConfigurationVariableKind {
  switch (object) {
    case 0:
    case "STATIC_CONFIGURATION_VARIABLE":
      return ConfigurationVariableKind.STATIC_CONFIGURATION_VARIABLE;
    case 1:
    case "ENV_CONFIGURATION_VARIABLE":
      return ConfigurationVariableKind.ENV_CONFIGURATION_VARIABLE;
    case 2:
    case "PLACEHOLDER_CONFIGURATION_VARIABLE":
      return ConfigurationVariableKind.PLACEHOLDER_CONFIGURATION_VARIABLE;
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ConfigurationVariableKind");
  }
}

export function configurationVariableKindToJSON(object: ConfigurationVariableKind): string {
  switch (object) {
    case ConfigurationVariableKind.STATIC_CONFIGURATION_VARIABLE:
      return "STATIC_CONFIGURATION_VARIABLE";
    case ConfigurationVariableKind.ENV_CONFIGURATION_VARIABLE:
      return "ENV_CONFIGURATION_VARIABLE";
    case ConfigurationVariableKind.PLACEHOLDER_CONFIGURATION_VARIABLE:
      return "PLACEHOLDER_CONFIGURATION_VARIABLE";
    default:
      throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum ConfigurationVariableKind");
  }
}

export interface ApiAuthenticationConfig {
  cookieBased: CookieBasedAuthentication | undefined;
  hooks: ApiAuthenticationHooks | undefined;
  jwksBased: JwksBasedAuthentication | undefined;
  publicClaims: string[];
}

export interface JwksBasedAuthentication {
  providers: JwksAuthProvider[];
}

export interface JwksAuthProvider {
  jwksUrl: ConfigurationVariable | undefined;
  jwksJson: ConfigurationVariable | undefined;
  userInfoEndpoint: ConfigurationVariable | undefined;
  userInfoCacheTtlSeconds: number;
}

export interface ApiAuthenticationHooks {
  postAuthentication: boolean;
  mutatingPostAuthentication: boolean;
  revalidateAuthentication: boolean;
  postLogout: boolean;
}

export interface CookieBasedAuthentication {
  providers: AuthProvider[];
  authorizedRedirectUris: ConfigurationVariable[];
  authorizedRedirectUriRegexes: ConfigurationVariable[];
  hashKey: ConfigurationVariable | undefined;
  blockKey: ConfigurationVariable | undefined;
  csrfSecret: ConfigurationVariable | undefined;
  timeoutSeconds: ConfigurationVariable | undefined;
  maxLength: ConfigurationVariable | undefined;
}

export interface AuthProvider {
  id: string;
  kind: AuthProviderKind;
  githubConfig: GithubAuthProviderConfig | undefined;
  oidcConfig: OpenIDConnectAuthProviderConfig | undefined;
}

export interface GithubAuthProviderConfig {
  clientId: ConfigurationVariable | undefined;
  clientSecret: ConfigurationVariable | undefined;
}

export interface OpenIDConnectQueryParameter {
  name: ConfigurationVariable | undefined;
  value: ConfigurationVariable | undefined;
}

export interface OpenIDConnectAuthProviderConfig {
  issuer: ConfigurationVariable | undefined;
  clientId: ConfigurationVariable | undefined;
  clientSecret: ConfigurationVariable | undefined;
  queryParameters: OpenIDConnectQueryParameter[];
}

export interface Operation {
  name: string;
  content: string;
  operationType: OperationType;
  variablesSchema: string;
  responseSchema: string;
  cacheConfig?: OperationCacheConfig | undefined;
  authenticationConfig: OperationAuthenticationConfig | undefined;
  liveQueryConfig: OperationLiveQueryConfig | undefined;
  authorizationConfig: OperationAuthorizationConfig | undefined;
  hooksConfiguration: OperationHooksConfiguration | undefined;
  variablesConfiguration:
    | OperationVariablesConfiguration
    | undefined;
  /**
   * internal operations are only accessible internally, e.g. to hooks
   * they cannot be reached from the public surface of the API
   */
  internal: boolean;
  interpolationVariablesSchema: string;
  postResolveTransformations: PostResolveTransformation[];
  engine: OperationExecutionEngine;
  path: string;
}

export interface PostResolveTransformation {
  kind: PostResolveTransformationKind;
  depth: number;
  get: PostResolveGetTransformation | undefined;
}

export interface PostResolveGetTransformation {
  from: string[];
  to: string[];
}

export interface OperationVariablesConfiguration {
  injectVariables: VariableInjectionConfiguration[];
}

export interface VariableInjectionConfiguration {
  variablePathComponents: string[];
  variableKind: InjectVariableKind;
  dateFormat: string;
  environmentVariableName: string;
}

export interface GraphQLDataSourceHooksConfiguration {
  onWSTransportConnectionInit: boolean;
}

export interface HookMatcher {
  operationType?: OperationType | undefined;
  datasources: string[];
}

export interface Hook {
  id: string;
  type: HookType;
  matcher: HookMatcher | undefined;
}

export interface OperationHooksConfiguration {
  preResolve: boolean;
  postResolve: boolean;
  mutatingPreResolve: boolean;
  mutatingPostResolve: boolean;
  mockResolve: MockResolveHookConfiguration | undefined;
  httpTransportOnRequest: boolean;
  httpTransportOnResponse: boolean;
  customResolve: boolean;
}

export interface MockResolveHookConfiguration {
  enable: boolean;
  subscriptionPollingIntervalMillis: number;
}

export interface OperationAuthorizationConfig {
  claims: ClaimConfig[];
  roleConfig: OperationRoleConfig | undefined;
}

export interface OperationRoleConfig {
  /** the user must match all roles */
  requireMatchAll: string[];
  /** the user must match at least one of the roles */
  requireMatchAny: string[];
  /** the user must not match all of the roles */
  denyMatchAll: string[];
  /** the user must not match any of the roles */
  denyMatchAny: string[];
}

export interface CustomClaim {
  name: string;
  jsonPathComponents: string[];
  type: ValueType;
  required: boolean;
}

export interface ClaimConfig {
  variablePathComponents: string[];
  claimType: ClaimType;
  /** Available iff claimType == CUSTOM */
  custom?: CustomClaim | undefined;
}

export interface OperationLiveQueryConfig {
  enable: boolean;
  pollingIntervalSeconds: number;
}

export interface OperationAuthenticationConfig {
  authRequired: boolean;
}

export interface OperationCacheConfig {
  enable?: boolean | undefined;
  maxAge?: number | undefined;
  public?: boolean | undefined;
  staleWhileRevalidate?: number | undefined;
  mustRevalidate?: boolean | undefined;
}

export interface EngineConfiguration {
  defaultFlushInterval: number;
  datasourceConfigurations: DataSourceConfiguration[];
  fieldConfigurations: FieldConfiguration[];
  graphqlSchema: string;
  typeConfigurations: TypeConfiguration[];
  stringStorage: { [key: string]: string };
}

export interface EngineConfiguration_StringStorageEntry {
  key: string;
  value: string;
}

export interface InternedString {
  /** key to index into EngineConfiguration.stringStorage */
  key: string;
}

export interface DataSourceConfiguration {
  kind: DataSourceKind;
  rootNodes: TypeField[];
  childNodes: TypeField[];
  overrideFieldPathFromAlias: boolean;
  customRest: DataSourceCustomREST | undefined;
  customGraphql: DataSourceCustomGraphQL | undefined;
  customStatic: DataSourceCustomStatic | undefined;
  customDatabase: DataSourceCustomDatabase | undefined;
  directives: DirectiveConfiguration[];
  requestTimeoutSeconds: number;
  id: string;
  customNatsKv: DataSourceCustomNatsKv | undefined;
}

export interface DirectiveConfiguration {
  directiveName: string;
  renameTo: string;
}

export interface DataSourceCustomNatsKv {
  serverURL: string;
  bucketName: string;
  operation: NatsKvOperation;
  history: number;
  token: string;
  bucketPrefix: ConfigurationVariable | undefined;
}

export interface DataSourceCustomREST {
  fetch: FetchConfiguration | undefined;
  subscription: RESTSubscriptionConfiguration | undefined;
  statusCodeTypeMappings: StatusCodeTypeMapping[];
  defaultTypeName: string;
}

export interface StatusCodeTypeMapping {
  statusCode: number;
  typeName: string;
  injectStatusCodeIntoBody: boolean;
}

export interface DataSourceCustomGraphQL {
  fetch: FetchConfiguration | undefined;
  subscription: GraphQLSubscriptionConfiguration | undefined;
  federation: GraphQLFederationConfiguration | undefined;
  upstreamSchema: InternedString | undefined;
  hooksConfiguration: GraphQLDataSourceHooksConfiguration | undefined;
  customScalarTypeFields: SingleTypeField[];
}

export interface DataSourceCustomDatabase {
  databaseURL: ConfigurationVariable | undefined;
  prismaSchema: InternedString | undefined;
  graphqlSchema:
    | InternedString
    | undefined;
  /** closeTimeoutSeconds define that the database connection will be closed after the given amount of seconds of inactivity */
  closeTimeoutSeconds: number;
  jsonTypeFields: SingleTypeField[];
  jsonInputVariables: string[];
}

export interface GraphQLFederationConfiguration {
  enabled: boolean;
  serviceSdl: string;
}

export interface DataSourceCustomStatic {
  data: ConfigurationVariable | undefined;
}

export interface GraphQLSubscriptionConfiguration {
  enabled: boolean;
  url: ConfigurationVariable | undefined;
  useSSE: boolean;
}

export interface FetchConfiguration {
  /**
   * You should either configure url OR a combination of baseURL and path
   * If url resolves to a non empty string, it takes precedence over baseURL and path
   * If url resolves to an empty string, the url will be configured as "{{baseURL}}{{path}}"
   */
  url: ConfigurationVariable | undefined;
  method: HTTPMethod;
  header: { [key: string]: HTTPHeader };
  body: ConfigurationVariable | undefined;
  query: URLQueryConfiguration[];
  upstreamAuthentication:
    | UpstreamAuthentication
    | undefined;
  /**
   * urlEncodeBody defines whether the body should be URL encoded or not
   * by default, the body will be JSON encoded
   * setting urlEncodeBody to true will render the body empty,
   * the Header Content-Type will be set to application/x-www-form-urlencoded,
   * and the body will be URL encoded and set as the URL Query String
   */
  urlEncodeBody: boolean;
  mTLS: MTLSConfiguration | undefined;
  baseUrl: ConfigurationVariable | undefined;
  path: ConfigurationVariable | undefined;
  httpProxyUrl?: ConfigurationVariable | undefined;
}

export interface FetchConfiguration_HeaderEntry {
  key: string;
  value: HTTPHeader | undefined;
}

export interface MTLSConfiguration {
  key: ConfigurationVariable | undefined;
  cert: ConfigurationVariable | undefined;
  insecureSkipVerify: boolean;
}

export interface UpstreamAuthentication {
  kind: UpstreamAuthenticationKind;
  jwtConfig: JwtUpstreamAuthenticationConfig | undefined;
  jwtWithAccessTokenExchangeConfig: JwtUpstreamAuthenticationWithAccessTokenExchange | undefined;
}

export interface JwtUpstreamAuthenticationConfig {
  secret: ConfigurationVariable | undefined;
  signingMethod: SigningMethod;
}

export interface JwtUpstreamAuthenticationWithAccessTokenExchange {
  secret: ConfigurationVariable | undefined;
  signingMethod: SigningMethod;
  accessTokenExchangeEndpoint: ConfigurationVariable | undefined;
}

export interface RESTSubscriptionConfiguration {
  enabled: boolean;
  pollingIntervalMillis: number;
  skipPublishSameResponse: boolean;
}

export interface URLQueryConfiguration {
  name: string;
  value: string;
}

export interface HTTPHeader {
  values: ConfigurationVariable[];
}

export interface TypeConfiguration {
  typeName: string;
  renameTo: string;
}

export interface FieldConfiguration {
  typeName: string;
  fieldName: string;
  disableDefaultFieldMapping: boolean;
  path: string[];
  argumentsConfiguration: ArgumentConfiguration[];
  requiresFields: string[];
  unescapeResponseJson: boolean;
}

export interface TypeField {
  typeName: string;
  fieldNames: string[];
}

export interface SingleTypeField {
  typeName: string;
  fieldName: string;
}

export interface ArgumentConfiguration {
  name: string;
  sourceType: ArgumentSource;
  sourcePath: string[];
  renderConfiguration: ArgumentRenderConfiguration;
  renameTypeTo: string;
}

export interface WunderGraphConfiguration {
  api: UserDefinedApi | undefined;
  apiId: string;
  environmentIds: string[];
  dangerouslyEnableGraphQLEndpoint: boolean;
  configHash: string;
  enabledFeatures:
    | EnabledFeatures
    | undefined;
  /** New-style hooks */
  hooks: Hook[];
}

/**
 * Used for reporting enabled features from the TS side
 * to the Go side.
 */
export interface EnabledFeatures {
  apiCount: number;
  schemaExtension: boolean;
  customJSONScalars: boolean;
  customIntScalars: boolean;
  customFloatScalars: boolean;
}

export interface S3UploadProfileHooksConfiguration {
  preUpload: boolean;
  postUpload: boolean;
}

export interface S3UploadProfile {
  requireAuthentication: boolean;
  maxAllowedUploadSizeBytes: number;
  maxAllowedFiles: number;
  allowedMimeTypes: string[];
  allowedFileExtensions: string[];
  metadataJSONSchema: string;
  hooks: S3UploadProfileHooksConfiguration | undefined;
}

export interface S3UploadConfiguration {
  name: string;
  endpoint: ConfigurationVariable | undefined;
  accessKeyID: ConfigurationVariable | undefined;
  secretAccessKey: ConfigurationVariable | undefined;
  bucketName: ConfigurationVariable | undefined;
  bucketLocation: ConfigurationVariable | undefined;
  useSSL: boolean;
  uploadProfiles: { [key: string]: S3UploadProfile };
}

export interface S3UploadConfiguration_UploadProfilesEntry {
  key: string;
  value: S3UploadProfile | undefined;
}

export interface UserDefinedApi {
  engineConfiguration: EngineConfiguration | undefined;
  enableGraphqlEndpoint: boolean;
  operations: Operation[];
  invalidOperationNames: string[];
  corsConfiguration: CorsConfiguration | undefined;
  authenticationConfig: ApiAuthenticationConfig | undefined;
  s3UploadConfiguration: S3UploadConfiguration[];
  allowedHostNames: ConfigurationVariable[];
  webhooks: WebhookConfiguration[];
  serverOptions: ServerOptions | undefined;
  nodeOptions: NodeOptions | undefined;
  experimentalConfig: ExperimentalConfiguration | undefined;
}

export interface ExperimentalConfiguration {
  orm: boolean;
}

export interface ListenerOptions {
  host: ConfigurationVariable | undefined;
  port: ConfigurationVariable | undefined;
}

export interface InternalListenerOptions {
  port: ConfigurationVariable | undefined;
}

export interface NodeLogging {
  level: ConfigurationVariable | undefined;
}

export interface PrometheusOptions {
  enabled: ConfigurationVariable | undefined;
  port: ConfigurationVariable | undefined;
}

export interface NodeOptions {
  nodeUrl: ConfigurationVariable | undefined;
  publicNodeUrl: ConfigurationVariable | undefined;
  listen: ListenerOptions | undefined;
  logger: NodeLogging | undefined;
  defaultRequestTimeoutSeconds: number;
  listenInternal: InternalListenerOptions | undefined;
  nodeInternalUrl: ConfigurationVariable | undefined;
  defaultHttpProxyUrl: ConfigurationVariable | undefined;
  openTelemetry: TelemetryOptions | undefined;
  prometheus: PrometheusOptions | undefined;
}

export interface TelemetryOptions {
  enabled: ConfigurationVariable | undefined;
  exporterHttpEndpoint: ConfigurationVariable | undefined;
  sampler: ConfigurationVariable | undefined;
  authToken: ConfigurationVariable | undefined;
}

export interface ServerLogging {
  level: ConfigurationVariable | undefined;
}

export interface ServerOptions {
  serverUrl: ConfigurationVariable | undefined;
  listen: ListenerOptions | undefined;
  logger: ServerLogging | undefined;
}

export interface WebhookConfiguration {
  /** Name of the webhook. */
  name: string;
  /**
   * The path to the bundled file.
   * The path is relative to the bundle directory.
   */
  filePath: string;
  verifier: WebhookVerifier | undefined;
}

export interface WebhookVerifier {
  kind: WebhookVerifierKind;
  secret: ConfigurationVariable | undefined;
  signatureHeader: string;
  signatureHeaderPrefix: string;
}

export interface CorsConfiguration {
  /**
   * AllowedOrigins is a list of origins a cross-domain request can be executed from.
   * If the special "*" value is present in the list, all origins will be allowed.
   * An origin may contain a wildcard (*) to replace 0 or more characters
   * (i.e.: http://*.domain.com). Usage of wildcards implies a small performance penalty.
   * Only one wildcard can be used per origin.
   * Default value is ["*"]
   */
  allowedOrigins: ConfigurationVariable[];
  /**
   * AllowedMethods is a list of methods the client is allowed to use with
   * cross-domain requests. Default value is simple methods (HEAD, GET and POST).
   */
  allowedMethods: string[];
  /**
   * AllowedHeaders is list of non simple headers the client is allowed to use with
   * cross-domain requests.
   * If the special "*" value is present in the list, all headers will be allowed.
   * Default value is [] but "Origin" is always appended to the list.
   */
  allowedHeaders: string[];
  /**
   * ExposedHeaders indicates which headers are safe to expose to the API of a CORS
   * API specification
   */
  exposedHeaders: string[];
  /**
   * MaxAge indicates how long (in seconds) the results of a preflight request
   * can be cached
   */
  maxAge: number;
  /**
   * AllowCredentials indicates whether the request can include user credentials like
   * cookies, HTTP authentication or client side SSL certificates.
   */
  allowCredentials: boolean;
}

export interface ConfigurationVariable {
  kind: ConfigurationVariableKind;
  staticVariableContent: string;
  environmentVariableName: string;
  environmentVariableDefaultValue: string;
  placeholderVariableName: string;
}

export interface BuildInfo {
  success: boolean;
  sdk: BuildInfoVersion | undefined;
  wunderctl: BuildInfoVersion | undefined;
  node: BuildInfoVersion | undefined;
  os: BuildInfoOS | undefined;
  stats: BuildInfoStats | undefined;
}

export interface BuildInfoVersion {
  version: string;
}

export interface BuildInfoOS {
  type: string;
  platform: string;
  arch: string;
  version: string;
  release: string;
}

export interface BuildInfoStats {
  totalApis: number;
  totalOperations: number;
  totalWebhooks: number;
  hasAuthenticationProvider: boolean;
  hasUploadProvider: boolean;
}

function createBaseApiAuthenticationConfig(): ApiAuthenticationConfig {
  return { cookieBased: undefined, hooks: undefined, jwksBased: undefined, publicClaims: [] };
}

export const ApiAuthenticationConfig = {
  encode(message: ApiAuthenticationConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cookieBased !== undefined) {
      CookieBasedAuthentication.encode(message.cookieBased, writer.uint32(10).fork()).ldelim();
    }
    if (message.hooks !== undefined) {
      ApiAuthenticationHooks.encode(message.hooks, writer.uint32(18).fork()).ldelim();
    }
    if (message.jwksBased !== undefined) {
      JwksBasedAuthentication.encode(message.jwksBased, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.publicClaims) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApiAuthenticationConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiAuthenticationConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cookieBased = CookieBasedAuthentication.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.hooks = ApiAuthenticationHooks.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.jwksBased = JwksBasedAuthentication.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.publicClaims.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApiAuthenticationConfig {
    return {
      cookieBased: isSet(object.cookieBased) ? CookieBasedAuthentication.fromJSON(object.cookieBased) : undefined,
      hooks: isSet(object.hooks) ? ApiAuthenticationHooks.fromJSON(object.hooks) : undefined,
      jwksBased: isSet(object.jwksBased) ? JwksBasedAuthentication.fromJSON(object.jwksBased) : undefined,
      publicClaims: Array.isArray(object?.publicClaims) ? object.publicClaims.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: ApiAuthenticationConfig): unknown {
    const obj: any = {};
    if (message.cookieBased !== undefined) {
      obj.cookieBased = CookieBasedAuthentication.toJSON(message.cookieBased);
    }
    if (message.hooks !== undefined) {
      obj.hooks = ApiAuthenticationHooks.toJSON(message.hooks);
    }
    if (message.jwksBased !== undefined) {
      obj.jwksBased = JwksBasedAuthentication.toJSON(message.jwksBased);
    }
    if (message.publicClaims?.length) {
      obj.publicClaims = message.publicClaims;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ApiAuthenticationConfig>, I>>(base?: I): ApiAuthenticationConfig {
    return ApiAuthenticationConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ApiAuthenticationConfig>, I>>(object: I): ApiAuthenticationConfig {
    const message = createBaseApiAuthenticationConfig();
    message.cookieBased = (object.cookieBased !== undefined && object.cookieBased !== null)
      ? CookieBasedAuthentication.fromPartial(object.cookieBased)
      : undefined;
    message.hooks = (object.hooks !== undefined && object.hooks !== null)
      ? ApiAuthenticationHooks.fromPartial(object.hooks)
      : undefined;
    message.jwksBased = (object.jwksBased !== undefined && object.jwksBased !== null)
      ? JwksBasedAuthentication.fromPartial(object.jwksBased)
      : undefined;
    message.publicClaims = object.publicClaims?.map((e) => e) || [];
    return message;
  },
};

function createBaseJwksBasedAuthentication(): JwksBasedAuthentication {
  return { providers: [] };
}

export const JwksBasedAuthentication = {
  encode(message: JwksBasedAuthentication, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providers) {
      JwksAuthProvider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JwksBasedAuthentication {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJwksBasedAuthentication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.providers.push(JwksAuthProvider.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JwksBasedAuthentication {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => JwksAuthProvider.fromJSON(e)) : [],
    };
  },

  toJSON(message: JwksBasedAuthentication): unknown {
    const obj: any = {};
    if (message.providers?.length) {
      obj.providers = message.providers.map((e) => JwksAuthProvider.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JwksBasedAuthentication>, I>>(base?: I): JwksBasedAuthentication {
    return JwksBasedAuthentication.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<JwksBasedAuthentication>, I>>(object: I): JwksBasedAuthentication {
    const message = createBaseJwksBasedAuthentication();
    message.providers = object.providers?.map((e) => JwksAuthProvider.fromPartial(e)) || [];
    return message;
  },
};

function createBaseJwksAuthProvider(): JwksAuthProvider {
  return { jwksUrl: undefined, jwksJson: undefined, userInfoEndpoint: undefined, userInfoCacheTtlSeconds: 0 };
}

export const JwksAuthProvider = {
  encode(message: JwksAuthProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.jwksUrl !== undefined) {
      ConfigurationVariable.encode(message.jwksUrl, writer.uint32(10).fork()).ldelim();
    }
    if (message.jwksJson !== undefined) {
      ConfigurationVariable.encode(message.jwksJson, writer.uint32(18).fork()).ldelim();
    }
    if (message.userInfoEndpoint !== undefined) {
      ConfigurationVariable.encode(message.userInfoEndpoint, writer.uint32(26).fork()).ldelim();
    }
    if (message.userInfoCacheTtlSeconds !== 0) {
      writer.uint32(32).int64(message.userInfoCacheTtlSeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JwksAuthProvider {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJwksAuthProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.jwksUrl = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.jwksJson = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.userInfoEndpoint = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.userInfoCacheTtlSeconds = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JwksAuthProvider {
    return {
      jwksUrl: isSet(object.jwksUrl) ? ConfigurationVariable.fromJSON(object.jwksUrl) : undefined,
      jwksJson: isSet(object.jwksJson) ? ConfigurationVariable.fromJSON(object.jwksJson) : undefined,
      userInfoEndpoint: isSet(object.userInfoEndpoint)
        ? ConfigurationVariable.fromJSON(object.userInfoEndpoint)
        : undefined,
      userInfoCacheTtlSeconds: isSet(object.userInfoCacheTtlSeconds) ? Number(object.userInfoCacheTtlSeconds) : 0,
    };
  },

  toJSON(message: JwksAuthProvider): unknown {
    const obj: any = {};
    if (message.jwksUrl !== undefined) {
      obj.jwksUrl = ConfigurationVariable.toJSON(message.jwksUrl);
    }
    if (message.jwksJson !== undefined) {
      obj.jwksJson = ConfigurationVariable.toJSON(message.jwksJson);
    }
    if (message.userInfoEndpoint !== undefined) {
      obj.userInfoEndpoint = ConfigurationVariable.toJSON(message.userInfoEndpoint);
    }
    if (message.userInfoCacheTtlSeconds !== 0) {
      obj.userInfoCacheTtlSeconds = Math.round(message.userInfoCacheTtlSeconds);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JwksAuthProvider>, I>>(base?: I): JwksAuthProvider {
    return JwksAuthProvider.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<JwksAuthProvider>, I>>(object: I): JwksAuthProvider {
    const message = createBaseJwksAuthProvider();
    message.jwksUrl = (object.jwksUrl !== undefined && object.jwksUrl !== null)
      ? ConfigurationVariable.fromPartial(object.jwksUrl)
      : undefined;
    message.jwksJson = (object.jwksJson !== undefined && object.jwksJson !== null)
      ? ConfigurationVariable.fromPartial(object.jwksJson)
      : undefined;
    message.userInfoEndpoint = (object.userInfoEndpoint !== undefined && object.userInfoEndpoint !== null)
      ? ConfigurationVariable.fromPartial(object.userInfoEndpoint)
      : undefined;
    message.userInfoCacheTtlSeconds = object.userInfoCacheTtlSeconds ?? 0;
    return message;
  },
};

function createBaseApiAuthenticationHooks(): ApiAuthenticationHooks {
  return {
    postAuthentication: false,
    mutatingPostAuthentication: false,
    revalidateAuthentication: false,
    postLogout: false,
  };
}

export const ApiAuthenticationHooks = {
  encode(message: ApiAuthenticationHooks, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.postAuthentication === true) {
      writer.uint32(8).bool(message.postAuthentication);
    }
    if (message.mutatingPostAuthentication === true) {
      writer.uint32(16).bool(message.mutatingPostAuthentication);
    }
    if (message.revalidateAuthentication === true) {
      writer.uint32(24).bool(message.revalidateAuthentication);
    }
    if (message.postLogout === true) {
      writer.uint32(32).bool(message.postLogout);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ApiAuthenticationHooks {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApiAuthenticationHooks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.postAuthentication = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.mutatingPostAuthentication = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.revalidateAuthentication = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.postLogout = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ApiAuthenticationHooks {
    return {
      postAuthentication: isSet(object.postAuthentication) ? Boolean(object.postAuthentication) : false,
      mutatingPostAuthentication: isSet(object.mutatingPostAuthentication)
        ? Boolean(object.mutatingPostAuthentication)
        : false,
      revalidateAuthentication: isSet(object.revalidateAuthentication)
        ? Boolean(object.revalidateAuthentication)
        : false,
      postLogout: isSet(object.postLogout) ? Boolean(object.postLogout) : false,
    };
  },

  toJSON(message: ApiAuthenticationHooks): unknown {
    const obj: any = {};
    if (message.postAuthentication === true) {
      obj.postAuthentication = message.postAuthentication;
    }
    if (message.mutatingPostAuthentication === true) {
      obj.mutatingPostAuthentication = message.mutatingPostAuthentication;
    }
    if (message.revalidateAuthentication === true) {
      obj.revalidateAuthentication = message.revalidateAuthentication;
    }
    if (message.postLogout === true) {
      obj.postLogout = message.postLogout;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ApiAuthenticationHooks>, I>>(base?: I): ApiAuthenticationHooks {
    return ApiAuthenticationHooks.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ApiAuthenticationHooks>, I>>(object: I): ApiAuthenticationHooks {
    const message = createBaseApiAuthenticationHooks();
    message.postAuthentication = object.postAuthentication ?? false;
    message.mutatingPostAuthentication = object.mutatingPostAuthentication ?? false;
    message.revalidateAuthentication = object.revalidateAuthentication ?? false;
    message.postLogout = object.postLogout ?? false;
    return message;
  },
};

function createBaseCookieBasedAuthentication(): CookieBasedAuthentication {
  return {
    providers: [],
    authorizedRedirectUris: [],
    authorizedRedirectUriRegexes: [],
    hashKey: undefined,
    blockKey: undefined,
    csrfSecret: undefined,
    timeoutSeconds: undefined,
    maxLength: undefined,
  };
}

export const CookieBasedAuthentication = {
  encode(message: CookieBasedAuthentication, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providers) {
      AuthProvider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.authorizedRedirectUris) {
      ConfigurationVariable.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.authorizedRedirectUriRegexes) {
      ConfigurationVariable.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.hashKey !== undefined) {
      ConfigurationVariable.encode(message.hashKey, writer.uint32(34).fork()).ldelim();
    }
    if (message.blockKey !== undefined) {
      ConfigurationVariable.encode(message.blockKey, writer.uint32(42).fork()).ldelim();
    }
    if (message.csrfSecret !== undefined) {
      ConfigurationVariable.encode(message.csrfSecret, writer.uint32(50).fork()).ldelim();
    }
    if (message.timeoutSeconds !== undefined) {
      ConfigurationVariable.encode(message.timeoutSeconds, writer.uint32(58).fork()).ldelim();
    }
    if (message.maxLength !== undefined) {
      ConfigurationVariable.encode(message.maxLength, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CookieBasedAuthentication {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCookieBasedAuthentication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.providers.push(AuthProvider.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.authorizedRedirectUris.push(ConfigurationVariable.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.authorizedRedirectUriRegexes.push(ConfigurationVariable.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.hashKey = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.blockKey = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.csrfSecret = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.timeoutSeconds = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.maxLength = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CookieBasedAuthentication {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => AuthProvider.fromJSON(e)) : [],
      authorizedRedirectUris: Array.isArray(object?.authorizedRedirectUris)
        ? object.authorizedRedirectUris.map((e: any) => ConfigurationVariable.fromJSON(e))
        : [],
      authorizedRedirectUriRegexes: Array.isArray(object?.authorizedRedirectUriRegexes)
        ? object.authorizedRedirectUriRegexes.map((e: any) => ConfigurationVariable.fromJSON(e))
        : [],
      hashKey: isSet(object.hashKey) ? ConfigurationVariable.fromJSON(object.hashKey) : undefined,
      blockKey: isSet(object.blockKey) ? ConfigurationVariable.fromJSON(object.blockKey) : undefined,
      csrfSecret: isSet(object.csrfSecret) ? ConfigurationVariable.fromJSON(object.csrfSecret) : undefined,
      timeoutSeconds: isSet(object.timeoutSeconds) ? ConfigurationVariable.fromJSON(object.timeoutSeconds) : undefined,
      maxLength: isSet(object.maxLength) ? ConfigurationVariable.fromJSON(object.maxLength) : undefined,
    };
  },

  toJSON(message: CookieBasedAuthentication): unknown {
    const obj: any = {};
    if (message.providers?.length) {
      obj.providers = message.providers.map((e) => AuthProvider.toJSON(e));
    }
    if (message.authorizedRedirectUris?.length) {
      obj.authorizedRedirectUris = message.authorizedRedirectUris.map((e) => ConfigurationVariable.toJSON(e));
    }
    if (message.authorizedRedirectUriRegexes?.length) {
      obj.authorizedRedirectUriRegexes = message.authorizedRedirectUriRegexes.map((e) =>
        ConfigurationVariable.toJSON(e)
      );
    }
    if (message.hashKey !== undefined) {
      obj.hashKey = ConfigurationVariable.toJSON(message.hashKey);
    }
    if (message.blockKey !== undefined) {
      obj.blockKey = ConfigurationVariable.toJSON(message.blockKey);
    }
    if (message.csrfSecret !== undefined) {
      obj.csrfSecret = ConfigurationVariable.toJSON(message.csrfSecret);
    }
    if (message.timeoutSeconds !== undefined) {
      obj.timeoutSeconds = ConfigurationVariable.toJSON(message.timeoutSeconds);
    }
    if (message.maxLength !== undefined) {
      obj.maxLength = ConfigurationVariable.toJSON(message.maxLength);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CookieBasedAuthentication>, I>>(base?: I): CookieBasedAuthentication {
    return CookieBasedAuthentication.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CookieBasedAuthentication>, I>>(object: I): CookieBasedAuthentication {
    const message = createBaseCookieBasedAuthentication();
    message.providers = object.providers?.map((e) => AuthProvider.fromPartial(e)) || [];
    message.authorizedRedirectUris = object.authorizedRedirectUris?.map((e) => ConfigurationVariable.fromPartial(e)) ||
      [];
    message.authorizedRedirectUriRegexes =
      object.authorizedRedirectUriRegexes?.map((e) => ConfigurationVariable.fromPartial(e)) || [];
    message.hashKey = (object.hashKey !== undefined && object.hashKey !== null)
      ? ConfigurationVariable.fromPartial(object.hashKey)
      : undefined;
    message.blockKey = (object.blockKey !== undefined && object.blockKey !== null)
      ? ConfigurationVariable.fromPartial(object.blockKey)
      : undefined;
    message.csrfSecret = (object.csrfSecret !== undefined && object.csrfSecret !== null)
      ? ConfigurationVariable.fromPartial(object.csrfSecret)
      : undefined;
    message.timeoutSeconds = (object.timeoutSeconds !== undefined && object.timeoutSeconds !== null)
      ? ConfigurationVariable.fromPartial(object.timeoutSeconds)
      : undefined;
    message.maxLength = (object.maxLength !== undefined && object.maxLength !== null)
      ? ConfigurationVariable.fromPartial(object.maxLength)
      : undefined;
    return message;
  },
};

function createBaseAuthProvider(): AuthProvider {
  return { id: "", kind: 0, githubConfig: undefined, oidcConfig: undefined };
}

export const AuthProvider = {
  encode(message: AuthProvider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.kind !== 0) {
      writer.uint32(16).int32(message.kind);
    }
    if (message.githubConfig !== undefined) {
      GithubAuthProviderConfig.encode(message.githubConfig, writer.uint32(26).fork()).ldelim();
    }
    if (message.oidcConfig !== undefined) {
      OpenIDConnectAuthProviderConfig.encode(message.oidcConfig, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthProvider {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.kind = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.githubConfig = GithubAuthProviderConfig.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.oidcConfig = OpenIDConnectAuthProviderConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthProvider {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      kind: isSet(object.kind) ? authProviderKindFromJSON(object.kind) : 0,
      githubConfig: isSet(object.githubConfig) ? GithubAuthProviderConfig.fromJSON(object.githubConfig) : undefined,
      oidcConfig: isSet(object.oidcConfig) ? OpenIDConnectAuthProviderConfig.fromJSON(object.oidcConfig) : undefined,
    };
  },

  toJSON(message: AuthProvider): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.kind !== 0) {
      obj.kind = authProviderKindToJSON(message.kind);
    }
    if (message.githubConfig !== undefined) {
      obj.githubConfig = GithubAuthProviderConfig.toJSON(message.githubConfig);
    }
    if (message.oidcConfig !== undefined) {
      obj.oidcConfig = OpenIDConnectAuthProviderConfig.toJSON(message.oidcConfig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthProvider>, I>>(base?: I): AuthProvider {
    return AuthProvider.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AuthProvider>, I>>(object: I): AuthProvider {
    const message = createBaseAuthProvider();
    message.id = object.id ?? "";
    message.kind = object.kind ?? 0;
    message.githubConfig = (object.githubConfig !== undefined && object.githubConfig !== null)
      ? GithubAuthProviderConfig.fromPartial(object.githubConfig)
      : undefined;
    message.oidcConfig = (object.oidcConfig !== undefined && object.oidcConfig !== null)
      ? OpenIDConnectAuthProviderConfig.fromPartial(object.oidcConfig)
      : undefined;
    return message;
  },
};

function createBaseGithubAuthProviderConfig(): GithubAuthProviderConfig {
  return { clientId: undefined, clientSecret: undefined };
}

export const GithubAuthProviderConfig = {
  encode(message: GithubAuthProviderConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== undefined) {
      ConfigurationVariable.encode(message.clientId, writer.uint32(10).fork()).ldelim();
    }
    if (message.clientSecret !== undefined) {
      ConfigurationVariable.encode(message.clientSecret, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GithubAuthProviderConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGithubAuthProviderConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.clientId = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.clientSecret = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GithubAuthProviderConfig {
    return {
      clientId: isSet(object.clientId) ? ConfigurationVariable.fromJSON(object.clientId) : undefined,
      clientSecret: isSet(object.clientSecret) ? ConfigurationVariable.fromJSON(object.clientSecret) : undefined,
    };
  },

  toJSON(message: GithubAuthProviderConfig): unknown {
    const obj: any = {};
    if (message.clientId !== undefined) {
      obj.clientId = ConfigurationVariable.toJSON(message.clientId);
    }
    if (message.clientSecret !== undefined) {
      obj.clientSecret = ConfigurationVariable.toJSON(message.clientSecret);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GithubAuthProviderConfig>, I>>(base?: I): GithubAuthProviderConfig {
    return GithubAuthProviderConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GithubAuthProviderConfig>, I>>(object: I): GithubAuthProviderConfig {
    const message = createBaseGithubAuthProviderConfig();
    message.clientId = (object.clientId !== undefined && object.clientId !== null)
      ? ConfigurationVariable.fromPartial(object.clientId)
      : undefined;
    message.clientSecret = (object.clientSecret !== undefined && object.clientSecret !== null)
      ? ConfigurationVariable.fromPartial(object.clientSecret)
      : undefined;
    return message;
  },
};

function createBaseOpenIDConnectQueryParameter(): OpenIDConnectQueryParameter {
  return { name: undefined, value: undefined };
}

export const OpenIDConnectQueryParameter = {
  encode(message: OpenIDConnectQueryParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      ConfigurationVariable.encode(message.name, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== undefined) {
      ConfigurationVariable.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenIDConnectQueryParameter {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenIDConnectQueryParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenIDConnectQueryParameter {
    return {
      name: isSet(object.name) ? ConfigurationVariable.fromJSON(object.name) : undefined,
      value: isSet(object.value) ? ConfigurationVariable.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: OpenIDConnectQueryParameter): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = ConfigurationVariable.toJSON(message.name);
    }
    if (message.value !== undefined) {
      obj.value = ConfigurationVariable.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OpenIDConnectQueryParameter>, I>>(base?: I): OpenIDConnectQueryParameter {
    return OpenIDConnectQueryParameter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OpenIDConnectQueryParameter>, I>>(object: I): OpenIDConnectQueryParameter {
    const message = createBaseOpenIDConnectQueryParameter();
    message.name = (object.name !== undefined && object.name !== null)
      ? ConfigurationVariable.fromPartial(object.name)
      : undefined;
    message.value = (object.value !== undefined && object.value !== null)
      ? ConfigurationVariable.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseOpenIDConnectAuthProviderConfig(): OpenIDConnectAuthProviderConfig {
  return { issuer: undefined, clientId: undefined, clientSecret: undefined, queryParameters: [] };
}

export const OpenIDConnectAuthProviderConfig = {
  encode(message: OpenIDConnectAuthProviderConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuer !== undefined) {
      ConfigurationVariable.encode(message.issuer, writer.uint32(10).fork()).ldelim();
    }
    if (message.clientId !== undefined) {
      ConfigurationVariable.encode(message.clientId, writer.uint32(18).fork()).ldelim();
    }
    if (message.clientSecret !== undefined) {
      ConfigurationVariable.encode(message.clientSecret, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.queryParameters) {
      OpenIDConnectQueryParameter.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenIDConnectAuthProviderConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenIDConnectAuthProviderConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.issuer = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.clientId = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.clientSecret = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.queryParameters.push(OpenIDConnectQueryParameter.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenIDConnectAuthProviderConfig {
    return {
      issuer: isSet(object.issuer) ? ConfigurationVariable.fromJSON(object.issuer) : undefined,
      clientId: isSet(object.clientId) ? ConfigurationVariable.fromJSON(object.clientId) : undefined,
      clientSecret: isSet(object.clientSecret) ? ConfigurationVariable.fromJSON(object.clientSecret) : undefined,
      queryParameters: Array.isArray(object?.queryParameters)
        ? object.queryParameters.map((e: any) => OpenIDConnectQueryParameter.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OpenIDConnectAuthProviderConfig): unknown {
    const obj: any = {};
    if (message.issuer !== undefined) {
      obj.issuer = ConfigurationVariable.toJSON(message.issuer);
    }
    if (message.clientId !== undefined) {
      obj.clientId = ConfigurationVariable.toJSON(message.clientId);
    }
    if (message.clientSecret !== undefined) {
      obj.clientSecret = ConfigurationVariable.toJSON(message.clientSecret);
    }
    if (message.queryParameters?.length) {
      obj.queryParameters = message.queryParameters.map((e) => OpenIDConnectQueryParameter.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OpenIDConnectAuthProviderConfig>, I>>(base?: I): OpenIDConnectAuthProviderConfig {
    return OpenIDConnectAuthProviderConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OpenIDConnectAuthProviderConfig>, I>>(
    object: I,
  ): OpenIDConnectAuthProviderConfig {
    const message = createBaseOpenIDConnectAuthProviderConfig();
    message.issuer = (object.issuer !== undefined && object.issuer !== null)
      ? ConfigurationVariable.fromPartial(object.issuer)
      : undefined;
    message.clientId = (object.clientId !== undefined && object.clientId !== null)
      ? ConfigurationVariable.fromPartial(object.clientId)
      : undefined;
    message.clientSecret = (object.clientSecret !== undefined && object.clientSecret !== null)
      ? ConfigurationVariable.fromPartial(object.clientSecret)
      : undefined;
    message.queryParameters = object.queryParameters?.map((e) => OpenIDConnectQueryParameter.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOperation(): Operation {
  return {
    name: "",
    content: "",
    operationType: 0,
    variablesSchema: "",
    responseSchema: "",
    cacheConfig: undefined,
    authenticationConfig: undefined,
    liveQueryConfig: undefined,
    authorizationConfig: undefined,
    hooksConfiguration: undefined,
    variablesConfiguration: undefined,
    internal: false,
    interpolationVariablesSchema: "",
    postResolveTransformations: [],
    engine: 0,
    path: "",
  };
}

export const Operation = {
  encode(message: Operation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
    }
    if (message.operationType !== 0) {
      writer.uint32(24).int32(message.operationType);
    }
    if (message.variablesSchema !== "") {
      writer.uint32(34).string(message.variablesSchema);
    }
    if (message.responseSchema !== "") {
      writer.uint32(42).string(message.responseSchema);
    }
    if (message.cacheConfig !== undefined) {
      OperationCacheConfig.encode(message.cacheConfig, writer.uint32(58).fork()).ldelim();
    }
    if (message.authenticationConfig !== undefined) {
      OperationAuthenticationConfig.encode(message.authenticationConfig, writer.uint32(66).fork()).ldelim();
    }
    if (message.liveQueryConfig !== undefined) {
      OperationLiveQueryConfig.encode(message.liveQueryConfig, writer.uint32(74).fork()).ldelim();
    }
    if (message.authorizationConfig !== undefined) {
      OperationAuthorizationConfig.encode(message.authorizationConfig, writer.uint32(82).fork()).ldelim();
    }
    if (message.hooksConfiguration !== undefined) {
      OperationHooksConfiguration.encode(message.hooksConfiguration, writer.uint32(90).fork()).ldelim();
    }
    if (message.variablesConfiguration !== undefined) {
      OperationVariablesConfiguration.encode(message.variablesConfiguration, writer.uint32(98).fork()).ldelim();
    }
    if (message.internal === true) {
      writer.uint32(104).bool(message.internal);
    }
    if (message.interpolationVariablesSchema !== "") {
      writer.uint32(114).string(message.interpolationVariablesSchema);
    }
    for (const v of message.postResolveTransformations) {
      PostResolveTransformation.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.engine !== 0) {
      writer.uint32(128).int32(message.engine);
    }
    if (message.path !== "") {
      writer.uint32(138).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Operation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.content = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.operationType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.variablesSchema = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.responseSchema = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.cacheConfig = OperationCacheConfig.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.authenticationConfig = OperationAuthenticationConfig.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.liveQueryConfig = OperationLiveQueryConfig.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.authorizationConfig = OperationAuthorizationConfig.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.hooksConfiguration = OperationHooksConfiguration.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.variablesConfiguration = OperationVariablesConfiguration.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.internal = reader.bool();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.interpolationVariablesSchema = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.postResolveTransformations.push(PostResolveTransformation.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.engine = reader.int32() as any;
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Operation {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      content: isSet(object.content) ? String(object.content) : "",
      operationType: isSet(object.operationType) ? operationTypeFromJSON(object.operationType) : 0,
      variablesSchema: isSet(object.variablesSchema) ? String(object.variablesSchema) : "",
      responseSchema: isSet(object.responseSchema) ? String(object.responseSchema) : "",
      cacheConfig: isSet(object.cacheConfig) ? OperationCacheConfig.fromJSON(object.cacheConfig) : undefined,
      authenticationConfig: isSet(object.authenticationConfig)
        ? OperationAuthenticationConfig.fromJSON(object.authenticationConfig)
        : undefined,
      liveQueryConfig: isSet(object.liveQueryConfig)
        ? OperationLiveQueryConfig.fromJSON(object.liveQueryConfig)
        : undefined,
      authorizationConfig: isSet(object.authorizationConfig)
        ? OperationAuthorizationConfig.fromJSON(object.authorizationConfig)
        : undefined,
      hooksConfiguration: isSet(object.hooksConfiguration)
        ? OperationHooksConfiguration.fromJSON(object.hooksConfiguration)
        : undefined,
      variablesConfiguration: isSet(object.variablesConfiguration)
        ? OperationVariablesConfiguration.fromJSON(object.variablesConfiguration)
        : undefined,
      internal: isSet(object.internal) ? Boolean(object.internal) : false,
      interpolationVariablesSchema: isSet(object.interpolationVariablesSchema)
        ? String(object.interpolationVariablesSchema)
        : "",
      postResolveTransformations: Array.isArray(object?.postResolveTransformations)
        ? object.postResolveTransformations.map((e: any) => PostResolveTransformation.fromJSON(e))
        : [],
      engine: isSet(object.engine) ? operationExecutionEngineFromJSON(object.engine) : 0,
      path: isSet(object.path) ? String(object.path) : "",
    };
  },

  toJSON(message: Operation): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.content !== "") {
      obj.content = message.content;
    }
    if (message.operationType !== 0) {
      obj.operationType = operationTypeToJSON(message.operationType);
    }
    if (message.variablesSchema !== "") {
      obj.variablesSchema = message.variablesSchema;
    }
    if (message.responseSchema !== "") {
      obj.responseSchema = message.responseSchema;
    }
    if (message.cacheConfig !== undefined) {
      obj.cacheConfig = OperationCacheConfig.toJSON(message.cacheConfig);
    }
    if (message.authenticationConfig !== undefined) {
      obj.authenticationConfig = OperationAuthenticationConfig.toJSON(message.authenticationConfig);
    }
    if (message.liveQueryConfig !== undefined) {
      obj.liveQueryConfig = OperationLiveQueryConfig.toJSON(message.liveQueryConfig);
    }
    if (message.authorizationConfig !== undefined) {
      obj.authorizationConfig = OperationAuthorizationConfig.toJSON(message.authorizationConfig);
    }
    if (message.hooksConfiguration !== undefined) {
      obj.hooksConfiguration = OperationHooksConfiguration.toJSON(message.hooksConfiguration);
    }
    if (message.variablesConfiguration !== undefined) {
      obj.variablesConfiguration = OperationVariablesConfiguration.toJSON(message.variablesConfiguration);
    }
    if (message.internal === true) {
      obj.internal = message.internal;
    }
    if (message.interpolationVariablesSchema !== "") {
      obj.interpolationVariablesSchema = message.interpolationVariablesSchema;
    }
    if (message.postResolveTransformations?.length) {
      obj.postResolveTransformations = message.postResolveTransformations.map((e) =>
        PostResolveTransformation.toJSON(e)
      );
    }
    if (message.engine !== 0) {
      obj.engine = operationExecutionEngineToJSON(message.engine);
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Operation>, I>>(base?: I): Operation {
    return Operation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Operation>, I>>(object: I): Operation {
    const message = createBaseOperation();
    message.name = object.name ?? "";
    message.content = object.content ?? "";
    message.operationType = object.operationType ?? 0;
    message.variablesSchema = object.variablesSchema ?? "";
    message.responseSchema = object.responseSchema ?? "";
    message.cacheConfig = (object.cacheConfig !== undefined && object.cacheConfig !== null)
      ? OperationCacheConfig.fromPartial(object.cacheConfig)
      : undefined;
    message.authenticationConfig = (object.authenticationConfig !== undefined && object.authenticationConfig !== null)
      ? OperationAuthenticationConfig.fromPartial(object.authenticationConfig)
      : undefined;
    message.liveQueryConfig = (object.liveQueryConfig !== undefined && object.liveQueryConfig !== null)
      ? OperationLiveQueryConfig.fromPartial(object.liveQueryConfig)
      : undefined;
    message.authorizationConfig = (object.authorizationConfig !== undefined && object.authorizationConfig !== null)
      ? OperationAuthorizationConfig.fromPartial(object.authorizationConfig)
      : undefined;
    message.hooksConfiguration = (object.hooksConfiguration !== undefined && object.hooksConfiguration !== null)
      ? OperationHooksConfiguration.fromPartial(object.hooksConfiguration)
      : undefined;
    message.variablesConfiguration =
      (object.variablesConfiguration !== undefined && object.variablesConfiguration !== null)
        ? OperationVariablesConfiguration.fromPartial(object.variablesConfiguration)
        : undefined;
    message.internal = object.internal ?? false;
    message.interpolationVariablesSchema = object.interpolationVariablesSchema ?? "";
    message.postResolveTransformations =
      object.postResolveTransformations?.map((e) => PostResolveTransformation.fromPartial(e)) || [];
    message.engine = object.engine ?? 0;
    message.path = object.path ?? "";
    return message;
  },
};

function createBasePostResolveTransformation(): PostResolveTransformation {
  return { kind: 0, depth: 0, get: undefined };
}

export const PostResolveTransformation = {
  encode(message: PostResolveTransformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.depth !== 0) {
      writer.uint32(16).int64(message.depth);
    }
    if (message.get !== undefined) {
      PostResolveGetTransformation.encode(message.get, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostResolveTransformation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostResolveTransformation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.kind = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.depth = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.get = PostResolveGetTransformation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PostResolveTransformation {
    return {
      kind: isSet(object.kind) ? postResolveTransformationKindFromJSON(object.kind) : 0,
      depth: isSet(object.depth) ? Number(object.depth) : 0,
      get: isSet(object.get) ? PostResolveGetTransformation.fromJSON(object.get) : undefined,
    };
  },

  toJSON(message: PostResolveTransformation): unknown {
    const obj: any = {};
    if (message.kind !== 0) {
      obj.kind = postResolveTransformationKindToJSON(message.kind);
    }
    if (message.depth !== 0) {
      obj.depth = Math.round(message.depth);
    }
    if (message.get !== undefined) {
      obj.get = PostResolveGetTransformation.toJSON(message.get);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PostResolveTransformation>, I>>(base?: I): PostResolveTransformation {
    return PostResolveTransformation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PostResolveTransformation>, I>>(object: I): PostResolveTransformation {
    const message = createBasePostResolveTransformation();
    message.kind = object.kind ?? 0;
    message.depth = object.depth ?? 0;
    message.get = (object.get !== undefined && object.get !== null)
      ? PostResolveGetTransformation.fromPartial(object.get)
      : undefined;
    return message;
  },
};

function createBasePostResolveGetTransformation(): PostResolveGetTransformation {
  return { from: [], to: [] };
}

export const PostResolveGetTransformation = {
  encode(message: PostResolveGetTransformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.from) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.to) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostResolveGetTransformation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostResolveGetTransformation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.from.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.to.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PostResolveGetTransformation {
    return {
      from: Array.isArray(object?.from) ? object.from.map((e: any) => String(e)) : [],
      to: Array.isArray(object?.to) ? object.to.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: PostResolveGetTransformation): unknown {
    const obj: any = {};
    if (message.from?.length) {
      obj.from = message.from;
    }
    if (message.to?.length) {
      obj.to = message.to;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PostResolveGetTransformation>, I>>(base?: I): PostResolveGetTransformation {
    return PostResolveGetTransformation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PostResolveGetTransformation>, I>>(object: I): PostResolveGetTransformation {
    const message = createBasePostResolveGetTransformation();
    message.from = object.from?.map((e) => e) || [];
    message.to = object.to?.map((e) => e) || [];
    return message;
  },
};

function createBaseOperationVariablesConfiguration(): OperationVariablesConfiguration {
  return { injectVariables: [] };
}

export const OperationVariablesConfiguration = {
  encode(message: OperationVariablesConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.injectVariables) {
      VariableInjectionConfiguration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationVariablesConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationVariablesConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.injectVariables.push(VariableInjectionConfiguration.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationVariablesConfiguration {
    return {
      injectVariables: Array.isArray(object?.injectVariables)
        ? object.injectVariables.map((e: any) => VariableInjectionConfiguration.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OperationVariablesConfiguration): unknown {
    const obj: any = {};
    if (message.injectVariables?.length) {
      obj.injectVariables = message.injectVariables.map((e) => VariableInjectionConfiguration.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperationVariablesConfiguration>, I>>(base?: I): OperationVariablesConfiguration {
    return OperationVariablesConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OperationVariablesConfiguration>, I>>(
    object: I,
  ): OperationVariablesConfiguration {
    const message = createBaseOperationVariablesConfiguration();
    message.injectVariables = object.injectVariables?.map((e) => VariableInjectionConfiguration.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVariableInjectionConfiguration(): VariableInjectionConfiguration {
  return { variablePathComponents: [], variableKind: 0, dateFormat: "", environmentVariableName: "" };
}

export const VariableInjectionConfiguration = {
  encode(message: VariableInjectionConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.variablePathComponents) {
      writer.uint32(10).string(v!);
    }
    if (message.variableKind !== 0) {
      writer.uint32(16).int32(message.variableKind);
    }
    if (message.dateFormat !== "") {
      writer.uint32(26).string(message.dateFormat);
    }
    if (message.environmentVariableName !== "") {
      writer.uint32(34).string(message.environmentVariableName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VariableInjectionConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVariableInjectionConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.variablePathComponents.push(reader.string());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.variableKind = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dateFormat = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.environmentVariableName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VariableInjectionConfiguration {
    return {
      variablePathComponents: Array.isArray(object?.variablePathComponents)
        ? object.variablePathComponents.map((e: any) => String(e))
        : [],
      variableKind: isSet(object.variableKind) ? injectVariableKindFromJSON(object.variableKind) : 0,
      dateFormat: isSet(object.dateFormat) ? String(object.dateFormat) : "",
      environmentVariableName: isSet(object.environmentVariableName) ? String(object.environmentVariableName) : "",
    };
  },

  toJSON(message: VariableInjectionConfiguration): unknown {
    const obj: any = {};
    if (message.variablePathComponents?.length) {
      obj.variablePathComponents = message.variablePathComponents;
    }
    if (message.variableKind !== 0) {
      obj.variableKind = injectVariableKindToJSON(message.variableKind);
    }
    if (message.dateFormat !== "") {
      obj.dateFormat = message.dateFormat;
    }
    if (message.environmentVariableName !== "") {
      obj.environmentVariableName = message.environmentVariableName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VariableInjectionConfiguration>, I>>(base?: I): VariableInjectionConfiguration {
    return VariableInjectionConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<VariableInjectionConfiguration>, I>>(
    object: I,
  ): VariableInjectionConfiguration {
    const message = createBaseVariableInjectionConfiguration();
    message.variablePathComponents = object.variablePathComponents?.map((e) => e) || [];
    message.variableKind = object.variableKind ?? 0;
    message.dateFormat = object.dateFormat ?? "";
    message.environmentVariableName = object.environmentVariableName ?? "";
    return message;
  },
};

function createBaseGraphQLDataSourceHooksConfiguration(): GraphQLDataSourceHooksConfiguration {
  return { onWSTransportConnectionInit: false };
}

export const GraphQLDataSourceHooksConfiguration = {
  encode(message: GraphQLDataSourceHooksConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.onWSTransportConnectionInit === true) {
      writer.uint32(8).bool(message.onWSTransportConnectionInit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GraphQLDataSourceHooksConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphQLDataSourceHooksConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.onWSTransportConnectionInit = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GraphQLDataSourceHooksConfiguration {
    return {
      onWSTransportConnectionInit: isSet(object.onWSTransportConnectionInit)
        ? Boolean(object.onWSTransportConnectionInit)
        : false,
    };
  },

  toJSON(message: GraphQLDataSourceHooksConfiguration): unknown {
    const obj: any = {};
    if (message.onWSTransportConnectionInit === true) {
      obj.onWSTransportConnectionInit = message.onWSTransportConnectionInit;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GraphQLDataSourceHooksConfiguration>, I>>(
    base?: I,
  ): GraphQLDataSourceHooksConfiguration {
    return GraphQLDataSourceHooksConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GraphQLDataSourceHooksConfiguration>, I>>(
    object: I,
  ): GraphQLDataSourceHooksConfiguration {
    const message = createBaseGraphQLDataSourceHooksConfiguration();
    message.onWSTransportConnectionInit = object.onWSTransportConnectionInit ?? false;
    return message;
  },
};

function createBaseHookMatcher(): HookMatcher {
  return { operationType: undefined, datasources: [] };
}

export const HookMatcher = {
  encode(message: HookMatcher, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operationType !== undefined) {
      writer.uint32(8).int32(message.operationType);
    }
    for (const v of message.datasources) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HookMatcher {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHookMatcher();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.operationType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.datasources.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HookMatcher {
    return {
      operationType: isSet(object.operationType) ? operationTypeFromJSON(object.operationType) : undefined,
      datasources: Array.isArray(object?.datasources) ? object.datasources.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: HookMatcher): unknown {
    const obj: any = {};
    if (message.operationType !== undefined) {
      obj.operationType = operationTypeToJSON(message.operationType);
    }
    if (message.datasources?.length) {
      obj.datasources = message.datasources;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HookMatcher>, I>>(base?: I): HookMatcher {
    return HookMatcher.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HookMatcher>, I>>(object: I): HookMatcher {
    const message = createBaseHookMatcher();
    message.operationType = object.operationType ?? undefined;
    message.datasources = object.datasources?.map((e) => e) || [];
    return message;
  },
};

function createBaseHook(): Hook {
  return { id: "", type: 0, matcher: undefined };
}

export const Hook = {
  encode(message: Hook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.matcher !== undefined) {
      HookMatcher.encode(message.matcher, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Hook {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.matcher = HookMatcher.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Hook {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? hookTypeFromJSON(object.type) : 0,
      matcher: isSet(object.matcher) ? HookMatcher.fromJSON(object.matcher) : undefined,
    };
  },

  toJSON(message: Hook): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.type !== 0) {
      obj.type = hookTypeToJSON(message.type);
    }
    if (message.matcher !== undefined) {
      obj.matcher = HookMatcher.toJSON(message.matcher);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Hook>, I>>(base?: I): Hook {
    return Hook.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Hook>, I>>(object: I): Hook {
    const message = createBaseHook();
    message.id = object.id ?? "";
    message.type = object.type ?? 0;
    message.matcher = (object.matcher !== undefined && object.matcher !== null)
      ? HookMatcher.fromPartial(object.matcher)
      : undefined;
    return message;
  },
};

function createBaseOperationHooksConfiguration(): OperationHooksConfiguration {
  return {
    preResolve: false,
    postResolve: false,
    mutatingPreResolve: false,
    mutatingPostResolve: false,
    mockResolve: undefined,
    httpTransportOnRequest: false,
    httpTransportOnResponse: false,
    customResolve: false,
  };
}

export const OperationHooksConfiguration = {
  encode(message: OperationHooksConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.preResolve === true) {
      writer.uint32(8).bool(message.preResolve);
    }
    if (message.postResolve === true) {
      writer.uint32(16).bool(message.postResolve);
    }
    if (message.mutatingPreResolve === true) {
      writer.uint32(24).bool(message.mutatingPreResolve);
    }
    if (message.mutatingPostResolve === true) {
      writer.uint32(32).bool(message.mutatingPostResolve);
    }
    if (message.mockResolve !== undefined) {
      MockResolveHookConfiguration.encode(message.mockResolve, writer.uint32(42).fork()).ldelim();
    }
    if (message.httpTransportOnRequest === true) {
      writer.uint32(48).bool(message.httpTransportOnRequest);
    }
    if (message.httpTransportOnResponse === true) {
      writer.uint32(56).bool(message.httpTransportOnResponse);
    }
    if (message.customResolve === true) {
      writer.uint32(64).bool(message.customResolve);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationHooksConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationHooksConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.preResolve = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.postResolve = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.mutatingPreResolve = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.mutatingPostResolve = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.mockResolve = MockResolveHookConfiguration.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.httpTransportOnRequest = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.httpTransportOnResponse = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.customResolve = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationHooksConfiguration {
    return {
      preResolve: isSet(object.preResolve) ? Boolean(object.preResolve) : false,
      postResolve: isSet(object.postResolve) ? Boolean(object.postResolve) : false,
      mutatingPreResolve: isSet(object.mutatingPreResolve) ? Boolean(object.mutatingPreResolve) : false,
      mutatingPostResolve: isSet(object.mutatingPostResolve) ? Boolean(object.mutatingPostResolve) : false,
      mockResolve: isSet(object.mockResolve) ? MockResolveHookConfiguration.fromJSON(object.mockResolve) : undefined,
      httpTransportOnRequest: isSet(object.httpTransportOnRequest) ? Boolean(object.httpTransportOnRequest) : false,
      httpTransportOnResponse: isSet(object.httpTransportOnResponse) ? Boolean(object.httpTransportOnResponse) : false,
      customResolve: isSet(object.customResolve) ? Boolean(object.customResolve) : false,
    };
  },

  toJSON(message: OperationHooksConfiguration): unknown {
    const obj: any = {};
    if (message.preResolve === true) {
      obj.preResolve = message.preResolve;
    }
    if (message.postResolve === true) {
      obj.postResolve = message.postResolve;
    }
    if (message.mutatingPreResolve === true) {
      obj.mutatingPreResolve = message.mutatingPreResolve;
    }
    if (message.mutatingPostResolve === true) {
      obj.mutatingPostResolve = message.mutatingPostResolve;
    }
    if (message.mockResolve !== undefined) {
      obj.mockResolve = MockResolveHookConfiguration.toJSON(message.mockResolve);
    }
    if (message.httpTransportOnRequest === true) {
      obj.httpTransportOnRequest = message.httpTransportOnRequest;
    }
    if (message.httpTransportOnResponse === true) {
      obj.httpTransportOnResponse = message.httpTransportOnResponse;
    }
    if (message.customResolve === true) {
      obj.customResolve = message.customResolve;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperationHooksConfiguration>, I>>(base?: I): OperationHooksConfiguration {
    return OperationHooksConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OperationHooksConfiguration>, I>>(object: I): OperationHooksConfiguration {
    const message = createBaseOperationHooksConfiguration();
    message.preResolve = object.preResolve ?? false;
    message.postResolve = object.postResolve ?? false;
    message.mutatingPreResolve = object.mutatingPreResolve ?? false;
    message.mutatingPostResolve = object.mutatingPostResolve ?? false;
    message.mockResolve = (object.mockResolve !== undefined && object.mockResolve !== null)
      ? MockResolveHookConfiguration.fromPartial(object.mockResolve)
      : undefined;
    message.httpTransportOnRequest = object.httpTransportOnRequest ?? false;
    message.httpTransportOnResponse = object.httpTransportOnResponse ?? false;
    message.customResolve = object.customResolve ?? false;
    return message;
  },
};

function createBaseMockResolveHookConfiguration(): MockResolveHookConfiguration {
  return { enable: false, subscriptionPollingIntervalMillis: 0 };
}

export const MockResolveHookConfiguration = {
  encode(message: MockResolveHookConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enable === true) {
      writer.uint32(8).bool(message.enable);
    }
    if (message.subscriptionPollingIntervalMillis !== 0) {
      writer.uint32(16).int64(message.subscriptionPollingIntervalMillis);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MockResolveHookConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMockResolveHookConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enable = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.subscriptionPollingIntervalMillis = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MockResolveHookConfiguration {
    return {
      enable: isSet(object.enable) ? Boolean(object.enable) : false,
      subscriptionPollingIntervalMillis: isSet(object.subscriptionPollingIntervalMillis)
        ? Number(object.subscriptionPollingIntervalMillis)
        : 0,
    };
  },

  toJSON(message: MockResolveHookConfiguration): unknown {
    const obj: any = {};
    if (message.enable === true) {
      obj.enable = message.enable;
    }
    if (message.subscriptionPollingIntervalMillis !== 0) {
      obj.subscriptionPollingIntervalMillis = Math.round(message.subscriptionPollingIntervalMillis);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MockResolveHookConfiguration>, I>>(base?: I): MockResolveHookConfiguration {
    return MockResolveHookConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MockResolveHookConfiguration>, I>>(object: I): MockResolveHookConfiguration {
    const message = createBaseMockResolveHookConfiguration();
    message.enable = object.enable ?? false;
    message.subscriptionPollingIntervalMillis = object.subscriptionPollingIntervalMillis ?? 0;
    return message;
  },
};

function createBaseOperationAuthorizationConfig(): OperationAuthorizationConfig {
  return { claims: [], roleConfig: undefined };
}

export const OperationAuthorizationConfig = {
  encode(message: OperationAuthorizationConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.claims) {
      ClaimConfig.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.roleConfig !== undefined) {
      OperationRoleConfig.encode(message.roleConfig, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationAuthorizationConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationAuthorizationConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.claims.push(ClaimConfig.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.roleConfig = OperationRoleConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationAuthorizationConfig {
    return {
      claims: Array.isArray(object?.claims) ? object.claims.map((e: any) => ClaimConfig.fromJSON(e)) : [],
      roleConfig: isSet(object.roleConfig) ? OperationRoleConfig.fromJSON(object.roleConfig) : undefined,
    };
  },

  toJSON(message: OperationAuthorizationConfig): unknown {
    const obj: any = {};
    if (message.claims?.length) {
      obj.claims = message.claims.map((e) => ClaimConfig.toJSON(e));
    }
    if (message.roleConfig !== undefined) {
      obj.roleConfig = OperationRoleConfig.toJSON(message.roleConfig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperationAuthorizationConfig>, I>>(base?: I): OperationAuthorizationConfig {
    return OperationAuthorizationConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OperationAuthorizationConfig>, I>>(object: I): OperationAuthorizationConfig {
    const message = createBaseOperationAuthorizationConfig();
    message.claims = object.claims?.map((e) => ClaimConfig.fromPartial(e)) || [];
    message.roleConfig = (object.roleConfig !== undefined && object.roleConfig !== null)
      ? OperationRoleConfig.fromPartial(object.roleConfig)
      : undefined;
    return message;
  },
};

function createBaseOperationRoleConfig(): OperationRoleConfig {
  return { requireMatchAll: [], requireMatchAny: [], denyMatchAll: [], denyMatchAny: [] };
}

export const OperationRoleConfig = {
  encode(message: OperationRoleConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requireMatchAll) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.requireMatchAny) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.denyMatchAll) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.denyMatchAny) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationRoleConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationRoleConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.requireMatchAll.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.requireMatchAny.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.denyMatchAll.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.denyMatchAny.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationRoleConfig {
    return {
      requireMatchAll: Array.isArray(object?.requireMatchAll) ? object.requireMatchAll.map((e: any) => String(e)) : [],
      requireMatchAny: Array.isArray(object?.requireMatchAny) ? object.requireMatchAny.map((e: any) => String(e)) : [],
      denyMatchAll: Array.isArray(object?.denyMatchAll) ? object.denyMatchAll.map((e: any) => String(e)) : [],
      denyMatchAny: Array.isArray(object?.denyMatchAny) ? object.denyMatchAny.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: OperationRoleConfig): unknown {
    const obj: any = {};
    if (message.requireMatchAll?.length) {
      obj.requireMatchAll = message.requireMatchAll;
    }
    if (message.requireMatchAny?.length) {
      obj.requireMatchAny = message.requireMatchAny;
    }
    if (message.denyMatchAll?.length) {
      obj.denyMatchAll = message.denyMatchAll;
    }
    if (message.denyMatchAny?.length) {
      obj.denyMatchAny = message.denyMatchAny;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperationRoleConfig>, I>>(base?: I): OperationRoleConfig {
    return OperationRoleConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OperationRoleConfig>, I>>(object: I): OperationRoleConfig {
    const message = createBaseOperationRoleConfig();
    message.requireMatchAll = object.requireMatchAll?.map((e) => e) || [];
    message.requireMatchAny = object.requireMatchAny?.map((e) => e) || [];
    message.denyMatchAll = object.denyMatchAll?.map((e) => e) || [];
    message.denyMatchAny = object.denyMatchAny?.map((e) => e) || [];
    return message;
  },
};

function createBaseCustomClaim(): CustomClaim {
  return { name: "", jsonPathComponents: [], type: 0, required: false };
}

export const CustomClaim = {
  encode(message: CustomClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.jsonPathComponents) {
      writer.uint32(18).string(v!);
    }
    if (message.type !== 0) {
      writer.uint32(24).int32(message.type);
    }
    if (message.required === true) {
      writer.uint32(32).bool(message.required);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CustomClaim {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.jsonPathComponents.push(reader.string());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.required = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CustomClaim {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      jsonPathComponents: Array.isArray(object?.jsonPathComponents)
        ? object.jsonPathComponents.map((e: any) => String(e))
        : [],
      type: isSet(object.type) ? valueTypeFromJSON(object.type) : 0,
      required: isSet(object.required) ? Boolean(object.required) : false,
    };
  },

  toJSON(message: CustomClaim): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.jsonPathComponents?.length) {
      obj.jsonPathComponents = message.jsonPathComponents;
    }
    if (message.type !== 0) {
      obj.type = valueTypeToJSON(message.type);
    }
    if (message.required === true) {
      obj.required = message.required;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CustomClaim>, I>>(base?: I): CustomClaim {
    return CustomClaim.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CustomClaim>, I>>(object: I): CustomClaim {
    const message = createBaseCustomClaim();
    message.name = object.name ?? "";
    message.jsonPathComponents = object.jsonPathComponents?.map((e) => e) || [];
    message.type = object.type ?? 0;
    message.required = object.required ?? false;
    return message;
  },
};

function createBaseClaimConfig(): ClaimConfig {
  return { variablePathComponents: [], claimType: 0, custom: undefined };
}

export const ClaimConfig = {
  encode(message: ClaimConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.variablePathComponents) {
      writer.uint32(10).string(v!);
    }
    if (message.claimType !== 0) {
      writer.uint32(16).int32(message.claimType);
    }
    if (message.custom !== undefined) {
      CustomClaim.encode(message.custom, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClaimConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClaimConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.variablePathComponents.push(reader.string());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.claimType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.custom = CustomClaim.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClaimConfig {
    return {
      variablePathComponents: Array.isArray(object?.variablePathComponents)
        ? object.variablePathComponents.map((e: any) => String(e))
        : [],
      claimType: isSet(object.claimType) ? claimTypeFromJSON(object.claimType) : 0,
      custom: isSet(object.custom) ? CustomClaim.fromJSON(object.custom) : undefined,
    };
  },

  toJSON(message: ClaimConfig): unknown {
    const obj: any = {};
    if (message.variablePathComponents?.length) {
      obj.variablePathComponents = message.variablePathComponents;
    }
    if (message.claimType !== 0) {
      obj.claimType = claimTypeToJSON(message.claimType);
    }
    if (message.custom !== undefined) {
      obj.custom = CustomClaim.toJSON(message.custom);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClaimConfig>, I>>(base?: I): ClaimConfig {
    return ClaimConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ClaimConfig>, I>>(object: I): ClaimConfig {
    const message = createBaseClaimConfig();
    message.variablePathComponents = object.variablePathComponents?.map((e) => e) || [];
    message.claimType = object.claimType ?? 0;
    message.custom = (object.custom !== undefined && object.custom !== null)
      ? CustomClaim.fromPartial(object.custom)
      : undefined;
    return message;
  },
};

function createBaseOperationLiveQueryConfig(): OperationLiveQueryConfig {
  return { enable: false, pollingIntervalSeconds: 0 };
}

export const OperationLiveQueryConfig = {
  encode(message: OperationLiveQueryConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enable === true) {
      writer.uint32(8).bool(message.enable);
    }
    if (message.pollingIntervalSeconds !== 0) {
      writer.uint32(16).int64(message.pollingIntervalSeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationLiveQueryConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationLiveQueryConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enable = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pollingIntervalSeconds = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationLiveQueryConfig {
    return {
      enable: isSet(object.enable) ? Boolean(object.enable) : false,
      pollingIntervalSeconds: isSet(object.pollingIntervalSeconds) ? Number(object.pollingIntervalSeconds) : 0,
    };
  },

  toJSON(message: OperationLiveQueryConfig): unknown {
    const obj: any = {};
    if (message.enable === true) {
      obj.enable = message.enable;
    }
    if (message.pollingIntervalSeconds !== 0) {
      obj.pollingIntervalSeconds = Math.round(message.pollingIntervalSeconds);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperationLiveQueryConfig>, I>>(base?: I): OperationLiveQueryConfig {
    return OperationLiveQueryConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OperationLiveQueryConfig>, I>>(object: I): OperationLiveQueryConfig {
    const message = createBaseOperationLiveQueryConfig();
    message.enable = object.enable ?? false;
    message.pollingIntervalSeconds = object.pollingIntervalSeconds ?? 0;
    return message;
  },
};

function createBaseOperationAuthenticationConfig(): OperationAuthenticationConfig {
  return { authRequired: false };
}

export const OperationAuthenticationConfig = {
  encode(message: OperationAuthenticationConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authRequired === true) {
      writer.uint32(8).bool(message.authRequired);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationAuthenticationConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationAuthenticationConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.authRequired = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationAuthenticationConfig {
    return { authRequired: isSet(object.authRequired) ? Boolean(object.authRequired) : false };
  },

  toJSON(message: OperationAuthenticationConfig): unknown {
    const obj: any = {};
    if (message.authRequired === true) {
      obj.authRequired = message.authRequired;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperationAuthenticationConfig>, I>>(base?: I): OperationAuthenticationConfig {
    return OperationAuthenticationConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OperationAuthenticationConfig>, I>>(
    object: I,
  ): OperationAuthenticationConfig {
    const message = createBaseOperationAuthenticationConfig();
    message.authRequired = object.authRequired ?? false;
    return message;
  },
};

function createBaseOperationCacheConfig(): OperationCacheConfig {
  return {
    enable: undefined,
    maxAge: undefined,
    public: undefined,
    staleWhileRevalidate: undefined,
    mustRevalidate: undefined,
  };
}

export const OperationCacheConfig = {
  encode(message: OperationCacheConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enable !== undefined) {
      writer.uint32(8).bool(message.enable);
    }
    if (message.maxAge !== undefined) {
      writer.uint32(16).int64(message.maxAge);
    }
    if (message.public !== undefined) {
      writer.uint32(24).bool(message.public);
    }
    if (message.staleWhileRevalidate !== undefined) {
      writer.uint32(32).int64(message.staleWhileRevalidate);
    }
    if (message.mustRevalidate !== undefined) {
      writer.uint32(40).bool(message.mustRevalidate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationCacheConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationCacheConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enable = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxAge = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.public = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.staleWhileRevalidate = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.mustRevalidate = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationCacheConfig {
    return {
      enable: isSet(object.enable) ? Boolean(object.enable) : undefined,
      maxAge: isSet(object.maxAge) ? Number(object.maxAge) : undefined,
      public: isSet(object.public) ? Boolean(object.public) : undefined,
      staleWhileRevalidate: isSet(object.staleWhileRevalidate) ? Number(object.staleWhileRevalidate) : undefined,
      mustRevalidate: isSet(object.mustRevalidate) ? Boolean(object.mustRevalidate) : undefined,
    };
  },

  toJSON(message: OperationCacheConfig): unknown {
    const obj: any = {};
    if (message.enable !== undefined) {
      obj.enable = message.enable;
    }
    if (message.maxAge !== undefined) {
      obj.maxAge = Math.round(message.maxAge);
    }
    if (message.public !== undefined) {
      obj.public = message.public;
    }
    if (message.staleWhileRevalidate !== undefined) {
      obj.staleWhileRevalidate = Math.round(message.staleWhileRevalidate);
    }
    if (message.mustRevalidate !== undefined) {
      obj.mustRevalidate = message.mustRevalidate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OperationCacheConfig>, I>>(base?: I): OperationCacheConfig {
    return OperationCacheConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OperationCacheConfig>, I>>(object: I): OperationCacheConfig {
    const message = createBaseOperationCacheConfig();
    message.enable = object.enable ?? undefined;
    message.maxAge = object.maxAge ?? undefined;
    message.public = object.public ?? undefined;
    message.staleWhileRevalidate = object.staleWhileRevalidate ?? undefined;
    message.mustRevalidate = object.mustRevalidate ?? undefined;
    return message;
  },
};

function createBaseEngineConfiguration(): EngineConfiguration {
  return {
    defaultFlushInterval: 0,
    datasourceConfigurations: [],
    fieldConfigurations: [],
    graphqlSchema: "",
    typeConfigurations: [],
    stringStorage: {},
  };
}

export const EngineConfiguration = {
  encode(message: EngineConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.defaultFlushInterval !== 0) {
      writer.uint32(8).int64(message.defaultFlushInterval);
    }
    for (const v of message.datasourceConfigurations) {
      DataSourceConfiguration.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.fieldConfigurations) {
      FieldConfiguration.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.graphqlSchema !== "") {
      writer.uint32(34).string(message.graphqlSchema);
    }
    for (const v of message.typeConfigurations) {
      TypeConfiguration.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    Object.entries(message.stringStorage).forEach(([key, value]) => {
      EngineConfiguration_StringStorageEntry.encode({ key: key as any, value }, writer.uint32(50).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EngineConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEngineConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.defaultFlushInterval = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.datasourceConfigurations.push(DataSourceConfiguration.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fieldConfigurations.push(FieldConfiguration.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.graphqlSchema = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.typeConfigurations.push(TypeConfiguration.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          const entry6 = EngineConfiguration_StringStorageEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.stringStorage[entry6.key] = entry6.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EngineConfiguration {
    return {
      defaultFlushInterval: isSet(object.defaultFlushInterval) ? Number(object.defaultFlushInterval) : 0,
      datasourceConfigurations: Array.isArray(object?.datasourceConfigurations)
        ? object.datasourceConfigurations.map((e: any) => DataSourceConfiguration.fromJSON(e))
        : [],
      fieldConfigurations: Array.isArray(object?.fieldConfigurations)
        ? object.fieldConfigurations.map((e: any) => FieldConfiguration.fromJSON(e))
        : [],
      graphqlSchema: isSet(object.graphqlSchema) ? String(object.graphqlSchema) : "",
      typeConfigurations: Array.isArray(object?.typeConfigurations)
        ? object.typeConfigurations.map((e: any) => TypeConfiguration.fromJSON(e))
        : [],
      stringStorage: isObject(object.stringStorage)
        ? Object.entries(object.stringStorage).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: EngineConfiguration): unknown {
    const obj: any = {};
    if (message.defaultFlushInterval !== 0) {
      obj.defaultFlushInterval = Math.round(message.defaultFlushInterval);
    }
    if (message.datasourceConfigurations?.length) {
      obj.datasourceConfigurations = message.datasourceConfigurations.map((e) => DataSourceConfiguration.toJSON(e));
    }
    if (message.fieldConfigurations?.length) {
      obj.fieldConfigurations = message.fieldConfigurations.map((e) => FieldConfiguration.toJSON(e));
    }
    if (message.graphqlSchema !== "") {
      obj.graphqlSchema = message.graphqlSchema;
    }
    if (message.typeConfigurations?.length) {
      obj.typeConfigurations = message.typeConfigurations.map((e) => TypeConfiguration.toJSON(e));
    }
    if (message.stringStorage) {
      const entries = Object.entries(message.stringStorage);
      if (entries.length > 0) {
        obj.stringStorage = {};
        entries.forEach(([k, v]) => {
          obj.stringStorage[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EngineConfiguration>, I>>(base?: I): EngineConfiguration {
    return EngineConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EngineConfiguration>, I>>(object: I): EngineConfiguration {
    const message = createBaseEngineConfiguration();
    message.defaultFlushInterval = object.defaultFlushInterval ?? 0;
    message.datasourceConfigurations =
      object.datasourceConfigurations?.map((e) => DataSourceConfiguration.fromPartial(e)) || [];
    message.fieldConfigurations = object.fieldConfigurations?.map((e) => FieldConfiguration.fromPartial(e)) || [];
    message.graphqlSchema = object.graphqlSchema ?? "";
    message.typeConfigurations = object.typeConfigurations?.map((e) => TypeConfiguration.fromPartial(e)) || [];
    message.stringStorage = Object.entries(object.stringStorage ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseEngineConfiguration_StringStorageEntry(): EngineConfiguration_StringStorageEntry {
  return { key: "", value: "" };
}

export const EngineConfiguration_StringStorageEntry = {
  encode(message: EngineConfiguration_StringStorageEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EngineConfiguration_StringStorageEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEngineConfiguration_StringStorageEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EngineConfiguration_StringStorageEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: EngineConfiguration_StringStorageEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EngineConfiguration_StringStorageEntry>, I>>(
    base?: I,
  ): EngineConfiguration_StringStorageEntry {
    return EngineConfiguration_StringStorageEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EngineConfiguration_StringStorageEntry>, I>>(
    object: I,
  ): EngineConfiguration_StringStorageEntry {
    const message = createBaseEngineConfiguration_StringStorageEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseInternedString(): InternedString {
  return { key: "" };
}

export const InternedString = {
  encode(message: InternedString, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InternedString {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInternedString();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InternedString {
    return { key: isSet(object.key) ? String(object.key) : "" };
  },

  toJSON(message: InternedString): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InternedString>, I>>(base?: I): InternedString {
    return InternedString.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InternedString>, I>>(object: I): InternedString {
    const message = createBaseInternedString();
    message.key = object.key ?? "";
    return message;
  },
};

function createBaseDataSourceConfiguration(): DataSourceConfiguration {
  return {
    kind: 0,
    rootNodes: [],
    childNodes: [],
    overrideFieldPathFromAlias: false,
    customRest: undefined,
    customGraphql: undefined,
    customStatic: undefined,
    customDatabase: undefined,
    directives: [],
    requestTimeoutSeconds: 0,
    id: "",
    customNatsKv: undefined,
  };
}

export const DataSourceConfiguration = {
  encode(message: DataSourceConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    for (const v of message.rootNodes) {
      TypeField.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.childNodes) {
      TypeField.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.overrideFieldPathFromAlias === true) {
      writer.uint32(32).bool(message.overrideFieldPathFromAlias);
    }
    if (message.customRest !== undefined) {
      DataSourceCustomREST.encode(message.customRest, writer.uint32(42).fork()).ldelim();
    }
    if (message.customGraphql !== undefined) {
      DataSourceCustomGraphQL.encode(message.customGraphql, writer.uint32(50).fork()).ldelim();
    }
    if (message.customStatic !== undefined) {
      DataSourceCustomStatic.encode(message.customStatic, writer.uint32(58).fork()).ldelim();
    }
    if (message.customDatabase !== undefined) {
      DataSourceCustomDatabase.encode(message.customDatabase, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.directives) {
      DirectiveConfiguration.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.requestTimeoutSeconds !== 0) {
      writer.uint32(80).int64(message.requestTimeoutSeconds);
    }
    if (message.id !== "") {
      writer.uint32(90).string(message.id);
    }
    if (message.customNatsKv !== undefined) {
      DataSourceCustomNatsKv.encode(message.customNatsKv, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataSourceConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataSourceConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.kind = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rootNodes.push(TypeField.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.childNodes.push(TypeField.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.overrideFieldPathFromAlias = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.customRest = DataSourceCustomREST.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.customGraphql = DataSourceCustomGraphQL.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.customStatic = DataSourceCustomStatic.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.customDatabase = DataSourceCustomDatabase.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.directives.push(DirectiveConfiguration.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.requestTimeoutSeconds = longToNumber(reader.int64() as Long);
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.id = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.customNatsKv = DataSourceCustomNatsKv.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataSourceConfiguration {
    return {
      kind: isSet(object.kind) ? dataSourceKindFromJSON(object.kind) : 0,
      rootNodes: Array.isArray(object?.rootNodes) ? object.rootNodes.map((e: any) => TypeField.fromJSON(e)) : [],
      childNodes: Array.isArray(object?.childNodes) ? object.childNodes.map((e: any) => TypeField.fromJSON(e)) : [],
      overrideFieldPathFromAlias: isSet(object.overrideFieldPathFromAlias)
        ? Boolean(object.overrideFieldPathFromAlias)
        : false,
      customRest: isSet(object.customRest) ? DataSourceCustomREST.fromJSON(object.customRest) : undefined,
      customGraphql: isSet(object.customGraphql) ? DataSourceCustomGraphQL.fromJSON(object.customGraphql) : undefined,
      customStatic: isSet(object.customStatic) ? DataSourceCustomStatic.fromJSON(object.customStatic) : undefined,
      customDatabase: isSet(object.customDatabase)
        ? DataSourceCustomDatabase.fromJSON(object.customDatabase)
        : undefined,
      directives: Array.isArray(object?.directives)
        ? object.directives.map((e: any) => DirectiveConfiguration.fromJSON(e))
        : [],
      requestTimeoutSeconds: isSet(object.requestTimeoutSeconds) ? Number(object.requestTimeoutSeconds) : 0,
      id: isSet(object.id) ? String(object.id) : "",
      customNatsKv: isSet(object.customNatsKv) ? DataSourceCustomNatsKv.fromJSON(object.customNatsKv) : undefined,
    };
  },

  toJSON(message: DataSourceConfiguration): unknown {
    const obj: any = {};
    if (message.kind !== 0) {
      obj.kind = dataSourceKindToJSON(message.kind);
    }
    if (message.rootNodes?.length) {
      obj.rootNodes = message.rootNodes.map((e) => TypeField.toJSON(e));
    }
    if (message.childNodes?.length) {
      obj.childNodes = message.childNodes.map((e) => TypeField.toJSON(e));
    }
    if (message.overrideFieldPathFromAlias === true) {
      obj.overrideFieldPathFromAlias = message.overrideFieldPathFromAlias;
    }
    if (message.customRest !== undefined) {
      obj.customRest = DataSourceCustomREST.toJSON(message.customRest);
    }
    if (message.customGraphql !== undefined) {
      obj.customGraphql = DataSourceCustomGraphQL.toJSON(message.customGraphql);
    }
    if (message.customStatic !== undefined) {
      obj.customStatic = DataSourceCustomStatic.toJSON(message.customStatic);
    }
    if (message.customDatabase !== undefined) {
      obj.customDatabase = DataSourceCustomDatabase.toJSON(message.customDatabase);
    }
    if (message.directives?.length) {
      obj.directives = message.directives.map((e) => DirectiveConfiguration.toJSON(e));
    }
    if (message.requestTimeoutSeconds !== 0) {
      obj.requestTimeoutSeconds = Math.round(message.requestTimeoutSeconds);
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.customNatsKv !== undefined) {
      obj.customNatsKv = DataSourceCustomNatsKv.toJSON(message.customNatsKv);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataSourceConfiguration>, I>>(base?: I): DataSourceConfiguration {
    return DataSourceConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataSourceConfiguration>, I>>(object: I): DataSourceConfiguration {
    const message = createBaseDataSourceConfiguration();
    message.kind = object.kind ?? 0;
    message.rootNodes = object.rootNodes?.map((e) => TypeField.fromPartial(e)) || [];
    message.childNodes = object.childNodes?.map((e) => TypeField.fromPartial(e)) || [];
    message.overrideFieldPathFromAlias = object.overrideFieldPathFromAlias ?? false;
    message.customRest = (object.customRest !== undefined && object.customRest !== null)
      ? DataSourceCustomREST.fromPartial(object.customRest)
      : undefined;
    message.customGraphql = (object.customGraphql !== undefined && object.customGraphql !== null)
      ? DataSourceCustomGraphQL.fromPartial(object.customGraphql)
      : undefined;
    message.customStatic = (object.customStatic !== undefined && object.customStatic !== null)
      ? DataSourceCustomStatic.fromPartial(object.customStatic)
      : undefined;
    message.customDatabase = (object.customDatabase !== undefined && object.customDatabase !== null)
      ? DataSourceCustomDatabase.fromPartial(object.customDatabase)
      : undefined;
    message.directives = object.directives?.map((e) => DirectiveConfiguration.fromPartial(e)) || [];
    message.requestTimeoutSeconds = object.requestTimeoutSeconds ?? 0;
    message.id = object.id ?? "";
    message.customNatsKv = (object.customNatsKv !== undefined && object.customNatsKv !== null)
      ? DataSourceCustomNatsKv.fromPartial(object.customNatsKv)
      : undefined;
    return message;
  },
};

function createBaseDirectiveConfiguration(): DirectiveConfiguration {
  return { directiveName: "", renameTo: "" };
}

export const DirectiveConfiguration = {
  encode(message: DirectiveConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.directiveName !== "") {
      writer.uint32(10).string(message.directiveName);
    }
    if (message.renameTo !== "") {
      writer.uint32(18).string(message.renameTo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DirectiveConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDirectiveConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.directiveName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.renameTo = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DirectiveConfiguration {
    return {
      directiveName: isSet(object.directiveName) ? String(object.directiveName) : "",
      renameTo: isSet(object.renameTo) ? String(object.renameTo) : "",
    };
  },

  toJSON(message: DirectiveConfiguration): unknown {
    const obj: any = {};
    if (message.directiveName !== "") {
      obj.directiveName = message.directiveName;
    }
    if (message.renameTo !== "") {
      obj.renameTo = message.renameTo;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DirectiveConfiguration>, I>>(base?: I): DirectiveConfiguration {
    return DirectiveConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DirectiveConfiguration>, I>>(object: I): DirectiveConfiguration {
    const message = createBaseDirectiveConfiguration();
    message.directiveName = object.directiveName ?? "";
    message.renameTo = object.renameTo ?? "";
    return message;
  },
};

function createBaseDataSourceCustomNatsKv(): DataSourceCustomNatsKv {
  return { serverURL: "", bucketName: "", operation: 0, history: 0, token: "", bucketPrefix: undefined };
}

export const DataSourceCustomNatsKv = {
  encode(message: DataSourceCustomNatsKv, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverURL !== "") {
      writer.uint32(10).string(message.serverURL);
    }
    if (message.bucketName !== "") {
      writer.uint32(18).string(message.bucketName);
    }
    if (message.operation !== 0) {
      writer.uint32(24).int32(message.operation);
    }
    if (message.history !== 0) {
      writer.uint32(32).int32(message.history);
    }
    if (message.token !== "") {
      writer.uint32(42).string(message.token);
    }
    if (message.bucketPrefix !== undefined) {
      ConfigurationVariable.encode(message.bucketPrefix, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataSourceCustomNatsKv {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataSourceCustomNatsKv();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serverURL = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bucketName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.operation = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.history = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.token = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.bucketPrefix = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataSourceCustomNatsKv {
    return {
      serverURL: isSet(object.serverURL) ? String(object.serverURL) : "",
      bucketName: isSet(object.bucketName) ? String(object.bucketName) : "",
      operation: isSet(object.operation) ? natsKvOperationFromJSON(object.operation) : 0,
      history: isSet(object.history) ? Number(object.history) : 0,
      token: isSet(object.token) ? String(object.token) : "",
      bucketPrefix: isSet(object.bucketPrefix) ? ConfigurationVariable.fromJSON(object.bucketPrefix) : undefined,
    };
  },

  toJSON(message: DataSourceCustomNatsKv): unknown {
    const obj: any = {};
    if (message.serverURL !== "") {
      obj.serverURL = message.serverURL;
    }
    if (message.bucketName !== "") {
      obj.bucketName = message.bucketName;
    }
    if (message.operation !== 0) {
      obj.operation = natsKvOperationToJSON(message.operation);
    }
    if (message.history !== 0) {
      obj.history = Math.round(message.history);
    }
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.bucketPrefix !== undefined) {
      obj.bucketPrefix = ConfigurationVariable.toJSON(message.bucketPrefix);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataSourceCustomNatsKv>, I>>(base?: I): DataSourceCustomNatsKv {
    return DataSourceCustomNatsKv.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataSourceCustomNatsKv>, I>>(object: I): DataSourceCustomNatsKv {
    const message = createBaseDataSourceCustomNatsKv();
    message.serverURL = object.serverURL ?? "";
    message.bucketName = object.bucketName ?? "";
    message.operation = object.operation ?? 0;
    message.history = object.history ?? 0;
    message.token = object.token ?? "";
    message.bucketPrefix = (object.bucketPrefix !== undefined && object.bucketPrefix !== null)
      ? ConfigurationVariable.fromPartial(object.bucketPrefix)
      : undefined;
    return message;
  },
};

function createBaseDataSourceCustomREST(): DataSourceCustomREST {
  return { fetch: undefined, subscription: undefined, statusCodeTypeMappings: [], defaultTypeName: "" };
}

export const DataSourceCustomREST = {
  encode(message: DataSourceCustomREST, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fetch !== undefined) {
      FetchConfiguration.encode(message.fetch, writer.uint32(10).fork()).ldelim();
    }
    if (message.subscription !== undefined) {
      RESTSubscriptionConfiguration.encode(message.subscription, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.statusCodeTypeMappings) {
      StatusCodeTypeMapping.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.defaultTypeName !== "") {
      writer.uint32(34).string(message.defaultTypeName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataSourceCustomREST {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataSourceCustomREST();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fetch = FetchConfiguration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subscription = RESTSubscriptionConfiguration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.statusCodeTypeMappings.push(StatusCodeTypeMapping.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.defaultTypeName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataSourceCustomREST {
    return {
      fetch: isSet(object.fetch) ? FetchConfiguration.fromJSON(object.fetch) : undefined,
      subscription: isSet(object.subscription)
        ? RESTSubscriptionConfiguration.fromJSON(object.subscription)
        : undefined,
      statusCodeTypeMappings: Array.isArray(object?.statusCodeTypeMappings)
        ? object.statusCodeTypeMappings.map((e: any) => StatusCodeTypeMapping.fromJSON(e))
        : [],
      defaultTypeName: isSet(object.defaultTypeName) ? String(object.defaultTypeName) : "",
    };
  },

  toJSON(message: DataSourceCustomREST): unknown {
    const obj: any = {};
    if (message.fetch !== undefined) {
      obj.fetch = FetchConfiguration.toJSON(message.fetch);
    }
    if (message.subscription !== undefined) {
      obj.subscription = RESTSubscriptionConfiguration.toJSON(message.subscription);
    }
    if (message.statusCodeTypeMappings?.length) {
      obj.statusCodeTypeMappings = message.statusCodeTypeMappings.map((e) => StatusCodeTypeMapping.toJSON(e));
    }
    if (message.defaultTypeName !== "") {
      obj.defaultTypeName = message.defaultTypeName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataSourceCustomREST>, I>>(base?: I): DataSourceCustomREST {
    return DataSourceCustomREST.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataSourceCustomREST>, I>>(object: I): DataSourceCustomREST {
    const message = createBaseDataSourceCustomREST();
    message.fetch = (object.fetch !== undefined && object.fetch !== null)
      ? FetchConfiguration.fromPartial(object.fetch)
      : undefined;
    message.subscription = (object.subscription !== undefined && object.subscription !== null)
      ? RESTSubscriptionConfiguration.fromPartial(object.subscription)
      : undefined;
    message.statusCodeTypeMappings = object.statusCodeTypeMappings?.map((e) => StatusCodeTypeMapping.fromPartial(e)) ||
      [];
    message.defaultTypeName = object.defaultTypeName ?? "";
    return message;
  },
};

function createBaseStatusCodeTypeMapping(): StatusCodeTypeMapping {
  return { statusCode: 0, typeName: "", injectStatusCodeIntoBody: false };
}

export const StatusCodeTypeMapping = {
  encode(message: StatusCodeTypeMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.statusCode !== 0) {
      writer.uint32(8).int64(message.statusCode);
    }
    if (message.typeName !== "") {
      writer.uint32(18).string(message.typeName);
    }
    if (message.injectStatusCodeIntoBody === true) {
      writer.uint32(24).bool(message.injectStatusCodeIntoBody);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusCodeTypeMapping {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusCodeTypeMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.statusCode = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.typeName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.injectStatusCodeIntoBody = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatusCodeTypeMapping {
    return {
      statusCode: isSet(object.statusCode) ? Number(object.statusCode) : 0,
      typeName: isSet(object.typeName) ? String(object.typeName) : "",
      injectStatusCodeIntoBody: isSet(object.injectStatusCodeIntoBody)
        ? Boolean(object.injectStatusCodeIntoBody)
        : false,
    };
  },

  toJSON(message: StatusCodeTypeMapping): unknown {
    const obj: any = {};
    if (message.statusCode !== 0) {
      obj.statusCode = Math.round(message.statusCode);
    }
    if (message.typeName !== "") {
      obj.typeName = message.typeName;
    }
    if (message.injectStatusCodeIntoBody === true) {
      obj.injectStatusCodeIntoBody = message.injectStatusCodeIntoBody;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatusCodeTypeMapping>, I>>(base?: I): StatusCodeTypeMapping {
    return StatusCodeTypeMapping.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<StatusCodeTypeMapping>, I>>(object: I): StatusCodeTypeMapping {
    const message = createBaseStatusCodeTypeMapping();
    message.statusCode = object.statusCode ?? 0;
    message.typeName = object.typeName ?? "";
    message.injectStatusCodeIntoBody = object.injectStatusCodeIntoBody ?? false;
    return message;
  },
};

function createBaseDataSourceCustomGraphQL(): DataSourceCustomGraphQL {
  return {
    fetch: undefined,
    subscription: undefined,
    federation: undefined,
    upstreamSchema: undefined,
    hooksConfiguration: undefined,
    customScalarTypeFields: [],
  };
}

export const DataSourceCustomGraphQL = {
  encode(message: DataSourceCustomGraphQL, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fetch !== undefined) {
      FetchConfiguration.encode(message.fetch, writer.uint32(10).fork()).ldelim();
    }
    if (message.subscription !== undefined) {
      GraphQLSubscriptionConfiguration.encode(message.subscription, writer.uint32(18).fork()).ldelim();
    }
    if (message.federation !== undefined) {
      GraphQLFederationConfiguration.encode(message.federation, writer.uint32(26).fork()).ldelim();
    }
    if (message.upstreamSchema !== undefined) {
      InternedString.encode(message.upstreamSchema, writer.uint32(34).fork()).ldelim();
    }
    if (message.hooksConfiguration !== undefined) {
      GraphQLDataSourceHooksConfiguration.encode(message.hooksConfiguration, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.customScalarTypeFields) {
      SingleTypeField.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataSourceCustomGraphQL {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataSourceCustomGraphQL();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fetch = FetchConfiguration.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subscription = GraphQLSubscriptionConfiguration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.federation = GraphQLFederationConfiguration.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.upstreamSchema = InternedString.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.hooksConfiguration = GraphQLDataSourceHooksConfiguration.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.customScalarTypeFields.push(SingleTypeField.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataSourceCustomGraphQL {
    return {
      fetch: isSet(object.fetch) ? FetchConfiguration.fromJSON(object.fetch) : undefined,
      subscription: isSet(object.subscription)
        ? GraphQLSubscriptionConfiguration.fromJSON(object.subscription)
        : undefined,
      federation: isSet(object.federation) ? GraphQLFederationConfiguration.fromJSON(object.federation) : undefined,
      upstreamSchema: isSet(object.upstreamSchema) ? InternedString.fromJSON(object.upstreamSchema) : undefined,
      hooksConfiguration: isSet(object.hooksConfiguration)
        ? GraphQLDataSourceHooksConfiguration.fromJSON(object.hooksConfiguration)
        : undefined,
      customScalarTypeFields: Array.isArray(object?.customScalarTypeFields)
        ? object.customScalarTypeFields.map((e: any) => SingleTypeField.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DataSourceCustomGraphQL): unknown {
    const obj: any = {};
    if (message.fetch !== undefined) {
      obj.fetch = FetchConfiguration.toJSON(message.fetch);
    }
    if (message.subscription !== undefined) {
      obj.subscription = GraphQLSubscriptionConfiguration.toJSON(message.subscription);
    }
    if (message.federation !== undefined) {
      obj.federation = GraphQLFederationConfiguration.toJSON(message.federation);
    }
    if (message.upstreamSchema !== undefined) {
      obj.upstreamSchema = InternedString.toJSON(message.upstreamSchema);
    }
    if (message.hooksConfiguration !== undefined) {
      obj.hooksConfiguration = GraphQLDataSourceHooksConfiguration.toJSON(message.hooksConfiguration);
    }
    if (message.customScalarTypeFields?.length) {
      obj.customScalarTypeFields = message.customScalarTypeFields.map((e) => SingleTypeField.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataSourceCustomGraphQL>, I>>(base?: I): DataSourceCustomGraphQL {
    return DataSourceCustomGraphQL.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataSourceCustomGraphQL>, I>>(object: I): DataSourceCustomGraphQL {
    const message = createBaseDataSourceCustomGraphQL();
    message.fetch = (object.fetch !== undefined && object.fetch !== null)
      ? FetchConfiguration.fromPartial(object.fetch)
      : undefined;
    message.subscription = (object.subscription !== undefined && object.subscription !== null)
      ? GraphQLSubscriptionConfiguration.fromPartial(object.subscription)
      : undefined;
    message.federation = (object.federation !== undefined && object.federation !== null)
      ? GraphQLFederationConfiguration.fromPartial(object.federation)
      : undefined;
    message.upstreamSchema = (object.upstreamSchema !== undefined && object.upstreamSchema !== null)
      ? InternedString.fromPartial(object.upstreamSchema)
      : undefined;
    message.hooksConfiguration = (object.hooksConfiguration !== undefined && object.hooksConfiguration !== null)
      ? GraphQLDataSourceHooksConfiguration.fromPartial(object.hooksConfiguration)
      : undefined;
    message.customScalarTypeFields = object.customScalarTypeFields?.map((e) => SingleTypeField.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDataSourceCustomDatabase(): DataSourceCustomDatabase {
  return {
    databaseURL: undefined,
    prismaSchema: undefined,
    graphqlSchema: undefined,
    closeTimeoutSeconds: 0,
    jsonTypeFields: [],
    jsonInputVariables: [],
  };
}

export const DataSourceCustomDatabase = {
  encode(message: DataSourceCustomDatabase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.databaseURL !== undefined) {
      ConfigurationVariable.encode(message.databaseURL, writer.uint32(10).fork()).ldelim();
    }
    if (message.prismaSchema !== undefined) {
      InternedString.encode(message.prismaSchema, writer.uint32(18).fork()).ldelim();
    }
    if (message.graphqlSchema !== undefined) {
      InternedString.encode(message.graphqlSchema, writer.uint32(26).fork()).ldelim();
    }
    if (message.closeTimeoutSeconds !== 0) {
      writer.uint32(32).int64(message.closeTimeoutSeconds);
    }
    for (const v of message.jsonTypeFields) {
      SingleTypeField.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.jsonInputVariables) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataSourceCustomDatabase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataSourceCustomDatabase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.databaseURL = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.prismaSchema = InternedString.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.graphqlSchema = InternedString.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.closeTimeoutSeconds = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.jsonTypeFields.push(SingleTypeField.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.jsonInputVariables.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataSourceCustomDatabase {
    return {
      databaseURL: isSet(object.databaseURL) ? ConfigurationVariable.fromJSON(object.databaseURL) : undefined,
      prismaSchema: isSet(object.prismaSchema) ? InternedString.fromJSON(object.prismaSchema) : undefined,
      graphqlSchema: isSet(object.graphqlSchema) ? InternedString.fromJSON(object.graphqlSchema) : undefined,
      closeTimeoutSeconds: isSet(object.closeTimeoutSeconds) ? Number(object.closeTimeoutSeconds) : 0,
      jsonTypeFields: Array.isArray(object?.jsonTypeFields)
        ? object.jsonTypeFields.map((e: any) => SingleTypeField.fromJSON(e))
        : [],
      jsonInputVariables: Array.isArray(object?.jsonInputVariables)
        ? object.jsonInputVariables.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: DataSourceCustomDatabase): unknown {
    const obj: any = {};
    if (message.databaseURL !== undefined) {
      obj.databaseURL = ConfigurationVariable.toJSON(message.databaseURL);
    }
    if (message.prismaSchema !== undefined) {
      obj.prismaSchema = InternedString.toJSON(message.prismaSchema);
    }
    if (message.graphqlSchema !== undefined) {
      obj.graphqlSchema = InternedString.toJSON(message.graphqlSchema);
    }
    if (message.closeTimeoutSeconds !== 0) {
      obj.closeTimeoutSeconds = Math.round(message.closeTimeoutSeconds);
    }
    if (message.jsonTypeFields?.length) {
      obj.jsonTypeFields = message.jsonTypeFields.map((e) => SingleTypeField.toJSON(e));
    }
    if (message.jsonInputVariables?.length) {
      obj.jsonInputVariables = message.jsonInputVariables;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataSourceCustomDatabase>, I>>(base?: I): DataSourceCustomDatabase {
    return DataSourceCustomDatabase.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataSourceCustomDatabase>, I>>(object: I): DataSourceCustomDatabase {
    const message = createBaseDataSourceCustomDatabase();
    message.databaseURL = (object.databaseURL !== undefined && object.databaseURL !== null)
      ? ConfigurationVariable.fromPartial(object.databaseURL)
      : undefined;
    message.prismaSchema = (object.prismaSchema !== undefined && object.prismaSchema !== null)
      ? InternedString.fromPartial(object.prismaSchema)
      : undefined;
    message.graphqlSchema = (object.graphqlSchema !== undefined && object.graphqlSchema !== null)
      ? InternedString.fromPartial(object.graphqlSchema)
      : undefined;
    message.closeTimeoutSeconds = object.closeTimeoutSeconds ?? 0;
    message.jsonTypeFields = object.jsonTypeFields?.map((e) => SingleTypeField.fromPartial(e)) || [];
    message.jsonInputVariables = object.jsonInputVariables?.map((e) => e) || [];
    return message;
  },
};

function createBaseGraphQLFederationConfiguration(): GraphQLFederationConfiguration {
  return { enabled: false, serviceSdl: "" };
}

export const GraphQLFederationConfiguration = {
  encode(message: GraphQLFederationConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.serviceSdl !== "") {
      writer.uint32(18).string(message.serviceSdl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GraphQLFederationConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphQLFederationConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.serviceSdl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GraphQLFederationConfiguration {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      serviceSdl: isSet(object.serviceSdl) ? String(object.serviceSdl) : "",
    };
  },

  toJSON(message: GraphQLFederationConfiguration): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.serviceSdl !== "") {
      obj.serviceSdl = message.serviceSdl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GraphQLFederationConfiguration>, I>>(base?: I): GraphQLFederationConfiguration {
    return GraphQLFederationConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GraphQLFederationConfiguration>, I>>(
    object: I,
  ): GraphQLFederationConfiguration {
    const message = createBaseGraphQLFederationConfiguration();
    message.enabled = object.enabled ?? false;
    message.serviceSdl = object.serviceSdl ?? "";
    return message;
  },
};

function createBaseDataSourceCustomStatic(): DataSourceCustomStatic {
  return { data: undefined };
}

export const DataSourceCustomStatic = {
  encode(message: DataSourceCustomStatic, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      ConfigurationVariable.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataSourceCustomStatic {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataSourceCustomStatic();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DataSourceCustomStatic {
    return { data: isSet(object.data) ? ConfigurationVariable.fromJSON(object.data) : undefined };
  },

  toJSON(message: DataSourceCustomStatic): unknown {
    const obj: any = {};
    if (message.data !== undefined) {
      obj.data = ConfigurationVariable.toJSON(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataSourceCustomStatic>, I>>(base?: I): DataSourceCustomStatic {
    return DataSourceCustomStatic.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataSourceCustomStatic>, I>>(object: I): DataSourceCustomStatic {
    const message = createBaseDataSourceCustomStatic();
    message.data = (object.data !== undefined && object.data !== null)
      ? ConfigurationVariable.fromPartial(object.data)
      : undefined;
    return message;
  },
};

function createBaseGraphQLSubscriptionConfiguration(): GraphQLSubscriptionConfiguration {
  return { enabled: false, url: undefined, useSSE: false };
}

export const GraphQLSubscriptionConfiguration = {
  encode(message: GraphQLSubscriptionConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.url !== undefined) {
      ConfigurationVariable.encode(message.url, writer.uint32(18).fork()).ldelim();
    }
    if (message.useSSE === true) {
      writer.uint32(24).bool(message.useSSE);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GraphQLSubscriptionConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGraphQLSubscriptionConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.url = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.useSSE = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GraphQLSubscriptionConfiguration {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      url: isSet(object.url) ? ConfigurationVariable.fromJSON(object.url) : undefined,
      useSSE: isSet(object.useSSE) ? Boolean(object.useSSE) : false,
    };
  },

  toJSON(message: GraphQLSubscriptionConfiguration): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.url !== undefined) {
      obj.url = ConfigurationVariable.toJSON(message.url);
    }
    if (message.useSSE === true) {
      obj.useSSE = message.useSSE;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GraphQLSubscriptionConfiguration>, I>>(
    base?: I,
  ): GraphQLSubscriptionConfiguration {
    return GraphQLSubscriptionConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GraphQLSubscriptionConfiguration>, I>>(
    object: I,
  ): GraphQLSubscriptionConfiguration {
    const message = createBaseGraphQLSubscriptionConfiguration();
    message.enabled = object.enabled ?? false;
    message.url = (object.url !== undefined && object.url !== null)
      ? ConfigurationVariable.fromPartial(object.url)
      : undefined;
    message.useSSE = object.useSSE ?? false;
    return message;
  },
};

function createBaseFetchConfiguration(): FetchConfiguration {
  return {
    url: undefined,
    method: 0,
    header: {},
    body: undefined,
    query: [],
    upstreamAuthentication: undefined,
    urlEncodeBody: false,
    mTLS: undefined,
    baseUrl: undefined,
    path: undefined,
    httpProxyUrl: undefined,
  };
}

export const FetchConfiguration = {
  encode(message: FetchConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== undefined) {
      ConfigurationVariable.encode(message.url, writer.uint32(10).fork()).ldelim();
    }
    if (message.method !== 0) {
      writer.uint32(16).int32(message.method);
    }
    Object.entries(message.header).forEach(([key, value]) => {
      FetchConfiguration_HeaderEntry.encode({ key: key as any, value }, writer.uint32(26).fork()).ldelim();
    });
    if (message.body !== undefined) {
      ConfigurationVariable.encode(message.body, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.query) {
      URLQueryConfiguration.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.upstreamAuthentication !== undefined) {
      UpstreamAuthentication.encode(message.upstreamAuthentication, writer.uint32(50).fork()).ldelim();
    }
    if (message.urlEncodeBody === true) {
      writer.uint32(56).bool(message.urlEncodeBody);
    }
    if (message.mTLS !== undefined) {
      MTLSConfiguration.encode(message.mTLS, writer.uint32(66).fork()).ldelim();
    }
    if (message.baseUrl !== undefined) {
      ConfigurationVariable.encode(message.baseUrl, writer.uint32(74).fork()).ldelim();
    }
    if (message.path !== undefined) {
      ConfigurationVariable.encode(message.path, writer.uint32(82).fork()).ldelim();
    }
    if (message.httpProxyUrl !== undefined) {
      ConfigurationVariable.encode(message.httpProxyUrl, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.url = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.method = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          const entry3 = FetchConfiguration_HeaderEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.header[entry3.key] = entry3.value;
          }
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.body = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.query.push(URLQueryConfiguration.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.upstreamAuthentication = UpstreamAuthentication.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.urlEncodeBody = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.mTLS = MTLSConfiguration.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.baseUrl = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.path = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.httpProxyUrl = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchConfiguration {
    return {
      url: isSet(object.url) ? ConfigurationVariable.fromJSON(object.url) : undefined,
      method: isSet(object.method) ? hTTPMethodFromJSON(object.method) : 0,
      header: isObject(object.header)
        ? Object.entries(object.header).reduce<{ [key: string]: HTTPHeader }>((acc, [key, value]) => {
          acc[key] = HTTPHeader.fromJSON(value);
          return acc;
        }, {})
        : {},
      body: isSet(object.body) ? ConfigurationVariable.fromJSON(object.body) : undefined,
      query: Array.isArray(object?.query) ? object.query.map((e: any) => URLQueryConfiguration.fromJSON(e)) : [],
      upstreamAuthentication: isSet(object.upstreamAuthentication)
        ? UpstreamAuthentication.fromJSON(object.upstreamAuthentication)
        : undefined,
      urlEncodeBody: isSet(object.urlEncodeBody) ? Boolean(object.urlEncodeBody) : false,
      mTLS: isSet(object.mTLS) ? MTLSConfiguration.fromJSON(object.mTLS) : undefined,
      baseUrl: isSet(object.baseUrl) ? ConfigurationVariable.fromJSON(object.baseUrl) : undefined,
      path: isSet(object.path) ? ConfigurationVariable.fromJSON(object.path) : undefined,
      httpProxyUrl: isSet(object.httpProxyUrl) ? ConfigurationVariable.fromJSON(object.httpProxyUrl) : undefined,
    };
  },

  toJSON(message: FetchConfiguration): unknown {
    const obj: any = {};
    if (message.url !== undefined) {
      obj.url = ConfigurationVariable.toJSON(message.url);
    }
    if (message.method !== 0) {
      obj.method = hTTPMethodToJSON(message.method);
    }
    if (message.header) {
      const entries = Object.entries(message.header);
      if (entries.length > 0) {
        obj.header = {};
        entries.forEach(([k, v]) => {
          obj.header[k] = HTTPHeader.toJSON(v);
        });
      }
    }
    if (message.body !== undefined) {
      obj.body = ConfigurationVariable.toJSON(message.body);
    }
    if (message.query?.length) {
      obj.query = message.query.map((e) => URLQueryConfiguration.toJSON(e));
    }
    if (message.upstreamAuthentication !== undefined) {
      obj.upstreamAuthentication = UpstreamAuthentication.toJSON(message.upstreamAuthentication);
    }
    if (message.urlEncodeBody === true) {
      obj.urlEncodeBody = message.urlEncodeBody;
    }
    if (message.mTLS !== undefined) {
      obj.mTLS = MTLSConfiguration.toJSON(message.mTLS);
    }
    if (message.baseUrl !== undefined) {
      obj.baseUrl = ConfigurationVariable.toJSON(message.baseUrl);
    }
    if (message.path !== undefined) {
      obj.path = ConfigurationVariable.toJSON(message.path);
    }
    if (message.httpProxyUrl !== undefined) {
      obj.httpProxyUrl = ConfigurationVariable.toJSON(message.httpProxyUrl);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchConfiguration>, I>>(base?: I): FetchConfiguration {
    return FetchConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FetchConfiguration>, I>>(object: I): FetchConfiguration {
    const message = createBaseFetchConfiguration();
    message.url = (object.url !== undefined && object.url !== null)
      ? ConfigurationVariable.fromPartial(object.url)
      : undefined;
    message.method = object.method ?? 0;
    message.header = Object.entries(object.header ?? {}).reduce<{ [key: string]: HTTPHeader }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = HTTPHeader.fromPartial(value);
      }
      return acc;
    }, {});
    message.body = (object.body !== undefined && object.body !== null)
      ? ConfigurationVariable.fromPartial(object.body)
      : undefined;
    message.query = object.query?.map((e) => URLQueryConfiguration.fromPartial(e)) || [];
    message.upstreamAuthentication =
      (object.upstreamAuthentication !== undefined && object.upstreamAuthentication !== null)
        ? UpstreamAuthentication.fromPartial(object.upstreamAuthentication)
        : undefined;
    message.urlEncodeBody = object.urlEncodeBody ?? false;
    message.mTLS = (object.mTLS !== undefined && object.mTLS !== null)
      ? MTLSConfiguration.fromPartial(object.mTLS)
      : undefined;
    message.baseUrl = (object.baseUrl !== undefined && object.baseUrl !== null)
      ? ConfigurationVariable.fromPartial(object.baseUrl)
      : undefined;
    message.path = (object.path !== undefined && object.path !== null)
      ? ConfigurationVariable.fromPartial(object.path)
      : undefined;
    message.httpProxyUrl = (object.httpProxyUrl !== undefined && object.httpProxyUrl !== null)
      ? ConfigurationVariable.fromPartial(object.httpProxyUrl)
      : undefined;
    return message;
  },
};

function createBaseFetchConfiguration_HeaderEntry(): FetchConfiguration_HeaderEntry {
  return { key: "", value: undefined };
}

export const FetchConfiguration_HeaderEntry = {
  encode(message: FetchConfiguration_HeaderEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      HTTPHeader.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FetchConfiguration_HeaderEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFetchConfiguration_HeaderEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = HTTPHeader.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FetchConfiguration_HeaderEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? HTTPHeader.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: FetchConfiguration_HeaderEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = HTTPHeader.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FetchConfiguration_HeaderEntry>, I>>(base?: I): FetchConfiguration_HeaderEntry {
    return FetchConfiguration_HeaderEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FetchConfiguration_HeaderEntry>, I>>(
    object: I,
  ): FetchConfiguration_HeaderEntry {
    const message = createBaseFetchConfiguration_HeaderEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? HTTPHeader.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseMTLSConfiguration(): MTLSConfiguration {
  return { key: undefined, cert: undefined, insecureSkipVerify: false };
}

export const MTLSConfiguration = {
  encode(message: MTLSConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      ConfigurationVariable.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.cert !== undefined) {
      ConfigurationVariable.encode(message.cert, writer.uint32(18).fork()).ldelim();
    }
    if (message.insecureSkipVerify === true) {
      writer.uint32(24).bool(message.insecureSkipVerify);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MTLSConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMTLSConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cert = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.insecureSkipVerify = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MTLSConfiguration {
    return {
      key: isSet(object.key) ? ConfigurationVariable.fromJSON(object.key) : undefined,
      cert: isSet(object.cert) ? ConfigurationVariable.fromJSON(object.cert) : undefined,
      insecureSkipVerify: isSet(object.insecureSkipVerify) ? Boolean(object.insecureSkipVerify) : false,
    };
  },

  toJSON(message: MTLSConfiguration): unknown {
    const obj: any = {};
    if (message.key !== undefined) {
      obj.key = ConfigurationVariable.toJSON(message.key);
    }
    if (message.cert !== undefined) {
      obj.cert = ConfigurationVariable.toJSON(message.cert);
    }
    if (message.insecureSkipVerify === true) {
      obj.insecureSkipVerify = message.insecureSkipVerify;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MTLSConfiguration>, I>>(base?: I): MTLSConfiguration {
    return MTLSConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MTLSConfiguration>, I>>(object: I): MTLSConfiguration {
    const message = createBaseMTLSConfiguration();
    message.key = (object.key !== undefined && object.key !== null)
      ? ConfigurationVariable.fromPartial(object.key)
      : undefined;
    message.cert = (object.cert !== undefined && object.cert !== null)
      ? ConfigurationVariable.fromPartial(object.cert)
      : undefined;
    message.insecureSkipVerify = object.insecureSkipVerify ?? false;
    return message;
  },
};

function createBaseUpstreamAuthentication(): UpstreamAuthentication {
  return { kind: 0, jwtConfig: undefined, jwtWithAccessTokenExchangeConfig: undefined };
}

export const UpstreamAuthentication = {
  encode(message: UpstreamAuthentication, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.jwtConfig !== undefined) {
      JwtUpstreamAuthenticationConfig.encode(message.jwtConfig, writer.uint32(18).fork()).ldelim();
    }
    if (message.jwtWithAccessTokenExchangeConfig !== undefined) {
      JwtUpstreamAuthenticationWithAccessTokenExchange.encode(
        message.jwtWithAccessTokenExchangeConfig,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpstreamAuthentication {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpstreamAuthentication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.kind = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.jwtConfig = JwtUpstreamAuthenticationConfig.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.jwtWithAccessTokenExchangeConfig = JwtUpstreamAuthenticationWithAccessTokenExchange.decode(
            reader,
            reader.uint32(),
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpstreamAuthentication {
    return {
      kind: isSet(object.kind) ? upstreamAuthenticationKindFromJSON(object.kind) : 0,
      jwtConfig: isSet(object.jwtConfig) ? JwtUpstreamAuthenticationConfig.fromJSON(object.jwtConfig) : undefined,
      jwtWithAccessTokenExchangeConfig: isSet(object.jwtWithAccessTokenExchangeConfig)
        ? JwtUpstreamAuthenticationWithAccessTokenExchange.fromJSON(object.jwtWithAccessTokenExchangeConfig)
        : undefined,
    };
  },

  toJSON(message: UpstreamAuthentication): unknown {
    const obj: any = {};
    if (message.kind !== 0) {
      obj.kind = upstreamAuthenticationKindToJSON(message.kind);
    }
    if (message.jwtConfig !== undefined) {
      obj.jwtConfig = JwtUpstreamAuthenticationConfig.toJSON(message.jwtConfig);
    }
    if (message.jwtWithAccessTokenExchangeConfig !== undefined) {
      obj.jwtWithAccessTokenExchangeConfig = JwtUpstreamAuthenticationWithAccessTokenExchange.toJSON(
        message.jwtWithAccessTokenExchangeConfig,
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpstreamAuthentication>, I>>(base?: I): UpstreamAuthentication {
    return UpstreamAuthentication.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UpstreamAuthentication>, I>>(object: I): UpstreamAuthentication {
    const message = createBaseUpstreamAuthentication();
    message.kind = object.kind ?? 0;
    message.jwtConfig = (object.jwtConfig !== undefined && object.jwtConfig !== null)
      ? JwtUpstreamAuthenticationConfig.fromPartial(object.jwtConfig)
      : undefined;
    message.jwtWithAccessTokenExchangeConfig =
      (object.jwtWithAccessTokenExchangeConfig !== undefined && object.jwtWithAccessTokenExchangeConfig !== null)
        ? JwtUpstreamAuthenticationWithAccessTokenExchange.fromPartial(object.jwtWithAccessTokenExchangeConfig)
        : undefined;
    return message;
  },
};

function createBaseJwtUpstreamAuthenticationConfig(): JwtUpstreamAuthenticationConfig {
  return { secret: undefined, signingMethod: 0 };
}

export const JwtUpstreamAuthenticationConfig = {
  encode(message: JwtUpstreamAuthenticationConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secret !== undefined) {
      ConfigurationVariable.encode(message.secret, writer.uint32(10).fork()).ldelim();
    }
    if (message.signingMethod !== 0) {
      writer.uint32(16).int32(message.signingMethod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JwtUpstreamAuthenticationConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJwtUpstreamAuthenticationConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secret = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.signingMethod = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JwtUpstreamAuthenticationConfig {
    return {
      secret: isSet(object.secret) ? ConfigurationVariable.fromJSON(object.secret) : undefined,
      signingMethod: isSet(object.signingMethod) ? signingMethodFromJSON(object.signingMethod) : 0,
    };
  },

  toJSON(message: JwtUpstreamAuthenticationConfig): unknown {
    const obj: any = {};
    if (message.secret !== undefined) {
      obj.secret = ConfigurationVariable.toJSON(message.secret);
    }
    if (message.signingMethod !== 0) {
      obj.signingMethod = signingMethodToJSON(message.signingMethod);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JwtUpstreamAuthenticationConfig>, I>>(base?: I): JwtUpstreamAuthenticationConfig {
    return JwtUpstreamAuthenticationConfig.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<JwtUpstreamAuthenticationConfig>, I>>(
    object: I,
  ): JwtUpstreamAuthenticationConfig {
    const message = createBaseJwtUpstreamAuthenticationConfig();
    message.secret = (object.secret !== undefined && object.secret !== null)
      ? ConfigurationVariable.fromPartial(object.secret)
      : undefined;
    message.signingMethod = object.signingMethod ?? 0;
    return message;
  },
};

function createBaseJwtUpstreamAuthenticationWithAccessTokenExchange(): JwtUpstreamAuthenticationWithAccessTokenExchange {
  return { secret: undefined, signingMethod: 0, accessTokenExchangeEndpoint: undefined };
}

export const JwtUpstreamAuthenticationWithAccessTokenExchange = {
  encode(
    message: JwtUpstreamAuthenticationWithAccessTokenExchange,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.secret !== undefined) {
      ConfigurationVariable.encode(message.secret, writer.uint32(10).fork()).ldelim();
    }
    if (message.signingMethod !== 0) {
      writer.uint32(16).int32(message.signingMethod);
    }
    if (message.accessTokenExchangeEndpoint !== undefined) {
      ConfigurationVariable.encode(message.accessTokenExchangeEndpoint, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JwtUpstreamAuthenticationWithAccessTokenExchange {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJwtUpstreamAuthenticationWithAccessTokenExchange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.secret = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.signingMethod = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.accessTokenExchangeEndpoint = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JwtUpstreamAuthenticationWithAccessTokenExchange {
    return {
      secret: isSet(object.secret) ? ConfigurationVariable.fromJSON(object.secret) : undefined,
      signingMethod: isSet(object.signingMethod) ? signingMethodFromJSON(object.signingMethod) : 0,
      accessTokenExchangeEndpoint: isSet(object.accessTokenExchangeEndpoint)
        ? ConfigurationVariable.fromJSON(object.accessTokenExchangeEndpoint)
        : undefined,
    };
  },

  toJSON(message: JwtUpstreamAuthenticationWithAccessTokenExchange): unknown {
    const obj: any = {};
    if (message.secret !== undefined) {
      obj.secret = ConfigurationVariable.toJSON(message.secret);
    }
    if (message.signingMethod !== 0) {
      obj.signingMethod = signingMethodToJSON(message.signingMethod);
    }
    if (message.accessTokenExchangeEndpoint !== undefined) {
      obj.accessTokenExchangeEndpoint = ConfigurationVariable.toJSON(message.accessTokenExchangeEndpoint);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<JwtUpstreamAuthenticationWithAccessTokenExchange>, I>>(
    base?: I,
  ): JwtUpstreamAuthenticationWithAccessTokenExchange {
    return JwtUpstreamAuthenticationWithAccessTokenExchange.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<JwtUpstreamAuthenticationWithAccessTokenExchange>, I>>(
    object: I,
  ): JwtUpstreamAuthenticationWithAccessTokenExchange {
    const message = createBaseJwtUpstreamAuthenticationWithAccessTokenExchange();
    message.secret = (object.secret !== undefined && object.secret !== null)
      ? ConfigurationVariable.fromPartial(object.secret)
      : undefined;
    message.signingMethod = object.signingMethod ?? 0;
    message.accessTokenExchangeEndpoint =
      (object.accessTokenExchangeEndpoint !== undefined && object.accessTokenExchangeEndpoint !== null)
        ? ConfigurationVariable.fromPartial(object.accessTokenExchangeEndpoint)
        : undefined;
    return message;
  },
};

function createBaseRESTSubscriptionConfiguration(): RESTSubscriptionConfiguration {
  return { enabled: false, pollingIntervalMillis: 0, skipPublishSameResponse: false };
}

export const RESTSubscriptionConfiguration = {
  encode(message: RESTSubscriptionConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.pollingIntervalMillis !== 0) {
      writer.uint32(16).int64(message.pollingIntervalMillis);
    }
    if (message.skipPublishSameResponse === true) {
      writer.uint32(24).bool(message.skipPublishSameResponse);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RESTSubscriptionConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRESTSubscriptionConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pollingIntervalMillis = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.skipPublishSameResponse = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RESTSubscriptionConfiguration {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      pollingIntervalMillis: isSet(object.pollingIntervalMillis) ? Number(object.pollingIntervalMillis) : 0,
      skipPublishSameResponse: isSet(object.skipPublishSameResponse) ? Boolean(object.skipPublishSameResponse) : false,
    };
  },

  toJSON(message: RESTSubscriptionConfiguration): unknown {
    const obj: any = {};
    if (message.enabled === true) {
      obj.enabled = message.enabled;
    }
    if (message.pollingIntervalMillis !== 0) {
      obj.pollingIntervalMillis = Math.round(message.pollingIntervalMillis);
    }
    if (message.skipPublishSameResponse === true) {
      obj.skipPublishSameResponse = message.skipPublishSameResponse;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RESTSubscriptionConfiguration>, I>>(base?: I): RESTSubscriptionConfiguration {
    return RESTSubscriptionConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RESTSubscriptionConfiguration>, I>>(
    object: I,
  ): RESTSubscriptionConfiguration {
    const message = createBaseRESTSubscriptionConfiguration();
    message.enabled = object.enabled ?? false;
    message.pollingIntervalMillis = object.pollingIntervalMillis ?? 0;
    message.skipPublishSameResponse = object.skipPublishSameResponse ?? false;
    return message;
  },
};

function createBaseURLQueryConfiguration(): URLQueryConfiguration {
  return { name: "", value: "" };
}

export const URLQueryConfiguration = {
  encode(message: URLQueryConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): URLQueryConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseURLQueryConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): URLQueryConfiguration {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: URLQueryConfiguration): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<URLQueryConfiguration>, I>>(base?: I): URLQueryConfiguration {
    return URLQueryConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<URLQueryConfiguration>, I>>(object: I): URLQueryConfiguration {
    const message = createBaseURLQueryConfiguration();
    message.name = object.name ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseHTTPHeader(): HTTPHeader {
  return { values: [] };
}

export const HTTPHeader = {
  encode(message: HTTPHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.values) {
      ConfigurationVariable.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HTTPHeader {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHTTPHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.values.push(ConfigurationVariable.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HTTPHeader {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => ConfigurationVariable.fromJSON(e)) : [],
    };
  },

  toJSON(message: HTTPHeader): unknown {
    const obj: any = {};
    if (message.values?.length) {
      obj.values = message.values.map((e) => ConfigurationVariable.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HTTPHeader>, I>>(base?: I): HTTPHeader {
    return HTTPHeader.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<HTTPHeader>, I>>(object: I): HTTPHeader {
    const message = createBaseHTTPHeader();
    message.values = object.values?.map((e) => ConfigurationVariable.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTypeConfiguration(): TypeConfiguration {
  return { typeName: "", renameTo: "" };
}

export const TypeConfiguration = {
  encode(message: TypeConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeName !== "") {
      writer.uint32(10).string(message.typeName);
    }
    if (message.renameTo !== "") {
      writer.uint32(18).string(message.renameTo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TypeConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTypeConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.typeName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.renameTo = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TypeConfiguration {
    return {
      typeName: isSet(object.typeName) ? String(object.typeName) : "",
      renameTo: isSet(object.renameTo) ? String(object.renameTo) : "",
    };
  },

  toJSON(message: TypeConfiguration): unknown {
    const obj: any = {};
    if (message.typeName !== "") {
      obj.typeName = message.typeName;
    }
    if (message.renameTo !== "") {
      obj.renameTo = message.renameTo;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TypeConfiguration>, I>>(base?: I): TypeConfiguration {
    return TypeConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TypeConfiguration>, I>>(object: I): TypeConfiguration {
    const message = createBaseTypeConfiguration();
    message.typeName = object.typeName ?? "";
    message.renameTo = object.renameTo ?? "";
    return message;
  },
};

function createBaseFieldConfiguration(): FieldConfiguration {
  return {
    typeName: "",
    fieldName: "",
    disableDefaultFieldMapping: false,
    path: [],
    argumentsConfiguration: [],
    requiresFields: [],
    unescapeResponseJson: false,
  };
}

export const FieldConfiguration = {
  encode(message: FieldConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeName !== "") {
      writer.uint32(10).string(message.typeName);
    }
    if (message.fieldName !== "") {
      writer.uint32(18).string(message.fieldName);
    }
    if (message.disableDefaultFieldMapping === true) {
      writer.uint32(24).bool(message.disableDefaultFieldMapping);
    }
    for (const v of message.path) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.argumentsConfiguration) {
      ArgumentConfiguration.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.requiresFields) {
      writer.uint32(58).string(v!);
    }
    if (message.unescapeResponseJson === true) {
      writer.uint32(64).bool(message.unescapeResponseJson);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.typeName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fieldName = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.disableDefaultFieldMapping = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.path.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.argumentsConfiguration.push(ArgumentConfiguration.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.requiresFields.push(reader.string());
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.unescapeResponseJson = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FieldConfiguration {
    return {
      typeName: isSet(object.typeName) ? String(object.typeName) : "",
      fieldName: isSet(object.fieldName) ? String(object.fieldName) : "",
      disableDefaultFieldMapping: isSet(object.disableDefaultFieldMapping)
        ? Boolean(object.disableDefaultFieldMapping)
        : false,
      path: Array.isArray(object?.path) ? object.path.map((e: any) => String(e)) : [],
      argumentsConfiguration: Array.isArray(object?.argumentsConfiguration)
        ? object.argumentsConfiguration.map((e: any) => ArgumentConfiguration.fromJSON(e))
        : [],
      requiresFields: Array.isArray(object?.requiresFields) ? object.requiresFields.map((e: any) => String(e)) : [],
      unescapeResponseJson: isSet(object.unescapeResponseJson) ? Boolean(object.unescapeResponseJson) : false,
    };
  },

  toJSON(message: FieldConfiguration): unknown {
    const obj: any = {};
    if (message.typeName !== "") {
      obj.typeName = message.typeName;
    }
    if (message.fieldName !== "") {
      obj.fieldName = message.fieldName;
    }
    if (message.disableDefaultFieldMapping === true) {
      obj.disableDefaultFieldMapping = message.disableDefaultFieldMapping;
    }
    if (message.path?.length) {
      obj.path = message.path;
    }
    if (message.argumentsConfiguration?.length) {
      obj.argumentsConfiguration = message.argumentsConfiguration.map((e) => ArgumentConfiguration.toJSON(e));
    }
    if (message.requiresFields?.length) {
      obj.requiresFields = message.requiresFields;
    }
    if (message.unescapeResponseJson === true) {
      obj.unescapeResponseJson = message.unescapeResponseJson;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FieldConfiguration>, I>>(base?: I): FieldConfiguration {
    return FieldConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FieldConfiguration>, I>>(object: I): FieldConfiguration {
    const message = createBaseFieldConfiguration();
    message.typeName = object.typeName ?? "";
    message.fieldName = object.fieldName ?? "";
    message.disableDefaultFieldMapping = object.disableDefaultFieldMapping ?? false;
    message.path = object.path?.map((e) => e) || [];
    message.argumentsConfiguration = object.argumentsConfiguration?.map((e) => ArgumentConfiguration.fromPartial(e)) ||
      [];
    message.requiresFields = object.requiresFields?.map((e) => e) || [];
    message.unescapeResponseJson = object.unescapeResponseJson ?? false;
    return message;
  },
};

function createBaseTypeField(): TypeField {
  return { typeName: "", fieldNames: [] };
}

export const TypeField = {
  encode(message: TypeField, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeName !== "") {
      writer.uint32(10).string(message.typeName);
    }
    for (const v of message.fieldNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TypeField {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTypeField();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.typeName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fieldNames.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TypeField {
    return {
      typeName: isSet(object.typeName) ? String(object.typeName) : "",
      fieldNames: Array.isArray(object?.fieldNames) ? object.fieldNames.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: TypeField): unknown {
    const obj: any = {};
    if (message.typeName !== "") {
      obj.typeName = message.typeName;
    }
    if (message.fieldNames?.length) {
      obj.fieldNames = message.fieldNames;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TypeField>, I>>(base?: I): TypeField {
    return TypeField.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TypeField>, I>>(object: I): TypeField {
    const message = createBaseTypeField();
    message.typeName = object.typeName ?? "";
    message.fieldNames = object.fieldNames?.map((e) => e) || [];
    return message;
  },
};

function createBaseSingleTypeField(): SingleTypeField {
  return { typeName: "", fieldName: "" };
}

export const SingleTypeField = {
  encode(message: SingleTypeField, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typeName !== "") {
      writer.uint32(10).string(message.typeName);
    }
    if (message.fieldName !== "") {
      writer.uint32(18).string(message.fieldName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SingleTypeField {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSingleTypeField();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.typeName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fieldName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SingleTypeField {
    return {
      typeName: isSet(object.typeName) ? String(object.typeName) : "",
      fieldName: isSet(object.fieldName) ? String(object.fieldName) : "",
    };
  },

  toJSON(message: SingleTypeField): unknown {
    const obj: any = {};
    if (message.typeName !== "") {
      obj.typeName = message.typeName;
    }
    if (message.fieldName !== "") {
      obj.fieldName = message.fieldName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SingleTypeField>, I>>(base?: I): SingleTypeField {
    return SingleTypeField.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SingleTypeField>, I>>(object: I): SingleTypeField {
    const message = createBaseSingleTypeField();
    message.typeName = object.typeName ?? "";
    message.fieldName = object.fieldName ?? "";
    return message;
  },
};

function createBaseArgumentConfiguration(): ArgumentConfiguration {
  return { name: "", sourceType: 0, sourcePath: [], renderConfiguration: 0, renameTypeTo: "" };
}

export const ArgumentConfiguration = {
  encode(message: ArgumentConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.sourceType !== 0) {
      writer.uint32(16).int32(message.sourceType);
    }
    for (const v of message.sourcePath) {
      writer.uint32(26).string(v!);
    }
    if (message.renderConfiguration !== 0) {
      writer.uint32(32).int32(message.renderConfiguration);
    }
    if (message.renameTypeTo !== "") {
      writer.uint32(42).string(message.renameTypeTo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ArgumentConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArgumentConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.sourceType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sourcePath.push(reader.string());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.renderConfiguration = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.renameTypeTo = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ArgumentConfiguration {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      sourceType: isSet(object.sourceType) ? argumentSourceFromJSON(object.sourceType) : 0,
      sourcePath: Array.isArray(object?.sourcePath) ? object.sourcePath.map((e: any) => String(e)) : [],
      renderConfiguration: isSet(object.renderConfiguration)
        ? argumentRenderConfigurationFromJSON(object.renderConfiguration)
        : 0,
      renameTypeTo: isSet(object.renameTypeTo) ? String(object.renameTypeTo) : "",
    };
  },

  toJSON(message: ArgumentConfiguration): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.sourceType !== 0) {
      obj.sourceType = argumentSourceToJSON(message.sourceType);
    }
    if (message.sourcePath?.length) {
      obj.sourcePath = message.sourcePath;
    }
    if (message.renderConfiguration !== 0) {
      obj.renderConfiguration = argumentRenderConfigurationToJSON(message.renderConfiguration);
    }
    if (message.renameTypeTo !== "") {
      obj.renameTypeTo = message.renameTypeTo;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ArgumentConfiguration>, I>>(base?: I): ArgumentConfiguration {
    return ArgumentConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ArgumentConfiguration>, I>>(object: I): ArgumentConfiguration {
    const message = createBaseArgumentConfiguration();
    message.name = object.name ?? "";
    message.sourceType = object.sourceType ?? 0;
    message.sourcePath = object.sourcePath?.map((e) => e) || [];
    message.renderConfiguration = object.renderConfiguration ?? 0;
    message.renameTypeTo = object.renameTypeTo ?? "";
    return message;
  },
};

function createBaseWunderGraphConfiguration(): WunderGraphConfiguration {
  return {
    api: undefined,
    apiId: "",
    environmentIds: [],
    dangerouslyEnableGraphQLEndpoint: false,
    configHash: "",
    enabledFeatures: undefined,
    hooks: [],
  };
}

export const WunderGraphConfiguration = {
  encode(message: WunderGraphConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.api !== undefined) {
      UserDefinedApi.encode(message.api, writer.uint32(10).fork()).ldelim();
    }
    if (message.apiId !== "") {
      writer.uint32(18).string(message.apiId);
    }
    for (const v of message.environmentIds) {
      writer.uint32(26).string(v!);
    }
    if (message.dangerouslyEnableGraphQLEndpoint === true) {
      writer.uint32(32).bool(message.dangerouslyEnableGraphQLEndpoint);
    }
    if (message.configHash !== "") {
      writer.uint32(42).string(message.configHash);
    }
    if (message.enabledFeatures !== undefined) {
      EnabledFeatures.encode(message.enabledFeatures, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.hooks) {
      Hook.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WunderGraphConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWunderGraphConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.api = UserDefinedApi.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.apiId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.environmentIds.push(reader.string());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.dangerouslyEnableGraphQLEndpoint = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.configHash = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.enabledFeatures = EnabledFeatures.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.hooks.push(Hook.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WunderGraphConfiguration {
    return {
      api: isSet(object.api) ? UserDefinedApi.fromJSON(object.api) : undefined,
      apiId: isSet(object.apiId) ? String(object.apiId) : "",
      environmentIds: Array.isArray(object?.environmentIds) ? object.environmentIds.map((e: any) => String(e)) : [],
      dangerouslyEnableGraphQLEndpoint: isSet(object.dangerouslyEnableGraphQLEndpoint)
        ? Boolean(object.dangerouslyEnableGraphQLEndpoint)
        : false,
      configHash: isSet(object.configHash) ? String(object.configHash) : "",
      enabledFeatures: isSet(object.enabledFeatures) ? EnabledFeatures.fromJSON(object.enabledFeatures) : undefined,
      hooks: Array.isArray(object?.hooks) ? object.hooks.map((e: any) => Hook.fromJSON(e)) : [],
    };
  },

  toJSON(message: WunderGraphConfiguration): unknown {
    const obj: any = {};
    if (message.api !== undefined) {
      obj.api = UserDefinedApi.toJSON(message.api);
    }
    if (message.apiId !== "") {
      obj.apiId = message.apiId;
    }
    if (message.environmentIds?.length) {
      obj.environmentIds = message.environmentIds;
    }
    if (message.dangerouslyEnableGraphQLEndpoint === true) {
      obj.dangerouslyEnableGraphQLEndpoint = message.dangerouslyEnableGraphQLEndpoint;
    }
    if (message.configHash !== "") {
      obj.configHash = message.configHash;
    }
    if (message.enabledFeatures !== undefined) {
      obj.enabledFeatures = EnabledFeatures.toJSON(message.enabledFeatures);
    }
    if (message.hooks?.length) {
      obj.hooks = message.hooks.map((e) => Hook.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WunderGraphConfiguration>, I>>(base?: I): WunderGraphConfiguration {
    return WunderGraphConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<WunderGraphConfiguration>, I>>(object: I): WunderGraphConfiguration {
    const message = createBaseWunderGraphConfiguration();
    message.api = (object.api !== undefined && object.api !== null)
      ? UserDefinedApi.fromPartial(object.api)
      : undefined;
    message.apiId = object.apiId ?? "";
    message.environmentIds = object.environmentIds?.map((e) => e) || [];
    message.dangerouslyEnableGraphQLEndpoint = object.dangerouslyEnableGraphQLEndpoint ?? false;
    message.configHash = object.configHash ?? "";
    message.enabledFeatures = (object.enabledFeatures !== undefined && object.enabledFeatures !== null)
      ? EnabledFeatures.fromPartial(object.enabledFeatures)
      : undefined;
    message.hooks = object.hooks?.map((e) => Hook.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEnabledFeatures(): EnabledFeatures {
  return {
    apiCount: 0,
    schemaExtension: false,
    customJSONScalars: false,
    customIntScalars: false,
    customFloatScalars: false,
  };
}

export const EnabledFeatures = {
  encode(message: EnabledFeatures, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.apiCount !== 0) {
      writer.uint32(8).int32(message.apiCount);
    }
    if (message.schemaExtension === true) {
      writer.uint32(16).bool(message.schemaExtension);
    }
    if (message.customJSONScalars === true) {
      writer.uint32(24).bool(message.customJSONScalars);
    }
    if (message.customIntScalars === true) {
      writer.uint32(32).bool(message.customIntScalars);
    }
    if (message.customFloatScalars === true) {
      writer.uint32(40).bool(message.customFloatScalars);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EnabledFeatures {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnabledFeatures();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.apiCount = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.schemaExtension = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.customJSONScalars = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.customIntScalars = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.customFloatScalars = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EnabledFeatures {
    return {
      apiCount: isSet(object.apiCount) ? Number(object.apiCount) : 0,
      schemaExtension: isSet(object.schemaExtension) ? Boolean(object.schemaExtension) : false,
      customJSONScalars: isSet(object.customJSONScalars) ? Boolean(object.customJSONScalars) : false,
      customIntScalars: isSet(object.customIntScalars) ? Boolean(object.customIntScalars) : false,
      customFloatScalars: isSet(object.customFloatScalars) ? Boolean(object.customFloatScalars) : false,
    };
  },

  toJSON(message: EnabledFeatures): unknown {
    const obj: any = {};
    if (message.apiCount !== 0) {
      obj.apiCount = Math.round(message.apiCount);
    }
    if (message.schemaExtension === true) {
      obj.schemaExtension = message.schemaExtension;
    }
    if (message.customJSONScalars === true) {
      obj.customJSONScalars = message.customJSONScalars;
    }
    if (message.customIntScalars === true) {
      obj.customIntScalars = message.customIntScalars;
    }
    if (message.customFloatScalars === true) {
      obj.customFloatScalars = message.customFloatScalars;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EnabledFeatures>, I>>(base?: I): EnabledFeatures {
    return EnabledFeatures.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<EnabledFeatures>, I>>(object: I): EnabledFeatures {
    const message = createBaseEnabledFeatures();
    message.apiCount = object.apiCount ?? 0;
    message.schemaExtension = object.schemaExtension ?? false;
    message.customJSONScalars = object.customJSONScalars ?? false;
    message.customIntScalars = object.customIntScalars ?? false;
    message.customFloatScalars = object.customFloatScalars ?? false;
    return message;
  },
};

function createBaseS3UploadProfileHooksConfiguration(): S3UploadProfileHooksConfiguration {
  return { preUpload: false, postUpload: false };
}

export const S3UploadProfileHooksConfiguration = {
  encode(message: S3UploadProfileHooksConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.preUpload === true) {
      writer.uint32(8).bool(message.preUpload);
    }
    if (message.postUpload === true) {
      writer.uint32(16).bool(message.postUpload);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S3UploadProfileHooksConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS3UploadProfileHooksConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.preUpload = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.postUpload = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): S3UploadProfileHooksConfiguration {
    return {
      preUpload: isSet(object.preUpload) ? Boolean(object.preUpload) : false,
      postUpload: isSet(object.postUpload) ? Boolean(object.postUpload) : false,
    };
  },

  toJSON(message: S3UploadProfileHooksConfiguration): unknown {
    const obj: any = {};
    if (message.preUpload === true) {
      obj.preUpload = message.preUpload;
    }
    if (message.postUpload === true) {
      obj.postUpload = message.postUpload;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<S3UploadProfileHooksConfiguration>, I>>(
    base?: I,
  ): S3UploadProfileHooksConfiguration {
    return S3UploadProfileHooksConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<S3UploadProfileHooksConfiguration>, I>>(
    object: I,
  ): S3UploadProfileHooksConfiguration {
    const message = createBaseS3UploadProfileHooksConfiguration();
    message.preUpload = object.preUpload ?? false;
    message.postUpload = object.postUpload ?? false;
    return message;
  },
};

function createBaseS3UploadProfile(): S3UploadProfile {
  return {
    requireAuthentication: false,
    maxAllowedUploadSizeBytes: 0,
    maxAllowedFiles: 0,
    allowedMimeTypes: [],
    allowedFileExtensions: [],
    metadataJSONSchema: "",
    hooks: undefined,
  };
}

export const S3UploadProfile = {
  encode(message: S3UploadProfile, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.requireAuthentication === true) {
      writer.uint32(8).bool(message.requireAuthentication);
    }
    if (message.maxAllowedUploadSizeBytes !== 0) {
      writer.uint32(16).int32(message.maxAllowedUploadSizeBytes);
    }
    if (message.maxAllowedFiles !== 0) {
      writer.uint32(24).int32(message.maxAllowedFiles);
    }
    for (const v of message.allowedMimeTypes) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.allowedFileExtensions) {
      writer.uint32(42).string(v!);
    }
    if (message.metadataJSONSchema !== "") {
      writer.uint32(50).string(message.metadataJSONSchema);
    }
    if (message.hooks !== undefined) {
      S3UploadProfileHooksConfiguration.encode(message.hooks, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S3UploadProfile {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS3UploadProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.requireAuthentication = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxAllowedUploadSizeBytes = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maxAllowedFiles = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.allowedMimeTypes.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.allowedFileExtensions.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.metadataJSONSchema = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.hooks = S3UploadProfileHooksConfiguration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): S3UploadProfile {
    return {
      requireAuthentication: isSet(object.requireAuthentication) ? Boolean(object.requireAuthentication) : false,
      maxAllowedUploadSizeBytes: isSet(object.maxAllowedUploadSizeBytes) ? Number(object.maxAllowedUploadSizeBytes) : 0,
      maxAllowedFiles: isSet(object.maxAllowedFiles) ? Number(object.maxAllowedFiles) : 0,
      allowedMimeTypes: Array.isArray(object?.allowedMimeTypes)
        ? object.allowedMimeTypes.map((e: any) => String(e))
        : [],
      allowedFileExtensions: Array.isArray(object?.allowedFileExtensions)
        ? object.allowedFileExtensions.map((e: any) => String(e))
        : [],
      metadataJSONSchema: isSet(object.metadataJSONSchema) ? String(object.metadataJSONSchema) : "",
      hooks: isSet(object.hooks) ? S3UploadProfileHooksConfiguration.fromJSON(object.hooks) : undefined,
    };
  },

  toJSON(message: S3UploadProfile): unknown {
    const obj: any = {};
    if (message.requireAuthentication === true) {
      obj.requireAuthentication = message.requireAuthentication;
    }
    if (message.maxAllowedUploadSizeBytes !== 0) {
      obj.maxAllowedUploadSizeBytes = Math.round(message.maxAllowedUploadSizeBytes);
    }
    if (message.maxAllowedFiles !== 0) {
      obj.maxAllowedFiles = Math.round(message.maxAllowedFiles);
    }
    if (message.allowedMimeTypes?.length) {
      obj.allowedMimeTypes = message.allowedMimeTypes;
    }
    if (message.allowedFileExtensions?.length) {
      obj.allowedFileExtensions = message.allowedFileExtensions;
    }
    if (message.metadataJSONSchema !== "") {
      obj.metadataJSONSchema = message.metadataJSONSchema;
    }
    if (message.hooks !== undefined) {
      obj.hooks = S3UploadProfileHooksConfiguration.toJSON(message.hooks);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<S3UploadProfile>, I>>(base?: I): S3UploadProfile {
    return S3UploadProfile.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<S3UploadProfile>, I>>(object: I): S3UploadProfile {
    const message = createBaseS3UploadProfile();
    message.requireAuthentication = object.requireAuthentication ?? false;
    message.maxAllowedUploadSizeBytes = object.maxAllowedUploadSizeBytes ?? 0;
    message.maxAllowedFiles = object.maxAllowedFiles ?? 0;
    message.allowedMimeTypes = object.allowedMimeTypes?.map((e) => e) || [];
    message.allowedFileExtensions = object.allowedFileExtensions?.map((e) => e) || [];
    message.metadataJSONSchema = object.metadataJSONSchema ?? "";
    message.hooks = (object.hooks !== undefined && object.hooks !== null)
      ? S3UploadProfileHooksConfiguration.fromPartial(object.hooks)
      : undefined;
    return message;
  },
};

function createBaseS3UploadConfiguration(): S3UploadConfiguration {
  return {
    name: "",
    endpoint: undefined,
    accessKeyID: undefined,
    secretAccessKey: undefined,
    bucketName: undefined,
    bucketLocation: undefined,
    useSSL: false,
    uploadProfiles: {},
  };
}

export const S3UploadConfiguration = {
  encode(message: S3UploadConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.endpoint !== undefined) {
      ConfigurationVariable.encode(message.endpoint, writer.uint32(18).fork()).ldelim();
    }
    if (message.accessKeyID !== undefined) {
      ConfigurationVariable.encode(message.accessKeyID, writer.uint32(26).fork()).ldelim();
    }
    if (message.secretAccessKey !== undefined) {
      ConfigurationVariable.encode(message.secretAccessKey, writer.uint32(34).fork()).ldelim();
    }
    if (message.bucketName !== undefined) {
      ConfigurationVariable.encode(message.bucketName, writer.uint32(42).fork()).ldelim();
    }
    if (message.bucketLocation !== undefined) {
      ConfigurationVariable.encode(message.bucketLocation, writer.uint32(50).fork()).ldelim();
    }
    if (message.useSSL === true) {
      writer.uint32(56).bool(message.useSSL);
    }
    Object.entries(message.uploadProfiles).forEach(([key, value]) => {
      S3UploadConfiguration_UploadProfilesEntry.encode({ key: key as any, value }, writer.uint32(66).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S3UploadConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS3UploadConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.endpoint = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.accessKeyID = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.secretAccessKey = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.bucketName = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.bucketLocation = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.useSSL = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          const entry8 = S3UploadConfiguration_UploadProfilesEntry.decode(reader, reader.uint32());
          if (entry8.value !== undefined) {
            message.uploadProfiles[entry8.key] = entry8.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): S3UploadConfiguration {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      endpoint: isSet(object.endpoint) ? ConfigurationVariable.fromJSON(object.endpoint) : undefined,
      accessKeyID: isSet(object.accessKeyID) ? ConfigurationVariable.fromJSON(object.accessKeyID) : undefined,
      secretAccessKey: isSet(object.secretAccessKey)
        ? ConfigurationVariable.fromJSON(object.secretAccessKey)
        : undefined,
      bucketName: isSet(object.bucketName) ? ConfigurationVariable.fromJSON(object.bucketName) : undefined,
      bucketLocation: isSet(object.bucketLocation) ? ConfigurationVariable.fromJSON(object.bucketLocation) : undefined,
      useSSL: isSet(object.useSSL) ? Boolean(object.useSSL) : false,
      uploadProfiles: isObject(object.uploadProfiles)
        ? Object.entries(object.uploadProfiles).reduce<{ [key: string]: S3UploadProfile }>((acc, [key, value]) => {
          acc[key] = S3UploadProfile.fromJSON(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: S3UploadConfiguration): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.endpoint !== undefined) {
      obj.endpoint = ConfigurationVariable.toJSON(message.endpoint);
    }
    if (message.accessKeyID !== undefined) {
      obj.accessKeyID = ConfigurationVariable.toJSON(message.accessKeyID);
    }
    if (message.secretAccessKey !== undefined) {
      obj.secretAccessKey = ConfigurationVariable.toJSON(message.secretAccessKey);
    }
    if (message.bucketName !== undefined) {
      obj.bucketName = ConfigurationVariable.toJSON(message.bucketName);
    }
    if (message.bucketLocation !== undefined) {
      obj.bucketLocation = ConfigurationVariable.toJSON(message.bucketLocation);
    }
    if (message.useSSL === true) {
      obj.useSSL = message.useSSL;
    }
    if (message.uploadProfiles) {
      const entries = Object.entries(message.uploadProfiles);
      if (entries.length > 0) {
        obj.uploadProfiles = {};
        entries.forEach(([k, v]) => {
          obj.uploadProfiles[k] = S3UploadProfile.toJSON(v);
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<S3UploadConfiguration>, I>>(base?: I): S3UploadConfiguration {
    return S3UploadConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<S3UploadConfiguration>, I>>(object: I): S3UploadConfiguration {
    const message = createBaseS3UploadConfiguration();
    message.name = object.name ?? "";
    message.endpoint = (object.endpoint !== undefined && object.endpoint !== null)
      ? ConfigurationVariable.fromPartial(object.endpoint)
      : undefined;
    message.accessKeyID = (object.accessKeyID !== undefined && object.accessKeyID !== null)
      ? ConfigurationVariable.fromPartial(object.accessKeyID)
      : undefined;
    message.secretAccessKey = (object.secretAccessKey !== undefined && object.secretAccessKey !== null)
      ? ConfigurationVariable.fromPartial(object.secretAccessKey)
      : undefined;
    message.bucketName = (object.bucketName !== undefined && object.bucketName !== null)
      ? ConfigurationVariable.fromPartial(object.bucketName)
      : undefined;
    message.bucketLocation = (object.bucketLocation !== undefined && object.bucketLocation !== null)
      ? ConfigurationVariable.fromPartial(object.bucketLocation)
      : undefined;
    message.useSSL = object.useSSL ?? false;
    message.uploadProfiles = Object.entries(object.uploadProfiles ?? {}).reduce<{ [key: string]: S3UploadProfile }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = S3UploadProfile.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseS3UploadConfiguration_UploadProfilesEntry(): S3UploadConfiguration_UploadProfilesEntry {
  return { key: "", value: undefined };
}

export const S3UploadConfiguration_UploadProfilesEntry = {
  encode(message: S3UploadConfiguration_UploadProfilesEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      S3UploadProfile.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): S3UploadConfiguration_UploadProfilesEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseS3UploadConfiguration_UploadProfilesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = S3UploadProfile.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): S3UploadConfiguration_UploadProfilesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? S3UploadProfile.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: S3UploadConfiguration_UploadProfilesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== undefined) {
      obj.value = S3UploadProfile.toJSON(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<S3UploadConfiguration_UploadProfilesEntry>, I>>(
    base?: I,
  ): S3UploadConfiguration_UploadProfilesEntry {
    return S3UploadConfiguration_UploadProfilesEntry.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<S3UploadConfiguration_UploadProfilesEntry>, I>>(
    object: I,
  ): S3UploadConfiguration_UploadProfilesEntry {
    const message = createBaseS3UploadConfiguration_UploadProfilesEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? S3UploadProfile.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseUserDefinedApi(): UserDefinedApi {
  return {
    engineConfiguration: undefined,
    enableGraphqlEndpoint: false,
    operations: [],
    invalidOperationNames: [],
    corsConfiguration: undefined,
    authenticationConfig: undefined,
    s3UploadConfiguration: [],
    allowedHostNames: [],
    webhooks: [],
    serverOptions: undefined,
    nodeOptions: undefined,
    experimentalConfig: undefined,
  };
}

export const UserDefinedApi = {
  encode(message: UserDefinedApi, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.engineConfiguration !== undefined) {
      EngineConfiguration.encode(message.engineConfiguration, writer.uint32(26).fork()).ldelim();
    }
    if (message.enableGraphqlEndpoint === true) {
      writer.uint32(40).bool(message.enableGraphqlEndpoint);
    }
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.invalidOperationNames) {
      writer.uint32(130).string(v!);
    }
    if (message.corsConfiguration !== undefined) {
      CorsConfiguration.encode(message.corsConfiguration, writer.uint32(58).fork()).ldelim();
    }
    if (message.authenticationConfig !== undefined) {
      ApiAuthenticationConfig.encode(message.authenticationConfig, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.s3UploadConfiguration) {
      S3UploadConfiguration.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.allowedHostNames) {
      ConfigurationVariable.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.webhooks) {
      WebhookConfiguration.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.serverOptions !== undefined) {
      ServerOptions.encode(message.serverOptions, writer.uint32(114).fork()).ldelim();
    }
    if (message.nodeOptions !== undefined) {
      NodeOptions.encode(message.nodeOptions, writer.uint32(122).fork()).ldelim();
    }
    if (message.experimentalConfig !== undefined) {
      ExperimentalConfiguration.encode(message.experimentalConfig, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserDefinedApi {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserDefinedApi();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.engineConfiguration = EngineConfiguration.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.enableGraphqlEndpoint = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.operations.push(Operation.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.invalidOperationNames.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.corsConfiguration = CorsConfiguration.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.authenticationConfig = ApiAuthenticationConfig.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.s3UploadConfiguration.push(S3UploadConfiguration.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.allowedHostNames.push(ConfigurationVariable.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.webhooks.push(WebhookConfiguration.decode(reader, reader.uint32()));
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.serverOptions = ServerOptions.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.nodeOptions = NodeOptions.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.experimentalConfig = ExperimentalConfiguration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserDefinedApi {
    return {
      engineConfiguration: isSet(object.engineConfiguration)
        ? EngineConfiguration.fromJSON(object.engineConfiguration)
        : undefined,
      enableGraphqlEndpoint: isSet(object.enableGraphqlEndpoint) ? Boolean(object.enableGraphqlEndpoint) : false,
      operations: Array.isArray(object?.operations) ? object.operations.map((e: any) => Operation.fromJSON(e)) : [],
      invalidOperationNames: Array.isArray(object?.invalidOperationNames)
        ? object.invalidOperationNames.map((e: any) => String(e))
        : [],
      corsConfiguration: isSet(object.corsConfiguration)
        ? CorsConfiguration.fromJSON(object.corsConfiguration)
        : undefined,
      authenticationConfig: isSet(object.authenticationConfig)
        ? ApiAuthenticationConfig.fromJSON(object.authenticationConfig)
        : undefined,
      s3UploadConfiguration: Array.isArray(object?.s3UploadConfiguration)
        ? object.s3UploadConfiguration.map((e: any) => S3UploadConfiguration.fromJSON(e))
        : [],
      allowedHostNames: Array.isArray(object?.allowedHostNames)
        ? object.allowedHostNames.map((e: any) => ConfigurationVariable.fromJSON(e))
        : [],
      webhooks: Array.isArray(object?.webhooks)
        ? object.webhooks.map((e: any) => WebhookConfiguration.fromJSON(e))
        : [],
      serverOptions: isSet(object.serverOptions) ? ServerOptions.fromJSON(object.serverOptions) : undefined,
      nodeOptions: isSet(object.nodeOptions) ? NodeOptions.fromJSON(object.nodeOptions) : undefined,
      experimentalConfig: isSet(object.experimentalConfig)
        ? ExperimentalConfiguration.fromJSON(object.experimentalConfig)
        : undefined,
    };
  },

  toJSON(message: UserDefinedApi): unknown {
    const obj: any = {};
    if (message.engineConfiguration !== undefined) {
      obj.engineConfiguration = EngineConfiguration.toJSON(message.engineConfiguration);
    }
    if (message.enableGraphqlEndpoint === true) {
      obj.enableGraphqlEndpoint = message.enableGraphqlEndpoint;
    }
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    if (message.invalidOperationNames?.length) {
      obj.invalidOperationNames = message.invalidOperationNames;
    }
    if (message.corsConfiguration !== undefined) {
      obj.corsConfiguration = CorsConfiguration.toJSON(message.corsConfiguration);
    }
    if (message.authenticationConfig !== undefined) {
      obj.authenticationConfig = ApiAuthenticationConfig.toJSON(message.authenticationConfig);
    }
    if (message.s3UploadConfiguration?.length) {
      obj.s3UploadConfiguration = message.s3UploadConfiguration.map((e) => S3UploadConfiguration.toJSON(e));
    }
    if (message.allowedHostNames?.length) {
      obj.allowedHostNames = message.allowedHostNames.map((e) => ConfigurationVariable.toJSON(e));
    }
    if (message.webhooks?.length) {
      obj.webhooks = message.webhooks.map((e) => WebhookConfiguration.toJSON(e));
    }
    if (message.serverOptions !== undefined) {
      obj.serverOptions = ServerOptions.toJSON(message.serverOptions);
    }
    if (message.nodeOptions !== undefined) {
      obj.nodeOptions = NodeOptions.toJSON(message.nodeOptions);
    }
    if (message.experimentalConfig !== undefined) {
      obj.experimentalConfig = ExperimentalConfiguration.toJSON(message.experimentalConfig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserDefinedApi>, I>>(base?: I): UserDefinedApi {
    return UserDefinedApi.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserDefinedApi>, I>>(object: I): UserDefinedApi {
    const message = createBaseUserDefinedApi();
    message.engineConfiguration = (object.engineConfiguration !== undefined && object.engineConfiguration !== null)
      ? EngineConfiguration.fromPartial(object.engineConfiguration)
      : undefined;
    message.enableGraphqlEndpoint = object.enableGraphqlEndpoint ?? false;
    message.operations = object.operations?.map((e) => Operation.fromPartial(e)) || [];
    message.invalidOperationNames = object.invalidOperationNames?.map((e) => e) || [];
    message.corsConfiguration = (object.corsConfiguration !== undefined && object.corsConfiguration !== null)
      ? CorsConfiguration.fromPartial(object.corsConfiguration)
      : undefined;
    message.authenticationConfig = (object.authenticationConfig !== undefined && object.authenticationConfig !== null)
      ? ApiAuthenticationConfig.fromPartial(object.authenticationConfig)
      : undefined;
    message.s3UploadConfiguration = object.s3UploadConfiguration?.map((e) => S3UploadConfiguration.fromPartial(e)) ||
      [];
    message.allowedHostNames = object.allowedHostNames?.map((e) => ConfigurationVariable.fromPartial(e)) || [];
    message.webhooks = object.webhooks?.map((e) => WebhookConfiguration.fromPartial(e)) || [];
    message.serverOptions = (object.serverOptions !== undefined && object.serverOptions !== null)
      ? ServerOptions.fromPartial(object.serverOptions)
      : undefined;
    message.nodeOptions = (object.nodeOptions !== undefined && object.nodeOptions !== null)
      ? NodeOptions.fromPartial(object.nodeOptions)
      : undefined;
    message.experimentalConfig = (object.experimentalConfig !== undefined && object.experimentalConfig !== null)
      ? ExperimentalConfiguration.fromPartial(object.experimentalConfig)
      : undefined;
    return message;
  },
};

function createBaseExperimentalConfiguration(): ExperimentalConfiguration {
  return { orm: false };
}

export const ExperimentalConfiguration = {
  encode(message: ExperimentalConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orm === true) {
      writer.uint32(8).bool(message.orm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExperimentalConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExperimentalConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.orm = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ExperimentalConfiguration {
    return { orm: isSet(object.orm) ? Boolean(object.orm) : false };
  },

  toJSON(message: ExperimentalConfiguration): unknown {
    const obj: any = {};
    if (message.orm === true) {
      obj.orm = message.orm;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ExperimentalConfiguration>, I>>(base?: I): ExperimentalConfiguration {
    return ExperimentalConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ExperimentalConfiguration>, I>>(object: I): ExperimentalConfiguration {
    const message = createBaseExperimentalConfiguration();
    message.orm = object.orm ?? false;
    return message;
  },
};

function createBaseListenerOptions(): ListenerOptions {
  return { host: undefined, port: undefined };
}

export const ListenerOptions = {
  encode(message: ListenerOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.host !== undefined) {
      ConfigurationVariable.encode(message.host, writer.uint32(10).fork()).ldelim();
    }
    if (message.port !== undefined) {
      ConfigurationVariable.encode(message.port, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListenerOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListenerOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.host = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.port = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListenerOptions {
    return {
      host: isSet(object.host) ? ConfigurationVariable.fromJSON(object.host) : undefined,
      port: isSet(object.port) ? ConfigurationVariable.fromJSON(object.port) : undefined,
    };
  },

  toJSON(message: ListenerOptions): unknown {
    const obj: any = {};
    if (message.host !== undefined) {
      obj.host = ConfigurationVariable.toJSON(message.host);
    }
    if (message.port !== undefined) {
      obj.port = ConfigurationVariable.toJSON(message.port);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ListenerOptions>, I>>(base?: I): ListenerOptions {
    return ListenerOptions.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ListenerOptions>, I>>(object: I): ListenerOptions {
    const message = createBaseListenerOptions();
    message.host = (object.host !== undefined && object.host !== null)
      ? ConfigurationVariable.fromPartial(object.host)
      : undefined;
    message.port = (object.port !== undefined && object.port !== null)
      ? ConfigurationVariable.fromPartial(object.port)
      : undefined;
    return message;
  },
};

function createBaseInternalListenerOptions(): InternalListenerOptions {
  return { port: undefined };
}

export const InternalListenerOptions = {
  encode(message: InternalListenerOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.port !== undefined) {
      ConfigurationVariable.encode(message.port, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InternalListenerOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInternalListenerOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.port = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InternalListenerOptions {
    return { port: isSet(object.port) ? ConfigurationVariable.fromJSON(object.port) : undefined };
  },

  toJSON(message: InternalListenerOptions): unknown {
    const obj: any = {};
    if (message.port !== undefined) {
      obj.port = ConfigurationVariable.toJSON(message.port);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InternalListenerOptions>, I>>(base?: I): InternalListenerOptions {
    return InternalListenerOptions.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<InternalListenerOptions>, I>>(object: I): InternalListenerOptions {
    const message = createBaseInternalListenerOptions();
    message.port = (object.port !== undefined && object.port !== null)
      ? ConfigurationVariable.fromPartial(object.port)
      : undefined;
    return message;
  },
};

function createBaseNodeLogging(): NodeLogging {
  return { level: undefined };
}

export const NodeLogging = {
  encode(message: NodeLogging, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.level !== undefined) {
      ConfigurationVariable.encode(message.level, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeLogging {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeLogging();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.level = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeLogging {
    return { level: isSet(object.level) ? ConfigurationVariable.fromJSON(object.level) : undefined };
  },

  toJSON(message: NodeLogging): unknown {
    const obj: any = {};
    if (message.level !== undefined) {
      obj.level = ConfigurationVariable.toJSON(message.level);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeLogging>, I>>(base?: I): NodeLogging {
    return NodeLogging.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NodeLogging>, I>>(object: I): NodeLogging {
    const message = createBaseNodeLogging();
    message.level = (object.level !== undefined && object.level !== null)
      ? ConfigurationVariable.fromPartial(object.level)
      : undefined;
    return message;
  },
};

function createBasePrometheusOptions(): PrometheusOptions {
  return { enabled: undefined, port: undefined };
}

export const PrometheusOptions = {
  encode(message: PrometheusOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled !== undefined) {
      ConfigurationVariable.encode(message.enabled, writer.uint32(10).fork()).ldelim();
    }
    if (message.port !== undefined) {
      ConfigurationVariable.encode(message.port, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrometheusOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrometheusOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.enabled = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.port = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PrometheusOptions {
    return {
      enabled: isSet(object.enabled) ? ConfigurationVariable.fromJSON(object.enabled) : undefined,
      port: isSet(object.port) ? ConfigurationVariable.fromJSON(object.port) : undefined,
    };
  },

  toJSON(message: PrometheusOptions): unknown {
    const obj: any = {};
    if (message.enabled !== undefined) {
      obj.enabled = ConfigurationVariable.toJSON(message.enabled);
    }
    if (message.port !== undefined) {
      obj.port = ConfigurationVariable.toJSON(message.port);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PrometheusOptions>, I>>(base?: I): PrometheusOptions {
    return PrometheusOptions.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PrometheusOptions>, I>>(object: I): PrometheusOptions {
    const message = createBasePrometheusOptions();
    message.enabled = (object.enabled !== undefined && object.enabled !== null)
      ? ConfigurationVariable.fromPartial(object.enabled)
      : undefined;
    message.port = (object.port !== undefined && object.port !== null)
      ? ConfigurationVariable.fromPartial(object.port)
      : undefined;
    return message;
  },
};

function createBaseNodeOptions(): NodeOptions {
  return {
    nodeUrl: undefined,
    publicNodeUrl: undefined,
    listen: undefined,
    logger: undefined,
    defaultRequestTimeoutSeconds: 0,
    listenInternal: undefined,
    nodeInternalUrl: undefined,
    defaultHttpProxyUrl: undefined,
    openTelemetry: undefined,
    prometheus: undefined,
  };
}

export const NodeOptions = {
  encode(message: NodeOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nodeUrl !== undefined) {
      ConfigurationVariable.encode(message.nodeUrl, writer.uint32(10).fork()).ldelim();
    }
    if (message.publicNodeUrl !== undefined) {
      ConfigurationVariable.encode(message.publicNodeUrl, writer.uint32(34).fork()).ldelim();
    }
    if (message.listen !== undefined) {
      ListenerOptions.encode(message.listen, writer.uint32(18).fork()).ldelim();
    }
    if (message.logger !== undefined) {
      NodeLogging.encode(message.logger, writer.uint32(26).fork()).ldelim();
    }
    if (message.defaultRequestTimeoutSeconds !== 0) {
      writer.uint32(40).int64(message.defaultRequestTimeoutSeconds);
    }
    if (message.listenInternal !== undefined) {
      InternalListenerOptions.encode(message.listenInternal, writer.uint32(50).fork()).ldelim();
    }
    if (message.nodeInternalUrl !== undefined) {
      ConfigurationVariable.encode(message.nodeInternalUrl, writer.uint32(58).fork()).ldelim();
    }
    if (message.defaultHttpProxyUrl !== undefined) {
      ConfigurationVariable.encode(message.defaultHttpProxyUrl, writer.uint32(66).fork()).ldelim();
    }
    if (message.openTelemetry !== undefined) {
      TelemetryOptions.encode(message.openTelemetry, writer.uint32(74).fork()).ldelim();
    }
    if (message.prometheus !== undefined) {
      PrometheusOptions.encode(message.prometheus, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodeOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodeUrl = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.publicNodeUrl = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.listen = ListenerOptions.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.logger = NodeLogging.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.defaultRequestTimeoutSeconds = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.listenInternal = InternalListenerOptions.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.nodeInternalUrl = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.defaultHttpProxyUrl = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.openTelemetry = TelemetryOptions.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.prometheus = PrometheusOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeOptions {
    return {
      nodeUrl: isSet(object.nodeUrl) ? ConfigurationVariable.fromJSON(object.nodeUrl) : undefined,
      publicNodeUrl: isSet(object.publicNodeUrl) ? ConfigurationVariable.fromJSON(object.publicNodeUrl) : undefined,
      listen: isSet(object.listen) ? ListenerOptions.fromJSON(object.listen) : undefined,
      logger: isSet(object.logger) ? NodeLogging.fromJSON(object.logger) : undefined,
      defaultRequestTimeoutSeconds: isSet(object.defaultRequestTimeoutSeconds)
        ? Number(object.defaultRequestTimeoutSeconds)
        : 0,
      listenInternal: isSet(object.listenInternal)
        ? InternalListenerOptions.fromJSON(object.listenInternal)
        : undefined,
      nodeInternalUrl: isSet(object.nodeInternalUrl)
        ? ConfigurationVariable.fromJSON(object.nodeInternalUrl)
        : undefined,
      defaultHttpProxyUrl: isSet(object.defaultHttpProxyUrl)
        ? ConfigurationVariable.fromJSON(object.defaultHttpProxyUrl)
        : undefined,
      openTelemetry: isSet(object.openTelemetry) ? TelemetryOptions.fromJSON(object.openTelemetry) : undefined,
      prometheus: isSet(object.prometheus) ? PrometheusOptions.fromJSON(object.prometheus) : undefined,
    };
  },

  toJSON(message: NodeOptions): unknown {
    const obj: any = {};
    if (message.nodeUrl !== undefined) {
      obj.nodeUrl = ConfigurationVariable.toJSON(message.nodeUrl);
    }
    if (message.publicNodeUrl !== undefined) {
      obj.publicNodeUrl = ConfigurationVariable.toJSON(message.publicNodeUrl);
    }
    if (message.listen !== undefined) {
      obj.listen = ListenerOptions.toJSON(message.listen);
    }
    if (message.logger !== undefined) {
      obj.logger = NodeLogging.toJSON(message.logger);
    }
    if (message.defaultRequestTimeoutSeconds !== 0) {
      obj.defaultRequestTimeoutSeconds = Math.round(message.defaultRequestTimeoutSeconds);
    }
    if (message.listenInternal !== undefined) {
      obj.listenInternal = InternalListenerOptions.toJSON(message.listenInternal);
    }
    if (message.nodeInternalUrl !== undefined) {
      obj.nodeInternalUrl = ConfigurationVariable.toJSON(message.nodeInternalUrl);
    }
    if (message.defaultHttpProxyUrl !== undefined) {
      obj.defaultHttpProxyUrl = ConfigurationVariable.toJSON(message.defaultHttpProxyUrl);
    }
    if (message.openTelemetry !== undefined) {
      obj.openTelemetry = TelemetryOptions.toJSON(message.openTelemetry);
    }
    if (message.prometheus !== undefined) {
      obj.prometheus = PrometheusOptions.toJSON(message.prometheus);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeOptions>, I>>(base?: I): NodeOptions {
    return NodeOptions.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<NodeOptions>, I>>(object: I): NodeOptions {
    const message = createBaseNodeOptions();
    message.nodeUrl = (object.nodeUrl !== undefined && object.nodeUrl !== null)
      ? ConfigurationVariable.fromPartial(object.nodeUrl)
      : undefined;
    message.publicNodeUrl = (object.publicNodeUrl !== undefined && object.publicNodeUrl !== null)
      ? ConfigurationVariable.fromPartial(object.publicNodeUrl)
      : undefined;
    message.listen = (object.listen !== undefined && object.listen !== null)
      ? ListenerOptions.fromPartial(object.listen)
      : undefined;
    message.logger = (object.logger !== undefined && object.logger !== null)
      ? NodeLogging.fromPartial(object.logger)
      : undefined;
    message.defaultRequestTimeoutSeconds = object.defaultRequestTimeoutSeconds ?? 0;
    message.listenInternal = (object.listenInternal !== undefined && object.listenInternal !== null)
      ? InternalListenerOptions.fromPartial(object.listenInternal)
      : undefined;
    message.nodeInternalUrl = (object.nodeInternalUrl !== undefined && object.nodeInternalUrl !== null)
      ? ConfigurationVariable.fromPartial(object.nodeInternalUrl)
      : undefined;
    message.defaultHttpProxyUrl = (object.defaultHttpProxyUrl !== undefined && object.defaultHttpProxyUrl !== null)
      ? ConfigurationVariable.fromPartial(object.defaultHttpProxyUrl)
      : undefined;
    message.openTelemetry = (object.openTelemetry !== undefined && object.openTelemetry !== null)
      ? TelemetryOptions.fromPartial(object.openTelemetry)
      : undefined;
    message.prometheus = (object.prometheus !== undefined && object.prometheus !== null)
      ? PrometheusOptions.fromPartial(object.prometheus)
      : undefined;
    return message;
  },
};

function createBaseTelemetryOptions(): TelemetryOptions {
  return { enabled: undefined, exporterHttpEndpoint: undefined, sampler: undefined, authToken: undefined };
}

export const TelemetryOptions = {
  encode(message: TelemetryOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enabled !== undefined) {
      ConfigurationVariable.encode(message.enabled, writer.uint32(10).fork()).ldelim();
    }
    if (message.exporterHttpEndpoint !== undefined) {
      ConfigurationVariable.encode(message.exporterHttpEndpoint, writer.uint32(18).fork()).ldelim();
    }
    if (message.sampler !== undefined) {
      ConfigurationVariable.encode(message.sampler, writer.uint32(26).fork()).ldelim();
    }
    if (message.authToken !== undefined) {
      ConfigurationVariable.encode(message.authToken, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TelemetryOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTelemetryOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.enabled = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.exporterHttpEndpoint = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sampler = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.authToken = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TelemetryOptions {
    return {
      enabled: isSet(object.enabled) ? ConfigurationVariable.fromJSON(object.enabled) : undefined,
      exporterHttpEndpoint: isSet(object.exporterHttpEndpoint)
        ? ConfigurationVariable.fromJSON(object.exporterHttpEndpoint)
        : undefined,
      sampler: isSet(object.sampler) ? ConfigurationVariable.fromJSON(object.sampler) : undefined,
      authToken: isSet(object.authToken) ? ConfigurationVariable.fromJSON(object.authToken) : undefined,
    };
  },

  toJSON(message: TelemetryOptions): unknown {
    const obj: any = {};
    if (message.enabled !== undefined) {
      obj.enabled = ConfigurationVariable.toJSON(message.enabled);
    }
    if (message.exporterHttpEndpoint !== undefined) {
      obj.exporterHttpEndpoint = ConfigurationVariable.toJSON(message.exporterHttpEndpoint);
    }
    if (message.sampler !== undefined) {
      obj.sampler = ConfigurationVariable.toJSON(message.sampler);
    }
    if (message.authToken !== undefined) {
      obj.authToken = ConfigurationVariable.toJSON(message.authToken);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TelemetryOptions>, I>>(base?: I): TelemetryOptions {
    return TelemetryOptions.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TelemetryOptions>, I>>(object: I): TelemetryOptions {
    const message = createBaseTelemetryOptions();
    message.enabled = (object.enabled !== undefined && object.enabled !== null)
      ? ConfigurationVariable.fromPartial(object.enabled)
      : undefined;
    message.exporterHttpEndpoint = (object.exporterHttpEndpoint !== undefined && object.exporterHttpEndpoint !== null)
      ? ConfigurationVariable.fromPartial(object.exporterHttpEndpoint)
      : undefined;
    message.sampler = (object.sampler !== undefined && object.sampler !== null)
      ? ConfigurationVariable.fromPartial(object.sampler)
      : undefined;
    message.authToken = (object.authToken !== undefined && object.authToken !== null)
      ? ConfigurationVariable.fromPartial(object.authToken)
      : undefined;
    return message;
  },
};

function createBaseServerLogging(): ServerLogging {
  return { level: undefined };
}

export const ServerLogging = {
  encode(message: ServerLogging, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.level !== undefined) {
      ConfigurationVariable.encode(message.level, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerLogging {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerLogging();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.level = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServerLogging {
    return { level: isSet(object.level) ? ConfigurationVariable.fromJSON(object.level) : undefined };
  },

  toJSON(message: ServerLogging): unknown {
    const obj: any = {};
    if (message.level !== undefined) {
      obj.level = ConfigurationVariable.toJSON(message.level);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServerLogging>, I>>(base?: I): ServerLogging {
    return ServerLogging.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ServerLogging>, I>>(object: I): ServerLogging {
    const message = createBaseServerLogging();
    message.level = (object.level !== undefined && object.level !== null)
      ? ConfigurationVariable.fromPartial(object.level)
      : undefined;
    return message;
  },
};

function createBaseServerOptions(): ServerOptions {
  return { serverUrl: undefined, listen: undefined, logger: undefined };
}

export const ServerOptions = {
  encode(message: ServerOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.serverUrl !== undefined) {
      ConfigurationVariable.encode(message.serverUrl, writer.uint32(10).fork()).ldelim();
    }
    if (message.listen !== undefined) {
      ListenerOptions.encode(message.listen, writer.uint32(18).fork()).ldelim();
    }
    if (message.logger !== undefined) {
      ServerLogging.encode(message.logger, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServerOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServerOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serverUrl = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.listen = ListenerOptions.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.logger = ServerLogging.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServerOptions {
    return {
      serverUrl: isSet(object.serverUrl) ? ConfigurationVariable.fromJSON(object.serverUrl) : undefined,
      listen: isSet(object.listen) ? ListenerOptions.fromJSON(object.listen) : undefined,
      logger: isSet(object.logger) ? ServerLogging.fromJSON(object.logger) : undefined,
    };
  },

  toJSON(message: ServerOptions): unknown {
    const obj: any = {};
    if (message.serverUrl !== undefined) {
      obj.serverUrl = ConfigurationVariable.toJSON(message.serverUrl);
    }
    if (message.listen !== undefined) {
      obj.listen = ListenerOptions.toJSON(message.listen);
    }
    if (message.logger !== undefined) {
      obj.logger = ServerLogging.toJSON(message.logger);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServerOptions>, I>>(base?: I): ServerOptions {
    return ServerOptions.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ServerOptions>, I>>(object: I): ServerOptions {
    const message = createBaseServerOptions();
    message.serverUrl = (object.serverUrl !== undefined && object.serverUrl !== null)
      ? ConfigurationVariable.fromPartial(object.serverUrl)
      : undefined;
    message.listen = (object.listen !== undefined && object.listen !== null)
      ? ListenerOptions.fromPartial(object.listen)
      : undefined;
    message.logger = (object.logger !== undefined && object.logger !== null)
      ? ServerLogging.fromPartial(object.logger)
      : undefined;
    return message;
  },
};

function createBaseWebhookConfiguration(): WebhookConfiguration {
  return { name: "", filePath: "", verifier: undefined };
}

export const WebhookConfiguration = {
  encode(message: WebhookConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.filePath !== "") {
      writer.uint32(18).string(message.filePath);
    }
    if (message.verifier !== undefined) {
      WebhookVerifier.encode(message.verifier, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebhookConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebhookConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.filePath = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.verifier = WebhookVerifier.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WebhookConfiguration {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      filePath: isSet(object.filePath) ? String(object.filePath) : "",
      verifier: isSet(object.verifier) ? WebhookVerifier.fromJSON(object.verifier) : undefined,
    };
  },

  toJSON(message: WebhookConfiguration): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    if (message.verifier !== undefined) {
      obj.verifier = WebhookVerifier.toJSON(message.verifier);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WebhookConfiguration>, I>>(base?: I): WebhookConfiguration {
    return WebhookConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<WebhookConfiguration>, I>>(object: I): WebhookConfiguration {
    const message = createBaseWebhookConfiguration();
    message.name = object.name ?? "";
    message.filePath = object.filePath ?? "";
    message.verifier = (object.verifier !== undefined && object.verifier !== null)
      ? WebhookVerifier.fromPartial(object.verifier)
      : undefined;
    return message;
  },
};

function createBaseWebhookVerifier(): WebhookVerifier {
  return { kind: 0, secret: undefined, signatureHeader: "", signatureHeaderPrefix: "" };
}

export const WebhookVerifier = {
  encode(message: WebhookVerifier, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.secret !== undefined) {
      ConfigurationVariable.encode(message.secret, writer.uint32(18).fork()).ldelim();
    }
    if (message.signatureHeader !== "") {
      writer.uint32(26).string(message.signatureHeader);
    }
    if (message.signatureHeaderPrefix !== "") {
      writer.uint32(34).string(message.signatureHeaderPrefix);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WebhookVerifier {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebhookVerifier();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.kind = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.secret = ConfigurationVariable.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signatureHeader = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.signatureHeaderPrefix = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WebhookVerifier {
    return {
      kind: isSet(object.kind) ? webhookVerifierKindFromJSON(object.kind) : 0,
      secret: isSet(object.secret) ? ConfigurationVariable.fromJSON(object.secret) : undefined,
      signatureHeader: isSet(object.signatureHeader) ? String(object.signatureHeader) : "",
      signatureHeaderPrefix: isSet(object.signatureHeaderPrefix) ? String(object.signatureHeaderPrefix) : "",
    };
  },

  toJSON(message: WebhookVerifier): unknown {
    const obj: any = {};
    if (message.kind !== 0) {
      obj.kind = webhookVerifierKindToJSON(message.kind);
    }
    if (message.secret !== undefined) {
      obj.secret = ConfigurationVariable.toJSON(message.secret);
    }
    if (message.signatureHeader !== "") {
      obj.signatureHeader = message.signatureHeader;
    }
    if (message.signatureHeaderPrefix !== "") {
      obj.signatureHeaderPrefix = message.signatureHeaderPrefix;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<WebhookVerifier>, I>>(base?: I): WebhookVerifier {
    return WebhookVerifier.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<WebhookVerifier>, I>>(object: I): WebhookVerifier {
    const message = createBaseWebhookVerifier();
    message.kind = object.kind ?? 0;
    message.secret = (object.secret !== undefined && object.secret !== null)
      ? ConfigurationVariable.fromPartial(object.secret)
      : undefined;
    message.signatureHeader = object.signatureHeader ?? "";
    message.signatureHeaderPrefix = object.signatureHeaderPrefix ?? "";
    return message;
  },
};

function createBaseCorsConfiguration(): CorsConfiguration {
  return {
    allowedOrigins: [],
    allowedMethods: [],
    allowedHeaders: [],
    exposedHeaders: [],
    maxAge: 0,
    allowCredentials: false,
  };
}

export const CorsConfiguration = {
  encode(message: CorsConfiguration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowedOrigins) {
      ConfigurationVariable.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.allowedMethods) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.allowedHeaders) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.exposedHeaders) {
      writer.uint32(34).string(v!);
    }
    if (message.maxAge !== 0) {
      writer.uint32(40).int64(message.maxAge);
    }
    if (message.allowCredentials === true) {
      writer.uint32(48).bool(message.allowCredentials);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CorsConfiguration {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCorsConfiguration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.allowedOrigins.push(ConfigurationVariable.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.allowedMethods.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.allowedHeaders.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.exposedHeaders.push(reader.string());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.maxAge = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.allowCredentials = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CorsConfiguration {
    return {
      allowedOrigins: Array.isArray(object?.allowedOrigins)
        ? object.allowedOrigins.map((e: any) => ConfigurationVariable.fromJSON(e))
        : [],
      allowedMethods: Array.isArray(object?.allowedMethods) ? object.allowedMethods.map((e: any) => String(e)) : [],
      allowedHeaders: Array.isArray(object?.allowedHeaders) ? object.allowedHeaders.map((e: any) => String(e)) : [],
      exposedHeaders: Array.isArray(object?.exposedHeaders) ? object.exposedHeaders.map((e: any) => String(e)) : [],
      maxAge: isSet(object.maxAge) ? Number(object.maxAge) : 0,
      allowCredentials: isSet(object.allowCredentials) ? Boolean(object.allowCredentials) : false,
    };
  },

  toJSON(message: CorsConfiguration): unknown {
    const obj: any = {};
    if (message.allowedOrigins?.length) {
      obj.allowedOrigins = message.allowedOrigins.map((e) => ConfigurationVariable.toJSON(e));
    }
    if (message.allowedMethods?.length) {
      obj.allowedMethods = message.allowedMethods;
    }
    if (message.allowedHeaders?.length) {
      obj.allowedHeaders = message.allowedHeaders;
    }
    if (message.exposedHeaders?.length) {
      obj.exposedHeaders = message.exposedHeaders;
    }
    if (message.maxAge !== 0) {
      obj.maxAge = Math.round(message.maxAge);
    }
    if (message.allowCredentials === true) {
      obj.allowCredentials = message.allowCredentials;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CorsConfiguration>, I>>(base?: I): CorsConfiguration {
    return CorsConfiguration.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CorsConfiguration>, I>>(object: I): CorsConfiguration {
    const message = createBaseCorsConfiguration();
    message.allowedOrigins = object.allowedOrigins?.map((e) => ConfigurationVariable.fromPartial(e)) || [];
    message.allowedMethods = object.allowedMethods?.map((e) => e) || [];
    message.allowedHeaders = object.allowedHeaders?.map((e) => e) || [];
    message.exposedHeaders = object.exposedHeaders?.map((e) => e) || [];
    message.maxAge = object.maxAge ?? 0;
    message.allowCredentials = object.allowCredentials ?? false;
    return message;
  },
};

function createBaseConfigurationVariable(): ConfigurationVariable {
  return {
    kind: 0,
    staticVariableContent: "",
    environmentVariableName: "",
    environmentVariableDefaultValue: "",
    placeholderVariableName: "",
  };
}

export const ConfigurationVariable = {
  encode(message: ConfigurationVariable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    if (message.staticVariableContent !== "") {
      writer.uint32(18).string(message.staticVariableContent);
    }
    if (message.environmentVariableName !== "") {
      writer.uint32(26).string(message.environmentVariableName);
    }
    if (message.environmentVariableDefaultValue !== "") {
      writer.uint32(34).string(message.environmentVariableDefaultValue);
    }
    if (message.placeholderVariableName !== "") {
      writer.uint32(42).string(message.placeholderVariableName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigurationVariable {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigurationVariable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.kind = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.staticVariableContent = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.environmentVariableName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.environmentVariableDefaultValue = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.placeholderVariableName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigurationVariable {
    return {
      kind: isSet(object.kind) ? configurationVariableKindFromJSON(object.kind) : 0,
      staticVariableContent: isSet(object.staticVariableContent) ? String(object.staticVariableContent) : "",
      environmentVariableName: isSet(object.environmentVariableName) ? String(object.environmentVariableName) : "",
      environmentVariableDefaultValue: isSet(object.environmentVariableDefaultValue)
        ? String(object.environmentVariableDefaultValue)
        : "",
      placeholderVariableName: isSet(object.placeholderVariableName) ? String(object.placeholderVariableName) : "",
    };
  },

  toJSON(message: ConfigurationVariable): unknown {
    const obj: any = {};
    if (message.kind !== 0) {
      obj.kind = configurationVariableKindToJSON(message.kind);
    }
    if (message.staticVariableContent !== "") {
      obj.staticVariableContent = message.staticVariableContent;
    }
    if (message.environmentVariableName !== "") {
      obj.environmentVariableName = message.environmentVariableName;
    }
    if (message.environmentVariableDefaultValue !== "") {
      obj.environmentVariableDefaultValue = message.environmentVariableDefaultValue;
    }
    if (message.placeholderVariableName !== "") {
      obj.placeholderVariableName = message.placeholderVariableName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ConfigurationVariable>, I>>(base?: I): ConfigurationVariable {
    return ConfigurationVariable.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ConfigurationVariable>, I>>(object: I): ConfigurationVariable {
    const message = createBaseConfigurationVariable();
    message.kind = object.kind ?? 0;
    message.staticVariableContent = object.staticVariableContent ?? "";
    message.environmentVariableName = object.environmentVariableName ?? "";
    message.environmentVariableDefaultValue = object.environmentVariableDefaultValue ?? "";
    message.placeholderVariableName = object.placeholderVariableName ?? "";
    return message;
  },
};

function createBaseBuildInfo(): BuildInfo {
  return { success: false, sdk: undefined, wunderctl: undefined, node: undefined, os: undefined, stats: undefined };
}

export const BuildInfo = {
  encode(message: BuildInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    if (message.sdk !== undefined) {
      BuildInfoVersion.encode(message.sdk, writer.uint32(18).fork()).ldelim();
    }
    if (message.wunderctl !== undefined) {
      BuildInfoVersion.encode(message.wunderctl, writer.uint32(26).fork()).ldelim();
    }
    if (message.node !== undefined) {
      BuildInfoVersion.encode(message.node, writer.uint32(34).fork()).ldelim();
    }
    if (message.os !== undefined) {
      BuildInfoOS.encode(message.os, writer.uint32(42).fork()).ldelim();
    }
    if (message.stats !== undefined) {
      BuildInfoStats.encode(message.stats, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuildInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuildInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.success = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sdk = BuildInfoVersion.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.wunderctl = BuildInfoVersion.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.node = BuildInfoVersion.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.os = BuildInfoOS.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.stats = BuildInfoStats.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BuildInfo {
    return {
      success: isSet(object.success) ? Boolean(object.success) : false,
      sdk: isSet(object.sdk) ? BuildInfoVersion.fromJSON(object.sdk) : undefined,
      wunderctl: isSet(object.wunderctl) ? BuildInfoVersion.fromJSON(object.wunderctl) : undefined,
      node: isSet(object.node) ? BuildInfoVersion.fromJSON(object.node) : undefined,
      os: isSet(object.os) ? BuildInfoOS.fromJSON(object.os) : undefined,
      stats: isSet(object.stats) ? BuildInfoStats.fromJSON(object.stats) : undefined,
    };
  },

  toJSON(message: BuildInfo): unknown {
    const obj: any = {};
    if (message.success === true) {
      obj.success = message.success;
    }
    if (message.sdk !== undefined) {
      obj.sdk = BuildInfoVersion.toJSON(message.sdk);
    }
    if (message.wunderctl !== undefined) {
      obj.wunderctl = BuildInfoVersion.toJSON(message.wunderctl);
    }
    if (message.node !== undefined) {
      obj.node = BuildInfoVersion.toJSON(message.node);
    }
    if (message.os !== undefined) {
      obj.os = BuildInfoOS.toJSON(message.os);
    }
    if (message.stats !== undefined) {
      obj.stats = BuildInfoStats.toJSON(message.stats);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BuildInfo>, I>>(base?: I): BuildInfo {
    return BuildInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BuildInfo>, I>>(object: I): BuildInfo {
    const message = createBaseBuildInfo();
    message.success = object.success ?? false;
    message.sdk = (object.sdk !== undefined && object.sdk !== null)
      ? BuildInfoVersion.fromPartial(object.sdk)
      : undefined;
    message.wunderctl = (object.wunderctl !== undefined && object.wunderctl !== null)
      ? BuildInfoVersion.fromPartial(object.wunderctl)
      : undefined;
    message.node = (object.node !== undefined && object.node !== null)
      ? BuildInfoVersion.fromPartial(object.node)
      : undefined;
    message.os = (object.os !== undefined && object.os !== null) ? BuildInfoOS.fromPartial(object.os) : undefined;
    message.stats = (object.stats !== undefined && object.stats !== null)
      ? BuildInfoStats.fromPartial(object.stats)
      : undefined;
    return message;
  },
};

function createBaseBuildInfoVersion(): BuildInfoVersion {
  return { version: "" };
}

export const BuildInfoVersion = {
  encode(message: BuildInfoVersion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuildInfoVersion {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuildInfoVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BuildInfoVersion {
    return { version: isSet(object.version) ? String(object.version) : "" };
  },

  toJSON(message: BuildInfoVersion): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BuildInfoVersion>, I>>(base?: I): BuildInfoVersion {
    return BuildInfoVersion.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BuildInfoVersion>, I>>(object: I): BuildInfoVersion {
    const message = createBaseBuildInfoVersion();
    message.version = object.version ?? "";
    return message;
  },
};

function createBaseBuildInfoOS(): BuildInfoOS {
  return { type: "", platform: "", arch: "", version: "", release: "" };
}

export const BuildInfoOS = {
  encode(message: BuildInfoOS, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.platform !== "") {
      writer.uint32(18).string(message.platform);
    }
    if (message.arch !== "") {
      writer.uint32(26).string(message.arch);
    }
    if (message.version !== "") {
      writer.uint32(34).string(message.version);
    }
    if (message.release !== "") {
      writer.uint32(42).string(message.release);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuildInfoOS {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuildInfoOS();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.platform = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.arch = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.version = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.release = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BuildInfoOS {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      platform: isSet(object.platform) ? String(object.platform) : "",
      arch: isSet(object.arch) ? String(object.arch) : "",
      version: isSet(object.version) ? String(object.version) : "",
      release: isSet(object.release) ? String(object.release) : "",
    };
  },

  toJSON(message: BuildInfoOS): unknown {
    const obj: any = {};
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.platform !== "") {
      obj.platform = message.platform;
    }
    if (message.arch !== "") {
      obj.arch = message.arch;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.release !== "") {
      obj.release = message.release;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BuildInfoOS>, I>>(base?: I): BuildInfoOS {
    return BuildInfoOS.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BuildInfoOS>, I>>(object: I): BuildInfoOS {
    const message = createBaseBuildInfoOS();
    message.type = object.type ?? "";
    message.platform = object.platform ?? "";
    message.arch = object.arch ?? "";
    message.version = object.version ?? "";
    message.release = object.release ?? "";
    return message;
  },
};

function createBaseBuildInfoStats(): BuildInfoStats {
  return {
    totalApis: 0,
    totalOperations: 0,
    totalWebhooks: 0,
    hasAuthenticationProvider: false,
    hasUploadProvider: false,
  };
}

export const BuildInfoStats = {
  encode(message: BuildInfoStats, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalApis !== 0) {
      writer.uint32(8).int32(message.totalApis);
    }
    if (message.totalOperations !== 0) {
      writer.uint32(16).int32(message.totalOperations);
    }
    if (message.totalWebhooks !== 0) {
      writer.uint32(24).int32(message.totalWebhooks);
    }
    if (message.hasAuthenticationProvider === true) {
      writer.uint32(32).bool(message.hasAuthenticationProvider);
    }
    if (message.hasUploadProvider === true) {
      writer.uint32(40).bool(message.hasUploadProvider);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuildInfoStats {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuildInfoStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.totalApis = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.totalOperations = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalWebhooks = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.hasAuthenticationProvider = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.hasUploadProvider = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BuildInfoStats {
    return {
      totalApis: isSet(object.totalApis) ? Number(object.totalApis) : 0,
      totalOperations: isSet(object.totalOperations) ? Number(object.totalOperations) : 0,
      totalWebhooks: isSet(object.totalWebhooks) ? Number(object.totalWebhooks) : 0,
      hasAuthenticationProvider: isSet(object.hasAuthenticationProvider)
        ? Boolean(object.hasAuthenticationProvider)
        : false,
      hasUploadProvider: isSet(object.hasUploadProvider) ? Boolean(object.hasUploadProvider) : false,
    };
  },

  toJSON(message: BuildInfoStats): unknown {
    const obj: any = {};
    if (message.totalApis !== 0) {
      obj.totalApis = Math.round(message.totalApis);
    }
    if (message.totalOperations !== 0) {
      obj.totalOperations = Math.round(message.totalOperations);
    }
    if (message.totalWebhooks !== 0) {
      obj.totalWebhooks = Math.round(message.totalWebhooks);
    }
    if (message.hasAuthenticationProvider === true) {
      obj.hasAuthenticationProvider = message.hasAuthenticationProvider;
    }
    if (message.hasUploadProvider === true) {
      obj.hasUploadProvider = message.hasUploadProvider;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BuildInfoStats>, I>>(base?: I): BuildInfoStats {
    return BuildInfoStats.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<BuildInfoStats>, I>>(object: I): BuildInfoStats {
    const message = createBaseBuildInfoStats();
    message.totalApis = object.totalApis ?? 0;
    message.totalOperations = object.totalOperations ?? 0;
    message.totalWebhooks = object.totalWebhooks ?? 0;
    message.hasAuthenticationProvider = object.hasAuthenticationProvider ?? false;
    message.hasUploadProvider = object.hasUploadProvider ?? false;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
