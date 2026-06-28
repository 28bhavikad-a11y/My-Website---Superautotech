/* ============================================================
   Super Autotech — PRODUCT CATALOG  (single source of truth)
   ------------------------------------------------------------
   ▶ TO ADD A NEW PRODUCT: copy one { … } block below, paste it
     into the PRODUCTS array, edit the fields, and (optionally)
     create a matching product page from "_product-template.html".
   ▶ Everything else — the nav "Products" menu, the Products hub,
     the home page cards, the footer list and the sitemap hint —
     updates automatically from this list.

   Field guide:
     slug      unique id, lowercase-with-dashes (also the filename)
     name      full product name
     category  groups products on the hub. Reuse an existing one
               to group together, or invent a new one.
     tagline   one sentence describing the product
     meta      up to 4 short spec chips shown on the card
     image     path to the product photo (in /images)
     page      the product's own HTML page
     featured  true = highlighted on the home page (keep 2–3 true)
   ============================================================ */

window.PRODUCTS = [
  {
    slug: "mass-loaded-vinyl",
    name: "Mass Loaded Vinyl Sheet",
    category: "Acoustic Barriers",
    tagline: "Dense 2000 kg/m³ limp-mass barrier that blocks airborne noise in walls, vehicles, ductwork and machinery.",
    meta: ["MLV", "2 · 3 · 4 · 5 mm", "2000 kg/m³", "Black"],
    image: "images/mlv-sheet.png",
    page: "mass-loaded-vinyl.html",
    featured: true
  },
  {
    slug: "eva-heavy-layer-sheet",
    name: "EVA Heavy Layer Sheet",
    category: "Automotive Acoustics",
    tagline: "Thermoformable high-density EVA barrier engineered to cut road, engine and exhaust noise in vehicle cabins.",
    meta: ["EVA", "2 · 3 · 4 · 5 mm", "Thermoformable", "Black"],
    image: "images/mlv-cutaway.png",
    page: "eva-heavy-layer-sheet.html",
    featured: true
  }

  /* ── NEW PRODUCT TEMPLATE — copy, uncomment, edit ──
  ,{
    slug: "your-product-slug",
    name: "Your Product Name",
    category: "Acoustic Barriers",          // reuse or invent a category
    tagline: "One-line description of the product.",
    meta: ["TAG", "size", "spec", "Black"], // up to 4 chips
    image: "images/your-image.png",
    page: "your-product-slug.html",
    featured: false
  }
  */
];
