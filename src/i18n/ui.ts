/**
 * ui.ts - i18n barrel for the trilingual site (EN / DE / AR).
 *
 * Copy is split into per-area modules under `strings/` (each one defines a
 * source-of-truth `en` plus `de`/`ar` typed `typeof en`, so a missing key in
 * any locale fails the build). This barrel merges them into one tree per
 * locale and exposes `t(locale)` - existing section components keep using
 * `t(lang).<area>` unchanged.
 *
 * TRAP: never add `as const` to a copy object (it broke 373 type checks once -
 * translated strings must widen). `as const` IS fine on the route/enum maps
 * below (ROUTES/PREFIX/DIR/LOCALE_*), which is why they live here, separate.
 */

import * as common from "./strings/common";
import * as home from "./strings/home";
import * as trust from "./strings/trust";
import * as experiences from "./strings/experiences";
import * as about from "./strings/about";
import * as how from "./strings/how";
import * as business from "./strings/business";
import * as property from "./strings/property";
import * as destinations from "./strings/destinations";
import * as legal from "./strings/legal";
import * as auth from "./strings/auth";

export type Locale = "en" | "de" | "ar";

export const LOCALES: Locale[] = ["en", "de", "ar"];

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  ar: "AR",
};

export const LOCALE_NAME: Record<Locale, string> = {
  en: "English",
  de: "Deutsch",
  ar: "العربية",
};

export const DIR: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  de: "ltr",
  ar: "rtl",
};

/** Path prefix per locale. EN is root (no `/en/`). */
export const PREFIX: Record<Locale, string> = {
  en: "/",
  de: "/de/",
  ar: "/ar/",
};

/**
 * Route slugs (locale-independent). EN lives at root, DE/AR are prefixed.
 * `as const` is SAFE here - these are path tokens, not translated copy.
 */
export const ROUTES = {
  home: "",
  howItWorks: "how-it-works",
  trust: "trust",
  destinations: "destinations",
  experiences: "experiences",
  business: "for-business",
  property: "property",
  about: "about",
  privacy: "privacy",
  terms: "terms",
  login: "login",
  signup: "signup",
  dashboard: "dashboard",
} as const;

export type RouteKey = keyof typeof ROUTES;

/** Locale-aware internal link. `href("de","trust")` -> "/de/trust". */
export function href(locale: Locale, key: RouteKey): string {
  const slug = ROUTES[key];
  const base = PREFIX[locale]; // "/", "/de/", "/ar/" (all end with "/")
  return slug ? base + slug : base;
}

// Merge the per-area modules into one tree per locale. Keys are disjoint
// across files; `typeof en` is the union and guards de/ar completeness.
const en = {
  ...common.en,
  ...home.en,
  ...trust.en,
  ...experiences.en,
  ...about.en,
  ...how.en,
  ...business.en,
  ...property.en,
  ...destinations.en,
  ...legal.en,
  ...auth.en,
};

const de: typeof en = {
  ...common.de,
  ...home.de,
  ...trust.de,
  ...experiences.de,
  ...about.de,
  ...how.de,
  ...business.de,
  ...property.de,
  ...destinations.de,
  ...legal.de,
  ...auth.de,
};

const ar: typeof en = {
  ...common.ar,
  ...home.ar,
  ...trust.ar,
  ...experiences.ar,
  ...about.ar,
  ...how.ar,
  ...business.ar,
  ...property.ar,
  ...destinations.ar,
  ...legal.ar,
  ...auth.ar,
};

const STRINGS: Record<Locale, typeof en> = { en, de, ar };

export function t(locale: Locale): typeof en {
  return STRINGS[locale] ?? en;
}
