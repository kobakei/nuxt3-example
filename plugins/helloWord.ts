export default defineNuxtPlugin((_nuxtApp) => {
  return {
    provide: {
      hello: (msg: string) => `Hello ${msg}`,
    },
  }
})
