# Wundergraph Golang Client

![wunderctl](https://img.shields.io/npm/v/@virgograph/golang-client.svg)

WunderGraph codegen template plugin to auto-generate a Golang client for your WunderGraph API.

## Getting Started

```shell
npm install @virgograph/golang-client
```

### Register the codegen template

```ts
// .wundergraph/wundergraph.config.ts
import { golangClient } from '@virgograph/golang-client';

configureWunderGraphApplication({
  // ...
  // omitted for brevity
  codeGenerators: [
    {
      templates: [
        ...golangClient.all({
          packageName: 'client',
        }),
      ],
      path: './generated/golang/client',
    },
  ],
});
```
