/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': 'var(--primary-500)',
        'brand-accent': 'var(--accent-500)',
        'dark-bg': 'var(--dark-900)',
        'dark-surface': 'var(--dark-800)',
        'dark-panel': 'var(--dark-700)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'success-500': 'var(--success-500)',
        'error-500': 'var(--error-500)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'var(--hero-gradient)',
      }
    },
  },
  plugins: [],
}
