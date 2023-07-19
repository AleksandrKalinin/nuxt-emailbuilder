import { defineStore } from "pinia";
import {
  tempBlocks,
  tempItems,
  tableWrapperProperties,
} from "@/constants/editorItems";

export const useEditorStore = defineStore("editor", () => {
  const editorItems = ref<any>(tempItems);

  const editorBlocks = ref<any>(tempBlocks);
  const editorTemplate = ref(null);

  const createOuterTable = (blocks) => {
    const table = document.createElement("table");
    const attrs = tableWrapperProperties.attributes;
    const styles = tableWrapperProperties.styles;
    for (const key in attrs) {
      table.setAttribute(key, attrs[key]);
    }
    for (const key in styles) {
      table.style[key] = styles[key];
    }
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    blocks.forEach((block) => {
      td.insertAdjacentHTML("beforeend", block);
    });
    tr.innerHTML = td.outerHTML;
    tbody.innerHTML = tr.outerHTML;
    table.innerHTML = tbody.innerHTML;
    editorTemplate.value = table.outerHTML;
  };

  const createBuildingBlocks = () => {
    const blocks = [];
    editorBlocks.value.forEach((block) => {
      const table = document.createElement("table");
      const tbody = document.createElement("tbody");
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      block.content.forEach((item) => {
        const htmlItem = document.createElement(item.type);
        htmlItem.innerText = item.value;
        for (const key in item.attributes) {
          htmlItem.setAttribute(key, item.attributes[key]);
        }
        for (const key in item.styling) {
          htmlItem.style[key] = item.styling[key];
        }
        td.innerHTML = htmlItem.outerHTML;
        tr.innerHTML = td.outerHTML;
        tbody.insertAdjacentHTML("beforeend", tr.outerHTML);
        table.innerHTML = tbody.outerHTML;
      });
      blocks.push(table.outerHTML);
    });
    createOuterTable(blocks);
    return blocks;
  };

  const selectedMenuItem = ref(null);

  const selectMenuItem = (item) => {
    selectedMenuItem.value = item;
    console.log(selectedMenuItem.value);
  };

  return {
    editorTemplate,
    createBuildingBlocks,
    selectedMenuItem,
    selectMenuItem,
  };
});
