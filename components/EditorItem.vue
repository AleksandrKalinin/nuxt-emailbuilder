<template>
  <div class="editor-item">
    <div class="editor-item__placeholder item-placeholder">
      <span class="item-placeholder__text"> Drag it here </span>
    </div>
    <div
      class="editor-item__container item-container"
      @click="console.log('fafefe')"
    >
      No content here yet. Select item from menu and drag it here
      <div class="item-container__drag" draggable="true">
        <Icon name="ant-design:drag-outlined" color="#FFFFFF" size="30px" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useEditorStore } from "@/store/editorStore";
import { useSettingsStore } from "@/store/settingsStore";

const editorStore = useEditorStore();
const settingsStore = useSettingsStore();

const { editorItems } = storeToRefs(editorStore);
const { menuOpen } = storeToRefs(settingsStore);
</script>

<style scoped lang="scss">
.editor-item:hover .editor-item__placeholder {
  @apply block;
}
.editor-item__container {
  @apply border border-dashed border-blue-300 w-full h-[80px] flex justify-center items-center items-center bg-blue-100/80 relative;
}

.editor-item__container:hover .editor-item__drag {
  @apply opacity-100;
}

.item-container__drag {
  @apply absolute top-[50%] right-[-17.5px] h-[35px] w-[35px] bg-blue-200 cursor-pointer rounded-full flex justify-center items-center -translate-y-[50%] transition opacity-0;
}

.editor-item__placeholder {
  @apply w-full bg-blue-400 rounded-md h-[3px] relative z-10 hidden;
}

.item-placeholder__text {
  @apply absolute top-[0] left-[50%] -translate-x-[50%] px-2 py-1 bg-blue-400 rounded-md text-sm text-white;
}
</style>
