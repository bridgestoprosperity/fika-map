import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        waternetraster: resolve(__dirname, 'waternetraster.html'),
        waternetvector: resolve(__dirname, 'waternetvector.html')
      }
    }
    
  },
  resolve: {
    alias: {
      '/@js/': '/src/js/',
    },
  }
})