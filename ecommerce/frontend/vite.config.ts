import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true, //This creates manifest.json
    outDir: '../static/admin/react/build',
    emptyOutDir: true,
    rollupOptions: {
      input: './src/main.tsx' // or src/index.jsx
    }
  }
})
