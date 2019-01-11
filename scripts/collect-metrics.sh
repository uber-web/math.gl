#!/bin/sh
# Script to collect build size information

export PATH=$PATH:node_modules/.bin

# Get name from package.json
module=$(jq '.name' ./package.json)
# Get version from packag.json and remove quotes
version=$(jq '.version' ./package.json | awk '{ gsub(/"/,"",$1); printf "%-14s", $1 }')

# Helper functions

print_size_header() {
  echo "| Version        | Dist | Bundle Size      | Compressed     | Imports   |"
  echo "| ---            | ---  | ---              | ---            | ---       |"
}

print_size() {
  DIST=$1
  EXAMPLE=$2

  # Size it
  size=$(wc -c /tmp/bundle.js | awk '{ print int($1 / 1024) "KB (" $1 ")" }')
  # Zip it
  gzip -9f /tmp/bundle.js
  # Size it again
  zipsize=$(wc -c /tmp/bundle.js.gz | awk '{ print int($1 / 1024) "KB (" $1 ")" }')  # Size it
  # Remove our copy
  rm /tmp/bundle.js.gz
  # Print version, size, compressed size with markdown

  echo "| $version | $DIST  | $size KB  | $zipsize KB     | $EXAMPLE "
}

build_bundle() {
  DIST=$1
  EXAMPLE=$2
  NODE_ENV=production webpack --config test/webpack.config.js --hide-modules --env.$EXAMPLE --env.bundle --env.$DIST > /dev/null
  cp dist/bundle.js /tmp/bundle.js
}

print_bundle_size() {
  build_bundle $1 $2
  print_size $1 $2
}

# Main Script

echo
echo "\033[1mAutomatically collecting metrics for $module"
echo

print_size_header

print_bundle_size es6 nothing
print_bundle_size es6 vector2
print_bundle_size es6 vector3
print_bundle_size es6 vector4
print_bundle_size es6 matrix4
print_bundle_size es6 quaternion
print_bundle_size es6 euler

print_bundle_size es6 all
print_bundle_size esm all
print_bundle_size es5 all

# Disable bold terminal font
echo "\033[0m"
