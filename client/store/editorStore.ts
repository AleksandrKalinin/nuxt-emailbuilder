import { v4 as uuidv4 } from "uuid";
import { defineStore } from "pinia";
import { editorItemSettings } from "@/constants/settings";
import { useSettingsStore } from "@/store/settingsStore";
import { useTemplateStore } from "@/store/templateStore";
import { convertStringToHTML } from "@/utils/convertStringtoHTML";
import { createEmailTemplate } from "@/core/createEmailTemplate";
import emailService from "@/services/emailService";
import { appendNestedIcons } from "@/core/appendNestedIcons";

export const useEditorStore = defineStore("editor", () => {
  const { toggleSettingsState } = useSettingsStore();
  const { uploadTemplateToStorage } = useTemplateStore();

  const createInlineStyles = (params: SingleProperty) => {
    let inlineStyles = "";
    for (const item in params) {
      let val: string | number | boolean = params[item].value;
      if (params[item].unit) {
        val += params[item].unit as string;
      }
      const cssStyle = `${params[item].property} : ${val}; `;
      inlineStyles += cssStyle;
    }
    return inlineStyles;
  };

  const editorItems = ref<EditorItem[]>([
    {
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      children: [],
      placeholder: "No content here. Drag item from menu",
      cssProperties: editorItemSettings,
      inlineStyles: createInlineStyles(editorItemSettings),
    },
  ]);

  const editorRows = ref<EditorRow[]>([
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
    const nestedItems = (selectedEditorRow.value as EditorRow).items.length;

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
      const index = editorRows.value.findIndex((item: any) => item.id === id);
      editorRows.value.splice(index, 1);
    }
  };

  const copyEditorRow = (id: string) => {
    const index = editorRows.value.findIndex((row: EditorRow) => row.id === id);

    const copiedRow = structuredClone(toRaw(editorRows.value[index]));

    const newEditorItems = copiedRow.items.map((item: EditorItem) => {
      const newElements = item.children.map((el: EditorElement) => {
        el.id = uuidv4();
        el.markup = createHtmlElement(el, true);
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

  const addEditorElement = (id: string, item: EditorElement) => {
    const index = editorItems.value.findIndex(
      (item: EditorElement) => item.id === id
    );
    const tagName: string = item.tag;
    const placeholder: string | undefined = item.placeholder;
    const newItem = (({
      tag,
      placeholder,
      cssOptions,
      htmlOptions,
      type,
      editable,
      presetClasses,
      stylePreset,
    }) => ({
      tag,
      placeholder,
      cssOptions,
      htmlOptions,
      type,
      editable,
      presetClasses,
      stylePreset,
    }))(item) as EditorElement;

    newItem.id = uuidv4();

    if (item.initialCssValues) {
      newItem.cssProperties = structuredClone(item.initialCssValues);
      newItem.inlineStyles = createInlineStyles(item.initialCssValues);
    }
    if (item.initialHtmlValues) {
      newItem.htmlProperties = structuredClone(item.initialHtmlValues);
    }

    newItem.nestedIcons = item.nestedIcons;
    newItem.markup = createHtmlElement(newItem, true);

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
      createHtmlElement(targetElement, true);
    setEditableItem(null);
  };

  const replaceTag = (tag: string) => {
    let element: HTMLElement;
    switch (tag) {
      case "a":
        element = document.createElement("span");
        break;
      case "iframe":
        element = document.createElement("div");
        break;
      default:
        element = document.createElement(tag);
        break;
    }

    return element;
  };

  const createHtmlElement = (
    item: EditorElement,
    replacementRequired: boolean
  ) => {
    let element: HTMLElement;
    switch (replacementRequired) {
      case true:
        element = replaceTag(item.tag);
        break;
      case false:
        element = document.createElement(item.tag);
    }

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
        ? ((element.style as any)[cssObj.property] = cssObj.value + cssObj.unit)
        : ((element.style as any)[cssObj.property] = cssObj.value);
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

    if (item.stylePreset) {
      item.stylePreset.forEach(
        (styleProperty: { property: string; value: string | number }) => {
          (element!.style as any)[styleProperty.property] = styleProperty.value;
        }
      );
    }

    if (item.presetClasses) {
      item.presetClasses.forEach((className: string) => {
        element?.classList.add(className);
      });
    }

    if (item.nestedIcons) {
      element = appendNestedIcons(element, item.nestedIcons, false);
    }

    return element.outerHTML;
  };

  const selectEditorRow = (value: string | null) => {
    if (value) {
      const el = editorRows.value.find((item: EditorRow) => item.id === value);
      selectedEditorRow.value = el;
    } else {
      selectedEditorRow.value = null;
    }
  };

  const selectEditorElement = (value: string | null) => {
    const el = editorElements.value.find((item: any) => item.id === value);
    if (el) {
      selectedEditorRow.value = el;
    }
  };

  const updateItemNestedIcons = (icons: SocialIcon[]) => {
    editorRows.value.forEach((row: EditorRow) => {
      row.items.forEach((item: EditorItem) => {
        item.children.forEach((element: EditorElement) => {
          if (element.id === selectedEditorRow.value?.id) {
            element.nestedIcons = icons;
            element.markup = createHtmlElement(element, true);
          }
        });
      });
    });
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
            element.markup = createHtmlElement(element, true);
          }
        });
      });
    });
  };

  const updateItemHtmlProperties = (key: string, value: string) => {
    editorRows.value.forEach((row: EditorRow) => {
      row.items.forEach((item: EditorItem) => {
        item.children.forEach((element: EditorElement) => {
          if (element.id === selectedEditorRow.value?.id) {
            element.htmlProperties[key].value = value;
            element.markup = createHtmlElement(element, true);
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
    editorItems.value = [];
    editorRows.value = [];
    rows.forEach((row: EditorRow) => {
      editorRows.value.push(row);
      row.items.forEach((item: EditorItem) => {
        editorItems.value.push(item);
        item.children.forEach((element: EditorElement) => {
          editorElements.value.push(element);
        });
      });
    });
  };

  const updateRawHtml = (htmlString: string) => {
    const index = editorElements.value.findIndex(
      (item) => item.id === selectedEditorRow.value?.id
    );

    const html = convertStringToHTML(htmlString);

    html.setAttribute("id", selectedEditorRow.value!.id);
    html.setAttribute("data-type", "item");

    editorElements.value[index].markup = html.outerHTML;

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

  const sendEmail = async (email: string) => {
    const template = createEmailTemplate(editorRows.value);
    const filepath = await uploadTemplateToStorage(template);
    if (filepath) {
      await emailService.sendEmail(email, template, filepath);
    }
  };

  return {
    editorElements,
    editorItems,
    editorRows,
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
    sendEmail,
    updateItemNestedIcons,
  };
});
