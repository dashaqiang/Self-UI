import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  root: __dirname,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  server: {
    host: '127.0.0.1',
    port: 5173
  }
})