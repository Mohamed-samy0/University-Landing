# TKH University Landing Page

> A pixel-perfect university landing page built with **Next.js 16 App Router**, **Payload CMS 3**, and **TypeScript**. All content is CMS-driven and editable by non-technical users.

## Quick Start

### Prerequisites
- Node.js ≥ 20
- pnpm (or npm)
- MongoDB (local or Atlas connection string)

### Installation

```bash
# Clone and install
git clone <repo-url>
cd engtechno-landing
pnpm install

# Environment
cp .env.example .env
# Edit .env with your MONGODB_URL and PAYLOAD_SECRET
```

### Seed the CMS

```bash
pnpm seed
```

This creates an admin user and populates **all** CMS content (globals + collections) so the page renders fully on first run.

### Run Development Server

```bash
pnpm dev
# → http://localhost:3000        (Landing Page)
# → http://localhost:3000/admin  (Payload CMS Admin)
```

### Payload Admin Access

| Field    | Value             |
|----------|-------------------|
| Email    | admin@tkh.edu.eg  |
| Password | admin123          |

---

## Architecture Decisions

1. **Server Components by default** — all CMS data is fetched server-side in `page.tsx` using `Promise.all` for parallel fetching. Client components (`'use client'`) are used only for interactive elements: accordion, sliders, coverflow, form, and header mega-menu.

2. **ISR with 60s revalidation** — the landing page uses `export const revalidate = 60` for Incremental Static Regeneration. Content updates in Payload reflect within 60 seconds. This balances performance (static pages) with content freshness.

3. **Typed CMS data layer** (`src/lib/cms/api.ts`) — centralized data-access module with cached fetchers. Components receive typed props, never call CMS directly. Uses `react.cache()` for per-request deduplication.

4. **Component architecture** — each landing section is a self-contained component in its own directory (`/components/<section>/`). Types, presentation, and barrel exports are colocated. No data fetching inside components.

5. **Tailwind CSS v4 + design tokens** — brand colors, typography scale, and spacing defined in `globals.css` as `@theme` variables. Consistent with Figma tokens (orange `#e84925`, navy `#273480`, ink `#101828`).

6. **Embla Carousel** for all slider sections — lightweight, accessible, touch-friendly. Used with the autoplay plugin for events. The graduate success coverflow uses custom CSS 3D transforms.

---

## Content Model

### Globals (single instances)
| Global | Purpose |
|--------|---------|
| `hero` | Headline, subheadline, background image |
| `header` | Logo, top nav, main nav with mega menus, CTA |
| `campus-section` | "Experience TKH" accordion features |
| `accordion` | Campus experience tab data |
| `marquee` | Scrolling ribbon configuration |
| `sectionTitles` | All section headings (editable) |
| `admissionSteps` | 5-step admission process |
| `contactForm` | Form fields, button text, messages |
| `footer` | Logo, link columns, contact, social |

### Collections (repeatable items)
| Collection | Purpose |
|------------|---------|
| `programs` | Core majors with image + count |
| `events` | Upcoming events with date/time |
| `testimonials` | Graduate testimonials for coverflow |
| `partners` | University partners (Coventry, NOVA) |
| `news` | News articles with rich text content |
| `media` | All image uploads |
| `users` | Admin authentication |

---

## Project Structure

```
src/
├── app/
│   ├── (frontend)/          # Landing page route group
│   │   ├── page.tsx         # Main page (Server Component)
│   │   ├── layout.tsx       # Root layout with font + header/footer
│   │   └── globals.css      # Design tokens + animations
│   └── (payload)/           # Payload admin routes
├── components/
│   ├── header/              # Sticky header with mega menu
│   ├── hero/                # Hero section
│   ├── campus-experience/   # Accordion + skewed image
│   ├── partner-panel/       # 3D skewed partner cards
│   ├── marquee/             # Infinite scroll ribbons
│   ├── sliders/             # CoreMajors, Events, News carousels
│   ├── graduate-success/    # 3D coverflow testimonials
│   ├── admission-steps/     # 5-step process
│   ├── contact/             # Contact form
│   └── footer/              # Full footer
├── collections/             # Payload collection configs
├── globals/                 # Payload global configs
├── lib/cms/                 # Typed data-access layer
├── payload.config.ts        # Payload configuration
├── payload-types.ts         # Auto-generated types
└── seed.ts                  # CMS seed script
```

---

## Tradeoffs & Improvements

- **Font**: Using Jost (Google Fonts) as a free Futura alternative. With the commercial Futura font files, self-hosting via `next/font/local` would improve load performance and accuracy.
- **Images**: Seed uses available campus photos for all sections. With full Figma asset exports, each section would have dedicated imagery.
- **Animations**: The coverflow and marquee use CSS-driven animations. With more time, I'd add Framer Motion entrance animations and IntersectionObserver-based reveals.
- **SEO**: Basic meta tags are in place. CMS-driven SEO fields (per-page title, description, OG image) would be the next step.
- **Testing**: Would add Playwright E2E tests for critical user flows and component unit tests.
- **On-demand revalidation**: Currently using time-based ISR. A Payload `afterChange` hook calling `revalidatePath('/')` would provide instant content updates.
