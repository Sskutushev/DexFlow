import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import ProfileDropdown from '../profile/ProfileDropdown';
import Notifications from './Notifications';
import PlatformLanguageSwitcher from './PlatformLanguageSwitcher';

const Header = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // New state for mobile menu

  const profileRef = useRef(null);
  const notificationsRef = useRef(null);
  const mobileMenuRef = useRef(null); // Ref for mobile menu

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
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
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
    setMobileMenuOpen(false); // Close mobile menu if profile is opened
  };

  const toggleNotifications = () => {
    setNotificationsOpen(!isNotificationsOpen);
    setProfileOpen(false); // Close profile if notifications is opened
    setMobileMenuOpen(false); // Close mobile menu if notifications is opened
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setProfileOpen(false);
    setNotificationsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 border-b border-glass-strong">
          {/* Left side: Logo */}
          <NavLink to="/home" className="text-2xl font-bold text-text cursor-pointer break-words">
            Dex<span className="bg-accent-gradient bg-clip-text text-transparent">Flow</span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/exchange" className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-text' : 'text-muted hover:text-text'}`}>Торговать</NavLink>
            <NavLink to="/feed" className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-text' : 'text-muted hover:text-text'}`}>Лента</NavLink>
            <NavLink to="/help" className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-text' : 'text-muted hover:text-text'}`}>Помощь</NavLink>
            <NavLink to="/copy-trading" className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-text' : 'text-muted hover:text-text'}`}>Копирование сделок</NavLink>
          </nav>

          {/* Right side: Desktop Icons and Profile (always visible) */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden md:block">
              <ThemeSwitcher />
            </div>
            {isLoggedIn && (
              <div className="relative hidden md:block" ref={notificationsRef}>
                <button onClick={toggleNotifications} className="p-2 rounded-full bg-glass hover:bg-glass-strong transition-colors">
                  {/* Notification Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                <Notifications isOpen={isNotificationsOpen} onClose={() => setNotificationsOpen(false)} />
              </div>
            )}
            {/* Mobile Burger Menu Button */}
            <div className="md:hidden mr-[7px]">
              <button onClick={toggleMobileMenu} className="p-2 rounded-full bg-glass hover:bg-glass-strong transition-colors">
                {/* Burger Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            {isLoggedIn ? (
              <div className="relative" ref={profileRef}>
                <button onClick={toggleProfile} className="flex items-center space-x-2 bg-glass p-1 pr-3 rounded-full">
                  <img src={import.meta.env.BASE_URL + "Avatar 5.svg"} alt="User Avatar" className="w-8 h-8 rounded-full" />
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

      {/* Mobile Menu (Off-canvas) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-surface z-40 md:hidden" ref={mobileMenuRef}>
          <div className="flex justify-between p-4 bg-surface">
            {/* Theme Switcher and Notifications in Mobile Menu */}
            <div className="flex items-center space-x-4">
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
            </div>
            {/* Close Button */}
            <button onClick={toggleMobileMenu} className="p-2 rounded-full bg-glass hover:bg-glass-strong transition-colors">
              {/* Close Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 py-8 bg-surface">
            <NavLink to="/exchange" onClick={toggleMobileMenu} className="text-lg font-medium text-text hover:text-primary-cyan">Торговать</NavLink>
            <NavLink to="/feed" onClick={toggleMobileMenu} className="text-lg font-medium text-text hover:text-primary-cyan">Лента</NavLink>
            <NavLink to="/help" onClick={toggleMobileMenu} className="text-lg font-medium text-text hover:text-primary-cyan">Помощь</NavLink>
            <NavLink to="/copy-trading" onClick={toggleMobileMenu} className="text-lg font-medium text-text hover:text-primary-cyan">Копирование сделок</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;