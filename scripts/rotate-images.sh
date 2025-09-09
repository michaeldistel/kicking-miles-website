#!/bin/bash

# Script to rotate specific Japan 2023 images that appear to be incorrectly oriented

cd /home/michael/projects/kicking-miles-website/static/images/japan-2023

echo "Rotating images that appear to be incorrectly oriented..."

# Images to rotate 90 degrees clockwise (from portrait to landscape)
images_to_rotate=(
    "day-02/day02-photo-02.webp"
    "day-02/day02-photo-03.webp" 
    "day-02/day02-photo-05.webp"
    "day-03/day03-photo-02.webp"
    "day-03/day03-photo-03.webp"
    "day-03/day03-photo-05.webp"
)

for image in "${images_to_rotate[@]}"; do
    if [ -f "$image" ]; then
        echo "Rotating $image (90° clockwise)"
        # Create backup
        cp "$image" "${image}.backup"
        # Rotate 90 degrees clockwise and save as WebP
        convert "$image" -rotate 90 -quality 85 "${image%.webp}_rotated.webp"
        # Replace original with rotated version
        mv "${image%.webp}_rotated.webp" "$image"
        echo "✓ Rotated $image"
    else
        echo "⚠ File not found: $image"
    fi
done

echo ""
echo "Rotation complete! Checking new dimensions..."
echo ""

for image in "${images_to_rotate[@]}"; do
    if [ -f "$image" ]; then
        dims=$(identify "$image" | awk '{print $3}')
        echo "$image: $dims"
    fi
done

echo ""
echo "Backup files created with .backup extension"
echo "If you're happy with the results, you can remove backups with:"
echo "find . -name '*.backup' -delete"
