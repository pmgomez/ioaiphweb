Fix Wrangler Worker name mismatch in `wrangler.jsonc`.

The CI warning indicates the config file uses `"tanstack-start-app"`, but the CI system expects `"ioaiphweb"`. This is a one-line change in `wrangler.jsonc`.

- Change `"name": "tanstack-start-app"` → `"name": "ioaiphweb"`

This resolves the CI override warning and keeps the config consistent with the published project name.