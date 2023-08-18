<template>
  <header class="header">
    <nav class="header-menu">
      <a id="templates" to="/" class="header-menu__link">Templates</a>
      <a id="editor" to="/editor" class="header-menu__link">Editor</a>
    </nav>
    <div class="header-buttons">
      <button
        class="button button_regular button_spaced"
        @click="createEmailTemplate(editorRows)"
      >
        Download
      </button>
      <button class="button button_regular button_spaced">Log in</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useEditorStore } from "@/store/editorStore";
import { createEmailTemplate } from "@/core/createEmailTemplate";

const { editorRows } = storeToRefs(useEditorStore());
</script>

<style scoped>
.header {
  @apply w-full h-[100px] flex justify-between items-center px-5 bg-neutral-700;
}

.header-buttons {
  @apply flex;
}

.header-menu {
  color: #ffffff;
}

.header-menu__link {
  margin: 0 5px;
}
</style>
