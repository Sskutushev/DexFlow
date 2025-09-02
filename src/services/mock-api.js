// Файл для предоставления mock-данных для фронтенда

const mockPairs = [
  { id: 1, name: 'ETH/USDC', price: '3,500.50', change24h: 2.5 },
  { id: 2, name: 'BTC/USDC', price: '68,123.10', change24h: -1.2 },
  { id: 3, name: 'DEXN/ETH', price: '0.00043', change24h: 10.8 },
  { id: 4, name: 'SOL/USDC', price: '150.20', change24h: 5.1 },
];

/**
 * Возвращает список торговых пар.
 */
export const getMarketPairs = () => {
  return mockPairs;
};
