/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Mapped to CSS custom properties in tokens.css so Tailwind utilities
        // and raw CSS stay in sync across the Sarajevo Twilight light/dark themes.
        bg: "var(--bg)",
        "bg-2": "var(--bg-2)",
        "bg-3": "var(--bg-3)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        "ink-3": "var(--ink-3)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        "accent-deep": "var(--accent-deep)",
        "accent-ink": "var(--accent-ink)",
        success: "var(--success)",
        rule: "var(--rule)",
      },
      fontFamily: {
        display: ["General Sans", "IBM Plex Sans Arabic", "Segoe UI", "system-ui", "sans-serif"],
        sans: ["General Sans", "IBM Plex Sans Arabic", "Segoe UI", "system-ui", "sans-serif"],
        arabic: ["IBM Plex Sans Arabic", "Noto Kufi Arabic", "Segoe UI", "Tahoma", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      maxWidth: { prose: "68ch" },
      borderRadius: { pill: "999px" },
    },
  },
  plugins: [],
};
