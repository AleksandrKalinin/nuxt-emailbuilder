<template>
  <Transition>
    <div class="settings-wrap" v-if="menuOpen" ref="target">
      <div class="settings">
        <div
          class="settings-block settings__block"
          v-for="settingBlock in settingsActive"
        >
          <h4 class="settings-block__header">{{ settingBlock.title }}</h4>
          <div class="settings-block__options settings-options">
            <div
              class="settings-options__item settings-item"
              v-for="(option, index) in settingBlock.fields"
              :class="
                option.display === 'row'
                  ? 'settings-item_row'
                  : 'settings-item_col'
              "
            >
              <h5 class="settings-item__header">{{ option.name }}</h5>
              <form>
                <InputSingle
                  v-if="option.type === 'input'"
                  :property="selectedItemProperties[option.property]"
                  :itemKey="option.property"
                  @updateEditorItem="updateItemCssProperties"
                />
                <InputGroup
                  v-if="option.type === 'inputgroup'"
                  :items="option.properties"
                />
                <Colorpicker v-else-if="option.type === 'colorpicker'" />
                <Dropdown
                  v-if="option.type === 'dropdown'"
                  :options="option.options"
                />
                <TextField v-if="option.type === 'text'" />
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useSettingsStore } from "@/store/settingsStore";
import { useEditorStore } from "@/store/editorStore";
import { storeToRefs } from "pinia";

const { menuOpen, settingsActive } = storeToRefs(useSettingsStore());

const { updateItemCssProperties } = useEditorStore();
const { editorItems, selectedEditorItem } = storeToRefs(useEditorStore());

const selectedItemProperties = computed(() => {
  if (selectedEditorItem.value) {
    const item = editorItems.value.find(
      (item: EditorItem) => item.id === selectedEditorItem.value
    );
    return item.cssProperties;
  } else return null;
});

const target = ref(null);

onClickOutside(target, () => {
  menuOpen.value = false;
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(380px);
}

.settings-wrap {
  @apply bg-slate-100 w-[380px] flex justify-center h-full overflow-y-auto absolute right-[0] top-0;
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
