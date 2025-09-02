// Mock-данные для фронтенда

const mockPairs = [
  { id: 1, name: 'BTC/USDT', price: '68,123.10', change24h: -1.2 },
  { id: 2, name: 'ETH/USDT', price: '3,500.50', change24h: 2.5 },
  { id: 3, name: 'SOL/USDT', price: '150.20', change24h: 5.1 },
  { id: 4, name: 'DOGE/USDT', price: '0.158', change24h: -3.4 },
];

const mockPosts = [
  {
    id: 1,
    author: { name: 'CryptoBull', address: '0x123...abc' },
    timestamp: '2 часа назад',
    content: 'BTC готовится к новому рывку! Луна не предел. 🚀',
    likes: 125,
    views: 1200
  },
  {
    id: 2,
    author: { name: 'Аналитик_80', address: '0x456...def' },
    timestamp: '5 часов назад',
    content: 'Не забывайте про диверсификацию. Альткоины показывают силу, особенно в секторе AI.',
    likes: 88,
    views: 950
  }
];

export const getMarketPairs = () => mockPairs;
export const getPosts = () => mockPosts;
