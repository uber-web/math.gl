const resolve = require('path').resolve;

const DEPENDENCIES = require('./package.json').dependencies;
// eslint-disable-next-line import/no-extraneous-dependencies
const ALIASES = require('ocular-dev-tools/config/ocular.config')({
  root: resolve(__dirname, '..')
}).aliases;

// When duplicating example dependencies in website, autogenerate
// aliases to ensure the website version is picked up
// NOTE: module dependencies are automatically injected
// TODO - should this be automatically done by ocular-gatsby?
const dependencyAliases = {};
for (const dependency in DEPENDENCIES) {
  dependencyAliases[dependency] = `${__dirname}/node_modules/${dependency}`;
}

const DOCS = require('../docs/table-of-contents.json');

module.exports = {
  plugins: [{
    resolve: `gatsby-theme-ocular`, 
    options: {
      logLevel: 2,
    
      DOC_FOLDERS: [`${__dirname}/../docs/`, `${__dirname}/../modules`],
      ROOT_FOLDER: '..',
      DIR_NAME: __dirname,
    
      DOCS,
    
      PATH_PREFIX: '/',
    
      PROJECT_TYPE: 'github',
      PROJECT_NAME: 'math.gl',
      PROJECT_ORG: 'uber-web',
      PROJECT_URL: 'https://github.com/uber-web/math.gl',
      PROJECT_DESC: 'A 3D/WebGL math library',
    
      FOOTER_LOGO: '',
    
      HOME_PATH: '/',
      HOME_HEADING: 'A 3D/WebGL math library',
      HOME_RIGHT: null,
      HOME_BULLETS: [
        {
          text: 'Array-based Classes',
          desc: 'All math.gl classes (like Vector3, Matrix4) are subclasses of the built-in JavaScript Array class.',
          img: 'images/icon-high-precision.svg'
        },
        {
          text: 'Debug Friendly',
          desc: 'math.gl offers optional error checking after every math operation which makes quick work of locating coding errors and bad data.',
          img: 'images/icon-high-precision.svg'
        },
        {
          text: 'WebGL Support',
          desc: 'Matrices are stored internally in the format required by WebGL (column-major), while exposing a row-major API to the JavaScript programmer.',
          img: 'images/icon-high-precision.svg'
        },
        {
          text: 'Documentation',
          desc: 'math.gl comes with articles that get you quickly up-to-speed on the mathematical concepts used in 3D programming.',
          img: 'images/icon-high-precision.svg'
        },
        {
          text: 'Size Conscious',
          desc: 'To keep unused code from being bundled, math.gl avoids cross dependencies to maximize tree-shaking.',
          img: 'images/icon-high-precision.svg'
        }
      ],
    
      PROJECTS: [], // Other linked projects
    
      EXAMPLES: [
        {
          title: 'Benchmark',
          image: 'images/icon-high-precision.svg',
          componentUrl: resolve(__dirname, '../examples/benchmarks/app.js'),
          path: 'examples/benchmarks'
        }
      ],
    
      ADDITIONAL_LINKS: [],
    
      GA_TRACKING: null,
    
      // For showing star counts and contributors.
      // Should be like btoa('YourUsername:YourKey') and should be readonly.
      GITHUB_KEY: null,
    
      // Ocular adds this to gatsby's webpack config
      webpack: {
        resolve: {
          alias: Object.assign({}, ALIASES, dependencyAliases)
        }
      },
      
      // Avoids duplicate conflicting inputs when importing from examples folders
      // Ocular adds this to gatsby's webpack config
      WEBPACK_ALIAS: Object.assign({}, ALIASES, dependencyAliases),
    
      WEBPACK_EXCLUDE_REGEXP: /math\.gl\/modules\/.*js$/
    }
  }],
};
