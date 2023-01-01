const {getESLintConfig} = require('ocular-dev-tools/configuration');

module.exports = getESLintConfig({
  react: '16.8.2',
  overrides: {
    env: {
      browser: true,
      es2020: true,
      node: true
    },

    parserOptions: {
      babelOptions: {
        configFile: './babel.config.cjs'
      }
    },

    overrides: [
      {
        // scripts use devDependencies
        files: ['**/test/**/*.ts', '**/scripts/**/*.js', '*.config.js', '*.config.local.js'],
        rules: {
          'import/no-unresolved': 0,
          'import/no-extraneous-dependencies': 0,
          '@typescript-eslint/ban-ts-comment': 0 // We do need our ts-ignores
        }
      },
      {
        files: ['modules/**/*.ts', 'modules/**/*.js'],
        rules: {
          'import/no-unresolved': 0,
          '@typescript-eslint/ban-ts-comment': 0 // We do need our ts-ignores
        }
      },
      {
        files: ['examples/**/*.js'],
        rules: {
          'import/no-unresolved': 0
        }
      }
    ]
  }
});
