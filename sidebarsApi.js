module.exports = {
  apiSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Introduction',
        description: 'A public discussion about the design of soroban-rpc.',
        slug: '/',
      },
      items: [
        'goals',
        'anti-goals',
        'json-rpc',
        'pagination',
      ],
    },
    {
      type: 'category',
      label: 'Request/Response Methods',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Request/Response Methods',
        slug: 'methods',
      },
      items: [
        'methods/getEvents',
        'methods/getHealth',
        'methods/getLatestLedger',
        'methods/getLedgerEntries',
        'methods/getNetwork',
        'methods/getTransaction',
        'methods/sendTransaction',
        'methods/simulateTransaction',
      ],
    },
    {
      type: 'category',
      label: 'Incomplete Methods',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Incomplete Methods',
        slug: 'incomplete-methods',
      },
      items: [],
    },
  ],
};
