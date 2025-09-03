import React from 'react';
import { Link } from 'react-router-dom';
import ConnectWalletModal from '../common/ConnectWalletModal';

const Hero = React.forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section ref={ref} className="py-20 sm:py-32 mt-10 min-h-screen mb-[-50px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-x-8 px-4">
        <div className="text-center lg:text-left lg:ml-16 xl:ml-32">
          <h1 className="text-4xl mobile:text-5xl sm:text-6xl font-extrabold text-text max-w-4xl">
            Будущее децентрализованных финансов. <span className="bg-accent-gradient bg-clip-text text-transparent">Уже здесь.</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mt-6 mx-auto lg:mx-0">
            DexFlow — это сверхбыстрая и безопасная DEX. Торгуйте, общайтесь и инвестируйте без посредников на рынке РФ и СНГ.
          </p>
          <button 
            className="mt-10 bg-accent-gradient text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-opacity"
            onClick={() => setIsModalOpen(true)}
          >
            Начать торговать
          </button>
        </div>
        <div className="flex-shrink-0 mt-12 lg:mt-0">
          <img src={import.meta.env.BASE_URL + "Frame 6850.svg"} alt="Hero Illustration" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" />
        </div>
      </div>
      <ConnectWalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
});

export default Hero;
