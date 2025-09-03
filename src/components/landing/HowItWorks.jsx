import React from 'react';

const Step = ({ number, title, children }) => (
  <div className="relative pl-12">
    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-accent-gradient flex items-center justify-center font-bold text-white">{number}</div>
    <h3 className="font-bold text-lg mb-1 text-text">{title}</h3>
    <p className="text-muted text-sm">{children}</p>
  </div>
);

const HowItWorks = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-20 sm:py-32 mb-[-350px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-text">Начать просто</h2>
        <div className="grid md:grid-cols-3 gap-12 text-left max-w-5xl mx-auto relative z-10">
          <Step number="1" title="Подключите кошелёк">
            Нажмите на кнопку подключения и выберите ваш любимый кошелёк. Никаких регистраций и личных данных.
          </Step>
          <Step number="2" title="Выберите актив">
            Найдите нужную торговую пару для обмена или вложения в пул ликвидности.
          </Step>
          <Step number="3" title="Совершите операцию">
            Подпишите транзакцию в кошельке для завершения обмена. Всегда безопасно и под вашим контролем.
          </Step>
        </div>
      </div>
    </section>
  );
});

export default HowItWorks;