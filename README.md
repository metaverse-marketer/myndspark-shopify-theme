# Myndspark Shopify Theme

Custom Shopify theme for Myndspark — cognitive rehabilitation e-commerce.

## Design System
- **Primary:** Clinical Blue #3B5BDB
- **Accent:** Teal #3DB8AB
- **Fonts:** Hanken Grotesk + IBM Plex Mono
- **Buttons:** Pill-shaped (999px)
- **Cards:** 16px radius, cool-tinted shadows
- See `DESIGN_SYSTEM.md` for full tokens

## Products
1. Myndspark Cognitive Efficiency Tool — $210 (physical)
2. Myndspark Expansion Cards — $20 (digital download)

## Install
1. Zip the theme: `zip -r myndspark-theme.zip layout/ config/ assets/ sections/ templates/ locales/`
2. Shopify Admin → Online Store → Themes → Upload → choose zip
3. Products → Import CSV → `products.csv`

## Structure
```
layout/theme.liquid         — Main layout
config/settings_schema.json  — Theme settings (colors, fonts, logo)
config/settings_data.json    — Default brand values
assets/myndspark.css         — 23KB design-system stylesheet
assets/theme.js              — Cart + UI interactions
sections/                    — 17 section files
templates/                   — 8 JSON templates
locales/en.default.json      — English strings
products.csv                 — Product import data
```
