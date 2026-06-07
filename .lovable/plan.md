Upload the new Solidum photo as a Lovable asset and update the IOAI section in `src/routes/_site.team.tsx` to use it (replacing `solidum-jhareign-segura.png.asset.json`). The APOAI/NEOAI Solidum photo (`@/assets/solidum.png`) stays unchanged.

Steps:
1. Run `lovable-assets create` on the uploaded image → write `src/assets/solidum-jhareign-segura-v2.png.asset.json`.
2. Update the `solidumIoaiPhoto` import in `_site.team.tsx` to point at the new pointer file.
3. Delete the old `solidum-jhareign-segura.png.asset.json` via `assets--delete_asset`.