#!/bin/bash

# Script to rotate specific Day 1 Japan 2023 images clockwise

cd /home/michael/projects/kicking-miles-website/static/images/japan-2023

echo "Rotating specified Day 1 images clockwise..."

# Images to rotate 90 degrees clockwise
images_to_rotate=(
    "day-01/day01-photo-02.webp"
    "day-01/day01-photo-03.webp"
    "day-01/day01-photo-04.webp"
    "day-01/day01-photo-06.webp"
    "day-01/day01-photo-07.webp"
    "day-01/day01-photo-08.webp"
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
        width=$(echo $dims | cut -d'x' -f1)
        height=$(echo $dims | cut -d'x' -f2)
        if [ $height -gt $width ]; then
            orientation="PORTRAIT"
        else
            orientation="LANDSCAPE"
        fi
        echo "$image: $dims ($orientation)"
    fi
done

echo ""
echo "Backup files created with .backup extension"
