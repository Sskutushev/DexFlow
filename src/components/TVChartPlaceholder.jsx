import React from 'react';

// Компонент-заглушка для графика TradingView
const TVChartPlaceholder = () => {
  return (
    <div className="bg-surface rounded-lg h-[400px] flex items-center justify-center">
      <div className="text-center text-muted">
        <img src="/assets/icons/ic-chart.svg" alt="Chart icon" className="h-12 w-12 mx-auto mb-4 opacity-50" />
        <h3 className="font-bold">График TradingView</h3>
        <p className="text-sm">Здесь будет основной торговый график.</p>
      </div>
    </div>
  );
};

export default TVChartPlaceholder;