## Bug Report: `--on-success` hook runs multiple times in workspace watch mode

### Description
When using `tsdown` in watch mode within a monorepo workspace, the `--on-success` hook is triggered multiple times per build instead of once.

### Reproduction Steps
1. Clone the repository
2. Run `pnpm install`
3. Run `pnpm run dev`
4. Observe that the `--on-success` hook executes multiple times

### Expected Behavior
The `--on-success` hook should run **once** after a successful build completes.

### Actual Behavior
The `--on-success` hook runs **multiple times** when building and running a workspace.

### Environment
- `tsdown` version: v0.21.0-beta.2
- Package manager: `pnpm`
- Workspace: Yes (monorepo)

---

```sh
tsdown-workspace-demo on  main [✘!] via  v24.14.0
➜ pnpm run dev

> tsdown-workspace-demo@0.0.0 dev /Users/hanneswidrig/GitHub/tsdown-workspace-demo
> tsdown --watch --on-success 'node apps/api/dist/index.mjs'

ℹ tsdown v0.21.0-beta.2 powered by rolldown v1.0.0-rc.5
ℹ config file: /Users/hanneswidrig/GitHub/tsdown-workspace-demo/tsdown.config.ts
ℹ config file: /Users/hanneswidrig/GitHub/tsdown-workspace-demo/apps/api/tsdown.config.ts
ℹ config file: /Users/hanneswidrig/GitHub/tsdown-workspace-demo/libs/nebula/tsdown.config.ts
ℹ config file: /Users/hanneswidrig/GitHub/tsdown-workspace-demo/libs/zenith/tsdown.config.ts
ℹ config file: /Users/hanneswidrig/GitHub/tsdown-workspace-demo/libs/aurora/tsdown.config.ts
ℹ [api] entry: ../../src/index.ts
ℹ [api] tsconfig: ../../tsconfig.json
ℹ [@lib/aurora] entry: ../../src/index.ts
ℹ [@lib/aurora] tsconfig: ../../tsconfig.json
ℹ [@lib/nebula] entry: ../../src/index.ts
ℹ [@lib/nebula] tsconfig: ../../tsconfig.json
ℹ [@lib/zenith] entry: ../../src/index.ts
ℹ [@lib/zenith] tsconfig: ../../tsconfig.json
ℹ Build start
ℹ Cleaning 8 files
ℹ [api] dist/index.mjs    0.27 kB │ gzip: 0.17 kB
ℹ [api] dist/index.d.mts  0.08 kB │ gzip: 0.09 kB
ℹ [api] 2 files, total: 0.35 kB
ℹ [@lib/aurora] dist/index.mjs    0.09 kB │ gzip: 0.09 kB
ℹ [@lib/aurora] dist/index.d.mts  0.10 kB │ gzip: 0.10 kB
ℹ [@lib/aurora] 2 files, total: 0.18 kB
ℹ [@lib/nebula] dist/index.mjs    0.09 kB │ gzip: 0.09 kB
ℹ [@lib/nebula] dist/index.d.mts  0.10 kB │ gzip: 0.10 kB
ℹ [@lib/nebula] 2 files, total: 0.18 kB
ℹ [@lib/zenith] dist/index.mjs    0.09 kB │ gzip: 0.09 kB
ℹ [@lib/zenith] dist/index.d.mts  0.10 kB │ gzip: 0.10 kB
ℹ [@lib/zenith] 2 files, total: 0.18 kB
✔ [@lib/aurora] Rebuilt in 585ms.
✔ [api] Rebuilt in 585ms.
✔ [@lib/nebula] Rebuilt in 586ms.
✔ [@lib/zenith] Rebuilt in 586ms.
Started application
Started application
Started application
Started application
```
