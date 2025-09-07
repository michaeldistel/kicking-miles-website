<script lang="ts">
  import type { TripCardData } from '$lib/types';

  export let day: TripCardData;
</script>

<!-- Day Card -->
<article class="km-day-card">
  <div class="km-day-card-header">
    <div>
      <h3 class="text-xl font-light mb-2 text-km-primary">
        <a href={day.url} class="hover:underline">
          {day.title}
        </a>
      </h3>
      <div class="km-date-label">
        {day.date}
      </div>
    </div>
    <div class="km-day-card-meta">
      {#each day.meta as item, index}
        <span>{item}</span>
        {#if index < day.meta.length - 1}
          <span>•</span>
        {/if}
      {/each}
    </div>
  </div>
  <p class="km-body-text mb-4">
    {day.description}
  </p>
  <a href={day.url} class="km-link">
    Read {day.title.split(':')[0]} →
  </a>
</article>
