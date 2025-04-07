# Migration steps

| Version range | Migration complexity | Info                                              |
| ------------- | -------------------- | ------------------------------------------------- |
| 0.129-0.130.x | low                  | Provide new SDK entry point for server components |

## Update `wundergraph.server.ts` to match the imports

From

```ts
import {
  configureWunderGraphServer,
  GithubWebhookVerifier,
  EnvironmentVariable,
  WgEnv,
  LoggerLevel,
} from '@virgograph/sdk';
```

to

```ts
import {
  configureWunderGraphServer,
  GithubWebhookVerifier,
  EnvironmentVariable,
  WgEnv,
  LoggerLevel,
} from '@virgograph/sdk/server'; // <--- /server added
```
