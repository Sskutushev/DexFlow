import React, { useState } from 'react';

const OptionsOrderPanel = ({ pair, isLoggedIn }) => {
  const [side, setSide] = useState('buy'); // 'buy' or 'sell'
  const [orderType, setOrderType] = useState('market'); // 'market' or 'limit'
  const [strikePrice, setStrikePrice] = useState('');
  const [expiration, setExpiration] = useState('2024-09-29');

  if (!isLoggedIn) {
    return (
      <div className="h-full bg-surface border border-glass-strong rounded-xl p-4 flex flex-col items-center justify-center">
        <p className="text-muted mb-4">Пожалуйста, войдите, чтобы торговать опционами.</p>
        <button className="bg-accent-gradient text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
          Войти
        </button>
      </div>
    );
  }

  return (
    <div className="h-full bg-surface border border-glass-strong rounded-xl p-4 flex flex-col text-sm">
      {/* Side (Buy/Sell) Toggle */}
      <div className="grid grid-cols-2 gap-1 bg-glass p-1 rounded-lg mb-4">
        <button 
          onClick={() => setSide('buy')}
          className={`py-2 rounded-md font-semibold transition-colors ${side === 'buy' ? 'bg-success/80 text-white' : 'text-muted hover:bg-success/20'}`}>
          Купить
        </button>
        <button 
          onClick={() => setSide('sell')}
          className={`py-2 rounded-md font-semibold transition-colors ${side === 'sell' ? 'bg-danger/80 text-white' : 'text-muted hover:bg-danger/20'}`}>
          Продать
        </button>
      </div>

      {/* Order Type Toggle */}
      <div className="flex items-center space-x-4 mb-4">
        <button onClick={() => setOrderType('market')} className={`text-xs ${orderType === 'market' ? 'text-text font-bold' : 'text-muted'}`}>Маркет</button>
        <button onClick={() => setOrderType('limit')} className={`text-xs ${orderType === 'limit' ? 'text-text font-bold' : 'text-muted'}`}>Лимит</button>
      </div>

      {/* Inputs */}
      <div className="space-y-3">
        {orderType === 'limit' && (
          <div>
            <label className="text-xs text-muted">Цена ({pair.split('/')[1] || 'USDT'})</label>
            <input type="text" className="w-full bg-card p-2 rounded-md mt-1 text-text" placeholder="0.00" />
          </div>
        )}
        <div>
          <label className="text-xs text-muted">Количество</label>
          <input type="text" className="w-full bg-card p-2 rounded-md mt-1 text-text" placeholder="0.00" />
        </div>
        <div>
          <label className="text-xs text-muted">Страйк-цена</label>
          <input type="text" value={strikePrice} onChange={e => setStrikePrice(e.target.value)} className="w-full bg-card p-2 rounded-md mt-1 text-text" placeholder="0.00" />
        </div>
        <div>
          <label className="text-xs text-muted">Дата экспирации</label>
          <input type="date" value={expiration} onChange={e => setExpiration(e.target.value)} className="w-full bg-card p-2 rounded-md mt-1 text-text" />
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-4 pt-4 border-t border-glass-strong space-y-2 text-xs text-muted">
        <div className="flex justify-between">
          <span>Стоимость</span>
          <span>0.00 USDT</span>
        </div>
        <div className="flex justify-between">
          <span>Комиссия</span>
          <span>0.00 USDT</span>
        </div>
      </div>

      <div className="mt-auto">
        <button className={`w-full py-3 rounded-lg font-bold text-white transition-opacity hover:opacity-90 ${side === 'buy' ? 'bg-success' : 'bg-danger'}`}>
          {side === 'buy' ? 'Купить Опцион' : 'Продать Опцион'}
        </button>
      </div>
    </div>
  );
};

export default OptionsOrderPanel;
