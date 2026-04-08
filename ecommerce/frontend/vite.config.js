import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  base: '/static/',   // só afeta o build (produção)

  build: {
    outDir: '../static/admin/react/build',
    emptyOutDir: true,
    manifest: true,
  },

  server: {
    port: 5173,
    strictPort: true,
    host: '0.0.0.0',
    cors: {
      origin: "*",
      credentials: true,
    },
    hmr: {
      host: process.env.CODESPACE_NAME 
        ? `${process.env.CODESPACE_NAME}-5173.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}`
        : 'localhost',
      port: 5173,
      clientPort: 443,
      protocol: 'wss',
    },
  },
})