# Kicking Miles Website

SvelteKit-based personal travel website documenting kick scooter adventures across countries. Static site deployed to Cloudflare Pages.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Stack

- **Framework**: SvelteKit with static adapter
- **Styling**: Tailwind CSS
- **Build**: Vite, TypeScript
- **Deployment**: Cloudflare Pages
- **Package Manager**: pnpm

## Project Structure

```
src/
├── lib/
│   ├── components/     # Reusable Svelte components
│   └── utils/          # Helper functions (imageUtils, etc.)
├── routes/
│   ├── trips/          # Trip-specific routes
│   │   ├── japan-2017/ # 40 days, 1,800km
│   │   ├── japan-2023/ # 3 days, 150km
│   │   └── korea-2025/ # 11 days, 560km
│   └── +page.svelte    # Homepage
static/
├── images/             # WebP images organized by trip/day
└── sitemap.xml
scripts/
└── generate-build-info.cjs  # Git commit hash for footer
```

## Key Commands

```bash
pnpm dev              # Development server
pnpm check            # Type checking + svelte-check
pnpm format           # Prettier formatting
pnpm lint             # Prettier check

# Production deployment (requires the `cf` Cloudflare wrapper)
pnpm cf:deploy        # Full deploy: build + upload to Cloudflare Pages
```

## Adding New Trip Days

1. Create day directory: `src/routes/trips/[trip-name]/day-XX-[slug]/`
2. Add `+page.svelte` using `.github/day-entity-template.md` as reference
3. Add images to `static/images/[trip-name]/day-XX/`
4. Update trip overview page with new day entry
5. Update `static/sitemap.xml`

## Image Guidelines

- **Format**: WebP only
- **Naming**: `photo-XX-[ratio].webp` (e.g., `photo-01-4x3.webp`)
- **Aspect ratios**: `-4x3`, `-3x4`, `-1x1`, `-16x9`
- **Location**: `/static/images/[trip]/day-XX/`
- **Alt text**: Descriptive with location/activity context

## Gallery Patterns

Two patterns supported (see `src/lib/utils/imageUtils.ts`):

**Utility Pattern** (Japan 2017):

```svelte
const rawImages = [{ src: '/path/photo-01-4x3.webp', alt: '...' }];
const images = prepareImagesForPhotoSwipe(rawImages);
```

**Explicit Pattern** (Korea 2025):

```svelte
const images = [{
  src: '/path/photo-01-4x3.webp',
  alt: '...',
  width: 1200,
  height: 900,
  ratio: '4x3'
}];
```

## Deployment

The site is a static build hosted on Cloudflare Pages (project
`kickingmiles-website`, custom domain `kickingmiles.com`).

```bash
pnpm cf:deploy
```

This builds to `build/` and uploads it with `cf pages deploy`. Edge behaviour
lives in two files that Vite copies to the build root:

- `static/_headers` - security headers and static-asset caching
- `static/_redirects` - QR-code short URLs

`www` → apex and trailing-slash redirects are handled by Cloudflare, not by
these files.

## Color Palette

- Primary green: `#7EB300`
- Magenta: `#C5007C`
- Dark gray: `#636363`
- Light gray: `#7E797C`

## Documentation

- **Architecture**: `.github/copilot-instructions.md`
- **Day template**: `.github/day-entity-template.md`
- **Trip details**: `TRIP-DETAILS.md` in each trip folder

## License

Content © Michael Distel. All rights reserved.
