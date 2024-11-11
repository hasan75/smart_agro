// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  srcDir: 'src/',
  serverDir: 'server/',
  ssr: true,
  devtools: { enabled: true },
  modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/eslint'
  ],
  eslint: {
    //options
    config: {
      stylistic: true // <---
    }
  }
})
