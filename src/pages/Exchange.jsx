import React from 'react';
import MarketsList from '../components/MarketsList';
import TVChartPlaceholder from '../components/TVChartPlaceholder';
import OrderPanel from '../components/OrderPanel';

// Основная страница биржи
const Exchange = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="lg:col-span-3">
        <MarketsList />
      </div>
      <div className="lg:col-span-6">
        <TVChartPlaceholder />
      </div>
      <div className="lg:col-span-3">
        <OrderPanel />
      </div>
    </div>
  );
};

export default Exchange;