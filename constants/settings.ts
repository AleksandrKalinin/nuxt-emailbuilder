export const layoutSettings = {
  title: "Layout",
  type: "layout",
  fields: [
    {
      name: "Columns",
      property: "columns",
      type: "layout",
      display: "col",
      options: [
        {
          name: "1 column",
          number: 1,
        },
        {
          name: "2 columns",
          number: 2,
        },
        {
          name: "3 columns",
          number: 3,
        },
        {
          name: "4 columns",
          number: 4,
        },
      ],
    },
  ],
};

export const dimensionsSettings = {
  title: "Dimensions",
  type: "dimension",
  fields: [
    {
      name: "Margin",
      value: "margin",
      type: "inputgroup",
      display: "col",
      properties: [
        {
          name: "Top",
          value: "margin-top",
        },
        {
          name: "Bottom",
          value: "margin-bottom",
        },
        {
          name: "Left",
          value: "margin-left",
        },
        {
          name: "Right",
          value: "margin-right",
        },
      ],
    },
    {
      name: "Padding",
      value: "padding",
      type: "inputgroup",
      display: "col",
      properties: [
        {
          name: "Top",
          value: "padding-top",
        },
        {
          name: "Bottom",
          value: "padding-bottom",
        },
        {
          name: "Left",
          value: "padding-left",
        },
        {
          name: "Right",
          value: "padding-right",
        },
      ],
    },
  ],
};

export const typographySettings = {
  title: "Typography",
  type: "typography",
  fields: [
    {
      name: "Font size",
      property: "font-size",
      type: "input",
      display: "row",
    },
    {
      name: "Font color",
      property: "color",
      type: "colorpicker",
      display: "row",
    },
    {
      name: "Font weight",
      property: "font-weight",
      type: "selection",
      display: "row",
      options: [
        {
          name: "Light",
          icon: "ph:text-b-light",
          value: "300",
          default: false,
        },
        {
          name: "Regular",
          icon: "ph:text-b",
          value: "400",
          default: true,
        },
        {
          name: "Bold",
          icon: "ph:text-b-bold",
          value: "600",
          default: false,
        },
      ],
    },
    {
      name: "Font style",
      property: "font-style",
      type: "selection",
      display: "row",
      options: [
        {
          name: "Regular",
          icon: "bx:font",
          value: "regular",
          default: true,
        },
        {
          name: "Italic",
          icon: "tabler:italic",
          value: "italic",
          default: false,
        },
      ],
    },
    {
      name: "Line height",
      property: "line-height",
      type: "input",
      display: "row",
    },
    {
      name: "Letter spacing",
      property: "letter-spacing",
      type: "input",
      display: "row",
      max: 100,
      min: 0,
    },
    {
      name: "Text align",
      property: "text-align",
      type: "selection",
      display: "row",
      options: [
        {
          name: "Left",
          icon: "ph:text-align-left-light",
          value: "left",
          default: true,
        },
        {
          name: "Center",
          icon: "ph:text-align-center-light",
          value: "center",
          default: false,
        },
        {
          name: "Right",
          icon: "ph:text-align-right-light",
          value: "right",
          default: false,
        },
      ],
    },
    {
      name: "Text transform",
      property: "text-transform",
      type: "selection",
      display: "row",
      options: [
        {
          name: "None",
          icon: "mdi:format-letter-case",
          value: "none",
          default: true,
        },
        {
          name: "Lowercase",
          icon: "mdi:format-lowercase",
          value: "lowercase",
          default: false,
        },
        {
          name: "Uppercase",
          icon: "mdi:format-uppercase",
          value: "uppercase",
          default: false,
        },
      ],
    },
  ],
};

export const imageSettings = {
  title: "Image",
  type: "image",
  fields: [
    {
      name: "Image",
      property: "url",
      type: "fileupload",
      display: "col",
    },
    {
      name: "Align",
      property: "align",
      type: "selection",
      display: "row",
      options: [
        {
          name: "Left",
          icon: "ph:text-align-left-light",
          value: "left",
          default: true,
        },
        {
          name: "Center",
          icon: "ph:text-align-center-light",
          value: "center",
          default: false,
        },
        {
          name: "Right",
          icon: "ph:text-align-right-light",
          value: "right",
          default: false,
        },
      ],
    },
    {
      name: "Width",
      property: "width",
      type: "input",
      display: "row",
    },
    {
      name: "Height",
      property: "height",
      type: "input",
      display: "row",
    },
  ],
};

export const actionSettings = {
  title: "Action",
  type: "action",
  fields: [
    {
      name: "Url",
      value: "url",
      type: "text",
      display: "row",
    },
    {
      name: "Target",
      value: "target",
      type: "dropdown",
      options: [
        {
          name: "Same tab",
          value: "_self",
        },
        {
          name: "New tab",
          value: "_blank",
        },
      ],
      display: "row",
    },
  ],
};
