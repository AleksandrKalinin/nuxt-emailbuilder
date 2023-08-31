<template>
  <div class="templates-wrapper">
    <div
      v-if="emailTemplatesLoaded && filteredByCategory.length"
      class="templates-container"
    >
      <TransitionGroup name="templates">
        <TemplateItem
          v-for="template in filteredByCategory"
          :key="template.id"
          :template="template"
          @select-template="selectTemplate"
        />
      </TransitionGroup>
    </div>
    <div
      v-else-if="emailTemplatesLoaded && !filteredByCategory.length"
      class="templates-none"
    >
      No templates for display
    </div>
    <div v-else class="templates-container">
      <TransitionGroup name="templates">
        <SkeletonTemplateItem v-for="item in 5" :key="item" />
      </TransitionGroup>
    </div>
    <div class="templates-button">
      <button
        class="button button_small button_normal cursor-pointer"
        @click="fetchTemplates"
      >
        Load more
      </button>
    </div>
  </div>
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
  @apply flex flex-col py-10 px-10 w-[calc(100%-270px)];
}
.templates-container {
  @apply w-full flex justify-start flex-wrap gap-5;
}

.templates-none {
  @apply w-full h-full flex justify-center items-center;
}

.templates-button {
  @apply flex justify-center mt-16;
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
