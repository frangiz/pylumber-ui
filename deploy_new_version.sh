#!/bin/bash

cd "$(dirname "$0")"

git pull
npm install
npm run build
cp -r build/* /var/www/pylumber/html/
echo "Upgrade done"