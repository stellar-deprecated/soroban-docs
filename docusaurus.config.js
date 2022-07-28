// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwl");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Soroban Documentation",
  // tagline: "Dinosaurs are cool",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "stellar", // Usually your GitHub org/user name.
  projectName: "soroban-docs", // Usually your repo name.
  url: "https://stellar.org", // "https://stellar-docusaurus.vercel.app", // Your website URL
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'fr'],
  // },
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
          remarkPlugins: [require("mdx-mermaid")],
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
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
      docs: { sidebar: { autoCollapseCategories: true } },
      navbar: {
        hideOnScroll: true,
        logo: {
          width: 100,
          src: "img/stellar-logo.svg",
          srcDark: "img/stellar-logo-dark.svg",
          href: "/docs",
        },
        items: [
          // {
          //   href: "https://developers.stellar.org/api",
          //   label: "API",
          //   position: "right",
          // },
          // {
          //   href: "https://github.com/jesmarsc/stellar-docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },
          // {
          //   type: "search",
          //   position: "right",
          // },
        ],
      },
      // algolia: {
      //   appId: "testingPJZPDNR7VG",
      //   apiKey: "1f36375ebbc70d65c5b8165ecf52a1f2",
      //   indexName: "crawler_Docusaurus",
      // },
      // footer: {
      //   links: [
      //     {
      //       title: "Resources",
      //       items: [
      //         {
      //           label: "Get Started",
      //           href: "https://www.stellar.org/start",
      //         },
      //         {
      //           label: "Learn",
      //           href: "https://www.stellar.org/learn/intro-to-stellar",
      //         },
      //         {
      //           label: "Case Studies",
      //           href: "https://www.stellar.org/case-studies",
      //         },
      //         {
      //           label: "Stellar Quest",
      //           href: "https://quest.stellar.org/",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Tools",
      //       items: [
      //         {
      //           label: "Account Viewer",
      //           href: "https://accountviewer.stellar.org/",
      //         },
      //         {
      //           label: "Laboratory",
      //           href: "https://laboratory.stellar.org/",
      //         },
      //         {
      //           label: "Dashboard",
      //           href: "https://dashboard.stellar.org/",
      //         },
      //         {
      //           label: "Ledger Explorer",
      //           href: "https://stellar.expert/explorer/public",
      //         },
      //         { label: "All Tools", href: "https://www.stellar.org/tools" },
      //       ],
      //     },
      //     {
      //       title: "Developers",
      //       items: [
      //         {
      //           label: "Developer Resources",
      //           href: "https://www.stellar.org/developers-legacy",
      //         },
      //         {
      //           label: "Status",
      //           href: "https://status.stellar.org/",
      //         },
      //         {
      //           label: "Technical Papers",
      //           to: "https://www.stellar.org/developers/guides/concepts/scp.html",
      //         },
      //         {
      //           label: "Developer Blog",
      //           href: "https://www.stellar.org/developers-blog",
      //         },
      //       ],
      //     },
      //   ],
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // additionalLanguages: ["java"],
      },
      tableOfContents: { maxHeadingLevel: 2 },
    }),
};

module.exports = config;
