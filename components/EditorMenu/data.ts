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
    element: {
      tag: "div",
      placeholder: "New container",
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
    element: {
      tag: "h1",
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
      attributes: [
        {
          attributeName: "contenteditable",
          value: true,
        },
      ],
      style: ["z-50"],
    },
  },
  {
    title: "Text",
    icon: "radix-icons:text",
    options: [typographySettings, dimensionsSettings],
    element: {
      tag: "p",
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
    element: {
      tag: "div",
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
      style: ["button_regular", "mx-auto", "grow-0"],
    },
  },
  {
    title: "Image",
    icon: "radix-icons:image",
    options: [imageSettings],
    element: {
      tag: "img",
      attributes: {
        src: "https://i.imgur.com/SdIjrA0.png",
      },
      style: "",
    },
  },
  {
    title: "Divider",
    icon: "radix-icons:divider-horizontal",
    options: [dimensionsSettings],
    element: {
      tag: "hr",
      attributes: [],
      style: "",
    },
  },
  {
    title: "Table",
    icon: "radix-icons:table",
    options: [typographySettings, dimensionsSettings],
    element: {
      tag: "table",
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
    element: {
      tag: "video",
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
    element: {
      tag: "html",
      placeholder: "insert your html here",
      attributes: [],
      style: "",
    },
  },
];
