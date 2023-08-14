<template>
  <div class="text-field">
    <input v-model="inputValue" class="text-field__input" />
    <button class="text-field__button" @click.prevent="applyValue(inputValue)">
      Apply
    </button>
  </div>
</template>

<script setup lang="ts">
interface TextFieldProps {
  property: {
    property: string;
    value: string | number | boolean;
  };
  itemKey: string;
}

const props = defineProps<TextFieldProps>();

const emit = defineEmits(["updateEditorItem"]);

const inputValue = ref<string>(props.property.value as string);

const applyValue = (value: string) => {
  emit("updateEditorItem", props.itemKey, value);
};
</script>

<style scoped>
.text-field {
  @apply flex;
}
.text-field__input {
  @apply w-[240px] h-[30px] border border-slate-300 px-[5px] outline-none leading-[30px] text-sm;
}

.text-field__button {
  @apply outline-none border-none flex self-start items-center transition duration-200 hover:bg-blue-500 text-sm h-[30px] px-4 ml-2 bg-blue-400 text-white text-sm tracking-[1px];
}
</style>
