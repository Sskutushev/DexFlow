import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Компонент Header для навигации по приложению
const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 border-b border-glass-strong">
          <Link to="/" className="text-2xl font-bold text-text">
            Dex<span className="bg-accent-gradient bg-clip-text text-transparent">Flow</span>
          </Link>
          <div className="flex items-center space-x-4">
            <NavLink to="/exchange" className={({ isActive }) => 
              `text-sm font-medium ${isActive ? 'text-text' : 'text-muted hover:text-text'}`
            }>
              Биржа
            </NavLink>
            <button className="bg-accent-gradient text-white text-sm font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
              Подключить кошелёк
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;