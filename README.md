```sh
apps/api/src/index.ts (1:26) [UNRESOLVED_IMPORT] Warning: Could not resolve '@lib/aurora' in src/index.ts
   ╭─[ src/index.ts:1:27 ]
   │
 1 │ import { auroraKey } from "@lib/aurora";
   │                           ──────┬──────
   │                                 ╰──────── Module not found, treating it as an external dependency
───╯

apps/api/src/index.ts (2:26) [UNRESOLVED_IMPORT] Warning: Could not resolve '@lib/nebula' in src/index.ts
   ╭─[ src/index.ts:2:27 ]
   │
 2 │ import { nebulaKey } from "@lib/nebula";
   │                           ──────┬──────
   │                                 ╰──────── Module not found, treating it as an external dependency
───╯

apps/api/src/index.ts (3:26) [UNRESOLVED_IMPORT] Warning: Could not resolve '@lib/zenith' in src/index.ts
   ╭─[ src/index.ts:3:27 ]
   │
 3 │ import { zenithKey } from "@lib/zenith";
   │                           ──────┬──────
   │                                 ╰──────── Module not found, treating it as an external dependency
───╯

✔ [api] Build complete in 157ms
```
