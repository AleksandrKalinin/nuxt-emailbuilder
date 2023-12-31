import VueDOMPurifyHTML from "vue-dompurify-html";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueDOMPurifyHTML, {
    default: {
      ADD_TAGS: ["iframe"], // this one whitelists Youtube
    },
  });
});
