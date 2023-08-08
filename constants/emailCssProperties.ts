export const metaTags = [
  {
    properties: [
      {
        name: "http-equiv",
        value: "Content-Type",
      },
      {
        name: "content",
        value: "text/html; charset=UTF-8",
      },
    ],
  },
  {
    properties: [
      {
        name: "name",
        value: "viewport",
      },
      {
        name: "content",
        value: "width=device-width, initial-scale=1.0",
      },
    ],
  },
  {
    properties: [
      {
        name: "name",
        value: "x-apple-disable-message-reformatting",
      },
    ],
  },
];

const ifMso9 =
  "[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]";

const ifMsoIE =
  '[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]';

const ifGteMso9 =
  '[if gte mso 9]><table cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;min-width: 320px;max-width: 600px;"><tr><td background="https://cdn.templates.unlayer.com/assets/1688640870783-BG.png" valign="top" width="100%"><v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px;"><v:fill type="frame" src="https://cdn.templates.unlayer.com/assets/1688640870783-BG.png" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><![endif]';
