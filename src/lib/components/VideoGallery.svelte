<script>
  /** @type {Array<{src: string, caption?: string, poster?: string, width?: number, height?: number}>} */
  export let videos = [];
  export let title = "Videos";
</script>

<div class="km-video-gallery">
  {#if title}
    <h3 class="km-gallery-title text-lg font-light text-km-dark mb-4">{title}</h3>
  {/if}
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {#each videos as video, index}
      <div class="km-video-item">
        <video 
          class="w-full rounded-lg shadow-sm"
          controls 
          preload="metadata"
          poster={video.poster || ''}
          width={video.width || 640}
          height={video.height || 360}
        >
          <source src={video.src} type="video/mp4">
          <track kind="captions" src="" srclang="en" label="English" />
          <p class="text-sm text-km-dark mt-2">
            Your browser doesn't support HTML5 video. 
            <a href={video.src} class="text-km-primary hover:text-km-dark underline">Download the video</a>.
          </p>
        </video>
        {#if video.caption}
          <p class="text-sm text-km-dark mt-2 italic">{video.caption}</p>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .km-video-gallery {
    margin: 1rem 0;
  }
  
  .km-video-item video {
    border: 1px solid #e5e7eb;
  }
  
  .km-video-item video:hover {
    border-color: #7EB300;
    transition: border-color 0.2s ease;
  }
</style>