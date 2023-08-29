export {};

declare global {
  interface SocialIcon {
    name: string;
    property: string;
    src: string;
    title: string;
    link: string;
  }

  interface SingleProperty {
    [index: string]: {
      property: string;
      value: string | number | boolean;
      unit?: string;
    };
  }

  interface HtmlProperty {
    [index: string]: {
      property: string;
      value: string;
    };
  }

  interface SettingsFieldOption {
    name: string;
    icon: string;
    value: number | string | boolean;
    default: boolean;
  }

  interface SettingsFieldProperty {
    name: string;
    property: string;
    value: number;
  }

  interface SettingsField {
    display: string;
    name: string;
    property: string;
    type: string;
    properties?: SettingsFieldProperty[];
    value?: string | boolean | number;
    options?: SettingsFieldOption[];
  }

  interface LayoutField {
    display: string;
    name: string;
    property: string;
    type: string;
    options: {
      name: string;
      number: number;
    }[];
  }

  interface SettingsBlock {
    title: string;
    type: string;
    fields: SettingsField[] | LayoutField[];
  }

  interface EditorElement {
    id: string;
    tag: string;
    cssOptions: SettingsBlock[];
    htmlOptions: SettingsBlock[];
    placeholder?: string | undefined;
    markup: string;
    inlineStyles: string;
    stylePreset?: {
      property: string;
      value: string | number;
    }[];
    presetClasses?: string[];
    nestedIcons: SocialIcon[];
    cssProperties: SingleProperty;
    htmlProperties: HtmlProperty;
    initialCssValues?: SingleProperty | undefined;
    initialHtmlValues?: HtmlProperty | undefined;
    editable: boolean;
    type: string;
  }

  interface EditorItem {
    id: string;
    children: EditorElement[];
    placeholder: string;
    cssProperties: SingleProperty;
    inlineStyles: string;
  }

  interface EditorRow {
    title?: string;
    id: string;
    items: EditorItem[];
    columns: number;
    "data-type": string;
  }

  interface EmailTemplate {
    id: string;
    name: string;
    type: string;
    category: string;
    preview: string;
    content: EditorRow[];
    created_at: Date;
  }

  interface InitialHtmlValues<T> {
    [key: string]: T;
  }

  interface MenuItemElement {
    cssOptions: SettingsBlock[];
    editable: true;
    htmlOptions: SettingsBlock[];
    initialCssValues: { [key: string]: SingleProperty };
    initialHtmlValues: { [key: string]: HtmlProperty };
    placeholder: string;
    stylePreset: {
      property: string;
      value: string | number | boolean;
    }[];
    tag: string;
  }

  interface MenuItemOption {}

  interface MenuItem {
    element: MenuItemElement;
    icon: string;
    title: string;
    type: string;
  }

  interface EditorElementCssOption {
    property: string;
    value: number | string | boolean;
    unit?: string;
  }

  interface cssSettingsActive {
    id: string;
    items: EditorItem[];
    columns: 1;
    "data-type": string;
  }

  interface MenuSetting {
    type: string;
    title: string;
  }

  interface BlockAttribute {
    [key: string]: string;
  }

  interface BlockStyling {
    [key: string]: string | number | boolean;
  }

  interface BlockContent {
    attributes: BlockAttribute;
    styling: BlockStyling;
    type: string;
    value: string;
  }

  interface BlockItem {
    columns: number;
    id: 1;
    content: BlockContent[];
  }

  interface OuterTable {}

  interface OuterTableAttributes {
    [key: string]: string;
  }

  interface OuterTableStyles {
    [key: string]: number;
  }

  interface MetaTagItem {
    name: string;
    value: string;
  }

  interface MetaTag {
    properties: MetaTagItem[];
  }

  interface GenericProperty {
    [key: string]: string | number;
  }

  interface PropertiesPreset {
    attributes: GenericProperty;
    classes: GenericProperty;
    style: GenericProperty;
  }

  interface DropdownOption {
    name: string;
    value: string;
  }

  interface LayoutOption {
    name: string;
    number: number;
  }

  interface CypressENV {
    HOME: string;
    USERPROFILE: string;
  }

  interface SelectOption {
    label: string | number;
    selected: boolean;
    number: number;
  }
}
