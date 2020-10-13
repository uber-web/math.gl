const {resolve} = require('path');
const DOC_TABLE_OF_CONTENTS = require('../docs/table-of-contents.json');
const ROOT_DIR = resolve('..');

module.exports = {
  plugins: [{
    resolve: `gatsby-theme-ocular`, 
    options: {
      logLevel: 2,
    
      // Folders
      DIR_NAME: __dirname,
      ROOT_FOLDER: ROOT_DIR,

      DOCS: DOC_TABLE_OF_CONTENTS,
      DOC_FOLDERS: [
        resolve(ROOT_DIR, 'docs'),
        resolve(ROOT_DIR, 'modules')
      ],
      SOURCE: [
        resolve('./static'),
        resolve('./src')
      ],
  
      PROJECT_TYPE: 'github',

      PROJECT_NAME: 'math.gl',
      PROJECT_ORG: 'uber-web',
      PROJECT_ORG_LOGO: 'images/uber-logo.png',
      PROJECT_URL: 'https://github.com/uber-web/math.gl',
      PROJECT_DESC: 'A collection of math modules for Geospatial and 3D/WebGL visualization use cases',
    
      HOME_PATH: '/',

      INDEX_PAGE_URL: resolve(__dirname, './templates/index.jsx'),

      GA_TRACKING_ID: 'UA-74374017-2',
      // For showing star counts and contributors.
      // Should be like btoa('YourUsername:YourKey') and should be readonly.
      GITHUB_KEY: null,

      PROJECTS: [
        {
          name: 'vis.gl',
          url: 'https://vis.gl'
        },
        {
          name: 'luma.gl',
          url: 'https://luma.gl'
        },
        {
          name: 'deck.gl',
          url: 'https://deck.gl'
        },
        {
          name: 'loaders.gl',
          url: 'https://loaders.gl'
        }
      ], // Other linked projects

      LINK_TO_GET_STARTED: '/docs',

      ADDITIONAL_LINKS: [{
        name: 'Blog',
        href: 'http://medium.com/vis-gl',
        index: 4
      }],

      STYLESHEETS: [''],

      EXAMPLES: [
        {
          title: 'Benchmark',
          image: 'images/benchmark.png',
          componentUrl: resolve(__dirname, '../examples/benchmarks/app.js'),
          path: 'examples/benchmarks'
        }
      ]    
    }
  }],
};
