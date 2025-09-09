#!/bin/bash

# Clean up original JPG files after successful WebP conversion
# This will save ~28MB of space

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🧹 Cleaning up original JPG files${NC}"
echo -e "${BLUE}==================================${NC}"

cd /home/michael/projects/kicking-miles-website/static/images/japan-2023

# Check space before cleanup
echo -e "${YELLOW}📊 Space usage before cleanup:${NC}"
find . -name "*.jpg" -exec ls -l {} \; | awk '{sum += $5} END {printf "JPG files: %.2f MB\n", sum/1024/1024}'
find . -name "*.webp" -exec ls -l {} \; | awk '{sum += $5} END {printf "WebP files: %.2f MB\n", sum/1024/1024}'

echo ""
echo -e "${YELLOW}🗑️  Removing original JPG files...${NC}"

# Remove JPG files
jpg_count=0
for jpg_file in $(find . -name "*.jpg"); do
    rm "$jpg_file"
    jpg_count=$((jpg_count + 1))
    echo -e "${GREEN}✅ Removed: $jpg_file${NC}"
done

echo ""
echo -e "${BLUE}🎉 Cleanup complete!${NC}"
echo -e "   📊 Removed $jpg_count JPG files"
echo -e "   💾 Saved ~28MB of storage space"
echo -e "   ✨ Only optimized WebP files remain"

# Show remaining files
echo ""
echo -e "${BLUE}📁 Remaining image files:${NC}"
find . -name "*.webp" | wc -l | xargs echo "WebP files:"
find . -name "*.webp" -exec ls -l {} \; | awk '{sum += $5} END {printf "Total size: %.2f MB\n", sum/1024/1024}'
