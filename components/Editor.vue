<template>
  <div class="editor">
    <VueDraggableNext class="dragArea list-group w-full" :list="editorRows">
      <div
        v-for="row in editorRows"
        class="editor-row"
        :class="selectedEditorRow?.id === row.id ? 'editor-row_selected' : ''"
        :id="row.id"
        @click="selectElement($event)"
      >
        <EditorItem
          v-for="element in row.items"
          :key="element.id"
          :item="element"
          :style="element.inlineStyles"
          :menuRef="settingsMenuRef"
          :rowId="row.id"
        />
        <div class="editor-row__menu editor-menu">
          <div class="editor-menu__items">
            <div
              class="editor-menu__element"
              title="Delete"
              @click="deleteEditorRow(row.id)"
            >
              <Icon name="radix-icons:trash" size="20px" />
            </div>
            <div
              class="editor-menu__element"
              title="Duplicate"
              @click="copyEditorRow(row.id)"
            >
              <Icon name="radix-icons:copy" size="20px" />
            </div>
          </div>
        </div>
      </div>
    </VueDraggableNext>
    <button class="button button_regular mx-auto mt-3" @click="addEditorRow()">
      Add
    </button>
  </div>
</template>

<script setup lang="ts">
import { VueDraggableNext } from "vue-draggable-next";
import { useEditorStore } from "@/store/editorStore";
import { useSettingsStore } from "@/store/settingsStore";
import { storeToRefs } from "pinia";
import {
  layoutSettings,
  typographySettings,
  imageSettings,
  dimensionsSettings,
  actionSettings,
} from "../constants/settings";

const props = defineProps(["settingsMenuRef"]);

const { createBuildingBlocks, addEditorItem, addEditorRow } = useEditorStore();

const { editorElements, editorRows, selectedEditorRow, currentEditorRowId } =
  storeToRefs(useEditorStore());

const { setActiveSettings } = useSettingsStore();

const {
  selectEditorRow,
  selectEditorElement,
  deleteEditorRow,
  copyEditorRow,
  setEditableItem,
} = useEditorStore();

const selectElement = (event: Event) => {
  const currentTarget = event.currentTarget as HTMLElement;
  const target = event.target as HTMLElement;
  currentEditorRowId.value = currentTarget.getAttribute("id");

  if (target.hasAttribute("data-type")) {
    selectEditorElement(target.getAttribute("id"));
    setActiveSettings([typographySettings, dimensionsSettings]);

    const activeElement = editorElements.value.find(
      (el: EditorElement) => el.id === target.getAttribute("id")
    );

    if (activeElement?.editable) {
      setEditableItem(target.getAttribute("id"));
    }
  } else {
    setActiveSettings([layoutSettings]);
    selectEditorRow(event, currentTarget.getAttribute("id"));
  }
};

onMounted(() => {
  createBuildingBlocks();
});
</script>

<style scoped>
.editor {
  @apply max-w-[600px] w-full min-h-[calc(100%-100px)] h-[1000px] border mx-auto bg-slate-100;
}

.editor-placeholder {
  @apply w-full h-full flex justify-center py-[100px] text-center text-slate-600;
}

.editor-row {
  @apply flex justify-center items-center relative after:opacity-0 after:content-[''] after:border after:border-dashed after:border-blue-300 after:w-[700px] after:absolute after:top-[0] after:left-[-50px] after:h-full;
}

.editor-row_selected {
  @apply after:opacity-100;
}

.editor-row_selected .editor-row__menu {
  @apply flex;
}
.editor-row__menu {
  @apply absolute bottom-[-55px] right-[5px] bg-white flex z-30 shadow-sm shadow-slate-300/50 hidden;
}

.editor-menu__items {
  @apply relative flex after:absolute after:top-[-10px] after:right-[5px] after:w-[0] after:h-[0px] after:border-solid after:border-t-transparent after:border-r-transparent after:border-b-white after:border-l-transparent after:border-t-[0px] after:border-r-[15px] after:border-b-[15px] after:border-l-[15px];
}

.editor-menu__element {
  @apply p-1 m-1 min-w-[35px] min-h-[35px] flex justify-center items-center cursor-pointer hover:bg-slate-100 transition duration-100;
}
</style>
