export default defineNuxtRouteMiddleware((to) => {
  if (to.name === 'login') {
    return 
  }
  const token = useCookie('token')
  if (!token.value) {
    return navigateTo('login')
  }
})