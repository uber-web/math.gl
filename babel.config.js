// COPIED FROM ocular-dev-tools

const TARGETS = {
  chrome: '60',
  edge: '16',
  firefox: '53',
  ios: '10.3',
  safari: '10.1',
  node: '8'
};

const COMMON_CONFIG = {
  comments: false
};

const ENV_CONFIG = {
  es5: {
    presets: [
      [
        '@babel/env',
        {
          forceAllTransforms: true,
          modules: 'commonjs'
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: ['@babel/transform-runtime', ['transform-builtin-extend', {globals: ['Array']}]]
  },
  esm: {
    presets: [
      [
        '@babel/env',
        {
          modules: false
          // Transpiling classes kills object creation performance
          // exclude: ['@babel/plugin-transform-classes']
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [
      ['@babel/transform-runtime', {useESModules: true}],
      // Transpiling classes kills object creation performance
      ['transform-builtin-extend', {globals: ['Array']}]
    ]
  },
  es6: {
    presets: [
      [
        '@babel/env',
        {
          targets: TARGETS,
          modules: false
        }
      ],
      '@babel/preset-typescript'
    ],
    plugins: [['@babel/transform-runtime', {useESModules: true}]]
  },
  test: {
    presets: ['@babel/preset-env'],
    plugins: ['istanbul']
  }
};

// Ensure we have an entry for the default BABEL_ENV
ENV_CONFIG.development = ENV_CONFIG.es6;

module.exports = api => {
  api.cache.using(() => process.env.BABEL_ENV);

  return Object.assign({}, COMMON_CONFIG, ENV_CONFIG[api.env()]);
};

// END COPY

const getBabelConfig = require('ocular-dev-tools/config/babel.config');

module.exports = api => {
  return getBabelConfig(api, {
    plugins: [['transform-builtin-extend', {globals: ['Array']}]]
  });
};
