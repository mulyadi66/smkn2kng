import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/smkn2kng/',
  build: {
    outDir: 'dist',
  },
})
