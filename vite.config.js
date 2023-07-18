import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    assetsDir: 'assets',
  },
  resolve: {
    alias: {
      '/@js/': '/src/js/',
    },
  }
})