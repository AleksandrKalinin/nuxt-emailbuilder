const createLink = (link: string) => {
  const iconLink = document.createElement("a");
  iconLink.href = link;
  iconLink.target = "_blank";
  iconLink.style.display = "inline-block";
  iconLink.style.height = "35px";
  iconLink.style.width = "35px";
  iconLink.style.margin = "0 3px 0 3px";
  return iconLink;
};

export const appendNestedIcons = (
  element: HTMLElement,
  icons: SocialIcon[],
  linkRequired: boolean
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

    if (linkRequired) {
      const iconLink = createLink(icon.link);
      iconLink.appendChild(iconEl);
      element.appendChild(iconLink);
    } else {
      element.appendChild(iconEl);
    }
  });
  return element;
};
