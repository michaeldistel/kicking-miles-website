<script lang="ts">
  import AdventureCard from '$lib/components/AdventureCard.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import type { AdventureData } from '$lib/types';

  const adventures: AdventureData[] = [
    {
      title: 'Japan: Fukuoka to Hakodate',
      url: '/trips/japan-2017',
      dateRange: 'March - May 2017',
      subtitle: 'The original adventure that started it all',
      description: 'Four friends, kickboards, and the length of Japan. Rain, hail, convenience store meals, and the kindness of strangers. The journey that proved long-distance kickboarding was possible.',
      stats: {
        distance: '1,800km',
        duration: '40 days',
        cities: '35 cities'
      },
      status: 'complete'
    },
    {
      title: 'South Korea: Seoul to Busan',
      dateRange: 'June 2025',
      subtitle: 'Exploring the Korean Peninsula on wheels',
      description: 'Following ancient trading routes and modern highways through the heart of South Korea. Mountains, cities, and the warmth of Korean hospitality await.',
      stats: {
        distance: '900km',
        duration: '20 days',
        cities: '15 cities'
      },
      status: 'planning'
    }
  ];
</script>

<!-- Section: Home -->
<!-- Section: Home -->
<div class="min-h-screen flex items-center justify-center py-16 px-4">
  <div class="container mx-auto max-w-3xl text-center">
    <!-- Logo -->
    <div class="mb-8">
      <div class="w-32 h-32 mx-auto mb-6 relative flex items-center justify-center">
        <img src="/kickingmiles-logo-200.webp" alt="Kicking Miles Logo" class="max-w-full max-h-full object-contain">
      </div>
    </div>
    
    <!-- Main content -->
    <div class="mb-12">
      <h1 class="km-page-title tracking-wider">
        Kicking Miles
      </h1>
      <div class="divider-km mx-auto mb-8"></div>
    </div>

    <!-- Adventures section -->
    <div id="adventures" class="mb-16">
      <PageHeader 
        title="Adventures"
        description="Kickboard journeys across countries and cultures. Each adventure a different story, same curious spirit."
      />

      <!-- Adventures list -->
      <div class="space-y-8">
        {#each adventures as adventure}
          <AdventureCard {adventure} />
        {/each}
      </div>
    </div>

    <!-- Introduction section -->
    <div class="mb-16">
      <PageHeader 
        title="About These Adventures"
      />
      
      <div class="text-left max-w-4xl mx-auto space-y-6 leading-relaxed text-km-primary">
        <p class="text-lg">
          This website tracks the adventures of a group of friends exploring different parts of the world on kickboards. Mainly to document where we have been and what we learned along the way.
        </p>
        
        <p class="text-lg">
          It started in 2017 with Japan. Four friends, kickboards, and 1,800 kilometres from Fukuoka to Tokyo. Each journey since follows the same approach: move slowly, notice everything, document what actually happens.
        </p>
      </div>
    </div>

    <!-- Bottom accent -->
    <div class="mt-16">
      <div class="divider-km-thick mx-auto"></div>
    </div>
  </div>
</div>
