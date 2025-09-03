import React from 'react';

const NewFeaturesSection = () => {
  return (
    <section className="py-20 rounded-xl shadow-lg">
      <div className="container mx-auto w-[1240px] px-4 text-center">
        <h2 className="text-3xl font-bold text-text mb-10">Расширьте свои торговые возможности с DexFlow</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-card rounded-lg border border-glass-strong">
            <h3 className="text-xl font-bold text-text mb-3">Фьючерсы</h3>
            <p className="text-muted text-sm">Торгуйте с кредитным плечом, открывайте длинные и короткие позиции на широкий спектр активов.</p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-glass-strong">
            <h3 className="text-xl font-bold text-text mb-3">Опционы</h3>
            <p className="text-muted text-sm">Используйте опционы для хеджирования рисков или спекуляций на будущих ценах активов.</p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-glass-strong">
            <h3 className="text-xl font-bold text-text mb-3">Токенизированные активы</h3>
            <p className="text-muted text-sm">Получите доступ к традиционным активам (акциям, облигациям, сырью) в децентрализованном формате.</p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-glass-strong">
            <h3 className="text-xl font-bold text-text mb-3">Копитрейдинг</h3>
            <p className="text-muted text-sm">Автоматически копируйте сделки успешных трейдеров и алго-ботов, диверсифицируя свой портфель.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFeaturesSection;
