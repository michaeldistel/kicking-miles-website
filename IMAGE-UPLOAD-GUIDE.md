# Image Upload Instructions

## Directory Structure

Images are organized by adventure and day:

```
static/images/
├── japan-2017/
│   ├── day-00/          # Before the adventure (March 25, 2017)
│   ├── day-01/          # Fukuoka to Kitakyushu (March 26, 2017)
│   ├── day-02/          # Day two images
│   └── ...
└── korea-2025/          # Future adventure
    ├── day-01/
    └── ...
```

## Image Naming Convention

For consistency, rename your images when uploading:

### Day 00 (Before the Adventure)

- `before-adventure-01.jpg` (was: 17499264_382169768823945_9085304759034362938_n.jpg)
- `before-adventure-02.jpg` (was: 17499576_382169775490611_6860722711048047121_n.jpg)
- `before-adventure-03.jpg` (was: 17458015_382169772157278_8617313564034766085_n.jpg)

### Day 01 (Fukuoka to Kitakyushu)

**Route maps:**

- `day01-route-map.jpg` (was: DayOne-Fukuoka-Kitakyushu-KickingMiles.jpg)
- `day01-updates.jpg` (was: DayOneUpdates-Fukioka-Kitakyushu-KickingMiles.jpg)

**Photo gallery:**

- `day01-photo-01.jpg` (was: 17353178_382865295421059_5506417289643849607_n.jpg)
- `day01-photo-02.jpg` (was: 17426066_382865575421031_2759672895668433522_n.jpg)
- `day01-photo-03.jpg` (was: 17499461_382865512087704_682647682487539863_n.jpg)
- `day01-photo-04.jpg` (was: 17522690_382865502087705_4117733589535443968_n.jpg)
- `day01-photo-05.jpg` (was: 17499377_382865448754377_1979432134275826875_n.jpg)
- `day01-photo-06.jpg` (was: 17522753_382865442087711_19364920254943395_n.jpg)
- `day01-photo-07.jpg` (was: 17553807_382865392087716_2664384184966880663_n.jpg)
- `day01-photo-08.jpg` (was: 17499498_382865382087717_8445310736475792939_n.jpg)
- `day01-photo-09.jpg` (was: 17553538_382865335421055_4920043839668053718_n.jpg)
- `day01-photo-10.jpg` (was: 17498982_382865325421056_9151316571437868486_n.jpg)

## How to Add Images

1. **Resize images** to web-friendly sizes (max 1920px wide for full-size images)
2. **Optimize** with tools like ImageMagick: `convert image.jpg -quality 85 -resize 1920x1920\> optimized.jpg`
3. **Create WebP versions** for better performance: `convert optimized.jpg optimized.webp`
4. **Upload** to the appropriate day folder in `/static/images/japan-2017/day-XX/`

## Updating the Trip Daily Posts

Once images are uploaded, update the daily trip post files to replace the placeholders:

**Example for Day 01 route map:**

```svelte
<!-- Replace this placeholder -->
<div class="aspect-video bg-gray-100 rounded-lg border-2 border-dashed...">

<!-- With actual image -->
<img src="/images/japan-2017/day-01/day01-route-map.webp"
     alt="Day 1 route from Fukuoka to Kitakyushu"
     class="w-full aspect-video object-cover rounded-lg">
```

## Alt Text Guidelines

Write descriptive alt text for accessibility:

- Route maps: "Day X route from [start] to [destination]"
- Photos: Brief description of what's shown
- People: Include names when known
- Locations: Include place names when identifiable

## Performance Tips

- Use WebP format when possible (better compression)
- Serve different sizes for different screen sizes if needed
- Consider lazy loading for photo galleries
- Compress images to balance quality and file size
