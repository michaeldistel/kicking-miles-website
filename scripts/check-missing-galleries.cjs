const fs = require('fs');
const path = require('path');

const daysToCheck = [];
for (let i = 17; i <= 34; i++) {
    daysToCheck.push(`day-${i.toString().padStart(2, '0')}`);
}

const tripsDir = '/home/michael/projects/kicking-miles-website/src/routes/trips/japan-2017';

console.log('Checking Japan 2017 days 17-34 for photo galleries...\n');

const missingGalleries = [];

daysToCheck.forEach(dayPrefix => {
    // Find the actual directory that starts with this day prefix
    const dayDirs = fs.readdirSync(tripsDir)
        .filter(dir => dir.startsWith(dayPrefix) && fs.statSync(path.join(tripsDir, dir)).isDirectory());

    if (dayDirs.length === 0) {
        console.log(`❌ ${dayPrefix}: Directory not found`);
        return;
    }

    const dayDir = dayDirs[0]; // Take the first match
    const filePath = path.join(tripsDir, dayDir, '+page.svelte');

    if (!fs.existsSync(filePath)) {
        console.log(`❌ ${dayDir}: +page.svelte file not found`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Check for photo gallery
    const hasPhotoGallery = content.includes('photoImages={photos}') || content.includes('photoImages={photoImages}');
    const hasRouteGallery = content.includes('routeImages={featuredImages}') || content.includes('routeImages={routeImages}');

    if (!hasPhotoGallery) {
        missingGalleries.push(dayDir);
        console.log(`❌ ${dayDir}: Missing photo gallery (has route: ${hasRouteGallery ? '✅' : '❌'})`);
    } else {
        console.log(`✅ ${dayDir}: Has photo gallery`);
    }
});

console.log(`\n📊 Summary:`);
console.log(`Total days checked: ${daysToCheck.length}`);
console.log(`Days missing photo galleries: ${missingGalleries.length}`);

if (missingGalleries.length > 0) {
    console.log(`\nDays needing photo galleries:`);
    missingGalleries.forEach(day => console.log(`  - ${day}`));
}

console.log('\nDone!');
