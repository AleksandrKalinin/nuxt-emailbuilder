<template>
  <Header />
  <div class="flex">
    <Sidebar
      v-if="categories.length"
      :categories="categories"
      :templates-length="emailCategories.length"
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

const { selectedType, selectedCategories, emailCategories } = storeToRefs(
  useTemplateStore()
);

const { fetchCategories } = useTemplateStore();

const categories = computed(() => {
  const labels = [...new Set(emailCategories.value)].map((label) => {
    const obj = {} as SelectOption;
    obj.label = label;
    obj.selected = false;
    obj.number = emailCategories.value?.filter((item: string) => item === label)
      .length as number;
    return obj;
  });
  return labels;
});

onMounted(() => {
  fetchCategories();
});
</script>
