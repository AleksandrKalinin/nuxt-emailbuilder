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
      attributes: [],
    },
  },
  {
    title: "Heading",
    icon: "radix-icons:heading",
    options: [typographySettings, dimensionsSettings],
    element: {
      tag: "h1",
      placeholder: "Heading",
      attributes: [],
      style: "",
    },
  },
  {
    title: "Text",
    icon: "radix-icons:text",
    options: [typographySettings, dimensionsSettings],
    element: {
      tag: "p",
      placeholder: "This is a new text",
      attributes: [],
      style: "",
    },
  },
  {
    title: "Button",
    icon: "radix-icons:button",
    options: [typographySettings, dimensionsSettings],
    element: {
      tag: "a",
      placeholder: "Button text",
      attributes: {
        href: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/video",
      },
      style: ["button_regular", "mx-auto", "grow-0", "w-[200px]"],
    },
  },
  {
    title: "Image",
    icon: "radix-icons:image",
    options: [imageSettings, dimensionsSettings],
    element: {
      tag: "img",
      attributes: {
        src: "https://i.imgur.com/6T90fqr.png",
      },
      style: "",
    },
  },
  {
    title: "Divider",
    icon: "radix-icons:divider-horizontal",
    options: [dimensionsSettings],
    element: {
      tag: "hr",
      attributes: [],
      style: "",
    },
  },
  {
    title: "Table",
    icon: "radix-icons:table",
    options: [typographySettings, dimensionsSettings],
    element: {
      tag: "table",
      placeholder: "This is a new table",
      attributes: [],
      style: "",
    },
  },
  {
    title: "Video",
    icon: "octicon:video-24",
    options: [dimensionsSettings],
    element: {
      tag: "video",
      placeholder: "This is a new video",
      attributes: {
        autoplay: false,
        controls: true,
        width: "100%",
        height: "300px",
      },
      style: "",
    },
  },
  {
    title: "Html",
    icon: "radix-icons:code",
    options: [dimensionsSettings],
    element: {
      tag: "html",
      placeholder: "insert your html here",
      attributes: [],
      style: "",
    },
  },
];
