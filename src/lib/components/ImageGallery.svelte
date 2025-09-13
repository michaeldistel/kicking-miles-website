<script lang="ts">
  export let title: string = "Journey Photos";
  export let routeImages: Array<{
    src: string;
    alt: string;
  }> = [];
  export let photoImages: Array<{
    src: string;
    alt: string;
    orientation?: 'landscape' | 'portrait';
  }> = [];
  export let galleryType: 'grid' | 'compact' | 'spacious' | 'portrait' | 'mixed' | 'square' | 'landscape' = 'grid';

  // Use CSS utility classes
  $: photoLayoutClass = galleryType === 'compact' 
    ? 'km-gallery-compact'
    : galleryType === 'spacious'
    ? 'km-gallery-spacious'
    : galleryType === 'portrait'
    ? 'km-gallery-portrait'
    : galleryType === 'mixed'
    ? 'km-gallery-mixed'
    : galleryType === 'square'
    ? 'km-gallery-square'
    : galleryType === 'landscape'
    ? 'km-gallery-landscape'
    : 'km-gallery-grid';

  // Function to determine image aspect ratio from filename
  function getImageAspectRatio(image: {src: string; alt: string; orientation?: 'landscape' | 'portrait'}): string {
    // First priority: use explicit orientation if provided
    if (image.orientation) {
      return image.orientation === 'portrait' ? '3x4' : '4x3';
    }
    
    // Second priority: detect aspect ratio from filename
    const filename = image.src.split('/').pop() || '';
    
    // Check for specific aspect ratio patterns
    if (filename.includes('-3x4.webp') || filename.includes('-3x4.')) {
      return '3x4'; // Portrait
    }
    
    if (filename.includes('-4x3.webp') || filename.includes('-4x3.')) {
      return '4x3'; // Landscape
    }
    
    if (filename.includes('-16x9.webp') || filename.includes('-16x9.')) {
      return '16x9'; // Widescreen
    }
    
    if (filename.includes('-1x1.webp') || filename.includes('-1x1.')) {
      return '1x1'; // Square
    }
    
    // Legacy fallback patterns
    if (filename.includes('-square')) return '1x1';
    if (filename.includes('-portrait')) return '3x4';
    if (filename.includes('-landscape')) return '4x3';
    
    // Default assumption: 4x3 landscape (most common in Japan 2017)
    return '4x3';
  }

  // Legacy function for backward compatibility  
  function getImageOrientation(image: {src: string; alt: string; orientation?: 'landscape' | 'portrait'}): 'landscape' | 'portrait' | 'square' {
    const ratio = getImageAspectRatio(image);
    if (ratio === '1x1') return 'square';
    if (ratio === '3x4') return 'portrait';
    return 'landscape'; // 4x3, 16x9
  }

  // Legacy function for backward compatibility
  function isLandscapeImage(image: {src: string; alt: string; orientation?: 'landscape' | 'portrait'}): boolean {
    const orientation = getImageOrientation(image);
    return orientation === 'landscape' || orientation === 'square';
  }
</script>

{#if routeImages.length > 0 || photoImages.length > 0}
  <div class="mt-12">
    <h3 class="km-section-title">{title}</h3>
    
    <!-- Main route images -->
    {#if routeImages.length > 0}
      <div class="km-gallery-main">
        {#each routeImages as image}
          {#if galleryType === 'mixed'}
            {@const ratio = getImageAspectRatio(image)}
            <img 
              src={image.src} 
              alt={image.alt} 
              class="km-image-{ratio}"
              loading="lazy"
            />
          {:else}
            <img 
              src={image.src} 
              alt={image.alt} 
              class={galleryType === 'portrait' ? 'km-image-portrait' : galleryType === 'square' ? 'km-image-square' : galleryType === 'landscape' ? 'km-image-landscape' : 'km-image'}
              loading="lazy"
            />
          {/if}
        {/each}
      </div>
    {/if}

    <!-- Photo gallery -->
    {#if photoImages.length > 0}
      <div class={photoLayoutClass}>
        {#each photoImages as image}
          {#if galleryType === 'mixed'}
            {@const ratio = getImageAspectRatio(image)}
            <img 
              src={image.src} 
              alt={image.alt} 
              class="km-image-{ratio}"
              loading="lazy"
            />
          {:else}
            <img 
              src={image.src} 
              alt={image.alt} 
              class={galleryType === 'portrait' ? 'km-image-portrait' : galleryType === 'square' ? 'km-image-square' : galleryType === 'landscape' ? 'km-image-landscape' : 'km-image'}
              loading="lazy"
            />
          {/if}
        {/each}
      </div>
    {/if}
  </div>
{/if}
