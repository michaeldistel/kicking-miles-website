<script lang="ts">
  import type { AdventureData, AdventureStatus } from '$lib/types';

  export let adventure: AdventureData;

  const statusLabels: Record<AdventureStatus, string> = {
    'complete': 'Complete',
    'planning': 'Planning',
    'upcoming': 'Upcoming',
    'coming-soon': 'Coming Soon'
  };

  const statusClasses: Record<AdventureStatus, string> = {
    'complete': 'km-badge-complete',
    'planning': 'km-badge-planning',
    'upcoming': 'km-badge-upcoming',
    'coming-soon': 'km-badge-coming-soon'
  };

  $: badgeClass = statusClasses[adventure.status];
  $: statusLabel = statusLabels[adventure.status];
  $: articleClass = adventure.isDisabled ? 'km-article-card-disabled' : 'km-article-card';
  $: linkClass = adventure.isDisabled ? 'km-link-disabled' : 'km-link';
  $: isClickable = adventure.url && !adventure.isDisabled;
</script>

<article class={articleClass}>
  <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
    <div>
      <div class="km-date-label mb-2">
        {adventure.dateRange}
      </div>
      <h3 class="text-3xl font-light mb-3 text-km-primary">
        {#if isClickable}
          <a href={adventure.url} class="hover:underline">
            {adventure.title}
          </a>
        {:else}
          {adventure.title}
        {/if}
      </h3>
      <div class="km-subtitle">
        {adventure.subtitle}
      </div>
    </div>
    <div class="mt-6 lg:mt-0 flex flex-col items-start lg:items-end space-y-2">
      <div class="flex space-x-6 text-sm text-km-secondary">
        <span>{adventure.stats.distance}</span>
        <span>•</span>
        <span>{adventure.stats.duration}</span>
        <span>•</span>
        <span>{adventure.stats.cities}</span>
      </div>
      <div class={badgeClass}>
        {statusLabel}
      </div>
    </div>
  </div>
  <p class="km-body-text mb-6">
    {adventure.description}
  </p>
  {#if isClickable}
    <a href={adventure.url} class={linkClass}>
      Read the full journey →
    </a>
  {:else}
    <div class="text-km-secondary">
      Details coming soon →
    </div>
  {/if}
</article>
