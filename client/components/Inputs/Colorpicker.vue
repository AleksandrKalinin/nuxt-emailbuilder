<template>
  <div class="colorpicker">
    <input
      class="colorpicker__input"
      type="text"
      placeholder="auto"
      readonly
      :value="props.property.value"
    /><input
      class="colorpicker__select"
      type="color"
      :value="isColorTransparent"
      @input="setColor($event)"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["property", "itemKey"]);

const isColorTransparent = computed(() => {
  if (props.property.value === "#00FFFFF") {
    return "#FFFFFF";
  } else return props.property.value;
});

const emit = defineEmits(["updateEditorItem"]);

const setColor = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("updateEditorItem", props.itemKey, target.value);
};
</script>

<style scoped>
.colorpicker {
  @apply h-[30px] flex items-start;
}

.colorpicker__input {
  @apply h-[30px] border border-slate-300 px-[5px] outline-none leading-[30px] text-sm;
}

.colorpicker__input::placeholder {
  line-height: 30px;
  font-weight: 300;
}

.colorpicker__select {
  @apply min-h-[30px] min-w-[30px] max-h-[30px] max-w-[30px];
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  margin: 0;
  padding: 0;
  outline: 0;
  overflow: hidden;
  background: transparent;
  cursor: pointer;
}

.colorpicker__select::-webkit-color-swatch {
  border: none;
  @apply min-h-[30px] min-w-[30px] max-h-[30px] max-w-[30px] mt-[-4px] ml-[-2px];
}

.colorpicker__select::-moz-color-swatch {
  border: none;
  @apply min-h-[30px] min-w-[30px] max-h-[30px] max-w-[30px] mt-[-4px] ml-[-2px];
}
</style>
