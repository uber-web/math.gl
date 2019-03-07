const getBabelConfig = require('ocular-dev-tools/config/babel.config');

module.exports = api => {
  return getBabelConfig(api, {
    plugins: [['transform-builtin-extend', {globals: ['Array']}]]
  });
};
