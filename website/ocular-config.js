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
  logLevel: 4,

  DOC_FOLDERS: [`${__dirname}/../docs/`, `${__dirname}/../modules`],
  ROOT_FOLDER: '..',
  DIR_NAME: __dirname,

  DOCS,

  PROJECTS: [], // Other linked projects

  PROJECT_TYPE: 'github',
  PROJECT_NAME: 'math.gl',
  PROJECT_ORG: 'uber-web',
  PROJECT_URL: 'https://github.com/uber-web/math.gl',
  PROJECT_DESC: 'A 3D/WebGL math library',
  PATH_PREFIX: '/',

  FOOTER_LOGO: '',

  HOME_PATH: '/',
  HOME_HEADING: 'A 3D/WebGL math library',
  HOME_RIGHT: null,
  HOME_BULLETS: [
    {
      text: 'Array-based Classes',
      desc: 'All math.gl classes (like Vector3, Matrix4) are subclasses of the built-in JavaScript Array class. This means that they can be used directly with any Javascript function that e.g. expects plain JavaScript Array arguments for Vectors, which is increasingly common.',
      img: 'images/icon-high-precision.svg'
    },
    {
      text: 'Debug Friendly',
      desc: 'JavaScript math can be frustrating to code and debug. math.gl offers optional error checking after every math operation which makes quick work of locating coding errors and bad data. Also, strong "printing support" (toString) simplifies debugging.',
      img: 'images/icon-high-precision.svg'
    },
    {
      text: 'WebGL Support',
      desc: 'Matrices are stored internally in the format required by WebGL (array of contiguous values in column-major order), while exposing the more "natural" row-major API to the JavaScript programmer (e.g. through accessors, printing using toString() etc).',
      img: 'images/icon-high-precision.svg'
    },
    {
      text: 'Documentation',
      desc: 'Some JavaScript 3D math libraries come with reference documentation only. If you are new to 3D programming it can be hard to know where to start. math.gl comes with articles that try to show you the big picture and get you quickly up-to-speed on the mathematical concepts and the math.gl classes that support them.',
      img: 'images/icon-high-precision.svg'
    },
    {
      text: 'Size Conscious',
      desc: 'A math library can quickly get big as a various classed and functions keep getting added. But for many 3D applications, only a few basic operations are necessary. math.gl has made a choices to restrict itself to a set of classes and functions that are likely to be most important in WebGL applications. The intention is to position math.gl as a "mid-size" 3D math library: reasonably full featured, but small enough that unless you are targeting a very small final bundle for your application, its size should not be a big concern.',
      img: 'images/icon-high-precision.svg'
    }
  ],

  EXAMPLES: [
    // {
    //   title: 'Benchmarks',
    //   image: 'images/icon-high-precision.svg',
    //   componentUrl: resolve(__dirname, '../examples/benchmarks/app.js'),
    //   path: 'examples/benchmarks'
    // }
  ],

  ADDITIONAL_LINKS: [],

  GA_TRACKING: null,

  // For showing star counts and contributors.
  // Should be like btoa('YourUsername:YourKey') and should be readonly.
  GITHUB_KEY: null,

  // Avoids duplicate conflicting inputs when importing from examples folders
  // Ocular adds this to gatsby's webpack config
  webpack: {
    resolve: {
      // modules: [resolve(__dirname, './node_modules')],
      alias: Object.assign({}, ALIASES, dependencyAliases)
      // Local aliases need to be set in local gatsby node!
    }
  }
};
