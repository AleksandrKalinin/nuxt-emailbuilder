export const createHtmlElement = (item: EditorElement) => {
  const element = document.createElement(item.tag);
  element.setAttribute("id", item.id);
  element.addEventListener("click", (e: Event) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
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
