module.exports = {
  mySidebar: [
    {
      type: 'doc',
      id: 'README',
      label: 'Welcome',
    },
    {
      type: 'link',
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      type: 'doc',
      id: 'scaffold-soroban',
      label: 'Scaffold Soroban',
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/docker',
        'guides/initialization',
        'guides/react',
        'guides/smart-contracts',
        'guides/wallets'
      ],
      collapsible: true,  // The category can be collapsed.
      collapsed: true,   // Initially, the category will be collapsed.
    },
  ],
};
