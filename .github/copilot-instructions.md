# Copilot Instructions for Kicking Miles' Website

## Project Overview

SvelteKit-based personal travel website documenting kick scooter adventures across countries. Features static site generation, Docker containerization, and remote deployment pipeline. Built for simplicity and production-ready infrastructure.

## Architecture & Stack

- **Framework**: SvelteKit with `@sveltejs/adapter-static` for static site generation
- **Styling**: Tailwind CSS with custom light theme and flat design aesthetic
- **Colors**: Custom palette - #7EB300 (green), #C5007C (magenta), #636363 (dark gray), #7E797C (light gray)
- **Build**: Vite, TypeScript, pnpm package manager
- **Deployment**: Docker + nginx, deployed to homelab via rsync + Docker Compose

## Key Development Patterns

### Routing & Page Structure

- Uses SvelteKit file-based routing in `src/routes/`
- Multi-adventure structure: `/trips/japan-2017/`, `/trips/korea-2025/`, etc.
- Daily journal posts: `/trips/[adventure]/day-XX-[location]/`
- Global layout in `+layout.svelte` includes Footer and canonical URLs
- All pages prerendered via `export const prerender = true` in `+layout.ts`
- **Trailing slash handling**: `export const trailingSlash = 'never'` in root `+layout.ts`
- Error pages: `404/+page.svelte` and `50x/+page.svelte` for custom error handling

### Styling Conventions

- **Flat design**: No gradients, shadows, or depth effects
- **Container pattern**: `<div class="km-container"><div class="km-content-wrapper">` (standardized wrapper)
- **Typography**: Light font weights (`font-light`), generous spacing (`tracking-wide`)
- **Colors**: Custom utility classes (`text-km-primary`, `bg-km-subtle`) from centralized design system in `src/app.css`
- **Images**: WebP format, organized by adventure and day in `/static/images/[adventure]/day-XX/` structure, using standard filename convention: `image-XX-[ratio].webp` (e.g., `photo-01-4x3.webp`, `photo-02-3x4.webp`)
- **Navigation**: Breadcrumb patterns with `←` arrows and hover effects

## Critical Workflows

### Local Development

```bash
pnpm dev              # Start development server
pnpm check           # Type checking and svelte-check
pnpm format          # Prettier formatting
```

### Production Deployment

**⚠️ IMPORTANT**: Never deploy automatically without explicit permission from Michael. Always ask before running `pnpm prod:deploy`.

```bash
pnpm prod:deploy     # Full deployment pipeline:
  # 1. pnpm prod:build    - Runs prebuild + build (generates build info + SvelteKit static build)
  # 2. pnpm prod:deploy:copy - rsync to homelab with --delete flag and prod.deploy.files.txt filter
  # 3. pnpm prod:deploy:run  - Docker Compose restart on remote server
```

### Deployment Protocol

- **Always ask first**: "Should I deploy these changes to production?"
- **Wait for confirmation**: Only proceed with deployment after receiving explicit approval
- **Exception**: Only deploy automatically if specifically requested with phrases like "deploy this" or "push to production"

### Build System

- `scripts/generate-build-info.cjs` creates `src/lib/build-info.ts` with git commit hash
- Build info displayed in Footer component for deployment tracking
- Uses `prod.compose.yml` for containerized nginx serving from `/usr/share/nginx/html`

## Infrastructure Details

### nginx Configuration (`nginx/default.conf`)

- **WWW redirect**: Dedicated server block redirects `www.kickingmiles.com` → `kickingmiles.com`
- **Trailing slash redirect**: `location ~ ^(.+)/$ { return 301 $1; }` removes trailing slashes
- Cloudflare IP trust configuration for real IP detection
- Static asset caching with `expires 1y` for immutable assets
- Comprehensive security headers including CSP, HSTS, permissions policy
- Health check endpoint at `/nginx-health` returns configuration version

### Docker Setup

- nginx:alpine base with build folder mounted as read-only
- Resource limits: 0.10 CPU, 100M memory
- External proxy network for reverse proxy integration
- Health checks via curl to nginx-health endpoint

## Component Patterns

### Shared Components (`src/lib/components/`)

- `Footer.svelte`: Displays build commit hash and copyright
- `TripHeader.svelte`: Standardized page headers with breadcrumbs and day information
- `StatsBox.svelte`: Day statistics in consistent grid layout with full-width capability
  - `fullWidth` prop: Enables km-stats-box-full-width for true container-edge display
  - Enhanced 6-column responsive layout (2→3→6 columns on mobile→tablet→desktop)
