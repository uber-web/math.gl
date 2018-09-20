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
        '@babel/transform-runtime',
        ['transform-builtin-extend', {globals: ['Array']}],
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
        ['@babel/transform-runtime', {useESModules: true}],
        ['transform-builtin-extend', {globals: ['Array']}],
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
        ['@babel/transform-runtime', {useESModules: true}],
        ['transform-builtin-extend', {globals: ['Array']}],
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
