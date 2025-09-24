// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css'
  ],
  modules: ['@nuxt/eslint', '@nuxt/image'],

  $meta: {
    title: 'Portfólio Gustavo',
    description: 'Portfólio de Gustavo, desenvolvedor front-end',
    keywords: 'portfólio, gustavo, desenvolvedor front-end',
    author: 'Gustavo',
  }
})