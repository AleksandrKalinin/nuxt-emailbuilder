import { defineStore } from "pinia";
import { tempItems } from "@/constants/items";

export const useEditorStore = defineStore("settings", () => {
  const editorItems = ref<any>(tempItems);

  const addItem = (item) => {
    editorItems.push(item);
  };

  const createDOMItems = () => {
    const rawHTML = [];
    editorItems.value.forEach((item) => {
      const htmlItem = document.createElement(item.type);
      htmlItem.innerText = item.value;
      for (const key in item.attributes) {
        htmlItem.setAttribute(key, item.attributes[key]);
      }
      for (const key in item.styling) {
        htmlItem.style[key] = item.styling[key];
      }
      const table = document.createElement("table");
      console.log(table);
      const tbody = document.createElement("tbody");
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.innerHTML = htmlItem.outerHTML;
      tr.innerHTML = td.outerHTML;
      tbody.innerHTML = td.outerHTML;
      table.innerHTML = tbody.outerHTML;
      rawHTML.push(table.outerHTML);
    });
    return rawHTML;
  };

  return {
    createDOMItems,
  };
});
