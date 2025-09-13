<script lang="ts">
  import { onMount } from 'svelte';
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import 'photoswipe/style.css';

  export let images: Array<{
    src: string;
    alt: string;
    width?: number;
    height?: number;
    ratio?: string;
  }> = [];
  export let title: string = "Photo Gallery";
  export let galleryId: string = 'gallery';

  let galleryElement: HTMLElement;
  let lightbox: PhotoSwipeLightbox;

  onMount(() => {
    if (images.length === 0) return;

    // Initialize PhotoSwipe lightbox
    lightbox = new PhotoSwipeLightbox({
      gallery: `#${galleryId}`,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      // Customize options
      padding: { top: 20, bottom: 40, left: 100, right: 100 },
      wheelToZoom: true,
      pinchToClose: false,
      closeOnVerticalDrag: true,
    });

    lightbox.init();

    return () => {
      if (lightbox) {
        lightbox.destroy();
      }
    };
  });

  // Function to get image dimensions if not provided
  function getImageDimensions(src: string): Promise<{width: number, height: number}> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
      img.onerror = () => resolve({ width: 800, height: 600 }); // fallback
      img.src = src;
    });
  }
</script>

{#if images.length > 0}
  <div class="mt-12">
    <h3 class="km-section-title">{title}</h3>
    
    <div class="km-photoswipe-gallery" id={galleryId} bind:this={galleryElement}>
      {#each images as image, index}
        <a 
          href={image.src}
          data-pswp-width={image.width || 800}
          data-pswp-height={image.height || 600}
          target="_blank"
          rel="noopener noreferrer"
          class="km-gallery-item"
        >
          <img 
            src={image.src}
            alt={image.alt}
            class="km-gallery-thumbnail"
            data-ratio={image.ratio || "4x3"}
            loading="lazy"
          />
        </a>
      {/each}
    </div>
  </div>
{/if}

<style>
  .km-photoswipe-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
    align-items: start;
    justify-items: center;
  }

  .km-gallery-item {
    display: block;
    overflow: hidden;
    border-radius: 0.5rem;
    transition: transform 0.2s ease;
    width: 100%;
    max-width: 350px;
  }

  .km-gallery-item:hover {
    transform: scale(1.02);
  }

  .km-gallery-thumbnail {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: #f8f9fa;
    display: block;
  }

  /* Specific handling for different aspect ratios */
  .km-gallery-thumbnail[data-ratio="3x4"] {
    aspect-ratio: 3/4;
    object-fit: cover;
  }

  .km-gallery-thumbnail[data-ratio="4x3"] {
    aspect-ratio: 4/3;
    object-fit: cover;
  }

  .km-gallery-thumbnail[data-ratio="16x9"] {
    aspect-ratio: 16/9;
    object-fit: cover;
  }

  .km-gallery-thumbnail[data-ratio="1x1"] {
    aspect-ratio: 1/1;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    .km-photoswipe-gallery {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  @media (min-width: 1024px) {
    .km-photoswipe-gallery {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }
</style>
