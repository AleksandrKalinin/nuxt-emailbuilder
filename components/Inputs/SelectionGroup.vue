<template>
  <div class="selection-group">
    <div
      class="selection-group__item selection-item"
      v-for="item in options"
      :class="item.default ? 'selection-item_selected' : ''"
    >
      <Icon :name="item.icon" size="20px" :title="item.name" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["options"]);
</script>

<style scoped>
.selection-group {
  @apply flex;
}

.selection-group > .selection-group__item:not(:first-child) {
  margin-left: -1px;
}

.selection-group__item {
  @apply w-[30px] h-[30px] flex justify-center items-center border transition duration-100 cursor-pointer;
}

.selection-group__item svg {
  @apply text-slate-600;
}

.selection-item_selected {
  @apply bg-slate-200 border border-blue-400 text-blue-400 z-10;
}

.selection-item_selected svg {
  @apply text-blue-400;
}
</style>
