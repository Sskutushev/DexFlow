# Figma-Ready Spec (Текстовый экспорт)

Этот документ предназначен для быстрой настройки стилей в Figma.

## 1. Цветовые токены

Используйте плагин "Figma Tokens" или создайте стили вручную.

| Имя токена | HEX | Описание |
| :--- | :--- | :--- |
| `brand/primary` | `#4A90E2` | Основной синий бренд |
| `brand/accent` | `#F5A623` | Акцентный оранжевый |
| `status/success` | `#7ED321` | Успешные операции |
| `status/error` | `#D0021B` | Ошибки |
| `ui/bg` | `#121212` | Основной фон приложения |
| `ui/surface` | `#1E1E1E` | Фон карточек, шапки |
| `ui/panel` | `#2A2A2A` | Фон модальных окон, панелей |
| `ui/border` | `#3C3C3C` | Разделители, границы |
| `text/primary` | `#FFFFFF` | Основной текст |
| `text/secondary` | `#B0B0B0` | Вторичный текст |
| `text/tertiary` | `#757575` | Третичный, неактивный текст |

## 2. Типографика

- **Шрифт:** Inter
- **Стили:**
  - `H1 / Display`: `Inter Bold (700)`, `36px`
  - `H2 / Heading`: `Inter Bold (700)`, `24px`
  - `H3 / Subheading`: `Inter Semibold (600)`, `20px`
  - `Body / Regular`: `Inter Regular (400)`, `16px`
  - `Body / Medium`: `Inter Medium (500)`, `16px`
  - `Caption / Small`: `Inter Regular (400)`, `12px`
  - `Button`: `Inter Medium (500)`, `16px`

## 3. Отступы (Spacing)

- **Базовая единица:** `4px`
- **Токены:**
  - `spacing-xs`: `4px` (1x)
  - `spacing-sm`: `8px` (2x)
  - `spacing-md`: `16px` (4x)
  - `spacing-lg`: `24px` (6x)
  - `spacing-xl`: `32px` (8x)
  - `spacing-2xl`: `48px` (12x)

## 4. Варианты кнопок

- **Primary:**
  - `Background`: `brand/primary`
  - `Text`: `text/primary`
  - `Border Radius`: `8px`
  - `Padding`: `12px 24px`
- **Secondary:**
  - `Background`: `ui/panel`
  - `Text`: `text/primary`
  - `Border`: `1px solid ui/border`
  - `Border Radius`: `8px`
  - `Padding`: `12px 24px`
- **Ghost / Text:**
  - `Background`: `transparent`
  - `Text`: `text/secondary`
  - `Hover Text`: `text/primary`

## 5. Размеры модальных окон

- **Small (sm):** `max-width: 400px` (для подтверждений)
- **Medium (md):** `max-width: 520px` (для форм)
- **Large (lg):** `max-width: 768px` (для сложного контента)
