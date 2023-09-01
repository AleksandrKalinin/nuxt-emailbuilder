<template>
  <div
    v-for="(settingBlock, index) in settingsActive"
    :key="index"
    class="settings-block settings__block"
  >
    <h4 class="settings-block__header">{{ settingBlock.title }}</h4>
    <div
      v-if="settingBlock.type === 'html'"
      class="settings-options__item settings-item"
    >
      <RawHtml
        :markup="(selectedEditorRow as EditorElement).markup"
        @update-html="updateItemHtml"
      />
    </div>
    <div class="settings-block__options settings-options">
      <div
        v-for="(option, optionIndex) in settingBlock.fields"
        :key="optionIndex"
        class="settings-options__item settings-item"
        :class="
          option.display === 'row' ? 'settings-item_row' : 'settings-item_col'
        "
      >
        <h5 class="settings-item__header">
          {{ option.name }}
          <ToggleInput
            v-if="option.property === 'width'"
            placeholder="Auto"
            :property="
              selectedItemProperties[
                option.property as keyof typeof selectedItemProperties
              ]
            "
            :item-key="option.property"
            @update-editor-item="updateItemProperties"
          />
        </h5>
        <SocialGroup
          v-if="option.type === 'social'"
          :items="option.options"
          :selected-icons="(selectedEditorRow as EditorElement).nestedIcons"
          @update-nested-icons="updateNestedIcons"
        />
        <InputSingle
          v-if="option.type === 'input'"
          :property="
            selectedItemProperties[
              option.property as keyof typeof selectedItemProperties
            ]
          "
          :item-key="option.property"
          @update-editor-item="updateItemProperties"
        />
        <InputGroup
          v-if="option.type === 'inputgroup'"
          :items="(option as SettingsField).properties!"
          :selected-properties="selectedItemProperties"
          @input-group-emit="updateItemProperties"
        />
        <Colorpicker
          v-else-if="option.type === 'colorpicker'"
          :property="
            selectedItemProperties[
              option.property as keyof typeof selectedItemProperties
            ]
          "
          :item-key="option.property"
          @update-editor-item="updateItemProperties"
        />
        <Dropdown
          v-if="option.type === 'dropdown'"
          :options="option.options as DropdownOption[]"
          :property="
            selectedItemProperties[
              option.property as keyof typeof selectedItemProperties
            ]
          "
          :item-key="option.property"
          @update-editor-item="updateItemProperties"
        />
        <TextField
          v-if="option.type === 'text'"
          :property="
            selectedItemProperties[
              option.property as keyof typeof selectedItemProperties
            ]
          "
          :item-key="option.property"
          @update-editor-item="updateItemProperties"
        />
        <SelectionGroup
          v-else-if="option.type === 'selection'"
          :options="option.options as SettingsFieldOption[]"
          :property="
            selectedItemProperties[
              option.property as keyof typeof selectedItemProperties
            ]
          "
          :item-key="option.property"
          @update-editor-item="updateItemProperties"
        />
        <LayoutGroup
          v-else-if="option.type === 'layout'"
          :items="option.options as LayoutOption[]"
          :active-row="selectedEditorRow as EditorRow"
          @update-editor-row="updateRowLayout"
        />
        <FileUpload v-else-if="option.type === 'fileupload'" />
        <Transition>
          <RangeInput
            v-if="
              option.type === 'range' &&
              selectedItemProperties[
                option.property as keyof typeof selectedItemProperties
              ].value !== 'auto'
            "
            :step="1"
            :property="
              selectedItemProperties[
                option.property as keyof typeof selectedItemProperties
              ]
            "
            :item-key="option.property"
            @update-editor-item="updateItemProperties"
          />
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SettingsBlockProps {
  selectedEditorRow: EditorElement | EditorRow;
  selectedItemProperties: SingleProperty;
  settingsActive: SettingsBlock[];
}

defineProps<SettingsBlockProps>();

const emit = defineEmits([
  "updateEditorRowLayout",
  "updateProperties",
  "updateRawHtml",
  "updateNestedIcons",
]);

const updateItemHtml = (code: string) => {
  emit("updateRawHtml", code);
};

const updateItemProperties = (key: string, value: number, unit: string) => {
  emit("updateProperties", key, value, unit);
};

const updateRowLayout = (value: number) => {
  emit("updateEditorRowLayout", value);
};

const updateNestedIcons = (icons: any) => {
  emit("updateNestedIcons", icons);
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
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
  @apply flex justify-between text-base text-slate-800 font-medium tracking-[0.5px] text-sm;
}

.settings-item__properties {
  @apply flex flex-wrap justify-between;
  gap: 20px;
}
</style>
