require('@babel/register');

// Note: This script is started from root: cwd is not this folder
const SRC_DIR = './src';

// Registers an alias for this module
const path = require('path');
const moduleAlias = require('module-alias');
moduleAlias.addAlias('@math.gl/web-mercator', path.resolve(SRC_DIR));

// Run the tests
require('./index');
