const fs = require('fs');
const getWebpackConfig = require('ocular-dev-tools/config/webpack.config');

module.exports = (env = {}) => {
  const config = getWebpackConfig(env);

  switch (env.mode) {
    case 'size':
      config.entry = fs.readdirSync('./test/size').reduce((entries, filename) => {
        entries[filename.replace('.js', '')] = `./test/size/${filename}`;
        return entries;
      }, {});
      break;
    default:
  }

  return config;
};

/*
OLD TEST WEBPACK CONFIG, integrate bundle analyzer

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
