export const tableWrapperProperties = {
  attributes: {
    cellspacing: "0",
    cellpadding: "0",
    role: "presentation",
  },
  styles: {
    "margin-top": 0,
    "margin-bottom": 0,
    "margin-left": "auto",
    "margin-right": "auto",
    width: "100%",
    "max-width": "600px",
    "border-spacing": 0,
    "mso-cellspacing": 0,
    "mso-padding-alt": 0,
  },
};

const item1 = {
  type: "p",
  value: "Lorem Ipsum dolor sit amen",
  attributes: {},
  styling: {
    "margin-top": "12px",
    "margin-bottom": "12px",
    "margin-left": "6px",
    "margin-right": "6px",
    "padding-left": "30px",
    "font-size": "14px",
    color: "#444444",
  },
};

const item2 = {
  type: "a",
  value: "Link",
  attributes: {
    href: "https://www.npmjs.com/package/vue-dompurify-html",
  },
  styling: {
    "margin-top": "12px",
    "margin-bottom": "12px",
    "margin-left": "6px",
    "margin-right": "6px",
    "padding-left": "30px",
    "font-size": "14px",
    color: "#444444",
  },
};

const item3 = {
  type: "div",
  value: "Div element",
  styling: {
    "margin-top": "12px",
    "margin-bottom": "12px",
    "margin-left": "6px",
    "margin-right": "6px",
    "padding-left": "30px",
    "font-size": "14px",
    background: "#999999",
    height: "20px",
    width: "300px",
    color: "#ffffff",
  },
};

export const tempItems = [item1, item2, item3];

const block1 = {
  columns: 1,
  content: [item1, item2],
};

const block2 = {
  columns: 1,
  content: [item3],
};

export const tempBlocks = [block1, block2];
