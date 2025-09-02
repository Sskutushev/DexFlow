import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';

const SunIcon = () => <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" className="fill-muted"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>;
const MoonIcon = () => <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>;

const ThemeSwitcher = () => {
  const [theme, setTheme] = useTheme();

  return (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-glass hover:bg-glass-strong transition-colors"
      aria-label="Переключить тему"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeSwitcher;
