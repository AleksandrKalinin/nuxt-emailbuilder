import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", () => {
  const settingsActive = ref<string[] | null>([]);
  const menuOpen = ref<boolean>(false);

  const setActiveSettings = (properties) => {
    properties.forEach((element) => {
      settingsActive.value = properties;
    });
    menuOpen.value = true;
  };

  return {
    settingsActive,
    menuOpen,
    setActiveSettings,
  };
});
