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
    type: "element",
    element: {
      tag: "div",
      placeholder: "New container",
      options: [layoutSettings, dimensionsSettings],
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
    type: "element",
    element: {
      tag: "h1",
      editable: true,
      options: [typographySettings, dimensionsSettings],
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
        width: {
          cssProperty: "width",
          value: 100,
          unit: "%",
        },
        height: {
          cssProperty: "height",
          value: "auto",
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
    type: "element",
    element: {
      tag: "p",
      editable: true,
      options: [typographySettings, dimensionsSettings],
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
        width: {
          cssProperty: "width",
          value: 100,
          unit: "%",
        },
        height: {
          cssProperty: "height",
          value: "auto",
        },
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
    type: "element",
    element: {
      tag: "div",
      editable: false,
      options: [typographySettings, dimensionsSettings],
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
    type: "element",
    element: {
      tag: "img",
      editable: false,
      options: [dimensionsSettings],
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
        width: {
          cssProperty: "width",
          value: "auto",
        },
        height: {
          cssProperty: "height",
          value: "auto",
        },
      },
      attributes: {
        src: {
          attributeName: "src",
          value: "https://i.imgur.com/SdIjrA0.png",
        },
      },
      style: "",
    },
  },
  {
    title: "Divider",
    icon: "radix-icons:divider-horizontal",
    type: "element",
    element: {
      tag: "div",
      editable: false,
      options: [dimensionsSettings],
      placeholder: "",
      attributes: [],
      initialCssValues: {
        "margin-top": {
          cssProperty: "margin-top",
          value: 5,
          unit: "px",
        },
        "margin-bottom": {
          cssProperty: "margin-bottom",
          value: 5,
          unit: "px",
        },
        "margin-left": {
          cssProperty: "margin-left",
          value: 15,
          unit: "px",
        },
        "margin-right": {
          cssProperty: "margin-right",
          value: 15,
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
        width: {
          cssProperty: "width",
          value: "auto",
        },
        height: {
          cssProperty: "height",
          value: 2,
          unit: "px",
        },
        background: {
          cssProperty: "background",
          value: "#444444",
        },
      },
      style: ["z-50"],
    },
  },
  {
    title: "Table",
    icon: "radix-icons:table",
    type: "element",
    element: {
      tag: "table",
      editable: false,
      options: [typographySettings, dimensionsSettings],
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
    type: "element",
    element: {
      tag: "video",
      editable: false,
      options: [dimensionsSettings],
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
    type: "element",
    element: {
      tag: "html",
      editable: false,
      options: [dimensionsSettings],
      placeholder: "insert your html here",
      attributes: [],
      style: "",
    },
  },
];
