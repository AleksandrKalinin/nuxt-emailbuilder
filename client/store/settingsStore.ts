import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", () => {
  const cssSettingsActive = ref<EditorRow[] | MenuSetting[] | null>([]);
  const htmlSettingsActive = ref<EditorRow[] | MenuSetting[] | null>([]);

  const settingsOpen = ref<boolean>(false);

  const toggleSettingsState = (state: boolean) => {
    settingsOpen.value = state;
  };

  const setActiveCssSettings = (properties: SettingsBlock[]) => {
    if (properties) {
      properties.forEach(() => {
        cssSettingsActive.value = properties;
      });
    }
    toggleSettingsState(true);
  };

  const setActiveHtmlSettings = (properties: SettingsBlock[]) => {
    if (properties) {
      properties.forEach(() => {
        htmlSettingsActive.value = properties;
      });
    }
    toggleSettingsState(true);
  };

  return {
    cssSettingsActive,
    htmlSettingsActive,
    settingsOpen,
    toggleSettingsState,
    setActiveCssSettings,
    setActiveHtmlSettings,
  };
});
