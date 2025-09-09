#!/bin/bash

# Rename Japan 2023 images to match Japan 2017 naming convention
# Pattern: dayXX-photo-XX.webp

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔄 Renaming Japan 2023 images to match Japan 2017 style${NC}"
echo -e "${BLUE}======================================================${NC}"

cd /home/michael/projects/kicking-miles-website/static/images/japan-2023

# Day 01 files
echo -e "${BLUE}📁 Processing Day 01...${NC}"
cd day-01
mv 20231015_201132.webp day01-photo-01.webp 2>/dev/null && echo -e "${GREEN}✅ day01-photo-01.webp${NC}"
mv 20231016_062031.webp day01-photo-02.webp 2>/dev/null && echo -e "${GREEN}✅ day01-photo-02.webp${NC}"
mv 20231016_073617.webp day01-photo-03.webp 2>/dev/null && echo -e "${GREEN}✅ day01-photo-03.webp${NC}"
mv 20231016_081837.webp day01-photo-04.webp 2>/dev/null && echo -e "${GREEN}✅ day01-photo-04.webp${NC}"
mv 20231016_081915.webp day01-photo-05.webp 2>/dev/null && echo -e "${GREEN}✅ day01-photo-05.webp${NC}"
mv 20231016_120653.webp day01-photo-06.webp 2>/dev/null && echo -e "${GREEN}✅ day01-photo-06.webp${NC}"
mv 20231016_121102.webp day01-photo-07.webp 2>/dev/null && echo -e "${GREEN}✅ day01-photo-07.webp${NC}"
mv 20231016_121442.webp day01-photo-08.webp 2>/dev/null && echo -e "${GREEN}✅ day01-photo-08.webp${NC}"
mv IMG-20231017-WA0001.webp day01-photo-09.webp 2>/dev/null && echo -e "${GREEN}✅ day01-photo-09.webp${NC}"
mv Screenshot_20231016_172531_Mi_Fitness.webp day01-photo-10.webp 2>/dev/null && echo -e "${GREEN}✅ day01-photo-10.webp${NC}"

# Day 02 files
echo -e "${BLUE}📁 Processing Day 02...${NC}"
cd ../day-02
mv 20231017_090157.webp day02-photo-01.webp 2>/dev/null && echo -e "${GREEN}✅ day02-photo-01.webp${NC}"
mv 20231017_111750.webp day02-photo-02.webp 2>/dev/null && echo -e "${GREEN}✅ day02-photo-02.webp${NC}"
mv 20231017_145634.webp day02-photo-03.webp 2>/dev/null && echo -e "${GREEN}✅ day02-photo-03.webp${NC}"
mv 20231017_171828.webp day02-photo-04.webp 2>/dev/null && echo -e "${GREEN}✅ day02-photo-04.webp${NC}"
mv Screenshot_20231017_145959_Mi_Fitness.webp day02-photo-05.webp 2>/dev/null && echo -e "${GREEN}✅ day02-photo-05.webp${NC}"

# Day 03 files
echo -e "${BLUE}📁 Processing Day 03...${NC}"
cd ../day-03
mv 20231017_090157.webp day03-photo-01.webp 2>/dev/null && echo -e "${GREEN}✅ day03-photo-01.webp${NC}"
mv 20231017_111750.webp day03-photo-02.webp 2>/dev/null && echo -e "${GREEN}✅ day03-photo-02.webp${NC}"
mv 20231017_145634.webp day03-photo-03.webp 2>/dev/null && echo -e "${GREEN}✅ day03-photo-03.webp${NC}"
mv 20231017_171828.webp day03-photo-04.webp 2>/dev/null && echo -e "${GREEN}✅ day03-photo-04.webp${NC}"
mv Screenshot_20231017_145959_Mi_Fitness.webp day03-photo-05.webp 2>/dev/null && echo -e "${GREEN}✅ day03-photo-05.webp${NC}"

echo ""
echo -e "${BLUE}🎉 Renaming complete! Files now follow Japan 2017 naming convention.${NC}"
echo -e "${BLUE}Next step: Update the photo arrays in the Svelte components.${NC}"
