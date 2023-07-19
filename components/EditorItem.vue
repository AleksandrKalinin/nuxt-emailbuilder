<template>
  <div
    class="editor-item"
    @click="
      setActiveSettings([layoutSettings, typographySettings, actionSettings])
    "
    @mouseenter="toggleItemState(true)"
    @mouseleave="toggleItemState(false)"
    @mouseup="checkState()"
    @dragleave="leaveDropArea($event)"
    @dragenter="enterDropArea($event)"
  >
    <div class="editor-item__wrapper item-wrapper item-wrapper_top">
      <div class="editor-item__placeholder item-placeholder">
        <span class="item-placeholder__text"> Drag it here </span>
      </div>
    </div>
    <div class="editor-item__content item-content">
      {{ text }}
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

import {
  layoutSettings,
  typographySettings,
  imageSettings,
  dimensionsSettings,
  actionSettings,
} from "../constants/settings";

defineProps(["text"]);

const isActive = ref<boolean>(false);

const toggleItemState = (state: boolean) => {
  if (isActive.value !== state) isActive.value = state;
};

const checkState = () => {
  if (selectedMenuItem.value) {
    console.log("selected", selectedMenuItem.value);
  } else {
    console.log("not selected");
  }
};

const areaActive = ref(false);
const eventCounter = ref(0);

const enterDropArea = (event) => {
  eventCounter.value += 1;
  if (selectedMenuItem.value && areaActive.value === false) {
    areaActive.value = true;
    console.log("in area!");
  }
};

const leaveDropArea = (event) => {
  eventCounter.value -= 1;
  if (
    selectedMenuItem.value &&
    areaActive.value === true &&
    eventCounter.value === 0
  ) {
    areaActive.value = false;
    console.log("out of area");
  }
};

const { setActiveSettings } = useSettingsStore();

const { selectedMenuItem } = storeToRefs(useEditorStore());
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
  @apply border border-dashed border-blue-300 w-full h-[150px] flex justify-center items-center items-center bg-blue-100/80 relative;
}

.editor-item__content:hover .editor-item__drag {
  @apply opacity-100;
}

.editor-item .item-wrapper_bottom {
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
