import React, { useState } from 'react';
import Slider from '../common/Slider';

const FuturesOrderPanel = ({ pair, isLoggedIn }) => {
  const [side, setSide] = useState('long'); // 'long' or 'short'
  const [orderType, setOrderType] = useState('limit'); // 'limit' or 'market'
  const [leverage, setLeverage] = useState(10);

  if (!isLoggedIn) {
    return (
      <div className="h-full bg-surface border border-glass-strong rounded-xl p-4 flex flex-col items-center justify-center">
        <p className="text-muted mb-4">Пожалуйста, войдите, чтобы торговать фьючерсами.</p>
        <button className="bg-accent-gradient text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
          Войти
        </button>
      </div>
    );
  }

  return (
    <div className="h-full bg-surface border border-glass-strong rounded-xl p-4 flex flex-col text-sm">
      {/* Side (Long/Short) Toggle */}
      <div className="grid grid-cols-2 gap-1 bg-glass p-1 rounded-lg mb-4">
        <button 
          onClick={() => setSide('long')}
          className={`py-2 rounded-md font-semibold transition-colors ${side === 'long' ? 'bg-success/80 text-white' : 'text-muted hover:bg-success/20'}`}>
          Long
        </button>
        <button 
          onClick={() => setSide('short')}
          className={`py-2 rounded-md font-semibold transition-colors ${side === 'short' ? 'bg-danger/80 text-white' : 'text-muted hover:bg-danger/20'}`}>
          Short
        </button>
      </div>

      {/* Order Type Toggle */}
      <div className="flex items-center space-x-4 mb-4">
        <button onClick={() => setOrderType('limit')} className={`text-xs ${orderType === 'limit' ? 'text-text font-bold' : 'text-muted'}`}>Лимит</button>
        <button onClick={() => setOrderType('market')} className={`text-xs ${orderType === 'market' ? 'text-text font-bold' : 'text-muted'}`}>Маркет</button>
      </div>

      {/* Inputs */}
      <div className="space-y-3">
        {orderType === 'limit' && (
          <div>
            <label className="text-xs text-muted">Цена ({pair.split('/')[1]})</label>
            <input type="text" className="w-full bg-card p-2 rounded-md mt-1 text-text" placeholder="0.00" />
          </div>
        )}
        <div>
          <label className="text-xs text-muted">Сумма ({pair.split('/')[0]})</label>
          <input type="text" className="w-full bg-card p-2 rounded-md mt-1 text-text" placeholder="0.00" />
        </div>
      </div>

      {/* Leverage Slider */}
      <div className="mt-4">
        <label className="text-xs text-muted mb-2 block">Кредитное плечо</label>
        <Slider value={leverage} setValue={setLeverage} />
      </div>

      {/* Info Section */}
      <div className="mt-4 pt-4 border-t border-glass-strong space-y-2 text-xs text-muted">
        <div className="flex justify-between">
          <span>Стоимость</span>
          <span>0.00 USDT</span>
        </div>
        <div className="flex justify-between">
          <span>Залог</span>
          <span>0.00 USDT</span>
        </div>
        <div className="flex justify-between">
          <span>Комиссия</span>
          <span>0.00 USDT</span>
        </div>
      </div>

      <div className="mt-auto">
        <button className={`w-full py-3 rounded-lg font-bold text-white transition-opacity hover:opacity-90 ${side === 'long' ? 'bg-success' : 'bg-danger'}`}>
          {side === 'long' ? 'Открыть Long' : 'Открыть Short'}
        </button>
      </div>
    </div>
  );
};

export default FuturesOrderPanel;
