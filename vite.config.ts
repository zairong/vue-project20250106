import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages 會以 `/<repo>/` 子路徑提供網站，所以 build 時要設定 base
  // 你的 repo：vue-project20250106 → Pages 網址通常是：
  // https://<username>.github.io/vue-project20250106/
  base: command === 'build' ? '/vue-project20250106/' : '/',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}))
