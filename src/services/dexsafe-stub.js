export const signTransaction = (transaction) => {
  console.log('[DexSAFE Stub] Подписание транзакции:', transaction);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const signedTxHash = '0x' + [...Array(64)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
      console.log('[DexSAFE Stub] Транзакция подписана, хэш:', signedTxHash);
      resolve(signedTxHash);
    }, 1500); 
  });
};

export const signMessage = (message) => {
  console.log('[DexSAFE Stub] Подписание сообщения:', message);
  return new Promise((resolve) => {
    setTimeout(() => {
      const signature = '0x' + [...Array(130)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
      resolve(signature);
    }, 1000);
  });
};
