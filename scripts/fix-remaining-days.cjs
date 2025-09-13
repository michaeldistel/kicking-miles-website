const fs = require('fs');
const path = require('path');

const daysToFix = [
    'day-12-old-lady-dango-shop',
    'day-13-let-no-war-banner-fall',
    'day-14-legendary-bowing-deer',
    'day-15-food-poisoning',
    'day-16-simple-appreciation',
    'day-17-update'
];

const tripsDir = '/home/michael/projects/kicking-miles-website/src/routes/trips/japan-2017';

console.log('Fixing remaining Japan 2017 day structural issues...\n');

daysToFix.forEach(dayDir => {
    const filePath = path.join(tripsDir, dayDir, '+page.svelte');

    if (!fs.existsSync(filePath)) {
        console.log(`❌ ${dayDir}: File not found`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Fix the specific orphaned div pattern
    const fixedContent = content
        .replace(
            /(\s*<\/section>\s*<\/div>\s*<!-- Image galleries -->\s*<\/div>\s*<div class="km-prose-content space-y-8">)/g,
            '$1'
                .replace('</div>\n\n    <!-- Image galleries -->\n    \n    </div>\n\n    <div class="km-prose-content space-y-8">', '\n\n      <!-- Image galleries -->')
        )
        .replace(
            /(\s*<\/section>\s*<\/div>\s*<!-- Image galleries -->\s*<\/div>)\s*<div class="km-prose-content space-y-8">/g,
            '\n      </section>\n\n      <!-- Image galleries -->'
        )
        // Remove duplicate day navigation comments
        .replace(/(\s*<!-- Day navigation -->\s*<!-- Day navigation -->\s*)/g, '\n    <!-- Day navigation -->\n    ')
        // Fix orphaned content wrapper closes
        .replace(/(\s*<\/div>\s*<\/div>\s*)(.*?)(\s*<\/div>\s*<\/div>)/gs, (match, p1, p2, p3) => {
            // Only keep one set of closing divs at the end
            return p2 + '\n\n  </div>\n</div>';
        });

    // More targeted fix for the specific pattern we found
    const betterFixed = content.replace(
        /(<!-- Image galleries -->\s*\n\s*<\/div>\s*\n\s*<div class="km-prose-content space-y-8">)/g,
        '<!-- Image galleries -->'
    );

    if (betterFixed !== content) {
        fs.writeFileSync(filePath, betterFixed);
        console.log(`✅ ${dayDir}: Fixed orphaned div structure`);
    } else {
        console.log(`⚠️  ${dayDir}: No changes needed or pattern not found`);
    }
});

console.log('\nDone!');
