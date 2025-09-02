import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConnectWalletModal from '../common/ConnectWalletModal';

const FinalCTA = React.forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
  <section ref={ref} className="py-20">
      <div className="container mx-auto w-[1240px] flex items-center justify-between">
        {/* Left Container: Text and Button */}
        <div className="text-left max-w-xl">
          <h2 className="text-4xl font-bold mb-6">Торговля криптоактивами доступная каждому</h2>
          <p className="text-muted mb-8">
            Начните свой путь в мире децентрализованных финансов с DexFlow. Наша платформа предлагает безопасную и простую торговлю криптоактивами, лучшие условия и круглосуточную поддержку. Присоединяйтесь к сообществу и откройте новые возможности.
          </p>
          <button 
            className="bg-accent-gradient text-white font-semibold py-4 px-10 rounded-full text-lg shadow-lg hover:opacity-90 transition-opacity"
            onClick={() => setIsModalOpen(true)}
          >
            Начать торговать
          </button>
        </div>

        {/* Right Container: Image */}
        <div className="flex-shrink-0">
          <img src="/img/Frame 6851.svg" alt="Crypto Trading" className="w-[540px] h-[540px]" />
        </div>
      </div>
      <ConnectWalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
});

export default FinalCTA;
