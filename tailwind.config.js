/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#070712',
        surface: '#0F1724',
        card: '#0B1220',
        muted: '#98A0B3',
        text: '#E6EDF3',
        glass: 'rgba(255,255,255,0.04)',
        'glass-strong': 'rgba(255,255,255,0.06)',
        primaryCyan: '#00D1FF',
        primaryViolet: '#7B61FF',
        accentOrange: '#FF2B00',
        success: '#00E6A8',
        danger: '#FF6B6B',
      },
      boxShadow: {
        'card': '0 10px 30px rgba(8,15,25,0.6)',
        'glow-cyan': '0 0 15px rgba(0, 209, 255, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(90deg, #00D1FF, #7B61FF)',
      },
    },
  },
  plugins: [],
}