#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const japanTripDir = '/home/michael/projects/kicking-miles-website/src/routes/trips/japan-2017';

console.log('🔄 Updating Japan 2017 gallery types from "square" to "landscape"...\n');

// Get all day directories
const dayDirs = fs.readdirSync(japanTripDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name.startsWith('day-'))
    .map(dirent => dirent.name)
    .sort();

let updatedCount = 0;

for (const dayDir of dayDirs) {
    const filePath = path.join(japanTripDir, dayDir, '+page.svelte');

    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  File not found: ${filePath}`);
        continue;
    }

    try {
        const content = fs.readFileSync(filePath, 'utf8');

        // Update gallery type from "square" to "landscape"
        const updatedContent = content.replace(
            /galleryType="square"/g,
            'galleryType="landscape"'
        );

        // Check if any changes were made
        if (content !== updatedContent) {
            fs.writeFileSync(filePath, updatedContent, 'utf8');
            console.log(`✅ Updated ${dayDir}: square → landscape`);
            updatedCount++;
        } else {
            // Check if it already uses a different gallery type
            if (content.includes('galleryType=')) {
                const match = content.match(/galleryType="([^"]+)"/);
                if (match) {
                    console.log(`ℹ️  ${dayDir}: already using "${match[1]}"`);
                }
            } else {
                console.log(`ℹ️  ${dayDir}: no gallery type specified (will default to "grid")`);
            }
        }

    } catch (error) {
        console.error(`❌ Error processing ${dayDir}:`, error.message);
    }
}

console.log(`\n📊 Summary: Updated ${updatedCount} files to use "landscape" gallery type`);
console.log('\n🖼️  Japan 2017 photos will now display with landscape aspect ratios (16:9)!');
