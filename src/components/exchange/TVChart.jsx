import React, { useEffect, useRef } from 'react';

// Компонент графика TradingView
const TVChart = ({ pair }) => {
  const container = useRef();

  useEffect(() => {
    // Удаляем предыдущий виджет, если он был
    if (container.current.firstChild) {
      container.current.removeChild(container.current.firstChild);
    }

    const symbol = pair.replace('/','');

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        autosize: true,
        symbol: `BINANCE:${symbol}`,
        interval: "D",
        timezone: "Etc/UTC",
        theme: document.documentElement.classList.contains('dark') ? "dark" : "light",
        style: "1",
        locale: "ru",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_top_toolbar: false,
        allow_symbol_change: false,
        container_id: "tradingview_container"
      });
    };
    container.current.appendChild(script);

  }, [pair]);

  return (
    <div className="bg-surface rounded-lg h-[400px] lg:h-[800px] p-1">
      <div id="tradingview_container" ref={container} className="h-full w-full" />
    </div>
  );
};

export default TVChart;
