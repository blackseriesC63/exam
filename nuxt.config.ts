// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-02",
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
});
