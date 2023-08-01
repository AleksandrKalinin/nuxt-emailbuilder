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
import { create } from "domain";

export const useEditorStore = defineStore("editor", () => {
  const { setSettingsValues } = useSettingsStore();

  const createInlineStyles = (params: CssProperty) => {
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
      "data-type": "block",
    },
  ]);

  const currentEditorRowId = ref<string | null>(null);

  const editorBlocks = ref<any>(tempBlocks);
  const editorTemplate = ref<string | null>(null);

  const createOuterTable = (blocks: string[]) => {
    const table = document.createElement("table");
    const attrs: OuterTableAttributes = tableWrapperProperties.attributes;
    const styles: OuterTableStyles = tableWrapperProperties.styles;
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
    const blocks = [] as string[];
    editorBlocks.value.forEach((block: BlockItem) => {
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

  const selectedMenuItem = ref<MenuItem | null>(null);

  const selectMenuItem = (item: MenuItem | null) => {
    selectedMenuItem.value = item;
  };

  const addEditorRow = () => {
    const row = {} as EditorRow;
    row.id = uuidv4();
    row.items = [toRaw(addEditorItem())];
    row.columns = 1;
    row["data-type"] = "block";
    editorRows.value.push(row);
  };

  const updateEditorRowLayout = (cols: number) => {
    const id = selectedEditorRow.value?.id;
    const index = editorRows.value.findIndex(
      (item: EditorRow) => item.id === id
    );
    editorRows.value[index].columns = cols;
    const nestedItems = selectedEditorRow.value?.items.length;
    if (nestedItems! < cols) {
      for (let i = 0; i < cols - nestedItems!; i++) {
        const newEditorItem = addEditorItem();
        editorRows.value[index].items.push(toRaw(newEditorItem));
      }
    } else if (nestedItems! > cols) {
      const newItems = toRaw(editorRows.value)[index].items.slice(
        0,
        -(nestedItems! - cols)
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
    newEditorItems.forEach((el: EditorItem) => {
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
      addEditorElement(activeDropZone.value, item);
    }
    activeDropZone.value = null;
  };

  const editorElements = ref<EditorElement[]>([]);

  const addEditorElement = (id: string, item: any) => {
    const index = editorItems.value.findIndex((item: any) => item.id == id);
    const tagName: string = item.tag;
    const placeholder: string = item.placeholder;
    const attributes: any = item.attributes;
    const style: string[] = item.style;
    const newItem = {} as EditorElement;
    newItem.id = uuidv4();
    newItem.tag = tagName;
    newItem.placeholder = placeholder;
    newItem.attributes = attributes;
    newItem.style = style;
    newItem.cssProperties = structuredClone(item.initialCssValues);
    newItem.inlineStyles = createInlineStyles(item.initialCssValues);
    newItem.markup = createHtmlElement(newItem);
    editorElements.value.push(newItem);
    editorItems.value[index].children.push(newItem);
  };

  const updateEditorElement = (
    itemId: string,
    elementId: string,
    text: string
  ) => {
    console.log("editor items", editorItems.value);
    const editorItemIndex = editorItems.value.findIndex(
      (item: EditorItem) => item.id === itemId
    );
    const editorElementIndex = editorItems.value[
      editorItemIndex
    ].children.findIndex((element: EditorElement) => element.id === elementId);
    const targetElement =
      editorItems.value[editorItemIndex].children[editorElementIndex];
    targetElement.placeholder = text;
    editorItems.value[editorItemIndex].children[editorElementIndex].markup =
      createHtmlElement(targetElement);
    setEditableItem(null);
  };

  const createHtmlElement = (item: EditorElement) => {
    const element = document.createElement(item.tag);
    element.setAttribute("id", item.id);
    element.setAttribute("data-type", "item");
    element.setAttribute("contenteditable", "true");
    element.addEventListener("click", (e: Event) => {
      e.stopPropagation();
      const target = e.target as HTMLElement;
      selectEditorRow(e, target.getAttribute("id"));
    });
    for (const key in item.cssProperties) {
      const cssObj = item.cssProperties[key];
      cssObj.unit
        ? (element.style[cssObj.cssProperty] = cssObj.value + cssObj.unit)
        : (element.style[cssObj.cssProperty] = cssObj.value);
    }
    if (item.placeholder) {
      element.innerText = item.placeholder;
    }
    /*
    if (item.attributes) {
      console.log(item.attributes);
      for (const key in item.attributes) {
        console.log(
          "key is",
          item.attributes[key].attributeName,
          item.attributes[key].value
        );
        element.setAttribute(
          item.attributes[key].attributeName,
          item.attributes[key].value
        );
      }
    }
    */
    if (item.style) {
      item.style.forEach((className: string) => {
        element.classList.add(className);
      });
    }
    return element.outerHTML;
  };

  const selectedEditorRow = ref<EditorElement | EditorRow | null>(null);

  const selectEditorRow = (event: Event, value: string | null) => {
    const el = editorRows.value.find((item: any) => item.id == value);
    selectedEditorRow.value = el;
  };

  const selectEditorElement = (value: string | null) => {
    const el = editorElements.value.find((item: any) => item.id == value);
    if (el) {
      selectedEditorRow.value = el;
    }
  };

  const updateItemCssProperties = (
    key: string,
    value: string | number | boolean
  ) => {
    const index = editorElements.value.findIndex(
      (item) => item.id === selectedEditorRow.value?.id
    );

    editorElements.value[index].cssProperties[key].value = value;

    editorElements.value[index].inlineStyles = createInlineStyles(
      editorElements.value[index].cssProperties
    );
    editorElements.value[index].markup = createHtmlElement(
      editorElements.value[index]
    );

    editorRows.value.forEach((row: EditorRow) => {
      row.items.forEach((item: EditorItem) => {
        const index = item.children.findIndex(
          (el) => el.id === selectedEditorRow.value?.id
        );
        item.children[index] = editorElements.value[index];
      });
    });
  };

  const editableItem = ref<string | null>(null);

  const setEditableItem = (item: string | null) => {
    editableItem.value = item;
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
    selectEditorElement,
    updateItemCssProperties,
    currentEditorRowId,
    editableItem,
    setEditableItem,
    updateEditorElement,
  };
});
