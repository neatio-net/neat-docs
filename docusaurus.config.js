// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/nightOwl');
const darkCodeTheme = require('prism-react-renderer/themes/okaidia');

/** @type {import('@docusaurus/types').Config} */
const config = {
  
  title: 'NeatDocs',
  tagline: 'Neatio blockchain documentation and tutorials.',
  url: 'https://docs.neatio.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'neatlab',
  projectName: 'docs', 


  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

         },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Neatio',
        logo: {
          alt: 'Neatio Logo',
          src: 'img/logo.png',
        },
        // items: [
        //   {
        //     type: 'doc',
        //     docId: 'intro',
        //     position: 'left',
        //     label: 'Introduction',
        //   },
  
        // ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
              label: 'Discord',
              href: 'https://dd.neatio.net',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/neat_io',
            },
            {
              label: 'Bitcointalk',
              href: 'https://bitcointalk.org/index.php?topic=5377414',
            },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/neatio/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/neatio_network',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/neatio.net',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Wallet',
                href: 'https://wallet.neatio.net',
              },
              {
                label: 'Explorer',
                href: 'https://scan.neatio.net',
              },  
              {
                label: 'GitHub',
                href: 'https://github.com/neatio-network',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Neatio.`,
      },

    }),
};

module.exports = config;
