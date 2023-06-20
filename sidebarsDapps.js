module.exports = {
  dappsSidebar: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'category',
      label: 'Dapp Challenges',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Crowdfund',
          collapsible: true,
          collapsed: false,
          items: [
            'dapp-challenges/challenge-0-crowdfund/challenge-0-crowdfund',
            'dapp-challenges/challenge-0-crowdfund/challenge-0-walkthrough',
          ],
        },
        {
          type: 'category',
          label: 'Payment',
          collapsible: true,
          collapsed: false,
          items: [
            'dapp-challenges/challenge-1-payment/challenge-1-payment',
            'dapp-challenges/challenge-1-payment/challenge-1-walkthrough',
          ],
        },
      ],
    },
  ],
};
