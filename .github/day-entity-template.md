# Day Entity Template & Style Guide

## Overview

Standardized template and styling guidelines for all daily trip posts across adventures. Ensures consistent layout, content structure, and user experience.

## CRITICAL: Scalable Design Principles

### Theme and Layout Future-Proofing Rules

**NEVER use hardcoded styles in day entities.** Always use the component and class system to ensure site-wide theme changes can be applied globally.

#### Component-First Architecture

```
✅ DO: Use shared components for all UI elements
❌ DON'T: Inline styles or custom HTML structures
```

**Examples:**

```svelte
✅ <TripHeader {adventure} {dayNumber} {title} />
❌ <div class="custom-header-style">...</div>

✅ <StatsBox {stats} />
❌ <div class="grid grid-cols-2 gap-4">...</div>

✅ <ContentBox type="highlight">...</ContentBox>
❌ <div class="bg-yellow-100 p-4 border-l-4">...</div>
```

#### CSS Class System Rules

```
✅ DO: Use semantic class names from design system
❌ DON'T: Hardcode Tailwind utilities directly in day entities
```

**Mandatory Classes for Day Entities:**

- `km-container` - Main layout container
- `km-content-wrapper` - Content width and spacing
- `km-prose-content` - Text content wrapper
- `km-body-text` - Body paragraph text
- `text-km-primary` - Primary brand color
- `text-km-subtle` - Subtle text color

#### Component Dependency Principle

**Every visual element must come from a shared component or standardized class.**

**Required Components (DO NOT recreate):**

1. `TripHeader` - Page headers and breadcrumbs
2. `StatsBox` - Day statistics display
3. `WeatherBox` - Weather information
4. `ContentBox` - Highlighted content blocks
5. `ImageGallery` - Photo displays
6. `DayNavigation` - Day-to-day navigation

#### Layout Consistency Rules

**Standard Page Structure (MANDATORY):**

```svelte
<div class="km-container">
  <div class="km-content-wrapper">
    <TripHeader />
    <div class="grid md:grid-cols-2 gap-8 mb-8 mt-12">
      <StatsBox />
      <WeatherBox />
    </div>
    <div class="km-prose-content space-y-8">
      <!-- Content sections -->
    </div>
    <ImageGallery />
    <DayNavigation />
  </div>
</div>
```

**This structure ensures:**

- Theme changes apply to all 100+ pages automatically
- Component updates propagate site-wide
- Layout modifications require minimal changes
- Design system maintains consistency

#### Future-Proofing Checklist

Before creating any day entity, ensure:

- [ ] No custom CSS classes (only `km-*` design system classes)
- [ ] No inline styles anywhere
- [ ] All UI elements use shared components
- [ ] Layout follows exact template structure
- [ ] No hardcoded colors, fonts, or spacing values
- [ ] Typography uses semantic classes (`km-body-text`, etc.)

#### Theme Migration Strategy

When changing themes or layouts:

1. **Update components** in `/src/lib/components/` directory
2. **Modify design system** in `src/app.css` for `km-*` classes
3. **All day entities inherit changes automatically**
4. **Zero individual page modifications needed**

This approach ensures that 100+ day entities across multiple trips can be restyled with minimal effort.

## Page Structure Template

### 1. Page Setup

```svelte
<script>
  export const prerender = true;

  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  // Page metadata
  const adventure = 'japan-2023';
  const dayNumber = 1;
  const location = 'Tokyo';
  const title = 'Descriptive Day Title';
  const date = '2023-03-15';
</script>

<svelte:head>
  <title>{title} - Day {dayNumber} - {adventure.charAt(0).toUpperCase() + adventure.slice(1)} | Kicking Miles</title>
  <meta name="description" content="Day {dayNumber} of {adventure}: {title}. {brief description}" />
  <link rel="canonical" href="https://kickingmiles.com/trips/{adventure}/day-{dayNumber.toString().padStart(2, '0')}-{location.toLowerCase()}" />
</svelte:head>
```

### 2. Header Section

```svelte
<TripHeader
  {adventure}
  {dayNumber}
  {location}
  {title}
  {date}
/>
```

### 3. Content Sections (in order)

#### A. Stats Box (Always first)

```svelte
<!-- Section: Day Statistics -->
<StatsBox
  distance="XX km"
  time="X hours X minutes"
  weather="Description"
  accommodation="Location/Type"
  highlights="Key experiences"
/>
```

#### B. Weather Box (When relevant)

