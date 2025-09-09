#!/bin/bash

# Image conversion script for Kicking Miles website
# Converts JPG/JPEG/PNG images to WebP format with optimization

# Configuration
QUALITY=80          # WebP quality (0-100, 80 is good balance)
MAX_WIDTH=1200      # Maximum width for large images
MAX_HEIGHT=1600     # Maximum height for portrait images

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🖼️  Image Conversion Script for Kicking Miles Website${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

# Check if we're in the right directory
if [ ! -d "static/images" ]; then
    echo -e "${RED}Error: Please run this script from the project root directory${NC}"
    exit 1
fi

# Function to convert a single image
convert_image() {
    local input_file="$1"
    local output_file="${input_file%.*}.webp"
    
    # Skip if WebP already exists and is newer
    if [ -f "$output_file" ] && [ "$output_file" -nt "$input_file" ]; then
        echo -e "${YELLOW}⏭️  Skipping $input_file (WebP exists and is newer)${NC}"
        return
    fi
    
    # Get image dimensions
    local dimensions=$(identify -format "%wx%h" "$input_file" 2>/dev/null)
    local width=$(echo $dimensions | cut -d'x' -f1)
    local height=$(echo $dimensions | cut -d'x' -f2)
    
    if [ -z "$width" ] || [ -z "$height" ]; then
        echo -e "${RED}❌ Error reading dimensions for $input_file${NC}"
        return
    fi
    
    # Calculate resize if needed
    local resize_args=""
    if [ "$width" -gt "$MAX_WIDTH" ] || [ "$height" -gt "$MAX_HEIGHT" ]; then
        resize_args="-resize ${MAX_WIDTH}x${MAX_HEIGHT}>"
        echo -e "${YELLOW}📏 Resizing $input_file (${width}x${height}) -> max ${MAX_WIDTH}x${MAX_HEIGHT}${NC}"
    fi
    
    # Get original file size
    local original_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file" 2>/dev/null)
    local original_size_mb=$(echo "scale=2; $original_size / 1048576" | bc)
    
    # Convert using cwebp (better quality than ImageMagick for WebP)
    if command -v cwebp >/dev/null 2>&1; then
        # Use cwebp for best WebP conversion
        if [ -n "$resize_args" ]; then
            # First resize with ImageMagick, then convert with cwebp
            convert "$input_file" $resize_args "/tmp/temp_$(basename "$input_file")"
            cwebp -q $QUALITY "/tmp/temp_$(basename "$input_file")" -o "$output_file"
            rm "/tmp/temp_$(basename "$input_file")"
        else
            cwebp -q $QUALITY "$input_file" -o "$output_file"
        fi
    else
        # Fallback to ImageMagick
        convert "$input_file" $resize_args -quality $QUALITY "$output_file"
    fi
    
    if [ $? -eq 0 ] && [ -f "$output_file" ]; then
        # Get new file size
        local new_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null)
        local new_size_mb=$(echo "scale=2; $new_size / 1048576" | bc)
        local savings=$(echo "scale=1; (($original_size - $new_size) * 100) / $original_size" | bc)
        
        echo -e "${GREEN}✅ $input_file -> $output_file${NC}"
        echo -e "   📊 Size: ${original_size_mb}MB -> ${new_size_mb}MB (${savings}% smaller)"
        
        # Update references in the component files if the filename changed
        update_references "$input_file" "$output_file"
    else
        echo -e "${RED}❌ Failed to convert $input_file${NC}"
    fi
}

# Function to update file references in Svelte components
update_references() {
    local old_file="$1"
    local new_file="$2"
    
    # Extract just the filename parts for the image paths
    local old_name=$(basename "$old_file")
    local new_name=$(basename "$new_file")
    
    # Only update if the filename actually changed (JPG -> WebP)
    if [ "$old_name" != "$new_name" ]; then
        # Find and update references in Svelte files
        find src/routes -name "*.svelte" -type f -exec sed -i "s|$old_name|$new_name|g" {} \;
        echo -e "   🔄 Updated references from $old_name to $new_name"
    fi
}

# Main conversion process
echo -e "${BLUE}🔍 Scanning for images to convert...${NC}"
echo ""

# Find all image files
total_files=0
converted_files=0

# Process Japan 2023 images
for img in $(find static/images/japan-2023 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | sort); do
    echo -e "${BLUE}Processing: $img${NC}"
    convert_image "$img"
    total_files=$((total_files + 1))
    if [ -f "${img%.*}.webp" ]; then
        converted_files=$((converted_files + 1))
    fi
    echo ""
done

echo -e "${BLUE}================================================${NC}"
echo -e "${GREEN}🎉 Conversion Complete!${NC}"
echo -e "   📊 Processed: $total_files files"
echo -e "   ✅ Converted: $converted_files files"
echo ""
echo -e "${YELLOW}💡 Next steps:${NC}"
echo -e "   1. Review the converted WebP images"
echo -e "   2. Update your Svelte components to reference the .webp files"
echo -e "   3. Test the website to ensure images load correctly"
echo -e "   4. Consider removing the original JPG files to save space"
echo ""
