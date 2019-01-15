// Launch script for various Node test configurations

// Enables ES2015 import/export in Node.js
require('reify');

require('../aliases')();

/* global process */
const path = require('path');
const moduleAlias = require('module-alias');

const {BrowserTestDriver} = require('probe.gl/test-utils');

const mode = process.argv.length >= 3 ? process.argv[2] : 'default';
const arg = process.argv.length >= 4 ? process.argv[3] : 'default';
console.log(`Running test suite in "${mode}" mode...`); // eslint-disable-line

switch (mode) {
  case 'test':
  case 'src':
  case 'node':
  case 'fast':
    require('./index');
    break;

  // TODO - we need to handle different dists
  case 'dist':
    require('@babel/register')({
      ignore: [
        // Only transpile import/export in babel/runtime (of all things)
        // `reify` does not appear to trigger on node_modules
        filepath => {
          if (filepath.indexOf('node_modules') !== -1) {
            if (filepath.indexOf('@babel/runtime') !== -1) {
              return true;
            }
          }
          return false;
        }
      ]
    });
    // Load this module from the dist folder
    const dist = arg === 'default' ? 'es5' : arg;
    moduleAlias.addAlias('math.gl', path.resolve(`./dist/${dist}`));

    require('./index');
    break;

  case 'cover':
    require('@babel/register');
    require('./index');
    break;

  case 'browser':
    new BrowserTestDriver().run({
      process: 'webpack-dev-server',
      parameters: ['--config', 'test/webpack.config.js', '--env.testBrowser'],
      exposeFunction: 'testDone'
    });
    break;

  case 'bench':
    require('./bench/index'); // Run the benchmarks
    break;

  case 'bench-browser':
    // TODO: "bench-browser": "webpack-dev-server --config test/webpack.config.js --env.bench --progress --hot --open"
    new BrowserTestDriver().run({
      process: 'webpack-dev-server',
      parameters: ['--config', 'test/webpack.config.js', '--env.benchBrowser'],
      exposeFunction: 'testDone'
    });
    break;

  case 'size':
  case 'analyze':
  case 'analyze-size':
    const util = require('util');
    const exec = util.promisify(require('child_process').exec);
    exec(
      'webpack --config test/webpack.config.js --hide-modules --env.import-nothing --env.analyze --env.es6'
    );
    break;

  default:
    throw new Error(`Unknown test mode ${mode} (${JSON.stringify(process.argv)})`);
}
