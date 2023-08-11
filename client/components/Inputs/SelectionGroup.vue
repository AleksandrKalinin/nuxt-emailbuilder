<template>
  <div class="selection-group">
    <div
      v-for="(item, index) in options"
      :key="index"
      :class="
        item.value === props.property.value ? 'selection-item_selected' : ''
      "
      :title="item.name"
      :value="item.value"
      class="selection-group__item selection-item"
      @click="emit('updateEditorItem', props.itemKey, item.value)"
    >
      <Icon :name="item.icon" size="20px" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["options", "property", "itemKey"]);

const emit = defineEmits(["updateEditorItem"]);
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
