<template>
  <Transition>
    <div v-if="settingsOpen" ref="settingsMenu" class="settings-wrap">
      <div class="settings">
        <!--
        <div v-if="!tabsState" class="tabs">
          <span
            v-for="(item, index) in editorTabs"
            :key="index"
            class="tabs-item"
            :class="currentTab === index ? 'tabs-item_active' : ''"
            @click="setTab(index)"
          >
            {{ item.name }}
          </span>
        </div> -->
        <!--
        <SettingsBlock
          v-if="tabsState"
          :settingsActive="[dimensionsSettings]"
          :selectedEditorRow="editorTabs[currentTab]"
          :selectedItemProperties="
            editorTabs[currentTab].selectedItemProperties
          "
          @updateProperties="updateItemCssProperties"
          @updateEditorRowLayout="updateEditorRowLayout"
          @updateRawHtml="updateRawHtml"
        /> -->
        <!--
        <div
          class="settings-block settings__block"
          v-for="settingBlock in cssSettingsActive"
        >
          <h4 class="settings-block__header">{{ settingBlock.title }}</h4>
          <div
            class="settings-options__item settings-item"
            v-if="settingBlock.type === 'html'"
          >
            <RawHtml
              :markup="selectedEditorRow?.markup"
              @updateHtml="updateRawHtml"
            />
          </div>
          <div class="settings-block__options settings-options">
            <div
              class="settings-options__item settings-item"
              v-for="option in settingBlock.fields"
              :class="
                option.display === 'row'
                  ? 'settings-item_row'
                  : 'settings-item_col'
              "
            >
              <h5 class="settings-item__header">{{ option.name }}</h5>
              <InputSingle
                v-if="option.type === 'input'"
                :property="selectedItemProperties[option.property]"
                :itemKey="option.property"
                @updateEditorItem="updateItemCssProperties"
              />
              <InputGroup
                v-if="option.type === 'inputgroup'"
                :items="option.properties"
                :selectedProperties="selectedItemProperties"
                @inputGroupEmit="updateItemCssProperties"
              />
              <Colorpicker
                :property="selectedItemProperties[option.property]"
                :itemKey="option.property"
                @updateEditorItem="updateItemCssProperties"
                v-else-if="option.type === 'colorpicker'"
              />
              <Dropdown
                v-if="option.type === 'dropdown'"
                :options="option.options"
                :property="selectedItemProperties[option.property]"
                :itemKey="option.property"
              />
              <TextField v-if="option.type === 'text'" />
              <SelectionGroup
                v-else-if="option.type === 'selection'"
                :options="option.options"
                :property="selectedItemProperties[option.property]"
                :itemKey="option.property"
                @updateEditorItem="updateItemCssProperties"
              />
              <LayoutGroup
                v-else-if="option.type === 'layout'"
                :items="option.options"
                :activeRow="selectedEditorRow"
                @updateEditorRow="updateEditorRowLayout"
              />
              <FileUpload v-else-if="option.type === 'fileupload'" />
              <ToggleInput v-else-if="option.type === 'toggle'" />
            </div>
          </div>
        </div> -->
        <SettingsBlock
          v-if="hasCssPropetties"
          :settings-active="cssSettingsActive"
          :selected-editor-row="selectedEditorRow"
          :selected-item-properties="selectedItemProperties"
          @update-properties="updateItemCssProperties"
          @update-editor-row-layout="updateEditorRowLayout"
          @update-raw-html="updateRawHtml"
          @update-nested-icons="updateItemNestedIcons"
        />
        <SettingsBlock
          v-if="hasHtmlAttributes"
          :settings-active="htmlSettingsActive"
          :selected-editor-row="selectedEditorRow"
          :selected-item-properties="selectedItemAttributes"
          @update-properties="updateItemHtmlProperties"
          @update-editor-row-layout="updateEditorRowLayout"
          @update-raw-html="updateRawHtml"
          @update-nested-icons="updateItemNestedIcons"
        />
      </div>
      <KeepAlive>
        <component :is="currentTabComponent" />
      </KeepAlive>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useSettingsStore } from "@/store/settingsStore";
