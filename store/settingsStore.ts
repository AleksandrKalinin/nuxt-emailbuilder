import { defineStore } from "pinia";
import { useEditorStore } from "./editorStore";

export const useSettingsStore = defineStore("settings", () => {
  const { selectEditorRow } = useEditorStore();

  const settingsActive = ref<EditorRow[] | MenuSetting[] | null>([]);
  const settingsValues = ref<any>([]);
  const menuOpen = ref<boolean>(false);

  const setActiveSettings = (properties: MenuSetting[]) => {
    properties.forEach((element) => {
      settingsActive.value = properties;
    });
    menuOpen.value = true;
  };

  const setSettingsValues = (params: EditorRow[]) => {
    settingsActive.value = params;
  };

  return {
    settingsActive,
    menuOpen,
    setActiveSettings,
    setSettingsValues,
  };
});
