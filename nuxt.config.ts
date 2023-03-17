// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  // https://nuxt.com/docs/getting-started/seo-meta
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  css: ['@/assets/main.scss'],
  // css: ['vuetify/lib/styles/main.sass'],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/eslint-module',
    // Vuetify treeshaking: https://vuetifyjs.com/en/features/treeshaking/
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        // @ts-ignore
        config.plugins.push(vuetify())
      )
    },
  ],
  runtimeConfig: {
    public: {
      sentry: {
        dsn: 'SENTRY_DNS',
        enabled: false,
      },
    },
  },
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
  },
})
