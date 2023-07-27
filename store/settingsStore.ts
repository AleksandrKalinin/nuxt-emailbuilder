import { defineStore } from "pinia";
import { useEditorStore } from "./editorStore";

export const useSettingsStore = defineStore("settings", () => {
  const { selectEditorRow } = useEditorStore();

  const settingsActive = ref<string[] | null>([]);
  const settingsValues = ref<any>([]);
  const menuOpen = ref<boolean>(false);

  const setActiveSettings = (properties) => {
    properties.forEach((element) => {
      settingsActive.value = properties;
    });
    menuOpen.value = true;
  };

  const setSettingsValues = (params) => {
    settingsActive.value = params;
  };

  return {
    settingsActive,
    menuOpen,
    setActiveSettings,
    setSettingsValues,
  };
});
