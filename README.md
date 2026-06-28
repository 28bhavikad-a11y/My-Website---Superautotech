# Super Autotech — Website

Static marketing/product website for **Super Autotech**, an Indian manufacturer of mass loaded vinyl (MLV) and EVA heavy-layer acoustic barriers for construction, automotive, HVAC and industrial noise control (established 2006).

No build step. No framework. Plain HTML + CSS + vanilla JS — open any `.html` file in a browser or serve the folder statically.

## Run locally
```bash
# from the project root
python3 -m http.server 8000
# then open http://localhost:8000
```

## Stack
- **HTML** — one file per page (multi-page site, not a SPA)
- **styles.css** — single shared stylesheet. Design tokens (colors, fonts, spacing) are CSS custom properties defined at the top in `:root`. Colors use `oklch()`.
- **site.js** — shared behavior: nav scroll state, mobile menu, scroll-reveal, products dropdown.
- **products-data.js** — product catalog data, injected into footer/products listings.
- **image-slot.js** — drag-and-drop image placeholder web component (used in some templates).
- Fonts: Archivo, Hanken Grotesk, IBM Plex Mono, Space Grotesk (Google Fonts).

## Pages
- `index.html` — home / MLV landing
- `products.html` — product catalog
- `mass-loaded-vinyl.html`, `eva-heavy-layer-sheet.html` — product detail pages
- `applications.html`, `construction-soundproofing.html`, `automotive-soundproofing.html` — application pages
- `mlv-installation-guide.html` — installation guide
- `about.html` — company
- `contact.html` — contact (WhatsApp + email direct, no form)
- `404`/SEO: `sitemap.xml`, `robots.txt`, JSON-LD structured data inline in each page

## Conventions
- **Header/footer** are duplicated inline in every page — edit them with a find/replace across all `.html` files (see `site.js` / `products-data.js` for any shared injected bits).
- **Logo**: `images/logo-sat.png`, rendered via `<img class="brand-logo">` in the `.brand` block of the header and footer.
- **Contact**: email `admin@superautotech.com`, WhatsApp/phone `+91 9899090822`.
- Adding products: see `ADDING-PRODUCTS.md`. Product template: `_product-template.html`.

## Generated / non-source files (safe to ignore or regenerate)
- `Super Autotech (offline).html`, `.bundles/`, `_standalone-src.html` — bundled single-file exports
- `screenshots/`, `uploads/` — working assets, not part of the shipped site
