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

const {resolve} = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const webpack = require('webpack');

const ALIASES = require(resolve(__dirname, '../aliases'));

const COMMON_CONFIG = {
  mode: 'development',

  stats: {
    warnings: false
  },

  module: {
    rules: []
  },

  plugins: [],

  node: {
    fs: 'empty'
  }
};

const TEST_CONFIG = Object.assign({}, COMMON_CONFIG, {
  devServer: {
    stats: {
      warnings: false
    },
    quiet: true
  },

  // Bundle the tests for running in the browser
  entry: {
    'test-browser': resolve('./test/browser.js')
  },

  // Generate a bundle in dist folder
  output: {
    path: resolve('./dist'),
    filename: 'bundle.js'
  },

  devtool: '#source-maps',

  module: {
    rules: [
      {
        // Unfortunately, webpack doesn't import library sourcemaps on its own...
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      }
    ]
  },

  resolve: {
    alias: Object.assign({}, ALIASES)
  }
});

const SIZE_ESM_CONFIG = Object.assign({}, TEST_CONFIG, {
  resolve: {
    alias: Object.assign({}, ALIASES, {
      'math.gl': resolve(__dirname, '../dist/esm')
    })
  }
});

const SIZE_ES6_CONFIG = Object.assign({}, TEST_CONFIG, {
  resolve: {
    alias: Object.assign({}, ALIASES, {
      'math.gl': resolve(__dirname, '../dist/es6')
    })
  }
});

const BENCH_CONFIG = Object.assign({}, TEST_CONFIG, {
  entry: {
    'test-browser': resolve('./test/bench/browser.js')
  }
});

// Replace the entry point for webpack-dev-server

BENCH_CONFIG.module.noParse = [/benchmark/];

function getFirstKey(object) {
  for (const key in object) {
    return key;
  }
  return null;
}

module.exports = env => {
  env = env || {};

  let config = COMMON_CONFIG;
  const key = getFirstKey(env);
  switch (key) {
  case 'bench':
    config = BENCH_CONFIG;
    break;

  case 'test':
    config = Object.assign({}, TEST_CONFIG, {
      plugins: [new HtmlWebpackPlugin()]
    });
    break;

  case 'analyze':
    config = Object.assign({}, SIZE_ES6_CONFIG, {
      mode: 'production',

      // Replace the entry point for webpack-dev-server
      entry: {
        'test-browser': resolve(__dirname, './size/import-vec4-mat4.js')
      },
      plugins: [new BundleAnalyzerPlugin()]
    });
    delete config.devtool;
    break;

  default:
    config = Object.assign({}, env.es6 ? SIZE_ES6_CONFIG : SIZE_ESM_CONFIG, {
      mode: 'production',

      // Replace the entry point for webpack-dev-server
      entry: {
        'test-browser': resolve(__dirname, './size', `${key}.js`)
      }
    });
    delete config.devtool;
  }

  console.log('webpack env', JSON.stringify(env));
  console.log('webpack config', JSON.stringify(config));

  return config;
};

