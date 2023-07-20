import { v4 as uuidv4 } from "uuid";
import { defineStore } from "pinia";
import {
  tempBlocks,
  tempItems,
  tableWrapperProperties,
} from "@/constants/editorItems";

export const useEditorStore = defineStore("editor", () => {
  const editorItems = ref<any>([
    {
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      children: ["<h1>No heading</h1>"],
      placeholder: "No content here. Drag content from menu",
    },
  ]);

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
  };

  const addEditorItem = () => {
    const item = {};
    item.id = uuidv4();
    item.children = [];
    item.placeholder = "No content here. Drag item from menu";
    editorItems.value.push(item);
  };

  const dragActive = ref(false);

  const dragEventCounter = ref<number>(0);

  const activeDropZone = ref<string | null>(null);

  const setDropZone = (id: string) => {
    activeDropZone.value = id;
  };

  const checkDropZone = (item: any) => {
    if (activeDropZone.value !== null) {
      appendItemToEditorBlock(activeDropZone.value, item);
    }
    activeDropZone.value = null;
  };

  const appendItemToEditorBlock = (id: string, item: any) => {
    const index = editorItems.value.findIndex((item: any) => item.id == id);
    const tagName: string = item.tag;
    const placeholder: string = item.placeholder;
    const element = document.createElement(tagName);
    if (placeholder) {
      element.innerText = placeholder;
    }
    element.innerText = placeholder;
    editorItems.value[index].children.push(element.outerHTML);
  };

  return {
    editorTemplate,
    editorItems,
    createBuildingBlocks,
    selectedMenuItem,
    selectMenuItem,
    addEditorItem,
    dragActive,
    checkDropZone,
    dragEventCounter,
    setDropZone,
  };
});
