<template>
  <div class="sidebar">
    <ul class="filter">
      <li class="filter__option filter-option">
        <input type="radio" />
      </li>
      <li class="filter__option filter-option">
        <input type="radio" />
      </li>
      <li class="filter__option filter-option">
        <input type="radio" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.sidebar {
  @apply w-[200px] h-[calc(100vh-100px)] p-5;
}
</style>
