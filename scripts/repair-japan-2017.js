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

function fixStructuralIssues(content) {
    // Remove duplicate closing divs that might have been introduced
    content = content.replace(/\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*$/g, '\n  </div>\n</div>');

    // Fix the grid structure that might have extra closing div
    content = content.replace(
        /(<div class="grid md:grid-cols-2 gap-8 mb-8 mt-12">[\s\S]*?<\/div>)\s*<\/div>/g,
        '$1'
    );

    // Ensure proper content wrapper structure
    content = content.replace(
        /(<div class="km-prose-content space-y-8">[\s\S]*?)(<div class="km-prose-content space-y-8">)/g,
        '$1\n    </div>\n\n    $2'
    );

    // Fix image gallery placement - should be inside the main content wrapper
    content = content.replace(
        /(\s*<\/div>\s*<!-- Image galleries -->\s*<div class="km-prose-content space-y-8">)/g,
        '\n      <!-- Image galleries -->'
    );

    // Ensure DayNavigation is properly placed
    content = content.replace(
        /(<!-- Day navigation -->[\s\S]*?<DayNavigation[\s\S]*?\/>)/g,
        '\n    $1'
    );

    return content;
}

function repairSingleFile(filePath) {
    console.log(`Repairing: ${path.relative(projectRoot, filePath)}`);

    let content = fs.readFileSync(filePath, 'utf8');

    // Apply structural fixes
    content = fixStructuralIssues(content);

    // Write back the repaired content
    fs.writeFileSync(filePath, content);
}

function main() {
    const entities = findDayEntities();
    console.log(`Found ${entities.length} Japan 2017 day entities to repair`);

    let repaired = 0;

    for (const entityPath of entities) {
        try {
            repairSingleFile(entityPath);
            repaired++;
        } catch (error) {
            console.error(`Error repairing ${entityPath}:`, error.message);
        }
    }

    console.log(`Successfully repaired ${repaired} of ${entities.length} files`);
    console.log('Japan 2017 structural repair complete!');
}

main();
