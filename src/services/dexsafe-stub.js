// Файл-заглушка для эмуляции SDK кошелька DexSAFE

/**
 * Эмулирует подключение к кошельку.
 * @returns {Promise<{address: string}>}
 */
export const connectWallet = () => {
  console.log('[DexSAFE Stub] Попытка подключения...');
  return new Promise(resolve => {
    setTimeout(() => {
      const mockAddress = '0x' + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('');
      console.log(`[DexSAFE Stub] Кошелёк подключен: ${mockAddress}`);
      resolve({ address: mockAddress });
    }, 500);
  });
};

/**
 * Эмулирует подписание транзакции.
 * @param {object} tx - Объект транзакции
 * @returns {Promise<{hash: string}>}
 */
export const signTransaction = (tx) => {
  console.log('[DexSAFE Stub] Подписание транзакции:', tx);
  return new Promise(resolve => {
    setTimeout(() => {
      const mockHash = '0x' + Array(64).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('');
      console.log(`[DexSAFE Stub] Транзакция подписана, хэш: ${mockHash}`);
      resolve({ hash: mockHash });
    }, 1000);
  });
};