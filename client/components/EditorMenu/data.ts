import {
  typographySettings,
  dimensionsSettings,
  linkSettings,
  imageSettings,
  videoSettings,
  rawHtmlSettings,
  borderSettings,
  hoverSettings,
  socialSettings,
  iconSettings,
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
        "font-family": {
          property: "font-family",
          value: "Times New Roman, sans-serif",
        },
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
        "text-decoration": {
          property: "text-decoration",
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
          value: 36,
          unit: "px",
        },
        "background-color": {
          property: "background-color",
          value: "#00FFFFF",
        },
      },
      initialHtmlValues: {},
      stylePreset: [
        {
          property: "z-index",
          value: 50,
        },
        {
          property: "box-sizing",
          value: "border-box",
        },
      ],
      presetClasses: [],
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
          value: "#00FFFFF",
        },
        "font-family": {
          property: "font-family",
          value: "Times New Roman, sans-serif",
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
        "text-decoration": {
          property: "text-decoration",
          value: "none",
        },
      },
      placeholder: "This is a new text",
      initialHtmlValues: {},
      stylePreset: [
        {
          property: "z-index",
          value: 50,
        },
        {
          property: "box-sizing",
          value: "border-box",
        },
      ],
      presetClasses: [],
    },
  },
  {
    title: "Button",
    icon: "radix-icons:button",
    type: "element",
    element: {
      tag: "a",
      editable: true,
      cssOptions: [typographySettings, dimensionsSettings, borderSettings],
      htmlOptions: [linkSettings],
      placeholder: "Button text",
      initialCssValues: {
        "border-width": {
          property: "border-width",
          value: 0,
          unit: "px",
        },
        "border-radius": {
          property: "border-radius",
          value: 0,
          unit: "px",
        },
        "border-color": {
          property: "border-color",
          value: "#222222",
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
          value: 15,
          unit: "px",
        },
        "padding-right": {
          property: "padding-right",
          value: 15,
          unit: "px",
        },
        width: {
          property: "width",
          value: 120,
          unit: "px",
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
        "font-family": {
          property: "font-family",
          value: "Times New Roman, sans-serif",
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
          value: "center",
        },
        "text-transform": {
          property: "text-transform",
          value: "none",
        },
        "text-decoration": {
          property: "text-decoration",
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
      stylePreset: [
        {
          property: "display",
          value: "block",
        },
        {
          property: "box-sizing",
          value: "border-box",
        },
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
          value: "#00FFFFF",
        },
      },
      initialHtmlValues: {},
      stylePreset: [
        {
          property: "z-index",
          value: 50,
        },
        {
          property: "box-sizing",
          value: "border-box",
        },
      ],
      presetClasses: [],
    },
  },
  {
    title: "Icon",
    icon: "radix-icons:star",
    type: "element",
    element: {
      tag: "div",
      editable: false,
      cssOptions: [dimensionsSettings, socialSettings],
      htmlOptions: [iconSettings],
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
          value: "#00FFFFF",
        },
      },
      initialHtmlValues: {
        align: {
          property: "align",
          value: "center",
        },
      },
      stylePreset: [
        {
          property: "width",
          value: "100%",
        },
        {
          property: "height",
          value: "35px",
        },
        {
          property: "box-sizing",
          value: "border-box",
        },
      ],
      presetClasses: [],
      nestedIcons: [
        {
          name: "Email",
          property: "Email",
          src: "https://i.imgur.com/2DW8kFe.png",
          title: "email",
          link: "https://gmail.com",
        },
        {
          name: "Linkedin",
          property: "Linkedin",
          src: "https://i.imgur.com/dnIhxsE.png",
          title: "Linkedin",
          link: "https://linkedin.com",
        },
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
          value: 10,
          unit: "px",
        },
        "padding-right": {
          property: "padding-right",
          value: 10,
          unit: "px",
        },
        width: {
          property: "width",
          value: 600,
          unit: "px",
        },
        height: {
          property: "height",
          value: 100,
          unit: "%",
        },
        "background-color": {
          property: "background-color",
          value: "#00FFFFF",
        },
      },
      initialHtmlValues: {
        src: {
          property: "src",
          value: "https://i.imgur.com/SdIjrA0.png",
        },
      },
      stylePreset: [
        {
          property: "max-width",
          value: "100%",
        },
        {
          property: "box-sizing",
          value: "border-box",
        },
      ],
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
          value: 20,
          unit: "px",
        },
        "background-color": {
          property: "background-color",
          value: "#222222",
        },
      },
      initialHtmlValues: {},
      stylePreset: [
        {
          property: "z-index",
          value: 50,
        },
        {
          property: "box-sizing",
          value: "border-box",
        },
      ],
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
      stylePreset: [],
      presetClasses: [],
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
      stylePreset: [
        {
          property: "line-height",
          value: "1",
        },
      ],
    },
  },
];
