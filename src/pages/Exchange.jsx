import React from 'react';
import TVChartPlaceholder from '../components/TVChartPlaceholder';
import OrderPanel from '../components/OrderPanel';

function Exchange() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 bg-dark-surface rounded-lg p-4">
        <TVChartPlaceholder />
      </div>
      <div className="lg:col-span-1 bg-dark-surface rounded-lg p-4">
        <OrderPanel />
      </div>
    </div>
  );
}

export default Exchange;
