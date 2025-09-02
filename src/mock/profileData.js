export const mockProfile = {
  address: '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t',
  name: 'Satoshi Nakamoto',
  bio: 'Создатель Bitcoin. Энтузиаст децентрализации и криптографии.',
  avatar: 'https://i.pravatar.cc/150?u=0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t',
  stats: {
    followers: 1337,
    following: 42,
    posts: 5,
  },
  posts: [
    {
      id: 1,
      author: {
        address: '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t',
        name: 'Satoshi Nakamoto',
        avatar: 'https://i.pravatar.cc/150?u=0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t',
      },
      timestamp: '2 часа назад',
      content: 'Думаю, что децентрализация - это будущее финансов. #Bitcoin #Crypto',
      likes: 152,
      views: 2500,
    },
    {
      id: 2,
      author: {
        address: '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t',
        name: 'Satoshi Nakamoto',
        avatar: 'https://i.pravatar.cc/150?u=0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t',
      },
      timestamp: '1 день назад',
      content: 'Протестировал новую функцию обмена на DexFlow. Работает отлично! Интуитивно понятно и быстро.',
      likes: 99,
      views: 1800,
    },
    {
      id: 3,
      author: {
        address: '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t',
        name: 'Satoshi Nakamoto',
        avatar: 'https://i.pravatar.cc/150?u=0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t',
      },
      timestamp: '3 дня назад',
      content: 'Приватность важна. Всегда используйте надежные кошельки и не делитесь своими приватными ключами.',
      likes: 210,
      views: 3500,
    },
  ],
  portfolio: [
    { id: 'eth', symbol: 'ETH', name: 'Ethereum', amount: 12.5, valueUSD: 25000.75, icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png' },
    { id: 'dxf', symbol: 'DXF', name: 'DexFlow Token', amount: 100000, valueUSD: 10000.00, icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png' }, // Placeholder icon
    { id: 'usdt', symbol: 'USDT', name: 'Tether', amount: 5000.50, valueUSD: 5000.50, icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png' },
    { id: 'btc', symbol: 'BTC', name: 'Bitcoin', amount: 2.1, valueUSD: 60000.00, icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png' },
  ],
  activity: [
      { id: 1, type: 'SWAP', details: 'обменял 1.5 ETH на 4500 USDT', timestamp: '3 часа назад' },
      { id: 2, type: 'LIKE', details: 'лайкнул пост от @VitalikButerin', timestamp: '5 часов назад' },
      { id: 3, type: 'FOLLOW', details: 'начал отслеживать @haydenadams', timestamp: '1 день назад' },
      { id: 4, type: 'POST', details: 'опубликовал новый пост', timestamp: '2 дня назад' },
  ]
};