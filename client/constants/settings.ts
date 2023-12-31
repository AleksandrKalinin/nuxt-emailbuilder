export const availableSettings = [
  {
    name: "Columns",
    property: "columns",
    type: "layout",
    category: "layout",
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
  {
    name: "Margin",
    value: "margin",
    type: "inputgroup",
    display: "col",
    properties: [
      {
        name: "Top",
        property: "margin-top",
        value: 0,
      },
      {
        name: "Bottom",
        property: "margin-bottom",
        value: 0,
      },
      {
        name: "Left",
        property: "margin-left",
        value: 0,
      },
      {
        name: "Right",
        property: "margin-right",
        value: 0,
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
        property: "padding-top",
        value: 0,
      },
      {
        name: "Bottom",
        property: "padding-bottom",
        value: 0,
      },
      {
        name: "Left",
        property: "padding-left",
        value: 0,
      },
      {
        name: "Right",
        property: "padding-right",
        value: 0,
      },
    ],
  },
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
    value: "#222222",
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
        value: 300,
        default: false,
      },
      {
        name: "Regular",
        icon: "ph:text-b",
        value: 400,
        default: true,
      },
      {
        name: "Bold",
        icon: "ph:text-b-bold",
        value: 600,
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
        name: "Normal",
        icon: "bx:font",
        value: "normal",
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
    name: "Text decoration",
    property: "text-decoration",
    type: "selection",
    display: "row",
    options: [
      {
        name: "None",
        icon: "ph:text-aa-light",
        value: "none",
        default: true,
      },
      {
        name: "Underline",
        icon: "ph:text-a-underline-light",
        value: "underline",
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
];

export const textSettings = {
  title: "Text",
  type: "text",
  fields: [
    {
      name: "Text",
      property: "font-size",
      type: "textarea",
      display: "col",
    },
  ],
};

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
          property: "margin-top",
          value: 0,
        },
        {
          name: "Bottom",
          property: "margin-bottom",
          value: 0,
        },
        {
          name: "Left",
          property: "margin-left",
          value: 0,
        },
        {
          name: "Right",
          property: "margin-right",
          value: 0,
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
          property: "padding-top",
          value: 0,
        },
        {
          name: "Bottom",
          property: "padding-bottom",
          value: 0,
        },
        {
          name: "Left",
          property: "padding-left",
          value: 0,
        },
        {
          name: "Right",
          property: "padding-right",
          value: 0,
        },
      ],
    },
    {
      name: "Width",
      property: "width",
      type: "range",
      display: "col",
    },
    {
      name: "Height",
      property: "height",
      type: "range",
      display: "row",
    },
    {
      name: "Background",
      property: "background-color",
      type: "colorpicker",
      value: "#FFFFFF",
      display: "row",
    },
  ],
};

export const typographySettings = {
  title: "Typography",
  type: "typography",
  fields: [
    {
      name: "Font family",
      property: "font-family",
      type: "dropdown",
      options: [
        {
          name: "Arial",
          value: "Arial, sans-serif",
        },
        {
          name: "Times New Roman",
          value: "Times New Roman, sans-serif",
        },
        {
          name: "Georgia",
          value: "Georgia, sans-serif",
        },
        {
          name: "Courier New",
          value: "Courier New, sans-serif",
        },
        {
          name: "Verdana",
          value: "Verdana, sans-serif",
        },
        {
          name: "Tahoma",
          value: "Tahome, sans-serif",
        },
      ],
      display: "row",
    },
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
      value: "#222222",
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
          value: 300,
          default: false,
        },
        {
          name: "Regular",
          icon: "ph:text-b",
          value: 400,
          default: true,
        },
        {
          name: "Bold",
          icon: "ph:text-b-bold",
          value: 600,
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
          name: "Normal",
          icon: "bx:font",
          value: "normal",
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
      name: "Text decoration",
      property: "text-decoration",
      type: "selection",
      display: "row",
      options: [
        {
          name: "None",
          icon: "ph:text-aa-light",
          value: "none",
          default: true,
        },
        {
          name: "Underline",
          icon: "ph:text-a-underline-light",
          value: "underline",
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
      property: "src",
      type: "text",
      display: "row",
    },
  ],
};

export const linkSettings = {
  title: "Link attributes",
  type: "action",
  fields: [
    {
      name: "Href",
      property: "href",
      type: "text",
      display: "row",
    },
    {
      name: "Target",
      property: "target",
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

export const videoSettings = {
  title: "Video attributes",
  type: "text",
  fields: [
    {
      name: "Src",
      property: "src",
      type: "text",
      display: "row",
    },
    {
      name: "Target",
      property: "target",
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

export const rawHtmlSettings = {
  title: "Insert your html code here",
  type: "html",
};

export const editorItemSettings = {
  width: {
    property: "width",
    value: 600,
    unit: "px",
  },
  height: {
    property: "height",
    value: "auto",
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
  "background-color": {
    property: "background-color",
    value: "#00FFFFF",
  },
};

export const borderSettings = {
  title: "Border",
  type: "border",
  fields: [
    {
      name: "Border width",
      property: "border-width",
      type: "input",
      display: "row",
    },
    {
      name: "Border radius",
      property: "border-radius",
      type: "input",
      display: "row",
    },
    {
      name: "Border color",
      property: "border-color",
      type: "colorpicker",
      value: "#222222",
      display: "row",
    },
  ],
};

export const iconSettings = {
  title: "Position",
  type: "selection",
  fields: [
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
  ],
};

export const hoverSettings = {
  title: "Hover",
  type: "hover",
  fields: [
    {
      name: "Color on hover",
      property: "color",
      type: "colorpicker",
      value: "#222222",
      display: "row",
    },
    {
      name: "Background on hover",
      property: "border-radius",
      type: "colorpicker",
      value: "#222222",
      display: "row",
    },
    {
      name: "Border color on hover",
      property: "border-color",
      type: "colorpicker",
      value: "#222222",
      display: "row",
    },
  ],
};

export const socialSettings = {
  name: "Social icons",
  title: "Social",
  type: "social",
  fields: [
    {
      name: "Available icons",
      property: "icons",
      type: "social",
      display: "col",
      options: [
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
        {
          name: "Twitter",
          property: "Twitter",
          src: "https://i.imgur.com/3nq2NlP.png",
          title: "Twitter",
          link: "https://twitter.com",
        },
        {
          name: "Whatsapp",
          property: "Whatsapp",
          src: "https://i.imgur.com/zP2oyJj.png",
          title: "Whatsapp",
          link: "https://whatsapp.com",
        },
        {
          name: "Telegram",
          property: "Telegram",
          src: "https://i.imgur.com/RpfXb5a.png",
          title: "Telegram",
          link: "https://telegram.com",
        },
        {
          name: "Skype",
          property: "Skype",
          src: "https://i.imgur.com/jNwm3NJ.png",
          title: "Skype",
          link: "https://skype.com",
        },
        {
          name: "Youtube",
          property: "Youtube",
          src: "https://i.imgur.com/du4B57t.png",
          title: "Youtube",
          link: "https://youtube.com",
        },
        {
          name: "Tiktok",
          property: "Tiktok",
          src: "https://i.imgur.com/2qxw50T.png",
          title: "Tiktok",
          link: "https://tiktok.com",
        },
      ],
    },
  ],
};
