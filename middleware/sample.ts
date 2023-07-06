export default defineNuxtRouteMiddleware((to, _from) => {
  if (to.params.id === '1') {
    return abortNavigation()
  }
})
