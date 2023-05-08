import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        index: 'index.html'
      },
      output: {
        format: 'esm',
        entryFileNames: '[name].js'
      }
    },
  },
})
