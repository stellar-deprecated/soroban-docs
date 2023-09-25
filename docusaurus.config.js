// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwl");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Soroban - Smart Contracts Platform for Developers",
  tagline: 'Soroban is a smart contracts platform that is designed with purpose and built to perform. The Testnet has launched! Start experimenting now!',
  url: "https://soroban.stellar.org", // Your website URL
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "stellar", // Usually your GitHub org/user name.
  projectName: "soroban-docs", // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    "docusaurus-plugin-sass",
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'UA-53373928-1',
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebarsApi.js'),
        editUrl: "https://github.com/stellar/soroban-docs/tree/main/",
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
    {
      id: 'dapps',
      path: 'dapps',
      routeBasePath: 'dapps',
      sidebarPath: require.resolve('./sidebarsDapps.js'),
      editUrl: "https://github.com/stellar/soroban-docs/tree/main/",
      showLastUpdateTime: true,
    },
  ],
    require('./src/dev-server-plugin'),
    require('./src/analytics-module')
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          showLastUpdateTime: true,
          breadcrumbs: true,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/stellar/soroban-docs/tree/main/",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.scss")],
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/meta.png',
      docs: {
        sidebar: {
          autoCollapseCategories: false
        }
      },
      navbar: {
        logo: {
          width: 100,
          src: "img/soroban-wordmark-temp.svg",
          srcDark: "img/soroban-wordmark-temp-dark.svg",
          href: "/",
        },
        items: [
          {
            to: '/docs',
            label: 'Docs',
            position: 'left'
          },
          {
            to: '/api',
            label: 'API',
            position: 'left'
          },
          // {
          //   href: 'https://fastcheapandoutofcontrol.com/',
          //   label: 'Play Game',
          //   className: 'nav-highlight',
          //   position: 'left',
          // },
          {
            to: '/dapps',
            label: 'Dapps',
            position: 'left'
          },
          {
            href: 'https://github.com/stellar/rs-soroban-sdk',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/6ZCcYqbC96',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      algolia: {
        appId: "VNSJF5AWIZ",
        apiKey: "a305ee37f0ac993099385788d84de722",
        indexName: "crawler_Soroban Docs",
      },
      footer: {
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'About SDF',
                href: 'https://stellar.org/foundation',
              },
              {
                label: 'Careers',
                href: 'https://stellar.org/foundation/careers',
              },
              {
                label: 'Events',
                href: 'https://stellar.org/events',
              },
              {
                label: 'Grants and Funding',
                href: 'https://stellar.org/foundation/grants-and-funding',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Developer Discord',
                href: 'https://discord.gg/stellardev',
              },
              {
                label: 'Developer Google Group',
                href: 'https://groups.google.com/g/stellar-dev?pli=1',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/stellar/soroban-docs',
              },
              {
                label: 'Developer Blog',
                href: 'https://www.stellar.org/developers-blog',
              },
              {
                label: 'Soroban Quest',
                href: 'https://quest.stellar.org/soroban',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["rust", "toml", "solidity", "cpp"],
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;
