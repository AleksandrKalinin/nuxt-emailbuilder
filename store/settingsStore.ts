import { defineStore } from "pinia";
import {
  layoutSettings,
  typographySettings,
  imageSettings,
  dimensionsSettings,
} from "../constants/settings";

export const useSettingsStore = defineStore("settings", () => {
  const settingsActive = ref<string[] | null>(null);
  const menuOpen = ref<boolean>(false);

  return {
    settingsActive,
    menuOpen,
  };
});
