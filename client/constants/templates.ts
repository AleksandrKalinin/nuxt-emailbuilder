export const templates = [
  {
    name: "Infographic Promotion Email 4",
    id: "e92e130e-41bd-11ee-be56-0242ac120002",
    category: "free",
    preview: "25d841e8-a649-439b-8cae-21e9bd3c787f.png",
    created_at: new Date(),
    content: [
      {
        id: "c089b428-f859-465c-ae77-83a9d00a2cc3",
        items: [
          {
            id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
            children: [
              {
                id: "86831bbd-2a19-4e4e-8614-562702723b70",
                tag: "h1",
                placeholder: "Learn more about available products",
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
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
                cssProperties: {
                  "font-family": {
                    property: "font-family",
                    value: "Times New Roman, sans-serif",
                  },
                  "font-size": {
                    property: "font-size",
                    value: 31,
                    unit: "px",
                  },
                  color: {
                    property: "color",
                    value: "#fafafa",
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
                    value: 60,
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
                    value: 15,
                    unit: "px",
                  },
                  "padding-bottom": {
                    property: "padding-bottom",
                    value: 15,
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
                    value: "#c70a0a",
                  },
                },
                htmlProperties: {},
                inlineStyles:
                  "font-family : Times New Roman, sans-serif; font-size : 31px; color : #fafafa; font-weight : 400; font-style : normal; line-height : 60px; letter-spacing : 1px; text-align : center; text-transform : none; text-decoration : none; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 15px; padding-bottom : 15px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : #c70a0a; ",
                markup:
                  '<h1 id="86831bbd-2a19-4e4e-8614-562702723b70" data-type="item" style="font-family: &quot;Times New Roman&quot;, sans-serif; font-size: 31px; color: rgb(250, 250, 250); font-weight: 400; font-style: normal; line-height: 60px; letter-spacing: 1px; text-align: center; text-transform: none; text-decoration: none; margin: 0px; padding: 15px 0px; width: 100%; height: auto; background-color: rgb(199, 10, 10); z-index: 50;">Learn more about available products</h1>',
              },
              {
                id: "4f9f7edc-86a7-42bf-9b8b-5196701e1bed",
                tag: "p",
                placeholder:
                  "Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Consectetur a erat nam at lectus urna. Nullam eget felis eget nunc lobortis mattis aliquam faucibus",
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
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
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
                    value: 20,
                    unit: "px",
                  },
                  "padding-bottom": {
                    property: "padding-bottom",
                    value: 20,
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
                    value: "#00FFFFF",
                  },
                  "font-family": {
                    property: "font-family",
                    value: "Times New Roman, sans-serif",
                  },
                  "font-size": {
                    property: "font-size",
                    value: 16,
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 20px; padding-bottom : 20px; padding-left : 10px; padding-right : 10px; width : 100%; height : auto; background-color : #00FFFFF; font-family : Times New Roman, sans-serif; font-size : 16px; color : #222222; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : center; text-transform : none; text-decoration : none; ",
                markup:
                  '<p id="4f9f7edc-86a7-42bf-9b8b-5196701e1bed" data-type="item" style="margin: 0px; padding: 20px 10px; width: 100%; height: auto; font-family: &quot;Times New Roman&quot;, sans-serif; font-size: 16px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: center; text-transform: none; text-decoration: none; z-index: 50;">Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Consectetur a erat nam at lectus urna. Nullam eget felis eget nunc lobortis mattis aliquam faucibus</p>',
              },
              {
                id: "aee1e980-c53e-4137-b184-c8ddc96dc2e8",
                tag: "h1",
                placeholder: "",
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
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
                cssProperties: {
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
                    value: "auto",
                  },
                  "background-color": {
                    property: "background-color",
                    value: "#00FFFFF",
                  },
                },
                htmlProperties: {},
                inlineStyles:
                  "font-family : Times New Roman, sans-serif; font-size : 26px; color : #222222; font-weight : 400; font-style : normal; line-height : 36px; letter-spacing : 1px; text-align : left; text-transform : none; text-decoration : none; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : #00FFFFF; ",
                markup:
                  '<h1 id="aee1e980-c53e-4137-b184-c8ddc96dc2e8" data-type="item" style="font-family: &quot;Times New Roman&quot;, sans-serif; font-size: 26px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 36px; letter-spacing: 1px; text-align: left; text-transform: none; text-decoration: none; margin: 0px; padding: 0px; width: 100%; height: auto; z-index: 50;"></h1>',
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
        id: "ecfde8ad-6b06-445c-bc2e-024a3a8ada3e",
        items: [
          {
            id: "a5d702ce-84a0-42ad-a9ea-cf98d70bc562",
            children: [
              {
                id: "bd5c5de1-3490-43fe-adae-8e85adef794f",
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
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
                cssProperties: {
                  "font-family": {
                    property: "font-family",
                    value: "Times New Roman, sans-serif",
                  },
                  "font-size": {
                    property: "font-size",
                    value: 22,
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
                },
                htmlProperties: {},
                inlineStyles:
                  "font-family : Times New Roman, sans-serif; font-size : 22px; color : #222222; font-weight : 400; font-style : normal; line-height : 36px; letter-spacing : 1px; text-align : left; text-transform : none; text-decoration : none; margin-top : 0px; margin-bottom : 0px; margin-left : 15px; margin-right : 15px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : #00FFFFF; ",
                markup:
                  '<h1 id="bd5c5de1-3490-43fe-adae-8e85adef794f" data-type="item" style="font-family: &quot;Times New Roman&quot;, sans-serif; font-size: 22px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 36px; letter-spacing: 1px; text-align: left; text-transform: none; text-decoration: none; margin: 0px 15px; padding: 0px; width: 100%; height: auto; z-index: 50;">Heading</h1>',
              },
              {
                id: "c3758571-3a84-4560-8fbc-1f2c8fe652b0",
                tag: "p",
                placeholder:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nulla facilisi etiam dignissim.",
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
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
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
                    value: "#00FFFFF",
                  },
                  "font-family": {
                    property: "font-family",
                    value: "Times New Roman, sans-serif",
                  },
                  "font-size": {
                    property: "font-size",
                    value: 16,
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 15px; padding-left : 15px; padding-right : 15px; width : 100%; height : auto; background-color : #00FFFFF; font-family : Times New Roman, sans-serif; font-size : 16px; color : #222222; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : left; text-transform : none; text-decoration : none; ",
                markup:
                  '<p id="c3758571-3a84-4560-8fbc-1f2c8fe652b0" data-type="item" style="margin: 0px; padding: 0px 15px 15px; width: 100%; height: auto; font-family: &quot;Times New Roman&quot;, sans-serif; font-size: 16px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: left; text-transform: none; text-decoration: none; z-index: 50;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nulla facilisi etiam dignissim.</p>',
              },
              {
                id: "36ab64a9-3cae-4e09-9faa-54261da45808",
                tag: "a",
                placeholder: "Button text",
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
                  {
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
                  },
                ],
                htmlOptions: [
                  {
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
                  },
                ],
                editable: false,
                stylePreset: [
                  {
                    property: "display",
                    value: "block",
                  },
                ],
                cssProperties: {
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
                    value: 15,
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
                    value: "#c70a0a",
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
                htmlProperties: {
                  href: {
                    property: "href",
                    value:
                      "https://developer.mozilla.org/ru/docs/Web/HTML/Element/video",
                  },
                  target: {
                    property: "target",
                    value: "_blank",
                  },
                },
                inlineStyles:
                  "border-width : 0px; border-radius : 0px; border-color : #222222; margin-top : 0px; margin-bottom : 0px; margin-left : 15px; margin-right : 0px; padding-top : 10px; padding-bottom : 10px; padding-left : 15px; padding-right : 15px; width : 120px; height : auto; background-color : #c70a0a; font-size : 14px; color : #FFFFFF; font-family : Times New Roman, sans-serif; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : center; text-transform : none; text-decoration : none; ",
                markup:
                  '<span id="36ab64a9-3cae-4e09-9faa-54261da45808" data-type="item" href="https://developer.mozilla.org/ru/docs/Web/HTML/Element/video" target="_blank" style="border-width: 0px; border-radius: 0px; border-color: rgb(34, 34, 34); margin: 0px 0px 0px 15px; padding: 10px 15px; width: 120px; height: auto; background-color: rgb(199, 10, 10); font-size: 14px; color: rgb(255, 255, 255); font-family: &quot;Times New Roman&quot;, sans-serif; font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: center; text-transform: none; text-decoration: none; display: block;">Button text</span>',
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
                value: "#00FFFFF",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : #00FFFFF; ",
          },
          {
            id: "23a5be94-5259-49ae-97e1-7f744b7a0591",
            children: [
              {
                id: "1595a8b9-9e3a-47a2-a034-6f9bcf69cbb0",
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
                stylePreset: [
                  {
                    property: "max-width",
                    value: "100%",
                  },
                ],
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
                  width: {
                    property: "width",
                    value: "auto",
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
                htmlProperties: {
                  src: {
                    property: "src",
                    value:
                      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJ1c2luZXNzfGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60",
                  },
                },
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 10px; padding-bottom : 10px; padding-left : 10px; padding-right : 10px; width : auto; height : 100%; background-color : #00FFFFF; ",
                markup:
                  '<img id="1595a8b9-9e3a-47a2-a034-6f9bcf69cbb0" data-type="item" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJ1c2luZXNzfGVufDB8fDB8fHwy&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" style="margin: 0px; padding: 10px; width: auto; height: 100%; max-width: 100%;">',
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
      {
        id: "bdf9a11d-352a-4c24-978c-01332a9ce2a2",
        items: [
          {
            id: "5541b3f0-9239-490b-8f71-545d6cedf043",
            children: [
              {
                id: "136df9f7-5f30-4784-8780-3efde155afa0",
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
                stylePreset: [
                  {
                    property: "max-width",
                    value: "100%",
                  },
                ],
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
                  width: {
                    property: "width",
                    value: "auto",
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
                htmlProperties: {
                  src: {
                    property: "src",
                    value:
                      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJ1c2luZXNzfGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60",
                  },
                },
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 10px; padding-bottom : 10px; padding-left : 10px; padding-right : 10px; width : auto; height : 100%; background-color : #00FFFFF; ",
                markup:
                  '<img id="136df9f7-5f30-4784-8780-3efde155afa0" data-type="item" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJ1c2luZXNzfGVufDB8fDB8fHwy&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" style="margin: 0px; padding: 10px; width: auto; height: 100%; max-width: 100%;">',
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
                value: "#00FFFFF",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : #00FFFFF; ",
          },
          {
            id: "fb4093f2-eb0a-46b6-bc93-15a7e1e4e4b0",
            children: [
              {
                id: "5bdcff78-d498-4357-adb1-ad433b573d18",
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
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
                cssProperties: {
                  "font-family": {
                    property: "font-family",
                    value: "Times New Roman, sans-serif",
                  },
                  "font-size": {
                    property: "font-size",
                    value: 23,
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
                    value: 15,
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
                },
                htmlProperties: {},
                inlineStyles:
                  "font-family : Times New Roman, sans-serif; font-size : 23px; color : #222222; font-weight : 400; font-style : normal; line-height : 36px; letter-spacing : 1px; text-align : left; text-transform : none; text-decoration : none; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 15px; padding-right : 0px; width : 100%; height : auto; background-color : #00FFFFF; ",
                markup:
                  '<h1 id="5bdcff78-d498-4357-adb1-ad433b573d18" data-type="item" style="font-family: &quot;Times New Roman&quot;, sans-serif; font-size: 23px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 36px; letter-spacing: 1px; text-align: left; text-transform: none; text-decoration: none; margin: 0px; padding: 0px 0px 0px 15px; width: 100%; height: auto; z-index: 50;">Heading</h1>',
              },
              {
                id: "0fbd97be-8cae-4e46-ab24-6ab582188ad8",
                tag: "p",
                placeholder:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nulla faci",
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
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 15px; padding-left : 15px; padding-right : 15px; width : 100%; height : auto; background-color : #00FFFFF; font-family : Times New Roman, sans-serif; font-size : 14px; color : #222222; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : left; text-transform : none; text-decoration : none; ",
                markup:
                  '<p id="0fbd97be-8cae-4e46-ab24-6ab582188ad8" data-type="item" style="margin: 0px; padding: 0px 15px 15px; width: 100%; height: auto; font-family: &quot;Times New Roman&quot;, sans-serif; font-size: 14px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: left; text-transform: none; text-decoration: none; z-index: 50;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nulla faci</p>',
              },
              {
                id: "38897ed8-d7b8-4dbe-a141-4b8175f645ae",
                tag: "a",
                placeholder: "Button text",
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
                  {
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
                  },
                ],
                htmlOptions: [
                  {
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
                  },
                ],
                editable: false,
                stylePreset: [
                  {
                    property: "display",
                    value: "block",
                  },
                ],
                cssProperties: {
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
                    value: 15,
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
                    value: "#c70a0a",
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
                htmlProperties: {
                  href: {
                    property: "href",
                    value:
                      "https://developer.mozilla.org/ru/docs/Web/HTML/Element/video",
                  },
                  target: {
                    property: "target",
                    value: "_blank",
                  },
                },
                inlineStyles:
                  "border-width : 0px; border-radius : 0px; border-color : #222222; margin-top : 0px; margin-bottom : 0px; margin-left : 15px; margin-right : 0px; padding-top : 10px; padding-bottom : 10px; padding-left : 15px; padding-right : 15px; width : 120px; height : auto; background-color : #c70a0a; font-size : 14px; color : #FFFFFF; font-family : Times New Roman, sans-serif; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : center; text-transform : none; text-decoration : none; ",
                markup:
                  '<span id="38897ed8-d7b8-4dbe-a141-4b8175f645ae" data-type="item" href="https://developer.mozilla.org/ru/docs/Web/HTML/Element/video" target="_blank" style="border-width: 0px; border-radius: 0px; border-color: rgb(34, 34, 34); margin: 0px 0px 0px 15px; padding: 10px 15px; width: 120px; height: auto; background-color: rgb(199, 10, 10); font-size: 14px; color: rgb(255, 255, 255); font-family: &quot;Times New Roman&quot;, sans-serif; font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: center; text-transform: none; text-decoration: none; display: block;">Button text</span>',
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
      {
        id: "95f0f087-c312-4d83-8b5f-d546961194be",
        items: [
          {
            id: "e98f355c-c833-4a8f-8efb-d3f02f647608",
            children: [
              {
                id: "e1fc9920-d55b-4d6e-ae46-66344d4af6a9",
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
                editable: false,
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
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
                    value: 35,
                    unit: "px",
                  },
                  "background-color": {
                    property: "background-color",
                    value: "#00FFFFF",
                  },
                },
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : 35px; background-color : #00FFFFF; ",
                markup:
                  '<div id="e1fc9920-d55b-4d6e-ae46-66344d4af6a9" data-type="item" style="margin: 0px; padding: 0px; width: 100%; height: 35px; z-index: 50;"></div>',
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
        id: "619f78ad-8e8f-4cd2-8526-1163e0deed32",
        items: [
          {
            id: "7b661718-5e42-431e-a516-3d2ce446e277",
            children: [
              {
                id: "b5f3fe01-ab7d-48f5-bf6f-f51d05cd9221",
                tag: "p",
                placeholder:
                  "Massa ultricies mi quis hendrerit dolor magna. Ut tortor pretium viverra suspendisse potenti nullam. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Vel risus commodo viverra maecenas accumsan. ",
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
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
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
                    value: 20,
                    unit: "px",
                  },
                  "padding-bottom": {
                    property: "padding-bottom",
                    value: 20,
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
                    value: "#c70a0a",
                  },
                  "font-family": {
                    property: "font-family",
                    value: "Times New Roman, sans-serif",
                  },
                  "font-size": {
                    property: "font-size",
                    value: 16,
                    unit: "px",
                  },
                  color: {
                    property: "color",
                    value: "#fffafa",
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 20px; padding-bottom : 20px; padding-left : 15px; padding-right : 15px; width : 100%; height : auto; background-color : #c70a0a; font-family : Times New Roman, sans-serif; font-size : 16px; color : #fffafa; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : center; text-transform : none; text-decoration : none; ",
                markup:
                  '<p id="b5f3fe01-ab7d-48f5-bf6f-f51d05cd9221" data-type="item" style="margin: 0px; padding: 20px 15px; width: 100%; height: auto; background-color: rgb(199, 10, 10); font-family: &quot;Times New Roman&quot;, sans-serif; font-size: 16px; color: rgb(255, 250, 250); font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: center; text-transform: none; text-decoration: none; z-index: 50;">Massa ultricies mi quis hendrerit dolor magna. Ut tortor pretium viverra suspendisse potenti nullam. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Vel risus commodo viverra maecenas accumsan. </p>',
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
        id: "c776b3ce-d3c5-46e8-92f6-ecdefc81a336",
        items: [
          {
            id: "4cdc0b05-5684-4f7f-b7a0-c1e3ed2d74f3",
            children: [
              {
                id: "af74a302-9465-4e5b-aa03-a9839770f004",
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
                editable: false,
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
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
                    value: 35,
                    unit: "px",
                  },
                  "background-color": {
                    property: "background-color",
                    value: "#00FFFFF",
                  },
                },
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : 35px; background-color : #00FFFFF; ",
                markup:
                  '<div id="af74a302-9465-4e5b-aa03-a9839770f004" data-type="item" style="margin: 0px; padding: 0px; width: 100%; height: 35px; z-index: 50;"></div>',
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
        id: "1d2e03ab-a9aa-4e00-ad7b-f96eb6352bb8",
        items: [
          {
            id: "f69654e9-7eeb-42e4-8287-3614ce02426e",
            children: [
              {
                id: "46aef8c2-01cf-40ff-8822-ef9f0743db0c",
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
                stylePreset: [
                  {
                    property: "max-width",
                    value: "100%",
                  },
                ],
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
                  width: {
                    property: "width",
                    value: "auto",
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
                htmlProperties: {
                  src: {
                    property: "src",
                    value:
                      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJ1c2luZXNzfGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60",
                  },
                },
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 10px; padding-bottom : 10px; padding-left : 10px; padding-right : 10px; width : auto; height : 100%; background-color : #00FFFFF; ",
                markup:
                  '<img id="46aef8c2-01cf-40ff-8822-ef9f0743db0c" data-type="item" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJ1c2luZXNzfGVufDB8fDB8fHwy&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" style="margin: 0px; padding: 10px; width: auto; height: 100%; max-width: 100%;">',
              },
              {
                id: "ae08ede3-1af6-4f4b-b952-588194733654",
                tag: "h1",
                placeholder: "Image 3",
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
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
                cssProperties: {
                  "font-family": {
                    property: "font-family",
                    value: "Times New Roman, sans-serif",
                  },
                  "font-size": {
                    property: "font-size",
                    value: 18,
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
                    value: "auto",
                  },
                  "background-color": {
                    property: "background-color",
                    value: "#00FFFFF",
                  },
                },
                htmlProperties: {},
                inlineStyles:
                  "font-family : Times New Roman, sans-serif; font-size : 18px; color : #222222; font-weight : 400; font-style : normal; line-height : 36px; letter-spacing : 1px; text-align : center; text-transform : none; text-decoration : none; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : #00FFFFF; ",
                markup:
                  '<h1 id="ae08ede3-1af6-4f4b-b952-588194733654" data-type="item" style="font-family: &quot;Times New Roman&quot;, sans-serif; font-size: 18px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 36px; letter-spacing: 1px; text-align: center; text-transform: none; text-decoration: none; margin: 0px; padding: 0px; width: 100%; height: auto; z-index: 50;">Image 3</h1>',
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
                value: "#00FFFFF",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : #00FFFFF; ",
          },
          {
            id: "a7264dcb-14fc-4027-bde1-8efda932855c",
            children: [
              {
                id: "0773ccf5-e765-418f-8e71-b63305977a53",
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
                stylePreset: [
                  {
                    property: "max-width",
                    value: "100%",
                  },
                ],
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
                  width: {
                    property: "width",
                    value: "auto",
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
                htmlProperties: {
                  src: {
                    property: "src",
                    value:
                      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJ1c2luZXNzfGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60",
                  },
                },
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 10px; padding-bottom : 10px; padding-left : 10px; padding-right : 10px; width : auto; height : 100%; background-color : #00FFFFF; ",
                markup:
                  '<img id="0773ccf5-e765-418f-8e71-b63305977a53" data-type="item" src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGJ1c2luZXNzfGVufDB8fDB8fHwy&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" style="margin: 0px; padding: 10px; width: auto; height: 100%; max-width: 100%;">',
              },
              {
                id: "4ae86a76-1328-4b2f-ab5f-17c0c8d098ed",
                tag: "h1",
                placeholder: "Image 2",
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
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
                cssProperties: {
                  "font-family": {
                    property: "font-family",
                    value: "Times New Roman, sans-serif",
                  },
                  "font-size": {
                    property: "font-size",
                    value: 18,
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
                    value: "auto",
                  },
                  "background-color": {
                    property: "background-color",
                    value: "#00FFFFF",
                  },
                },
                htmlProperties: {},
                inlineStyles:
                  "font-family : Times New Roman, sans-serif; font-size : 18px; color : #222222; font-weight : 400; font-style : normal; line-height : 36px; letter-spacing : 1px; text-align : center; text-transform : none; text-decoration : none; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : #00FFFFF; ",
                markup:
                  '<h1 id="4ae86a76-1328-4b2f-ab5f-17c0c8d098ed" data-type="item" style="font-family: &quot;Times New Roman&quot;, sans-serif; font-size: 18px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 36px; letter-spacing: 1px; text-align: center; text-transform: none; text-decoration: none; margin: 0px; padding: 0px; width: 100%; height: auto; z-index: 50;">Image 2</h1>',
              },
              {
                id: "bb4e90b4-3965-4efe-a9cb-93f2f4eae787",
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
                editable: false,
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
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
                    value: "#00FFFFF",
                  },
                },
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : 60px; background-color : #00FFFFF; ",
                markup:
                  '<div id="bb4e90b4-3965-4efe-a9cb-93f2f4eae787" data-type="item" style="margin: 0px; padding: 0px; width: 100%; height: 60px; z-index: 50;"></div>',
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
                value: "#00FFFFF",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : #00FFFFF; ",
          },
          {
            id: "192e2d00-543e-4f25-8a36-bfe37e182e29",
            children: [
              {
                id: "1fd4bb6d-1c3f-4ae7-a736-bb06e3c09fdb",
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
                stylePreset: [
                  {
                    property: "max-width",
                    value: "100%",
                  },
                ],
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
                  width: {
                    property: "width",
                    value: "auto",
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
                htmlProperties: {
                  src: {
                    property: "src",
                    value:
                      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJ1c2luZXNzfGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60",
                  },
                },
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 10px; padding-bottom : 10px; padding-left : 10px; padding-right : 10px; width : auto; height : 100%; background-color : #00FFFFF; ",
                markup:
                  '<img id="1fd4bb6d-1c3f-4ae7-a736-bb06e3c09fdb" data-type="item" src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJ1c2luZXNzfGVufDB8fDB8fHwy&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" style="margin: 0px; padding: 10px; width: auto; height: 100%; max-width: 100%;">',
              },
              {
                id: "b966924c-fe63-4a39-8435-573b42e91a24",
                tag: "h1",
                placeholder: "Image 3",
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
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
                cssProperties: {
                  "font-family": {
                    property: "font-family",
                    value: "Times New Roman, sans-serif",
                  },
                  "font-size": {
                    property: "font-size",
                    value: 18,
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
                    value: "auto",
                  },
                  "background-color": {
                    property: "background-color",
                    value: "#00FFFFF",
                  },
                },
                htmlProperties: {},
                inlineStyles:
                  "font-family : Times New Roman, sans-serif; font-size : 18px; color : #222222; font-weight : 400; font-style : normal; line-height : 36px; letter-spacing : 1px; text-align : center; text-transform : none; text-decoration : none; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : #00FFFFF; ",
                markup:
                  '<h1 id="b966924c-fe63-4a39-8435-573b42e91a24" data-type="item" style="font-family: &quot;Times New Roman&quot;, sans-serif; font-size: 18px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 36px; letter-spacing: 1px; text-align: center; text-transform: none; text-decoration: none; margin: 0px; padding: 0px; width: 100%; height: auto; z-index: 50;">Image 3</h1>',
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
                value: "#00FFFFF",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : #00FFFFF; ",
          },
        ],
        columns: 3,
        "data-type": "block",
      },
    ],
  },
  {
    name: "Infographic Promotion Email 4",
    id: "f55c483a-41bd-11ee-be56-0242ac120002",
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
                id: "f35263c9-5ab9-4755-b474-cd525e96c56a",
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
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
                cssProperties: {
                  "font-family": {
                    property: "font-family",
                    value: "Times New Roman, sans-serif",
                  },
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
                    value: 100,
                    unit: "%",
                  },
                  height: {
                    property: "height",
                    value: "auto",
                  },
                  "background-color": {
                    property: "background-color",
                    value: "#ede3e3",
                  },
                },
                htmlProperties: {},
                inlineStyles:
                  "font-family : Times New Roman, sans-serif; font-size : 36px; color : #222222; font-weight : 400; font-style : normal; line-height : 36px; letter-spacing : 1px; text-align : center; text-transform : none; text-decoration : none; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 10px; padding-bottom : 10px; padding-left : 10px; padding-right : 10px; width : 100%; height : auto; background-color : #ede3e3; ",
                markup:
                  '<h1 id="f35263c9-5ab9-4755-b474-cd525e96c56a" data-type="item" style="font-family: &quot;Times New Roman&quot;, sans-serif; font-size: 36px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 36px; letter-spacing: 1px; text-align: center; text-transform: none; text-decoration: none; margin: 0px; padding: 10px; width: 100%; height: auto; background-color: rgb(237, 227, 227); z-index: 50;">Heading</h1>',
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
        id: "519f3f56-3090-4feb-9fb7-eb45f21ccaa3",
        items: [
          {
            id: "25c714fa-377f-4900-b2ba-38edd6e7c15b",
            children: [
              {
                id: "a2717469-a941-44f2-a250-300763fed25f",
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
                stylePreset: [
                  {
                    property: "max-width",
                    value: "100%",
                  },
                ],
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
                  width: {
                    property: "width",
                    value: "auto",
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
                htmlProperties: {
                  src: {
                    property: "src",
                    value:
                      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
                  },
                },
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 10px; padding-bottom : 10px; padding-left : 10px; padding-right : 10px; width : auto; height : 100%; background-color : #00FFFFF; ",
                markup:
                  '<img id="a2717469-a941-44f2-a250-300763fed25f" data-type="item" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1172&amp;q=80" style="margin: 0px; padding: 10px; width: auto; height: 100%; max-width: 100%;">',
              },
              {
                id: "d319ae6a-5cc1-4a4b-844c-2fd40349eb3a",
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
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : #00FFFFF; font-family : Times New Roman, sans-serif; font-size : 14px; color : #222222; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : center; text-transform : none; text-decoration : none; ",
                markup:
                  '<p id="d319ae6a-5cc1-4a4b-844c-2fd40349eb3a" data-type="item" style="margin: 0px; padding: 0px; width: 100%; height: auto; font-family: &quot;Times New Roman&quot;, sans-serif; font-size: 14px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: center; text-transform: none; text-decoration: none; z-index: 50;">This is a new text</p>',
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
                value: "#00FFFFF",
              },
            },
            inlineStyles:
              "width : 600px; height : auto; margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; background-color : #00FFFFF; ",
          },
          {
            id: "f2cd1a93-daae-4ba5-b420-c29bdff7d410",
            children: [
              {
                id: "d0f58e6d-41ee-47c3-b387-d2354df655ad",
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
                stylePreset: [
                  {
                    property: "max-width",
                    value: "100%",
                  },
                ],
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
                  width: {
                    property: "width",
                    value: "auto",
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
                htmlProperties: {
                  src: {
                    property: "src",
                    value:
                      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                  },
                },
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 10px; padding-bottom : 10px; padding-left : 10px; padding-right : 10px; width : auto; height : 100%; background-color : #00FFFFF; ",
                markup:
                  '<img id="d0f58e6d-41ee-47c3-b387-d2354df655ad" data-type="item" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80" style="margin: 0px; padding: 10px; width: auto; height: 100%; max-width: 100%;">',
              },
              {
                id: "e273a648-6801-4fd7-81cb-ee7054bc5634",
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
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : 100%; height : auto; background-color : #00FFFFF; font-family : Times New Roman, sans-serif; font-size : 14px; color : #222222; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : center; text-transform : none; text-decoration : none; ",
                markup:
                  '<p id="e273a648-6801-4fd7-81cb-ee7054bc5634" data-type="item" style="margin: 0px; padding: 0px; width: 100%; height: auto; font-family: &quot;Times New Roman&quot;, sans-serif; font-size: 14px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: center; text-transform: none; text-decoration: none; z-index: 50;">This is a new text</p>',
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
      {
        id: "1db86246-c980-4b1a-94a4-aa3e8c5d29f4",
        items: [
          {
            id: "d1b84936-4442-4b13-910a-7506c67f1c0b",
            children: [
              {
                id: "9ee7431a-eb28-421c-8f06-11a87508ec42",
                tag: "p",
                placeholder:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nulla facilisi etiam dignissim. Consectetur a erat nam at lectus urna. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Id diam maecenas ultricies mi eget mauris pharetra et. Commodo ullamcorper a lacus vestibulum sed arcu non. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Sed nisi lacus sed viverra tellus in hac. Maecenas ultricies mi eget mauris pharetra et ultrices. Nunc lobortis mattis aliquam faucibus purus in.",
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
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 10px; padding-bottom : 10px; padding-left : 10px; padding-right : 10px; width : 100%; height : auto; background-color : #00FFFFF; font-family : Times New Roman, sans-serif; font-size : 14px; color : #222222; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : center; text-transform : none; text-decoration : none; ",
                markup:
                  '<p id="9ee7431a-eb28-421c-8f06-11a87508ec42" data-type="item" style="margin: 0px; padding: 10px; width: 100%; height: auto; font-family: &quot;Times New Roman&quot;, sans-serif; font-size: 14px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: center; text-transform: none; text-decoration: none; z-index: 50;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nulla facilisi etiam dignissim. Consectetur a erat nam at lectus urna. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Id diam maecenas ultricies mi eget mauris pharetra et. Commodo ullamcorper a lacus vestibulum sed arcu non. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Sed nisi lacus sed viverra tellus in hac. Maecenas ultricies mi eget mauris pharetra et ultrices. Nunc lobortis mattis aliquam faucibus purus in.</p>',
              },
              {
                id: "6d4fcf72-cd2f-4b52-925d-049eb29806ab",
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
                editable: false,
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
                cssProperties: {
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 5px; margin-bottom : 5px; margin-left : 15px; margin-right : 15px; padding-top : 0px; padding-bottom : 0px; padding-left : 0px; padding-right : 0px; width : auto; height : 2px; background : #444444; ",
                markup:
                  '<div id="6d4fcf72-cd2f-4b52-925d-049eb29806ab" data-type="item" style="margin: 5px 15px; padding: 0px; width: auto; height: 2px; background: rgb(68, 68, 68); z-index: 50;"></div>',
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
        id: "c894ed7f-3a7a-4e0d-b567-438677f58aa2",
        items: [
          {
            id: "aa898efe-28cc-4ee4-b8dd-e665d3f1e3dc",
            children: [
              {
                id: "e3df1cdc-afe4-4707-8600-b9fb82852000",
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
                stylePreset: [
                  {
                    property: "max-width",
                    value: "100%",
                  },
                ],
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
                  width: {
                    property: "width",
                    value: "auto",
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
                htmlProperties: {
                  src: {
                    property: "src",
                    value:
                      "https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                  },
                },
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 10px; padding-bottom : 10px; padding-left : 10px; padding-right : 10px; width : auto; height : 100%; background-color : #00FFFFF; ",
                markup:
                  '<img id="e3df1cdc-afe4-4707-8600-b9fb82852000" data-type="item" src="https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80" style="margin: 0px; padding: 10px; width: auto; height: 100%; max-width: 100%;">',
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
        id: "f60c9c22-6bc9-4389-b896-c1f07317e949",
        items: [
          {
            id: "b2c235df-f340-4e21-918f-6a6379d9bab0",
            children: [
              {
                id: "45cd4a29-0c55-49b1-b65c-c7d126909131",
                tag: "p",
                placeholder:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nulla facilisi etiam dignissim",
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
                stylePreset: [
                  {
                    property: "z-index",
                    value: 50,
                  },
                ],
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
                    value: 8,
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
                htmlProperties: {},
                inlineStyles:
                  "margin-top : 0px; margin-bottom : 0px; margin-left : 0px; margin-right : 0px; padding-top : 8px; padding-bottom : 10px; padding-left : 10px; padding-right : 10px; width : 100%; height : auto; background-color : #00FFFFF; font-family : Times New Roman, sans-serif; font-size : 14px; color : #222222; font-weight : 400; font-style : normal; line-height : 22px; letter-spacing : 1px; text-align : center; text-transform : none; text-decoration : none; ",
                markup:
                  '<p id="45cd4a29-0c55-49b1-b65c-c7d126909131" data-type="item" style="margin: 0px; padding: 8px 10px 10px; width: 100%; height: auto; font-family: &quot;Times New Roman&quot;, sans-serif; font-size: 14px; color: rgb(34, 34, 34); font-weight: 400; font-style: normal; line-height: 22px; letter-spacing: 1px; text-align: center; text-transform: none; text-decoration: none; z-index: 50;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nulla facilisi etiam dignissim</p>',
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
    ],
  },
  {
    name: "Infographic Promotion Email 4",
    id: "15b2aba6-41be-11ee-be56-0242ac120002",
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
    id: "1f8d8952-41be-11ee-be56-0242ac120002",
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
