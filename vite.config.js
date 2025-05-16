// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    allowedHosts: [
      'devserver-main--iridescent-kleicha-eb6763.netlify.app',
      // You can add other domains as needed
      'localhost' // keep localhost for local development
    ]
  },
  // Your other configuration...
})

