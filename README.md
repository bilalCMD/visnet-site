# VIS Networks — Rebuilt Website

A clean, modern, multi-page static rebuild of **visnet.in**. All content,
logos and images were extracted from the original site and reorganised into a
tidy, maintainable structure.

## How to view (clean URLs — no `.html`)

All page links are now **clean URLs** (`/about`, `/services`, `/insights` …
instead of `about.html`). Clean URLs need the site to be *served*, not opened
straight from disk — this is just how the web works (a `file://` double-click
cannot map `/about` to `about.html`).

**Easiest local preview:** double-click **`run-local.bat`** (Windows).
It starts a tiny server and opens the site at <http://localhost:8000> with the
clean URLs working exactly like they will live. (Needs Python — most machines
have it; if not, install from python.org, or just deploy as below.)

Prefer the command line?
```
cd visnet-site
python run-local.py
```

## Deploying (clean URLs work automatically)

- **GoDaddy / cPanel / Apache:** the included **`.htaccess`** maps `/about` →
  `about.html` and 301-redirects old `.html` links. Just upload the folder.
- **Netlify / Vercel / Cloudflare Pages / GitHub Pages:** drag-and-drop or
  push the folder — clean URLs are handled for you, no config needed.

## Structure

```
visnet-site/
├── index.html          ← Home
├── about.html          ← About (story, vision, presence, team, CSR)
├── services.html       ← Services
├── solutions.html      ← Solutions
├── products.html       ← Products (RADIUS, DiGON, Cube)
├── contact.html        ← Contact (form + offices + map)
│
├── css/                ← One stylesheet per concern (all SEPARATE)
│   ├── style.css       ← global theme, layout, buttons (shared)
│   ├── header.css      ← header / navigation only
│   ├── footer.css      ← footer only
│   ├── home.css        ← home page only
│   ├── about.css       ← about page only
│   ├── services.css    ← services page only
│   ├── solutions.css   ← solutions page only
│   ├── products.css    ← products page only
│   └── contact.css     ← contact page only
│
├── partials/           ← SEPARATE header & footer, reused by every page
│   ├── header.js
│   └── footer.js
│
├── js/
│   ├── main.js         ← injects header/footer, nav, scroll reveal
│   └── home.js         ← home page partner logos + reviews carousel
│
└── images/             ← ALL images, organised by purpose
    ├── logo.png, hero.png, cube1-3.png ...
    ├── flags/          ← country flags
    ├── partners/       ← uc / network / audio / automation logos
    ├── solutions/      ← solution animations
    ├── insights/       ← insight cards
    ├── services/       ← service icons
    ├── social/         ← linkedin / facebook / twitter
    ├── clients/        ← client logos
    └── about/          ← maps, markers, responsibility photos
```

## Editing the header or footer

Because the header and footer live in `partials/header.js` and
`partials/footer.js`, you change them **once** and every page updates.

## Credits

Content &amp; brand assets © VIS Networks Pvt. Ltd. This rebuild is for
demonstration / redesign purposes.
