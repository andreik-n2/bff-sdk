# Wunderctl wrapper

![wunderctl](https://img.shields.io/npm/v/@virgograph/wunderctl.svg)

This package is a wrapper for the wunderctl Go binary. It makes it super easy to run wundergraph commands from your terminal.
This package is not required if you have already installed [`@virgograph/sdk`](https://github.com/wundergraph/wundergraph/tree/main/packages/sdk). The SDK is shipped with the compatible wunderctl Go binary for development.

> **Note:** This package uses postinstall script to download and install the wunderctl binary.

## Getting Started

```shell
# Install wunderctl
npx @virgograph/wunderctl
# Help
npx @virgograph/wunderctl --help
```

> **Warning**: Please use the Go [release](https://github.com/wundergraph/wundergraph/releases) binary to start the wundergraph server in production.

## Misc

You can pass `WG_COPY_BIN_PATH` to copy the installed binary to a specific path. This is useful if you want to use the binary in your CI/CD pipeline.
