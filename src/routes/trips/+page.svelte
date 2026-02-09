<script lang="ts">
  import PageHeader from '$lib/components/PageHeader.svelte';
  import AdventureCard from '$lib/components/AdventureCard.svelte';
  import type { AdventureData } from '$lib/types';

  const adventures: AdventureData[] = [
    {
      title: 'South Korea: Busan to Seoul',
      url: '/trips/korea-2025',
      dateRange: 'October 2025',
      subtitle: 'Epic 560km journey completed!',
      description: 'Alex and Michael successfully completed their 560km kick scooter journey from Busan to Seoul through South Korea, following the Nakdonggang, Saejae, Namhangang and Hangang bike path network over 11 incredible days.',
      stats: {
        distance: '560km',
        duration: '11 days',
        cities: '8+ cities'
      },
      status: 'complete'
    },
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
      description: 'Two friends, kick scooters, and the length of Japan. 40 days of rain, hail, convenience store meals, and the kindness of strangers.',
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
  <meta name="description" content="Kick scooter adventures across countries and cultures. Documenting slow travel from Japan to future expeditions." />
</svelte:head>

<!-- Adventures Overview -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <PageHeader 
      title="Adventures"
      description="Kick scooter journeys across countries and cultures. Each adventure documents the journey of slow travel, revealing hidden corners that speed cannot touch."
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
        <h3 class="text-xl font-light mb-4 text-km-primary">Beyond Korea 2025</h3>
        <p class="text-km-secondary max-w-2xl mx-auto">
          Taiwan expeditions, European routes, and other adventures are being considered for future years. 
          Each journey follows the same principle: move slowly, notice everything, document what actually happens.
        </p>
      </div>
    </div>

  </div>
</div>
