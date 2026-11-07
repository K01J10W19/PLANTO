# 🪴 Planto. — Plant Shop UI

![Status](https://img.shields.io/badge/status-UI_prototype-A9D18E?style=for-the-badge)
![Vue](https://img.shields.io/badge/Vue-3-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue_Router-4-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)

Planto. is a multi-page plant shop front end built with Vue 3, vue-router and Tailwind CSS v4. It turns a dark, glass-morphism landing page design into a routed site with a plant catalog, category filters, reviews, a contact page and per-page SEO metadata. All content is static data and the forms simulate submission, so there is no backend.

## ✨ Features

- **Landing page:** hero with a floating featured-plant card, customer review badge, and "Explore" / "Live Demo" links that scroll to sections on the page.
- **Trendy plants:** large glass cards with price, an "Explore" button and an add-to-cart icon button; the image and text sides alternate from card to card.
- **Top selling grid:** six product cards that show shimmering skeleton placeholders during a simulated 1.2 s load.
- **"Our Best O2" carousel:** previous/next buttons, a `01/04` counter, clickable dot indicators and a fade-slide transition between slides.
- **Plant catalog with filters:** `/plants` lists all seven plants; `/plants/indoor`, `/succulents`, `/air-purifying` and `/low-light` filter the grid, with a live plant count and an active filter pill.
- **Navigation:** a fixed navbar that turns frosted-glass after you scroll, a "Plants Type" dropdown that opens on hover or keyboard focus, active-link highlighting, and a menu panel that closes on navigation or `Escape`.
- **Customer reviews page:** review cards with avatars and star ratings, plus the O2 carousel.
- **Contact page:** labelled name/email/message form with a loading spinner and confirmation message, plus clickable `mailto:` / `tel:` details.
- **Newsletter signup:** footer email form with "Subscribe → spinner → Subscribed" states.
- **Privacy policy and 404 pages:** a styled privacy page and a not-found page with "Back home" and "Browse plants" buttons.
- **Scroll-in animations:** sections fade up as they enter the viewport, and plant images float and lift on hover.

## 🧰 Tech Stack

- **Framework:** Vue 3.5 (`<script setup>` single-file components)
- **Routing:** vue-router 4.6 (HTML5 history mode)
- **Styling:** Tailwind CSS 4.3 via `@tailwindcss/vite` 4.3, with design tokens defined in CSS `@theme`
- **Head / SEO:** `@unhead/vue` 2.1 (`useHead` for title, description, keywords, Open Graph and canonical tags)
- **Build tool:** Vite 8.3 with `@vitejs/plugin-vue` 6.0
- **Image processing:** sharp 0.35, used only by the `npm run images` script
- **Typography:** Manrope from Google Fonts

## 🛠️ Engineering Highlights

- **Persistent layout:** `DefaultLayout.vue` keeps the navbar and footer mounted outside `<RouterView>`, so only `<main>` swaps (with a `fade-slide` transition) on navigation.
- **Route-level code splitting:** Home is bundled eagerly; Plants, Reviews, Contact, Privacy and 404 are lazy-loaded chunks.
- **Validated dynamic route:** `/plants/:type?` checks the slug in a `beforeEnter` guard and redirects unknown types to the 404 page.
- **Scroll handling:** `scrollBehavior` restores saved positions, smooth-scrolls to `#hash` targets with an 80 px offset for the fixed navbar, and resets to the top on a new page.
- **Per-page metadata:** every route defines `title`, `description` and `keywords` in `meta`. `App.vue` turns them into head tags (with a `%s · Planto.` title template, Open Graph and canonical links). The Plants view overrides them per category, and the 404 page is `noindex`.
- **Image pipeline:** `scripts/optimize-images.mjs` uses sharp to generate AVIF and WebP versions of every PNG/JPG in `public/assets`, plus an 864 px hero backdrop. `AppPicture.vue` serves them through `<picture>` (AVIF → WebP → original fallback).
- **Layout-shift prevention:**
  - Every image gets its intrinsic `width`/`height` from `src/data/images.js`.
  - Images are `loading="lazy"` unless marked `eager`.
  - `<main>` has `min-h-svh`, so the footer can't jump while a lazy route loads.
- **LCP tuning:** the hero backdrop is a responsive `<img>` (`srcset` 864w / 1728w) with `fetchpriority="high"`. The featured plant and logo load eagerly, and Google Fonts are preconnected.
- **`v-reveal` directive:** one shared `IntersectionObserver` for all elements. Each element is unobserved after its first reveal, and stagger delays pass through a `--reveal-delay` CSS variable.
- **Loading states:** `PlantImage` shows a shimmer skeleton until the image's `load` event fires; the Top Selling grid shows `SkeletonCard`s while `aria-busy` is set.
- **Accessibility:**
  - Skip-to-content link and `focus-visible` rings on every interactive element.
  - `aria-label`s on icon buttons.
  - `aria-expanded` / `aria-controls` on the menu button.
  - Polite `aria-live` regions for the carousel text and filter count.
  - Carousel dots form a `tablist` with 24 px hit areas.
  - Screen-reader-only context text for the "More" link.
  - Labelled form fields.
- **Reduced motion:** `prefers-reduced-motion` disables animations and transitions and shows reveal content immediately.
- **Design tokens in CSS:**
  - `src/styles/main.css` defines the palette, the fluid `clamp()` type scale, radii, shadows and easings as Tailwind v4 `@theme` variables.
  - `motion.css` is imported into `layer(base)` so utility classes always take precedence.

## 📁 Folder Structure

```text
PLANTO/
├── index.html                  # HTML shell: default meta, favicon, Google Fonts preconnect
├── package.json                # Scripts: dev, build, preview, images
├── vite.config.js              # Vue + Tailwind CSS v4 Vite plugins
├── CLAUDE.md                   # Project notes, conventions and change log
├── public/
│   ├── robots.txt              # Allows all crawlers
│   └── assets/
│       ├── avatars/            # Reviewer avatars (.png + .avif + .webp)
│       ├── plants/             # Plant renders (.png + .avif + .webp)
│       ├── hero-backdrop*.*    # Hero photo at 1728w and 864w in jpg/avif/webp
│       └── logo-mark.*         # Logo / favicon
├── scripts/
│   └── optimize-images.mjs     # sharp script that generates AVIF/WebP siblings
└── src/
    ├── main.js                 # App bootstrap: router, unhead, v-reveal directive
    ├── App.vue                 # Applies route meta via useHead, renders the layout
    ├── layouts/
    │   └── DefaultLayout.vue   # Persistent navbar + <main> RouterView + footer
    ├── router/
    │   └── index.js            # Routes, SEO meta, type guard, scrollBehavior
    ├── views/
    │   ├── HomeView.vue        # Landing page with the shared hero backdrop
    │   ├── PlantsView.vue      # Catalog with category filter pills
    │   ├── ReviewsView.vue     # Reviews + O2 carousel
    │   ├── ContactView.vue     # Contact form and details
    │   ├── PrivacyView.vue     # Privacy policy
    │   └── NotFoundView.vue    # 404 page
    ├── components/
    │   ├── AppNavbar.vue       # Fixed navbar, dropdown, menu panel
    │   ├── AppFooter.vue       # Links, newsletter form, socials
    │   ├── PageHeader.vue      # Title block for inner pages
    │   ├── HeroSection.vue     # Hero copy, CTAs, review badge, featured card
    │   ├── FeaturedCard.vue    # Floating featured-plant glass card
    │   ├── ReviewBadge.vue     # Compact review used in the hero
    │   ├── TrendySection.vue   # "Our Trendy plants" list
    │   ├── TrendyCard.vue      # Alternating image/text product card
    │   ├── TopSelling.vue      # Product grid with simulated loading
    │   ├── ProductCard.vue     # Plant card linking to its category
    │   ├── ReviewsSection.vue  # Review card grid
    │   ├── ReviewCard.vue      # Single customer review
    │   ├── BestO2Section.vue   # Carousel with arrows, counter and dots
    │   └── ui/
    │       ├── AppPicture.vue      # <picture> with AVIF/WebP sources and intrinsic size
    │       ├── PlantImage.vue      # Plant image with skeleton until loaded
    │       ├── BaseButton.vue      # outline / solid / icon / ghost; RouterLink, <a> or <button>
    │       ├── BaseIcon.vue        # Inline SVG icon set
    │       ├── BaseContainer.vue   # Max-width page container with responsive padding
    │       ├── GlassCard.vue       # Frosted card with optional hover lift
    │       ├── SectionHeading.vue  # Heading framed by corner brackets
    │       ├── SkeletonCard.vue    # Product card placeholder
    │       └── StarRating.vue      # 5-star rating
    ├── data/
    │   ├── plants.js           # Hero, catalog, plant types, reviews, slides, nav links
    │   └── images.js           # Asset paths + intrinsic dimensions
    ├── directives/
    │   └── reveal.js           # v-reveal scroll-in directive
    └── styles/
        ├── main.css            # Tailwind v4 entry + @theme design tokens
        └── motion.css          # Reveal/float/shimmer, transitions, scrollbar, reduced motion
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** `^20.19.0` or `>=22.12.0` (required by Vite 8)
- **npm** (comes with Node.js)
- **Git**

### 1. Clone the repository

```bash
git clone https://github.com/K01J10W19/PLANTO.git
```

### 2. Move into the project folder

```bash
cd PLANTO
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite prints the local URL (by default `http://localhost:5173`).

### 5. Build for production

```bash
npm run build
```

The optimized output is written to `dist/`.

### 6. Preview the production build

```bash
npm run preview
```

### Optional: regenerate optimized images

After adding or replacing a PNG/JPG in `public/assets`, regenerate its AVIF/WebP versions:

```bash
npm run images
```

## 📱 Responsive Strategy

The design is mobile-first and replaces Tailwind's default breakpoints with three custom ones (no `md` or `2xl`):

| Breakpoint | Min width | Target |
| --- | --- | --- |
| `sm` | 640px | Tablet |
| `lg` | 1024px | Laptop |
| `xl` | 1440px | Large monitor |

How layouts change across them:

- **Page container:** max width 1360px; side padding grows from `px-4` → `sm:px-8` → `lg:px-16`.
- **Navbar:**
  - Height grows from 64px to 80px at `lg`.
  - The inline link row with the dropdown appears only from `lg`.
  - The menu button and its panel are available at every width.
- **Hero:**
  - Single column on mobile, splitting into a 7/5 column grid at `lg` and 8/4 at `xl`.
  - The review badge gets more top spacing at `lg`.
- **Trendy cards:** stacked image-over-text on mobile; two columns from `sm`, where the image and text alternate sides and the plant overflows the card edge.
- **Product grids (Top Selling, Plants catalog) and reviews:** 1 column → 2 at `sm` → 3 at `lg`.
- **O2 carousel:**
  - Stacked on mobile, becoming a 5fr / 7fr split at `lg`.
  - The plant image grows from 288px → 384px (`sm`) → 440px (`lg`).
- **Contact page:**
  - Form and details stack on mobile, becoming a 7/5 split at `lg`.
  - Name and email sit side by side from `sm`.
- **Footer:**
  - 1 column → 2 at `sm` → a 12-column 5/3/4 layout at `lg`.
  - The bottom row switches from stacked (copyright first) to a single row at `sm`.
- **Large glass panels:** corner radius increases from 32px to 48px at `lg`.
- **Typography:** headings and body text use fluid `clamp()` sizes, so they scale smoothly with the viewport rather than jumping at breakpoints.
- **Images:** the hero backdrop serves an 864px or 1728px file via `srcset`/`sizes="100vw"`, depending on screen width.
