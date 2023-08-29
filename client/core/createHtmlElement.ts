import { appendNestedIcons } from "@/core/appendNestedIcons";

export const createHtmlElement = (item: EditorElement) => {
  let element = document.createElement(item.tag);
  element.setAttribute("id", item.id);

  for (const key in item.cssProperties) {
    const cssObj = item.cssProperties[key];
    cssObj.unit
      ? (element.style[cssObj.property as any] = cssObj.value + cssObj.unit)
      : (element.style[cssObj.property as any] = cssObj.value);
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
        element!.style[styleProperty.property as any] = styleProperty.value;
      }
    );
  }

  if (item.presetClasses) {
    item.presetClasses.forEach((className: string) => {
      element?.classList.add(className);
    });
  }

  if (item.nestedIcons) {
    element = appendNestedIcons(element, item.nestedIcons, true);
  }

  return element.outerHTML;
};
