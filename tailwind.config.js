/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Включаем поддержку тем через класс
  theme: {
    extend: {
      colors: {
        // Названия цветов соответствуют CSS переменным
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        card: 'var(--card)',
        muted: 'var(--muted)',
        text: 'var(--text)',
        glass: 'var(--glass)',
        'glass-strong': 'var(--glass-strong)',
        primaryCyan: 'var(--primary-cyan)',
        primaryViolet: 'var(--primary-violet)',
        accentOrange: 'var(--accent-orange)',
        success: 'var(--success)',
        danger: 'var(--danger)',
      },
      boxShadow: {
        'card': '0 10px 30px rgba(8,15,25,0.6)',
        'glow-cyan': '0 0 15px rgba(0, 209, 255, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(90deg, var(--primary-cyan), var(--primary-violet))',
      },
    },
  },
  plugins: [],
}
