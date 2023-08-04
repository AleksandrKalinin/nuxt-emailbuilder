import {
  layoutSettings,
  typographySettings,
  dimensionsSettings,
  linkSettings,
  imageSettings,
  videoSettings,
  rawHtmlSettings,
} from "@/constants/settings";

export const header = [
  {
    title: "Layout",
    icon: "radix-icons:layout",
    type: "element",
    element: {
      tag: "div",
      placeholder: "New container",
      cssOptions: [layoutSettings, dimensionsSettings],
      htmlOptions: [],
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
        "background-color": {
          cssProperty: "background-color",
          value: "transparent",
        },
      },
      initialHtmlValues: {},
    },
  },
  {
    title: "Heading",
    icon: "radix-icons:heading",
    type: "element",
    element: {
      tag: "h1",
      editable: true,
      cssOptions: [typographySettings, dimensionsSettings],
      htmlOptions: [],
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
        "background-color": {
          cssProperty: "background-color",
          value: "transparent",
        },
      },
      initialHtmlValues: {},
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
      cssOptions: [typographySettings, dimensionsSettings],
      htmlOptions: [],
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
        "background-color": {
          cssProperty: "background-color",
          value: "transparent",
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
      initialHtmlValues: {},
      style: "",
    },
  },
  {
    title: "Button",
    icon: "radix-icons:button",
    type: "element",
    element: {
      tag: "span",
      editable: false,
      cssOptions: [typographySettings, dimensionsSettings],
      htmlOptions: [linkSettings],
      placeholder: "Button text",
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
          value: 10,
          unit: "px",
        },
        "padding-bottom": {
          cssProperty: "padding-bottom",
          value: 10,
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
        "background-color": {
          cssProperty: "background-color",
          value: "#60A5FA",
        },
        "font-size": {
          cssProperty: "font-size",
          value: 14,
          unit: "px",
        },
        color: {
          cssProperty: "color",
          value: "#FFFFFF",
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
      initialHtmlValues: {
        href: {
          attributeName: "href",
          value: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/video",
        },
        target: {
          attributeName: "target",
          value: "_blank",
        },
        disabled: {
          attributeName: "disabled",
          value: "true",
        },
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
    title: "Spacer",
    icon: "radix-icons:space-evenly-vertically",
    type: "element",
    element: {
      tag: "div",
      editable: false,
      cssOptions: [dimensionsSettings],
      htmlOptions: [],
      placeholder: "",
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
          value: "60",
          unit: "px",
        },
        "background-color": {
          cssProperty: "background-color",
          value: "transparent",
        },
      },
      initialHtmlValues: {},
      style: ["z-50"],
    },
  },
  /*
  {
    title: "Icon",
    icon: "radix-icons:star",
    type: "element",
    element: {
      tag: "span",
      editable: false,
      cssOptions: [typographySettings, dimensionsSettings],
      htmlOptions: [linkSettings],
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
          value: 10,
          unit: "px",
        },
        "padding-bottom": {
          cssProperty: "padding-bottom",
          value: 10,
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
      initialHtmlValues: {
        href: {
          attributeName: "href",
          value: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/video",
        },
        target: {
          attributeName: "target",
          value: "_blank",
        },
        disabled: {
          attributeName: "disabled",
          value: "true",
        },
      },
      style: [],
    },
  }, */
  {
    title: "Image",
    icon: "radix-icons:image",
    type: "element",
    element: {
      tag: "img",
      editable: false,
      cssOptions: [dimensionsSettings],
      htmlOptions: [imageSettings],
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
        "background-color": {
          cssProperty: "background-color",
          value: "transparent",
        },
      },
      initialHtmlValues: {
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
      cssOptions: [dimensionsSettings],
      htmlOptions: [],
      placeholder: "",
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
      initialHtmlValues: {},
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
      cssOptions: [typographySettings, dimensionsSettings],
      htmlOptions: [],
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
      initialHtmlValues: {},
      style: "",
    },
  },
  {
    title: "Video",
    icon: "octicon:video-24",
    type: "element",
    element: {
      tag: "iframe",
      editable: false,
      cssOptions: [dimensionsSettings],
      htmlOptions: [videoSettings],
      initialCssValues: {
        "pointer-events": {
          cssProperty: "pointer-events",
          value: "none",
        },
      },
      initialHtmlValues: {
        autoplay: {
          attributeName: "autoplay",
          value: false,
        },
        controls: {
          attributeName: "controls",
          value: false,
        },
        width: {
          attributeName: "width",
          value: "600",
        },
        height: {
          attributeName: "height",
          value: "300",
        },
        src: {
          attributeName: "src",
          value: "https://www.youtube.com/embed/10q09MMqU9E",
        },
        allowfullscreen: {
          attributeName: "allowfullscreen",
          value: "true",
        },
        title: {
          attributeName: "title",
          value: "Template iframe",
        },
      },
      style: ["iframe_disabled"],
    },
  },
  {
    title: "Html",
    icon: "radix-icons:code",
    type: "element",
    element: {
      tag: "div",
      editable: false,
      cssOptions: [rawHtmlSettings],
      htmlOptions: [],
      placeholder: "insert your html here",
      initialHtmlValues: {},
      style: "",
    },
  },
];
