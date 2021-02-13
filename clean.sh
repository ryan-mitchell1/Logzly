#!/bin/bash
find . -name "*.lock" -type f -delete

rm -rf src/node_modules && rm -rf src/server/node_modules