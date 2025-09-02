import React from 'react';

const orders = [
  { id: '1', pair: 'DEXNET/USDT', type: 'Лимит', side: 'Покупка', price: '1.45 USDT', amount: '100 DEXNET', status: 'Активен' },
  { id: '2', pair: 'ETH/USDT', type: 'Лимит', side: 'Продажа', price: '3600 USDT', amount: '2 ETH', status: 'Исполнен' },
  { id: '3', pair: 'BTC/USDT', type: 'TWAP', side: 'Покупка', price: '68000 USDT', amount: '0.1 BTC', status: 'Отменен' },
];

function Orders() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Ваши ордера</h1>
      <div className="bg-dark-surface rounded-lg overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-text-secondary uppercase bg-dark-panel">
            <tr>
              <th scope="col" className="px-6 py-3">Пара</th>
              <th scope="col" className="px-6 py-3">Тип</th>
              <th scope="col" className="px-6 py-3">Сторона</th>
              <th scope="col" className="px-6 py-3">Цена</th>
              <th scope="col" className="px-6 py-3">Количество</th>
              <th scope="col" className="px-6 py-3">Статус</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-dark-600 hover:bg-dark-700">
                <td className="px-6 py-4 font-medium">{order.pair}</td>
                <td className="px-6 py-4">{order.type}</td>
                <td className={`px-6 py-4 ${order.side === 'Покупка' ? 'text-success-500' : 'text-error-500'}`}>{order.side}</td>
                <td className="px-6 py-4 font-mono">{order.price}</td>
                <td className="px-6 py-4 font-mono">{order.amount}</td>
                <td className="px-6 py-4">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
