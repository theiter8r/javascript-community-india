# Javascript Community India

The landing page for JS Community India, implemented from the Figma design
(`WEBSITE VARIATION 2`).

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- No other runtime dependencies

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
```

## How the design maps to the code

The Figma frame is 1728px wide, which is exactly **1.2× a 1440px design grid**.
Every measurement in this codebase is the Figma value divided by 1.2 — so
`px-[96px]` in the comp is `px-20` here. Design tokens live at the top of
`app/globals.css`.

Section components map one-to-one onto the comp:

| Component | Section |
| --- | --- |
| `site-header` | Nav bar |
| `hero-section` | "Javascript Pune is now in Mumbai" |
| `fuss-section` | "See what the fuss is about." |
| `team-section` | "Meet the team behind the scoop" |
| `gallery-section` | "Gallery" |
| `details-section` | "Snag the details." |
| `site-footer` | Footer |
| `page-decor` | Star fields and dot grids behind everything |

## Fonts

The comp is set in **Neutraface Text**, a licensed House Industries face that
can't be served from here. Headings fall back to **Poppins**, the closest
geometric sans on Google Fonts. `--font-display` lists Neutraface first, so
anyone with the licence picks it up with no code change.

## Gallery images

`public/images/gallery/` holds eight photos cropped from the community's event
archive to the two card ratios the design uses (1.47 and 0.70), encoded as WebP
(~250KB total). The full-resolution originals are kept outside the repo in
`_photo-archive/`, which is gitignored.
