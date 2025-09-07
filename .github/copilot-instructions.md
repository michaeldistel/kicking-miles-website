# Copilot Instructions for Kicking Miles' Website

## Project Overview

SvelteKit-based personal travel website documenting kickboard adventures across countries. Features static site generation, Docker containerization, and remote deployment pipeline. Built for simplicity and production-ready infrastructure.

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
- Error pages: `404/+page.svelte` and `50x/+page.svelte` for custom error handling

### Styling Conventions

- **Flat design**: No gradients, shadows, or depth effects
- **Container pattern**: `<div class="container mx-auto px-4 py-16 max-w-4xl">`
- **Typography**: Light font weights (`font-light`), generous spacing (`tracking-wide`)
- **Colors**: Inline styles using custom palette, avoid Tailwind color classes
- **Images**: WebP format, organized by adventure and day in `/static/images/`
- **Navigation**: Breadcrumb patterns with `←` arrows and hover effects

## Critical Workflows

### Local Development

```bash
pnpm dev              # Start development server
pnpm check           # Type checking and svelte-check
pnpm format          # Prettier formatting
```

### Production Deployment

```bash
pnpm prod:deploy     # Full deployment pipeline:
  # 1. pnpm prebuild  - Generates build info with git commit
  # 2. pnpm build     - SvelteKit static build
  # 3. rsync to homelab with prod.deploy.files.txt filter
  # 4. Docker Compose restart on remote server
```

### Build System

- `scripts/generate-build-info.cjs` creates `src/lib/build-info.ts` with git commit hash
- Build info displayed in Footer component for deployment tracking
- Uses `prod.compose.yml` for containerized nginx serving from `/usr/share/nginx/html`

## Infrastructure Details

### nginx Configuration (`nginx/default.conf`)

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
- `StatsBox.svelte`: Day statistics in consistent grid layout
- `ContentBox.svelte`: Highlighted quotes and important content with type variants
- `WeatherBox.svelte`: Weather information with consistent styling
- `ImageGallery.svelte`: Photo galleries with responsive layouts
- `DayNavigation.svelte`: Consistent day-to-day navigation with arrow indicators
- Components are minimal and focused on content presentation

### Component Architecture Principles

- **Consistency**: All galleries use the same component = consistent behavior across pages
- **Maintainability**: Change layout logic in one place, affects all pages automatically
- **Reusability**: Easy to add galleries to new pages with proper TypeScript interfaces
- **Type Safety**: TypeScript ensures proper image arrays and component props
- **DRY Principle**: No repeated code across pages, shared logic in components
- **CSS Design System**: Components use utility classes (`text-km-primary`, `bg-km-subtle`) from centralized design system
- **Responsive Design**: All components handle mobile/desktop breakpoints consistently

### Page Content Patterns

- Use semantic HTML with proper heading hierarchy
- Section comments: `<!-- Section: Name -->`
- External links always include security attributes
- Contact sections with consistent email/social link styling
- Daily posts include stats boxes, image galleries, and day-to-day navigation
- Image organization: `/static/images/[adventure]/day-XX/` structure

## Key Files to Reference

- `package.json`: Scripts show deployment pipeline and build process
- `src/routes/+layout.svelte`: Global layout patterns and canonical URL handling
- `nginx/default.conf`: Production server configuration and security setup
- `prod.compose.yml`: Containerization and deployment configuration

## Project-Specific Conventions

- All external links use `target="_blank" rel="noopener noreferrer"`
- Build commit tracking via auto-generated `build-info.ts`
- Consistent light theme color palette throughout
- Mobile-responsive design with consistent breakpoint usage

When making changes, ensure they align with the existing light theme and follow the established Tailwind class patterns for consistency.

## Writing and Content

You are writing as Michael Distel.

Tone

- Personal and reflective. First-person notes to self.
- Humble and non-prescriptive. Do not tell readers what to do.
- Curious and grounded. Practical over hype.
- Calm and understated. Light humour is fine.

Style

- Simple, direct sentences with plain vocabulary.
- UK/Australian spelling (kilometres, organise, colour).
- Minimise contractions (“I am”, “do not” preferred).
- Do not use em dashes; use commas or full stops.
- Prefer specifics over abstractions: dates, numbers, concrete examples.
- Keep paragraphs short and grouped by topic. Clear headings are fine if helpful.

Principles

- Be honest about uncertainty. It is fine to be wrong and to revise later.
- Timestamp or note context when it matters.
- Invite conversation rather than push conclusions.

Avoid

- Imperatives, prescriptive advice, sales or marketing language, buzzwords, long metaphors, filler, and em dashes.
