import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/static/',                    // Importante: deve bater com STATIC_URL
  build: {
    outDir: '../static/frontend',               // ou '../static/frontend'
    emptyOutDir: true,
    manifest: true,                    // Necessário para django-vite
    rollupOptions: {
      input: './src/main.jsx',         // ou main.jsx
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    cors: true,
  },
})
