import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      }
    }
  },

  build: {
    outDir: '../static/dist',   // importante
    emptyOutDir: true,
    manifest: true,
  },

  // ESSENCIAL para funcionar dentro do Django
  base: '/static/dist/',
})