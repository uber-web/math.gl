const TARGETS = {
  chrome: '60',
  edge: '15',
  firefox: '53',
  ios: '10.3',
  safari: '10.1',
  node: '8'
};

module.exports = {
  comments: false,
  env: {
    es5: {
      presets: [
        [ '@babel/env', {
          forceAllTransforms: true,
          modules: 'commonjs'
        }]
      ],
      plugins: [
        ['transform-builtin-extend', {globals: ['Array']}],
        '@babel/transform-runtime',
        'version-inline'
      ]
    },
    esm: {
      presets: [
        [ '@babel/env', {
          forceAllTransforms: true,
          modules: false
        }]
      ],
      plugins: [
        ['transform-builtin-extend', {globals: ['Array']}],
        ['@babel/transform-runtime', {useESModules: true}],
        'version-inline'
      ]
    },
    es6: {
      presets: [
        [ '@babel/env', {
          targets: TARGETS,
          modules: false
        }]
      ],
      plugins: [
        ['transform-builtin-extend', {globals: ['Array']}],
        ['@babel/transform-runtime', {useESModules: true}],
        'version-inline'
      ]
    },
    test: {
      plugins: [
        'istanbul'
      ]
    }
  }
};
