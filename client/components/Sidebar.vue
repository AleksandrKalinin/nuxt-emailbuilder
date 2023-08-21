<template>
  <div class="sidebar">
    <ul class="filter">
      <li class="filter__option filter-option">
        <input
          id="all"
          v-model="selectedCategory"
          type="radio"
          value="all"
          class="mr-2"
          @change="selectCategory(($event.target as HTMLInputElement).value)"
        />
        <label for="all" class="filter-option__label">All</label>
      </li>
      <li class="filter__option filter-option">
        <input
          id="free"
          v-model="selectedCategory"
          type="radio"
          value="free"
          class="mr-2"
          @change="selectCategory(($event.target as HTMLInputElement).value)"
        />
        <label for="free" class="filter-option__label">Free</label>
      </li>
      <li class="filter__option filter-option">
        <input
          id="premium"
          v-model="selectedCategory"
          type="radio"
          value="premium"
          class="mr-2"
          @change="selectCategory(($event.target as HTMLInputElement).value)"
        />
        <label for="premium" class="filter-option__label">Premium</label>
      </li>
    </ul>
    <p class="text-md font-medium">Total: 23 templates</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTemplateStore } from "@/store/templateStore";

const { selectedCategory } = storeToRefs(useTemplateStore());
const { selectCategory } = useTemplateStore();
</script>

<style scoped>
.sidebar {
  @apply w-[200px] h-[calc(100vh-100px)] px-5 py-10;
}

.filter {
  @apply mb-5;
}

.filter-option {
  @apply mb-2;
}

.filter-option__label {
  @apply cursor-pointer font-medium;
}
</style>
