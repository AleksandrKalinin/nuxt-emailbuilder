<template>
  <div class="editor-item">
    <div class="editor-item__wrapper item-wrapper item-wrapper_top">
      <div class="editor-item__placeholder item-placeholder">
        <span class="item-placeholder__text"> Drag it here </span>
      </div>
    </div>
    <div
      class="editor-item__content item-content"
      @click="console.log('fafefe')"
    >
      No content here yet. Select item from menu and drag it here
      <div class="item-content__drag" draggable="true">
        <Icon name="ant-design:drag-outlined" color="#FFFFFF" size="30px" />
      </div>
    </div>
    <div class="editor-item__wrapper item-wrapper item-wrapper_bottom">
      <div class="editor-item__placeholder item-placeholder">
        <span class="item-placeholder__text"> Drag it here </span>
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
.editor-item {
  @apply relative;
}

.editor-item:hover .editor-item__placeholder {
  @apply block;
}

.editor-item__wrapper {
  @apply absolute left-0 w-full;
}

.item-wrapper_top {
  top: 0;
}

.item-wrapper_bottom {
  bottom: 0;
}

.editor-item__content {
  @apply border border-dashed border-blue-300 w-full h-[80px] flex justify-center items-center items-center bg-blue-100/80 relative;
}

.editor-item__content:hover .editor-item__drag {
  @apply opacity-100;
}

.editor-item:not(:last-of-type) .item-wrapper_bottom {
  display: none;
}

.item-content__drag {
  @apply absolute top-[50%] right-[-17.5px] h-[35px] w-[35px] bg-blue-200 cursor-pointer rounded-full flex justify-center items-center -translate-y-[50%] transition opacity-0;
}

.editor-item__placeholder {
  @apply w-full bg-blue-400 rounded-md h-[3px] relative z-10 hidden;
}

.item-wrapper_bottom .item-placeholder .item-placeholder__text {
  @apply bottom-[0];
}

.item-wrapper_top .item-placeholder .item-placeholder__text {
  @apply top-[0];
}
.item-placeholder__text {
  @apply absolute left-[50%] -translate-x-[50%] px-2 py-1 bg-blue-400 rounded-md text-sm text-white;
}
</style>
