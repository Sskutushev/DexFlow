import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from '../common/ThemeSwitcher';

const LandingHeader = ({ onWalletConnect }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-text">
            Dex<span className="bg-accent-gradient bg-clip-text text-transparent">Flow</span>
          </Link>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <button 
              onClick={onWalletConnect}
              className="bg-accent-gradient text-white text-sm font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
            >
              Подключить кошелёк
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
