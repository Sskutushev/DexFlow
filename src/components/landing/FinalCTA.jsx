import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConnectWalletModal from '../common/ConnectWalletModal';

const FinalCTA = React.forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
  <section ref={ref} className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Container: Text and Button */}
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Торговля криптоактивами доступная каждому</h2>
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
        <div className="flex-shrink-0 mt-12 lg:mt-0">
          <img src={import.meta.env.BASE_URL + "img/Frame 6851.svg"} alt="Crypto Trading" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" />
        </div>
      </div>
      <ConnectWalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
});

export default FinalCTA;
