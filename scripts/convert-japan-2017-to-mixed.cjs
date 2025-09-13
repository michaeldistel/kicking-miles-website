const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all Japan 2017 files with galleryType="landscape"
const findResult = execSync(
    'find src/routes/trips/japan-2017 -name "+page.svelte" -exec grep -l "galleryType=" {} \\;',
    { encoding: 'utf8' }
);

const filesToUpdate = findResult.trim().split('\n').filter(f => f);

let updatedCount = 0;

console.log('🔄 Converting Japan 2017 galleries from "landscape" to "mixed"...\n');

filesToUpdate.forEach(filePath => {
    try {
        const fullPath = path.join(process.cwd(), filePath);
        let content = fs.readFileSync(fullPath, 'utf8');

        // Replace galleryType="landscape" with galleryType="mixed"
        const updatedContent = content.replace(
            /galleryType="landscape"/g,
            'galleryType="mixed"'
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

console.log(`\n🎯 Summary: ${updatedCount} files updated from "landscape" to "mixed"`);
console.log('\n📊 Japan 2017 Image Analysis:');
console.log('   • 148 photos: 300x225 (4:3 landscape)');
console.log('   • 113 photos: 300x400 (3:4 portrait)');
console.log('   • 22 photos: 1080x1080 (1:1 square)');
console.log('   • 18 photos: 300x300 (1:1 square)');
console.log('   • Various other dimensions');
console.log('\n✨ Perfect for galleryType="mixed" which handles landscape + portrait automatically!');
