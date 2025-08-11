export default defineNuxtConfig({
  app: {
    head: {
      title: "OnlineExchange",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  css: ["/public/assets/css/base.css"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["nuxt-swiper"],
});