<template>
  <div class="editor">
    <!--
    <div v-dompurify-html="editorTemplate"></div> -->
    <VueDraggableNext class="dragArea list-group w-full" :list="editorItems">
      <EditorItem
        v-for="element in editorItems"
        :key="element.id"
        :item="element"
      />
    </VueDraggableNext>
    <button class="button_regular mx-auto mt-3" @click="addEditorItem()">
      Add
    </button>
  </div>
</template>

<script setup lang="ts">
import { VueDraggableNext } from "vue-draggable-next";
import { useEditorStore } from "@/store/editorStore";
import { storeToRefs } from "pinia";

const { createBuildingBlocks, addEditorItem } = useEditorStore();
const { editorTemplate, editorItems } = storeToRefs(useEditorStore());

onMounted(() => {
  createBuildingBlocks();
});
</script>

<style scoped>
.editor {
  @apply max-w-[600px] w-full min-h-[calc(100%-100px)] h-[1000px] border mx-auto bg-slate-100;
}

.editor-placeholder {
  @apply w-full h-full flex justify-center py-[100px] text-center text-slate-600;
}
</style>
