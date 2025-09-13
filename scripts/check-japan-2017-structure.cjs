const fs = require('fs');
const path = require('path');

const tripsDir = '/home/michael/projects/kicking-miles-website/src/routes/trips/japan-2017';

// Get all day directories
const dayDirs = fs.readdirSync(tripsDir)
  .filter(dir => dir.startsWith('day-') && fs.statSync(path.join(tripsDir, dir)).isDirectory())
  .sort((a, b) => {
    const dayA = parseInt(a.match(/day-(\d+)/)[1]);
    const dayB = parseInt(b.match(/day-(\d+)/)[1]);
    return dayA - dayB;
  });

console.log(`\nChecking ${dayDirs.length} Japan 2017 day entities for structural issues...\n`);

const issues = [];

dayDirs.forEach(dayDir => {
  const filePath = path.join(tripsDir, dayDir, '+page.svelte');

  if (!fs.existsSync(filePath)) {
    issues.push(`${dayDir}: +page.svelte file missing`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Check for proper km-container structure
  if (!content.includes('<div class="km-container">')) {
    issues.push(`${dayDir}: Missing km-container wrapper`);
  }

  if (!content.includes('<div class="km-content-wrapper">')) {
    issues.push(`${dayDir}: Missing km-content-wrapper`);
  }

  // Check for orphaned divs (common issue from the failed script)
  const orphanedDivPattern = /<!-- Image galleries -->\s*<\/div>\s*<div class="km-prose-content/;
  if (orphanedDivPattern.test(content)) {
    issues.push(`${dayDir}: Has orphaned div structure (broken content wrapper)`);
  }

  // Check for unclosed DayNavigation
  if (content.includes('<DayNavigation') && !content.includes('/>') && !content.includes('</DayNavigation>')) {
    issues.push(`${dayDir}: DayNavigation component not properly closed`);
  }

  // Check for missing container closes
  const containerOpens = (content.match(/<div class="km-container">/g) || []).length;
  const containerCloses = (content.match(/<\/div>/g) || []).length;

  // Basic sanity check - should have at least 2 container opens and proper closes
  if (containerOpens === 0) {
    issues.push(`${dayDir}: No container structure found`);
  }
});

if (issues.length === 0) {
  console.log('✅ All Japan 2017 day entities appear to have proper structure!');
} else {
  console.log(`❌ Found ${issues.length} structural issues:\n`);
  issues.forEach(issue => console.log(`   ${issue}`));
}

console.log(`\nScanned: ${dayDirs.map(d => d.replace('day-', '')).join(', ')}`);
