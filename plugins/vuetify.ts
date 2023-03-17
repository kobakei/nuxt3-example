import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiAccount } from '@mdi/js'

// Translations provided by Vuetify
import { ja, en } from 'vuetify/locale'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    icons: {
      defaultSet: 'mdi',
      // ここに使用するアイコンのみ列挙することで、不要なアイコンをバンドルしなくてよくなる
      aliases: {
        ...aliases,
        mdiAccount,
      },
      sets: {
        mdi,
      },
    },
    locale: {
      locale: 'ja',
      fallback: 'en',
      messages: { ja, en }
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            background: '#FFFFFF',
            surface: '#FFFFFF',
            primary: '#6200EE',
            'primary-darken-1': '#3700B3',
            secondary: '#03DAC6',
            'secondary-darken-1': '#018786',
            error: '#B00020',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
          }
        }
      }
    }
  })

  // Vue.js で Vuetify を使用する
  nuxtApp.vueApp.use(vuetify)
})