- `ContentBox.svelte`: Highlighted quotes and important content with type variants
- `WeatherBox.svelte`: Weather information with consistent styling
- `PhotoSwipeGallery.svelte`: Professional image galleries with advanced viewing features
  - **NEW STANDARD**: Replaces legacy ImageGallery component with PhotoSwipe 5.4.4
  - Touch gestures: Pinch-to-zoom, swipe navigation, mobile optimization
  - Features: Fullscreen mode, keyboard navigation, responsive grid thumbnails
  - Aspect ratio support: Automatic detection via filename patterns (-3x4, -4x3, -16x9, -1x1)
  - Props: `images`, `title`, `galleryId` with TypeScript interface including width/height/ratio
  - CSS: Responsive grid (200px→250px→300px minmax) with aspect-ratio-specific styling
- `InstagramEmbed.svelte`: Instagram post embedding with responsive design
  - Accepts `postUrl`, `caption`, and `maxWidth` props
  - Automatically loads Instagram embed script and processes embeds
  - Responsive design with loading states and error handling
- `DayNavigation.svelte`: Consistent day-to-day navigation with arrow indicators
- `TripCard.svelte`: Individual trip/adventure card display components
- `AdventureCard.svelte`: Adventure listing and preview cards
- `TripOverview.svelte`: Main trip overview layout using structured data pattern
- `Toast.svelte`: Notification and feedback messages
- `PageHeader.svelte`: Generic page header component for non-trip pages

### Image Management System

#### PhotoSwipe Integration (`src/lib/components/PhotoSwipeGallery.svelte`)

- **Professional gallery solution**: Touch-optimized image viewing with zoom, pan, fullscreen
- **Aspect ratio awareness**: CSS rules for 3x4 (portrait), 4x3 (landscape), 16x9 (widescreen), 1x1 (square)
- **Mobile-first design**: Optimized for travel photography viewing on mobile devices
- **Combined galleries**: Route maps and photos can be displayed in single PhotoSwipe instance

#### Image Utilities (`src/lib/utils/imageUtils.ts`)

**TWO GALLERY PATTERNS SUPPORTED:**

1. **Utility Pattern (Japan 2017 - 78 files)**
   - Uses `prepareImagesForPhotoSwipe()` helper function
   - Auto-detects dimensions from filename patterns (-4x3, -3x4, -16x9, -1x1)
   - Example:
     ```svelte
     const rawImages = [{ src: '/images/trip/day-01/photo-01-4x3.webp', alt: '...' }];
     const images = prepareImagesForPhotoSwipe(rawImages);
     ```
   - **Pros**: DRY principle, less code duplication, faster to write
   - **Use when**: Standard aspect ratios, many galleries, consistency with Japan 2017

2. **Explicit Pattern (Korea 2025 - 28 files)**
   - Manually specify width, height, ratio for each image
   - Example:
     ```svelte
     const images = [{
       src: '/images/trip/day-01/photo-01-4x3.webp',
       alt: '...',
       width: 1200,
       height: 900,
       ratio: '4x3'
     }];
     ```
   - **Pros**: No magic, explicit dimensions, easier for non-standard sizes
   - **Use when**: Custom dimensions needed, prefer clarity over brevity

**Both patterns are valid.** Choose based on trip consistency and personal preference. See `imageUtils.ts` for implementation details.

#### Image Organization Standards

- **Directory structure**: `/static/images/[adventure]/day-XX/` hierarchy maintained
- **Filename convention**: `image-XX-[ratio].webp` format (e.g., `photo-02-4x3.webp`)
- **Aspect ratio integration**: Filenames include aspect ratio data for automatic CSS handling
- **Alt text requirements**: Comprehensive, descriptive alt attributes with location/activity context

### HTML Rendering Pattern

- **Critical**: Use `{@html content}` for components that need to render HTML links
- `TripOverview.svelte` uses `{@html trip.leadText}` and `{@html trip.bodyText}` for Instagram links
- External links always include `target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline"`
- Personal Instagram links: Michael (@michaeldistel), Alex (@alekseev_a_i)

### Component Architecture Principles

