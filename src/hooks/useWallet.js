import { useState, useEffect } from 'react';

const useWallet = () => {
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    const savedWallet = localStorage.getItem('dexflow-wallet');
    if (savedWallet) {
      setWallet(JSON.parse(savedWallet));
    }
  }, []);

  const connect = () => {
    const mockWallet = {
      address: '0x1234567890abcdef1234567890abcdef12345678',
      network: 'DexNet Mainnet',
    };
    localStorage.setItem('dexflow-wallet', JSON.stringify(mockWallet));
    setWallet(mockWallet);
    console.log("Кошелёк подключен (mock):", mockWallet);
  };

  const disconnect = () => {
    localStorage.removeItem('dexflow-wallet');
    setWallet(null);
    console.log("Кошелёк отключен.");
  };

  return { wallet, connect, disconnect };
};

export default useWallet;
