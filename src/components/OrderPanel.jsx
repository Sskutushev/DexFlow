import React from 'react';

// Панель для создания ордеров
const OrderPanel = () => {
  return (
    <div className="bg-surface rounded-lg p-4 h-full">
      <h2 className="text-lg font-bold mb-4">Обмен</h2>
      <div className="space-y-4">
        {/* Поле "Отдаете" */}
        <div>
          <label className="text-xs text-muted">Отдаете</label>
          <div className="flex items-center bg-card p-3 rounded-lg mt-1">
            <input type="text" placeholder="0.0" className="bg-transparent w-full text-xl outline-none text-text" />
            <button className="bg-glass-strong px-3 py-1 rounded-md text-sm font-semibold">ETH</button>
          </div>
        </div>

        {/* Иконка обмена */}
        <div className="flex justify-center">
          <button className="p-2 rounded-full border border-glass-strong hover:bg-glass-strong">
            <img src="/assets/icons/ic-arrow-down.svg" alt="Swap icon" className="h-5 w-5" />
          </button>
        </div>

        {/* Поле "Получаете" */}
        <div>
          <label className="text-xs text-muted">Получаете</label>
          <div className="flex items-center bg-card p-3 rounded-lg mt-1">
            <input type="text" placeholder="0.0" className="bg-transparent w-full text-xl outline-none text-text" />
            <button className="bg-glass-strong px-3 py-1 rounded-md text-sm font-semibold">USDC</button>
          </div>
        </div>

        {/* Кнопка */}
        <button className="w-full bg-accent-gradient text-white font-semibold py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
          Предпросмотр обмена
        </button>
      </div>
    </div>
  );
};

export default OrderPanel;