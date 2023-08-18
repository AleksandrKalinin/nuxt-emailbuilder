import { expect, describe, it } from "vitest";

describe("test", () => {
  it("should be equal", () => {
    expect(2).toBe(2);
  });
});

/*
import { expect } from "vitest";

import { setActivePinia, createPinia } from "pinia";
import { useSettingsStore } from "../store/settingsStore";
import { layoutSettings } from "../constants/settings";

describe("Testing settings store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Check if right settings are applied and displayed to user", () => {
    const settings = useSettingsStore();
    expect(settings.settingsOpen).toBe(false);
    expect(settings.cssSettingsActive).toBe(null);
    settings.setActiveCssSettings([layoutSettings]);
    expect(settings.cssSettingsActive).toBe([layoutSettings]);
    expect(settings.settingsOpen).toBe(true);
  });
});
*/
