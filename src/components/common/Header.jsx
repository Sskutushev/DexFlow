import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 border-b border-glass-strong">
          <Link to="/" className="text-2xl font-bold text-text">
            Dex<span className="bg-accent-gradient bg-clip-text text-transparent">Flow</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/exchange" className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-text' : 'text-muted hover:text-text'}`}>Биржа</NavLink>
            <NavLink to="/feed" className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-text' : 'text-muted hover:text-text'}`}>Лента</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
            <button className="bg-primary-cyan/10 text-primary-cyan text-sm font-semibold py-2 px-4 rounded-lg hover:bg-primary-cyan/20 transition-colors">
              Подключить кошелёк
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
