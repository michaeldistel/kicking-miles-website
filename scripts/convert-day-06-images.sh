#!/bin/bash
# Convert Day 6 images to WebP format for the website

cd /home/michael/projects/kicking-miles-website/static/images/korea-2025/day-06

echo "Converting Day 6 images to WebP format..."

# Counter for numbering
counter=1

# Convert JPG files to WebP
for img in *.jpg; do
    if [ -f "$img" ]; then
        # Create WebP filename with proper numbering
        webp_name="photo-$(printf "%02d" $counter)-4x3.webp"
        
        # Convert using ImageMagick (install with: sudo apt install imagemagick)
        # or using ffmpeg (install with: sudo apt install ffmpeg)
        
        # Using ImageMagick:
        # convert "$img" -quality 85 "$webp_name"
        
        # Using ffmpeg:
        # ffmpeg -i "$img" -quality 85 "$webp_name"
        
        echo "Would convert: $img -> $webp_name"
        counter=$((counter + 1))
    fi
done

echo "To actually convert, uncomment one of the conversion commands above"
echo "Install ImageMagick: sudo apt install imagemagick"
echo "Or install ffmpeg: sudo apt install ffmpeg"