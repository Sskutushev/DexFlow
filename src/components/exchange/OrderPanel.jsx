import React from 'react';

const OrderPanel = ({ pair }) => (
  <div className="bg-surface rounded-lg p-4 h-full">
    <h2 className="text-lg font-bold mb-4">Обмен {pair}</h2>
    <div className="space-y-4">
      <div>
        <label className="text-xs text-muted">Отдаете</label>
        <div className="flex items-center bg-card p-3 rounded-lg mt-1">
          <input type="text" placeholder="0.0" className="bg-transparent w-full text-xl outline-none" />
          <button className="bg-glass-strong px-3 py-1 rounded-md text-sm font-semibold">{pair.split('/')[0]}</button>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="p-2 rounded-full border border-glass-strong hover:bg-glass-strong">
          <img src="/assets/icons/ic-arrow-down.svg" alt="Swap icon" className="h-5 w-5" />
        </button>
      </div>
      <div>
        <label className="text-xs text-muted">Получаете</label>
        <div className="flex items-center bg-card p-3 rounded-lg mt-1">
          <input type="text" placeholder="0.0" className="bg-transparent w-full text-xl outline-none" />
          <button className="bg-glass-strong px-3 py-1 rounded-md text-sm font-semibold">{pair.split('/')[1]}</button>
        </div>
      </div>
      <button className="w-full bg-accent-gradient text-white font-semibold py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
        Подключить кошелёк
      </button>
    </div>
  </div>
);

export default OrderPanel;
