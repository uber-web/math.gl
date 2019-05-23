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
    test: 'test/index.js',
    'test-browser': 'test/browser.js',
    bench: 'test/bench/index.js',
    'bench-browser': 'test/bench/index.js'
  }
};
