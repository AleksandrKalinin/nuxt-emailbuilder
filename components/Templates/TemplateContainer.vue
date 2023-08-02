<template>
  <div class="templates-container">
    <Template v-for="item in 9" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.templates-container {
  @apply w-full min-h-[calc(100vh-100px)] flex flex-wrap px-10 py-10 gap-5;
}
</style>
