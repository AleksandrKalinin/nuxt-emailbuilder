import { defineNuxtPlugin } from "#app";
import { VueDraggableNext } from "vue-draggable-next";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueDraggableNext);
});