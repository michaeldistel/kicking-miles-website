const fs = require('fs');
const path = require('path');

const filesToUpdate = [
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

        // More comprehensive regex patterns to handle different ImageGallery formats
        let updatedContent = content;

        // Pattern 1: <ImageGallery photoImages={...} title="..." />
        updatedContent = updatedContent.replace(
            /<ImageGallery\s+photoImages=\{[^}]+\}\s+title="[^"]*"\s*\/>/g,
            (match) => {
                if (match.includes('galleryType=')) return match;
                return match.replace(' />', ' galleryType="landscape" />');
            }
        );

        // Pattern 2: <ImageGallery title="..." photoImages={...} />
        updatedContent = updatedContent.replace(
            /<ImageGallery\s+title="[^"]*"\s+photoImages=\{[^}]+\}\s*\/>/g,
            (match) => {
                if (match.includes('galleryType=')) return match;
                return match.replace(' />', ' galleryType="landscape" />');
            }
        );

        // Pattern 3: <ImageGallery title="..." routeImages={...} />
        updatedContent = updatedContent.replace(
            /<ImageGallery\s+title="[^"]*"\s+routeImages=\{[^}]+\}\s*\/>/g,
            (match) => {
                if (match.includes('galleryType=')) return match;
                return match.replace(' />', ' galleryType="landscape" />');
            }
        );

        // Pattern 4: <ImageGallery routeImages={...} title="..." />
        updatedContent = updatedContent.replace(
            /<ImageGallery\s+routeImages=\{[^}]+\}\s+title="[^"]*"\s*\/>/g,
            (match) => {
                if (match.includes('galleryType=')) return match;
                return match.replace(' />', ' galleryType="landscape" />');
            }
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
