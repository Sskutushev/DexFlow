import React from 'react';

// Карточка для отображения ключевых преимуществ
const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-glass-strong border border-glass rounded-xl p-6 text-center backdrop-blur-lg">
    <img src={icon} alt={`${title} icon`} className="h-10 w-10 mx-auto mb-4" />
    <h3 className="text-xl font-bold text-text mb-2">{title}</h3>
    <p className="text-muted text-sm">{children}</p>
  </div>
);

// Секция с ключевыми преимуществами
const KeyFeatures = () => {
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard icon="/assets/icons/ic-shield.svg" title="Безопасность превыше всего">
          Все операции защищены вашим кошельком DexSAFE. Полный контроль над активами, без компромиссов.
        </FeatureCard>
        <FeatureCard icon="/assets/icons/ic-chart.svg" title="Анализируйте рынок">
          Используйте встроенные инструменты для анализа и принимайте взвешенные торговые решения.
        </FeatureCard>
        <FeatureCard icon="/assets/icons/ic-swap.svg" title="Мгновенный обмен">
          Лучшие курсы обмена благодаря агрегации ликвидности из нескольких источников.
        </FeatureCard>
      </div>
    </section>
  );
};

export default KeyFeatures;
