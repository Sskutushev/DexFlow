import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock data for wallets
const initialWallets = [
    { id: 'dexsafe', name: 'DexSAFE', logo: '/DexSAFE.svg' },
    { id: 'metamask', name: 'MetaMask', logo: '/MetaMask.png' },
    { id: 'trustwallet', name: 'Trust Wallet', logo: '/Trust-Wallet.png' },
];

const allWallets = [
    ...initialWallets,
    { id: 'coinbase', name: 'Coinbase Wallet' },
    { id: 'ledger', name: 'Ledger' },
    { id: 'trezor', name: 'Trezor' },
    { id: 'phantom', name: 'Phantom' },
    { id: 'exodus', name: 'Exodus' },
    { id: 'atomic', name: 'Atomic Wallet' },
    { id: 'binance', name: 'Binance Chain Wallet' },
    { id: 'safepal', name: 'SafePal' },
];

const ConnectWalletModal = ({ isOpen, onClose }) => {
    const [screen, setScreen] = useState('initial'); // 'initial' or 'allWallets'
    const [selectedWalletId, setSelectedWalletId] = useState(null);
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleConnect = () => {
        if (selectedWalletId) {
            console.log(`Connecting to ${selectedWalletId}...`);
            // Simulate connection and navigate to platform
            onClose(); // Close modal
            navigate('/exchange'); // Navigate to a platform page
        } else {
            // If no wallet selected on initial screen, go to all wallets
            setScreen('allWallets');
        }
    };

    const WalletButton = ({ wallet, onClick, isSelected }) => (
        <button
            key={wallet.id}
            onClick={onClick}
            className={`w-full flex items-center p-3 rounded-lg transition-colors
            ${isSelected ? 'bg-primary-cyan/20 border border-primary-cyan' : 'bg-glass hover:bg-glass-strong'}`}
        >
            {wallet.logo && <img src={wallet.logo} alt={wallet.name} className="w-8 h-8 mr-4" />}
            <span className="font-semibold text-text">{wallet.name}</span>
        </button>
    );

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={onClose}>
            <div className="bg-surface rounded-xl p-6 w-full max-w-sm" onClick={e => e.stopPropagation()}>
                {screen === 'initial' && (
                    <div>
                        <h2 className="text-xl font-bold text-center mb-4 text-text">Подключить кошелёк</h2>
                        <div className="space-y-2">
                            {initialWallets.map(wallet => (
                                <WalletButton
                                    key={wallet.id}
                                    wallet={wallet}
                                    onClick={() => setSelectedWalletId(wallet.id)}
                                    isSelected={selectedWalletId === wallet.id}
                                />
                            ))}
                        </div>
                        {selectedWalletId ? (
                            <button onClick={handleConnect} className="w-full mt-4 bg-accent-gradient text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity">
                                Подключить
                            </button>
                        ) : (
                            <button onClick={() => setScreen('allWallets')} className="w-full mt-4 bg-primary-cyan/20 text-primary-cyan font-semibold py-3 rounded-lg hover:bg-primary-cyan/30 transition-colors">
                                Connect Wallet
                            </button>
                        )}
                    </div>
                )}

                {screen === 'allWallets' && (
                    <div>
                        <div className="flex items-center mb-4">
                            <button onClick={() => setScreen('initial')} className="mr-3 p-2 rounded-full hover:bg-glass-strong transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-text" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <input type="search" placeholder="Поиск кошелька..." className="flex-grow bg-card p-2 rounded-md text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary-cyan"/>
                        </div>
                        <div className="space-y-2 h-64 overflow-y-auto custom-scrollbar pr-2">
                            {allWallets.map(wallet => (
                                <WalletButton
                                    key={wallet.id}
                                    wallet={wallet}
                                    onClick={() => setSelectedWalletId(wallet.id)}
                                    isSelected={selectedWalletId === wallet.id}
                                />
                            ))}
                        </div>
                        {selectedWalletId && (
                            <button onClick={handleConnect} className="w-full mt-4 bg-accent-gradient text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity">
                                Подключить
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ConnectWalletModal;
