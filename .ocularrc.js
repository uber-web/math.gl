const {resolve} = require('path');

module.exports = {
  lint: {
    paths: ['dev-docs', 'docs', 'modules', 'examples', 'test'], // 'website'
    extensions: ['js', 'md']
  },

  babel: {
    extensions: ['.js']
  },

  aliases: {
    test: resolve(__dirname, 'test')
  },

  entry: {
    test: 'test/node.js',
    'test-browser': 'test/browser.js',
    bench: 'test/bench/node.js',
    'bench-browser': 'test/bench/browser.js',
    size: 'test/size/import-nothing.js'
  }
};
