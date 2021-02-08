#!/bin/bash

eslint --fix  --ext .ts src/ test/

echo "Linting finished at $(date +%T)"
