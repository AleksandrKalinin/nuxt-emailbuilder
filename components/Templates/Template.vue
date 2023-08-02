<template>
  <div class="template">
    <div class="template__image template-image">
      <img src="@/assets/images/temp.png" class="template-image__picture" />
    </div>
    <div class="template__overlay template-overlay">
      <h2 class="template__title">Infographic Promotion Email</h2>
      <a class="button button_small cursor-pointer">Open template</a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.template {
  @apply w-[280px] h-[370px] relative hover:scale-[1.02] transition duration-200;
}

.template__image {
  @apply w-full h-full px-[20px] overflow-hidden bg-slate-200;
}

.template-image__picture {
  @apply w-full h-auto flex;
}

.template__overlay {
  @apply h-full w-full absolute bg-white/[0.9] flex flex-col justify-center items-center top-0 left-0 shadow-xl p-[20px] opacity-0 hover:opacity-100 transition duration-200;
}

.template__title {
  @apply text-2xl text-center mb-5 font-semibold;
}
</style>
