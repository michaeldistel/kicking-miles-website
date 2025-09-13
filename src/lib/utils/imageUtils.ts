// Helper function to get image dimensions and aspect ratio based on filename
export function getImageDimensions(src: string): { width: number; height: number; ratio: string } {
    const filename = src.split('/').pop() || '';

    // Extract aspect ratio from filename
    if (filename.includes('-3x4.webp')) {
        return { width: 300, height: 400, ratio: '3x4' }; // Portrait
    }

    if (filename.includes('-4x3.webp')) {
        return { width: 300, height: 225, ratio: '4x3' }; // Landscape 4:3
    }

    if (filename.includes('-16x9.webp')) {
        return { width: 300, height: 169, ratio: '16x9' }; // Widescreen
    }

    if (filename.includes('-1x1.webp')) {
        return { width: 300, height: 300, ratio: '1x1' }; // Square
    }

    // Legacy patterns for older images
    if (filename.includes('route-map')) {
        return { width: 960, height: 960, ratio: '1x1' }; // Most route maps are square
    }

    if (filename.includes('updates')) {
        return { width: 720, height: 960, ratio: '3x4' }; // Updates are usually portrait
    }

    // Default fallback (most Japan 2017 photos are 4:3)
    return { width: 300, height: 225, ratio: '4x3' };
}

// Convert image array to include dimensions and ratio
export function prepareImagesForPhotoSwipe(images: Array<{ src: string; alt: string }>): Array<{ src: string; alt: string; width: number; height: number; ratio: string }> {
    return images.map(image => ({
        ...image,
        ...getImageDimensions(image.src)
    }));
}
