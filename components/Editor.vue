<template>
  <div class="editor">
    <EditorItem />
    <EditorItem />
    <EditorItem />
    <div v-dompurify-html="editorTemplate"></div>
    <VueDraggableNext class="dragArea list-group w-full" :list="list">
      <EditorItem
        v-for="element in list"
        :key="element.name"
        :text="element.name"
      />
    </VueDraggableNext>
  </div>
</template>

<script setup lang="ts">
import { VueDraggableNext } from "vue-draggable-next";
import { useEditorStore } from "@/store/editorStore";
import { storeToRefs } from "pinia";

const { createBuildingBlocks } = useEditorStore();
const { editorTemplate } = storeToRefs(useEditorStore());

const list = ref([
  { name: "John", id: 1 },
  { name: "Joao", id: 2 },
  { name: "Jean", id: 3 },
  { name: "Gerard", id: 4 },
]);

onMounted(() => {
  createBuildingBlocks();
});
</script>

<style scoped>
.editor {
  @apply max-w-[600px] w-full min-h-[calc(100%-100px)] h-[1000px] border mx-auto bg-white;
}

.editor-placeholder {
  @apply w-full h-full flex justify-center py-[100px] text-center text-slate-600;
}
</style>
