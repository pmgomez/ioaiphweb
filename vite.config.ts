// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { execSync } from "child_process";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

let lastUpdated = "";
try {
  lastUpdated = execSync("git log -1 --format=%cs").toString().trim();
} catch {
  lastUpdated = new Date().toISOString().split("T")[0];
}

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    define: {
      __LAST_UPDATED__: JSON.stringify(lastUpdated),
    },
  },
});
