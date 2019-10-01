// Note: This script is started from root: cwd is not this folder
const SRC_DIR = './src';

// Enables ES2015 import/export in Node.js
require('reify');

// Registers an alias for this module
const path = require('path');
const moduleAlias = require('module-alias');
moduleAlias.addAlias('viewport-mercator-project', path.resolve(SRC_DIR));

// Run the tests
require('./index');
