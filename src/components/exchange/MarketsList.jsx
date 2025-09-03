import React, { useState } from 'react';
import { getMarketPairs } from '../../services/mock-api';

const MarketsList = ({ onSelectPair }) => {
  const pairs = getMarketPairs();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-surface rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col h-auto lg:h-full">
      {/* Desktop Title */}
      <h2 className="text-lg font-bold mb-4 hidden lg:block">Торговые пары</h2>

      {/* Mobile Dropdown Button */}
      <button 
        onClick={toggleDropdown}
        className="lg:hidden w-full flex justify-between items-center p-2 rounded-md bg-glass hover:bg-glass-strong transition-colors mb-4"
      >
        <span className="font-bold text-lg">Торговые пары</span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Desktop List */}
      <div className="space-y-2 flex-grow overflow-y-auto custom-scrollbar pr-2 max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[700px] hidden lg:block">
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

      {/* Mobile Dropdown List */}
      {isDropdownOpen && (
        <div className="space-y-2 overflow-y-auto custom-scrollbar pr-2 max-h-[250px] lg:hidden">
          {pairs.map((pair) => (
            <div 
              key={pair.id} 
              className="flex justify-between items-center p-2 rounded-md hover:bg-glass-strong cursor-pointer"
              onClick={() => {
                onSelectPair(pair.id);
                setIsDropdownOpen(false); // Close dropdown on selection
              }}
            >
              <span className="font-medium text-sm">{pair.name}</span>
              <span className={`text-sm font-mono ${pair.change24h > 0 ? 'text-success' : 'text-danger'}`}>
                {pair.price}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarketsList;