<script lang="ts">
  import AdventureCard from '$lib/components/AdventureCard.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import type { AdventureData } from '$lib/types';

  const adventures: AdventureData[] = [
    {
      title: 'Japan: Tokyo to Nasu',
      url: '/trips/japan-2023',
      dateRange: 'October 2023',
      subtitle: 'A contemplative return to Japan',
      description: 'Autumn journey with <a href="https://www.instagram.com/alekseev_a_i/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Alex</a> exploring the serene mountain region of Nasu. Three days of mindful travel through changing seasons and shared discovery.',
      stats: {
        distance: '150km',
        duration: '3 days',
        cities: '2 cities'
      },
      status: 'complete'
    },
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

<svelte:head>
  <title>Kicking Miles - Kickboard Adventures Across Countries</title>
  <meta name="description" content="Follow our kickboard journeys across different countries and cultures. Each adventure documents slow travel, mindful exploration, and authentic cultural connections." />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Kicking Miles - Kickboard Adventures Across Countries" />
  <meta property="og:description" content="Follow our kickboard journeys across different countries and cultures. Each adventure documents slow travel, mindful exploration, and authentic cultural connections." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://kickingmiles.com/" />
  <meta property="og:image" content="https://kickingmiles.com/kickingmiles-logo-200.webp" />
  <meta property="og:site_name" content="Kicking Miles" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Kicking Miles - Kickboard Adventures Across Countries" />
  <meta name="twitter:description" content="Follow our kickboard journeys across different countries and cultures. Each adventure documents slow travel, mindful exploration, and authentic cultural connections." />
  <meta name="twitter:image" content="https://kickingmiles.com/kickingmiles-logo-200.webp" />
  
  <!-- Additional SEO -->
  <meta name="keywords" content="kickboard, travel, adventure, Japan, Korea, slow travel, exploration, cultural travel, scooter journey" />
  <meta name="author" content="Michael Distel" />
  <meta name="robots" content="index, follow" />
  
  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kicking Miles",
    "description": "Kickboard adventures across countries and cultures documenting slow travel and mindful exploration",
    "url": "https://kickingmiles.com",
    "author": {
      "@type": "Person",
      "name": "Michael Distel"
    },
    "mainEntity": {
      "@type": "TravelBlog",
      "name": "Kicking Miles Adventures",
      "description": "Travel blog documenting kickboard journeys across different countries"
    }
  }
  </script>
</svelte:head>

<!-- Section: Home -->
<div class="km-container-center">
  <div class="km-content-center">
    <!-- Logo -->
    <div class="mb-8">
      <div class="km-logo-container">
        <img src="/kickingmiles-logo-200.webp" alt="Kicking Miles Logo" class="km-logo-image">
      </div>
    </div>
    
    <!-- Main content -->
    <div class="mb-12">
      <h1 class="km-page-title">
        Kicking Miles
      </h1>
      <div class="divider-km km-divider-centered"></div>
    </div>

    <!-- Adventures section -->
    <div id="adventures" class="km-section-spacing">
      <!-- Adventures list -->
      <div class="km-adventure-list">
        {#each adventures as adventure}
          <AdventureCard {adventure} />
        {/each}
      </div>
    </div>

    <!-- Introduction section -->
    <div class="km-section-spacing">
      <PageHeader 
        title="About These Adventures"
      />
      
      <div class="km-content-left km-content-narrow km-body-text">
        <p class="km-lead-text">
          This website tracks the adventures of a group of friends exploring different parts of the world on kickboards. Mainly to document where we have been and what we learned along the way.
        </p>
        
        <p class="km-lead-text">
          It started in 2017 with Japan. Four friends, kickboards, and 1,800 kilometres from Fukuoka to Tokyo. Each journey since follows the same approach: move slowly, notice everything, document what actually happens.
        </p>
      </div>
    </div>

    <!-- Bottom accent -->
    <div class="km-divider-bottom">
      <div class="divider-km-thick km-divider-centered"></div>
    </div>
  </div>
</div>
