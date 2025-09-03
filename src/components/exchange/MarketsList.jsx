import React from 'react';
import { getMarketPairs } from '../../services/mock-api';

const MarketsList = ({ onSelectPair }) => {
  const pairs = getMarketPairs();

  return (
    <div className="bg-surface rounded-lg p-4 flex flex-col h-full">
      <h2 className="text-lg font-bold mb-4">Рынки</h2>
      <div className="space-y-2 flex-grow overflow-y-auto custom-scrollbar pr-2 max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[700px]">
        {pairs.map((pair) => (
          <div 
            key={pair.id} 
            className="flex justify-between items-center p-2 rounded-md hover:bg-glass-strong cursor-pointer"
            onClick={() => onSelectPair(pair.id)}
          >
            <span className="font-medium text-sm">{pair.name}</span>
            <span className={`text-sm font-mono ${pair.change24h > 0 ? 'text-success' : 'text-danger'}`}>
              {pair.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketsList;
