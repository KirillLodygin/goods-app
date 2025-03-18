export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/test-utils',
    '@nuxt/image',
    '@nuxtjs/device'
  ],

  buildModules: [
    'nuxt-device'
  ],

  css: ['~/assets/css/main.css'],

  ui: {
    colorMode: false
  },

  image: {
    dir: '../public/images',
    format: ['webp']
  },

  device: {
    refreshOnResize: true,
    defaultUserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
    customBreakpoints: {
      mobile: 960,
      desktop: 961
    }
  },

  future: {
    compatibilityVersion: 4
  },

  router: {
    middleware: ['redirect', 'auth'],
  },

  layout: 'default',

  compatibilityDate: '2024-11-27'
})