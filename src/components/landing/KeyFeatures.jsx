import React from 'react';

const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-surface border border-glass rounded-xl p-6 text-center backdrop-blur-lg">
    <img src={icon} alt={`${title} icon`} className="h-10 w-10 mx-auto mb-4" />
    <h3 className="text-xl font-bold text-text mb-2">{title}</h3>
    <p className="text-muted text-sm">{children}</p>
  </div>
);

const KeyFeatures = () => (
  <section className="py-20">
    <div className="container mx-auto w-[1240px]">
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard icon={import.meta.env.BASE_URL + "assets/icons/ic-shield.svg"} title="Безопасность превыше всего">
          Полный контроль над вашими активами. Все операции подтверждаются только в вашем кошельке.
        </FeatureCard>
        <FeatureCard icon={import.meta.env.BASE_URL + "assets/icons/ic-swap.svg"} title="Мгновенный обмен">
          Лучшие курсы обмена благодаря агрегации ликвидности из нескольких источников.
        </FeatureCard>
        <FeatureCard icon={import.meta.env.BASE_URL + "assets/icons/ic-chart.svg"} title="Анализируйте рынок">
          Используйте встроенные инструменты для анализа и принимайте взвешенные торговые решения.
        </FeatureCard>
      </div>
    </div>
  </section>
);

export default KeyFeatures;
