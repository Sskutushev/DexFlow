import React from 'react';

const BenefitCard = ({ icon, title, text }) => (
  <div className="bg-surface border border-glass rounded-xl p-6 flex flex-col items-start text-left
              hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"> {/* Added hover effects */}
    <div className="p-3 rounded-full bg-accent-gradient mb-6"> {/* Added background to icon */}
      <img src={icon} alt={`${title} icon`} className="w-10 h-10 mb-6" />
    </div>
    <h3 className="text-xl font-bold text-text mb-4">{title}</h3>
    <p className="text-muted text-sm">{text}</p>
  </div>
);

const BenefitsSection = React.forwardRef((props, ref) => { return (
  <section ref={ref} className="py-20">
    <div className="container mx-auto w-[1240px] px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Лучшие условия для пользователей</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <BenefitCard
          icon="assets/icons/ic-shield.svg"
          title="Безопасность и надежность"
          text="Твои данные и средства всегда будут под защитой. Мы работаем над внедрением передовых технологий безопасности"
        />
        <BenefitCard
          icon="assets/icons/ic-swap.svg"
          title="Простота использования"
          text="Интуитивно понятный интерфейс и простота позволят быстро разобраться в инвестициях любому"
        />
        <BenefitCard
          icon="assets/icons/ic-wallet.svg" // Placeholder
          title="Поддержка 24/7"
          text="Наши специалисты работают круглосуточно, чтобы помочь тебе в любой момент."
        />
        <BenefitCard
          icon="assets/icons/ic-chart.svg"
          title="Широкий ассортимент"
          text="Механика маркетплейса позволит привлечь массу талантливых трейдеров с различными стратегиями"
        />
        <BenefitCard
          icon="assets/icons/ic-dexsafe.svg" // Placeholder
          title="Международная лицензия и разрешения"
          text="Наши продукты соответствуют всем международным стандартам безопасности"
        />
        <BenefitCard
          icon="assets/icons/ic-arrow-down.svg" // Placeholder
          title="Центр помощи"
          text="Мы подготовили подробные статьи, которые помогут создавать лучшие версии твоих продуктов"
        />
      </div>
    </div>
  </section>
); });

export default BenefitsSection;