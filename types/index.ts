export {};

declare global {
  interface EmailTemplate {
    id: string;
    name: string;
    category: string;
    preview: string;
    content: EditorRow[];
  }

  interface MenuItem {
    element: any;
    icon: string;
    options: any;
    title: string;
    type: string;
  }

  interface MenuItemElement {
    attributes: string[];
    initialCssValues: any;
    placeholder: string;
    style: string[];
    tag: string;
    editable: false;
  }

  interface MenuItemOption {}

  interface EditorElement {
    id: string;
    tag: string;
    placeholder?: string;
    attributes: any[];
    markup: string;
    inlineStyles: string;
    style: string[];
    cssProperties: CssProperty;
    editable: boolean;
    type: string;
  }

  interface EditorItem {
    id: string;
    children: EditorElement[];
    placeholder: string;
    cssProperties: CssProperty;
    inlineStyles: string;
  }

  interface EditorRow {
    title?: string;
    id: string;
    items: EditorItem[];
    columns: 1;
    "data-type": string;
  }

  interface CssProperty {
    [index: string]: {
      cssProperty: string;
      value: string | number | boolean;
      unit: string;
    };
  }

  interface settingsActive {
    id: string;
    items: EditorItem[];
    columns: 1;
    "data-type": string;
  }

  interface SettingsBlock {}

  interface MenuSetting {
    type: string;
    title: string;
  }

  interface SettingsField {
    display: string;
    name: string;
    property: string;
    type: string;
    value?: string | boolean | number;
    options?: SettingsFieldOption[];
  }

  interface SettingsFieldOption {
    name: string;
    icon: string;
    value: number | string | boolean;
    default: boolean;
  }

  interface BlockItem {
    columns: number;
    id: 1;
    content: BlockContent[];
  }

  interface BlockContent {
    attributes: BlockAttribute;
    styling: BlockStyling;
    type: string;
    value: string;
  }

  interface BlockAttribute {
    [key: string]: string;
  }

  interface BlockStyling {
    [key: string]: string | number | boolean;
  }

  interface OuterTable {}

  interface OuterTableAttributes {
    [key: string]: string;
  }

  interface OuterTableStyles {
    [key: string]: number;
  }
}
