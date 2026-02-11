import { defineConfig } from "tsdown";

export default defineConfig({
  workspace: ["apps/*", "libs/*"],
  entry: ["src/index.ts"],
  dts: true,
  exports: {
    devExports: "dev",
  },
  outExtensions: () => ({ js: ".js", dts: ".d.ts" }),
});
