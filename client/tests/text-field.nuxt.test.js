import { mount } from "@vue/test-utils";
import { expect, describe } from "vitest";

import TextField from "../components/Inputs/TextField.vue";

function mountComponent() {
  const wrapper = mount(TextField, {
    propsData: {
      property: {
        property: "href",
        value:
          "https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna",
      },
      itemKey: "href",
    },
  });
  return wrapper;
}

describe("Testing Text field component", () => {
  it("Mounts properly", () => {
    expect(mountComponent()).toBeTruthy();
  });

  it("Checking props validity", () => {
    expect(mountComponent().props().itemKey).toBe("href");
    expect(mountComponent().props().property.property).toBe("href");
    expect(mountComponent().props().property.value).toBe(
      "https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna"
    );
  });

  it("Checking input field value", async () => {
    const input = mountComponent().find("input");
    expect(input.text()).toContain("");
    await input.setValue("https://www.wikipedia.org/");
    expect(input.element.value).toEqual("https://www.wikipedia.org/");
  });
});
