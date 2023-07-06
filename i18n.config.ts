import { defineI18nConfig } from '#i18n'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'ja',
  messages: {
    en: {
      welcome: 'Welcome',
    },
    fr: {
      welcome: 'Bienvenue',
    },
  },
}))
