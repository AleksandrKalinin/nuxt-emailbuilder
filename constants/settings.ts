export const typography = {
  title: "Typography",
  fields: [
    {
      name: "Font size",
      value: "font-size",
      type: "input",
    },
    {
      name: "Font color",
      value: "color",
      type: "colorpicker",
    },
    {
      name: "Font weight",
      value: "font-weight",
      type: "selection",
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
      value: "font-style",
      type: "selection",
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
      value: "line-height",
      type: "input",
    },
    {
      name: "Letter spacing",
      value: "letter-spacing",
      type: "input",
    },
    {
      name: "Text align",
      value: "text-align",
      type: "selection",
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
      value: "text-transform",
      type: "selection",
      options: [
        {
          name: "Lowercase",
          icon: "mdi:format-lowercase",
          value: "lowercase",
          default: false,
        },
        {
          name: "Regular",
          icon: "mdi:format-letter-case",
          value: "regular",
          default: true,
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
