// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// This file contains webpack configuration settings that allow
// examples to be built against the source code in this repo instead
// of building against their installed version.
//
// This enables using the examples to debug the main library source
// without publishing or npm linking, with conveniences such hot reloading etc.

const {resolve} = require('path');

const LIB_DIR = resolve(__dirname, '..');
const SRC_DIR = resolve(LIB_DIR, './src');

// Support for hot reloading changes to the library:
const LOCAL_DEVELOPMENT_CONFIG = {
  devtool: 'source-map',

  // suppress warnings about bundle size
  devServer: {
    stats: {
      warnings: false
    }
  },

  resolve: {
    alias: {
      // Imports the luma.gl library from the src directory in this repo
      'math.gl': SRC_DIR
    }
  },
  module: {
    rules: [
      {
        // Unfortunately, webpack doesn't import library sourcemaps on its own...
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      }
    ]
  }
};

function addLocalDevSettings(config, {libAlias}) {
  config.resolve = config.resolve || {};
  config.resolve.alias = config.resolve.alias || {};
  Object.assign(config.resolve.alias, LOCAL_DEVELOPMENT_CONFIG.resolve.alias);
  if (libAlias) {
    config.resolve.alias['math.gl'] = libAlias;
  }

  config.module = config.module || {};
  config.module.rules = config.module.rules || [];
  config.module.rules = config.module.rules.concat(LOCAL_DEVELOPMENT_CONFIG.module.rules);
  return config;
}

module.exports = (baseConfig, opts = {}) => env => {
  const config = baseConfig;
  if (env && env.local) {
    addLocalDevSettings(config, opts);
  }
  // Uncomment to debug webpack options
  // console.warn(JSON.stringify(config, null, 2));
  return config;
};
