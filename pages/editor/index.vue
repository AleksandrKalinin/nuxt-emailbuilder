<template>
  <Header />
  <div class="editor-outer-wrap">
    <div class="editor-inner-wrap">
      <Editor />
    </div>
    <Settings />
    <EditorMenu />
  </div>
</template>
<style scoped>
.editor-outer-wrap {
  @apply flex w-full h-[calc(100vh-100px)] overflow-hidden bg-slate-100 relative;
}

.editor-inner-wrap {
  @apply w-[calc(100%-380px)] min-h-full h-auto overflow-y-auto flex py-[50px];
}
</style>
