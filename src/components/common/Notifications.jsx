import React from 'react';

const mockNotifications = [
    { id: 1, type: 'like', message: 'CryptoBull лайкнул ваш пост.', time: '1 минуту назад' },
    { id: 2, type: 'system', message: 'Ваша сделка BTC/USDT успешно завершена.', time: '5 минут назад' },
    { id: 3, type: 'follow', message: 'DeFi_Guru начал(а) отслеживать вас.', time: '10 минут назад' },
    { id: 4, type: 'comment', message: 'Аналитик_80 прокомментировал(а) ваш пост.', time: '30 минут назад' },
    { id: 5, type: 'system', message: 'Новое обновление платформы доступно.', time: '1 час назад' },
    { id: 6, type: 'like', message: 'NFT_Collector лайкнул ваш пост.', time: '2 часа назад' },
    { id: 7, type: 'system', message: 'Ваш вывод средств одобрен.', time: '3 часа назад' },
    { id: 8, type: 'follow', message: 'Web3_Innovator начал(а) отслеживать вас.', time: '5 часов назад' },
    { id: 9, type: 'comment', message: 'Yield_Farmer прокомментировал(а) ваш пост.', time: '8 часов назад' },
    { id: 10, type: 'system', message: 'Напоминание: проверьте свои открытые ордера.', time: '1 день назад' },
    { id: 11, type: 'like', message: 'Blockchain_Dev лайкнул ваш пост.', time: '1 день назад' },
    { id: 12, type: 'system', message: 'Технические работы запланированы на 03.09.2025.', time: '2 дня назад' },
    { id: 13, type: 'follow', message: 'MetaverseBuilder начал(а) отслеживать вас.', time: '3 дня назад' },
    { id: 14, type: 'comment', message: 'DegenTrader прокомментировал(а) ваш пост.', time: '4 дня назад' },
    { id: 15, type: 'system', message: 'Добро пожаловать в DexFlow!', time: '5 дней назад' },
];

const Notifications = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="absolute right-0 mt-2 w-80 bg-surface rounded-lg shadow-lg border border-glass-strong z-50">
            <div className="p-4 border-b border-glass-strong">
                <h3 className="font-bold text-text">Уведомления</h3>
            </div>
            <div className="max-h-64 overflow-y-auto custom-scrollbar">
                {mockNotifications.length > 0 ? (
                    mockNotifications.map(notification => (
                        <div key={notification.id} className="p-3 border-b border-glass-strong last:border-b-0 hover:bg-glass-strong transition-colors">
                            <p className="text-sm text-text">{notification.message}</p>
                            <p className="text-xs text-muted mt-1">{notification.time}</p>
                        </div>
                    ))
                ) : (
                    <div className="p-3 text-sm text-muted text-center">Нет новых уведомлений.</div>
                )}
            </div>
            <div className="p-3 border-t border-glass-strong text-center">
                <button className="text-primary-cyan text-sm hover:underline">Посмотреть все</button>
            </div>
        </div>
    );
};

export default Notifications;