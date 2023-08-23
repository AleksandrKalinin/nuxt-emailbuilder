import { mount } from "@vue/test-utils";
import { expect, describe } from "vitest";

import InputSingle from "../components/Inputs/InputSingle.vue";

function mountComponent() {
  const wrapper = mount(InputSingle, {
    propsData: {
      property: {
        property: "font-size",
        value: 26,
        unit: "px",
      },
      itemKey: "font-size",
    },
  });
  return wrapper;
}

describe("Testing Input component", () => {
  it("Mounts properly", () => {
    expect(mountComponent()).toBeTruthy();
  });

  it("Checking props validity", () => {
    expect(mountComponent().props().itemKey).toBe("font-size");
    expect(mountComponent().props().property.property).toBe("font-size");
    expect(mountComponent().props().property.value).toBe(26);
    expect(mountComponent().props().property.unit).toBe("px");
  });

  it("Checking input field value", async () => {
    const input = mountComponent().find("input");
    const btnIncrement = mountComponent().find("#btnIncrement");
    const btnDecrement = mountComponent().find("#btnDecrement");
    // console.log(input);
    expect(input.text()).toEqual("");
    await btnIncrement.trigger("click");
    await btnIncrement.trigger("click");
    expect(input.text()).toContain(28);
    await btnDecrement.trigger("click");
    expect(input.text()).toContain(27);
  });
});
