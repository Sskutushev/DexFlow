import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import ProfileDropdown from '../profile/ProfileDropdown';
import Notifications from './Notifications';

const Header = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  const profileRef = useRef(null);
  const notificationsRef = useRef(null);

  // Mock logged-in state
  const isLoggedIn = true; 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleProfile = () => {
    setProfileOpen(!isProfileOpen);
    setNotificationsOpen(false); // Close notifications if profile is opened
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!isNotificationsOpen);
    setProfileOpen(false); // Close profile if notifications is opened
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 border-b border-glass-strong">
          <div className="text-2xl font-bold text-text cursor-default">
            Dex<span className="bg-accent-gradient bg-clip-text text-transparent">Flow</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/exchange" className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-text' : 'text-muted hover:text-text'}`}>Торговать</NavLink>
            <NavLink to="/feed" className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-text' : 'text-muted hover:text-text'}`}>Лента</NavLink>
            <NavLink to="/help" className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-text' : 'text-muted hover:text-text'}`}>Помощь</NavLink>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <ThemeSwitcher />
            {isLoggedIn && (
              <div className="relative" ref={notificationsRef}>
                <button onClick={toggleNotifications} className="p-2 rounded-full bg-glass hover:bg-glass-strong transition-colors">
                  {/* Notification Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                <Notifications isOpen={isNotificationsOpen} onClose={() => setNotificationsOpen(false)} />
              </div>
            )}
            {isLoggedIn ? (
              <div className="relative" ref={profileRef}>
                <button onClick={toggleProfile} className="flex items-center space-x-2 bg-glass p-1 pr-3 rounded-full">
                  <img src="/Avatar 5.svg" alt="User Avatar" className="w-8 h-8 rounded-full" />
                  <span className="text-xs font-mono">ID: 123456</span>
                </button>
                <ProfileDropdown isVisible={isProfileOpen} />
              </div>
            ) : (
              <button className="bg-primary-cyan/10 text-primary-cyan text-sm font-semibold py-2 px-4 rounded-lg hover:bg-primary-cyan/20 transition-colors">
                Подключить кошелёк
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
