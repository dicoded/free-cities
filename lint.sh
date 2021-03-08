#!/bin/bash

eslint --fix  --ext .ts src/

echo "Linting finished at $(date +%T)"
