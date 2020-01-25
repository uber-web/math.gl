const {resolve} = require('path');

module.exports = {
  lint: {
    paths: ['modules', 'test'],
    extensions: ['js']
  },

  aliases: {
    // TEST
    test: resolve(__dirname, './test')
  },

  entry: {
    test: 'test/index.js',
    'test-browser': 'test/browser.js',
    bench: 'test/bench.js',
    'bench-browser': 'test/bench.js'
  }
};
