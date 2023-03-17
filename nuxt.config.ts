// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  i18n: {
    vueI18n: {
      fallbackLocale: 'ja',
    },
    locales: [
      {
        code: 'en',
        file: 'en-US.json',
      },
      {
        code: 'ja',
        file: 'ja-JP.json',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
    },
    strategy: 'prefix_and_default',
    defaultLocale: 'ja',
    lazy: true,
    langDir: 'assets/locales/',
  }
})
