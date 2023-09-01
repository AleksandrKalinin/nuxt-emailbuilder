<template>
  <div class="sidebar">
    <ul class="sidebar-block filter">
      <h2 class="sidebar-block__header">Price plan</h2>
      <li class="filter__option filter-option">
        <input
          id="all"
          v-model="selectedType"
          type="radio"
          value="all"
          class="mr-2 filter-option__input"
          @change="selectType(($event.target as HTMLInputElement).value)"
        />
        <label for="all" class="filter-option__label">All</label>
      </li>
      <li class="filter__option filter-option">
        <input
          id="free"
          v-model="selectedType"
          type="radio"
          value="free"
          class="mr-2 filter-option__input"
          @change="selectType(($event.target as HTMLInputElement).value)"
        />
        <label for="free" class="filter-option__label">Free</label>
      </li>
      <li class="filter__option filter-option">
        <input
          id="premium"
          v-model="selectedType"
          type="radio"
          value="premium"
          class="mr-2 filter-option__input"
          @change="selectType(($event.target as HTMLInputElement).value)"
        />
        <label for="premium" class="filter-option__label">Premium</label>
      </li>
    </ul>
    <ul class="sidebar-block categories">
      <h2 class="sidebar-block__header">Categories</h2>
      <TransitionGroup name="categories">
        <li
          v-for="(category, index) in categories"
          :key="index"
          class="categories__option categories-option"
        >
          <label class="categories-option__name mcui-checkbox"
            ><input
              v-model="selectedCategories"
              type="checkbox"
              class="categories-option__input"
              :value="category.label"
            />
            <div>
              <svg class="mcui-check" viewBox="-2 -2 35 35" aria-hidden="true">
                <title></title>
                <polyline points="7.57 15.87 12.62 21.07 23.43 9.93" />
              </svg>
            </div>
            <span class="categories-option__text">{{ category.label }}</span>
          </label>
          <span class="categories-option__number">{{ category.number }}</span>
        </li>
      </TransitionGroup>
    </ul>
    <p class="text-md font-medium">Total: {{ templatesLength }} templates</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTemplateStore } from "@/store/templateStore";

interface SidebarProps {
  categories: SelectOption[];
  templatesLength: number;
}

defineProps<SidebarProps>();

const { selectedCategories, selectedType } = storeToRefs(useTemplateStore());

const { selectType } = useTemplateStore();
</script>

<style scoped>
.sidebar {
  @apply w-[270px] min-w-[270px] h-[calc(100vh-100px)] px-5 py-10;
}

.sidebar-block {
  @apply mb-7;
}

.sidebar-block__header {
  @apply font-medium text-lg uppercase mb-2;
}

.categories-option {
  @apply flex justify-between items-center mb-2;
}
.categories-option__name {
  @apply cursor-pointer;
}
.categories-option__input {
  @apply cursor-pointer;
}

.categories-option__text {
  @apply mx-2 leading-[18px];
}

.categories-option__number {
  @apply opacity-75 text-base text-blue-400;
}

.filter-option {
  @apply mb-2 flex;
}

.filter-option__label {
  @apply cursor-pointer font-normal;
}
</style>
