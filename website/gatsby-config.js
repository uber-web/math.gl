const resolve = require('path').resolve;

const DOCS = require('../docs/table-of-contents.json');

module.exports = {
  plugins: [{
    resolve: `gatsby-theme-ocular`, 
    options: {
      logLevel: 2,
    
      DIR_NAME: __dirname,
      ROOT_FOLDER: `${__dirname}/../`,
    
      DOCS,
      DOC_FOLDERS: [`${__dirname}/../docs/`, `${__dirname}/../modules`],
      SOURCE: [`${__dirname}/static`, `${__dirname}/src`],
    
      PATH_PREFIX: '/',

      GA_TRACKING: null,
      // For showing star counts and contributors.
      // Should be like btoa('YourUsername:YourKey') and should be readonly.
      GITHUB_KEY: null,

      PROJECT_TYPE: 'github',

      PROJECT_NAME: 'math.gl',
      PROJECT_ORG: 'uber-web',
      PROJECT_ORG_LOGO: 'images/uber-logo.png',
      PROJECT_URL: 'https://github.com/uber-web/math.gl',
      PROJECT_DESC: 'A collection of math modules for Geospatial and 3D visualization',
    
      HOME_PATH: '/',

      INDEX_PAGE_URL: resolve(__dirname, './templates/index.jsx'),

      PROJECTS: [
        {
          name: 'luma.gl',
          url: 'https://luma.gl'
        },
        {
          name: 'deck.gl',
          url: 'https://luma.gl'
        },
        {
          name: 'loaders.gl',
          url: 'https://loaders.gl'
        },
        {
          name: 'nebula.gl',
          url: 'https://nebula.gl'
        }
      ], // Other linked projects

      LINK_TO_GET_STARTED: '/modules/core/docs/developer-guide/core-overview',

      ADDITIONAL_LINKS: [{name: 'Blog', href: 'http://medium.com/vis-gl'}],

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
