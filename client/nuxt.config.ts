// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      supabaseUrl: "",
      supabaseKey: "",
    },
  },
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
    {
      path: "~/components/Templates",
      global: true,
    },
  ],
  css: [
    "~/assets/style/radio.scss",
    "~/assets/style/variables.scss",
    "~/assets/style/main.scss",
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/supabase",
    [
      "@pinia/nuxt",
      {
        autoImports: [["defineStore", "definePiniaStore"]],
      },
    ],
    "nuxt-icon",
  ],
  routeRules: {
    "/editor/**": { ssr: false },
  },
});
