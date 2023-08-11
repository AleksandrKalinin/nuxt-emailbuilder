<template>
  <Header />
  <div class="editor-outer-wrap">
    <div class="editor-inner-wrap">
      <Editor :settingsMenuRef="settings ? settings.settingsMenu : null" />
    </div>
    <Settings ref="settings" />
    <EditorMenu />
  </div>
</template>
<script setup>
const settings = ref(null);
</script>
<style scoped>
.editor-outer-wrap {
  @apply flex w-full h-[calc(100vh-100px)] overflow-hidden bg-slate-100 relative;
}

.editor-inner-wrap {
  @apply w-[calc(100%-420px)] min-h-full h-auto overflow-y-auto flex py-[50px];
}
</style>
