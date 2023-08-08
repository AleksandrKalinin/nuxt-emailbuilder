import { createTableElement } from "./createTableElement";
import { createHtmlElement } from "./createHtmlElement";
import { convertStringToHTML } from "@/utils/convertStringtoHTML";
import { metaTags } from "@/constants/emailCssProperties";

export const createDocument = (data: EditorRow[]) => {
  let newDoc = document.implementation.createHTMLDocument();
  const docBody = createEmail(data);
  newDoc.body.appendChild(docBody);
  metaTags.forEach((metaTag: MetaTag) => {
    const tag = document.createElement("meta");
    metaTag.properties.forEach((property: MetaTagItem) => {
      tag.setAttribute(property.name, property.value);
    });
    newDoc.head.appendChild(tag);
  });
};

export const createEmail = (data: EditorRow[]) => {
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");
  data.forEach((row: EditorRow) => {
    const tableRow = document.createElement("tr");
    row.items.forEach((item: EditorItem) => {
      const tableCell = document.createElement("td");
      item.children.forEach((element: EditorElement) => {
        const htmlMarkup = createHtmlElement(element);
        const htmlElement = convertStringToHTML(htmlMarkup);
        tableCell.appendChild(htmlElement);
      });
      tableRow.appendChild(tableCell);
    });
    tableBody.appendChild(tableRow);
  });
  table.appendChild(tableBody);
  return table;
};
