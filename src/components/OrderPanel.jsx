import React, { useState } from 'react';
import PreviewModal from './PreviewModal';

function OrderPanel() {
  const [activeTab, setActiveTab] = useState('swap');
  const [showPreview, setShowPreview] = useState(false);

  const handlePreview = () => {
    setShowPreview(true);
  };

  return (
    <>
      <div className="flex border-b border-dark-600 mb-4">
        <button 
          onClick={() => setActiveTab('swap')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'swap' ? 'text-white border-b-2 border-brand-primary' : 'text-text-secondary'}`}
        >
          Обмен
        </button>
        <button 
          onClick={() => setActiveTab('limit')}
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'limit' ? 'text-white border-b-2 border-brand-primary' : 'text-text-secondary'}`}
        >
          Лимит
        </button>
      </div>

      {activeTab === 'swap' && (
        <div className="space-y-4">
          <div>
            <label className="text-xs text-text-secondary">Отдаете</label>
            <div className="flex items-center bg-dark-900 p-2 rounded-md">
              <input type="number" placeholder="0.0" className="bg-transparent w-full text-xl outline-none" />
              <button className="bg-dark-700 px-3 py-1 rounded-md text-sm">DEXNET</button>
            </div>
          </div>
          <div>
            <label className="text-xs text-text-secondary">Получаете</label>
            <div className="flex items-center bg-dark-900 p-2 rounded-md">
              <input type="number" placeholder="0.0" className="bg-transparent w-full text-xl outline-none" />
              <button className="bg-dark-700 px-3 py-1 rounded-md text-sm">USDT</button>
            </div>
          </div>
          <button 
            onClick={handlePreview}
            className="w-full bg-brand-primary hover:bg-primary-600 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Предпросмотр обмена
          </button>
        </div>
      )}

      {activeTab === 'limit' && (
        <div className="text-center text-text-secondary py-10">
          <p>Создание лимитных ордеров будет доступно в ближайшее время.</p>
        </div>
      )}

      <PreviewModal isOpen={showPreview} onClose={() => setShowPreview(false)} />
    </>
  );
}

export default OrderPanel;
