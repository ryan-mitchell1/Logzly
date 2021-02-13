#!/bin/bash
find . -name "*.lock" -type f -delete

find . -name node_modules -type d -exec rm -rf {} +

exit 0