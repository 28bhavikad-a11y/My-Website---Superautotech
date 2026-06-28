# How to add a new product

The site is built so adding a product takes **3 small steps**. The nav
"Products" dropdown, the home page, the products hub and every footer
update themselves automatically.

---

## Step 1 — Add the product to the list

Open **`products-data.js`** and copy one of the existing `{ … }` blocks
inside the `PRODUCTS` array. Paste it, then edit the fields:

```js
{
  slug:     "rubber-sheet",          // lowercase-with-dashes. Also the page filename.
  name:     "Rubber Damping Sheet",  // full product name
  category: "Automotive Acoustics",  // reuse a category to GROUP products together,
                                     //   or invent a new one to start a new group
  tagline:  "One sentence describing the product.",
  meta:     ["TAG", "2 · 3 mm", "Black"],   // up to 4 short chips on the card
  image:    "images/rubber-sheet.png",      // a photo in /images
  page:     "rubber-sheet.html",            // its own page (next step)
  featured: true                            // true = show on the home page
}
```

> Tip: products with the **same `category`** are grouped together on the
> Products hub. That's how future categories (e.g. "Automotive Parts")
> stay organised.

## Step 2 — Create the product page

1. Copy **`_product-template.html`** and rename it to match your `page`
   value (e.g. `rubber-sheet.html`).
2. Open it and replace every `{{PLACEHOLDER}}` — they're listed at the
   top of the file. Write a real description, specs and applications.
3. Add a product photo to the `/images` folder and point the image
   slots / `og:image` at it.

## Step 3 — Add the page to the sitemap

Open **`sitemap.xml`** and copy one `<url>…</url>` block. Change the
`<loc>` to your new page and save. (Optional but recommended for SEO.)

That's it. Reload the site — the new product now appears in the nav
dropdown, on the home page, on the Products hub and in the footers.

---

## Files you never need to touch
- `site.js` — renders the menus, cards and shared behaviour.
- `styles.css` — all styling.
- `image-slot.js` — the drag-and-drop image placeholders.

## To temporarily hide a product
Set `featured: false` to remove it from the home page (it still shows on
the hub), or delete its block from `products-data.js` to remove it
everywhere. Remember to also remove its `<url>` from `sitemap.xml`.
