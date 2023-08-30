<template>
  <Header />
  <div class="flex">
    <Sidebar
      v-if="categories.length"
      :categories="categories"
      :templates-length="filteredEmailTemplates.length"
      :selected-categories="selectedCategories"
      :selected-type="selectedType"
    />
    <SkeletonSidebar v-else />
    <TemplateContainer />
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTemplateStore } from "@/store/templateStore";

const { selectedType, filteredEmailTemplates, selectedCategories } =
  storeToRefs(useTemplateStore());

const categories = computed(() => {
  const labels = [
    ...new Set(
      filteredEmailTemplates.value?.map((item: EmailTemplate) => item.category)
    ),
  ].map((label) => {
    const obj = {} as SelectOption;
    obj.label = label;
    obj.selected = false;
    obj.number = filteredEmailTemplates.value?.filter(
      (item: EmailTemplate) => item.category === label
    ).length;
    return obj;
  });
  return labels;
});
</script>
