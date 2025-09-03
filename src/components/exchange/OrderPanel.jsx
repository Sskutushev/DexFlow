import React from 'react';

const OrderPanel = ({ pair, isLoggedIn }) => {
  const [orderType, setOrderType] = React.useState('market'); // 'market' or 'limit'
  const [slippage, setSlippage] = React.useState(0.5);
  const [showSlippageInput, setShowSlippageInput] = React.useState(false);
  const [amountGive, setAmountGive] = React.useState('');
  const [amountReceive, setAmountReceive] = React.useState('');

  const [displayGiveCurrency, setDisplayGiveCurrency] = React.useState(pair.split('/')[0]);
  const [displayReceiveCurrency, setDisplayReceiveCurrency] = React.useState(pair.split('/')[1]);

  React.useEffect(() => {
    setDisplayGiveCurrency(pair.split('/')[0]);
    setDisplayReceiveCurrency(pair.split('/')[1]);
  }, [pair]);

  const handleSlippageChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setSlippage(value);
    }
  };

  const handleSwap = () => {
    setDisplayGiveCurrency(displayReceiveCurrency);
    setDisplayReceiveCurrency(displayGiveCurrency);
    setAmountGive(amountReceive);
    setAmountReceive(amountGive);
  };

  return (
    <div className="bg-surface rounded-lg p-4 flex flex-col h-auto lg:h-full">
      <h2 className="text-lg font-bold mb-4">Обмен {pair}</h2>
      <div className="space-y-2 sm:space-y-4 flex-grow pr-2">
        <div>
          <label className="text-xs text-muted">Отдаете</label>
          <div className="flex items-center bg-card p-2 sm:p-3 rounded-lg mt-1">
            <input type="text" placeholder="0.0" className="bg-transparent w-full text-base sm:text-xl outline-none" value={amountGive} onChange={(e) => setAmountGive(e.target.value)} />
            <button className="bg-glass-strong px-3 py-1 rounded-md text-sm font-semibold">{displayGiveCurrency}</button>
          </div>
        </div>
        <div className="flex justify-center">
          <button onClick={handleSwap} className="p-2 rounded-full border border-glass-strong hover:bg-glass-strong">
            <img src="/img/стрелки.png" alt="Swap arrows" className="h-5 w-5" />
          </button>
        </div>
        <div>
          <label className="text-xs text-muted">Получаете</label>
          <div className="flex items-center bg-card p-2 sm:p-3 rounded-lg mt-1">
            <input type="text" placeholder="0.0" className="bg-transparent w-full text-base sm:text-xl outline-none" value={amountReceive} onChange={(e) => setAmountReceive(e.target.value)} />
            <button className="bg-glass-strong px-3 py-1 rounded-md text-sm font-semibold">{displayReceiveCurrency}</button>
          </div>
        </div>
      </div>
      <button className="w-full bg-accent-gradient text-white font-semibold py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity mt-[7px]">
        {isLoggedIn ? 'Совершить сделку' : 'Подключить кошелёк'}
      </button>

      {/* New Settings Section */}
      <div className="mt-4 pt-4 border-t border-border-light">
        <h3 className="text-md font-semibold mb-3">Настройки ордера</h3>

        {/* Order Type Selection */}
        <div className="flex justify-around mb-4">
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium border border-gray-300 dark:border-gray-700 ${
              orderType === 'market' ? 'bg-primary text-black dark:text-white' : 'bg-card text-muted'
            }`}
            onClick={() => setOrderType('market')}
          >
            Рынок
          </button>
          <button
            className={`px-4 py-2 rounded-md text-sm font-medium border border-gray-300 dark:border-gray-700 ${
              orderType === 'limit' ? 'bg-primary text-black dark:text-white' : 'bg-card text-muted'
            }`}
            onClick={() => setOrderType('limit')}
          >
            Лимит
          </button>
        </div>

        {/* Slippage Tolerance */}
        <div className="mb-4">
          <label className="text-sm text-muted mb-2 block">Уровень проскальзывания</label>
          <div className="flex flex-wrap items-center space-x-2">
            <input
              type="number"
              step="0.1"
              value={slippage}
              onChange={handleSlippageChange}
              onFocus={() => setShowSlippageInput(true)}
              onBlur={() => setShowSlippageInput(false)}
              className="bg-card p-2 rounded-lg w-24 text-center outline-none"
            />
            <span className="text-lg font-semibold">%</span>
            <button
              className="px-3 py-1 rounded-md bg-card text-sm font-medium hover:bg-glass-strong mt-2 sm:mt-0"
              onClick={() => setSlippage(1)}
            >
              1%
            </button>
            <button
              className="px-3 py-1 rounded-md bg-card text-sm font-medium hover:bg-glass-strong mt-2 sm:mt-0"
              onClick={() => setSlippage(3)}
            >
              3%
            </button>
            <button
              className="px-3 py-1 rounded-md bg-card text-sm font-medium hover:bg-glass-strong mt-2 sm:mt-0"
              onClick={() => setSlippage(5)}
            >
              5%
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPanel;
