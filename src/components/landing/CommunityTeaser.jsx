import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConnectWalletModal from '../common/ConnectWalletModal';

const CommunityTeaser = React.forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section ref={ref} className="h-[600px]">
      <div className="container mx-auto w-[1240px] flex items-center justify-between h-full">
        {/* Left Container: Image */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <img src="/img/Frame 6852.svg" alt="Community" className="max-w-full max-h-full object-contain" />
        </div>

        {/* Right Container: Text and Button */}
        <div className="w-1/2 text-left pl-10">
          <h2 className="text-3xl font-bold mb-4">Присоединяйтесь к сообществу</h2>
          <p className="text-muted mt-4 mb-8">
            Присоединяйтесь к нашему динамичному сообществу DexFlow, где вы сможете обсуждать последние рыночные тренды, обмениваться ценной аналитикой и следить за стратегиями ведущих трейдеров. Наша социальная лента — это идеальное место для взаимодействия, обучения и развития в мире децентрализованных финансов. Станьте частью нашей растущей экосистемы и откройте для себя новые возможности для роста и сотрудничества.
          </p>
          <button 
            className="mt-8 bg-accent-gradient text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            onClick={() => setIsModalOpen(true)}
          >
            Перейти на платформу
          </button>
        </div>
      </div>
      <ConnectWalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
});

export default CommunityTeaser;