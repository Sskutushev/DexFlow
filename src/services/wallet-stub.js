// Файл-заглушка для эмуляции SDK кошелька
export const connectWallet = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ address: '0x' + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('') });
    }, 500);
  });
};
