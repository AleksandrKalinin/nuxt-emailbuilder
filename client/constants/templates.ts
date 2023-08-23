export const templates = [
  {
    name: "Infographic Promotion Email 4",
    id: "6b6cd153-2e16-41d8-a3b6-99f175877614",
    category: "free",
    preview: "preview.png",
    created_at: new Date(),
    content: [
      {
        id: "c089b428-f859-465c-ae77-83a9d00a2cc3",
        items: [
          {
            id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            children: [
              {
                id: "a38d3c2f-09f5-400c-a5af-735409e7b3ff",
                tag: "h1",
                placeholder: "Heading",
                cssOptions: [
                  {
                    title: "Typography",
                    type: "typography",
                    fields: [
                      {
                        name: "Font family",
                        property: "font-family",
                        type: "dropdown",
                        options: [
                          { name: "Arial", value: "Arial, sans-serif" },
                          {
                            name: "Times New Roman",
                            value: "Times New Roman, sans-serif",
                          },
                          { name: "Georgia", value: "Georgia, sans-serif" },
                          {
                            name: "Courier New",
                            value: "Courier New, sans-serif",
                          },
                          { name: "Verdana", value: "Verdana, sans-serif" },
                          { name: "Tahoma", value: "Tahome, sans-serif" },
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
                  },
                  {
                    title: "Dimensions",
                    type: "dimension",
                    fields: [
                      {
                        name: "Margin",
                        value: "margin",
                        type: "inputgroup",
                        display: "col",
                        properties: [
                          { name: "Top", property: "margin-top", value: 0 },
                          {
                            name: "Bottom",
                            property: "margin-bottom",
                            value: 0,
                          },
                          { name: "Left", property: "margin-left", value: 0 },
                          { name: "Right", property: "margin-right", value: 0 },
                        ],
                      },
                      {
                        name: "Padding",
                        value: "padding",
                        type: "inputgroup",
                        display: "col",
                        properties: [
                          { name: "Top", property: "padding-top", value: 0 },
                          {
                            name: "Bottom",
                            property: "padding-bottom",
                            value: 0,
                          },
                          { name: "Left", property: "padding-left", value: 0 },
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
                  },
                ],
                htmlOptions: [],
                editable: true,
                stylePreset: [{ property: "z-index", value: 50 }],
                cssProperties: {
                  "font-family": {
                    property: "font-family",
                    value: "Times New Roman, sans-serif",
                  },
                  "font-size": { property: "font-size", value: 30, unit: "px" },
                  color: { property: "color", value: "#222222" },
                  "font-weight": { property: "font-weight", value: 400 },
                  "font-style": { property: "font-style", value: "normal" },
                  "line-height": {
                    property: "line-height",
                    value: 40,
                    unit: "px",
                  },
                  "letter-spacing": {
                    property: "letter-spacing",
                    value: 1,
                    unit: "px",
                  },
                  "text-align": { property: "text-align", value: "center" },
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
                  width: { property: "width", value: 100, unit: "%" },
                  height: { property: "height", value: "auto" },
                  "background-color": {
                    property: "background-color",
                    value: "#00FFFFF",
                  },
                },
                htmlProperties: {},
                inlineStyles:
                  "font-family : Times New Roman, sans-serif; font-size : 30px; color : #222222; font-weight : 400; font-style : normal; line-height : 40px; letter-spacing : 1px; text-align : center; text-transform : none; text-decoration : none; margin-top : 5px; margin-bottom : 5px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : #00FFFFF; ",
                markup:
                  '<h1 id="a38d3c2f-09f5-400c-a5af-735409e7b3ff" data-type="item" style="font-family: &quot;Times New Roman&quot;, sans-serif; font-size: 30px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 40px; letter-spacing: 1px; text-align: center; text-transform: none; text-decoration: none; margin: 5px 0px; padding: 0px; width: 100%; height: auto; z-index: 50;">Heading</h1>',
              },
            ],
            placeholder: "No content here. Drag item from menu",
            cssProperties: {
              width: { property: "width", value: 600, unit: "px" },
              height: { property: "height", value: "auto" },
              "margin-top": { property: "margin-top", value: 0, unit: "px" },
              "margin-bottom": {
                property: "margin-bottom",
                value: 0,
                unit: "px",
              },
              "margin-left": { property: "margin-left", value: 0, unit: "px" },
              "margin-right": {
                property: "margin-right",
                value: 0,
                unit: "px",
              },
              "padding-top": { property: "padding-top", value: 0, unit: "px" },
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
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : #00FFFFF; ",
          },
        ],
        columns: 1,
        "data-type": "block",
      },
      {
        id: "f7cc80c6-6180-456d-87df-51f53ec4bfd8",
        items: [
          {
            id: "4eed7916-a015-4696-9b97-0125500e18ba",
            children: [
              {
                id: "59a3cf5a-509e-4a92-b2bb-62c376f2d522",
                tag: "img",
                cssOptions: [
                  {
                    title: "Dimensions",
                    type: "dimension",
                    fields: [
                      {
                        name: "Margin",
                        value: "margin",
                        type: "inputgroup",
                        display: "col",
                        properties: [
                          { name: "Top", property: "margin-top", value: 0 },
                          {
                            name: "Bottom",
                            property: "margin-bottom",
                            value: 0,
                          },
                          { name: "Left", property: "margin-left", value: 0 },
                          { name: "Right", property: "margin-right", value: 0 },
                        ],
                      },
                      {
                        name: "Padding",
                        value: "padding",
                        type: "inputgroup",
                        display: "col",
                        properties: [
                          { name: "Top", property: "padding-top", value: 0 },
                          {
                            name: "Bottom",
                            property: "padding-bottom",
                            value: 0,
                          },
                          { name: "Left", property: "padding-left", value: 0 },
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
                  },
                ],
                htmlOptions: [
                  {
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
                  },
                ],
                editable: false,
                stylePreset: [{ property: "max-width", value: "100%" }],
                cssProperties: {
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
                  width: { property: "width", value: "auto" },
                  height: { property: "height", value: 100, unit: "%" },
                  "background-color": {
                    property: "background-color",
                    value: "#00FFFFF",
                  },
                },
                htmlProperties: {
                  src: {
                    property: "src",
                    value:
                      "https://images.unsplash.com/photo-1682685797366-715d29e33f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                  },
                },
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 10px; padding-bottom : 10px; padding-left : 10px; padding-right : 10px; width : auto; height : 100%; background-color : #00FFFFF; ",
                markup:
                  '<img id="59a3cf5a-509e-4a92-b2bb-62c376f2d522" data-type="item" src="https://images.unsplash.com/photo-1682685797366-715d29e33f9d?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80" style="margin: 0px; padding: 10px; width: auto; height: 100%; max-width: 100%;">',
              },
            ],
            placeholder: "No content here. Drag item from menu",
            cssProperties: {
              width: { property: "width", value: 600, unit: "px" },
              height: { property: "height", value: "auto" },
              "margin-top": { property: "margin-top", value: 0, unit: "px" },
              "margin-bottom": {
                property: "margin-bottom",
                value: 0,
                unit: "px",
              },
              "margin-left": { property: "margin-left", value: 0, unit: "px" },
              "margin-right": {
                property: "margin-right",
                value: 0,
                unit: "px",
              },
              "padding-top": { property: "padding-top", value: 0, unit: "px" },
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
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : #00FFFFF; ",
          },
          {
            id: "d039d193-26cf-4e99-9bac-425694734adf",
            children: [
              {
                id: "ef7a8229-3c80-4538-867d-506d4c7df8be",
                tag: "p",
                placeholder: "This is a new text",
                cssOptions: [
                  {
                    title: "Typography",
                    type: "typography",
                    fields: [
                      {
                        name: "Font family",
                        property: "font-family",
                        type: "dropdown",
                        options: [
                          { name: "Arial", value: "Arial, sans-serif" },
                          {
                            name: "Times New Roman",
                            value: "Times New Roman, sans-serif",
                          },
                          { name: "Georgia", value: "Georgia, sans-serif" },
                          {
                            name: "Courier New",
                            value: "Courier New, sans-serif",
                          },
                          { name: "Verdana", value: "Verdana, sans-serif" },
                          { name: "Tahoma", value: "Tahome, sans-serif" },
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
                  },
                  {
                    title: "Dimensions",
                    type: "dimension",
                    fields: [
                      {
                        name: "Margin",
                        value: "margin",
                        type: "inputgroup",
                        display: "col",
                        properties: [
                          { name: "Top", property: "margin-top", value: 0 },
                          {
                            name: "Bottom",
                            property: "margin-bottom",
                            value: 0,
                          },
                          { name: "Left", property: "margin-left", value: 0 },
                          { name: "Right", property: "margin-right", value: 0 },
                        ],
                      },
                      {
                        name: "Padding",
                        value: "padding",
                        type: "inputgroup",
                        display: "col",
                        properties: [
                          { name: "Top", property: "padding-top", value: 0 },
                          {
                            name: "Bottom",
                            property: "padding-bottom",
                            value: 0,
                          },
                          { name: "Left", property: "padding-left", value: 0 },
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
                  },
                ],
                htmlOptions: [],
                editable: true,
                stylePreset: [{ property: "z-index", value: 50 }],
                cssProperties: {
                  "margin-top": {
                    property: "margin-top",
                    value: 5,
                    unit: "px",
                  },
                  "margin-bottom": {
                    property: "margin-bottom",
                    value: 0,
                    unit: "px",
                  },
                  "margin-left": {
                    property: "margin-left",
                    value: 5,
                    unit: "px",
                  },
                  "margin-right": {
                    property: "margin-right",
                    value: 5,
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
                  width: { property: "width", value: 100, unit: "%" },
                  height: { property: "height", value: "auto" },
                  "background-color": {
                    property: "background-color",
                    value: "#00FFFFF",
                  },
                  "font-family": {
                    property: "font-family",
                    value: "Times New Roman, sans-serif",
                  },
                  "font-size": { property: "font-size", value: 14, unit: "px" },
                  color: { property: "color", value: "#222222" },
                  "font-weight": { property: "font-weight", value: 400 },
                  "font-style": { property: "font-style", value: "normal" },
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
                  "text-align": { property: "text-align", value: "left" },
                  "text-transform": {
                    property: "text-transform",
                    value: "none",
                  },
                  "text-decoration": {
                    property: "text-decoration",
                    value: "none",
                  },
                },
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 5px; margin-bottom : 0px; margin-left : 5px; margin-right : 5px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : #00FFFFF; font-family : Times New Roman, sans-serif; font-size : 14px; color : #222222; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : left; text-transform : none; text-decoration : none; ",
                markup:
                  '<p id="ef7a8229-3c80-4538-867d-506d4c7df8be" data-type="item" style="margin: 5px 5px 0px; padding: 0px; width: 100%; height: auto; font-family: &quot;Times New Roman&quot;, sans-serif; font-size: 14px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: left; text-transform: none; text-decoration: none; z-index: 50;">This is a new text</p>',
              },
            ],
            placeholder: "No content here. Drag item from menu",
            cssProperties: {
              width: { property: "width", value: 600, unit: "px" },
              height: { property: "height", value: "auto" },
              "margin-top": { property: "margin-top", value: 0, unit: "px" },
              "margin-bottom": {
                property: "margin-bottom",
                value: 0,
                unit: "px",
              },
              "margin-left": { property: "margin-left", value: 0, unit: "px" },
              "margin-right": {
                property: "margin-right",
                value: 0,
                unit: "px",
              },
              "padding-top": { property: "padding-top", value: 0, unit: "px" },
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
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : #00FFFFF; ",
          },
        ],
        columns: 2,
        "data-type": "block",
      },
    ],
  },
  {
    name: "Infographic Promotion Email",
    id: "6b6cd153-2e16-41d8-a3b6-99f175877614",
    category: "free",
    preview: "preview.png",
    created_at: new Date(),
    content: [
      {
        id: "c089b428-f859-465c-ae77-83a9d00a2cc3",
        items: [
          {
            id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            children: [
              {
                id: "6260511d-f15d-4875-9aa8-e92bf4f186be",
                tag: "h1",
                placeholder: "Heading",
                cssOptions: [
                  {
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
                  },
                  {
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
                        type: "input",
                        display: "row",
                      },
                      {
                        name: "Height",
                        property: "height",
                        type: "input",
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
                  },
                ],
                htmlOptions: [],
                editable: true,
                style: ["z-50"],
                cssProperties: {
                  "font-size": {
                    property: "font-size",
                    value: 36,
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
                    value: "center",
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
                    value: 30,
                    unit: "px",
                  },
                  "padding-bottom": {
                    property: "padding-bottom",
                    value: 30,
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
                    value: "#a9d7ea",
                  },
                },
                htmlProperties: {},
                inlineStyles:
                  "font-size : 26px; color : #222222; font-weight : 400; font-style : normal; line-height : 36px; letter-spacing : 1px; text-align : left; text-transform : none; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : transparent; ",
                markup:
                  '<h1 id="6260511d-f15d-4875-9aa8-e92bf4f186be" data-type="item" class="z-50" style="font-size: 36px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 36px; letter-spacing: 1px; text-align: center; text-transform: none; margin: 0px; padding: 30px 0px; width: 100%; height: auto; background-color: rgb(169, 215, 234);">Heading</h1>',
              },
            ],
            placeholder: "No content here. Drag item from menu",
            cssProperties: {
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
                value: "transparent",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : transparent; ",
          },
        ],
        columns: 1,
        "data-type": "block",
      },
      {
        id: "2fdefd9e-284c-4c61-b550-0cc52cabe8f3",
        items: [
          {
            id: "b499938d-85c7-472d-97c7-a1e9774f5856",
            children: [
              {
                id: "a7e541be-3b3c-4868-bbc2-37cb517e0835",
                tag: "img",
                cssOptions: [
                  {
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
                        type: "input",
                        display: "row",
                      },
                      {
                        name: "Height",
                        property: "height",
                        type: "input",
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
                  },
                ],
                htmlOptions: [
                  {
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
                  },
                ],
                editable: false,
                style: "",
                cssProperties: {
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
                htmlProperties: {
                  src: {
                    property: "src",
                    value: "https://i.imgur.com/SdIjrA0.png",
                  },
                },
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : auto; height : auto; background-color : transparent; ",
                markup:
                  '<img id="a7e541be-3b3c-4868-bbc2-37cb517e0835" data-type="item" src="https://i.imgur.com/SdIjrA0.png" style="margin: 0px; padding: 0px; width: auto; height: auto; background-color: transparent;">',
              },
              {
                id: "508a0c6d-4bff-4ad4-993a-f519dff980db",
                tag: "div",
                placeholder: "",
                cssOptions: [
                  {
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
                        type: "input",
                        display: "row",
                      },
                      {
                        name: "Height",
                        property: "height",
                        type: "input",
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
                  },
                ],
                htmlOptions: [],
                editable: false,
                style: ["z-50"],
                cssProperties: {
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : 60px; background-color : transparent; ",
                markup:
                  '<div id="508a0c6d-4bff-4ad4-993a-f519dff980db" data-type="item" class="z-50" style="margin: 0px; padding: 0px; width: 100%; height: 60px; background-color: transparent;"></div>',
              },
            ],
            placeholder: "No content here. Drag item from menu",
            cssProperties: {
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
                value: "transparent",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : transparent; ",
          },
          {
            id: "14eecc6e-e358-47e6-8d69-4df73b2e5d00",
            children: [
              {
                id: "c6981cd6-a3d0-4784-9348-54c60f22365f",
                tag: "h1",
                placeholder: "Heading",
                cssOptions: [
                  {
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
                  },
                  {
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
                        type: "input",
                        display: "row",
                      },
                      {
                        name: "Height",
                        property: "height",
                        type: "input",
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
                  },
                ],
                htmlOptions: [],
                editable: true,
                style: ["z-50"],
                cssProperties: {
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
                  "background-color": {
                    property: "background-color",
                    value: "transparent",
                  },
                },
                htmlProperties: {},
                inlineStyles:
                  "font-size : 26px; color : #222222; font-weight : 400; font-style : normal; line-height : 36px; letter-spacing : 1px; text-align : left; text-transform : none; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : transparent; ",
                markup:
                  '<h1 id="c6981cd6-a3d0-4784-9348-54c60f22365f" data-type="item" class="z-50" style="font-size: 26px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 36px; letter-spacing: 1px; text-align: left; text-transform: none; margin: 0px; padding: 10px 0px; width: 100%; height: auto; background-color: transparent;">Heading</h1>',
              },
              {
                id: "3b8dc3c8-312e-4ffa-9878-16299904902d",
                tag: "p",
                placeholder:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Tellus id interdum velit laoreet id donec. Nisl condimentum id venenatis a.",
                cssOptions: [
                  {
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
                  },
                  {
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
                        type: "input",
                        display: "row",
                      },
                      {
                        name: "Height",
                        property: "height",
                        type: "input",
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
                  },
                ],
                htmlOptions: [],
                editable: true,
                style: "",
                cssProperties: {
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : transparent; font-size : 14px; color : #222222; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : left; text-transform : none; ",
                markup:
                  '<p id="3b8dc3c8-312e-4ffa-9878-16299904902d" data-type="item" style="margin: 0px; padding: 0px; width: 100%; height: auto; background-color: transparent; font-size: 14px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: left; text-transform: none;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Tellus id interdum velit laoreet id donec. Nisl condimentum id venenatis a.</p>',
              },
            ],
            placeholder: "No content here. Drag item from menu",
            cssProperties: {
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
                value: "transparent",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : transparent; ",
          },
        ],
        columns: 2,
        "data-type": "block",
      },
      {
        id: "04236e76-5fb6-4ea1-8dbb-1a6bad26d995",
        items: [
          {
            id: "f3ca4dba-2e81-4bf9-870b-390e4ed2d3e6",
            children: [
              {
                id: "c70c28ff-8ecb-4433-b9c2-7ff25f83da0f",
                tag: "p",
                placeholder:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Tellus id interdum velit laoreet id donec. Nisl condimentum id venenatis a.",
                cssOptions: [
                  {
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
                  },
                  {
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
                        type: "input",
                        display: "row",
                      },
                      {
                        name: "Height",
                        property: "height",
                        type: "input",
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
                  },
                ],
                htmlOptions: [],
                editable: true,
                style: "",
                cssProperties: {
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : transparent; font-size : 14px; color : #222222; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : left; text-transform : none; ",
                markup:
                  '<p id="c70c28ff-8ecb-4433-b9c2-7ff25f83da0f" data-type="item" style="margin: 0px; padding: 0px 10px; width: 100%; height: auto; background-color: transparent; font-size: 14px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: left; text-transform: none;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Tellus id interdum velit laoreet id donec. Nisl condimentum id venenatis a.</p>',
              },
            ],
            placeholder: "No content here. Drag item from menu",
            cssProperties: {
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
                value: "transparent",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : transparent; ",
          },
          {
            id: "ad50102b-cec8-40e3-99f7-f66e80a418fa",
            children: [
              {
                id: "07ff045d-eb15-4727-bf4a-0cbe4abb4731",
                tag: "p",
                placeholder:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Tellus id interdum velit laoreet id donec. Nisl condimentum id venenatis a.",
                cssOptions: [
                  {
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
                  },
                  {
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
                        type: "input",
                        display: "row",
                      },
                      {
                        name: "Height",
                        property: "height",
                        type: "input",
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
                  },
                ],
                htmlOptions: [],
                editable: true,
                style: "",
                cssProperties: {
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : transparent; font-size : 14px; color : #222222; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : left; text-transform : none; ",
                markup:
                  '<p id="07ff045d-eb15-4727-bf4a-0cbe4abb4731" data-type="item" style="margin: 0px; padding: 0px 10px; width: 100%; height: auto; background-color: transparent; font-size: 14px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: left; text-transform: none;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Tellus id interdum velit laoreet id donec. Nisl condimentum id venenatis a.</p>',
              },
            ],
            placeholder: "No content here. Drag item from menu",
            cssProperties: {
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
                value: "transparent",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : transparent; ",
          },
        ],
        columns: 2,
        "data-type": "block",
      },
      {
        id: "98853d61-4ba9-46c4-b984-b3855f88c594",
        items: [
          {
            id: "a63f1c5d-50ea-40a8-a302-dc029a630f19",
            children: [
              {
                id: "d4e77afd-661c-45f7-8774-d81cead608c6",
                tag: "img",
                cssOptions: [
                  {
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
                        type: "input",
                        display: "row",
                      },
                      {
                        name: "Height",
                        property: "height",
                        type: "input",
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
                  },
                ],
                htmlOptions: [
                  {
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
                  },
                ],
                editable: false,
                style: "",
                cssProperties: {
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
                htmlProperties: {
                  src: {
                    property: "src",
                    value: "https://i.imgur.com/SdIjrA0.png",
                  },
                },
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : auto; height : auto; background-color : transparent; ",
                markup:
                  '<img id="d4e77afd-661c-45f7-8774-d81cead608c6" data-type="item" src="https://i.imgur.com/SdIjrA0.png" style="margin: 0px; padding: 0px; width: auto; height: auto; background-color: transparent;">',
              },
            ],
            placeholder: "No content here. Drag item from menu",
            cssProperties: {
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
                value: "transparent",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : transparent; ",
          },
        ],
        columns: 1,
        "data-type": "block",
      },
      {
        id: "60840056-5c5e-4cda-85dc-a6e75cd00f72",
        items: [
          {
            id: "7a171291-6c67-4d1d-8669-b1b881eba497",
            children: [
              {
                id: "e4384a0d-e700-4d6a-a496-e1d0acf21aeb",
                tag: "p",
                placeholder:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Tellus id interdum velit laoreet id donec. Nisl condimentum id venenatis a. Sit amet luctus venenatis lectus magna fringilla. In hendrerit gravida rutrum quisque non tellus orci ac. Viverra nam libero justo laoreet. Sit amet est placerat in egestas erat. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales.",
                cssOptions: [
                  {
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
                  },
                  {
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
                        type: "input",
                        display: "row",
                      },
                      {
                        name: "Height",
                        property: "height",
                        type: "input",
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
                  },
                ],
                htmlOptions: [],
                editable: true,
                style: "",
                cssProperties: {
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
                    value: 1,
                    unit: "px",
                  },
                  "padding-bottom": {
                    property: "padding-bottom",
                    value: 15,
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : transparent; font-size : 14px; color : #222222; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : left; text-transform : none; ",
                markup:
                  '<p id="e4384a0d-e700-4d6a-a496-e1d0acf21aeb" data-type="item" style="margin: 0px; padding: 1px 15px 15px; width: 100%; height: auto; background-color: transparent; font-size: 14px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: left; text-transform: none;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Tellus id interdum velit laoreet id donec. Nisl condimentum id venenatis a. Sit amet luctus venenatis lectus magna fringilla. In hendrerit gravida rutrum quisque non tellus orci ac. Viverra nam libero justo laoreet. Sit amet est placerat in egestas erat. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales.</p>',
              },
            ],
            placeholder: "No content here. Drag item from menu",
            cssProperties: {
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
                value: "transparent",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : transparent; ",
          },
        ],
        columns: 1,
        "data-type": "block",
      },
    ],
  },
  {
    name: "Infographic Promotion Email",
    id: "6b6cd153-2e16-41d8-a3b6-99f175899614",
    category: "premium",
    preview: "preview.png",
    created_at: new Date(),
    content: [
      {
        id: "c089b428-f859-465c-ae77-83a9d00a2cc3",
        items: [
          {
            id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            children: [
              {
                id: "6260511d-f15d-4875-9aa8-e92bf4f186be",
                tag: "h1",
                placeholder: "Heading",
                cssOptions: [
                  {
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
                  },
                  {
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
                        type: "input",
                        display: "row",
                      },
                      {
                        name: "Height",
                        property: "height",
                        type: "input",
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
                  },
                ],
                htmlOptions: [],
                editable: true,
                style: ["z-50"],
                cssProperties: {
                  "font-size": {
                    property: "font-size",
                    value: 36,
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
                    value: "center",
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
                    value: 30,
                    unit: "px",
                  },
                  "padding-bottom": {
                    property: "padding-bottom",
                    value: 30,
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
                    value: "#a9d7ea",
                  },
                },
                htmlProperties: {},
                inlineStyles:
                  "font-size : 26px; color : #222222; font-weight : 400; font-style : normal; line-height : 36px; letter-spacing : 1px; text-align : left; text-transform : none; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : transparent; ",
                markup:
                  '<h1 id="6260511d-f15d-4875-9aa8-e92bf4f186be" data-type="item" class="z-50" style="font-size: 36px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 36px; letter-spacing: 1px; text-align: center; text-transform: none; margin: 0px; padding: 30px 0px; width: 100%; height: auto; background-color: rgb(169, 215, 234);">Heading</h1>',
              },
            ],
            placeholder: "No content here. Drag item from menu",
            cssProperties: {
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
                value: "transparent",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : transparent; ",
          },
        ],
        columns: 1,
        "data-type": "block",
      },
      {
        id: "2fdefd9e-284c-4c61-b550-0cc52cabe8f3",
        items: [
          {
            id: "b499938d-85c7-472d-97c7-a1e9774f5856",
            children: [
              {
                id: "a7e541be-3b3c-4868-bbc2-37cb517e0835",
                tag: "img",
                cssOptions: [
                  {
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
                        type: "input",
                        display: "row",
                      },
                      {
                        name: "Height",
                        property: "height",
                        type: "input",
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
                  },
                ],
                htmlOptions: [
                  {
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
                  },
                ],
                editable: false,
                style: "",
                cssProperties: {
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
                htmlProperties: {
                  src: {
                    property: "src",
                    value: "https://i.imgur.com/SdIjrA0.png",
                  },
                },
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : auto; height : auto; background-color : transparent; ",
                markup:
                  '<img id="a7e541be-3b3c-4868-bbc2-37cb517e0835" data-type="item" src="https://i.imgur.com/SdIjrA0.png" style="margin: 0px; padding: 0px; width: auto; height: auto; background-color: transparent;">',
              },
              {
                id: "508a0c6d-4bff-4ad4-993a-f519dff980db",
                tag: "div",
                placeholder: "",
                cssOptions: [
                  {
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
                        type: "input",
                        display: "row",
                      },
                      {
                        name: "Height",
                        property: "height",
                        type: "input",
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
                  },
                ],
                htmlOptions: [],
                editable: false,
                style: ["z-50"],
                cssProperties: {
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : 60px; background-color : transparent; ",
                markup:
                  '<div id="508a0c6d-4bff-4ad4-993a-f519dff980db" data-type="item" class="z-50" style="margin: 0px; padding: 0px; width: 100%; height: 60px; background-color: transparent;"></div>',
              },
            ],
            placeholder: "No content here. Drag item from menu",
            cssProperties: {
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
                value: "transparent",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : transparent; ",
          },
          {
            id: "14eecc6e-e358-47e6-8d69-4df73b2e5d00",
            children: [
              {
                id: "c6981cd6-a3d0-4784-9348-54c60f22365f",
                tag: "h1",
                placeholder: "Heading",
                cssOptions: [
                  {
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
                  },
                  {
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
                        type: "input",
                        display: "row",
                      },
                      {
                        name: "Height",
                        property: "height",
                        type: "input",
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
                  },
                ],
                htmlOptions: [],
                editable: true,
                style: ["z-50"],
                cssProperties: {
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
                  "background-color": {
                    property: "background-color",
                    value: "transparent",
                  },
                },
                htmlProperties: {},
                inlineStyles:
                  "font-size : 26px; color : #222222; font-weight : 400; font-style : normal; line-height : 36px; letter-spacing : 1px; text-align : left; text-transform : none; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : transparent; ",
                markup:
                  '<h1 id="c6981cd6-a3d0-4784-9348-54c60f22365f" data-type="item" class="z-50" style="font-size: 26px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 36px; letter-spacing: 1px; text-align: left; text-transform: none; margin: 0px; padding: 10px 0px; width: 100%; height: auto; background-color: transparent;">Heading</h1>',
              },
              {
                id: "3b8dc3c8-312e-4ffa-9878-16299904902d",
                tag: "p",
                placeholder:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Tellus id interdum velit laoreet id donec. Nisl condimentum id venenatis a.",
                cssOptions: [
                  {
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
                  },
                  {
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
                        type: "input",
                        display: "row",
                      },
                      {
                        name: "Height",
                        property: "height",
                        type: "input",
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
                  },
                ],
                htmlOptions: [],
                editable: true,
                style: "",
                cssProperties: {
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : transparent; font-size : 14px; color : #222222; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : left; text-transform : none; ",
                markup:
                  '<p id="3b8dc3c8-312e-4ffa-9878-16299904902d" data-type="item" style="margin: 0px; padding: 0px; width: 100%; height: auto; background-color: transparent; font-size: 14px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: left; text-transform: none;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Tellus id interdum velit laoreet id donec. Nisl condimentum id venenatis a.</p>',
              },
            ],
            placeholder: "No content here. Drag item from menu",
            cssProperties: {
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
                value: "transparent",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : transparent; ",
          },
        ],
        columns: 2,
        "data-type": "block",
      },
      {
        id: "04236e76-5fb6-4ea1-8dbb-1a6bad26d995",
        items: [
          {
            id: "f3ca4dba-2e81-4bf9-870b-390e4ed2d3e6",
            children: [
              {
                id: "c70c28ff-8ecb-4433-b9c2-7ff25f83da0f",
                tag: "p",
                placeholder:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Tellus id interdum velit laoreet id donec. Nisl condimentum id venenatis a.",
                cssOptions: [
                  {
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
                  },
                  {
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
                        type: "input",
                        display: "row",
                      },
                      {
                        name: "Height",
                        property: "height",
                        type: "input",
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
                  },
                ],
                htmlOptions: [],
                editable: true,
                style: "",
                cssProperties: {
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : transparent; font-size : 14px; color : #222222; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : left; text-transform : none; ",
                markup:
                  '<p id="c70c28ff-8ecb-4433-b9c2-7ff25f83da0f" data-type="item" style="margin: 0px; padding: 0px 10px; width: 100%; height: auto; background-color: transparent; font-size: 14px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: left; text-transform: none;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Tellus id interdum velit laoreet id donec. Nisl condimentum id venenatis a.</p>',
              },
            ],
            placeholder: "No content here. Drag item from menu",
            cssProperties: {
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
                value: "transparent",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : transparent; ",
          },
          {
            id: "ad50102b-cec8-40e3-99f7-f66e80a418fa",
            children: [
              {
                id: "07ff045d-eb15-4727-bf4a-0cbe4abb4731",
                tag: "p",
                placeholder:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Tellus id interdum velit laoreet id donec. Nisl condimentum id venenatis a.",
                cssOptions: [
                  {
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
                  },
                  {
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
                        type: "input",
                        display: "row",
                      },
                      {
                        name: "Height",
                        property: "height",
                        type: "input",
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
                  },
                ],
                htmlOptions: [],
                editable: true,
                style: "",
                cssProperties: {
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : transparent; font-size : 14px; color : #222222; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : left; text-transform : none; ",
                markup:
                  '<p id="07ff045d-eb15-4727-bf4a-0cbe4abb4731" data-type="item" style="margin: 0px; padding: 0px 10px; width: 100%; height: auto; background-color: transparent; font-size: 14px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: left; text-transform: none;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Tellus id interdum velit laoreet id donec. Nisl condimentum id venenatis a.</p>',
              },
            ],
            placeholder: "No content here. Drag item from menu",
            cssProperties: {
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
                value: "transparent",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : transparent; ",
          },
        ],
        columns: 2,
        "data-type": "block",
      },
      {
        id: "98853d61-4ba9-46c4-b984-b3855f88c594",
        items: [
          {
            id: "a63f1c5d-50ea-40a8-a302-dc029a630f19",
            children: [
              {
                id: "d4e77afd-661c-45f7-8774-d81cead608c6",
                tag: "img",
                cssOptions: [
                  {
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
                        type: "input",
                        display: "row",
                      },
                      {
                        name: "Height",
                        property: "height",
                        type: "input",
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
                  },
                ],
                htmlOptions: [
                  {
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
                  },
                ],
                editable: false,
                style: "",
                cssProperties: {
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
                htmlProperties: {
                  src: {
                    property: "src",
                    value: "https://i.imgur.com/SdIjrA0.png",
                  },
                },
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : auto; height : auto; background-color : transparent; ",
                markup:
                  '<img id="d4e77afd-661c-45f7-8774-d81cead608c6" data-type="item" src="https://i.imgur.com/SdIjrA0.png" style="margin: 0px; padding: 0px; width: auto; height: auto; background-color: transparent;">',
              },
            ],
            placeholder: "No content here. Drag item from menu",
            cssProperties: {
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
                value: "transparent",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : transparent; ",
          },
        ],
        columns: 1,
        "data-type": "block",
      },
      {
        id: "60840056-5c5e-4cda-85dc-a6e75cd00f72",
        items: [
          {
            id: "7a171291-6c67-4d1d-8669-b1b881eba497",
            children: [
              {
                id: "e4384a0d-e700-4d6a-a496-e1d0acf21aeb",
                tag: "p",
                placeholder:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Tellus id interdum velit laoreet id donec. Nisl condimentum id venenatis a. Sit amet luctus venenatis lectus magna fringilla. In hendrerit gravida rutrum quisque non tellus orci ac. Viverra nam libero justo laoreet. Sit amet est placerat in egestas erat. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales.",
                cssOptions: [
                  {
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
                  },
                  {
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
                        type: "input",
                        display: "row",
                      },
                      {
                        name: "Height",
                        property: "height",
                        type: "input",
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
                  },
                ],
                htmlOptions: [],
                editable: true,
                style: "",
                cssProperties: {
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
                    value: 1,
                    unit: "px",
                  },
                  "padding-bottom": {
                    property: "padding-bottom",
                    value: 15,
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : transparent; font-size : 14px; color : #222222; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : left; text-transform : none; ",
                markup:
                  '<p id="e4384a0d-e700-4d6a-a496-e1d0acf21aeb" data-type="item" style="margin: 0px; padding: 1px 15px 15px; width: 100%; height: auto; background-color: transparent; font-size: 14px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: left; text-transform: none;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci eu lobortis elementum nibh. Tellus id interdum velit laoreet id donec. Nisl condimentum id venenatis a. Sit amet luctus venenatis lectus magna fringilla. In hendrerit gravida rutrum quisque non tellus orci ac. Viverra nam libero justo laoreet. Sit amet est placerat in egestas erat. Arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales.</p>',
              },
            ],
            placeholder: "No content here. Drag item from menu",
            cssProperties: {
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
                value: "transparent",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : transparent; ",
          },
        ],
        columns: 1,
        "data-type": "block",
      },
    ],
  },
];