```svelte
<!-- Section: Weather -->
<WeatherBox
  temperature="XX°C"
  conditions="Sunny/Rainy/etc"
  wind="X km/h"
  notes="Additional weather notes"
/>
```

#### C. Main Content

```svelte
<div class="km-container">
  <div class="km-content-wrapper">

    <!-- Content sections -->
    <div class="km-prose-content space-y-8">

      <!-- Organic content flow - sections as needed -->
      <section>
        <p class="km-body-text">
          Opening narrative about the day's journey...
        </p>
        <p class="km-body-text">
          Continue the story naturally...
        </p>
      </section>

      <!-- Optional: Use h2 headings when helpful for organization -->
      <section>
        <h2 class="text-xl font-light mb-4 text-km-primary">Section Title (Optional)</h2>
        <p class="km-body-text">
          Content that benefits from a heading...
        </p>
      </section>

      <!-- Use ContentBox sparingly for emphasis -->
      <ContentBox type="highlight">
        <p>Important moment or memorable quote from the day...</p>
      </ContentBox>

      <section>
        <p class="km-body-text">
          Continue the narrative flow...
        </p>
      </section>

      <!-- Author attribution -->
      <div class="text-right mt-8 mb-8">
        <p class="text-sm text-km-subtle italic">Michael Distel</p>
      </div>

    </div>

  </div>
</div>
```

#### D. Image Gallery

```svelte
<!-- Section: Photos -->
<ImageGallery
  photoImages={photos}
  galleryType="mixed"
  adventure={adventure}
  dayNumber={dayNumber}
/>
```

#### E. Day Navigation (Always last)

```svelte
<!-- Section: Navigation -->
<DayNavigation
  {adventure}
  currentDay={dayNumber}
  previousDay={dayNumber - 1}
  nextDay={dayNumber + 1}
/>
```

## Content Guidelines

### Writing Style

- **First person perspective**: "I started the day...", "The route took me..."
- **Natural narrative flow**: Let the story guide structure, not rigid templates
- **Present tense for immediate experiences**: "The view is incredible"
- **Past tense for completed actions**: "I reached the summit at 2pm"
- **Conversational tone**: Natural, personal, reflective
- **Stream of consciousness**: Organic thought progression, as events unfolded

### Section Requirements

#### Stats Box (Required)

- **Distance**: Always in kilometres (km)
- **Time**: Hours and minutes format
- **Weather**: Brief description
- **Accommodation**: Where stayed or camping
- **Highlights**: 2-3 key experiences

### Content Sections (Flexible)

- **Organic flow**: Let the narrative guide section breaks, not rigid structure
- **Section tags**: Use `<section>` for semantic grouping of related content
- **Headings**: Optional h2 headings when they add clarity (`text-xl font-light mb-4 text-km-primary`)
- **Paragraph flow**: Primary focus on `<p class="km-body-text">` for natural storytelling
- **ContentBox usage**: Sparingly for highlights, quotes, or emphasis
- **Author attribution**: Always include `Michael Distel` signature block

### Image Requirements

- **Organization**: `/static/images/{adventure}/day-{XX}/photo-{YY}-[ratio].webp`
- **Alt text**: Descriptive with location and activity context
- **Gallery component**: Always use `PhotoSwipeGallery` for professional image viewing with touch gestures
- **Image arrays**: Use `photoImages` and `routeImages` with src, alt properties (width, height, ratio auto-detected)

## Styling Standards

### CRITICAL: Design System Enforcement

**NEVER deviate from these standards. With 100+ day entities, consistency is essential for maintainability.**

### Typography Hierarchy

```css
h1: Adventure title (handled by TripHeader)
h2: Optional section headings - text-xl font-light text-km-primary mb-4 (use sparingly)
p: Body text - km-body-text class (primary content vehicle)
```

**Typography Rules:**

- ✅ Always use `km-body-text` for paragraphs
- ✅ Always use `text-km-primary` for accent colors
- ❌ Never use direct Tailwind typography classes
- ❌ Never hardcode font sizes or weights

### Content Flow Standards

```css
Content wrapper: km-prose-content space-y-8
Section spacing: natural flow, semantic <section> tags
Author attribution: text-right mt-8 mb-8
```

**Layout Rules:**

- ✅ Always wrap content in `km-prose-content space-y-8`
- ✅ Use semantic `<section>` tags for content grouping
- ❌ Never create custom spacing with manual classes
- ❌ Never modify the grid layout for stats/weather sections

### Container Pattern

```svelte
<div class="km-container">
  <div class="km-content-wrapper">
    <!-- Content here -->
  </div>
</div>
```

