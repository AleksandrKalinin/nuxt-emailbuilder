import fs from "fs";
import { defineConfig } from "cypress";

/*
interface CypressENV {
  HOME: string | undefined;
  USERPROFILE: string | undefined;
}

const cypressEnv = {} as CypressENV;

cypressEnv.HOME = process.env.HOME;
cypressEnv.USERPROFILE = process.env.USERPROFILE;
*/
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        downloads: (downloadspath) => {
          return fs.readdirSync(downloadspath);
        },
      });
    },
  },
  chromeWebSecurity: false,
});
