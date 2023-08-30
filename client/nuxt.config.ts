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
    {
      path: "~/components/Settings",
      global: true,
    },
  ],
  css: [
    "~/assets/style/skeleton.scss",
    "~/assets/style/radio.scss",
    "~/assets/style/checkbox.scss",
    "~/assets/style/variables.scss",
    "~/assets/style/main.scss",
  ],
  modules: [
    "nuxt-vitest",
    "@nuxtjs/google-fonts",
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
  googleFonts: {
    families: {
      Raleway: [400, 500, 600, 700],
    },
  },
  routeRules: {
    "/**": { ssr: false },
    "/editor/**": { ssr: false },
  },
});
