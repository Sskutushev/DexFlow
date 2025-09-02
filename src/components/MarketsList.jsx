import React from 'react';
import { getMarketPairs } from '../services/mock-api';

// Компонент для отображения списка рынков
const MarketsList = () => {
  const pairs = getMarketPairs();

  return (
    <div className="bg-surface rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">Рынки</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-muted uppercase">
            <tr>
              <th scope="col" className="py-3 px-6">Пара</th>
              <th scope="col" className="py-3 px-6 text-right">Цена</th>
              <th scope="col" className="py-3 px-6 text-right">24ч Изм.</th>
            </tr>
          </thead>
          <tbody>
            {pairs.map((pair) => (
              <tr key={pair.id} className="hover:bg-glass-strong cursor-pointer">
                <td className="py-4 px-6 font-medium text-text">{pair.name}</td>
                <td className="py-4 px-6 text-right font-mono">${pair.price}</td>
                <td className={`py-4 px-6 text-right font-mono ${pair.change24h > 0 ? 'text-success' : 'text-danger'}`}>
                  {pair.change24h > 0 ? '+' : ''}{pair.change24h}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketsList;
