const {resolve} = require('path');

module.exports = {
  babel: {
    plugins: [['transform-builtin-extend', {globals: ['Array']}]]
  },

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
    'bench-browser': 'test/bench/index.js',
    size: {
      all: 'test/size/all.js',
      euler: 'test/size/euler.js',
      matrix4: 'test/size/matrix4.js',
      nothing: 'test/size/nothing.js',
      quaternion: 'test/size/quaternion.js',
      vector2: 'test/size/vector2.js',
      vector3: 'test/size/vector3.js',
      vector4: 'test/size/vector4.js'
    }
  }
};
