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
