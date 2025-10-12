<script lang="ts">
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import TripCard from '$lib/components/TripCard.svelte';

  // Props for trip configuration
  export let trip: {
    title: string;
    subtitle: string;
    description: string;
    stats: Array<{ value: string; label: string }>;
    leadText: string;
    bodyText: string;
    bodyTextPart2?: string;
    routeImage?: string;
    routeImageAlt?: string;
    days: Array<{
      url: string;
      title: string;
      date: string;
      meta: string[];
      description: string;
    }>;
  };

  // Default back navigation
  export let backUrl = "/";
  export let backText = "Adventures";
</script>

<!-- Trip Overview Layout -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      {backUrl}
      {backText}
      title={trip.title}
      subtitle={trip.subtitle}
      description={trip.description}
    />

    <div class="mb-12 mt-12">
      <StatsBox stats={trip.stats} columns={2} size="large" />
    </div>

    <!-- Adventure intro -->
    <div class="mt-12 mb-12 km-prose-content">
      <p class="km-lead-text mb-6">
        {@html trip.leadText}
      </p>
      <p class="km-body-text mb-6">
        {@html trip.bodyText}
      </p>
    </div>

    <!-- Daily posts list -->
    <div class="space-y-6 mb-12">
      <div class="mb-8">
        <h2 class="km-subsection-title">Daily Journal</h2>
        <div class="divider-km-wide"></div>
      </div>
      
      {#each trip.days as day}
        <TripCard {day} />
      {/each}

    </div>

    <!-- Adventure content part 2 -->
    {#if trip.bodyTextPart2}
      <div class="mb-12 km-prose-content">
        <p class="km-body-text mb-6">
          {@html trip.bodyTextPart2}
        </p>
      </div>
    {/if}

    <!-- Route Map -->
    {#if trip.routeImage}
      <div class="mb-12">
        <h2 class="km-subsection-title mb-6">Planned Route</h2>
        <div class="km-image-container">
          <img 
            src={trip.routeImage} 
            alt={trip.routeImageAlt || "Route map"} 
            class="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    {/if}

  </div>
</div>
