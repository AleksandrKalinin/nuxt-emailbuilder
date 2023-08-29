import { convertStringToHTML } from "@/utils/convertStringtoHTML";
import {
  metaTags,
  ifMso9,
  tableProperties,
  bodyProperties,
  bodyMso,
  tableCellProperties,
  tableRowProperties,
} from "@/constants/emailCssProperties";
import { createHtmlElement } from "./createHtmlElement";

export const createEmailTemplate = (data: EditorRow[]) => {
  const newDoc = document.implementation.createHTMLDocument();

  const doctype = document.implementation.createDocumentType(
    "html",
    "-//W3C//DTD XHTML 1.0 Transitional//EN",
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"
  );

  newDoc.doctype?.parentNode?.replaceChild(doctype, newDoc.doctype);
  const docBody = createDocumentBody(data);
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

  const serializedDocument = new XMLSerializer().serializeToString(newDoc);

  return serializedDocument;
  // emailService.saveToLocal(serializedDocument);
};

export const createDocumentBody = (data: EditorRow[]) => {
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
    tableRow.setAttribute("style", applyStyle(tableRowProperties));
    row.items.forEach((item: EditorItem) => {
      const tableCell = document.createElement("td");
      tableCell.setAttribute("style", styleTableCell(row.items.length));
      item.children.forEach((element: EditorElement) => {
        const markup = createHtmlElement(element);

        const convertedMarkup = convertStringToHTML(markup);

        tableCell.appendChild(convertedMarkup);
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

const styleTableCell = (cols: number) => {
  let style = "";
  for (const key in tableCellProperties) {
    const cssProperty = `${key}: ${tableCellProperties[key]}; `;
    style += cssProperty;
  }
  const maxWidth = `max-width: ${600 / cols}px`;
  style += maxWidth;
  return style;
};
