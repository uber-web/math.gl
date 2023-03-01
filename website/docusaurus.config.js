// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const webpack = require('webpack');
const {resolve} = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'math.gl',
  tagline: 'WebGL2-powered, highly performant large-scale data visualization',
  url: 'https://math.gl',
  baseUrl: process.env.STAGING ? '/math.gl/' : '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/favicon.ico',
  organizationName: 'visgl', // Usually your GitHub org/user name.
  projectName: 'math.gl', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          sidebarPath: resolve('./src/docs-sidebar.js'),
          // Point to to the website directory in your repo.
          editUrl: 'https://github.com/uber-web/math.gl/tree/master/website',
        },
        theme: {
          customCss: [
            resolve('./src/styles.css'),
            // resolve('./node_modules/maplibre-gl/dist/maplibre-gl.css')
          ],
        },
      }),
    ]
  ],

  plugins: [
    [
      './ocular-docusaurus-plugin',
      {
        debug: true,
        resolve: {
          modules: [resolve('node_modules'), resolve('../node_modules')],
          alias: {
            '@math.gl/types': resolve('../modules/types/src'),
            '@math.gl/core': resolve('../modules/core/src'),
            '@math.gl/culling': resolve('../modules/culling/src'),
            '@math.gl/geospatial': resolve('../modules/geospatial/src'),
            '@math.gl/geoid': resolve('../modules/geoid/src'),
            '@math.gl/polygon': resolve('../modules/polygon/src'),
            '@math.gl/proj4': resolve('../modules/proj4/src'),
            '@math.gl/web-mercator': resolve('../modules/web-mercator/src'),
            '@math.gl/sun': resolve('../modules/sun/src'),
            '@math.gl/geohash': resolve('../modules/mapbox/geohash'),
            '@math.gl/quadkey': resolve('../modules/quadkey/src'),
            '@math.gl/s2': resolve('../modules/s2/src'),
          }
        },
        plugins: [
          // new webpack.EnvironmentPlugin(['MapboxAccessToken', 'GoogleMapsAPIKey', 'GoogleMapsMapId']),
          // These modules break server side bundling
          new webpack.IgnorePlugin({
            resourceRegExp: /asciify-image/
          })
        ],
        module: {
          rules: [
            // https://github.com/Esri/calcite-components/issues/2865
            {
              test: /\.m?js/,
              resolve: {
                fullySpecified: false
              }
            }
          ]
        }
      }
    ],
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'modules',
    //     path: '../modules',
    //     routeBasePath: 'modules',
    //     sidebarPath: resolve('./src/examples-sidebar.js'),
    //     breadcrumbs: false,
    //     docItemComponent: resolve('./src/components/example/doc-item-component.jsx')
    //   },
    // ]
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'examples',
    //     path: './src/examples',
    //     routeBasePath: 'examples',
    //     sidebarPath: resolve('./src/examples-sidebar.js'),
    //     breadcrumbs: false,
    //     docItemComponent: resolve('./src/components/example/doc-item-component.jsx')
    //   },
    // ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'math.gl',
        logo: {
          alt: 'vis.gl Logo',
          src: 'images/visgl-logo-dark.png',
        },
        items: [
          {
            to: '/examples',
            position: 'left',
            label: 'Examples',
          },
          {
            to: '/docs',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/showcase',
            position: 'left',
            label: 'Showcase',
          },
          {
            to: 'https://medium.com/vis-gl',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/uber-web/math.gl',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'API Reference',
                to: '/docs/api-reference/core/math',
              },
              {
                label: 'Starter templates',
                href: 'https://github.com/uber-web/math.gl/tree/master/examples/get-started',
              },
              {
                label: 'Playground',
                href: '/playground',
              },
              {
                label: 'Codepen demos',
                href: 'https://codepen.io/vis-gl/',
              },
            ],
          },
          {
            title: 'Other vis.gl Libraries',
            items: [
              {
                label: 'luma.gl',
                href: 'https://luma.gl',
              },
              {
                label: 'loaders.gl',
                href: 'https://loaders.gl',
              },
              {
                label: 'deck.gl',
                href: 'https:/deck.gl',
              },
              {
                label: 'nebula.gl',
                href: 'https://nebula.gl',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Slack workspace',
                href: 'https://join.slack.com/t/mathgl/shared_invite/zt-7oeoqie8-NQqzSp5SLTFMDeNSPxi7eg',
              },
              {
                label: 'vis.gl blog on Medium',
                href: 'https://medium.com/vis-gl',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/uber-web/math.gl',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenJS Foundation`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
