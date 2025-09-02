import React from 'react';
import { signTransaction } from '../services/dexsafe-stub';

function PreviewModal({ isOpen, onClose, route }) {
  if (!isOpen) return null;

  const handleConfirmSwap = async () => {
    console.log("Инициирован обмен...");
    try {
      const unsignedTx = { data: '0x...', to: 'TODO_FILL_ROUTER_CONTRACT', value: '10000' };
      const signedTx = await signTransaction(unsignedTx);
      console.log("Транзакция подписана:", signedTx);
      console.log("Отправка транзакции в сеть...");
      alert("Обмен успешно выполнен!");
      onClose();
    } catch (error) {
      console.error("Ошибка при подписании или отправке:", error);
      alert(`Ошибка: ${error.message}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-dark-panel rounded-lg p-6 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold mb-4">Подтверждение обмена</h2>
        
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-text-secondary">Отдаете:</span>
            <span className="font-medium">100 DEXNET</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Получаете (min):</span>
            <span className="font-medium">149.5 USDT</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Маршрут:</span>
            <span className="font-medium">DEXNET → WETH → USDT</span>
          </div>
          <div className="flex justify-between">
            <span className="text-text-secondary">Комиссия сети:</span>
            <span className="font-medium">~0.01 ETH</span>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button 
            onClick={onClose}
            className="w-full bg-dark-700 hover:bg-dark-600 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Отмена
          </button>
          <button 
            onClick={handleConfirmSwap}
            className="w-full bg-brand-primary hover:bg-primary-600 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Подтвердить обмен
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviewModal;
