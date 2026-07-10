# Refresh changelog — design update

What changed vs. the theme you sent, and where. Nothing was renamed or removed, so existing content/sections keep working.

## Tokens (`config/settings_data.json`, `config/settings_schema.json`)
- Primary blue `#3B5BDB → #2E4CC8`; primary-dark `#2B48C7 → #1F379E` (richer, more clinical).
- Accent `#F5A623 → #E8B23A`; text `#2D3141 → #23283A`; border/tint nudged cooler.
- **Added** two navy tokens: `color_dark` `#16265A`, `color_darker` `#10193A` (editable in Theme editor → Colors).

## CSS (`assets/myndspark.css`)
- Buttons now use `var(--color-primary)` etc. instead of hardcoded hex — recolor from settings.
- Added `.btn--on-dark`, six brain-function palette vars (`--fn-*`), node-motif styles, trust-strip styles, six-functions styles, navy CTA variant.
- Announcement bar, CTA banner, footer now use the navy tokens. Header is now a glassy sticky bar. Hero got a gradient + radial glow + drop-shadowed floating product.

## New files
- `snippets/node-motif.liquid` — reusable connected-node SVG (`variant: 'hero' | 'cta'`).
- `sections/trust-strip.liquid` — stat bar (all text editable in the theme editor).
- `sections/six-functions.liquid` — six-function color legend + cards image.

## Updated Liquid
- `sections/hero.liquid` — renders the node motif; fixed a stray `}}` typo in the fallback image tag.
- `sections/cta-banner.liquid` — navy variant, node motif, on-dark button, "Start Today" eyebrow.
- `templates/index.json` — inserted `trust-strip` (after hero) and `six-functions` (after three-steps) into the section order.

## Inner templates (PDP · collection · about)
- `sections/main-product.liquid` — added clinical trust badges under the rating (`.product-badge`) and a "Trains all six brain functions" color-chip block.
- `sections/main-collection.liquid` — added a `.collection-header` with mono-label eyebrow + navy heading.
- `sections/page-about.liquid` — node motif + eyebrow on the hero; bottom CTA converted to the navy variant.
- **Added** `snippets/function-chips.liquid` — reusable six-function color legend (`{% render 'function-chips' %}`).

## Notes
- The design reference is the approved homepage mockup (`Myndspark Home — Refresh`).
- Real product photos and logo are already in `assets/`. Swap the hero/mission/six-functions images in the theme editor anytime.
- See `DESIGN_SYSTEM.md` for the full token reference and usage rules.
