import { createHtmlElement } from "./createHtmlElement";
import { convertStringToHTML } from "@/utils/convertStringtoHTML";
import {
  metaTags,
  ifMso9,
  tableProperties,
  bodyProperties,
  bodyMso,
} from "@/constants/emailCssProperties";

export const createDocument = (data: EditorRow[]) => {
  let newDoc = document.implementation.createHTMLDocument();

  const doctype = document.implementation.createDocumentType(
    "html",
    "-//W3C//DTD XHTML 1.0 Transitional//EN",
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"
  );

  newDoc.doctype?.parentNode?.replaceChild(doctype, newDoc.doctype);
  const docBody = createEmail(data);
  newDoc.body.setAttribute("style", applyStyle(bodyProperties.style));

  const bodyMsoComment = document.createComment(bodyMso);
  newDoc.body.insertBefore(bodyMsoComment, newDoc.body.children[0]);

  for (const key in bodyProperties.attributes) {
    newDoc.body.setAttribute(key, bodyProperties.attributes[key]);
  }

  bodyProperties.class.forEach((className: string) => {
    newDoc.body.classList.add(className);
  });

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

  table.setAttribute("style", applyStyle(tableProperties.style));

  for (const key in tableProperties.attributes) {
    table.setAttribute(key, tableProperties.attributes[key]);
  }

  bodyProperties.class.forEach((className: string) => {
    table.classList.add(className);
  });

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

const applyStyle = (properties: GenericProperty) => {
  let style = "";
  for (const key in properties) {
    const cssProperty = `${key}: ${properties[key]}; `;
    style += cssProperty;
  }
  return style;
};