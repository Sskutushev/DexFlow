import React from 'react';
import MarketsList from '../components/exchange/MarketsList';
import TVChart from '../components/exchange/TVChart';
import OrderPanel from '../components/exchange/OrderPanel';
import TradeSubTabs from '../components/exchange/TradeSubTabs';
import FuturesMarketsList from '../components/exchange/FuturesMarketsList';
import FuturesOrderPanel from '../components/exchange/FuturesOrderPanel';
import OptionsMarketsList from '../components/exchange/OptionsMarketsList';
import OptionsOrderPanel from '../components/exchange/OptionsOrderPanel';
import AssetsMarketsList from '../components/exchange/AssetsMarketsList';
import AssetsOrderPanel from '../components/exchange/AssetsOrderPanel';

// Страница биржи
const ExchangePage = () => {
  const [currentPair, setCurrentPair] = React.useState('BTC/USDT');
  const [activeTab, setActiveTab] = React.useState('swap');
  const isLoggedIn = true; // Mock logged-in state for now

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Reset pair when changing tabs to avoid showing wrong data
    if (tab === 'swap') {
      setCurrentPair('BTC/USDT');
    } else if (tab === 'futures') {
      setCurrentPair('BTC/USDT PERP');
    } else if (tab === 'options') {
      setCurrentPair('BTC/USDT 29SEP24 C60000');
    } else if (tab === 'assets') {
      setCurrentPair('AAPL');
    }
  };

  return (
    <div className="container mx-auto pt-[46px] min-h-screen">
      <TradeSubTabs activeTab={activeTab} setActiveTab={handleTabChange} />

      {activeTab === 'swap' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-0 lg:gap-4">
          <div className="lg:col-span-3 h-[550px]">
            <MarketsList onSelectPair={setCurrentPair} />
          </div>
          <div className="lg:col-span-6 h-[550px] mt-[25px] lg:mt-0">
            <TVChart pair={currentPair} />
          </div>
          <div className="lg:col-span-3 h-[550px] mt-[25px] lg:mt-0">
            <OrderPanel pair={currentPair} isLoggedIn={isLoggedIn} />
          </div>
        </div>
      )}

      {activeTab === 'futures' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-0 lg:gap-4">
          <div className="lg:col-span-3 h-[550px]">
            <FuturesMarketsList onSelectPair={setCurrentPair} />
          </div>
          <div className="lg:col-span-6 h-[550px] mt-[25px] lg:mt-0">
            <TVChart pair={currentPair} />
          </div>
          <div className="lg:col-span-3 h-[550px] mt-[25px] lg:mt-0">
            <FuturesOrderPanel pair={currentPair} isLoggedIn={isLoggedIn} />
          </div>
        </div>
      )}

      {activeTab === 'options' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-0 lg:gap-4">
          <div className="lg:col-span-3 h-[550px]">
            <OptionsMarketsList onSelectPair={setCurrentPair} />
          </div>
          <div className="lg:col-span-6 h-[550px] mt-[25px] lg:mt-0">
            <TVChart pair={currentPair} />
          </div>
          <div className="lg:col-span-3 h-[550px] mt-[25px] lg:mt-0">
            <OptionsOrderPanel pair={currentPair} isLoggedIn={isLoggedIn} />
          </div>
        </div>
      )}

      {activeTab === 'assets' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-0 lg:gap-4">
          <div className="lg:col-span-3 h-[550px]">
            <AssetsMarketsList onSelectPair={setCurrentPair} />
          </div>
          <div className="lg:col-span-6 h-[550px] mt-[25px] lg:mt-0">
            <TVChart pair={currentPair} />
          </div>
          <div className="lg:col-span-3 h-[550px] mt-[25px] lg:mt-0">
            <AssetsOrderPanel pair={currentPair} isLoggedIn={isLoggedIn} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ExchangePage;