import { useEditorStore } from "@/store/editorStore";

const { settingsOpen, cssSettingsActive, htmlSettingsActive } = storeToRefs(
  useSettingsStore()
);

const { selectedEditorRow } = storeToRefs(useEditorStore());

const {
  updateItemCssProperties,
  updateItemHtmlProperties,
  updateEditorRowLayout,
  updateRawHtml,
  updateItemNestedIcons,
} = useEditorStore();

const { tabsState } = useTabs();

const selectedItemProperties = computed(() => {
  if (selectedEditorRow.value) {
    return selectedEditorRow.value?.cssProperties;
  } else return null;
});

const selectedItemAttributes = computed(() => {
  if (selectedEditorRow.value) {
    return selectedEditorRow.value?.htmlProperties;
  } else return null;
});

const hasCssPropetties = computed(() => {
  return (
    selectedItemProperties && Object.keys(selectedItemProperties).length !== 0
  );
});

const hasHtmlAttributes = computed(() => {
  return (
    selectedItemAttributes.value &&
    Object.keys(selectedItemAttributes.value).length !== 0
  );
});

const settingsMenu = ref(null);

defineExpose({ settingsMenu });

const editorTabs = computed(() => {
  if (selectedEditorRow.value?.items) {
    return selectedEditorRow.value?.items.map(
      (editorItem: EditorItem, index: string) => {
        const item = {
          id: editorItem.id,
          name: `Column ${index + 1}`,
          selectedItemProperties: editorItem.cssProperties,
        };
        return item;
      }
    );
  } else {
    return [];
  }
});

const currentTab: Ref<number> = ref(0);

const currentTabComponent = computed(() => {
  return editorTabs.value[currentTab.value];
});

const setTab = (index: number) => {
  currentTab.value = index;
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(420px);
}

.tabs {
  @apply flex text-base font-semibold w-full box-border;
  -webkit-box-shadow: inset 0px -1px 0px 0px rgba(203, 213, 225, 1);
  -moz-box-shadow: inset 0px -1px 0px 0px rgba(203, 213, 225, 1);
  box-shadow: inset 0px -1px 0px 0px rgba(203, 213, 225, 1);
}

.tabs-item {
  -webkit-box-shadow: inset 0px -1px 0px 0px rgba(203, 213, 225, 1);
  -moz-box-shadow: inset 0px -1px 0px 0px rgba(203, 213, 225, 1);
  box-shadow: inset 0px -1px 0px 0px rgba(203, 213, 225, 1);
  @apply flex w-[90px] h-[50px] justify-center items-center text-center cursor-pointer transition duration-100;
}

.tabs-item_active {
  -webkit-box-shadow: inset 0px -2px 0px 0px rgba(96, 165, 250, 1);
  -moz-box-shadow: inset 0px -2px 0px 0px rgba(96, 165, 250, 1);
  box-shadow: inset 0px -2px 0px 0px rgba(96, 165, 250, 1);
}

.settings-wrap {
  @apply bg-slate-100 w-[420px] flex justify-center h-full overflow-y-auto absolute right-[0] top-0;
}
.settings {
  @apply flex flex-wrap w-full min-h-full h-auto justify-start items-start py-[20px] mb-auto;
}

.settings-block {
  @apply w-full mb-[10px];
}

.settings-block__header {
  @apply bg-slate-200 py-[10px] px-[15px] w-full text-slate-800 cursor-pointer uppercase text-sm tracking-[1.5px];
}

.settings-block__options {
  @apply w-full;
}

.settings-item {
  @apply w-full px-[15px] py-[15px] border-b border-slate-300 flex flex-wrap;
}

.settings-item_col {
  @apply flex-col;
  .settings-item__header {
    @apply mb-3;
  }
}

.settings-item_row {
  @apply justify-between items-center;
}

.settings-item__header {
  @apply text-base text-slate-800 font-medium tracking-[0.5px];
}

.settings-item__properties {
  @apply flex flex-wrap justify-between;
  gap: 20px;
}
</style>
