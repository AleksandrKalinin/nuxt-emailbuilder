<template>
  <div class="template group">
    <span v-if="template.category === 'premium'" class="template__ribbon"
      >Premium</span
    >
    <div class="template__image template-image">
      <img :src="template.preview" class="template-image__picture" />
    </div>
    <div class="template__overlay template-overlay">
      <h2 class="template__title">{{ template.name }}</h2>
      <button
        class="button button_small button_normal cursor-pointer"
        @click.prevent="emit('selectTemplate', template)"
      >
        Open template
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TemplateItemProps {
  template: EmailTemplate;
}

defineProps<TemplateItemProps>();

const emit = defineEmits(["selectTemplate"]);
</script>

<style scoped>
.template {
  @apply w-[280px] h-[370px] relative hover:scale-[1.02] transition duration-200 relative overflow-hidden;
}

.template__ribbon {
  @apply absolute top-[20px] left-[-35px] z-10 bg-red-500 text-white px-10 py-1 uppercase text-xs tracking-[1px] rotate-[-45deg];
}

.template__image {
  @apply w-full h-full px-[20px] overflow-hidden bg-slate-200;
}

.template-image__picture {
  @apply w-full h-auto flex;
}

.template__overlay {
  @apply h-full w-full absolute bg-white/[0.9] flex flex-col justify-center items-center top-0 left-0 shadow-xl p-[20px] opacity-0 group-hover:opacity-100 transition duration-200;
}

.template__title {
  @apply text-2xl text-center mb-5 font-semibold;
}
</style>
