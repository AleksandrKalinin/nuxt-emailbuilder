import { templatesTest } from "./templates.cy";
import { headerTest } from "./header.cy";
import { editorTest } from "./editor.cy";

describe("Running tests", () => {
  // headerTest();
  templatesTest();
  editorTest();
});
