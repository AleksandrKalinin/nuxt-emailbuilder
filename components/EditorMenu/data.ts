import {
  layoutSettings,
  typographySettings,
  imageSettings,
  dimensionsSettings,
} from "@/constants/settings";

export const header = [
  {
    title: "Layout",
    icon: "radix-icons:layout",
    options: [layoutSettings, dimensionsSettings],
    type: "element",
    element: {
      tag: "div",
      placeholder: "New container",
      editable: false,
      initialCssValues: {
        "margin-top": {
          cssProperty: "margin-top",
          value: 0,
          unit: "px",
        },
        "margin-bottom": {
          cssProperty: "margin-bottom",
          value: 0,
          unit: "px",
        },
        "margin-left": {
          cssProperty: "margin-left",
          value: 0,
          unit: "px",
        },
        "margin-right": {
          cssProperty: "margin-right",
          value: 0,
          unit: "px",
        },
        "padding-top": {
          cssProperty: "padding-top",
          value: 0,
          unit: "px",
        },
        "padding-bottom": {
          cssProperty: "padding-bottom",
          value: 0,
          unit: "px",
        },
        "padding-left": {
          cssProperty: "padding-left",
          value: 0,
          unit: "px",
        },
        "padding-right": {
          cssProperty: "padding-right",
          value: 0,
          unit: "px",
        },
      },
      attributes: [],
    },
  },
  {
    title: "Heading",
    icon: "radix-icons:heading",
    options: [typographySettings, dimensionsSettings],
    type: "element",
    element: {
      tag: "h1",
      editable: true,
      placeholder: "Heading",
      initialCssValues: {
        "font-size": {
          cssProperty: "font-size",
          value: 26,
          unit: "px",
        },
        color: {
          cssProperty: "color",
          value: "#222222",
        },
        "font-weight": {
          cssProperty: "font-weight",
          value: 400,
        },
        "font-style": {
          cssProperty: "font-style",
          value: "normal",
        },
        "line-height": {
          cssProperty: "line-height",
          value: 36,
          unit: "px",
        },
        "letter-spacing": {
          cssProperty: "letter-spacing",
          value: 1,
          unit: "px",
        },
        "text-align": {
          cssProperty: "text-align",
          value: "left",
        },
        "text-transform": {
          cssProperty: "text-transform",
          value: "none",
        },
      },
      attributes: {
        contenteditable: {
          attributeName: "contenteditable",
          value: true,
        },
      },
      style: ["z-50"],
    },
  },
  {
    title: "Text",
    icon: "radix-icons:text",
    options: [typographySettings, dimensionsSettings],
    type: "element",
    element: {
      tag: "p",
      editable: true,
      initialCssValues: {
        "font-size": {
          cssProperty: "font-size",
          value: 14,
          unit: "px",
        },
        color: {
          cssProperty: "color",
          value: "#222222",
        },
        "font-weight": {
          cssProperty: "font-weight",
          value: 400,
        },
        "font-style": {
          cssProperty: "font-style",
          value: "normal",
        },
        "line-height": {
          cssProperty: "line-height",
          value: 22,
          unit: "px",
        },
        "letter-spacing": {
          cssProperty: "letter-spacing",
          value: 1,
          unit: "px",
        },
        "text-align": {
          cssProperty: "text-align",
          value: "left",
        },
        "text-transform": {
          cssProperty: "text-transform",
          value: "none",
        },
      },
      placeholder: "This is a new text",
      attributes: [],
      style: "",
    },
  },
  {
    title: "Button",
    icon: "radix-icons:button",
    options: [typographySettings, dimensionsSettings],
    type: "element",
    element: {
      tag: "div",
      editable: false,
      placeholder: "Button text",
      initialCssValues: {
        "font-size": {
          cssProperty: "font-size",
          value: 14,
          unit: "px",
        },
        color: {
          cssProperty: "color",
          value: "#ffffff",
        },
        "font-weight": {
          cssProperty: "font-weight",
          value: 400,
        },
        "font-style": {
          cssProperty: "font-style",
          value: "normal",
        },
        "line-height": {
          cssProperty: "line-height",
          value: 22,
          unit: "px",
        },
        "letter-spacing": {
          cssProperty: "letter-spacing",
          value: 1,
          unit: "px",
        },
        "text-align": {
          cssProperty: "text-align",
          value: "left",
        },
        "text-transform": {
          cssProperty: "text-transform",
          value: "none",
        },
        "margin-top": {
          cssProperty: "margin-top",
          value: 0,
          unit: "px",
        },
        "margin-bottom": {
          cssProperty: "margin-bottom",
          value: 0,
          unit: "px",
        },
        "margin-left": {
          cssProperty: "margin-left",
          value: 0,
          unit: "px",
        },
        "margin-right": {
          cssProperty: "margin-right",
          value: 0,
          unit: "px",
        },
        "padding-top": {
          cssProperty: "padding-top",
          value: 0,
          unit: "px",
        },
        "padding-bottom": {
          cssProperty: "padding-bottom",
          value: 0,
          unit: "px",
        },
        "padding-left": {
          cssProperty: "padding-left",
          value: 0,
          unit: "px",
        },
        "padding-right": {
          cssProperty: "padding-right",
          value: 0,
          unit: "px",
        },
        align: {
          cssProperty: "align",
          value: "left",
        },
        width: {
          cssProperty: "width",
          value: 600,
          unit: "px",
        },
        height: {
          cssProperty: "height",
          value: "auto",
        },
      },
      attributes: {
        href: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/video",
      },
      style: [
        "button",
        "button_initial",
        "button_regular",
        "mx-auto",
        "grow-0",
      ],
    },
  },
  {
    title: "Image",
    icon: "radix-icons:image",
    options: [imageSettings],
    type: "element",
    element: {
      tag: "img",
      editable: false,
      attributes: {
        src: "https://i.imgur.com/SdIjrA0.png",
      },
      style: "",
    },
  },
  {
    title: "Divider",
    icon: "radix-icons:divider-horizontal",
    options: [typographySettings],
    type: "element",
    element: {
      tag: "div",
      editable: false,
      placeholder: "fiahfie",
      attributes: [],
      initialCssValues: {
        "font-size": {
          cssProperty: "font-size",
          value: 14,
          unit: "px",
        },
        color: {
          cssProperty: "color",
          value: "#ffffff",
        },
        "font-weight": {
          cssProperty: "font-weight",
          value: 400,
        },
        "font-style": {
          cssProperty: "font-style",
          value: "normal",
        },
        "line-height": {
          cssProperty: "line-height",
          value: 22,
          unit: "px",
        },
        "letter-spacing": {
          cssProperty: "letter-spacing",
          value: 1,
          unit: "px",
        },
        "text-align": {
          cssProperty: "text-align",
          value: "left",
        },
        "text-transform": {
          cssProperty: "text-transform",
          value: "none",
        },
        "margin-top": {
          cssProperty: "margin-top",
          value: 0,
          unit: "px",
        },
        "margin-bottom": {
          cssProperty: "margin-bottom",
          value: 0,
          unit: "px",
        },
        "margin-left": {
          cssProperty: "margin-left",
          value: 0,
          unit: "px",
        },
        "margin-right": {
          cssProperty: "margin-right",
          value: 0,
          unit: "px",
        },
        "padding-top": {
          cssProperty: "padding-top",
          value: 0,
          unit: "px",
        },
        "padding-bottom": {
          cssProperty: "padding-bottom",
          value: 0,
          unit: "px",
        },
        "padding-left": {
          cssProperty: "padding-left",
          value: 0,
          unit: "px",
        },
        "padding-right": {
          cssProperty: "padding-right",
          value: 0,
          unit: "px",
        },
        align: {
          cssProperty: "align",
          value: "left",
        },
        width: {
          cssProperty: "width",
          value: 600,
          unit: "px",
        },
        height: {
          cssProperty: "height",
          value: "auto",
        },
      },
      style: ["z-50"],
    },
  },
  {
    title: "Table",
    icon: "radix-icons:table",
    options: [typographySettings, dimensionsSettings],
    type: "element",
    element: {
      tag: "table",
      editable: false,
      placeholder: "This is a new table",
      initialCssValues: {
        "font-size": {
          cssProperty: "font-size",
          value: 14,
          unit: "px",
        },
        color: {
          cssProperty: "color",
          value: "#222222",
        },
        "font-weight": {
          cssProperty: "font-weight",
          value: 400,
        },
        "font-style": {
          cssProperty: "font-style",
          value: "normal",
        },
        "line-height": {
          cssProperty: "line-height",
          value: 22,
          unit: "px",
        },
        "letter-spacing": {
          cssProperty: "letter-spacing",
          value: 1,
          unit: "px",
        },
        "text-align": {
          cssProperty: "text-align",
          value: "left",
        },
        "text-transform": {
          cssProperty: "text-transform",
          value: "none",
        },
      },
      attributes: [],
      style: "",
    },
  },
  {
    title: "Video",
    icon: "octicon:video-24",
    options: [dimensionsSettings],
    type: "element",
    element: {
      tag: "video",
      editable: false,
      placeholder: "This is a new video",
      attributes: {
        autoplay: false,
        controls: true,
        width: "100%",
        height: "300px",
      },
      style: "",
    },
  },
  {
    title: "Html",
    icon: "radix-icons:code",
    options: [dimensionsSettings],
    type: "element",
    element: {
      tag: "html",
      editable: false,
      placeholder: "insert your html here",
      attributes: [],
      style: "",
    },
  },
];
