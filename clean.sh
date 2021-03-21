#!/bin/bash
find . -name "*.lock" -type f -delete

rm -rf src/node_modules

exit 0