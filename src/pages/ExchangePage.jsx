import React from 'react';
import MarketsList from '../components/exchange/MarketsList';
import TVChart from '../components/exchange/TVChart';
import OrderPanel from '../components/exchange/OrderPanel';

// Страница биржи
const ExchangePage = () => {
  const [currentPair, setCurrentPair] = React.useState('BTC/USDT');
  const isLoggedIn = true; // Mock logged-in state for now

  return (
    <div className="container mx-auto pt-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-3 h-auto lg:h-[800px]">
          <MarketsList onSelectPair={setCurrentPair} />
        </div>
        <div className="lg:col-span-6 h-[400px] lg:h-[800px] mt-4 lg:mt-0">
          <TVChart pair={currentPair} />
        </div>
        <div className="lg:col-span-3 h-auto lg:h-[800px] mt-4 lg:mt-0">
          <OrderPanel pair={currentPair} isLoggedIn={isLoggedIn} />
        </div>
      </div>
    </div>
  );
};

export default ExchangePage;
