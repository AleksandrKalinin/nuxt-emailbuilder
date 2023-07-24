<template>
  <div
    class="editor-item"
    :class="[
      selectedEditorItem === props.item.id ? 'editor-item_selected' : '',
      isActive ? 'editor-item_hovered' : '',
    ]"
    ref="targetItem"
    :id="props.item.id"
    @click="selectElement($event)"
    @dragleave="leaveDropArea($event)"
    @dragenter="enterDropArea($event)"
    @dragover="($event) => $event.preventDefault()"
    @drop="dropItem(props.item.id)"
  >
    <div class="editor-item__wrapper item-wrapper item-wrapper_top">
      <div class="editor-item__placeholder item-placeholder">
        <span class="item-placeholder__text"> Drag it here </span>
      </div>
    </div>
    <div class="editor-item__content item-content" v-if="!item.children.length">
      {{ item.placeholder }}
    </div>
    <div
      style="
        margin: 0 auto;
        min-width: 100%;
        max-width: 600px;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
        background-color: transparent;
      "
      v-else
      v-for="htmlEl in item.children"
      v-dompurify-html="htmlEl.markup"
    ></div>
    <div class="item-content__drag" draggable="true">
      <Icon name="ant-design:drag-outlined" color="#FFFFFF" size="30px" />
    </div>
    <div class="editor-item__wrapper item-wrapper item-wrapper_bottom">
      <div class="editor-item__placeholder item-placeholder">
        <span class="item-placeholder__text"> Drag it here </span>
      </div>
    </div>
    <div class="editor-item__menu editor-menu">
      <div class="editor-menu__items">
        <div
          class="editor-menu__element"
          title="Delete"
          @click="deleteEditorItem(props.item.id)"
        >
          <Icon name="radix-icons:trash" size="20px" />
        </div>
        <div
          class="editor-menu__element"
          title="Duplicate"
          @click="copyEditorItem(props.item.id)"
        >
          <Icon name="radix-icons:copy" size="20px" />
        </div>
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

const props = defineProps(["item"]);

const isActive = ref<boolean>(false);

const areaActive = ref(false);

const enterDropArea = (event: Event) => {
  isActive.value = true;
  dragEventCounter.value += 1;
  if (selectedMenuItem.value && areaActive.value === false) {
    areaActive.value = true;
  }
};

const leaveDropArea = (event: Event) => {
  event.preventDefault();
  dragEventCounter.value -= 1;
  isActive.value = false;
  if (
    selectedMenuItem.value &&
    areaActive.value === true &&
    dragEventCounter.value === 0
  ) {
    areaActive.value = false;
    if (dragActive.value) {
    }
  }
};

const selectElement = (event: Event) => {
  const target = event.target as HTMLElement;
  setActiveSettings([typographySettings]);
  selectEditorItem(event, target.getAttribute("id"));
};

const targetItem = ref(null);

onClickOutside(targetItem, (e) => {
  // console.log("target");
  // selectEditorItem(e, null);
});

const dropItem = (id: string) => {
  isActive.value = false;
  setDropZone(id);
};

const { setActiveSettings } = useSettingsStore();

const { selectedMenuItem, dragActive, dragEventCounter, selectedEditorItem } =
  storeToRefs(useEditorStore());

const { setDropZone, deleteEditorItem, copyEditorItem, selectEditorItem } =
  useEditorStore();
</script>

<style scoped lang="scss">
.editor-item {
  @apply relative after:opacity-0 after:content-[''] after:border after:border-dashed after:border-blue-300 after:w-[700px] after:absolute after:top-[0] after:left-[-50px] after:h-full;
}

.editor-item_selected {
  @apply after:opacity-100;
}

.editor-item_hovered .editor-item__placeholder {
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
  @apply border border-dashed border-blue-300 text-blue-400 w-full min-h-[80px] h-auto flex flex-col justify-center items-center items-center bg-blue-100/80 relative;
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

.editor-item_selected .editor-item__menu {
  @apply flex;
}
.editor-item__menu {
  @apply absolute bottom-[-55px] right-[5px] bg-white flex z-10 shadow-sm shadow-slate-300/50 hidden;
}

.editor-menu__items {
  @apply relative flex after:absolute after:top-[-10px] after:right-[5px] after:w-[0] after:h-[0px] after:border-solid after:border-t-transparent after:border-r-transparent after:border-b-white after:border-l-transparent after:border-t-[0px] after:border-r-[15px] after:border-b-[15px] after:border-l-[15px];
}

.editor-menu__element {
  @apply p-1 m-1 min-w-[35px] min-h-[35px] flex justify-center items-center cursor-pointer hover:bg-slate-100 transition duration-100;
}
</style>
