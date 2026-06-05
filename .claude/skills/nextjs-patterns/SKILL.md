# Next.js 16 + Tailwind v4 Patterns

## App Router conventions

- `src/app/` for routes, `src/components/` for shared components, `src/data/` for content
- Server components by default; add `"use client"` only when needed (hooks, events, browser APIs)
- `layout.tsx` — static metadata, font setup, ThemeProvider (via client Providers wrapper)
- `page.tsx` — assembles sections, should be a server component

## Tailwind v4 specifics

- No `tailwind.config.ts` — configuration lives in `globals.css` via `@theme` directive
- Theme extension: add custom values inside `@theme {}` block
- CSS custom properties: define in `:root` and `[data-theme="light"]`, reference via `var(--name)`
- Inline styles for CSS custom property values: `style={{ color: "var(--accent-cyan)" }}`
- Tailwind utility classes still work as expected

## Client boundary pattern

```tsx
// sections/Hero.tsx — needs animation
"use client";
import { motion } from "framer-motion";

// sections/About.tsx — static, no hooks → server component (no directive needed)
import { personal } from "@/data/personal";
```

## Font setup

Using `next/font/google` in layout.tsx, variables exposed as CSS custom properties:
```tsx
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
```
Referenced in CSS: `font-family: var(--font-inter)`

## Data pattern

All content in typed `src/data/*.ts` files. Components import from `@/data/*`.
Never hardcode strings, colors, or numbers in component files.

## next-themes setup

- `ThemeProvider` with `attribute="data-theme"` — sets `data-theme="dark"` or `"light"` on `<html>`
- CSS selectors: `:root` (dark default) and `[data-theme="light"]`
- `suppressHydrationWarning` on `<html>` to avoid hydration mismatch
- `useTheme()` hook only in client components; check `mounted` state before rendering theme-dependent UI
