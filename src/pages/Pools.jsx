import React from 'react';

const pools = [
    { pair: 'DEXNET/USDT', tvl: '45,000,000 $', apr: '15.2%' },
    { pair: 'BTC/USDT', tvl: '500,000,000 $', apr: '5.1%' },
    { pair: 'ETH/USDT', tvl: '450,000,000 $', apr: '6.8%' },
    { pair: 'DEXNET/WETH', tvl: '22,000,000 $', apr: '18.5%' },
];

function Pools() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Пулы ликвидности</h1>
            <div className="bg-dark-surface rounded-lg">
                <div className="grid grid-cols-4 text-text-secondary p-4 border-b border-dark-600">
                    <span>Пара</span>
                    <span className="text-right">TVL</span>
                    <span className="text-right">APR (годовых)</span>
                    <span></span>
                </div>
                {pools.map((pool, index) => (
                    <div key={index} className="grid grid-cols-4 items-center p-4 hover:bg-dark-700 transition-colors">
                        <span className="font-semibold">{pool.pair}</span>
                        <span className="text-right font-mono">{pool.tvl}</span>
                        <span className="text-right font-mono text-success-500">{pool.apr}</span>
                        <div className="text-right">
                            <button className="bg-brand-primary/20 text-brand-primary px-4 py-1 rounded-md text-sm hover:bg-brand-primary/40">
                                Добавить
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pools;
