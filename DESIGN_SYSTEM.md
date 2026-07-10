# Myndspark Shopify Theme — Design System

The visual language for the Myndspark storefront: **calm & clinical, medical-grade trust**. This doc is the source of truth for anyone (human or AI) extending the theme. Everything is token-driven — edit tokens, not hardcoded values.

---

## 1. Color tokens

All colors are Shopify theme settings, surfaced as CSS variables in `assets/myndspark.css` `:root`. Edit them in **Theme editor → Colors**, or in `config/settings_data.json`.

| Token (CSS var) | Setting id | Value | Use |
|---|---|---|---|
| `--color-primary` | `color_primary` | `#2E4CC8` | Primary actions, links, active states |
| `--color-primary-dark` | `color_primary_dark` | `#1F379E` | Hover on primary |
| `--color-secondary` | `color_secondary` | `#3DB8AB` | Teal — eyebrows, checks, accents |
| `--color-accent` | `color_accent` | `#E8B23A` | Star ratings (amber) |
| `--color-dark` | `color_dark` | `#16265A` | Brand navy — announcement, CTA banner |
| `--color-darker` | `color_darker` | `#10193A` | Footer (darkest navy) |
| `--color-bg` | `color_bg_light` | `#FAFBFE` | Page background |
| `--color-text` | `color_text` | `#23283A` | Body text |
| `--color-text-light` | `color_text_light` | `#565B73` | Muted text |
| `--color-white` | `color_white` | `#FFFFFF` | Surfaces |
| `--color-border` | `color_border` | `#E7EAF2` | Card borders, dividers |
| `--color-tint` | `color_tint` | `#EEF1FB` | Secondary button / tinted surfaces |

### Six brain-function palette
Hardcoded categorical palette in `:root` (not settings — it's a fixed brand system, pulled from the workbook activity index). Use for color-coding activities, filters, legends.

| Function | CSS var | Hex |
|---|---|---|
| Attention | `--fn-attention` | `#3E7CB1` |
| Memory | `--fn-memory` | `#4FB0C6` |
| Logic & Reasoning | `--fn-logic` | `#29406E` |
| Speech & Language | `--fn-speech` | `#E8B23A` |
| Motor & Balance | `--fn-motor` | `#E4772E` |
| Visual Processing | `--fn-visual` | `#D34A3C` |

---

## 2. Typography
- **Headings & body:** Hanken Grotesk (`--font-heading` 700, `--font-body` 400). Humanist, trustworthy, friendly for patients.
- **Labels / eyebrows / data:** IBM Plex Mono (`--font-mono` 500), uppercase, `letter-spacing: 0.16em`. Use the `.mono-label` helper class.
- Display headings: `font-weight: 800; letter-spacing: -0.035em`.

Scale: Display 52 · H1 48 · H2 34 · H3 20 · Body 16–18 · Mono label 12.

---

## 3. Space, radius, elevation
- **Spacing:** 4px base (4/8/16/24/40/64). Sections pad `76px 0`. Container `--container-width: 1120px`, `0 32px` gutter.
- **Radius:** `--radius-input: 8px` · `--radius-card: 16px` · `--radius-pill: 999px` (all buttons are pills).
- **Elevation:** `--shadow-sm / -md / -lg` — low, cool-tinted shadows. Light from above.

---

## 4. Signature: the node motif
The connected-node ("molecule") motif is the Myndspark signature — from the packaging and workbook.

**Snippet:** `snippets/node-motif.liquid`
```liquid
{% render 'node-motif', variant: 'hero' %}   {# light nodes — for light sections #}
{% render 'node-motif', variant: 'cta' %}    {# navy nodes — for dark sections #}
```
Place as a direct child of a `position: relative; overflow: hidden` section. Positioning is handled by `.node-motif--hero` / `.node-motif--cta`. Keep content above it with `position: relative; z-index: 1`.

**Function chips:** `snippets/function-chips.liquid` — `{% render 'function-chips' %}` drops the six color-coded function chips (`.fn-chip` + `--fn-*` dots) anywhere. Used on the PDP.

---

## 5. Components
- **Buttons:** `.btn` + `.btn--primary` / `.btn--secondary` / `.btn--outline` / `.btn--on-dark` (white on navy) + size `.btn--large` / `.btn--small` / `.btn--full`.
- **Cards:** white, 1px `--color-border`, `--radius-card`, `--shadow-sm`, lift to `--shadow-md` on hover.
- **Mono label:** `.mono-label` for all eyebrows.
- **Function tag/legend:** color chip (`--fn-*`) + label. See `.six-functions__legend`.

---

## 6. Sections (home order)
`index.json` order: `hero → trust-strip → three-steps → six-functions → mission → differentiators → showcase → testimonials → upsell → cta`

New in this refresh:
- **`trust-strip.liquid`** — 90% / 6 / 100+ stat bar under the hero.
- **`six-functions.liquid`** — color-coded legend of the six functions + activity-cards image.

Updated: **hero** (gradient + node motif + floating kit shot), **cta-banner** (navy + node motif + `.btn--on-dark`), **announcement** (navy), **footer** (darkest navy).

---

## 7. Principles
1. **Clinically credible** — plain, evidence-led copy. Cite outcomes, never overpromise.
2. **Gently human** — second person, short sentences, low cognitive load.
3. **Accessible by default** — high contrast, ≥44px tap targets, calm motion, screen-free ethos. Many users are light-sensitive — no harsh flashes.
