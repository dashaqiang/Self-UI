import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'SelfUI',
      formats: ['es', 'cjs'],
      fileName: (format) => {
        if (format === 'es') return 'es/index.mjs'
        if (format === 'cjs') return 'lib/index.js'
        return `${format}/index.js`
      }
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: ({ name }) => {
          if (name === 'style.css') {
            return 'es/style.css'
          }
          return 'assets/[name][extname]'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        
      },
    },
  },
})