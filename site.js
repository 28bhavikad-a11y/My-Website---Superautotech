/* ============================================================
   Super Autotech — site renderer
   Reads window.PRODUCTS (products-data.js) and populates:
     • the nav "Products" dropdown        (#navProducts)
     • the home page product cards         (#homeProducts)
     • the Products hub, grouped by category (#productsHub)
     • the footer product list             (#ftrProducts)
   Plus shared behaviours: sticky nav, mobile menu, scroll reveal.
   ============================================================ */
(function () {
  var P = window.PRODUCTS || [];

  /* ---------- nav dropdown ---------- */
  var navDD = document.getElementById("navProducts");
  if (navDD) {
    var menu = document.createElement("div");
    menu.className = "nav-dd-menu";
    menu.innerHTML = P.map(function (p) {
      return '<a class="nav-dd-item" href="' + p.page + '">' +
               '<span><span class="nm">' + p.name + '</span>' +
               '<span class="ct">' + p.category + '</span></span>' +
             '</a>';
    }).join("") +
    '<div class="nav-dd-foot"><a href="products.html">View all products →</a></div>';
    navDD.appendChild(menu);
  }

  /* ---------- product card markup ---------- */
  function card(p) {
    var chips = (p.meta || []).map(function (m) { return "<span>" + m + "</span>"; }).join("");
    return '<a class="pcard reveal" href="' + p.page + '">' +
             '<div class="pc-media"><span class="pc-cat">' + p.category + '</span>' +
               '<image-slot id="pc-' + p.slug + '" src="' + p.image + '" placeholder="' + p.name + '" aria-label="' + p.name + '"></image-slot>' +
             '</div>' +
             '<div class="pc-body">' +
               '<h3>' + p.name + '</h3>' +
               '<p class="pc-tag">' + p.tagline + '</p>' +
               '<div class="pc-meta">' + chips + '</div>' +
               '<span class="pc-go">View product <span class="arr">→</span></span>' +
             '</div>' +
           '</a>';
  }

  /* ---------- home featured products ---------- */
  var home = document.getElementById("homeProducts");
  if (home) {
    var feat = P.filter(function (p) { return p.featured; });
    home.innerHTML = (feat.length ? feat : P).map(card).join("");
  }

  /* ---------- products hub (grouped by category) ---------- */
  var hub = document.getElementById("productsHub");
  if (hub) {
    var cats = [];
    P.forEach(function (p) { if (cats.indexOf(p.category) === -1) cats.push(p.category); });
    hub.innerHTML = cats.map(function (c) {
      var items = P.filter(function (p) { return p.category === c; });
      return '<div class="cat-group">' +
               '<div class="cat-head"><h3>' + c + '</h3><span class="cnt">' + items.length + ' product' + (items.length > 1 ? "s" : "") + '</span></div>' +
               '<div class="product-grid">' + items.map(card).join("") + '</div>' +
             '</div>';
    }).join("");
  }

  /* ---------- footer product list ---------- */
  var ftr = document.getElementById("ftrProducts");
  if (ftr) {
    ftr.innerHTML = P.map(function (p) {
      return '<li><a href="' + p.page + '">' + p.name + '</a></li>';
    }).join("") + '<li><a href="products.html">All products</a></li>';
  }

  /* ---------- shared behaviours ---------- */
  var nav = document.getElementById("nav");
  if (nav) {
    var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  var menuBtn = document.getElementById("menuBtn");
  var navlinks = document.getElementById("navlinks");
  if (menuBtn && navlinks) {
    menuBtn.addEventListener("click", function () { navlinks.classList.toggle("open"); });
    navlinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { navlinks.classList.remove("open"); });
    });
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  function observeReveals() { document.querySelectorAll(".reveal:not(.in)").forEach(function (el) { io.observe(el); }); }
  observeReveals();
  // re-observe any cards injected above
  setTimeout(observeReveals, 0);
})();
