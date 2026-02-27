import { defineConfig } from "tsdown";
// import path from "node:path";

export default defineConfig((cfg) => ({
  entry: ["src/index.ts"],
  onSuccess: cfg.watch ? "node apps/api/dist/index.mjs" : undefined,
  // This has to be configured to not see [UNRESOLVED_IMPORT] warnings
  //
  // inputOptions: {
  //   resolve: {
  //     alias: {
  //       "@lib/aurora": path.resolve(
  //         import.meta.dirname,
  //         "../../libs/aurora/src/index.ts",
  //       ),
  //       "@lib/nebula": path.resolve(
  //         import.meta.dirname,
  //         "../../libs/nebula/src/index.ts",
  //       ),
  //       "@lib/zenith": path.resolve(
  //         import.meta.dirname,
  //         "../../libs/zenith/src/index.ts",
  //       ),
  //     },
  //   },
  // },
}));
