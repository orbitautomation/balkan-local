// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Balkan Local marketing site. Pure Astro + Tailwind (no React island layer);
// interactivity is small scoped vanilla <script> blocks. Multilingual via three
// localized routes (/, /de/, /ar/) - Arabic renders dir="rtl".
// Component imports use relative paths, so no path alias is needed here.
// https://astro.build/config
export default defineConfig({
  site: "https://balkanlocal.com",
  output: "static",
  trailingSlash: "ignore",
  // Hide the dev-only Astro toolbar overlay (never shipped in `astro build`).
  devToolbar: { enabled: false },
  integrations: [tailwind()],
});
