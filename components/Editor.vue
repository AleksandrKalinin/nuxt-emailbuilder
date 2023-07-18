<template>
  <div class="editor">
    <EditorItem />
    <EditorItem />
    <EditorItem />
    <div v-dompurify-html="editorTemplate"></div>
    <!--
    <template v-for="item in editorBlocks">
      <div v-dompurify-html="item"></div>
    </template> -->
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from "@/store/editorStore";
import { storeToRefs } from "pinia";

const { createBuildingBlocks } = useEditorStore();
const { editorTemplate } = storeToRefs(useEditorStore());

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
