// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/scripts'
  ],
  plugins: [
    { src: '~/plugin/vue-google-maps.js', mode: 'client' },
  ],
  runtimeConfig: {
    public: {
      googleMapApiKey: process.env.GOOGLE_MAP_API_KEY,
      googleMapMapId: process.env.GOOGLE_MAP_MAP_ID
    }
  }
})