<script lang="ts">
  import AdventureCard from '$lib/components/AdventureCard.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
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
      title: 'Japan: Fukuoka to Hakodate',
      url: '/trips/japan-2017',
      dateRange: 'March - May 2017',
      subtitle: 'The original adventure that started it all',
      description: 'Four friends, kick scooters, and the length of Japan. Rain, hail, convenience store meals, and the kindness of strangers. The journey that proved long-distance kick scooter travel was possible.',
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
	<title>Kick Scooter Adventures | Kicking Miles</title>
	<meta name="description" content="Join kick scooter adventures across Japan and beyond. Travel stories, route maps, and daily journals from unique transportation experiences." />
	<meta name="keywords" content="kick scooter, travel, Japan, adventure, route maps, travel journal, transportation, scooter travel" />
	<link rel="canonical" href="https://kickingmiles.com" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://kickingmiles.com" />
	<meta property="og:title" content="Kick Scooter Adventures | Kicking Miles" />
	<meta property="og:description" content="Join kick scooter adventures across Japan and beyond. Travel stories, route maps, and daily journals from unique transportation experiences." />
	<meta property="og:image" content="https://kickingmiles.com/images/homepage-hero-team-kick-scooters-16x9.webp" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://kickingmiles.com" />
	<meta property="twitter:title" content="Kick Scooter Adventures | Kicking Miles" />
	<meta property="twitter:description" content="Join kick scooter adventures across Japan and beyond. Travel stories, route maps, and daily journals from unique transportation experiences." />
	<meta property="twitter:image" content="https://kickingmiles.com/images/homepage-hero-team-kick-scooters-16x9.webp" />

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Kicking Miles",
  "alternateName": "Kick Scooter Adventures",
  "url": "https://kickingmiles.com",
  "description": "A personal travel website documenting kick scooter adventures across different countries, featuring daily journals, route maps, and travel insights.",
  "author": {
    "@type": "Person",
    "name": "Michael Distel",
    "url": "https://kickingmiles.com"
  },
  "@graph": [
    {
      "@type": "TravelBlog",
      "name": "Kicking Miles",
      "description": "Personal travel blog featuring kick scooter adventures across Japan and Asia with detailed route maps and daily travel journals.",
      "url": "https://kickingmiles.com",
      "author": {
        "@type": "Person",
        "name": "Michael Distel"
      }
    }
  ]
}
</script>`}
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

    <!-- Hero Image -->
    <div class="mb-12">
      <img 
        src="/images/homepage-hero-team-kick-scooters-16x9.webp" 
        alt="Team of four kick scooter adventurers posing with their loaded kick scooters at a traditional Japanese gate structure, ready for their cross-country journey"
        class="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
      />
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
          This website tracks the adventures of a group of friends exploring different parts of the world on kick scooters. Mainly to document where we have been and what we learned along the way.
        </p>
        
        <p class="km-lead-text">
          It started in 2017 with Japan. Four friends, kick scooters, and 1,800 kilometres from Fukuoka to Tokyo. Each journey since follows the same approach: move slowly, notice everything, document what actually happens.
        </p>

        <!-- What is a Kick Scooter -->
        <div class="p-6 rounded-lg border border-km bg-km-subtle mt-8">
          <h3 class="text-lg font-medium mb-3 text-km-primary">What's a Kick Scooter?</h3>
          
          <!-- Kick Scooters Image -->
          <div class="mb-4 text-center">
            <img 
              src="/images/kick-scooters-explanation.jpg" 
              alt="Four kick scooters with travel gear including panniers, dry bags, and camping equipment, demonstrating how kick scooters are used for multi-day travel adventures"
              class="w-full max-w-md mx-auto rounded-lg"
            />
          </div>
          
          <p class="text-km-secondary text-sm leading-relaxed mb-4">
            A kick scooter (also known as a kickboard) is a human-powered vehicle with a handlebar, deck, and wheels. You propel it by pushing off the ground with one foot while the other stays on the deck. Think of it as a cross between a skateboard and a bicycle. Perfect for covering long distances at a walking pace while carrying gear for multi-day journeys.
          </p>
          
          <div class="text-xs text-km-light space-y-1">
            <p><strong>In Japanese:</strong> キックボード (kikkubōdo)</p>
            <p><strong>In Korean:</strong> 킥보드 (kikbodeu)</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Social Media Links -->
    <div class="mb-8">
      <div class="text-center text-sm text-km-secondary space-y-2">
        <p>Follow our adventures and get updates on social media:</p>
        <p>
          <a href="https://www.instagram.com/heykickingmiles/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Instagram</a>
          •
          <a href="https://www.facebook.com/HeyKickingMiles/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Facebook</a>
        </p>
      </div>
    </div>

    <!-- Bottom accent -->
    <div class="km-divider-bottom">
      <div class="divider-km-thick km-divider-centered"></div>
    </div>
  </div>
</div>
