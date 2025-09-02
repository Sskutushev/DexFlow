import React from 'react';

const NewsAndUpdates = () => {
  return (
    <div className="bg-surface p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-text">Новости и обновления</h2>
      <div className="space-y-6">
        <div className="border-b border-glass-strong pb-4">
          <h3 className="text-xl font-semibold text-text">Обновление платформы v1.2</h3>
          <p className="text-sm text-muted mt-1">1 сентября 2025 г.</p>
          <p className="text-text mt-2">Мы рады представить новые функции, включая улучшенный торговый терминал и новые пары для обмена.</p>
        </div>
        <div className="border-b border-glass-strong pb-4">
          <h3 className="text-xl font-semibold text-text">Технические работы</h3>
          <p className="text-sm text-muted mt-1">28 августа 2025 г.</p>
          <p className="text-text mt-2">На платформе проводились плановые технические работы. Все системы функционируют в штатном режиме.</p>
        </div>
      </div>
    </div>
  );
};

export default NewsAndUpdates;
