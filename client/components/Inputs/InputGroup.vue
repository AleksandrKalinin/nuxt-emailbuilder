<template>
  <div class="input-group">
    <div v-for="(item, index) in items" :key="index" class="input-group__item">
      <h6 class="input-group__header">{{ item.name }}</h6>
      <InputSingle
        :property="selectedProperties[item.property]"
        :item-key="item.property"
        @update-editor-item="(a, b) => emit('inputGroupEmit', a, b)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["items", "selectedProperties"]);
const emit = defineEmits(["inputGroupEmit"]);
</script>

<style scoped>
.input-group {
  @apply flex flex-wrap justify-between gap-y-2.5;
}

.input-group__header {
  @apply text-sm text-slate-500 font-medium tracking-[0.5px] mb-2;
}
</style>
