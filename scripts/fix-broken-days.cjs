const fs = require('fs');
const path = require('path');

const brokenDays = [
    'day-34-allergy-attack',
    'day-35-when-life-throws-you-yet-another-curve-ball',
    'day-36-going-slow-and-being-present',
    'day-37-the-beginning-of-the-last-hard-leg',
    'day-38-the-steep-ascent-into-the-hakoda-mountain-ranges',
    'day-39-golden-week-holiday-madness',
    'day-40-omg-its-the-last-boss'
];

const tripsDir = '/home/michael/projects/kicking-miles-website/src/routes/trips/japan-2017';

console.log('Fixing Japan 2017 day container structures...\n');

brokenDays.forEach(dayDir => {
    const filePath = path.join(tripsDir, dayDir, '+page.svelte');

    if (!fs.existsSync(filePath)) {
        console.log(`❌ ${dayDir}: File not found`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Move TripHeader inside container
    // Pattern: </svelte:head>\n\n<TripHeader ... />\n\n<div class="km-container">
    if (content.includes('</svelte:head>') && content.includes('<TripHeader') && content.includes('<div class="km-container">')) {
        const pattern = /(.*<\/svelte:head>\s*)\n\s*(<TripHeader[^>]*(?:\s|\S)*?\/>\s*)\n\s*(<div class="km-container">\s*<div class="km-content-wrapper">)/s;
        const replacement = '$1\n\n$3\n    \n    $2';

        if (pattern.test(content)) {
            content = content.replace(pattern, replacement);
            modified = true;
            console.log(`✅ ${dayDir}: Moved TripHeader inside container`);
        }
    }

    // Fix 2: Standardize indentation and spacing
    content = content
        .replace(/\t/g, '  ')  // Convert tabs to spaces
        .replace(/^\s+<TripHeader\s/gm, '    <TripHeader ')  // Fix TripHeader indentation
        .replace(/^\s+<DayNavigation\s/gm, '    <DayNavigation ')  // Fix DayNavigation indentation
        .replace(/^\s+<\/div>\s*<\/div>\s*$/gm, '  </div>\n</div>');  // Fix closing div indentation

    // Fix 3: Ensure proper container closing
    if (content.includes('<div class="km-container">') && content.includes('<div class="km-content-wrapper">')) {
        // Count opens and closes
        const containerOpens = (content.match(/<div class="km-container">/g) || []).length;
        const wrapperOpens = (content.match(/<div class="km-content-wrapper">/g) || []).length;
        const totalCloses = (content.match(/<\/div>/g) || []).length;

        const expectedCloses = containerOpens + wrapperOpens;

        if (totalCloses < expectedCloses) {
            console.log(`⚠️  ${dayDir}: Missing closing divs (${totalCloses} found, ${expectedCloses} expected)`);
        } else if (totalCloses > expectedCloses + 5) {  // Allow some extra divs for content
            console.log(`⚠️  ${dayDir}: Too many closing divs (${totalCloses} found, ~${expectedCloses} expected)`);
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`✅ ${dayDir}: File updated`);
    } else {
        console.log(`→  ${dayDir}: No automatic fixes applied`);
    }
});

console.log('\nDone!');
