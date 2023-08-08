import { v4 as uuidv4 } from "uuid";
import { defineStore } from "pinia";
import {
  tempBlocks,
  tempItems,
  tableWrapperProperties,
} from "@/constants/editorItems";
import { editorItemSettings } from "@/constants/settings";
import { useSettingsStore } from "./settingsStore";

export const useEditorStore = defineStore("editor", () => {
  const { toggleSettingsState } = useSettingsStore();

  const createInlineStyles = (params: property) => {
    let inlineStyles: string = "";
    for (const item in params) {
      let val: string | number | boolean = params[item].value;
      if (params[item].unit) {
        val += params[item].unit;
      }
      const cssStyle = `${params[item].property} : ${val}; `;
      inlineStyles += cssStyle;
    }
    return inlineStyles;
  };

  const editorItems = ref<any>([
    {
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      children: [],
      placeholder: "No content here. Drag item from menu",
      cssProperties: editorItemSettings,
      inlineStyles: createInlineStyles(editorItemSettings),
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

  const setEditorRows = (rows: EditorRow[]) => {
    editorRows.value = rows;
  };

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

  const selectedEditorRow = ref<EditorElement | EditorRow | null>(null);

  const selectMenuItem = (item: MenuItem | null) => {
    selectedMenuItem.value = item;
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
    item.cssProperties = editorItemSettings;
    item.inlineStyles = createInlineStyles(item.cssProperties);
    editorItems.value.push(item);
    return item;
  };

  const addEditorRow = () => {
    const row = {} as EditorRow;
    row.id = uuidv4();
    row.items = [toRaw(addEditorItem())];
    row.columns = 1;
    row["data-type"] = "block";
    editorRows.value.push(row);
  };

  const deleteEditorRow = (id: string) => {
    if (editorRows.value.length > 1) {
      if (id === selectedEditorRow.value?.id) {
        toggleSettingsState(false);
      }
      const index = editorRows.value.findIndex((item: any) => item.id == id);
      editorRows.value.splice(index, 1);
    }
  };

  const copyEditorRow = (id: string) => {
    const index = editorRows.value.findIndex((row: any) => row.id == id);
    const copiedRow = structuredClone(toRaw(editorRows.value[index]));

    const newEditorItems = copiedRow.items.map((item: EditorItem) => {
      const newElements = item.children.map((el: EditorElement) => {
        el.id = uuidv4();
        el.markup = createHtmlElement(el);
        editorElements.value.push(el);
        return el;
      });
      item.children = newElements;
      item.id = uuidv4();
      editorItems.value.push(item);
      return item;
    });

    copiedRow.id = uuidv4();
    copiedRow.items = newEditorItems;
    editorRows.value.splice(index, 0, copiedRow);
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
    const style: string[] = item.style;
    const newItem = {} as EditorElement;
    newItem.id = uuidv4();
    newItem.tag = tagName;
    newItem.placeholder = placeholder;
    newItem.cssOptions = item.cssOptions;
    newItem.htmlOptions = item.htmlOptions;
    newItem.type = item.type;
    newItem.editable = item.editable;
    newItem.style = style;
    newItem.cssProperties = structuredClone(item.initialCssValues);
    newItem.htmlProperties = structuredClone(item.initialHtmlValues);
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
    element.addEventListener("click", (e: Event) => {
      e.stopPropagation();
      const target = e.target as HTMLElement;
      selectEditorRow(target.getAttribute("id"));
    });

    for (const key in item.cssProperties) {
      const cssObj = item.cssProperties[key];
      cssObj.unit
        ? (element.style[cssObj.property] = cssObj.value + cssObj.unit)
        : (element.style[cssObj.property] = cssObj.value);
    }

    if (item.placeholder) {
      element.innerText = item.placeholder;
    }

    if (item.htmlProperties) {
      for (const key in item.htmlProperties) {
        element.setAttribute(
          item.htmlProperties[key].property,
          item.htmlProperties[key].value
        );
      }
    }

    if (item.style) {
      item.style.forEach((className: string) => {
        element.classList.add(className);
      });
    }

    return element.outerHTML;
  };

  const selectEditorRow = (value: string | null) => {
    if (value) {
      const el = editorRows.value.find((item: any) => item.id == value);
      selectedEditorRow.value = el;
    } else {
      selectedEditorRow.value = null;
    }
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
    editorRows.value.forEach((row: EditorRow) => {
      row.items.forEach((item: EditorItem) => {
        item.children.forEach((element: EditorElement) => {
          if (element.id === selectedEditorRow.value?.id) {
            element.cssProperties[key].value = value;
            element.inlineStyles = createInlineStyles(element.cssProperties);
            element.markup = createHtmlElement(element);
          }
        });
      });
    });
  };

  const updateItemHtmlProperties = (
    key: string,
    value: string | number | boolean
  ) => {
    editorRows.value.forEach((row: EditorRow) => {
      row.items.forEach((item: EditorItem) => {
        item.children.forEach((element: EditorElement) => {
          if (element.id === selectedEditorRow.value?.id) {
            element.htmlProperties[key].value = value;
            element.markup = createHtmlElement(element);
          }
        });
      });
    });
  };

  const editableItem = ref<string | null>(null);

  const setEditableItem = (item: string | null) => {
    editableItem.value = item;
  };

  const editableBlock = ref<string | null>(null);

  const setEditableBlock = (item: string | null) => {
    editableBlock.value = item;
  };

  const extractFromTemplate = (rows: EditorRow[]) => {
    rows.map((row: EditorRow) => {
      row.items.map((item: EditorItem, index: number) => {
        item.children.map((element: EditorElement) => {
          editorItems.push;
          editorElements.value.push(element);
        });
      });
    });
    /*
    rows.map((row: EditorRow) => {
      row.items.map((item: EditorItem, index: number) => {
        item.children.map((element: EditorElement) => {
          editorElements.value.push(element);
          editorItems.value[index].children.push(element);
        });
      });
    }); */
  };

  const updateRawHtml = (html: string) => {
    const index = editorElements.value.findIndex(
      (item) => item.id === selectedEditorRow.value?.id
    );

    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(html, "text/html");
    const htmlBody = parsedHtml.body.children[0];

    htmlBody.setAttribute("id", selectedEditorRow.value?.id);
    htmlBody.setAttribute("data-type", "item");

    const attrs = htmlBody.getAttributeNames().reduce((acc, name) => {
      return { ...acc, [name]: htmlBody.getAttribute(name) };
    }, {});

    editorElements.value[index].markup = htmlBody.outerHTML;

    editorRows.value.forEach((row: EditorRow) => {
      row.items.forEach((item: EditorItem) => {
        const index = item.children.findIndex(
          (el) => el.id === selectedEditorRow.value?.id
        );
        if (index) {
          item.children[index] = editorElements.value[index];
        }
      });
    });
  };

  return {
    editorTemplate,
    editorElements,
    editorItems,
    editorRows,
    createBuildingBlocks,
    selectedMenuItem,
    selectMenuItem,
    addEditorRow,
    updateEditorRowLayout,
    setEditorRows,
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
    updateItemHtmlProperties,
    currentEditorRowId,
    editableItem,
    setEditableItem,
    editableBlock,
    setEditableBlock,
    updateEditorElement,
    extractFromTemplate,
    updateRawHtml,
  };
});
