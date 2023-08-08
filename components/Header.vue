<template>
  <header class="header">
    <button
      class="button button_regular button_spaced"
      @click="createDocument(editorRows)"
    >
      Download
    </button>
    <button class="button button_regular">Log in</button>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useEditorStore } from "@/store/editorStore";
import { createEmail, createDocument } from "@/core/createEmail";

const { editorRows } = storeToRefs(useEditorStore());
</script>

<style scoped>
.header {
  @apply w-full h-[100px] flex justify-end items-center px-5 bg-neutral-700;
}
</style>
