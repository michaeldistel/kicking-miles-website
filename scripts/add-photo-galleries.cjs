const fs = require('fs');
const path = require('path');

const daysToFix = [
    'day-17-update',
    'day-20-our-first-serious-casualty',
    'day-21-we-have-officially-hit-our-1000km-mark',
    'day-25-second-half-of-the-journey-officially-begins',
    'day-26-more-than-1200km-scooted',
    'day-27-my-fukushima-family',
    'day-28-forest-park-adatara-is-my-meditation-sanctuary',
    'day-29-wonderful-sendoff-and-a-lovely-ride-through-the-mountains',
    'day-30-wonderful-people-everywhere',
    'day-31-theres-something-about-the-countryside',
    'day-32-updates',
    'day-33-a-fond-farewell-to-sendai',
    'day-34-allergy-attack'
];

const tripsDir = '/home/michael/projects/kicking-miles-website/src/routes/trips/japan-2017';

console.log('Adding photo galleries to remaining Japan 2017 days...\n');

daysToFix.forEach(dayDir => {
    const filePath = path.join(tripsDir, dayDir, '+page.svelte');

    if (!fs.existsSync(filePath)) {
        console.log(`❌ ${dayDir}: File not found`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if it already has a photo gallery
    if (content.includes('photoImages={photos}') || content.includes('photoImages={photoImages}')) {
        console.log(`✅ ${dayDir}: Already has photo gallery`);
        return;
    }

    // Step 1: Find all image arrays (look for const [name]Images = [)
    const imageArrayPattern = /const\s+(\w+Images)\s*=\s*\[[\s\S]*?\];/g;
    const imageArrays = [];
    let match;

    while ((match = imageArrayPattern.exec(content)) !== null) {
        imageArrays.push(match[1]);
    }

    console.log(`📸 ${dayDir}: Found image arrays: ${imageArrays.join(', ')}`);

    if (imageArrays.length === 0) {
        console.log(`⚠️  ${dayDir}: No image arrays found to combine`);
        return;
    }

    // Step 2: Add combined photos array after weather object
    const weatherPattern = /(const\s+weather\s*=\s*\{[\s\S]*?\};)/;
    const weatherMatch = content.match(weatherPattern);

    if (!weatherMatch) {
        console.log(`⚠️  ${dayDir}: No weather object found`);
        return;
    }

    // Create the photos array combining all image arrays
    const photosArray = `\n\n\t// Combine all photo arrays for the gallery\n\tconst photos = [${imageArrays.map(arr => `...${arr}`).join(', ')}];`;

    content = content.replace(weatherPattern, `$1${photosArray}`);
    modified = true;

    // Step 3: Add gallery component before day navigation
    const beforeNavPattern = /(\s*<\/section>\s*<\/div>\s*)\n\s*<!-- Day navigation -->/;
    const navMatch = content.match(beforeNavPattern);

    if (!navMatch) {
        console.log(`⚠️  ${dayDir}: Could not find location to insert gallery`);
        return;
    }

    const galleryComponent = `$1\n\n\t\t<!-- Photo Gallery -->\n\t\t<div>\n\t\t\t<ImageGallery photoImages={photos} galleryType="mixed" />\n\t\t</div>\n\t</div>\n\n    <!-- Day navigation -->`;

    content = content.replace(beforeNavPattern, galleryComponent);
    modified = true;

    if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`✅ ${dayDir}: Added photo gallery with ${imageArrays.length} image arrays`);
    }
});

console.log('\nDone!');
