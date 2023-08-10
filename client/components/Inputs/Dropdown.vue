<template>
  <div class="drowpdown">
    <select
      class="dropdown__select dropdown-select"
      @change="emit('updateEditorItem', props.itemKey, $event.target.value)"
      :value="dropdownValue"
    >
      <option
        class="dropdown-select__option"
        v-for="option in options"
        :value="option.value"
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
