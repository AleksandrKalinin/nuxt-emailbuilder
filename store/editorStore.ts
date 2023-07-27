import { v4 as uuidv4 } from "uuid";
import { defineStore } from "pinia";
import { useSettingsStore } from "./settingsStore";
import {
  tempBlocks,
  tempItems,
  tableWrapperProperties,
} from "@/constants/editorItems";
import {
  initialDimensionValues,
  initialTypographyValues,
} from "@/constants/initialCssValues";

export const useEditorStore = defineStore("editor", () => {
  const { setSettingsValues } = useSettingsStore();

  const createInlineStyles = (params: CssProperty[]) => {
    let inlineStyles: string = "";
    for (const item in params) {
      let val: string | number | boolean = params[item].value;
      if (params[item].unit) {
        val += params[item].unit;
      }
      const cssStyle = `${params[item].cssProperty} : ${val}; `;
      inlineStyles += cssStyle;
    }
    return inlineStyles;
  };

  const editorItems = ref<any>([
    {
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      children: [],
      placeholder: "No content here. Drag item from menu",
      cssProperties: initialDimensionValues,
      inlineStyles: createInlineStyles(initialDimensionValues),
    },
  ]);

  const editorRows = ref<any>([
    {
      id: "c089b428-f859-465c-ae77-83a9d00a2cc3",
      items: [toRaw(editorItems.value[0])],
      columns: 1,
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

  const addEditorRow = () => {
    const row = {} as EditorRow;
    row.id = uuidv4();
    row.items = [toRaw(addEditorItem())];
    row.columns = 1;
    editorRows.value.push(row);
  };

  const updateEditorRowLayout = (cols: number) => {
    const id = selectedEditorRow.value?.id;
    const index = editorRows.value.findIndex(
      (item: EditorRow) => item.id === id
    );
    editorRows.value[index].columns = cols;
    const nestedItems = selectedEditorRow.value?.items.length;
    if (nestedItems < cols) {
      for (let i = 0; i < cols - nestedItems; i++) {
        const newEditorItem = addEditorItem();
        editorRows.value[index].items.push(toRaw(newEditorItem));
      }
    } else if (nestedItems > cols) {
      const newItems = toRaw(editorRows.value)[index].items.slice(
        0,
        -(nestedItems - cols)
      );
      editorRows.value[index].items = toRaw(newItems);
    }
  };

  const addEditorItem = () => {
    const item = {} as EditorItem;
    item.id = uuidv4();
    item.children = [];
    item.placeholder = "No content here. Drag item from menu";
    item.cssProperties = initialDimensionValues;
    item.inlineStyles = createInlineStyles(item.cssProperties);
    editorItems.value.push(item);
    return item;
  };

  const deleteEditorRow = (id: string) => {
    const index = editorRows.value.findIndex((item: any) => item.id == id);
    editorRows.value.splice(index, 1);
  };

  const copyEditorRow = (id: string) => {
    const index = editorRows.value.findIndex((item: any) => item.id == id);
    const copiedItem = structuredClone(toRaw(editorRows.value[index]));
    const newEditorItems = copiedItem.items;
    newEditorItems.forEach((el) => {
      el.id = uuidv4();
      editorItems.value.push(el);
    });
    copiedItem.id = uuidv4();
    copiedItem.items = newEditorItems;
    editorRows.value.splice(index, 0, copiedItem);
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
    const attributes: any = item.attributes;
    const style: string[] = item.style;
    const element = document.createElement(tagName);
    const newItem = {} as any;
    newItem.id = uuidv4();
    newItem.tag = tagName;
    newItem.placeholder = placeholder;
    newItem.attributes = attributes;
    newItem.style = style;
    element.setAttribute("id", newItem.id);
    element.addEventListener("click", (e) => {
      console.log("clicked");
      e.stopPropagation();
      const target = e.target as HTMLElement;
      selectEditorRow(e, target.getAttribute("id"));
    });
    if (placeholder) {
      element.innerText = placeholder;
    }
    if (attributes) {
      for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
      }
    }
    if (style) {
      style.forEach((className) => {
        element.classList.add(className);
      });
    }
    newItem.markup = element.outerHTML;
    editorItems.value[index].children.push(newItem);
  };

  const selectedEditorRow = ref<EditorRow | null>(null);

  const selectEditorRow = (event: Event, value: string | null) => {
    const el = editorRows.value.find((item: any) => item.id == value);
    selectedEditorRow.value = el;
    if (value) {
      // setSettingsValues(editorItems.value[index].styles);
    }
  };

  const updateItemCssProperties = (
    key: string,
    value: string | number | boolean
  ) => {
    const index = editorItems.value.findIndex(
      (item) => item.id === selectedEditorRow.value
    );

    editorItems.value[index].cssProperties[key].value = value;
    editorItems.value[index].inlineStyles = createInlineStyles(
      editorItems.value[index].cssProperties
    );
  };

  return {
    editorTemplate,
    editorItems,
    editorRows,
    createBuildingBlocks,
    selectedMenuItem,
    selectMenuItem,
    addEditorRow,
    updateEditorRowLayout,
    addEditorItem,
    deleteEditorRow,
    copyEditorRow,
    dragActive,
    checkDropZone,
    dragEventCounter,
    setDropZone,
    selectedEditorRow,
    selectEditorRow,
    updateItemCssProperties,
  };
});
