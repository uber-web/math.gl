const {getESLintConfig} = require('ocular-dev-tools/configuration');

module.exports = getESLintConfig({
  react: '16.8.2',
  overrides: {
    env: {
      browser: true,
      es2020: true,
      node: true
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
        // gl-matrix code base has not kept up with the times...
        files: ['modules/core/**/*.ts', 'modules/core/**/*.js'],
        rules: {
          camelcase: 0
        }
      },
      {
        // gl-matrix code base has not kept up with the times...
        files: ['modules/core/src/gl-matrix/*.ts', 'modules/core/src/gl-matrix/*.js'],
        rules: {
          'import/no-unresolved': 0,
          '@typescript-eslint/no-unsafe-return': 0,
          '@typescript-eslint/no-unsafe-assignment': 0,
          '@typescript-eslint/no-unsafe-member-access': 0,
          '@typescript-eslint/explicit-module-boundary-types': 0,
          '@typescript-eslint/restrict-template-expressions': 0,
          '@typescript-eslint/restrict-plus-operands': 0,
          'no-shadow': 0,
          'max-params': 0,
          'max-statements': 0,
          complexity: 0,
          eqeqeq: 0,
          'no-eq-null': 0,
          camelcase: 0,
          'prefer-const': 0
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
