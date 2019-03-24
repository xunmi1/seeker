#!/usr/bin/env bash

set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy Seeker'

git config --local user.name "xunmi"
git config --local user.email "xunmi1@outlook.com"

git push -f git@github.com:xunmi1/seeker.git master:gh-pages

cd -
