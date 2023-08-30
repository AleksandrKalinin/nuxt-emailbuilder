<template>
  <div class="templates-wrapper">
    <div class="templates-container">
      <TransitionGroup name="templates">
        <SkeletonTemplateItem v-for="item in 15" :key="item" />
      </TransitionGroup>
    </div>
    <div class="templates-button">
      <button class="button button_small button_normal cursor-pointer">
        Load more
      </button>
    </div>
  </div>
  <!-- <div v-if="emailTemplatesLoaded" class="templates-container">
    <TransitionGroup name="templates">
      <TemplateItem
        v-for="template in filteredByCategory"
        :key="template.id"
        :template="template"
        @select-template="selectTemplate"
      />
    </TransitionGroup>
  </div> -->
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTemplateStore } from "@/store/templateStore";

const { filteredByCategory, emailTemplatesLoaded } = storeToRefs(
  useTemplateStore()
);

const { selectTemplate, fetchTemplates } = useTemplateStore();

onMounted(() => {
  fetchTemplates();
});
</script>

<style scoped>
.templates-wrapper {
  @apply flex flex-col py-10 px-10;
}
.templates-container {
  @apply w-full min-h-[calc(100vh-100px)] flex justify-center flex-wrap gap-5;
}

.templates-button {
  @apply flex justify-center mt-5;
}

.templates-enter-active,
.templates-leave-active {
  transition: opacity 0.1s ease;
}

.templates-enter-active {
  transition-delay: 0.15s;
}

.templates-enter-from,
.templates-leave-to {
  opacity: 0.5;
}
</style>
