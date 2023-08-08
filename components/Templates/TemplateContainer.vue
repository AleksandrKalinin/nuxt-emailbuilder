<template>
  <div class="templates-container">
    <Template
      v-for="template in filteredEmailTemplates"
      :key="template.id"
      :template="template"
      @selectTemplate="selectTemplate"
    />
  </div>
</template>

<script setup lang="ts">
import { useTemplateStore } from "@/store/templateStore";
import { storeToRefs } from "pinia";

const { filteredEmailTemplates } = storeToRefs(useTemplateStore());

const { selectTemplate } = useTemplateStore();

onMounted(() => {});
</script>

<style scoped>
.templates-container {
  @apply w-full min-h-[calc(100vh-100px)] flex flex-wrap px-10 py-10 gap-5;
}
</style>
