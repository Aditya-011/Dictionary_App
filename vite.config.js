import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Set your base URL if necessary
  head: {
    favicon: 'favicon.ico' // Update with the correct path to your custom favicon
  },
})
