# Image Upload Guide

## Directory Structure

Images organized by trip and day:

```
static/images/
├── japan-2017/
│   ├── day-00/          # Before the adventure
│   ├── day-01/          # Fukuoka to Kitakyushu
│   └── ...
├── japan-2023/
│   ├── day-01/
│   └── ...
└── korea-2025/
    ├── day-01/
    └── ...
```

## Current Naming Convention (2023+)

**Format**: `photo-XX-[ratio].webp` or `[type]-[ratio].webp`

**Aspect Ratios**:

- `-4x3` = Landscape 4:3 (1200×900px)
- `-3x4` = Portrait 3:4 (900×1200px)
- `-1x1` = Square 1:1 (960×960px)
- `-16x9` = Widescreen 16:9 (1920×1080px)

**Examples**:

```
photo-01-4x3.webp        # First photo, landscape 4:3
photo-02-3x4.webp        # Second photo, portrait 3:4
photo-03-1x1.webp        # Third photo, square
route-map-1x1.webp       # Route map, square
updates-3x4.webp         # Updates screenshot, portrait
```

**Legacy Pattern (Japan 2017)**:

- `day01-photo-01.jpg` → Now: `photo-01-4x3.webp`
- `day01-route-map.jpg` → Now: `route-map-1x1.webp`

## Image Preparation

### 1. Convert to WebP

Using ImageMagick:

```bash
# Single image
magick image.jpg -quality 85 photo-01-4x3.webp

# Batch convert
for f in *.jpg; do magick "$f" -quality 85 "${f%.jpg}.webp"; done
```

Using cwebp:

```bash
cwebp -q 85 image.jpg -o photo-01-4x3.webp
```

### 2. Resize if Needed

```bash
# Landscape 4:3 (max 1200px width)
magick input.jpg -resize 1200x900 -quality 85 photo-01-4x3.webp

# Portrait 3:4 (max 900px width)
magick input.jpg -resize 900x1200 -quality 85 photo-02-3x4.webp

# Square (960px)
magick input.jpg -resize 960x960 -quality 85 photo-03-1x1.webp
```

### 3. Add to Static Folder

Upload to: `static/images/[trip-name]/day-XX/`

## Using Images in Pages

### Utility Pattern (Japan 2017)

```svelte
<script>
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

  const rawImages = [
    { src: '/images/japan-2017/day-01/photo-01-4x3.webp', alt: 'Description here' },
    { src: '/images/japan-2017/day-01/photo-02-3x4.webp', alt: 'Description here' }
  ];

  const images = prepareImagesForPhotoSwipe(rawImages);
</script>

<PhotoSwipeGallery {images} title="Day 1 Gallery" />
```

### Explicit Pattern (Korea 2025)

```svelte
<script>
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';

  const images = [
    {
      src: '/images/korea-2025/day-01/photo-01-4x3.webp',
      alt: 'Description here',
      width: 1200,
      height: 900,
      ratio: '4x3'
    },
    {
      src: '/images/korea-2025/day-01/photo-02-3x4.webp',
      alt: 'Description here',
      width: 900,
      height: 1200,
      ratio: '3x4'
    }
  ];
</script>

<PhotoSwipeGallery {images} title="Day 1 Gallery" />
```

## Alt Text Guidelines

Write descriptive alt text for accessibility:

- **Route maps**: "Route map showing path from [start] to [destination] covering XXkm"
- **Photos**: Include location, activity, and context
- **People**: Include names when known
- **Landmarks**: Include place names and significance

**Examples**:

```svelte
alt="Michael pushing kick scooter uphill on Route 3 near Fukuoka"
alt="Traditional Japanese temple with cherry blossoms in Nara"
alt="Route map showing the 70km path from Busan to Yangsan along Nakdonggang River"
```

## Quality Guidelines

- **Format**: WebP only (better compression than JPG/PNG)
- **Quality**: 85% (good balance of size and clarity)
- **Max dimensions**: 1200×900 (landscape), 900×1200 (portrait), 960×960 (square)
- **File size target**: <500KB per image
- **Aspect ratio**: Must match filename suffix

## Checklist

- [ ] Images converted to WebP format
- [ ] Filenames include aspect ratio suffix (`-4x3`, `-3x4`, `-1x1`, `-16x9`)
- [ ] Images resized to standard dimensions
- [ ] Placed in correct trip/day directory
- [ ] Descriptive alt text added in page code
- [ ] Gallery tested in PhotoSwipe component
