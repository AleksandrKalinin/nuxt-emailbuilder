<template>
  <div class="sidebar">
    <ul class="sidebar-block filter">
      <h2 class="sidebar-block__header">PRICE PLAN</h2>
      <li class="filter__option filter-option">
        <div class="h-[20px] w-[20px] rounded-full skeleton-bg mr-2"></div>
        <label
          for="all"
          class="filter-option__label w-full h-[20px] skeleton-bg"
        ></label>
      </li>
      <li class="filter__option filter-option">
        <div class="h-[20px] w-[20px] rounded-full skeleton-bg mr-2"></div>
        <label
          for="free"
          class="filter-option__label w-full h-[20px] skeleton-bg"
        ></label>
      </li>
      <li class="filter__option filter-option">
        <div class="h-[20px] w-[20px] rounded-full skeleton-bg mr-2"></div>
        <label
          for="premium"
          class="filter-option__label w-full h-[20px] skeleton-bg"
        ></label>
      </li>
    </ul>
    <ul class="sidebar-block categories">
      <h2 class="sidebar-block__header">Categories</h2>
      <TransitionGroup>
        <li
          v-for="i in 5"
          :key="i"
          class="categories__option categories-option"
        >
          <label class="categories-option__name mcui-checkbox">
            <div
              class="categories-option__input skeleton-bg h-[18px] w-[18px]"
            ></div>
            <div
              class="categories-option__text skeleton-bg min-w-[176px] h-[18px]"
            ></div>
          </label>
          <span
            class="categories-option__number rounded-full skeleton-bg h-[18px] w-[18px]"
          ></span>
        </li>
      </TransitionGroup>
    </ul>
    <div class="text-md font-medium skeleton-bg h-[24px] skeleton-bg"></div>
  </div>
</template>

<script setup lang="ts"></script>

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
  @apply mx-2;
}

.categories-option__number {
  @apply opacity-75 text-base text-blue-400;
}

.filter-option {
  @apply mb-2 flex;
}

.filter-option__label {
  @apply cursor-pointer font-normal leading-[20px];
}

.categories-enter-active,
.categories-leave-active {
  transition: opacity 0.1s ease;
}

.categories-enter-active {
  transition-delay: 0.15s;
}

.categories-enter-from,
.categories-leave-to {
  opacity: 0.5;
}
</style>
