import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Switch from '../common/Switch';
import { languages } from '../landing/LanguageSwitcher'; // Import languages from LanguageSwitcher

const GlobalSettings = () => {
    const [name, setName] = useState(true);
    const [notifications, setNotifications] = useState(true);
    const [risk, setRisk] = useState(false);
    const [subgraph, setSubgraph] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Default to Russian
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const languageDropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
                setIsLanguageDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelectLanguage = (language) => {
        setSelectedLanguage(language);
        setIsLanguageDropdownOpen(false);
        console.log(`Language changed to: ${language.name}`);
    };

    return (
        <div className="space-y-4 p-4">
            <div className="flex justify-between items-center relative" ref={languageDropdownRef}>
                <label className="text-sm">Язык</label>
                <button
                    onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                    className="flex items-center p-2 rounded-md bg-glass hover:bg-glass-strong transition-colors"
                >
                    <span role="img" aria-label={`${selectedLanguage.name} flag`} className="mr-2">{selectedLanguage.flag}</span>
                    <span className="text-sm">{selectedLanguage.name}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-2 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                {isLanguageDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-40 bg-surface rounded-lg shadow-lg z-10 py-1">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleSelectLanguage(lang)}
                                className="w-full text-left px-4 py-2 text-sm text-text hover:bg-glass-strong flex items-center"
                            >
                                <span role="img" aria-label={`${lang.name} flag`} className="mr-2">{lang.flag}</span>
                                {lang.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex justify-between items-center">
                <label className="text-sm">Показывать имя</label>
                <Switch enabled={name} setEnabled={setName} />
            </div>
            <div className="flex justify-between items-center">
                <label className="text-sm">Разрешить уведомления</label>
                <Switch enabled={notifications} setEnabled={setNotifications} />
            </div>
            <div className="flex justify-between items-center">
                <label className="text-sm">Оценка риска для токена</label>
                <Switch enabled={risk} setEnabled={setRisk} />
            </div>
            <div className="flex justify-between items-center">
                <label className="text-sm">Индикатор состояния подграфа</label>
                <Switch enabled={subgraph} setEnabled={setSubgraph} />
            </div>
        </div>
    )
}

const EVMSettings = () => {
    const [expert, setExpert] = useState(false);
    const [sounds, setSounds] = useState(true);

    return (
        <div className="space-y-4 p-4">
            <div>
                <label className="text-xs text-muted">Скорость транзакции</label>
                <select className="w-full bg-card p-2 rounded-md mt-1 text-sm">
                    <option>По умолчанию</option>
                    <option>Стандартная (0.1)</option>
                    <option>Быстрая (0.12)</option>
                    <option>Мгновенная (0.15)</option>
                </select>
            </div>
            <div>
                <label className="text-xs text-muted">Срок транзакции</label>
                <div className="flex items-center bg-card p-2 rounded-md mt-1">
                    <input type="text" placeholder="20" className="bg-transparent w-full text-sm outline-none" />
                    <span className="text-muted text-sm border-l border-glass-strong pl-2">минуты</span>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <label className="text-sm">Экспертный режим</label>
                <Switch enabled={expert} setEnabled={setExpert} />
            </div>
            <div className="flex justify-between items-center">
                <label className="text-sm">Звуки бросания монет</label>
                <Switch enabled={sounds} setEnabled={setSounds} />
            </div>
        </div>
    )
}

const ProfileDropdown = ({ isVisible }) => {
    const [activeTab, setActiveTab] = useState('global');
    const navigate = useNavigate();
    const [showBalanceTooltip, setShowBalanceTooltip] = useState(false); // New state for tooltip

    const handleLogout = () => {
        // Simulate logout
        console.log("Logging out...");
        navigate('/'); // Navigate back to landing page
    };

    if (!isVisible) return null;

    return (
        <div className="absolute top-16 right-0 w-80 bg-surface rounded-lg shadow-lg border border-glass-strong z-50">
            <div className="p-4 border-b border-glass-strong relative">
                <div className="absolute top-4 right-4 flex items-center">
                    <p className="text-sm font-semibold text-text mr-2">ТрейдерDEX</p>
                    <button className="p-1 rounded-full hover:bg-glass-strong transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-muted" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.38-2.828-2.828z" />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center mb-2">
                    <img src="/Avatar 5.svg" alt="User Avatar" className="w-10 h-10 rounded-full mr-3" />
                    <div>
                        <p className="font-semibold text-sm text-text">ID: 123456</p>
                        <p className="text-xs text-muted">0xabc...def</p>
                    </div>
                </div>
                <div className="flex items-center justify-between bg-glass p-3 rounded-lg">
                    <div className="flex items-center">
                        <img src="/assets/icons/ic-wallet.svg" alt="USDT" className="w-6 h-6 mr-2" />
                        <span className="text-sm text-muted">Баланс:</span>
                        {/* Info icon and tooltip */}
                        <div
                            className="relative ml-1 cursor-pointer"
                            onMouseEnter={() => setShowBalanceTooltip(true)}
                            onMouseLeave={() => setShowBalanceTooltip(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-muted" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.445l-2.5 4A1 1 0 007 13h6a1 1 0 00.867-1.555l-2.5-4A1 1 0 0010 7z" clipRule="evenodd" />
                            </svg>
                            {showBalanceTooltip && (
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded-md shadow-lg z-50">
                                    Данный баланс отображает сумму всех активов в USDT для удобства совершения сделок, сумма сформирована в пересчете по текущему курсу каждого актива.
                                </div>
                            )}
                        </div>
                    </div>
                    <p className="font-bold text-text">{(Math.random() * 10000).toFixed(2)} USDT</p>
                </div>
            </div>
            <div>
                <div className="flex border-b border-glass-strong">
                    <button onClick={() => setActiveTab('global')} className={`flex-1 text-sm py-2 ${activeTab === 'global' ? 'text-text bg-glass-strong' : 'text-muted'}`}>Глобальные</button>
                    <button onClick={() => setActiveTab('evm')} className={`flex-1 text-sm py-2 ${activeTab === 'evm' ? 'text-text bg-glass-strong' : 'text-muted'}`}>EVM</button>
                </div>
                {activeTab === 'global' ? <GlobalSettings /> : <EVMSettings />}
            </div>
            <div className="p-4 border-t border-glass-strong">
                <button
                    onClick={handleLogout}
                    className="w-full bg-red-500/20 text-red-500 font-semibold py-2 rounded-lg hover:bg-red-500/30 transition-colors"
                >
                    Выйти / Отключиться
                </button>
            </div>
        </div>
    )
}

export default ProfileDropdown;
