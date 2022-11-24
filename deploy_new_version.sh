#!/bin/bash

cd "$(dirname "$0")"

git pull
echo "Upgrade done, app started again"
echo "done" >> done.txt