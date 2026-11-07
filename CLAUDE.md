# Planto — Vue 3 + Tailwind plant shop UI

## Project
- Multi-page UI recreated from `uploads/MacBook Pro 16_ - 1.png` (Claude Design handoff, fully merged into `src/` and `public/`).
- Stack: Vite 8 + Vue 3 (`<script setup>` SFCs) + vue-router 4 + Tailwind CSS **v4** (`@tailwindcss/vite`) + `@unhead/vue` for per-page head tags. Motion via CSS transitions / Vue `<Transition>` (Framer Motion is React-only; `motion-v` is the Vue alternative if a library is wanted).
- Scripts: `dev`, `build`, `preview`, `images` (regenerates AVIF/WebP assets with sharp).

## Structure
- `src/styles/main.css` — Tailwind v4 entry + `@theme` design tokens (colors, fluid type scale, radii, shadows, easings, breakpoints sm 640 / lg 1024 / xl 1440 — default md/2xl removed). No `tailwind.config.js`.
- `src/styles/motion.css` — CSS vars, reveal/float/shimmer/transition classes, custom scrollbar, reduced-motion fallback. Imported into `layer(base)` so utilities always win (v3 cascade parity).
- `src/router/index.js` — routes + `meta { title, description, keywords, noindex }`; `/plants/:type?` validates the type slug.
- `src/layouts/DefaultLayout.vue` — persistent shell (skip link, AppNavbar, `<main>` with RouterView + `fade-slide` transition, AppFooter). `App.vue` applies route meta via `useHead`.
- `src/views/` — HomeView, PlantsView, ReviewsView, ContactView, PrivacyView, NotFoundView (all but Home lazy-loaded).
- `src/directives/reveal.js` — `v-reveal="delayMs"` IntersectionObserver fade-up.
- `src/data/plants.js` — static content (hero, trendy, catalog + `plantTypes`, top selling, reviews, Best O2 slides, nav). `src/data/images.js` — asset paths (via `BASE_URL`) + intrinsic width/height.
- `src/components/` — AppNavbar, HeroSection, FeaturedCard, ReviewBadge, TrendySection, TrendyCard, TopSelling, ProductCard, ReviewsSection, ReviewCard, BestO2Section, AppFooter, PageHeader (inner-page title block).
- `src/components/ui/` — BaseButton (`to` → RouterLink, `href` → a, else button), BaseIcon, BaseContainer, GlassCard, AppPicture (AVIF → WebP → original `<picture>` with width/height, lazy unless `eager`), PlantImage (skeleton until loaded), StarRating, SectionHeading (corner brackets), SkeletonCard.
- Assets: `public/assets/{plants,avatars}/*`, `hero-backdrop(-864)`, `logo-mark` — each as `.avif`, `.webp` + original. The original PNG/JPG is the source of truth: add or replace it in `public/assets` and rerun `npm run images` (`scripts/optimize-images.mjs`) to regenerate its AVIF/WebP siblings.

## Tailwind v4 notes
- Use `focus:outline-hidden` (not `outline-none`), `rounded-sm` (v3 `rounded`).
- `translate-*` / `scale-*` / `rotate-*` are separate CSS properties in v4: arbitrary `transition-[…]` lists must name `translate` / `scale` explicitly (`transition-transform` already covers them).
- Buttons get `cursor: pointer` from a base-layer rule in `main.css`.

## Conventions
- 8px grid: even Tailwind spacing steps only (2, 4, 6, 8, 12, 16, 24…).
- Palette: forest 950 #11160F · 900 #1A2117 · 850 #1F271C · 800 #252E21; leaf 300 #A9D18E · 400 #86B96B · 500 #5E9445; sun-400 #F2C94C; ink #F3F5EF / muted #C2C9BA / subtle #8E9786.
- Font: Manrope. Easings: `ease-out-expo` cubic-bezier(.16,1,.3,1), `ease-spring` cubic-bezier(.34,1.56,.64,1).
- Every interactive element has hover + focus-visible (leaf-300 ring) states.

## Change log
- 2026-10-26 — Initial build: tokens, motion CSS, reveal directive, all section + UI components, preview harness. Top Selling shows skeletons for 1.2s (simulated fetch); footer subscribe shows spinner.
- 2026-10-26 — Hero heading copy: "Breath Natureal" → "Breath Natural" (`HeroSection.vue`).
- 2026-10-26 — Custom scrollbar in `motion.css`: 12px, #11160F track, leaf-400→leaf-500 gradient pill thumb, hover leaf-300, active ink; Firefox uses `scrollbar-color` thin fallback.
- 2026-10-26 — Handoff implemented as a Vite app: Tailwind v3 → v4 (`@theme` tokens, same values), vue-router multi-page split with persistent layout, `@unhead/vue` per-route title/description/keywords/canonical, AVIF/WebP `<picture>` assets with intrinsic sizes, hero backdrop as `fetchpriority=high` responsive `<img>`. A11y/Lighthouse fixes: Best O2 dots get 24px hit areas (visual dot unchanged), "More" nav link has sr-only "customer reviews", `<main>` is `min-h-svh` to stop footer CLS on lazy routes. Lighthouse (preview build): 94–100 in all categories on every indexable route, mobile + desktop.


# Step 2: Core Development Standards & Engineering Architecture
## 1. Tech Stack & Directory Structure
- **Core Framework:** Vue
- **Routing System:** vue-router
- **Styling Solution:** Tailwind CSS
- **Architecture:** Implement a clean, modular, and maintainable component and file structure. Follow a feature-based or route-based directory organization.

## 2. Routing & DOM Architecture
- **Persistent Layouts:** Implement a shared layout container component that houses the Navbar, Footer, and other global UI elements.
- Ensure that during route transitions, only the main content area updates. Shared components must NOT re-render unnecessarily. Ensure the DOM structure is clean, semantic, and professional.

## 3. Performance Optimization (Core Web Vitals)
- **LCP (Largest Contentful Paint)**
  - Off-screen images must be configured with lazy loading (`loading="lazy"`).
  - Enforce the use of modern image formats (e.g., WebP, AVIF).
- **CLS (Cumulative Layout Shift)**
  - All images, videos, or media containers must strictly have an `aspect-ratio` defined, or explicit `width` and `height` attributes to entirely prevent layout shifts.

## 4. SEO & Accessibility (A11y)
- **Dynamic Metadata:** Each page must have independent Title, Description, and Keywords configured (e.g., using React Helmet or Vue Meta).
- Ensure all interactive elements have appropriate `aria-labels` and fully support keyboard navigation.

## 5. Quality Assurance (QA)
- When building and previewing locally, the generated code must be optimized to score 90+ on Lighthouse across Performance, Accessibility, Best Practices, and SEO.