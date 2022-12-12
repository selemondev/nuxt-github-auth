// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth", "nuxt-icon"],
  css: ["@/assets/main.css"],
  runtimeConfig: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET
  }
});
