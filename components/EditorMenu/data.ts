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
  },
  {
    title: "Heading",
    icon: "radix-icons:heading",
  },
  {
    title: "Text",
    icon: "radix-icons:text",
  },
  {
    title: "Button",
    icon: "radix-icons:button",
  },
  {
    title: "Image",
    icon: "radix-icons:image",
  },
  {
    title: "Divider",
    icon: "radix-icons:divider-horizontal",
  },
  {
    title: "Table",
    icon: "radix-icons:table",
  },
  {
    title: "Video",
    icon: "octicon:video-24",
  },
  {
    title: "Html",
    icon: "radix-icons:code",
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
