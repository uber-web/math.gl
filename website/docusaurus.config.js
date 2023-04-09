// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const webpack = require('webpack');
const {resolve} = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'math.gl',
  tagline: 'A collection of math modules for Geospatial and 3D visualization use cases',
  url: 'https://math.gl',
  baseUrl: '/math.gl',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/favicon.png',
  organizationName: 'uber-web', // Usually your GitHub org/user name.
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
            'website-examples': resolve('../examples'),

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

            '@probe.gl/bench': resolve('../node_modules/@probe.gl/bench')
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
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'examples',
        path: './src/examples',
        routeBasePath: 'examples',
        sidebarPath: resolve('./src/examples-sidebar.js'),
        breadcrumbs: false,
        docItemComponent: resolve('./src/components/example/doc-item-component.jsx')
      },
    ],
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        // Options here
      }
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          // docs/modules/*/api-reference <= modules/*/docs/api-reference
          if (existingPath.includes('/docs/modules/')) {
            return [
              existingPath
                .replace('/docs/modules/', '/modules/')
                // Replaces api-reference if present
                .replace('/api-reference/', '/docs/api-reference/')
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        }
      }
    ]
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
          // {
          //   to: '/showcase',
          //   position: 'left',
          //   label: 'Showcase',
          // },
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
                label: 'vis.gl',
                href: 'https://vis.gl',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'deck.gl slack',
                href: 'https://join.slack.com/t/deckgl/shared_invite/zt-7oeoqie8-NQqzSp5SLTFMDeNSPxi7eg',
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
