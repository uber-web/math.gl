const {resolve} = require('path');

module.exports = {
  lint: {
    paths: ['src', 'test', 'examples'],
    extensions: ['js']
  },

  aliases: {
    'math.gl/test': resolve(__dirname, './test')
  },

  entry: {
    'test-node': 'test/index.js',
    'bench-node': 'test/bench/index.js',
    'bench-browser': 'test/bench/index.js'
  }
};
