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
          property: "font-size",
          value: 26,
          unit: "px",
        },
        color: {
          property: "color",
          value: "#222222",
        },
        "font-weight": {
          property: "font-weight",
          value: 400,
        },
        "font-style": {
          property: "font-style",
          value: "normal",
        },
        "line-height": {
          property: "line-height",
          value: 36,
          unit: "px",
        },
        "letter-spacing": {
          property: "letter-spacing",
          value: 1,
          unit: "px",
        },
        "text-align": {
          property: "text-align",
          value: "left",
        },
        "text-transform": {
          property: "text-transform",
          value: "none",
        },
        "margin-top": {
          property: "margin-top",
          value: 0,
          unit: "px",
        },
        "margin-bottom": {
          property: "margin-bottom",
          value: 0,
          unit: "px",
        },
        "margin-left": {
          property: "margin-left",
          value: 0,
          unit: "px",
        },
        "margin-right": {
          property: "margin-right",
          value: 0,
          unit: "px",
        },
        "padding-top": {
          property: "padding-top",
          value: 0,
          unit: "px",
        },
        "padding-bottom": {
          property: "padding-bottom",
          value: 0,
          unit: "px",
        },
        "padding-left": {
          property: "padding-left",
          value: 0,
          unit: "px",
        },
        "padding-right": {
          property: "padding-right",
          value: 0,
          unit: "px",
        },
        width: {
          property: "width",
          value: 100,
          unit: "%",
        },
        height: {
          property: "height",
          value: "auto",
        },
        "background-color": {
          property: "background-color",
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
          property: "margin-top",
          value: 0,
          unit: "px",
        },
        "margin-bottom": {
          property: "margin-bottom",
          value: 0,
          unit: "px",
        },
        "margin-left": {
          property: "margin-left",
          value: 0,
          unit: "px",
        },
        "margin-right": {
          property: "margin-right",
          value: 0,
          unit: "px",
        },
        "padding-top": {
          property: "padding-top",
          value: 0,
          unit: "px",
        },
        "padding-bottom": {
          property: "padding-bottom",
          value: 0,
          unit: "px",
        },
        "padding-left": {
          property: "padding-left",
          value: 0,
          unit: "px",
        },
        "padding-right": {
          property: "padding-right",
          value: 0,
          unit: "px",
        },
        width: {
          property: "width",
          value: 100,
          unit: "%",
        },
        height: {
          property: "height",
          value: "auto",
        },
        "background-color": {
          property: "background-color",
          value: "transparent",
        },
        "font-size": {
          property: "font-size",
          value: 14,
          unit: "px",
        },
        color: {
          property: "color",
          value: "#222222",
        },
        "font-weight": {
          property: "font-weight",
          value: 400,
        },
        "font-style": {
          property: "font-style",
          value: "normal",
        },
        "line-height": {
          property: "line-height",
          value: 22,
          unit: "px",
        },
        "letter-spacing": {
          property: "letter-spacing",
          value: 1,
          unit: "px",
        },
        "text-align": {
          property: "text-align",
          value: "left",
        },
        "text-transform": {
          property: "text-transform",
          value: "none",
        },
      },
      placeholder: "This is a new text",
      initialHtmlValues: {},
      style: "",
    },
  },
  {
    title: "List",
    icon: "radix-icons:list-bullet",
    type: "list",
    element: {
      tag: "ul",
      editable: true,
      cssOptions: [typographySettings, dimensionsSettings],
      htmlOptions: [],
      initialCssValues: {
        "margin-top": {
          property: "margin-top",
          value: 0,
          unit: "px",
        },
        "margin-bottom": {
          property: "margin-bottom",
          value: 0,
          unit: "px",
        },
        "margin-left": {
          property: "margin-left",
          value: 0,
          unit: "px",
        },
        "margin-right": {
          property: "margin-right",
          value: 0,
          unit: "px",
        },
        "padding-top": {
          property: "padding-top",
          value: 0,
          unit: "px",
        },
        "padding-bottom": {
          property: "padding-bottom",
          value: 0,
          unit: "px",
        },
        "padding-left": {
          property: "padding-left",
          value: 0,
          unit: "px",
        },
        "padding-right": {
          property: "padding-right",
          value: 0,
          unit: "px",
        },
        width: {
          property: "width",
          value: 100,
          unit: "%",
        },
        height: {
          property: "height",
          value: "auto",
        },
        "background-color": {
          property: "background-color",
          value: "transparent",
        },
        "font-size": {
          property: "font-size",
          value: 14,
          unit: "px",
        },
        color: {
          property: "color",
          value: "#222222",
        },
        "font-weight": {
          property: "font-weight",
          value: 400,
        },
        "font-style": {
          property: "font-style",
          value: "normal",
        },
        "line-height": {
          property: "line-height",
          value: 22,
          unit: "px",
        },
        "letter-spacing": {
          property: "letter-spacing",
          value: 1,
          unit: "px",
        },
        "text-align": {
          property: "text-align",
          value: "left",
        },
        "text-transform": {
          property: "text-transform",
          value: "none",
        },
      },
      placeholder: "This is a new list",
      initialHtmlValues: {},
      style: "",
    },
  },
  {
    title: "Button",
    icon: "radix-icons:button",
    type: "element",
    element: {
      tag: "a",
      editable: false,
      cssOptions: [typographySettings, dimensionsSettings],
      htmlOptions: [linkSettings],
      placeholder: "Button text",
      initialCssValues: {
        "margin-top": {
          property: "margin-top",
          value: 0,
          unit: "px",
        },
        "margin-bottom": {
          property: "margin-bottom",
          value: 0,
          unit: "px",
        },
        "margin-left": {
          property: "margin-left",
          value: 0,
          unit: "px",
        },
        "margin-right": {
          property: "margin-right",
          value: 0,
          unit: "px",
        },
        "padding-top": {
          property: "padding-top",
          value: 10,
          unit: "px",
        },
        "padding-bottom": {
          property: "padding-bottom",
          value: 10,
          unit: "px",
        },
        "padding-left": {
          property: "padding-left",
          value: 0,
          unit: "px",
        },
        "padding-right": {
          property: "padding-right",
          value: 0,
          unit: "px",
        },
        width: {
          property: "width",
          value: "auto",
        },
        height: {
          property: "height",
          value: "auto",
        },
        "background-color": {
          property: "background-color",
          value: "#60A5FA",
        },
        "font-size": {
          property: "font-size",
          value: 14,
          unit: "px",
        },
        color: {
          property: "color",
          value: "#FFFFFF",
        },
        "font-weight": {
          property: "font-weight",
          value: 400,
        },
        "font-style": {
          property: "font-style",
          value: "normal",
        },
        "line-height": {
          property: "line-height",
          value: 22,
          unit: "px",
        },
        "letter-spacing": {
          property: "letter-spacing",
          value: 1,
          unit: "px",
        },
        "text-align": {
          property: "text-align",
          value: "left",
        },
        "text-transform": {
          property: "text-transform",
          value: "none",
        },
      },
      initialHtmlValues: {
        href: {
          property: "href",
          value: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/video",
        },
        target: {
          property: "target",
          value: "_blank",
        },
      },
      style: [
        "button",
        "button_initial",
        "button_regular",
        "mx-auto",
        "grow-0",
        "max-w-[100%]",
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
          property: "margin-top",
          value: 0,
          unit: "px",
        },
        "margin-bottom": {
          property: "margin-bottom",
          value: 0,
          unit: "px",
        },
        "margin-left": {
          property: "margin-left",
          value: 0,
          unit: "px",
        },
        "margin-right": {
          property: "margin-right",
          value: 0,
          unit: "px",
        },
        "padding-top": {
          property: "padding-top",
          value: 0,
          unit: "px",
        },
        "padding-bottom": {
          property: "padding-bottom",
          value: 0,
          unit: "px",
        },
        "padding-left": {
          property: "padding-left",
          value: 0,
          unit: "px",
        },
        "padding-right": {
          property: "padding-right",
          value: 0,
          unit: "px",
        },
        width: {
          property: "width",
          value: 100,
          unit: "%",
        },
        height: {
          property: "height",
          value: "60",
          unit: "px",
        },
        "background-color": {
          property: "background-color",
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
          property: "margin-top",
          value: 0,
          unit: "px",
        },
        "margin-bottom": {
          property: "margin-bottom",
          value: 0,
          unit: "px",
        },
        "margin-left": {
          property: "margin-left",
          value: 0,
          unit: "px",
        },
        "margin-right": {
          property: "margin-right",
          value: 0,
          unit: "px",
        },
        "padding-top": {
          property: "padding-top",
          value: 10,
          unit: "px",
        },
        "padding-bottom": {
          property: "padding-bottom",
          value: 10,
          unit: "px",
        },
        "padding-left": {
          property: "padding-left",
          value: 0,
          unit: "px",
        },
        "padding-right": {
          property: "padding-right",
          value: 0,
          unit: "px",
        },
        width: {
          property: "width",
          value: 100,
          unit: "%",
        },
        height: {
          property: "height",
          value: "auto",
        },
        "font-size": {
          property: "font-size",
          value: 14,
          unit: "px",
        },
        color: {
          property: "color",
          value: "#ffffff",
        },
        "font-weight": {
          property: "font-weight",
          value: 400,
        },
        "font-style": {
          property: "font-style",
          value: "normal",
        },
        "line-height": {
          property: "line-height",
          value: 22,
          unit: "px",
        },
        "letter-spacing": {
          property: "letter-spacing",
          value: 1,
          unit: "px",
        },
        "text-align": {
          property: "text-align",
          value: "left",
        },
        "text-transform": {
          property: "text-transform",
          value: "none",
        },
      },
      initialHtmlValues: {
        href: {
          property: "href",
          value: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/video",
        },
        target: {
          property: "target",
          value: "_blank",
        },
        disabled: {
          property: "disabled",
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
          property: "margin-top",
          value: 0,
          unit: "px",
        },
        "margin-bottom": {
          property: "margin-bottom",
          value: 0,
          unit: "px",
        },
        "margin-left": {
          property: "margin-left",
          value: 0,
          unit: "px",
        },
        "margin-right": {
          property: "margin-right",
          value: 0,
          unit: "px",
        },
        "padding-top": {
          property: "padding-top",
          value: 0,
          unit: "px",
        },
        "padding-bottom": {
          property: "padding-bottom",
          value: 0,
          unit: "px",
        },
        "padding-left": {
          property: "padding-left",
          value: 0,
          unit: "px",
        },
        "padding-right": {
          property: "padding-right",
          value: 0,
          unit: "px",
        },
        width: {
          property: "width",
          value: "auto",
        },
        height: {
          property: "height",
          value: "auto",
        },
        "background-color": {
          property: "background-color",
          value: "transparent",
        },
      },
      initialHtmlValues: {
        src: {
          property: "src",
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
          property: "margin-top",
          value: 5,
          unit: "px",
        },
        "margin-bottom": {
          property: "margin-bottom",
          value: 5,
          unit: "px",
        },
        "margin-left": {
          property: "margin-left",
          value: 15,
          unit: "px",
        },
        "margin-right": {
          property: "margin-right",
          value: 15,
          unit: "px",
        },
        "padding-top": {
          property: "padding-top",
          value: 0,
          unit: "px",
        },
        "padding-bottom": {
          property: "padding-bottom",
          value: 0,
          unit: "px",
        },
        "padding-left": {
          property: "padding-left",
          value: 0,
          unit: "px",
        },
        "padding-right": {
          property: "padding-right",
          value: 0,
          unit: "px",
        },
        width: {
          property: "width",
          value: "auto",
        },
        height: {
          property: "height",
          value: 2,
          unit: "px",
        },
        background: {
          property: "background",
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
    type: "table",
    element: {
      tag: "table",
      editable: false,
      cssOptions: [typographySettings, dimensionsSettings],
      htmlOptions: [],
      placeholder: "This is a new table",
      initialCssValues: {
        "font-size": {
          property: "font-size",
          value: 14,
          unit: "px",
        },
        color: {
          property: "color",
          value: "#222222",
        },
        "font-weight": {
          property: "font-weight",
          value: 400,
        },
        "font-style": {
          property: "font-style",
          value: "normal",
        },
        "line-height": {
          property: "line-height",
          value: 22,
          unit: "px",
        },
        "letter-spacing": {
          property: "letter-spacing",
          value: 1,
          unit: "px",
        },
        "text-align": {
          property: "text-align",
          value: "left",
        },
        "text-transform": {
          property: "text-transform",
          value: "none",
        },
      },
      initialHtmlValues: {},
      style: ["leading-none"],
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
          property: "pointer-events",
          value: "none",
        },
      },
      initialHtmlValues: {
        autoplay: {
          property: "autoplay",
          value: false,
        },
        controls: {
          property: "controls",
          value: false,
        },
        width: {
          property: "width",
          value: "600",
        },
        height: {
          property: "height",
          value: "300",
        },
        src: {
          property: "src",
          value: "https://www.youtube.com/embed/10q09MMqU9E",
        },
        allowfullscreen: {
          property: "allowfullscreen",
          value: "true",
        },
        title: {
          property: "title",
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
      placeholder: "Insert your html code here",
      initialHtmlValues: {},
      style: ["leading-none"],
    },
  },
];
