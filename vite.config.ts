import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport from 'vite-plugin-style-import';
// https://vitejs.dev/config/
export default defineConfig({

  root: './',
  server: {
    host: "::",
    port: 7147,
    strictPort: true,
    // proxy: {
    //   'api': ""
    // }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'views': path.resolve(__dirname, 'src/views')
    }
  },
  css: {
    postcss: {
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    }
  },
  plugins: [vue(), styleImport({
    libs: [
      {
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => {
          return `vant/es/${name}/style`
        }
      },
    ],
  }),]
})
