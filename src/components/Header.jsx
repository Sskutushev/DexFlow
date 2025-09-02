import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import WalletPanel from './WalletPanel';

const navigation = [
  { name: 'Обмен', href: '/app' },
  { name: 'Пулы', href: '/app/pools' },
  { name: 'Ордера', href: '/app/orders' },
];

function Header() {
  return (
    <header className="bg-dark-surface/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 text-white font-bold text-xl">
              Dex<span className="text-brand-primary">Flow</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    end={item.href === '/app'} // `end` prop for the root app link
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium ${
                        isActive
                          ? 'bg-dark-900 text-white'
                          : 'text-text-secondary hover:bg-dark-700 hover:text-white'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <WalletPanel />
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
