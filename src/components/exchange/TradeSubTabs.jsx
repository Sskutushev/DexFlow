import React from 'react';

const tabs = [
  { id: 'swap', name: 'Свап' },
  { id: 'futures', name: 'Фьючерсы' },
  { id: 'options', name: 'Опционы' },
  { id: 'assets', name: 'Активы' },
];

const TradeSubTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="mb-4">
      <div className="flex space-x-2 bg-glass p-1 rounded-lg">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-4 text-sm font-semibold rounded-md transition-all duration-300 focus:outline-none
              ${
                activeTab === tab.id
                  ? 'text-white bg-accent-gradient dark:bg-accent-gradient shadow-md'
                  : 'text-muted hover:text-text bg-transparent'
              }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TradeSubTabs;
