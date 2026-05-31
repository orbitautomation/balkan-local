# Balkan Local

Trust-first travel marketplace for the Balkans. Plan, book and manage an entire
trip from one account: every stay, transfer and guide independently verified,
organised in a single itinerary with one inbox and one transparent price.

Live in Bosnia & Herzegovina; more countries coming soon.

## Stack

- [Astro 5](https://astro.build) (static output)
- [Tailwind CSS 3](https://tailwindcss.com)
- Pure Astro: small scoped vanilla `<script>` islands, no React
- Trilingual: English (`/`), German (`/de/`), Arabic (`/ar/`, RTL)

## Develop

```bash
npm install
npm run dev        # local dev server
npm run check      # astro check (type + template diagnostics)
npm run build      # static build -> ./dist
npm run preview    # preview the production build
```

## Deploy

Pushes to `main` build and publish automatically to GitHub Pages via
`.github/workflows/deploy.yml`. The custom domain is set by `public/CNAME`.
