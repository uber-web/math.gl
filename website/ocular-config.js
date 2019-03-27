const DOCS = require('../docs/table-of-contents.json');

module.exports = {
  logLevel: 3,

  DOC_FOLDER: '../docs/',
  ROOT_FOLDER: '..',
  DIR_NAME: __dirname,

  EXAMPLES: [],
  DOCS,

  PROJECTS: [], // Other linked projects

  PROJECT_TYPE: 'github',
  PROJECT_NAME: 'math.gl',
  PROJECT_ORG: 'uber-web',
  PROJECT_URL: 'https://github.com/uber-web/math.gl',
  PROJECT_DESC: 'A 3D/WebGL math library',
  WEBSITE_PATH: '/website/',

  FOOTER_LOGO: '',

  HOME_PATH: '/',
  HOME_HEADING: 'A 3D/WebGL math library',
  HOME_RIGHT: null,
  HOME_BULLETS: [
    {
      text: 'Array-based Classes',
      desc: 'All math.gl classes (like Vector3, Matrix4) are subclasses of the built-in JavaScript Array class. This means that they can be used directly with any Javascript function that e.g. expects plain JavaScript Array arguments for Vectors, which is increasingly common.',
      img: 'images/icon-react.svg'
    },
    {
      text: 'Debug Friendly',
      desc: 'JavaScript math can be frustrating to code and debug. math.gl offers optional error checking after every math operation which makes quick work of locating coding errors and bad data. Also, strong "printing support" (toString) simplifies debugging.',
      img: 'images/icon-layers.svg'
    },
    {
      text: 'WebGL Support',
      desc: 'Matrices are stored internally in the format required by WebGL (array of contiguous values in column-major order), while exposing the more "natural" row-major API to the JavaScript programmer (e.g. through accessors, printing using toString() etc).',
      img: 'images/icon-layers.svg'
    },
    {
      text: 'Documentation',
      desc: 'Some JavaScript 3D math libraries come with reference documentation only. If you are new to 3D programming it can be hard to know where to start. math.gl comes with articles that try to show you the big picture and get you quickly up-to-speed on the mathematical concepts and the math.gl classes that support them.',
      img: 'images/icon-layers.svg'
    },
    {
      text: 'Size Conscious',
      desc: 'A math library can quickly get big as a various classed and functions keep getting added. But for many 3D applications, only a few basic operations are necessary. math.gl has made a choices to restrict itself to a set of classes and functions that are likely to be most important in WebGL applications. The intention is to position math.gl as a "mid-size" 3D math library: reasonably full featured, but small enough that unless you are targeting a very small final bundle for your application, its size should not be a big concern.',
      img: 'images/icon-layers.svg'
    }  
  ],

  ADDITIONAL_LINKS: [],
 
  GA_TRACKING: null,

  // For showing star counts and contributors.
  // Should be like btoa('YourUsername:YourKey') and should be readonly.
  GITHUB_KEY: null,

  // TODO/ib - from gatsby starter, clean up
  siteUrl: "https://ocular", // Domain of your website without pathPrefix.
  pathPrefix: "/math.gl/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteRss: "/rss.xml", // Path to the RSS file.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "WebGL User", // Username to display in the author segment.
  copyright: "Copyright © 2019 Uber. MIT Licensed", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
