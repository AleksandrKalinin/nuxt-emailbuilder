export {};

declare global {
  interface EditorItem {
    id: string;
    children: any[];
    placeholder: string;
    cssProperties: CssProperty[];
    inlineStyles: "";
  }

  interface CssProperty {
    [key: string]: {
      cssProperty: string;
      value: string | number | boolean;
      unit?: string;
    };
  }
}
