<template>
  <header class="header">
    <nav class="header-menu">
      <NuxtLink id="templates" to="/" class="header-menu__link"
        >Templates</NuxtLink
      >
      <NuxtLink id="editor" to="/editor" class="header-menu__link"
        >Editor</NuxtLink
      >
    </nav>
    <div class="header-buttons">
      <button
        id="save"
        class="button button_regular button_spaced button_normal"
        @click="saveTemplate(editorRows)"
      >
        Save
      </button>
      <Modal>
        <template #trigger>
          <button
            v-if="onEditor"
            id="export"
            class="button button_regular button_spaced button_normal"
          >
            Export
          </button>
        </template>
      </Modal>
      <AuthModal>
        <template #trigger>
          <button
            id="signup"
            class="button button_regular button_spaced button_normal"
          >
            Sign up
          </button>
        </template>
      </AuthModal>
    </div>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useEditorStore } from "@/store/editorStore";
import { useTemplateStore } from "@/store/templateStore";

const { editorRows } = storeToRefs(useEditorStore());

const { saveTemplate } = useTemplateStore();
const route = useRoute();

const onEditor = computed(() => {
  return route.name === "editor";
});
</script>

<style scoped>
.header {
  @apply w-full h-[100px] flex justify-between items-center px-5 bg-neutral-700;
}

.header-buttons {
  @apply flex;
}

.header-menu {
  @apply flex text-white gap-5;
}
</style>
