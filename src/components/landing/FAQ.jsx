import React from 'react';

const FAQItem = ({ question, children }) => {
  return (
    <div className="py-4 border-b border-glass-strong">
      <details>
        <summary className="font-semibold cursor-pointer text-text">{question}</summary>
        <div className="pt-2 text-muted text-sm">
          {children}
        </div>
      </details>
    </div>
  );
};

const FAQ = React.forwardRef((props, ref) => { return (
  <section ref={ref} className="py-20">
    <div className="container mx-auto w-[1240px]">
      <h2 className="text-3xl font-bold text-center mb-8">Часто задаваемые вопросы</h2>
      <div className="bg-surface p-6 rounded-lg">
          <FAQItem question="Что такое DexFlow?">
              <p>DexFlow - это децентрализованная биржа (DEX), которая позволяет пользователям торговать криптовалютами напрямую из своих кошельков без необходимости доверять свои средства третьей стороне.</p>
          </FAQItem>
          <FAQItem question="Какие кошельки поддерживаются?">
              <p>На данный момент мы поддерживаем основной кошелек DexSafe, а также предоставляем возможность подключения через WalletConnect к десяткам других популярных кошельков, включая MetaMask и Trust Wallet.</p>
          </FAQItem>
          <FAQItem question="Безопасно ли это?">
              <p>Да. Ваши средства всегда остаются в вашем кошельке. Вы лишь подписываете транзакции, давая разрешение на конкретные операции. Это намного безопаснее, чем хранить активы на централизованных биржах.</p>
          </FAQItem>
      </div>
    </div>
  </section>
); });

export default FAQ;
