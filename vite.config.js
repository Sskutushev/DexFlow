import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isProduction = command === 'build';
  return {
    base: isProduction ? '/DexFlow/' : '/',
    plugins: [react()],
    server: {
      port: 3000
    }
  }
})
