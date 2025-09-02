import React from 'react';

const cryptoData = [
  { id: 'btc', name: 'Bitcoin', price: '68,123.10', change: '+1.2%', icon: 'https://via.placeholder.com/40/F7931A/FFFFFF?text=BTC' },
  { id: 'eth', name: 'Ethereum', price: '3,500.50', change: '-0.5%', icon: 'https://via.placeholder.com/40/627EEA/FFFFFF?text=ETH' },
  { id: 'bnb', name: 'BNB', price: '600.25', change: '+2.1%', icon: 'https://via.placeholder.com/40/F3BA2F/FFFFFF?text=BNB' },
  { id: 'sol', name: 'Solana', price: '150.20', change: '+5.1%', icon: 'https://via.placeholder.com/40/9945FF/FFFFFF?text=SOL' },
  { id: 'xrp', name: 'XRP', price: '0.52', change: '-0.7%', icon: 'https://via.placeholder.com/40/23292F/FFFFFF?text=XRP' },
  { id: 'ada', name: 'Cardano', price: '0.45', change: '+3.2%', icon: 'https://via.placeholder.com/40/0033AD/FFFFFF?text=ADA' },
  { id: 'doge', name: 'Dogecoin', price: '0.158', change: '-3.4%', icon: 'https://via.placeholder.com/40/C2A633/FFFFFF?text=DOGE' },
  { id: 'shib', name: 'Shiba Inu', price: '0.000025', change: '+7.1%', icon: 'https://via.placeholder.com/40/E95420/FFFFFF?text=SHIB' },
  { id: 'dot', name: 'Polkadot', price: '7.80', change: '+0.9%', icon: 'https://via.placeholder.com/40/E6007A/FFFFFF?text=DOT' },
  { id: 'avax', name: 'Avalanche', price: '35.10', change: '-2.1%', icon: 'https://via.placeholder.com/40/E84142/FFFFFF?text=AVAX' },
  { id: 'link', name: 'Chainlink', price: '14.50', change: '+4.0%', icon: 'https://via.placeholder.com/40/2A5ADA/FFFFFF?text=LINK' },
  { id: 'ltc', name: 'Litecoin', price: '75.30', change: '-1.5%', icon: 'https://via.placeholder.com/40/345D9D/FFFFFF?text=LTC' },
  { id: 'bch', name: 'Bitcoin Cash', price: '450.00', change: '+2.8%', icon: 'https://via.placeholder.com/40/EB8C27/FFFFFF?text=BCH' },
  { id: 'uni', name: 'Uniswap', price: '8.90', change: '+1.1%', icon: 'https://via.placeholder.com/40/FF007A/FFFFFF?text=UNI' },
  { id: 'matic', name: 'Polygon', price: '0.72', change: '-0.5%', icon: 'https://via.placeholder.com/40/8247E5/FFFFFF?text=MATIC' },
  { id: 'etc', name: 'Ethereum Classic', price: '28.50', change: '+0.9%', icon: 'https://via.placeholder.com/40/669073/FFFFFF?text=ETC' },
];

const CryptoCard = ({ crypto }) => (
  <div className="flex items-center bg-surface rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
    <img src={crypto.icon} alt={crypto.name} className="w-8 h-8 rounded-full mr-3" />
    <div className="flex-grow">
      <p className="font-semibold text-sm text-text">{crypto.name}</p>
      <p className="text-xs text-muted">{crypto.price} USDT</p>
    </div>
    <p className={`text-xs font-bold ${crypto.change.startsWith('+') ? 'text-success' : 'text-danger'}`}>
      {crypto.change}
    </p>
  </div>
);

const TopCryptos = () => {
  return (
    <div className="bg-surface rounded-lg p-4">
      <h3 className="text-lg font-bold mb-4 text-center">ТОП Криптовалют</h3>
      <div className="grid grid-cols-2 gap-4">
        {cryptoData.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
      </div>
    </div>
  );
};

export default TopCryptos;
