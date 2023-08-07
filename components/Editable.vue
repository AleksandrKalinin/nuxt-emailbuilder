<template>
  <textarea
    type="text"
    class="editable resize-none"
    v-model="inputValue"
    :style="elementStyles"
    @input="$emit('updateText', inputValue)"
    ref="textarea"
  >
  </textarea>
</template>

<script setup lang="ts">
const props = defineProps(["el", "rowId", "itemId"]);

const elementStyles = computed(() => {
  console.log("element styles", props.el);
  return props.el.inlineStyles;
});

console.log(props.el.inlineStyles);

const emit = defineEmits(["updateText", "updateElement", "setEditableBlock"]);

const { textarea } = useTextareaAutosize();

const inputValue = ref(props.el.placeholder);

const focusInput = () => {
  const target = textarea.value;
  target.focus();
  emit("setEditableBlock", props.rowId);
};

onMounted(() => {
  focusInput();
});

onClickOutside(textarea, (e) => {
  emit("updateElement", props.itemId, props.el.id, inputValue.value);
  inputValue.value = "";
});
</script>

<style scoped>
.editable {
  background: transparent;
  border-radius: 0;
  border: none;
  outline: 1px solid #60a5fa;
  width: 100%;
  resize: none;
}
</style>
