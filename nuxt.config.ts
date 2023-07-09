// https://nuxt.com/docs/api/configuration/nuxt-config

import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  meta: {
    title: 'Nuxt 3 + Element Plus + WindiCSS + Pinia',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt 3 + Element Plus + WindiCSS + Pinia'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  modules: ['@unocss/nuxt', '@vueuse/nuxt'],
  devtools: { enabled: true },
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? ['naive-ui', 'vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer', 'date-fns', '@css-render/plugin-bem']
        : ['@juggle/resize-observer']
  },
  vite: {
    plugins: [
      Components({
        dts: true,
        resolvers: [NaiveUiResolver()] // Automatically register all components in the `components` directory
      })
    ],
    // 解决在开发模式下降低 naive-ui 引起的打包缓慢
    optimizeDeps: {
      include: process.env.NODE_ENV === 'development' ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone'] : []
    }
  },
  css: ['@/assets/css/global.css']
})
