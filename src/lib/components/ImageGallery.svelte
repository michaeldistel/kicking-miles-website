<script lang="ts">
  export let title: string = "Journey Photos";
  export let routeImages: Array<{
    src: string;
    alt: string;
  }> = [];
  export let photoImages: Array<{
    src: string;
    alt: string;
  }> = [];
  export let galleryType: 'grid' | 'compact' | 'spacious' = 'grid';

  // Use CSS utility classes
  $: photoLayoutClass = galleryType === 'compact' 
    ? 'km-gallery-compact'
    : galleryType === 'spacious'
    ? 'km-gallery-spacious'
    : 'km-gallery-grid';
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
          <img 
            src={image.src} 
            alt={image.alt} 
            class="km-image"
            loading="lazy"
          />
        {/each}
      </div>
    {/if}
  </div>
{/if}
