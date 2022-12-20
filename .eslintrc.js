const {getESLintConfig, deepMerge} = require('ocular-dev-tools');

const defaultConfig = getESLintConfig({react: '16.8.2'});

// Make any changes to default config here
const config = deepMerge(defaultConfig, {
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
      files: ['examples/**/*.js'],
      rules: {
        'import/no-unresolved': 0
      }
    }
  ]
});

// Uncomment to log the eslint config
// console.debug(config);

module.exports = config;
