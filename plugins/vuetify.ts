import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiAccount } from '@mdi/js'

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
  })

  // Vue.js で Vuetify を使用する
  nuxtApp.vueApp.use(vuetify)
})