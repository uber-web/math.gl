// const {resolve} = require('path');
// const ROOT_DIR = resolve(__dirname, '..')
require('@babel/register')({
  extensions: ['.js', '.jsx', '.ts', '.tsx']
});

require('./index');
