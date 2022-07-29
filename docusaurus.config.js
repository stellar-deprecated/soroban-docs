// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwl");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Soroban Documentation",
  // tagline: 'Dinosaurs are cool',
  url: "https://stellar.org", // Your website URL
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
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
        docs: {
          showLastUpdateTime: true,
          breadcrumbs: true,
          // remarkPlugins: [require("mdx-mermaid")],
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/stellar/soroban-docs/tree/main/",
        },
        blog: false,
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
        hideOnScroll: true,
        logo: {
          width: 100,
          src: "img/stellar-logo.svg",
          srcDark: "img/stellar-logo-dark.svg",
          href: "/docs",
        },
        items: [
          {
            href: 'https://github.com/stellar/docs-soroban',
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
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["rust", "toml"],
      },
      // tableOfContents: { maxHeadingLevel: 2 },
    }),
};

module.exports = config;
