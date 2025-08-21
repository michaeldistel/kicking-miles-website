const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

let commit = 'unknown';
try {
  commit = execSync('git rev-parse --short HEAD').toString().trim();
} catch (e) {}

const content = `// This file is auto-generated at build time
export const BUILD_COMMIT = '${commit}';
`;

fs.writeFileSync(path.join(__dirname, '../src/lib/build-info.ts'), content); 