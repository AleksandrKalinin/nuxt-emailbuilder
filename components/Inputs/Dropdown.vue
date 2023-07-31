<template>
  <div class="drowpdown">
    <select class="dropdown__select dropdown-select">
      <option class="dropdown-select__option" v-for="option in options">
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
defineProps(["options"]);
</script>

<style scoped>
.dropdown {
  @apply flex;
}
.dropdown__select {
  @apply w-[240px] h-[30px] border border-slate-300 outline-none leading-[30px] h-[30px] px-[10px] outline-none;
}
</style>
