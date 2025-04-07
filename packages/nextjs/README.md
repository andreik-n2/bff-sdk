# Wundergraph Next.js integration

![wunderctl](https://img.shields.io/npm/v/@virgograph/nextjs.svg)

WunderGraph codegen template plugin to add deep Next.js integration.

> **Warning**: Only works with WunderGraph.

## Getting Started

```shell
npm install @virgograph/nextjs swr
```

### 1. Register the codegen template

```ts
// .wundergraph/wundergraph.config.ts
import { NextJsTemplate } from '@virgograph/nextjs/dist/template';

configureWunderGraphApplication({
  // ...
  // omitted for brevity
  codeGenerators: [
    {
      templates: [new NextJsTemplate()],
    },
  ],
});
```

### 2. Import the package

```tsx
// pages/authentication.ts
import {
  withWunderGraph,
  useQuery,
  useMutation,
  useSubscription,
  useAuth,
  useUser,
} from '.wundergraph/generated/nextjs';

const Example: ExamplePage = () => {
  const { login, logout } = useAuth();
  const { data: user } = useUser();
  const onClick = () => {
    if (user === null || user === undefined) {
      login('github');
    } else {
      logout();
    }
  };
  return (
    <div>
      <h1>Authentication</h1>
      <button onClick={onClick}>${user ? logout : login}</button>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
};
export default withWunderGraph(Example);
```
