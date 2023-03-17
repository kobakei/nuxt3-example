// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    // Vuetify treeshaking: https://vuetifyjs.com/en/features/treeshaking/
    async (options, nuxt) => {
      // @ts-ignore
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify()
      ))
    }
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
