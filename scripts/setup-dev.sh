#!/bin/sh

set -e

if ! [ -x "$(command -v golangci-lint)" ]; then
	echo "Installing golangci-lint"
	go install github.com/golangci/golangci-lint/cmd/golangci-lint@v2.0.2
fi
