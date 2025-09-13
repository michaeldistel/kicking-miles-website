#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

// Find all Japan 2017 day entity files
const japan2017Dir = path.join(projectRoot, 'src/routes/trips/japan-2017');

function findDayEntities() {
    const entities = [];
    const items = fs.readdirSync(japan2017Dir);

    for (const item of items) {
        if (item.startsWith('day-')) {
            const pagePath = path.join(japan2017Dir, item, '+page.svelte');
            if (fs.existsSync(pagePath)) {
                entities.push(pagePath);
            }
        }
    }

    return entities;
}

function updateLayoutStructure(content) {
    // Replace old container structure with new km-container structure
    content = content.replace(
        /<div class="min-h-screen py-16 px-4">\s*<div class="container mx-auto max-w-4xl">/g,
        '<div class="km-container">\n  <div class="km-content-wrapper">'
    );

    content = content.replace(
        /<div class="container mx-auto px-4 py-4 pb-2 max-w-4xl">/g,
        '<div class="km-container">\n  <div class="km-content-wrapper">'
    );

    // Add standardized grid layout for Stats and Weather boxes
    // Look for individual StatsBox and WeatherBox components and wrap them in grid
    const statsBoxPattern = /(<TripHeader[^>]*\/>)\s*(<StatsBox[^>]*\/>)\s*(?:<!-- Weather -->\s*<div class="mb-12">\s*)?(<WeatherBox[^>]*\/>)/g;
    content = content.replace(statsBoxPattern, (match, tripHeader, statsBox, weatherBox) => {
        return `${tripHeader}

    <div class="grid md:grid-cols-2 gap-8 mb-8 mt-12">
      ${statsBox}
      ${weatherBox}
    </div>`;
    });

    // Update content wrapper class
    content = content.replace(
        /<div class="space-y-8 mb-8">/g,
        '<div class="km-prose-content space-y-8">'
    );

    // Update author attribution styling
    content = content.replace(
        /class="km-body-text font-medium mt-8"/g,
        'class="text-sm text-km-subtle italic mt-8"'
    );

    content = content.replace(
        /class="text-sm text-gray-600 mt-4"/g,
        'class="text-sm text-km-subtle italic mt-8"'
    );

    // Ensure proper closing structure
    const closingPattern = /(\s*<\/div>\s*<\/div>\s*)$/;
    if (!closingPattern.test(content)) {
        content = content.replace(/(\s*<\/div>\s*)$/, '\n  </div>\n</div>');
    }

    return content;
}

function updateGalleryType(content) {
    // Update gallery types to use "mixed" consistently
    content = content.replace(/galleryType="compact"/g, 'galleryType="mixed"');
    content = content.replace(/galleryType="grid"/g, 'galleryType="mixed"');
    content = content.replace(/galleryType="spacious"/g, 'galleryType="mixed"');

    return content;
}

function updateSingleFile(filePath) {
    console.log(`Updating: ${path.relative(projectRoot, filePath)}`);

    let content = fs.readFileSync(filePath, 'utf8');

    // Apply layout structure updates
    content = updateLayoutStructure(content);

    // Apply gallery type updates
    content = updateGalleryType(content);

    // Write back the updated content
    fs.writeFileSync(filePath, content);
}

function main() {
    const entities = findDayEntities();
    console.log(`Found ${entities.length} Japan 2017 day entities to update`);

    let updated = 0;

    for (const entityPath of entities) {
        try {
            updateSingleFile(entityPath);
            updated++;
        } catch (error) {
            console.error(`Error updating ${entityPath}:`, error.message);
        }
    }

    console.log(`Successfully updated ${updated} of ${entities.length} files`);
    console.log('Japan 2017 layout standardization complete!');
}

main();
