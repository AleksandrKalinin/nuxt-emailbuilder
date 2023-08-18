import { mount } from "@vue/test-utils";
import { expect, describe } from "vitest";

import Dropdown from "../components/Inputs/Dropdown.vue";

const options = [
  {
    name: "Arial",
    value: "Arial, sans-serif",
  },
  {
    name: "Times New Roman",
    value: "Times New Roman, sans-serif",
  },
  {
    name: "Georgia",
    value: "Georgia, sans-serif",
  },
];

function mountComponent() {
  const wrapper = mount(Dropdown, {
    propsData: {
      options,
      property: {
        property: "font-family",
        value: "Times New Roman, sans-serif",
      },
      itemKey: "font-family",
    },
  });
  return wrapper;
}

describe("Testing Dropdown component", () => {
  it("Mounts properly", () => {
    expect(mountComponent()).toBeTruthy();
  });

  it("Checking props validity", () => {
    expect(mountComponent().props().itemKey).toBe("font-family");
    expect(mountComponent().props().property.property).toBe("font-family");
    expect(mountComponent().props().property.value).toBe(
      "Times New Roman, sans-serif"
    );
  });

  it("Checking select value", async () => {
    const select = mountComponent().find("select");
    expect(select.element.value).toEqual("Times New Roman, sans-serif");
    await select.trigger("click");
    await mountComponent().find("option:nth-of-type(1)").trigger("click");
    await select.trigger("change");
    expect(select.element.value).toEqual("Times New Roman, sans-serif");
  });
});
