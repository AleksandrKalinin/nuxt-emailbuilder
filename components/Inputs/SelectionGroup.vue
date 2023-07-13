<template>
  <div class="selection-group">
    <div class="selection-group__item selection-item">
      <Icon name="lucide:heading-1" size="20px" />
    </div>
    <div class="selection-group__item selection-item selection-item_selected">
      <Icon name="lucide:heading-2" size="20px" />
    </div>
    <div class="selection-group__item selection-item">
      <Icon name="lucide:heading-3" size="20px" />
    </div>
    <div class="selection-group__item selection-item">
      <Icon name="lucide:heading-4" size="20px" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.selection-group {
  @apply flex;
}

.selection-group > .selection-group__item:not(:first-child) {
  margin-left: -1px;
}

.selection-group__item {
  @apply w-[30px] h-[30px] flex justify-center items-center border transition duration-100;
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
