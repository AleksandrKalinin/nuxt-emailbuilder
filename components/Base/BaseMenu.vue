<template>
  <div class="settings-wrap" ref="target">
    <div class="settings">
      <div
        class="settings-block settings__block"
        v-for="settingBlock in properties"
      >
        <h4 class="settings-block__header">{{ settingBlock.title }}</h4>
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
            <InputSingle v-if="option.type === 'input'" />
            <InputGroup
              v-if="option.type === 'inputgroup'"
              :items="option.properties"
            />
            <Colorpicker v-else-if="option.type === 'colorpicker'" />
            <Dropdown v-if="option.type === 'dropdown'" />
            <SelectionGroup
              v-else-if="option.type === 'selection'"
              :options="option.options"
            />
            <LayoutGroup
              v-else-if="option.type === 'layout'"
              :items="option.options"
            />
            <FileUpload v-else-if="option.type === 'fileupload'" />
            <FileUpload v-else-if="option.type === 'toggle'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  layoutSettings,
  typographySettings,
  imageSettings,
  dimensionsSettings,
} from "../constants/settings";

const properties = [
  layoutSettings,
  dimensionsSettings,
  typographySettings,
  imageSettings,
];

const menu = ref(null);

onClickOutside(target, () => {
  console.log("outside");
});
</script>

<style scoped></style>
