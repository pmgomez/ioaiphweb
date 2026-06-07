## Fix Wrangler build: unresolved TanStack Start virtual modules

The Wrangler bundler is trying to resolve three virtual module specifiers that the TanStack Start Vite plugin normally provides at build time:

- `#tanstack-start-plugin-adapters`
- `tanstack-start-manifest:v`
- `tanstack-start-injected-head-scripts:v`

Since these are virtual and not real files, Wrangler can't resolve them on its own. The fix is to add an `alias` block to `wrangler.jsonc` mapping each specifier to the concrete file inside `@tanstack/start-server-core`.

### Change

Update `wrangler.jsonc` to add an `alias` field:

```jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "ioaiphweb",
  "compatibility_date": "2025-09-24",
  "compatibility_flags": ["nodejs_compat"],
  "main": "src/server.ts",
  "alias": {
    "#tanstack-start-plugin-adapters": "./node_modules/@tanstack/start-server-core/dist/esm/plugin-adapters.js",
    "tanstack-start-manifest:v": "./node_modules/@tanstack/start-server-core/dist/esm/router-manifest.js",
    "tanstack-start-injected-head-scripts:v": "./node_modules/@tanstack/start-server-core/dist/esm/injected-head-scripts.js"
  }
}
```

This is a single-file edit; no other changes needed.
