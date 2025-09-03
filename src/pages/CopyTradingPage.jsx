import React, { useState, useMemo } from 'react';
import { mockCopyTradingCards } from '../mock/copyTradingData';
import CopyTradingCard from '../components/copytrading/CopyTradingCard';
import CopyTradingDetailsModal from '../components/copytrading/CopyTradingDetailsModal';

const CopyTradingPage = () => {
  const [filterType, setFilterType] = useState('all'); // 'all', 'authors', 'algobots'
  const [sortOrder, setSortOrder] = useState('profitDesc'); // 'profitDesc', 'profitAsc', 'subscribersDesc', 'ratingDesc'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const filteredAndSortedCards = useMemo(() => {
    let filtered = mockCopyTradingCards;

    if (filterType === 'authors') {
      filtered = filtered.filter(card => !card.strategy.toLowerCase().includes('bot'));
    } else if (filterType === 'algobots') {
      filtered = filtered.filter(card => card.strategy.toLowerCase().includes('bot'));
    }

    return filtered.sort((a, b) => {
      switch (sortOrder) {
        case 'profitDesc':
          return b.profit - a.profit;
        case 'profitAsc':
          return a.profit - b.profit;
        case 'subscribersDesc':
          return b.subscribers - a.subscribers;
        case 'ratingDesc':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }, [filterType, sortOrder]);

  const handleDetailsClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleConnectClick = (card) => {
    alert(`Подключение к ${card.author} (${card.strategy})`);
    // In a real app, this would initiate the copy-trading process
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="container mx-auto pt-[46px] min-h-screen">
      <h1 className="text-2xl font-bold text-text mb-6">Копирование сделок</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Main Content Area */}
        <div className="lg:col-span-9">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <button 
                onClick={() => setFilterType('all')}
                className={`py-2 px-4 rounded-lg text-sm font-semibold ${filterType === 'all' ? 'bg-primary-cyan text-white' : 'bg-glass text-muted hover:bg-glass-strong'}`}>
                Все
              </button>
              <button 
                onClick={() => setFilterType('authors')}
                className={`py-2 px-4 rounded-lg text-sm font-semibold ${filterType === 'authors' ? 'bg-primary-cyan text-white' : 'bg-glass text-muted hover:bg-glass-strong'}`}>
                Авторы
              </button>
              <button 
                onClick={() => setFilterType('algobots')}
                className={`py-2 px-4 rounded-lg text-sm font-semibold ${filterType === 'algobots' ? 'bg-primary-cyan text-white' : 'bg-glass text-muted hover:bg-glass-strong'}`}>
                Алго-боты
              </button>
            </div>
            <select 
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value)}
              className="bg-glass p-2 rounded-lg text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary-cyan"
            >
              <option value="profitDesc">Прибыль (по убыванию)</option>
              <option value="profitAsc">Прибыль (по возрастанию)</option>
              <option value="subscribersDesc">Подписчики (по убыванию)</option>
              <option value="ratingDesc">Рейтинг (по убыванию)</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {filteredAndSortedCards.map(card => (
              <CopyTradingCard 
                key={card.id} 
                card={card} 
                onDetailsClick={handleDetailsClick}
                onConnectClick={handleConnectClick}
              />
            ))}
          </div>
        </div>

        {/* Filter and Sort Panel (Simplified for now, as main controls are above) */}
        <div className="lg:col-span-3">
          <div className="bg-surface border border-glass-strong rounded-xl p-4">
            <h2 className="text-xl font-bold text-text mb-4">Дополнительные фильтры</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-muted text-sm mb-2">Минимальная прибыль (%)</label>
                <input type="number" placeholder="0" className="w-full bg-card p-2 rounded-md text-text" />
              </div>
              <div>
                <label className="block text-muted text-sm mb-2">Минимальный рейтинг</label>
                <input type="number" placeholder="0" min="0" max="5" step="0.1" className="w-full bg-card p-2 rounded-md text-text" />
              </div>
              <div>
                <label className="block text-muted text-sm mb-2">Максимальный риск</label>
                <select className="w-full bg-card p-2 rounded-md text-text">
                  <option>Все</option>
                  <option>Низкий</option>
                  <option>Средний</option>
                  <option>Высокий</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyTradingDetailsModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        card={selectedCard} 
      />
    </div>
  );
};

export default CopyTradingPage;
