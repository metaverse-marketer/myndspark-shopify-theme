# Myndspark Shopify Theme v2 — Design System Applied

## 🎨 Design System Tokens (from Claude Design)

### Colors (OKLCH → HEX equivalents)
| Token | OKLCH | HEX | Usage |
|-------|-------|-----|-------|
| Primary Blue | oklch(.52 .13 248) | #3B5BDB | Buttons, links, brand |
| Blue Deep | oklch(.45 .13 248) | #2B48C7 | Hover states |
| Teal Accent | oklch(.66 .10 202) | #3DB8AB | Labels, checkmarks, success |
| Background | oklch(.985 .006 235) | #FAFBFE | Page background |
| Body Text | oklch(.29 .03 248) | #2D3141 | Primary text |
| Muted Text | oklch(.47 .02 248) | #565B73 | Secondary text |
| Card Border | oklch(.91 .008 240) | #E8EAF0 | Card/section borders |
| Blue Tint | oklch(.95 .025 240) | #EEF0FA | Surface backgrounds |

### Semantic Colors
- Success: oklch(.60 .11 155) — green
- Warning: oklch(.72 .11 75) — amber
- Error: oklch(.58 .16 25) — red
- Info: oklch(.66 .10 202) — teal

### Brain Function Colors (categorical)
| Function | Hue | Color |
|----------|-----|-------|
| Attention | 255 | Blue |
| Memory | 205 | Teal |
| Logic & Reasoning | 155 | Green |
| Speech & Language | 90 | Yellow-green |
| Motor & Balance | 35 | Orange |
| Visual Processing | 315 | Magenta |

### Typography
- **Primary:** Hanken Grotesk (400, 500, 600, 700, 800)
- **Mono:** IBM Plex Mono (400, 500) — labels, eyebrows, data
- **Scale:** Display 56 / H1 40 / H2 30 / H3 22 / Body LG 18 / Body 16 / Label MONO 12

### Spacing
4px base: 4 · 8 · 16 · 24 · 40 · 64

### Radius
- 8px — inputs
- 16px — cards
- 999px — pills (buttons, badges)

### Elevation
- Level 1: `0 1px 2px oklch(0.5 0.05 250 / 0.06)`
- Level 2: `0 1px 2px oklch(0.5 0.05 250 / 0.05), 0 10px 30px oklch(0.5 0.05 250 / 0.06)`
- Level 3: `0 2px 4px oklch(0.5 0.05 250 / 0.05), 0 20px 50px oklch(0.5 0.05 250 / 0.10)`

### Voice
1. **Clinically credible** — evidence-led, cite outcomes, never overpromise
2. **Gently human** — second person, short sentences, low cognitive load
3. **Accessible by default** — high contrast, large tap targets, no harsh flashes

## Changes Applied
- Swapped Montserrat → Hanken Grotesk
- Swapped Open Sans → Hanken Grotesk
- Added IBM Plex Mono for labels
- Swapped teal primary → clinical blue (#3B5BDB)
- Swapped coral secondary → teal accent (#3DB8AB)
- Swapped rounded rectangle buttons → pill-shaped (999px radius)
- Swapped 12px card radius → 16px
- Added cool-tinted shadows (oklch-based)
- Updated borders to cool blue-gray (#E8EAF0)
- Added blue tint surface color (#EEF0FA)
- Added mono-label pattern for section eyebrows
- Updated all section headers to use mono uppercase labels
