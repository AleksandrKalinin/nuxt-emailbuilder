// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    "~/components",
    {
      path: "~/components/Inputs",
      global: true,
    },
    {
      path: "~/components/EditorMenu",
      global: true,
    },
  ],
  css: ["~/assets/style/variables.scss", "~/assets/style/main.scss"],
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [["defineStore", "definePiniaStore"]],
      },
    ],
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
  ],
});
