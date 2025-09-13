#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const japanTripDir = '/home/michael/projects/kicking-miles-website/src/routes/trips/japan-2017';

// Days that need gallery type added
const daysToUpdate = [
    'day-01-fukuoka-to-kitakyushu',
    'day-02-kyushu-to-honshu',
    'day-10-economic-success',
    'day-35-when-life-throws-you-yet-another-curve-ball',
    'day-37-the-beginning-of-the-last-hard-leg',
    'day-38-the-steep-ascent-into-the-hakoda-mountain-ranges',
    'day-39-golden-week-holiday-madness',
    'day-40-omg-its-the-last-boss'
];

console.log('🔄 Adding "square" gallery type to remaining Japan 2017 days...\n');

let updatedCount = 0;

for (const dayDir of daysToUpdate) {
    const filePath = path.join(japanTripDir, dayDir, '+page.svelte');

    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  File not found: ${filePath}`);
        continue;
    }

    try {
        const content = fs.readFileSync(filePath, 'utf8');

        // Look for ImageGallery components without galleryType
        const updatedContent = content.replace(
            /<ImageGallery\s+photoImages=\{[^}]+\}\s*\/>/g,
            (match) => {
                if (!match.includes('galleryType=')) {
                    return match.replace('/>', ' galleryType="square" />');
                }
                return match;
            }
        );

        // Check if any changes were made
        if (content !== updatedContent) {
            fs.writeFileSync(filePath, updatedContent, 'utf8');
            console.log(`✅ Updated ${dayDir}: added galleryType="square"`);
            updatedCount++;
        } else {
            console.log(`ℹ️  ${dayDir}: no ImageGallery found or already has galleryType`);
        }

    } catch (error) {
        console.error(`❌ Error processing ${dayDir}:`, error.message);
    }
}

console.log(`\n📊 Summary: Updated ${updatedCount} files to add "square" gallery type`);
console.log('\n🎨 All Japan 2017 galleries now use square aspect ratios!');
