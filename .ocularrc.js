const {resolve} = require('path');

module.exports = {
  lint: {
    paths: ['dev-docs', 'docs', 'modules', 'examples', 'test'] // 'website'
    // extensions: ['js', 'md']
  },

  babel: {
    // extensions: ['.js']
  },

  aliases: {
    test: resolve(__dirname, 'test')
  },

  entry: {
    test: 'test/node.ts',
    'test-browser': 'test/browser.ts',
    bench: 'test/bench/node.ts',
    'bench-browser': 'test/bench/browser.ts',
    size: [
      'test/size/core.js',
      'test/size/vector3.js',
      'test/size/matrix4.js',
      'test/size/quaternion.js',
      'test/size/culling.js',
      'test/size/geospatial.js',
      'test/size/polygon.js',
      'test/size/sun.js',
      'test/size/web-mercator.js'
    ]
  }
};
