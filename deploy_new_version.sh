#!/bin/bash

cd "$(dirname "$0")"

git pull
npm install
npm run build
echo "Upgrade done"