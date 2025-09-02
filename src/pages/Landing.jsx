import React from 'react';
import { Link } from 'react-router-dom';

// Данные для секций (можно вынести в отдельный JSON)
const features = [
  { title: 'Мгновенный обмен', description: 'Обменивайте криптовалюты с минимальными комиссиями и проскальзыванием.' },
  { title: 'Высокая ликвидность', description: 'Добавляйте свои активы в пулы и получайте пассивный доход.' },
  { title: 'Безопасность DexNet', description: 'Все операции защищены вашим кошельком DexSAFE.' },
];

const howItWorks = [
    { step: '1', title: 'Подключите кошелёк', description: 'Нажмите кнопку "Подключить" и авторизуйтесь через DexSAFE.' },
    { step: '2', title: 'Выберите пару', description: 'Найдите нужную торговую пару для обмена или вложения в пул.' },
    { step: '3', title: 'Совершите операцию', description: 'Подпишите транзакцию в кошельке для завершения обмена.' },
];

function Landing() {
  return (
    <div className="space-y-24 mb-24">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">DexFlow: Торговля без границ</h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-8">
          Децентрализованная биржа нового поколения в экосистеме DexNet. Быстро, безопасно, анонимно.
        </p>
        <Link
          to="/app"
          className="bg-brand-primary hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
        >
          Начать торговать
        </Link>
      </section>

      {/* Key Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-12">Ключевые преимущества</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-dark-surface p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* How it Works Section */}
      <section>
          <h2 className="text-3xl font-bold text-center mb-12">Как это работает?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
              {howItWorks.map((item) => (
                  <div key={item.step} className="relative">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark-panel w-16 h-16 rounded-full flex items-center justify-center text-brand-primary font-bold text-2xl">{item.step}</div>
                      <div className="bg-dark-surface p-6 rounded-lg pt-12">
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-text-secondary">{item.description}</p>
                      </div>
                  </div>
              ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hero-gradient p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-lg text-white/90 mb-8">Присоединяйтесь к будущему финансов уже сегодня.</p>
          <Link
              to="/app"
              className="bg-white text-brand-primary font-bold py-3 px-8 rounded-lg transition-colors text-lg"
          >
              Перейти к обмену
          </a >
      </section>
    </div>
  );
}

export default Landing;
