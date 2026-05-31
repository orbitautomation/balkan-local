# Balkan Local - Marketing Site

Astro + Tailwind marketing site for **Balkan Local** - a trust-first travel
marketplace for the Balkans. Multi-page and trilingual (EN / DE / AR, Arabic RTL).

## Stack
- **Astro 5** (static output) + **Tailwind 3**. Pure Astro - no React; small
  vanilla `<script>` islands for interactivity (mobile menu, dashboard tabs,
  prayer times, form validation).
- Trilingual via three localized route trees: `/` (EN, root), `/de/`, `/ar/`.
- Design tokens (Sarajevo Twilight) in `src/styles/tokens.css`; anti-FOUC theme
  gate + dark default.

## Develop
```
npm install
npm run dev      # http://localhost:4321
npm run build    # static output -> dist/  (30 pages: 10 x 3 locales)
npm run check    # astro check (0 errors expected)
```

## Pages (each x EN / DE / AR)
`/` home · `/how-it-works` · `/trust` · `/destinations` · `/experiences` ·
`/for-business` · `/property` · `/about` · `/privacy` · `/terms` ·
`/login` · `/signup` · `/dashboard` (auth pages, front-end only)

The auth pages use `AuthShell.astro` (a minimal centered layout) instead of the
marketing chrome. `/login` and `/signup` validate then route to `/dashboard`,
which previews the logged-in traveler view by reusing `TripDashboard.astro`.
No backend: nothing is submitted.

## Structure
- `src/pages/` - thin per-locale route files (one per page x 3). EN at root,
  DE under `de/`, AR under `ar/`. Each renders a shared page component.
- `src/components/pages/` - one component per page (`HomePage`, `TrustPage`, ...)
  that composes sections inside `PageShell`.
- `src/components/PageShell.astro` - chrome wrapper (BaseLayout + Nav + main + Footer).
- `src/components/` - section + reusable components (Nav, Footer, Hero, PageHero,
  CTASection, CountrySelector, TripDashboard, VerifiedBadge, TrustBar, Halal,
  Categories, ForBusiness, Property, Waitlist, DiasporaGulf, HowItWorks, SocialProof).
- `src/layouts/BaseLayout.astro` - HTML shell, per-page SEO, route-aware
  hreflang/canonical, JSON-LD, theme + dir, global scripts.
- `src/i18n/` - `ui.ts` is the barrel (types, `LOCALES`, `PREFIX`, `ROUTES`,
  `href()`, `t()`); copy is split per area under `src/i18n/strings/`
  (`common`, `home`, `trust`, `experiences`, `about`, `how`, `business`,
  `property`, `destinations`, `legal`). Each module defines `en` (source-of-truth
  shape) plus `de`/`ar` typed `typeof en`, so a missing key in any locale fails
  the build. **Never add `as const` to a copy object** (it widens-breaks the
  typed shape); `as const` is only safe on route/enum maps in `ui.ts`.
- `src/data/masjids.ts` - seed mosque coordinates for the locator.
- `src/styles/` - tokens + global styles.

## i18n + routing
- Internal links use `href(lang, routeKey)` (e.g. `href("de","trust")` ->
  `/de/trust`). The language switcher preserves the current page.
- Adding a page: create `src/i18n/strings/<page>.ts` (or extend an existing
  module), wire it into `ui.ts` if it's a new module, add a `src/components/pages/
  <Page>.astro`, and add three thin routes (`/x`, `/de/x`, `/ar/x`). Add the
  slug to `ROUTES` and a nav/footer label in `common.ts`.

## Notes
- Forms (business signup, property lead, waitlist) are **front-end only** for now
  (validate + success state, no POST). Wire a backend (CF Worker `/api` or
  Formspree) later.
- Prayer times via Aladhan API (no key); masjid map via Leaflet + OpenStreetMap
  + Overpass "near me" (no key). Untrusted map data is XSS-escaped before render.
- No `og:image` / logo asset yet - SEO degrades gracefully; add when the logo
  lands. Legal pages are launch-stage copy, not a substitute for legal review.
