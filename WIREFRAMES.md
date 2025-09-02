# Wireframes (SVG)

## 1. Desktop App Shell / Биржа

```svg
<svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" style="background-color: #121212; font-family: sans-serif; color: white;">
  <rect x="10" y="10" width="780" height="40" fill="#1E1E1E" rx="8"></rect>
  <text x="20" y="35" font-size="14" fill="#FFFFFF">DexFlow</text>
  <text x="100" y="35" font-size="12" fill="#B0B0B0">Обмен</text>
  <text x="160" y="35" font-size="12" fill="#B0B0B0">Пулы</text>
  <rect x="650" y="18" width="130" height="24" fill="#4A90E2" rx="4"></rect>
  <text x="665" y="33" font-size="12" fill="white">Подключить кошелёк</text>

  <rect x="10" y="60" width="520" height="430" fill="#1E1E1E" rx="8"></rect>
  <text x="30" y="85" font-size="14" fill="#B0B0B0">DEXNET/USDT</text>
  <rect x="30" y="100" width="480" height="370" fill="#121212" rx="4"></rect>
  <text x="220" y="280" font-size="16" fill="#757575">TradingView Chart Area</text>

  <rect x="540" y="60" width="250" height="300" fill="#1E1E1E" rx="8"></rect>
  <text x="560" y="85" font-size="14" fill="white">Обмен</text>
  <text x="620" y="85" font-size="14" fill="#757575">Лимит</text>
  
  <text x="550" y="115" font-size="12" fill="#B0B0B0">Отдаете</text>
  <rect x="550" y="125" width="230" height="40" fill="#2A2A2A" rx="4"></rect>
  <text x="560" y="150" font-size="16" fill="white">0.0</text>
  <rect x="710" y="133" width="60" height="24" fill="#3C3C3C" rx="4"></rect>
  <text x="720" y="149" font-size="12" fill="white">DEXNET</text>

  <text x="550" y="185" font-size="12" fill="#B0B0B0">Получаете</text>
  <rect x="550" y="195" width="230" height="40" fill="#2A2A2A" rx="4"></rect>
  <text x="560" y="220" font-size="16" fill="white">0.0</text>
  <rect x="720" y="203" width="50" height="24" fill="#3C3C3C" rx="4"></rect>
  <text x="730" y="219" font-size="12" fill="white">USDT</text>

  <rect x="550" y="255" width="230" height="40" fill="#4A90E2" rx="4"></rect>
  <text x="600" y="280" font-size="14" fill="white">Предпросмотр</text>
</svg>
```

## 2. Mobile App Shell / Биржа

```svg
<svg width="375" height="667" viewBox="0 0 375 667" xmlns="http://www.w3.org/2000/svg" style="background-color: #121212; font-family: sans-serif; color: white;">
  <rect x="0" y="0" width="375" height="60" fill="#1E1E1E"></rect>
  <text x="10" y="40" font-size="16" fill="#FFFFFF">DexFlow</text>
  <rect x="240" y="20" width="125" height="28" fill="#4A90E2" rx="4"></rect>
  <text x="250" y="38" font-size="12" fill="white">Подключить кошелёк</text>

  <rect x="10" y="70" width="355" height="200" fill="#1E1E1E" rx="8"></rect>
  <text x="25" y="90" font-size="12" fill="#B0B0B0">График DEXNET/USDT</text>
  
  <rect x="10" y="280" width="355" height="280" fill="#1E1E1E" rx="8"></rect>
  <text x="25" y="305" font-size="14" fill="white">Обмен</text>
  <text x="90" y="305" font-size="14" fill="#757575">Лимит</text>

  <text x="25" y="335" font-size="12" fill="#B0B0B0">Отдаете</text>
  <rect x="25" y="345" width="325" height="40" fill="#2A2A2A" rx="4"></rect>
  
  <text x="25" y="405" font-size="12" fill="#B0B0B0">Получаете</text>
  <rect x="25" y="415" width="325" height="40" fill="#2A2A2A" rx="4"></rect>

  <rect x="25" y="475" width="325" height="40" fill="#4A90E2" rx="4"></rect>
  <text x="130" y="500" font-size="14" fill="white">Предпросмотр</text>

  <rect x="0" y="617" width="375" height="50" fill="#1E1E1E"></rect>
  <text x="40" y="647" font-size="12" fill="white">Обмен</text>
  <text x="170" y="647" font-size="12" fill="#B0B0B0">Пулы</text>
  <text x="290" y="647" font-size="12" fill="#B0B0B0">Ордера</text>
</svg>
```

## 3. Modal Connect DexSAFE

```svg
<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" style="background-color: rgba(0,0,0,0.6); font-family: sans-serif; color: white;">
  <rect x="50" y="50" width="300" height="200" fill="#2A2A2A" rx="8"></rect>
  <text x="70" y="85" font-size="18" fill="white">Подключить кошелёк</text>
  <text x="70" y="115" font-size="12" fill="#B0B0B0" width="260">
    <tspan x="70" dy="1.2em">Для доступа к DexFlow необходимо</tspan>
    <tspan x="70" dy="1.2em">подключить кошелёк экосистемы DexNet.</tspan>
  </text>
  <rect x="70" y="160" width="260" height="40" fill="#4A90E2" rx="4"></rect>
  <text x="140" y="185" font-size="14" fill="white">Подключить DexSAFE</text>
  <text x="100" y="225" font-size="10" fill="#757575">Поддержка WalletConnect будет добавлена позже.</text>
</svg>
```
