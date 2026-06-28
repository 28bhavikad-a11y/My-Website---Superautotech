# Get Super Autotech into Google (Search Console setup)

This is the single most important step to start ranking. Until Google has
"verified" you own the site and you've handed it your sitemap, your pages may
not be indexed at all. It's free and takes about 15 minutes.

Do these in order.

---

## Part 1 — Verify you own the site (one time)

1. Go to **https://search.google.com/search-console** and sign in with your
   Google account (use a business Google account if you have one).
2. Click **Add property**. You'll see two boxes. Choose the **URL prefix** box
   on the right (it's the simplest for this site).
3. Type your full site address exactly: `https://www.superautotech.com/`
   and click **Continue**.
4. Google now asks you to prove ownership. Pick the **HTML file** method
   (usually the recommended one at the top):
   - Google gives you a file to download named something like
     `google1a2b3c4d5e6f.html`.
   - **Download it.**
   - Upload that file into the **root of your GitHub repo** (same folder as
     `index.html`): on github.com click **Add file -> Upload files**, drag it
     in, and **Commit changes** to the `main` branch.
   - Wait 1-2 minutes, then back in Search Console click **Verify**.

   > Tip: you can confirm it's live by visiting
   > `https://www.superautotech.com/google1a2b3c4d5e6f.html` in your browser
   > first. If the page loads, click Verify.

   If HTML-file verification gives you trouble, the **Domain / DNS** method
   also works but requires adding a TXT record at whoever manages your domain
   (GoDaddy, Namecheap, Cloudflare, etc.). The HTML file method above is easier.

---

## Part 2 — Submit your sitemap (one time)

Once verified:

1. In Search Console's left menu, click **Sitemaps**.
2. Under "Add a new sitemap", type: `sitemap.xml`
3. Click **Submit**.

That's it. Your sitemap already lists all 10 pages, so Google will start
discovering and indexing them. Status will show "Success" within a day or two.

---

## Part 3 — Ask Google to index your top pages now (optional, speeds it up)

1. At the top of Search Console there's a search bar that says
   **"Inspect any URL"**. Paste in `https://www.superautotech.com/` and press Enter.
2. Click **Request indexing**.
3. Repeat for your two money pages:
   - `https://www.superautotech.com/mass-loaded-vinyl.html`
   - `https://www.superautotech.com/products.html`

This nudges Google to crawl them sooner instead of waiting.

---

## What to expect

- **Days 1-3:** Pages get indexed (you can search `site:superautotech.com` on
  Google to see which pages are in).
- **Weeks 2-8:** You start appearing for specific, lower-competition searches
  like "mass loaded vinyl manufacturer India" or "MLV supplier India".
- **Months 3-9:** With the off-page work below, you climb toward the broader,
  more competitive terms.

Search Console will also show you the **actual phrases people use to find you**
(under "Performance") - that data is gold for deciding what to optimize next.

---

## Do these next (they matter as much as the website)

1. **Bing Webmaster Tools** (https://www.bing.com/webmasters) - same idea,
   verify + submit `sitemap.xml`. Bing also feeds some AI search engines.
2. **Google Business Profile** (https://business.google.com) - create your
   manufacturer listing. Big for B2B and "near me" searches.
3. **Trade directories** - list on IndiaMART, TradeIndia, JustDial, Kompass.
   These give visibility AND backlinks that raise your Google ranking.
4. **Reviews** - ask customers to review you on Google and those directories.

---

*Once you've downloaded the Google verification HTML file, you can send it to me
and I'll add it to the repo for you so it's served correctly.*
