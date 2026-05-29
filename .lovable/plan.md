## Press & Media Coverage — 5-column card redesign

Refactor the existing press list on `src/routes/_site.press.tsx` from a 2-column bordered grid into a responsive 5-column layout of distinct cards.

### Layout
- Responsive grid: 1 col (mobile) → 2 (sm) → 3 (md) → 5 (xl). Keeps cards readable on smaller screens; 5-up only kicks in on wide displays (the user's 1439px viewport hits xl).
- Gap-based grid (`gap-4`) instead of the current `gap-px` hairline-border trick, so each item reads as a standalone card.

### Card styling
- Rounded-sm card: `border border-border bg-surface p-5`, with hover lift (`hover:border-primary/40 hover:-translate-y-0.5 transition-all`) and subtle shadow on hover.
- Internal structure (top → bottom, flex column, full height so cards in a row align):
  1. Outlet name — bold, `text-primary`, mono uppercase micro-label
  2. Date (if present) — muted mono caption
  3. Article title — `font-display`, slightly smaller (`text-base`) to fit narrower 5-col cards, clamped to 3 lines (`line-clamp-3`)
  4. Spacer
  5. "Read Article ↗" button — compact, full-width within card, same slate/blue palette
- Equal-height cards via `h-full` + `flex flex-col` on the `<li>`.

### Preserved
- All 10 entries, exact URLs untouched.
- `target="_blank"` + `rel="noopener noreferrer"` on every link.
- Section heading, count chip, and media-inquiry footer block unchanged.

### File touched
- `src/routes/_site.press.tsx` — only the `<ul>` grid classes and `<li>` card markup change.
