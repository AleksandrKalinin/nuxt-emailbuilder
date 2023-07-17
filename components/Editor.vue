<template>
  <div class="editor">
    <!--
    <div class="editor-placeholder">
      Select a component from menu and drop it to create a new element
    </div>
    <EditorItem /> -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.editor {
  @apply max-w-[600px] w-full min-h-[calc(100%-100px)] h-[1000px] border mx-auto bg-white;
}

.editor-placeholder {
  @apply w-full h-full flex justify-center py-[100px] text-center text-slate-600;
}
</style>
