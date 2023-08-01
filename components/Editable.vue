<template>
  <input
    type="text"
    class="editable"
    v-model="inputValue"
    :style="el.inlineStyles"
    @input="$emit('updateText', inputValue)"
    ref="editableElement"
  />
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useEditorStore } from "@/store/editorStore";

const { editorRows } = storeToRefs(useEditorStore());

const props = defineProps(["el", "rowId", "itemId"]);

const emit = defineEmits(["updateText", "updateElement"]);

const inputValue = ref(props.el.placeholder);

const editableElement = ref<HTMLInputElement | null>(null);

const focusInput = () => {
  const target = editableElement.value as HTMLInputElement;
  target.focus();
};

onMounted(() => {
  focusInput();
});

onClickOutside(editableElement, (e) => {
  console.log("outside click element");
  console.log("itemId", props.itemId);
  console.log("props el id", props.el.id);
  emit("updateElement", props.itemId, props.el.id, inputValue.value);
  inputValue.value = "";
});

const updateTextContent = () => {
  const rowIndex = editorRows.value.findIndex(
    (row: EditorRow) => row.id === props.rowId
  );
  const currentRow = editorRows.value[rowIndex];
  const itemIndex = currentRow.items.findIndex(
    (item: EditorItem) => item.id === props.itemId
  );
  const currentItem = currentRow.items[itemIndex];
  const elementIndex = currentItem.children.findIndex(
    (element: EditorElement) => element.id === props.el.id
  );
  editorRows.value[rowIndex].items[itemIndex].children[
    elementIndex
  ].placeholder = "content";
};
</script>

<style scoped>
.editable {
  background: transparent;
  border-radius: 0;
  outline: 1px solid cornflowerblue;
}
</style>
