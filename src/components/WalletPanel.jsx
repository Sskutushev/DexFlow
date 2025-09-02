import React, { useState } from 'react';
import useWallet from '../hooks/useWallet';
import ConnectWalletModal from './ConnectWalletModal';

function WalletPanel() {
  const { wallet, disconnect } = useWallet();
  const [isModalOpen, setModalOpen] = useState(false);

  if (wallet) {
    const shortAddress = `${wallet.address.slice(0, 6)}...${wallet.address.slice(-4)}`;
    return (
      <div className="flex items-center space-x-3">
        <span className="text-sm font-mono bg-dark-900 px-3 py-1.5 rounded-md">{shortAddress}</span>
        <button 
          onClick={disconnect}
          className="bg-dark-700 hover:bg-dark-600 text-text-secondary px-3 py-1.5 rounded-md text-sm"
        >
          Выйти
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-brand-primary hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        aria-label="Подключить кошелёк"
      >
        Подключить кошелёк
      </button>
      <ConnectWalletModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default WalletPanel;
