import { defineConfig } from "tsdown";

export default defineConfig({
  workspace: ["apps/*", "libs/*"],
  entry: ["src/index.ts"],
  exports: {
    devExports: "dev",
  },
});
