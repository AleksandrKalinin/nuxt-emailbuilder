<template>
  <textarea
    ref="textarea"
    v-model="inputValue"
    type="text"
    class="editable resize-none"
    :style="elementStyles"
    @input="$emit('updateText', inputValue)"
  >
  </textarea>
</template>

<script setup lang="ts">
interface EditableProps {
  el: EditorElement;
  rowId: string;
  itemId: string;
}

const props = defineProps<EditableProps>();

const elementStyles = computed(() => {
  return props.el.inlineStyles;
});

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

onClickOutside(textarea, () => {
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
  height: auto;
}
</style>
