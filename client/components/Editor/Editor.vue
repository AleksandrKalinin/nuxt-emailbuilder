<template>
  <div id="editorArea" ref="editor" class="editor">
    <div id="editorContent" class="editor-content">
      <VueDraggableNext class="dragArea list-group w-full" :list="editorRows">
        <div
          v-for="row in editorRows"
          :id="row.id"
          :key="row.id"
          class="editor-row"
          :class="selectedEditorRow?.id === row.id ? 'editor-row_selected' : ''"
          @click="selectElement($event)"
        >
          <EditorItem
            v-for="element in row.items"
            :key="element.id"
            :item="element"
            :style="element.inlineStyles"
            :menu-ref="settingsMenuRef"
            :row-id="row.id"
          />
          <div class="editor-row__menu editor-menu">
            <div class="editor-menu__items">
              <div
                class="editor-menu__element"
                :class="isDeleteDisabled ? 'editor-menu__element_disabled' : ''"
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
    </div>
    <div class="editor__button">
      <button
        id="editorBtn"
        class="button button_regular button_normal mx-auto"
        @click="addEditorRow()"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { VueDraggableNext } from "vue-draggable-next";
import { useEditorStore } from "@/store/editorStore";
import { useSettingsStore } from "@/store/settingsStore";
import { layoutSettings } from "@/constants/settings";

interface EditorProps {
  settingsMenuRef: null;
}

defineProps<EditorProps>();

const { addEditorRow } = useEditorStore();

const { editorElements, editorRows, selectedEditorRow, currentEditorRowId } =
  storeToRefs(useEditorStore());

const { setActiveCssSettings, setActiveHtmlSettings } = useSettingsStore();

const {
  selectEditorRow,
  selectEditorElement,
  deleteEditorRow,
  copyEditorRow,
  setEditableItem,
} = useEditorStore();

const isDeleteDisabled = computed(() => {
  return editorRows.value.length === 1;
});

const { setTabsState } = useTabs();

const selectElement = (event: Event) => {
  const currentTarget = event.currentTarget as HTMLElement;
  const target = event.target as HTMLElement;
  currentEditorRowId.value = currentTarget.getAttribute("id");

  if (target.hasAttribute("data-type")) {
    selectEditorElement(target.getAttribute("id"));

    const activeElement = editorElements.value.find(
      (el: EditorElement) => el.id === target.getAttribute("id")
    );

    setActiveCssSettings(activeElement!.cssOptions);
    setActiveHtmlSettings(activeElement!.htmlOptions);

    if (activeElement?.editable) {
      setEditableItem(target.getAttribute("id"));
    }

    setTabsState(true);
  } else {
    const id = currentTarget.getAttribute("id");

    if (id !== selectedEditorRow.value?.id) {
      setActiveCssSettings([layoutSettings]);
    }
    selectEditorRow(currentTarget.getAttribute("id"));
    setTabsState(false);
  }
};

const editor = ref(null);
</script>

<style scoped>
.editor {
  @apply max-w-[600px] w-full min-h-[calc(100%-100px)] h-full border mx-auto bg-slate-100;
}

.editor-content {
  @apply bg-white;
}

.editor-placeholder {
  @apply w-full h-full flex justify-center py-[100px] text-center text-slate-600;
}

.editor-row {
  @apply flex justify-center items-center relative hover:after:opacity-100 after:opacity-0 after:content-[''] after:border after:border-dashed after:border-blue-300 after:w-[700px] after:absolute after:top-[0] after:left-[-50px] after:h-full after:transition;
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

.editor-menu__element_disabled {
  @apply opacity-40 pointer-events-none;
}

.editor__button {
  @apply mb-[50px] pt-[12px];
}
</style>
