import React, { useState } from 'react';
import { mockFuturesPairs } from '../../mock/futuresData';

const FuturesMarketsList = ({ onSelectPair }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPairs = mockFuturesPairs.filter(pair =>
    pair.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full bg-surface border border-glass-strong rounded-xl flex flex-col">
      <div className="p-4 border-b border-glass-strong">
        <input
          type="text"
          placeholder="Поиск..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full bg-card p-2 rounded-md text-sm text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary-cyan"
        />
      </div>
      <div className="flex-grow overflow-y-auto custom-scrollbar">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-muted">
              <th className="p-2 font-normal">Пара</th>
              <th className="p-2 font-normal text-right">Цена</th>
              <th className="p-2 font-normal text-right">Изм.</th>
            </tr>
          </thead>
          <tbody>
            {filteredPairs.map(pair => (
              <tr key={pair.id} onClick={() => onSelectPair(pair.name)} className="cursor-pointer hover:bg-glass-strong">
                <td className="p-2 font-semibold">{pair.name}</td>
                <td className="p-2 text-right">{pair.price}</td>
                <td className={`p-2 text-right font-semibold ${pair.change24h >= 0 ? 'text-success' : 'text-danger'}`}>
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

export default FuturesMarketsList;
