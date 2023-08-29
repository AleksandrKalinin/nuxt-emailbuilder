export const convertStringToHTML = (input: string) => {
  const parser = new DOMParser();
  const parsedHtml = parser.parseFromString(input, "text/html");
  const html = parsedHtml.body.children[0];
  return html;
};
