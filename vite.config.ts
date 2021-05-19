import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, './'),
  server: {
    // host: '127.0.0.1',
    port: 7147,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'views': path.resolve(__dirname, 'src/views')
    }
  },
  plugins: [vue()]
})
