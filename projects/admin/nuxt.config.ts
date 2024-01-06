// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@pinia/nuxt', 'nuxt-primevue'],
  css: ['primevue/resources/themes/lara-light-green/theme.css'],
  pages: true,
  dir: {
    pages: 'src/pages',
    layouts: 'src/layouts',
    middleware: 'src/middleware',
    
  },
  components: {
    
  }
})
