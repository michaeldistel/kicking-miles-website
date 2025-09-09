<script lang="ts">
  export let backUrl: string;
  export let backText: string;
  export let dayNumber: string | null = null;
  export let date: string | null = null;
  export let title: string;
  export let subtitle: string | null = null;
  export let description: string | null = null;
  export let progress: string | null = null;
</script>

<!-- Trip/Day Header -->
<div class="km-header-section">
  <div class="mb-4">
    <a href={backUrl} class="km-breadcrumb">
      ← {backText}
    </a>
  </div>
  
  {#if dayNumber && date}
    <div class="mb-4">
      <span class="km-date-label">
        {dayNumber} • {date}
      </span>
    </div>
  {/if}
  
  <h1 class="km-page-title">
    {title}
  </h1>
  
  <div class="divider-km mx-auto mb-6"></div>
  
  <div class="space-y-2 text-km-primary">
    {#if progress}
      <p class="text-lg">{progress}</p>
    {/if}
    {#if subtitle}
      <p class="km-subtitle">{subtitle}</p>
    {/if}
    {#if description}
      <div class="text-sm text-km-secondary">{@html description}</div>
    {/if}
  </div>
</div>
