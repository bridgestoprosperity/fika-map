import { defineConfig } from 'vite'

export default defineConfig({
  base: '/fika-map/',
  build: {
    assetsDir: 'assets',
  },
  resolve: {
    alias: {
      '/@js/': '/src/js/',
    },
  }
})