const {resolve, join} = require('path');
const webpack = require('webpack');

const rootDir = join(__dirname, '..');
const libSources = join(rootDir, 'src');

const ALIASES = require('ocular-dev-tools/config/ocular.config')({
  root: resolve(__dirname, '..')
}).aliases;

// Otherwise modules imported from outside this directory does not compile
// Seems to be a Babel bug
// https://github.com/babel/babel-loader/issues/149#issuecomment-191991686
const BABEL_CONFIG = {
  presets: ['es2015', 'react', 'stage-2'].map(name => require.resolve(`babel-preset-${name}`)),
  plugins: [
    // website uses decorators
    require.resolve('babel-plugin-transform-decorators-legacy')
    // resolve(__dirname, '../modules/babel-plugin-inline-gl-constants')
  ]
};

const COMMON_CONFIG = {
  mode: 'development',

  entry: ['./src/main'],

  output: {
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        // Compile ES2015 using babel
        test: /\.js$/,
        loader: 'babel-loader',
        options: BABEL_CONFIG,
        include: [resolve('..'), libSources],
        exclude: [/node_modules/]
      }
    ]
  },

  resolve: {
    modules: [resolve(__dirname, './node_modules'), resolve(__dirname, '../node_modules')],

    alias: Object.assign({}, ALIASES)
  },

  node: {
    fs: 'empty'
  },

  plugins: []
};

const addDevConfig = config => {
  config.module.rules.push({
    // Unfortunately, webpack doesn't import library sourcemaps on its own...
    test: /\.js$/,
    use: ['source-map-loader'],
    enforce: 'pre'
  });

  return Object.assign(config, {
    devtool: 'source-maps',

    plugins: config.plugins.concat([
      // new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ])
  });
};

const addProdConfig = config => {
  return Object.assign(config, {
    mode: 'production',

    output: {
      path: resolve(__dirname, './dist'),
      filename: 'bundle.js'
    }
  });
};

// Different versions of webpack supply objects or arrays
const getEnv = env => {
  if (Array.isArray(env)) {
    return env.reduce((key, obj) => {
      obj[key] = true;
    }, {});
  }

  if (typeof env === 'string') {
    return {[env]: true};
  }

  return env || {};
};

module.exports = env => {
  env = getEnv(env);

  let config = COMMON_CONFIG;

  if (env.local) {
    config = addDevConfig(config);
  }

  if (env.prod) {
    config = addProdConfig(config);
  }

  // Enable to debug config
  // console.warn(JSON.stringify(config, null, 2));

  return config;
};

/*
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
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// const webpack = require('webpack');

const ALIASES = require(resolve(__dirname, '../aliases'));

const COMMON_CONFIG = {
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
    filename: '[name]-bundle.js'
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

const SIZE_CONFIG = Object.assign({}, TEST_CONFIG, {
  resolve: {
    alias: Object.assign({}, ALIASES, {
      'math.gl': resolve(__dirname, '../dist')
    })
  }
});

const BENCH_CONFIG = Object.assign({}, TEST_CONFIG, {
  entry: {
    'test-browser': resolve('./test/bench/browser.js')
  }
});

function getFirstKey(object) {
  for (const key in object) {
    return key;
  }
  return null;
}

module.exports = env => {
  env = env || {};
  if (env.bench) {
    return BENCH_CONFIG;
  }
  if (env.test) {
    return TEST_CONFIG;
  }
  return Object.assign({}, SIZE_CONFIG, {
    // Replace the entry point for webpack-dev-server
    entry: {
      'test-browser': resolve(__dirname, 'size', `${getFirstKey(env)}.js`)
    },
    output: {
      path: resolve('./dist'),
      filename: '[name]-bundle.js'
    },
    plugins: [new UglifyJsPlugin(), new BundleAnalyzerPlugin()]
  });
};
*/
