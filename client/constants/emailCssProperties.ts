export const tableProperties = {
  attributes: {
    cellspacing: "0",
    cellpadding: "0",
    role: "presentation",
  },
  style: {
    "margin-left": "auto",
    "margin-right": "auto",
    "margin-top": 0,
    "margin-bottom": 0,
    "max-width": "600px",
    "border-spacing": 0,
    "mso-cellspacing": 0,
    "mso-padding-alt": 0,
  },
  class: [],
};

export const bodyProperties = {
  attributes: {
    cellspacing: "0",
    cellpadding: "0",
    role: "presentation",
  },
  style: {
    "padding-left": 0,
    "padding-right": 0,
    "padding-top": 0,
    "padding-bottom": 0,
    "margin-top": 0,
    "margin-bottom": 0,
    "margin-left": "auto",
    "margin-right": "auto",
    "background-color": "#FFFFFF",
    "min-width": "100%",
  },
  class: ["ExternalClass"],
};

export const metaTags = [
  {
    properties: [
      {
        name: "http-equiv",
        value: "Content-Type",
      },
      {
        name: "content",
        value: "text/html; charset=UTF-8",
      },
    ],
  },
  {
    properties: [
      {
        name: "name",
        value: "viewport",
      },
      {
        name: "content",
        value: "width=device-width, initial-scale=1.0",
      },
    ],
  },
  {
    properties: [
      {
        name: "name",
        value: "x-apple-disable-message-reformatting",
      },
    ],
  },
];

export const htmlTags = {
  xmlns: "http://www.w3.org/1999/xhtml",
  "xmlns:v": "urn:schemas-microsoft-com:vml",
  "xmlns:o": "urn:schemas-microsoft-com:office:office",
  lang: "en",
};

export const ifMso9 =
  "[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]";

export const bodyMso =
  '[if (gte mso 9)|(IE)]><style type="text/css">  body { background-color: #ffffff !important; }  body,  table,  td,  p,  a {  font-family: sans-serif, Arial, Helvetica !important; }</style><![endif]';

const button = {
  "text-decoration": "none",
  "max-width": "100%",
  "margin-right": "auto",
  "margin-left": "auto",
  "border-radius": 0,
};

const image = {
  "max-width": "100%",
};

export const tableCellProperties = {
  width: "100%",
  display: "inline-block",
  "vertical-align": "top",
  "margin-left": "auto",
  "margin-right": "auto",
};

export const tableRowProperties = {
  "text-align": "center",
};
