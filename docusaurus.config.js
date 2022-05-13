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

          editUrl:
            'https://github.com/neatlab/docs',
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
              href: 'https://discord.neatio.net',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/Neat_io',
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
                href: 'https://twitter.com/neat_io',
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
                href: 'https://github.com/neatlab',
              },
              {
                label: 'Explorer',
                href: 'https://github.com/neatlab',
              },  
              {
                label: 'GitHub',
                href: 'https://github.com/neatlab',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Neatio.`,
      },

    }),
};

module.exports = config;
