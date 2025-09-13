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

console.log('Analyzing broken Japan 2017 day structures...\n');

brokenDays.forEach(dayDir => {
    const filePath = path.join(tripsDir, dayDir, '+page.svelte');

    if (!fs.existsSync(filePath)) {
        console.log(`❌ ${dayDir}: File not found`);
        return;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    console.log(`\n=== ${dayDir} ===`);

    // Check for km-container
    const hasContainer = content.includes('<div class="km-container">');
    console.log(`km-container: ${hasContainer ? '✅' : '❌'}`);

    // Check for km-content-wrapper
    const hasWrapper = content.includes('<div class="km-content-wrapper">');
    console.log(`km-content-wrapper: ${hasWrapper ? '✅' : '❌'}`);

    // Check for TripHeader
    const hasTripHeader = content.includes('<TripHeader');
    console.log(`TripHeader: ${hasTripHeader ? '✅' : '❌'}`);

    // Check for proper closing structure
    const containerOpens = (content.match(/<div class="km-container">/g) || []).length;
    const wrapperOpens = (content.match(/<div class="km-content-wrapper">/g) || []).length;
    const totalCloses = (content.match(/<\/div>/g) || []).length;

    console.log(`Structure: ${containerOpens} container(s), ${wrapperOpens} wrapper(s), ${totalCloses} closes`);

    // Look for specific issues
    if (content.includes('</div>\n</div>\n</div>\n</div>')) {
        console.log('⚠️  Multiple duplicate closing divs found');
    }

    if (content.includes('<DayNavigation') && !content.includes('/>') && !content.includes('</DayNavigation>')) {
        console.log('⚠️  DayNavigation not properly closed');
    }

    // Check for missing containers at start
    const lines = content.split('\n');
    let foundContainer = false;
    let foundTripHeader = false;
    for (let i = 0; i < Math.min(lines.length, 60); i++) {
        if (lines[i].includes('<div class="km-container">')) {
            foundContainer = true;
            console.log(`Container found at line ${i + 1}`);
            break;
        }
        if (lines[i].includes('<TripHeader')) {
            foundTripHeader = true;
            if (!foundContainer) {
                console.log(`⚠️  TripHeader at line ${i + 1} but no container wrapper found above it`);
            }
            break;
        }
    }
});

console.log('\nDone analyzing!');
