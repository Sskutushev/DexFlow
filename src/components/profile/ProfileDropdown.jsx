import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Switch from '../common/Switch';
import PlatformLanguageSwitcher from '../common/PlatformLanguageSwitcher'; // New import

const GlobalSettings = () => {
    const [name, setName] = useState(true);
    const [notifications, setNotifications] = useState(true);
    const [risk, setRisk] = useState(false);
    const [subgraph, setSubgraph] = useState(true);

    return (
        <div className="space-y-4 p-4">
            <div className="flex justify-between items-center relative">
                <label className="text-sm">Язык</label>
                <PlatformLanguageSwitcher />
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
                    <img src={import.meta.env.BASE_URL + "Avatar 5.svg"} alt="User Avatar" className="w-10 h-10 rounded-full mr-3" />
                    <div>
                        <p className="font-semibold text-sm text-text">ID: 123456</p>
                        <p className="text-xs text-muted">0xabc...def</p>
                    </div>
                </div>
                <div className="flex items-center justify-between bg-glass p-3 rounded-lg">
                    <div className="flex items-center">
                        <img src={import.meta.env.BASE_URL + "assets/icons/ic-wallet.svg"} alt="USDT" className="w-6 h-6 mr-2" />
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
