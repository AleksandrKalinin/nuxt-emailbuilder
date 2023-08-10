<template>
  <div
    class="settings-block settings__block"
    v-for="settingBlock in settingsActive"
  >
    <h4 class="settings-block__header">{{ settingBlock.title }}</h4>
    <div
      class="settings-options__item settings-item"
      v-if="settingBlock.type === 'html'"
    >
      <RawHtml
        :markup="selectedEditorRow?.markup"
        @updateHtml="updateItemHtml"
      />
    </div>
    <div class="settings-block__options settings-options">
      <div
        class="settings-options__item settings-item"
        v-for="option in settingBlock.fields"
        :class="
          option.display === 'row' ? 'settings-item_row' : 'settings-item_col'
        "
      >
        <h5 class="settings-item__header">{{ option.name }}</h5>
        <InputSingle
          v-if="option.type === 'input'"
          :property="selectedItemProperties[option.property]"
          :itemKey="option.property"
          @updateEditorItem="updateItemProperties"
        />
        <InputGroup
          v-if="option.type === 'inputgroup'"
          :items="option.properties"
          :selectedProperties="selectedItemProperties"
          @inputGroupEmit="updateItemProperties"
        />
        <Colorpicker
          :property="selectedItemProperties[option.property]"
          :itemKey="option.property"
          @updateEditorItem="updateItemProperties"
          v-else-if="option.type === 'colorpicker'"
        />
        <Dropdown
          v-if="option.type === 'dropdown'"
          :options="option.options"
          :property="selectedItemProperties[option.property]"
          :itemKey="option.property"
          @updateEditorItem="updateItemProperties"
        />
        <TextField
          v-if="option.type === 'text'"
          :property="selectedItemProperties[option.property]"
          :itemKey="option.property"
          @updateEditorItem="updateItemProperties"
        />
        <SelectionGroup
          v-else-if="option.type === 'selection'"
          :options="option.options"
          :property="selectedItemProperties[option.property]"
          :itemKey="option.property"
          @updateEditorItem="updateItemProperties"
        />
        <LayoutGroup
          v-else-if="option.type === 'layout'"
          :items="option.options"
          :activeRow="selectedEditorRow"
          @updateEditorRow="updateRowLayout"
        />
        <FileUpload v-else-if="option.type === 'fileupload'" />
        <ToggleInput v-else-if="option.type === 'toggle'" />
        <RangeInput
          v-else-if="option.type === 'range'"
          :max="100"
          :min="0"
          :step="1"
          :property="selectedItemProperties[option.property]"
          :itemKey="option.property"
          @updateEditorItem="updateItemProperties"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["selectedEditorRow", "selectedItemProperties", "settingsActive"]);

const emit = defineEmits([
  "updateEditorRowLayout",
  "updateProperties",
  "updateRawHtml",
]);

const updateItemHtml = (code: string) => {
  emit("updateRawHtml", code);
};

const updateItemProperties = (key: string, value: number) => {
  emit("updateProperties", key, value);
};

const updateRowLayout = (value: number) => {
  emit("updateEditorRowLayout", value);
};
</script>

<style scoped>
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
