export {};

declare global {
  interface EditorItem {
    id: string;
    children: any[];
    placeholder: string;
    cssProperties: CssProperty[];
    inlineStyles: string;
  }

  interface EditorRow {
    id: string;
    items: EditorItem[];
    columns: 1;
  }

  interface CssProperty {
    [key: string]: {
      cssProperty: string;
      value: string | number | boolean;
      unit?: string;
    };
  }
}
