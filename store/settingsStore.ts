import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", () => {
  const settingsActive = ref<EditorRow[] | MenuSetting[] | null>([]);
  const settingsValues = ref<any>([]);
  const settingsOpen = ref<boolean>(false);

  const toggleSettingsState = (state: boolean) => {
    settingsOpen.value = state;
  };

  const setActiveSettings = (properties: MenuSetting[]) => {
    properties.forEach(() => {
      settingsActive.value = properties;
    });
    toggleSettingsState(true);
  };

  const setSettingsValues = (params: EditorRow[]) => {
    settingsActive.value = params;
  };

  return {
    settingsActive,
    settingsOpen,
    toggleSettingsState,
    setActiveSettings,
    setSettingsValues,
  };
});
