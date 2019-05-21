const {resolve} = require('path');

module.exports = {
  lint: {
    paths: ['modules', 'test', 'examples'],
    extensions: ['js']
  },

  aliases: {
    // TEST
    test: resolve(__dirname, './test')
  },

  entry: {
    'test-node': 'test/index.js',
    'bench-node': 'test/bench/index.js',
    'bench-browser': 'test/bench/index.js'
  }
};