### Content Box Types

- `highlight`: Important moments or quotes
- `tip`: Practical advice or lessons learned
- `warning`: Safety concerns or challenges
- `info`: Additional context or background

## URL Structure

### Standard Format

```
/trips/{adventure}/day-{XX}-{location}
```

### Examples

```
/trips/japan-2023/day-01-tokyo
/trips/japan-2023/day-15-mount-fuji
/trips/korea-2025/day-03-seoul
```

### Folder Structure

```
src/routes/trips/{adventure}/day-{XX}-{location}/+page.svelte
static/images/{adventure}/day-{XX}/photo-{YY}-[ratio].webp
```

## SEO Requirements

### Meta Tags

- **Title**: "{Day Title} - Day {X} - {Adventure} | Kicking Miles"
- **Description**: "Day {X} of {adventure}: {title}. {brief description}"
- **Canonical**: Full URL with https://kickingmiles.com

### Image Alt Text

- Include location, activity, and context
- Examples:
  - "Kick scooter parked outside Tokyo Station on a sunny morning"
  - "Winding mountain road through Japanese countryside"
  - "Traditional ryokan accommodation in rural Japan"

## Component Usage

### TripHeader

- Always first component after `<svelte:head>`
- Provides breadcrumbs, day info, and consistent styling

### StatsBox

- Always second component (after header)
- Use consistent units and format

### ContentBox

- Use sparingly for emphasis
- Choose appropriate type for content

### ImageGallery

- Always near end of page before navigation
- Always use `galleryType="mixed"` for optimal layout
- Use `photoImages` prop with proper image array structure

### DayNavigation

- Always last component
- Provides day-to-day navigation

## File Organization

### Route Files

```
src/routes/trips/{adventure}/day-{XX}-{location}/
├── +page.svelte (main content)
└── +page.ts (any page-specific data, if needed)
```

### Image Files

```
static/images/{adventure}/day-{XX}/
├── photo-01-4x3.webp
├── photo-02-3x4.webp
├── route-map-1x1.webp
└── updates-3x4.webp
```

### Naming Conventions

- **Days**: Zero-padded (day-01, day-02, etc.)
- **Images**: Sequential numbering with aspect ratio (photo-01-4x3, photo-02-3x4, etc.)
- **Locations**: Lowercase, URL-friendly (tokyo, mount-fuji, etc.)

## Quality Checklist

Before publishing a day entity:

- [ ] All required components included
- [ ] Stats box completed with accurate data
- [ ] Images properly organized and named
- [ ] Alt text added to all images
- [ ] SEO meta tags completed
- [ ] Content follows writing style guidelines
- [ ] Typography hierarchy consistent
- [ ] Container patterns used correctly
- [ ] Navigation links working
- [ ] Mobile responsive design verified

## CRITICAL: Scalability Maintenance Rules

### Theme Change Protocol

When modifying the website theme or layout:

1. **NEVER edit individual day entities**
2. **Update components only**: Modify files in `/src/lib/components/`
3. **Update design system**: Modify `km-*` classes in `src/app.css`
4. **Test with representative pages**: Check 2-3 day entities to verify changes
5. **Changes propagate automatically** to all 100+ day entities

### Component Modification Guidelines

**When updating shared components:**

- ✅ Test changes across different adventures (Japan 2017, 2023, Korea 2025)
- ✅ Verify mobile responsive behavior
- ✅ Check accessibility standards
- ✅ Maintain backward compatibility
- ❌ Never break the component API (props interface)

### Design System Evolution

**CSS Class Updates:**

- ✅ Modify existing `km-*` classes in `src/app.css`
- ✅ Add new semantic classes following `km-*` naming convention
- ❌ Never remove classes that day entities depend on
- ❌ Never change class names without updating this template

### Long-term Maintainability

**With 100+ day entities across multiple trips:**

- **Centralized control**: All styling controlled from components and design system
- **Atomic updates**: Single change affects all day entities simultaneously
- **Version consistency**: All pages share exact same component versions
- **Future-proof**: New day entities automatically inherit latest theme
- **Migration safety**: Theme changes require zero individual page edits

### Emergency Override Protocol

**If a day entity breaks due to component changes:**

1. **Fix the component**, don't patch the individual page
2. **Update the template** to prevent future issues
3. **Test across all adventures** to ensure fix is comprehensive
4. **Document the change** in this template file

This scalable approach ensures that the website can evolve and grow while maintaining perfect consistency across hundreds of day entities.
