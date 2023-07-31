export const tableWrapperProperties = {
  attributes: {
    cellspacing: "0",
    cellpadding: "0",
    role: "presentation",
  },
  styles: {
    "margin-top": 0,
    "margin-bottom": 0,
    "margin-left": 0,
    "margin-right": 0,
    width: 600,
    "max-width": 0,
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
    "margin-top": 0,
    "margin-bottom": 0,
    "margin-left": 0,
    "margin-right": 0,
    "padding-left": 0,
    "font-size": 0,
    color: "#333333",
  },
};

const item2 = {
  type: "a",
  value: "Link",
  attributes: {
    href: "https://www.npmjs.com/package/vue-dompurify-html",
    target: "_blank",
  },
  styling: {
    "margin-top": 0,
    "margin-bottom": 0,
    "margin-left": 0,
    "margin-right": 0,
    "padding-left": 0,
    "font-size": 0,
    color: "#444444",
  },
};

const item3 = {
  type: "div",
  value: "Div element",
  styling: {
    "margin-top": 0,
    "margin-bottom": 0,
    "margin-left": 0,
    "margin-right": 0,
    "padding-left": 0,
    "font-size": 16,
    background: "#ffffff",
    height: "auto",
    width: 600,
    color: "#222222",
  },
};

export const tempItems = [item1, item2, item3];

const block1 = {
  columns: 1,
  id: 1,
  content: [item1, item2],
};

const block2 = {
  columns: 1,
  id: 2,
  content: [item3],
};

export const tempBlocks = [block1, block2];
