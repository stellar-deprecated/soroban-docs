module.exports = {
  mySidebar: [
    {
      type: 'link',
      label: 'Welcome',
      href: 'https://developers.stellar.org/docs/learn/migrate/introduction-to-solidity-and-rust',
    },
    {
      type: 'link',
      label: 'Dashboard',
      href: 'https://developers.stellar.org/docs/learn/interactive/dapps/dashboard',
    },
    {
      type: 'link',
      label: 'Scaffold Soroban',
      href: 'https://developers.stellar.org/docs/learn/interactive/dapps/scaffold-soroban',
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'link',
          label: 'Docker',
          href: 'https://developers.stellar.org/docs/smart-contracts/guides/dapps/docker'
        },
        {
          type: 'link',
          label: 'Initialization',
          href: 'https://developers.stellar.org/docs/smart-contracts/guides/dapps/initialization'
        },
        {
          type: 'link',
          label: 'React',
          href: 'https://developers.stellar.org/docs/smart-contracts/guides/dapps/react'
        },
        {
          type: 'link',
          label: 'Smart Contracts',
          href: 'https://developers.stellar.org/docs/learn/interactive/dapps/challenges/challenge-0-crowdfund'
        },
        {
          type: 'link',
          label: 'Wallets',
          href: 'https://developers.stellar.org/docs/smart-contracts/guides/freighter/integrate-freighter-react'
        },
      ],
      collapsible: true,  // The category can be collapsed.
      collapsed: true,   // Initially, the category will be collapsed.
    },
  ],
};
