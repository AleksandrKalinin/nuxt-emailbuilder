<template>
  <div class="templates-container">
    <TemplateItem
      v-for="template in filteredByCategory"
      :key="template.id"
      :template="template"
      @select-template="selectTemplate"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTemplateStore } from "@/store/templateStore";

const { filteredByCategory } = storeToRefs(useTemplateStore());

const { selectTemplate, fetchTemplates } = useTemplateStore();

onMounted(() => {
  fetchTemplates();
});
</script>

<style scoped>
.templates-container {
  @apply w-full min-h-[calc(100vh-100px)] flex flex-wrap px-10 py-10 gap-5;
}
</style>
