import { fileURLToPath } from "url";
import { defineVitestConfig } from "nuxt-vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineVitestConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: "nuxt",
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL("./src", import.meta.url)),
        overrides: {
          // other nuxt config you want to pass
        },
      },
    },
    alias: {
      // "@": new URL("./src", import.meta.url).pathname,
    },
  },
});
