import React from 'react';

const CopyTradingCard = ({ card, onDetailsClick, onConnectClick }) => {
  return (
    <div className="bg-surface border border-glass-strong rounded-xl p-4 flex flex-col">
      <div className="flex items-center mb-3">
        <img src={card.avatar} alt={card.author} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <h3 className="font-bold text-text text-lg">{card.author}</h3>
          <p className="text-muted text-xs">{card.strategy}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-3">
        <div className="text-center">
          <p className="text-success font-bold text-xl">+{card.profit}%</p>
          <p className="text-muted text-xs">Прибыль</p>
        </div>
        <div className="text-center">
          <p className="text-text font-bold text-xl">{card.subscribers}</p>
          <p className="text-muted text-xs">Подписчики</p>
        </div>
        <div className="text-center">
          <p className="text-text font-bold text-xl">{card.rating} ★</p>
          <p className="text-muted text-xs">Рейтинг</p>
        </div>
      </div>
      <p className="text-muted text-sm mb-4 line-clamp-3">{card.description}</p>
      <div className="flex space-x-2 mt-auto">
        <button 
          onClick={() => onDetailsClick(card)}
          className="flex-1 bg-glass text-text font-semibold py-2 px-4 rounded-lg hover:bg-glass-strong transition-colors"
        >
          Подробнее
        </button>
        <button 
          onClick={() => onConnectClick(card)}
          className="flex-1 bg-accent-gradient text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          Подключиться
        </button>
      </div>
    </div>
  );
};

export default CopyTradingCard;
