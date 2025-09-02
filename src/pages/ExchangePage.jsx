import React from 'react';
import MarketsList from '../components/exchange/MarketsList';
import TVChart from '../components/exchange/TVChart';
import OrderPanel from '../components/exchange/OrderPanel';

// Страница биржи
const ExchangePage = () => {
  const [currentPair, setCurrentPair] = React.useState('BTC/USDT');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="lg:col-span-3">
        <MarketsList onSelectPair={setCurrentPair} />
      </div>
      <div className="lg:col-span-6">
        <TVChart pair={currentPair} />
      </div>
      <div className="lg:col-span-3">
        <OrderPanel pair={currentPair} />
      </div>
    </div>
  );
};

export default ExchangePage;
