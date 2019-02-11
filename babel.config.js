const config = require('ocular-dev-tools/config/babel.config.js');


const DISTS = ['es5', 'esm', 'es6'];
const PLUGIN = ['transform-builtin-extend', {globals: ['Array']}];

DISTS.forEach(distName => {
  const dist = config.env[distName];
  dist.plugins = dist.plugins || [];

  // Push repo-specific plugin to front of list
  if (distname !== 'es6') {
	dist.plugins.unshift(PLUGIN);
  }
});

module.exports = config;