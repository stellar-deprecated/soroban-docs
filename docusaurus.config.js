// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwl");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Soroban Documentation",
  tagline: 'Soroban is a smart contracts platform that is designed with purpose and built to perform.',
  url: "https://stellar.org", // Your website URL
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
  plugins: ["docusaurus-plugin-sass"],
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
          href: "/docs",
        },
        items: [
          {
            to: '/docs', 
            label: 'Docs', 
            position: 'left'
          },
          {
            href: 'https://github.com/stellar/soroban-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // algolia: {
      //   appId: "testingPJZPDNR7VG",
      //   apiKey: "1f36375ebbc70d65c5b8165ecf52a1f2",
      //   indexName: "crawler_Docusaurus",
      // },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/6ZCcYqbC96',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/stellar',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["rust", "toml"],
      },
    }),
};

module.exports = config;
