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
  export let galleryType: 'grid' | 'compact' | 'spacious' | 'portrait' | 'mixed' = 'grid';

  // Use CSS utility classes
  $: photoLayoutClass = galleryType === 'compact' 
    ? 'km-gallery-compact'
    : galleryType === 'spacious'
    ? 'km-gallery-spacious'
    : galleryType === 'portrait'
    ? 'km-gallery-portrait'
    : galleryType === 'mixed'
    ? 'km-gallery-mixed'
    : 'km-gallery-grid';

  // Function to determine if image is landscape based on orientation property or filename pattern fallback
  function isLandscapeImage(image: {src: string; alt: string; orientation?: 'landscape' | 'portrait'}): boolean {
    // First priority: use explicit orientation if provided
    if (image.orientation) {
      return image.orientation === 'landscape';
    }
    
    // Fallback: detect common landscape patterns in filename
    const filename = image.src.split('/').pop() || '';
    
    // Common landscape indicators (you can extend this as needed)
    const landscapePatterns = [
      /wide/i,
      /panorama/i,
      /landscape/i,
      // Add specific patterns for known landscape photos if needed
    ];
    
    return landscapePatterns.some(pattern => pattern.test(filename));
  }
</script>

{#if routeImages.length > 0 || photoImages.length > 0}
  <div class="mt-12">
    <h3 class="km-section-title">{title}</h3>
    
    <!-- Main route images -->
    {#if routeImages.length > 0}
      <div class="km-gallery-main">
        {#each routeImages as image}
          <img 
            src={image.src} 
            alt={image.alt} 
            class="km-image"
            loading="lazy"
          />
        {/each}
      </div>
    {/if}

    <!-- Photo gallery -->
    {#if photoImages.length > 0}
      <div class={photoLayoutClass}>
        {#each photoImages as image}
          {#if galleryType === 'mixed'}
            <img 
              src={image.src} 
              alt={image.alt} 
              class={isLandscapeImage(image) ? 'km-image-mixed-landscape' : 'km-image-mixed-portrait'}
              loading="lazy"
            />
          {:else}
            <img 
              src={image.src} 
              alt={image.alt} 
              class={galleryType === 'portrait' ? 'km-image-portrait' : 'km-image'}
              loading="lazy"
            />
          {/if}
        {/each}
      </div>
    {/if}
  </div>
{/if}
