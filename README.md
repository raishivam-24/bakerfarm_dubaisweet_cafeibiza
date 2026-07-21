# bakerfarm_dubaisweet_cafeibiza

A multi-page React website for Baker's Farm Bakery & Cafe, The Dubai Sweets &
Bakers, and Cafe Ibiza — four outlets in Bilaspur (C.G.), all built from a
single data source.

## Structure

```
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── assets/            # All photos, sorted by type (logo, cakes, interior, etc.)
└── src/
    ├── main.jsx            # React entry point + router
    ├── App.jsx             # Route definitions + Layout (Header/Footer wrapper)
    ├── index.css           # Shared design tokens (colors, fonts, spacing)
    ├── siteData.js         # Single source of truth: outlets, hours, menu, galleries
    ├── components/
    │   ├── Header.jsx / .css
    │   └── Footer.jsx / .css
    └── pages/
        ├── Home.jsx / .css
        ├── About.jsx / .css
        ├── Gallery.jsx / .css
        ├── Menu.jsx / .css
        └── Contact.jsx / .css
```

## Running it locally

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Editing content

Almost everything on the site — outlet addresses, phone numbers, hours,
menu items/prices, brand descriptions, and every gallery caption — comes
from **`src/siteData.js`**. Edit that one file and it updates across Home,
About, Menu, Gallery, Contact, and the Footer automatically.

### Known gap: menu items are placeholders

The three uploaded menu photos (`public/assets/menu-raw/`) were only
140×140px — too low-resolution to read reliably, even after upscaling.
The item names and prices currently in `siteData.js` (`menu` export) were
carried over from an earlier reference and **should be verified against the
real, physical menu** and updated in `siteData.js`.

## Pages

- **/** — Home: hero, three-brand overview, featured cakes, CTA
- **/about** — Story, opening hours table, all 4 outlets
- **/gallery** — Filterable photo gallery (Cakes / Interior & Exterior / Food & Drinks)
- **/menu** — Menu grouped by brand (Baker's Farm / Dubai Sweets / Cafe Ibiza)
- **/contact** — Outlet cards with map links, hours, and an inquiry form

## Notes

- Routing uses `react-router-dom` (client-side, single-page app).
- The contact form (`src/pages/Contact.jsx`) currently only logs to the
  console on submit — wire `handleSubmit` up to your email/CRM endpoint of
  choice.
- Design tokens (colors, fonts) live in `src/index.css` as CSS custom
  properties, so a full re-theme is a one-file change.