- **Consistency**: All galleries use the same component = consistent behavior across pages
- **Maintainability**: Change layout logic in one place, affects all pages automatically
- **Reusability**: Easy to add galleries to new pages with proper TypeScript interfaces
- **Type Safety**: TypeScript ensures proper image arrays and component props
- **DRY Principle**: No repeated code across pages, shared logic in components
- **CSS Design System**: Components use utility classes (`text-km-primary`, `bg-km-subtle`) from centralized design system in `src/app.css`
- **Responsive Design**: All components handle mobile/desktop breakpoints consistently

### Page Content Patterns

- Use semantic HTML with proper heading hierarchy
- Section comments: `<!-- Section: Name -->`
- External links always include security attributes
- Contact sections with consistent email/social link styling
- Daily posts include stats boxes, image galleries, and day-to-day navigation
- Image organization: `/static/images/[adventure]/day-XX/` structure with standard filename convention

## SEO & Performance

### Domain & URL Standards

- **Primary domain**: `kickingmiles.com` (no www)
- **Canonical URLs**: All pages include canonical meta tags
- **Sitemap**: `static/sitemap.xml` with weekly changefreq for all pages
- **Trailing slashes**: Consistently removed via nginx redirects and SvelteKit config

### Meta Tag Pattern

- All pages include comprehensive Open Graph and Twitter Card meta tags
- Images use full canonical URLs: `https://kickingmiles.com/images/...`
- Structured data for homepage includes WebSite and TravelBlog schemas

### Image SEO Standards

- **Simple organization**: Adventure and day provide sufficient context for image grouping
- **Location context**: Geographic information comes from page content and URL structure
- **Alt text requirements**: All images must include descriptive alt attributes with location and activity context
- **Size optimization**: WebP format for modern browsers, optimized file sizes for page speed
- **URL structure**: `/images/japan-2023/day-01/photo-01-4x3.webp` provides clean, scalable organization with aspect ratio data

## Key Files to Reference

- `package.json`: Scripts show deployment pipeline and build process
- `src/routes/+layout.svelte`: Global layout patterns and canonical URL handling
- `src/routes/+layout.ts`: Prerendering and trailing slash configuration
- `nginx/default.conf`: Production server configuration and security setup
- `prod.compose.yml`: Containerization and deployment configuration
- `src/lib/components/PhotoSwipeGallery.svelte`: Professional image gallery component with PhotoSwipe integration
- `src/lib/utils/imageUtils.ts`: Image dimension and aspect ratio utilities for filename-based detection
- `TRIP-TEMPLATE.svelte`: Template for creating new trip overview pages

## Project-Specific Conventions

- All external links use `target="_blank" rel="noopener noreferrer"`
- Build commit tracking via auto-generated `build-info.ts`
- Consistent light theme color palette throughout
- Mobile-responsive design with consistent breakpoint usage
- **Domain standardization**: Always use `kickingmiles.com` without www in all references

## Trip Status and Modification Guidelines

- **Japan 2017**: COMPLETED trip - Must ask for explicit confirmation before making any changes to this trip's content, structure, or files
- **Japan 2023**: Recently completed trip - Standard editing allowed, authored by Michael
- **Korea 2025**: Planned future trip - Not yet implemented

When making changes, ensure they align with the existing light theme and follow the established Tailwind class patterns for consistency.

## Writing and Content

Don't reword Michelle Yang writing (Japan 2017), leave it as it is.

You are writing as Michael Distel for Japan 2023+ content.

### Tone

- Personal and reflective. First-person notes to self.
- Humble and non-prescriptive. Do not tell readers what to do.
- Curious and grounded. Practical over hype.
- Calm and understated. Light humour is fine.

### Style

- Simple, direct sentences with plain vocabulary.
- UK/Australian spelling (kilometres, organise, colour).
- Minimise contractions (“I am”, “do not” preferred).
- Do not use em dashes; use commas or full stops.
- Prefer specifics over abstractions: dates, numbers, concrete examples.
- Keep paragraphs short and grouped by topic. Clear headings are fine if helpful.

### Principles

- Be honest about uncertainty. It is fine to be wrong and to revise later.
- Invite conversation rather than push conclusions.

### Avoid

- Imperatives, prescriptive advice, sales or marketing language, buzzwords, long metaphors, filler, and em dashes.

TRIP DETAILS are in the TRIP-DETAILS.md file in each of the trip folders
