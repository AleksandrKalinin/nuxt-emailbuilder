<template>
  <select class="dropdown">
    <option class="dropdown__option">Solid</option>
    <option class="dropdown__option">Dashed</option>
    <option class="dropdown__option">Dotted</option>
  </select>
</template>

<script setup lang="ts"></script>

<style scoped>
.dropdown {
  @apply h-[30px] px-[10px] border border-slate-300 outline-none;
}
</style>
