import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from "unplugin-vue-router/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
    vueDevTools(),
    ViteImageOptimizer(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
