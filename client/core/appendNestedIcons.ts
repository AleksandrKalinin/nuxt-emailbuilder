export const appendNestedIcons = (
  element: HTMLElement,
  icons: SocialIcon[]
) => {
  icons.forEach((icon: SocialIcon) => {
    const iconEl = document.createElement("img");

    iconEl.src = icon.src;
    iconEl.title = icon.title;
    iconEl.style.pointerEvents = "none";
    iconEl.style.height = "35px";
    iconEl.style.width = "35px";
    iconEl.style.margin = "0 3px 0 3px";
    iconEl.style.display = "inline-block";

    element.appendChild(iconEl);
  });
  return element;
};
