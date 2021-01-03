module.exports = {
  extends: ['./node_modules/ocular-dev-tools/templates/.eslintrc'],
  parserOptions: {
    ecmaVersion: 2020
  },
  env: {
    es2020: true, // <- activate “es2020” globals, like BigInt
    browser: true,
    node: true
  }
};
