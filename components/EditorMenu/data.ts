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
      tag: "Layout",
      placeholder: "New container",
    },
  },
  {
    title: "Heading",
    icon: "radix-icons:heading",
    options: [typographySettings, dimensionsSettings],
    element: {
      tag: "h1",
      placeholder: "Heading",
    },
  },
  {
    title: "Text",
    icon: "radix-icons:text",
    options: [typographySettings, dimensionsSettings],
    element: {
      tag: "p",
      placeholder: "This is a new text",
    },
  },
  {
    title: "Button",
    icon: "radix-icons:button",
    options: [typographySettings, dimensionsSettings],
    element: {
      tag: "a",
      placeholder: "Button text",
    },
  },
  {
    title: "Image",
    icon: "radix-icons:image",
    options: [imageSettings, dimensionsSettings],
    element: {
      tag: "img",
    },
  },
  {
    title: "Divider",
    icon: "radix-icons:divider-horizontal",
    options: [dimensionsSettings],
    element: {
      tag: "hr",
    },
  },
  {
    title: "Table",
    icon: "radix-icons:table",
    options: [typographySettings, dimensionsSettings],
    element: {
      tag: "table",
      placeholder: "This is a new table",
    },
  },
  {
    title: "Video",
    icon: "octicon:video-24",
    options: [dimensionsSettings],
    element: {
      tag: "video",
      placeholder: "This is a new video",
    },
  },
  {
    title: "Html",
    icon: "radix-icons:code",
    options: [dimensionsSettings],
    element: {
      tag: "html",
      placeholder: "insert your html here",
    },
  },
];

const editorMenuSettings = [
  {
    title: "Layout",
    options: [layoutSettings, dimensionsSettings],
  },
  {
    title: "Heading",
    options: [typographySettings, dimensionsSettings],
  },
  {
    title: "Text",
    options: [typographySettings, dimensionsSettings],
  },
  {
    title: "Button",
    options: [typographySettings, dimensionsSettings],
  },
  {
    title: "Image",
    options: [imageSettings, dimensionsSettings],
  },
  {
    title: "Divider",
    options: [dimensionsSettings],
  },
  {
    title: "Table",
    options: [typographySettings, dimensionsSettings],
  },
  {
    title: "Video",
    options: [dimensionsSettings],
  },
  {
    title: "Html",
    options: [dimensionsSettings],
  },
];
