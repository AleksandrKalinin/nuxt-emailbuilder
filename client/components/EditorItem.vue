<template>
  <div
    class="editor-item"
    :class="[
      selectedEditorRow === props.item.id ? 'editor-item_selected' : '',
      isActive ? 'editor-item_hovered' : '',
    ]"
    :ref="editorItemRef"
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
      <span class="px-3 text-center">{{ item.placeholder }}</span>
    </div>
    <div
      ref="el"
      style="
        margin: 0 auto;
        min-width: 100%;
        max-width: 600px;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
        background-color: transparent;
        line-height: 0;
      "
      v-else
      v-for="htmlEl in item.children"
    >
      <div
        v-if="htmlEl.id !== editableItem"
        v-dompurify-html="htmlEl.markup"
      ></div>
      <div v-else class="editable-wrapper">
        <Editable
          :el="htmlEl"
          :rowId="rowId"
          :itemId="props.item.id"
          @updateText="updateEditableValue"
          @updateElement="updateEditorElement"
          @setEditorBlock="setEditableBlock"
        />
      </div>
    </div>
    <div class="item-content__drag" draggable="true">
      <Icon name="ant-design:drag-outlined" color="#FFFFFF" size="30px" />
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

const props = defineProps(["item", "menuRef", "rowId"]);

const { toggleSettingsState } = useSettingsStore();

const editorItemRef = ref(props.item.id);

const {
  selectedMenuItem,
  dragEventCounter,
  selectedEditorRow,
  editableItem,
  editableBlock,
} = storeToRefs(useEditorStore());

const { setDropZone, selectEditorRow, setEditableBlock, updateEditorElement } =
  useEditorStore();

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
  }
};

const editableValue = ref<string>("");

const updateEditableValue = (text: string) => {
  editableValue.value = text;
};

onClickOutside(editorItemRef, (e) => {
  if (editableBlock.value === props.item.id && editableItem.value) {
    const currentId = editableItem.value as string;
    updateEditorElement(props.item.id, currentId, editableValue.value);
  }
  if (props.menuRef && !props.menuRef.contains(e.target)) {
    toggleSettingsState(false);
    selectEditorRow(null);
  }
});

const dropItem = (id: string) => {
  isActive.value = false;
  setDropZone(id);
};
</script>

<style scoped lang="scss">
.editor-item {
  @apply relative z-20 h-auto self-stretch;
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

.editable-wrapper {
  @apply inline-block w-full leading-[0];
}
</style>
