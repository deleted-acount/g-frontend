import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext' // Allows modern features like top-level await
  }
});

