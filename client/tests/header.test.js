import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, test, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import Header from "../components/Header.vue";

function mountHeader() {
  const wrapper = mount(Header);
  return wrapper;
}

describe("Checking header", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("click the links", async () => {
    await mountHeader().find("a[id=templates]").trigger("click");

    // expect(push).toHaveBeenCalledOnce();
    // expect(push).toHaveBeenCalledWith("/");
    /*

    await mountHeader().find("a[type=button]").trigger("click");

    expect(push).toHaveBeenCalledTimes(2);
    expect(push).toHaveBeenCalledWith("/about"); */
  });
});
