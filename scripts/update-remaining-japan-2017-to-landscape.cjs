const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    'src/routes/trips/japan-2017/day-01-fukuoka-to-kitakyushu/+page.svelte',
    'src/routes/trips/japan-2017/day-02-kyushu-to-honshu/+page.svelte',
    'src/routes/trips/japan-2017/day-10-economic-success/+page.svelte',
    'src/routes/trips/japan-2017/day-35-when-life-throws-you-yet-another-curve-ball/+page.svelte',
    'src/routes/trips/japan-2017/day-37-the-beginning-of-the-last-hard-leg/+page.svelte',
    'src/routes/trips/japan-2017/day-38-the-steep-ascent-into-the-hakoda-mountain-ranges/+page.svelte',
    'src/routes/trips/japan-2017/day-39-golden-week-holiday-madness/+page.svelte',
    'src/routes/trips/japan-2017/day-40-omg-its-the-last-boss/+page.svelte',
    'src/routes/trips/japan-2017/mission-complete-we-made-it/+page.svelte'
];

let updatedCount = 0;

filesToUpdate.forEach(filePath => {
    try {
        const fullPath = path.join(process.cwd(), filePath);
        let content = fs.readFileSync(fullPath, 'utf8');

        // Update ImageGallery components to add galleryType="landscape"
        // This handles both photoImages and routeImages props
        const updatedContent = content
            .replace(
                /<ImageGallery\s+(title="[^"]*"\s+)?(photoImages={[^}]+})\s*\/>/g,
                '<ImageGallery $1$2 galleryType="landscape" />'
            )
            .replace(
                /<ImageGallery\s+(title="[^"]*"\s+)?(routeImages={[^}]+})\s*\/>/g,
                '<ImageGallery $1$2 galleryType="landscape" />'
            );

        if (content !== updatedContent) {
            fs.writeFileSync(fullPath, updatedContent);
            console.log(`✅ Updated: ${filePath}`);
            updatedCount++;
        } else {
            console.log(`⚠️  No changes needed: ${filePath}`);
        }
    } catch (error) {
        console.error(`❌ Error updating ${filePath}:`, error.message);
    }
});

console.log(`\n🎯 Summary: ${updatedCount} files updated with galleryType="landscape"`);
