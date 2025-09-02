# Спецификация API DexFlow (v1)

Этот документ описывает основные эндпоинты, необходимые для работы фронтенда.

## Базовый URL
`https://api.dexflow.TODO_FILL/v1`

---

### 1. Получение котировки обмена (Quote)

**Эндпоинт:** `POST /quote`

Запрашивает наилучший маршрут и ожидаемое количество токенов для обмена.

**Request Body:**
```json
{
  "fromToken": "0x...", // Адрес контракта токена, который отдают
  "toToken": "0x...",   // Адрес контракта токена, который получают
  "amount": "1000000000000000000" // Количество в минимальных единицах (wei)
}
```

**Success Response (200 OK):**
```json
{
  "amountOut": "149500000", // Ожидаемое количество токенов на выходе (в wei)
  "route": ["0x...from", "0x...intermediate", "0x...to"], // Массив адресов токенов в маршруте
  "priceImpact": "0.05", // Влияние на цену в процентах
  "gasEstimate": "50000" // Примерная стоимость газа
}
```

---

### 2. Создание намерения (Off-chain Intent)

**Эндпоинт:** `POST /intent`

Отправляет подписанное пользователем намерение (например, лимитный ордер) для сохранения и последующего исполнения киперами.

**Request Body:**
```json
{
  "userAddress": "0x...",
  "intentType": "limit_order",
  "data": {
    "fromToken": "0x...",
    "toToken": "0x...",
    "amountIn": "1000000000000000000",
    "minAmountOut": "150000000", // Минимальное количество на выходе
    "executionPrice": "1.50" // Желаемая цена исполнения
  },
  "signature": "0x..." // Подпись EIP-712 хэша намерения
}
```

**Success Response (201 Created):**
```json
{
  "intentId": "intent_12345abcde",
  "status": "pending",
  "createdAt": "2025-09-02T10:00:00Z"
}
```

---

### 3. Получение списка пулов ликвидности

**Эндпоинт:** `GET /pools`

Возвращает список доступных пулов с их статистикой.

**Query Parameters:**
- `sortBy=tvl` (tvl, apr, volume)
- `limit=20`

**Success Response (200 OK):**
```json
{
  "pools": [
    {
      "id": "pool_dexnet_usdt",
      "pair": "DEXNET/USDT",
      "token0": { "address": "0x...", "symbol": "DEXNET" },
      "token1": { "address": "0x...", "symbol": "USDT" },
      "tvl": "45000000.00", // Total Value Locked в USD
      "volume24h": "12345678.00",
      "apr": "15.2"
    }
  ]
}
```

---

### 4. Получение ордеров пользователя

**Эндпоинт:** `GET /orders`

Возвращает список активных и исполненных ордеров для указанного пользователя.

**Query Parameters:**
- `userAddress=0x...` (обязательно)
- `status=active` (active, filled, cancelled)

**Success Response (200 OK):**
```json
{
  "orders": [
    {
      "id": "order_xyz789",
      "intentId": "intent_12345abcde",
      "pair": "DEXNET/USDT",
      "type": "limit",
      "side": "buy",
      "price": "1.45",
      "amount": "100",
      "status": "active",
      "createdAt": "2025-09-02T10:00:00Z"
    }
  ]
}
```
