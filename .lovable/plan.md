## What's happening

`#tanstack-router-entry` is a **virtual module** created by the `tanstackStart` Vite plugin at build time. It's never a real file on disk — it only exists while `vite build` is running. Your `src/server.ts` doesn't import it directly, but the chain `src/server.ts → @tanstack/react-start/server-entry → #tanstack-router-entry` does.

That import only resolves when the build goes through Vite. The error `Could not resolve "#tanstack-router-entry"` means something is trying to bundle `src/server.ts` with **esbuild/Wrangler directly, skipping Vite**. That "something" is almost certainly `wrangler deploy` running against your source files (because `wrangler.jsonc` has `"main": "src/server.ts"`).

Nothing in the recent team-page edit can cause this — it's a deploy-pipeline issue that surfaces whenever Cloudflare Workers Builds runs `wrangler deploy` without first running `vite build` (or runs `wrangler deploy` from the repo root instead of the Vite output directory).

## Plan

### 1. Confirm the Cloudflare Workers Build configuration

In the Cloudflare dashboard → **Workers & Pages → your worker → Settings → Builds**, check:
- **Build command** — should be `npm run build` (i.e. `vite build`).
- **Deploy command** — should be `npx wrangler deploy` running against the **Vite-emitted output**, not the source `src/server.ts`.
- **Root directory** — should be the repo root.

The most common broken setup is: build command empty (or just `npm install`), deploy command `npx wrangler deploy`. That makes Wrangler bundle `src/server.ts` itself with esbuild and fail on `#tanstack-router-entry`.

### 2. Fix the build/deploy pipeline

`@cloudflare/vite-plugin` (already in this project) emits a deployable worker bundle plus its own `wrangler.json` into `dist/<worker-name>/` when you run `vite build`. The correct sequence on Cloudflare Workers Builds is:

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy --config dist/ioaiphweb/wrangler.json`
  - (Exact path becomes visible after the first local `npm run build` — usually `dist/ioaiphweb/wrangler.json` based on the worker name in `wrangler.jsonc`.)

That ensures Wrangler deploys the **Vite-built worker** (which has `#tanstack-router-entry` already inlined) instead of trying to re-bundle the source.

### 3. Verify locally before pushing

Before changing the Cloudflare settings, I'll have you run `npm run build` locally and confirm:
- Build succeeds with no `#tanstack-router-entry` error.
- `dist/ioaiphweb/` contains a built worker file and a generated `wrangler.json`.

If the local build passes, the fix is purely a Cloudflare dashboard config change — no code edits needed in the repo. If the local build also fails, something in the repo itself is wrong and we'll dig further from there.

### 4. Do NOT change wrangler.jsonc `main`

`"main": "src/server.ts"` is correct for **local dev** (Vite reads it). Don't repoint it at a `dist/` path — that breaks dev. The Vite plugin handles the dist path automatically via the generated `dist/.../wrangler.json` used at deploy time.

## What I need from you to execute

A screenshot (or copy/paste) of the **Builds** section of your Cloudflare Worker settings — specifically the Build command and Deploy command fields — so I can tell you the exact strings to put there. If you'd rather just try the change, set build = `npm run build` and deploy = `npx wrangler deploy --config dist/ioaiphweb/wrangler.json` and re-run the deploy.

## Technical notes

- `#tanstack-router-entry` is registered by `tanstackStart()` (included via `@lovable.dev/vite-tanstack-config`). It is not an npm package, not a file, and not something to add to `package.json`.
- The hint about `.env` / `VITE_SUPABASE_*` env vars is unrelated to this specific error — missing env vars fail differently. Don't change env vars to chase this.
- Self-hosting docs: https://docs.lovable.dev/tips-tricks/self-hosting
