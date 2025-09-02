import React from 'react';
import useWallet from '../hooks/useWallet';

function ConnectWalletModal({ isOpen, onClose }) {
  const { connect } = useWallet();

  if (!isOpen) return null;

  const handleConnect = () => {
    connect();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-dark-panel rounded-lg p-6 w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold mb-4">Подключить кошелёк</h2>
        <p className="text-text-secondary text-sm mb-6">
          Для доступа к DexFlow необходимо подключить кошелёк экосистемы DexNet.
        </p>
        
        <button 
          onClick={handleConnect}
          className="w-full flex items-center justify-center bg-brand-primary hover:bg-primary-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
        >
          <span className="ml-2">Подключить DexSAFE</span>
        </button>

        <div className="text-center mt-6 text-xs text-text-tertiary">
          <p>Поддержка WalletConnect будет добавлена в следующих версиях.</p>
        </div>
      </div>
    </div>
  );
}

export default ConnectWalletModal;
