<template>
  <div class="sidebar">
    <ul class="filter">
      <li class="filter__option filter-option">
        <input type="radio" id="all" class="mr-2" />
        <label for="all" class="filter-option__label">All</label>
      </li>
      <li class="filter__option filter-option">
        <input type="radio" id="free" class="mr-2" />
        <label for="free" class="filter-option__label">Free</label>
      </li>
      <li class="filter__option filter-option">
        <input type="radio" id="premium" class="mr-2" />
        <label for="premium" class="filter-option__label">Premium</label>
      </li>
    </ul>
    <p class="text-md font-medium">Total: 23 templates</p>
  </div>
</template>

<script setup lang="ts"></script>

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
