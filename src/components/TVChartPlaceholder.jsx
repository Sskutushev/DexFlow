import React from 'react';

function TVChartPlaceholder() {
  return (
    <div 
      className="w-full h-[500px] bg-dark-900 rounded-md flex items-center justify-center"
      aria-label="Область для графика TradingView"
    >
      <div className="text-center text-text-tertiary">
        <h3 className="text-lg font-semibold">График TradingView</h3>
        <p className="text-sm">Здесь будет отображаться торговый график.</p>
        <p className="text-xs mt-2">
          Для интеграции см. комментарии в файле <br />
          <code>src/components/TVChartPlaceholder.jsx</code>
        </p>
      </div>
    </div>
  );
}

export default TVChartPlaceholder;
