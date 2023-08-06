<template>
  <div class="text-field">
    <input class="text-field__input" v-model="inputValue" />
    <button class="text-field__button" @click.prevent="applyValue(inputValue)">
      Apply
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["property", "itemKey"]);

const emit = defineEmits(["updateEditorItem"]);

console.log("props", props);

const inputValue = ref<string>(props.property.value);

const applyValue = (value: string) => {
  emit("updateEditorItem", props.itemKey, value);
};
</script>

<style scoped>
.text-field {
  @apply flex;
}
.text-field__input {
  @apply w-[240px] h-[30px] border border-slate-300 px-[5px] outline-none leading-[30px];
}

.text-field__button {
  @apply outline-none border-none flex self-start items-center transition duration-200 hover:bg-blue-500 text-sm h-[30px] px-4 ml-2 bg-blue-400 text-white  tracking-[1px];
}
</style>
