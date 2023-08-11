<template>
  <div class="drowpdown">
    <select
      :value="dropdownValue"
      class="dropdown__select dropdown-select"
      @change="emit('updateEditorItem', props.itemKey, $event.target.value)"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        class="dropdown-select__option"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["options", "property", "itemKey"]);

const emit = defineEmits(["updateEditorItem"]);

const dropdownValue = ref(props.property.value);
</script>

<style scoped>
.dropdown {
  @apply flex;
}
.dropdown__select {
  @apply w-[240px] h-[30px] border border-slate-300 outline-none leading-[30px] h-[30px] px-[10px] outline-none text-sm;
}
</style>
