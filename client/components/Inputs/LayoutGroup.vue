<template>
  <div class="layout-group">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="activeRow?.columns === item.number ? 'layout-item_active' : ''"
      class="layout-group__item layout-item"
      @click="emit('updateEditorRow', item.number)"
    >
      <span
        v-for="(el, elIndex) in item.number"
        :key="elIndex"
        class="layout-item__column layout-column"
        >{{ el }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
interface LayoutGroupProps {
  activeRow: EditorRow;
  items: LayoutOption[];
}

defineProps<LayoutGroupProps>();

const emit = defineEmits(["updateEditorRow"]);
</script>

<style scoped>
.layout-group {
  @apply flex flex-wrap justify-between gap-y-2.5;
}
.layout-item {
  @apply w-[160px] flex hover:shadow-xl hover:shadow-slate-300/90 transition ease-in-out duration-100 cursor-pointer;
}

.layout-item .layout-item__column:not(:first-child) {
  @apply border-l-[1px] border-slate-300 min-w-[40px];
}

.layout-item__column {
  @apply flex grow bg-slate-200 border border-slate-300 px-3 h-[40px] justify-center items-center text-slate-600;
}

.layout-item.layout-item_active .layout-item__column {
  @apply bg-white;
}
</style>
