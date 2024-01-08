export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('permission', (el, binding) => {
    console.log(el, binding.value)
    
  })
})