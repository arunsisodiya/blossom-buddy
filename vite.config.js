import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteThemePlugin } from 'vite-plugin-theme';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  viteThemePlugin({
    colorVariables: [],
  })],
  server: {
    proxy: {
      "/api/v1": {
        target: "https://trefle.io",
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
})
