<template>
  <div class="text-field">
    <input class="text-field__input" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.text-field {
  @apply flex;
}
.text-field__input {
  @apply w-[240px] h-[30px] border border-slate-300 px-[5px] outline-none leading-[30px];
}
</style>
