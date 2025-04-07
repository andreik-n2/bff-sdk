#!/bin/bash

set -e

# Check if protoc is installed
if ! [ -x "$(command -v protoc)" ]; then
	echo 'Error: protoc is not installed. Please install exact 5.29.3 https://grpc.io/docs/protoc-installation'
	echo 'curl -LO "https://github.com/protocolbuffers/protobuf/releases/download/v21.5/protoc-21.5-linux-x86_64.zip"'
	exit 1
fi
