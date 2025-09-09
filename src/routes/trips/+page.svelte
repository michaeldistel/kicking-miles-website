<script lang="ts">
  import PageHeader from '$lib/components/PageHeader.svelte';
  import AdventureCard from '$lib/components/AdventureCard.svelte';
  import type { AdventureData } from '$lib/types';

  const adventures: AdventureData[] = [
    {
      title: 'Japan: Tokyo to Nasu',
      url: '/trips/japan-2023',
      dateRange: 'October 2023',
      subtitle: 'A contemplative return to Japan',
      description: 'Autumn journey with Alex exploring the serene mountain region of Nasu. Three days of mindful travel through changing seasons and shared discovery.',
      stats: {
        distance: '150km',
        duration: '3 days',
        cities: '2 cities'
      },
      status: 'complete'
    },
    {
      title: 'Japan: Fukuoka to Tokyo',
      url: '/trips/japan-2017',
      dateRange: 'March - May 2017',
      subtitle: 'The original adventure that started it all',
      description: 'Two friends, kickboards, and the length of Japan. 40 days of rain, hail, convenience store meals, and the kindness of strangers.',
      stats: {
        distance: '1,800km',
        duration: '40 days',
        cities: '35 cities'
      },
      status: 'complete'
    }
  ];
</script>

<svelte:head>
  <title>Adventures - Kicking Miles</title>
  <meta name="description" content="Kickboard adventures across countries and cultures. Documenting slow travel from Japan to future expeditions." />
</svelte:head>

<!-- Adventures Overview -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <PageHeader 
      title="Adventures"
      description="Kickboard journeys across countries and cultures. Each adventure documents the journey of slow travel, revealing hidden corners that speed cannot touch."
    />

    <!-- Adventures list -->
    <div class="space-y-8">
      {#each adventures as adventure}
        <AdventureCard {adventure} />
      {/each}
    </div>

    <!-- Future adventures teaser -->
    <div class="mt-16 text-center">
      <div class="p-8 rounded-lg border border-km bg-km-subtle">
        <h3 class="text-xl font-light mb-4 text-km-primary">More Adventures Coming</h3>
        <p class="text-km-secondary max-w-2xl mx-auto">
          Korea 2025, Taiwan expeditions, and European routes are being planned. 
          Each journey follows the same principle: move slowly, notice everything, document what actually happens.
        </p>
      </div>
    </div>

  </div>
</div>
