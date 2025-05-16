// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'esnext' // Allows modern JavaScript features
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext' // Ensure esbuild uses modern targets
    }
  }
})
