import { defineNuxtPlugin } from "#app";
import VueDOMPurifyHTML from "vue-dompurify-html";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueDOMPurifyHTML, {
    default: {
      ADD_TAGS: ["iframe"], // this one whitelists Youtube
    },
  });
});