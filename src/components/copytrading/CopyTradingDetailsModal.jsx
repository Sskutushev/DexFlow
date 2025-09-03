import React, { useState } from 'react';

const CopyTradingDetailsModal = ({ isOpen, onClose, card }) => {
  const [activeTab, setActiveTab] = useState('general');

  if (!isOpen || !card) return null;

  // Simple SVG Line Chart for Performance
  const PerformanceChart = ({ data }) => {
    if (!data || data.length === 0) return <p className="text-muted text-center">Нет данных для графика.</p>;

    const values = data.map(d => d.value);
    const maxVal = Math.max(...values);
    const minVal = Math.min(...values);
    const range = maxVal - minVal;

    const width = 400;
    const height = 200;
    const padding = 20;

    const points = data.map((d, i) => {
      const x = (i / (data.length - 1)) * (width - 2 * padding) + padding;
      const y = height - padding - ((d.value - minVal) / range) * (height - 2 * padding);
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        <polyline fill="none" stroke="var(--primary-cyan)" strokeWidth="2" points={points} />
        {/* X-axis labels */}
        {data.map((d, i) => (
          <text key={i} x={(i / (data.length - 1)) * (width - 2 * padding) + padding} y={height - padding + 15} textAnchor="middle" fontSize="10" fill="var(--muted)">
            {d.month}
          </text>
        ))}
        {/* Y-axis labels */}
        <text x={padding - 10} y={height - padding} textAnchor="end" alignmentBaseline="middle" fontSize="10" fill="var(--muted)">{minVal}%</text>
        <text x={padding - 10} y={padding} textAnchor="end" alignmentBaseline="middle" fontSize="10" fill="var(--muted)">{maxVal}%</text>
      </svg>
    );
  };

  const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-xl ${i <= rating ? 'text-yellow-400' : 'text-gray-400'}`}>
          ★
        </span>
      );
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-surface rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4 border-b border-glass-strong pb-4">
          <h2 className="text-2xl font-bold text-text">{card.author} - {card.strategy}</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-glass-strong transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-glass-strong mb-4">
          <button 
            onClick={() => setActiveTab('general')}
            className={`flex-1 py-2 text-sm font-semibold ${activeTab === 'general' ? 'text-text border-b-2 border-primary-cyan' : 'text-muted hover:text-text'}`}>
            Общая информация
          </button>
          <button 
            onClick={() => setActiveTab('performance')}
            className={`flex-1 py-2 text-sm font-semibold ${activeTab === 'performance' ? 'text-text border-b-2 border-primary-cyan' : 'text-muted hover:text-text'}`}>
            Результат
          </button>
          <button 
            onClick={() => setActiveTab('reviews')}
            className={`flex-1 py-2 text-sm font-semibold ${activeTab === 'reviews' ? 'text-text border-b-2 border-primary-cyan' : 'text-muted hover:text-text'}`}>
            Отзывы
          </button>
        </div>

        {/* Tab Content */}
        <div className="py-4">
          {activeTab === 'general' && (
            <div>
              <p className="text-text text-sm mb-4">{card.description}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p className="text-muted">Прибыль:</p><p className="text-text font-semibold">+{card.profit}%</p>
                <p className="text-muted">Риск:</p><p className="text-text font-semibold">{card.risk}</p>
                <p className="text-muted">Подписчики:</p><p className="text-text font-semibold">{card.subscribers}</p>
                <p className="text-muted">Рейтинг:</p><div className="flex items-center"><StarRating rating={card.rating} /> <span className="ml-2 text-text">({card.rating})</span></div>
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div>
              <h3 className="font-bold text-text mb-4">График доходности (% к счету)</h3>
              <PerformanceChart data={card.performance} />
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <h3 className="font-bold text-text mb-4">Отзывы пользователей</h3>
              {card.reviews && card.reviews.length > 0 ? (
                <div className="space-y-4">
                  {card.reviews.map(review => (
                    <div key={review.id} className="bg-card p-3 rounded-lg border border-glass-strong">
                      <div className="flex justify-between items-center mb-2">
                        <p className="font-semibold text-text">{review.author}</p>
                        <StarRating rating={review.rating} />
                      </div>
                      <p className="text-muted text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted text-center">Пока нет отзывов.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CopyTradingDetailsModal;
