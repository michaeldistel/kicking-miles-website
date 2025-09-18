<script>
  import TripOverview from '$lib/components/TripOverview.svelte';

  const trip = {
    title: 'Korea 2025',
    subtitle: 'Planned for October 2025',
    description: 'Busan to Seoul Adventure',
    stats: [
      { value: '~560km', label: 'Distance' },
      { value: '11', label: 'Days' },
      { value: '8+', label: 'Cities' },
      { value: 'Michael & Alex', label: 'Explorers' }
    ],
    leadText: 'The next adventure awaits. An ambitious journey planned from the coastal beauty of Busan to the bustling streets of Seoul, exploring South Korea\'s diverse landscapes and rich culture by kick scooter with <a href="https://www.instagram.com/alekseev_a_i/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Alex</a>.',
    bodyText: 'This upcoming adventure represents a new chapter in the Kicking Miles journey. From the scenic port city of Busan through Korea\'s dramatic countryside to the modern metropolis of Seoul. An 11-day journey covering 560 kilometres, following ancient trading routes and modern highways through the heart of South Korea via the renowned Korean bike path network. The route will take us along the Nakdonggang, Saejae, Namhangang, and Hangang paths - purpose-built cycling infrastructure perfect for kick scooter adventures.',
    days: [
      // Days will be added as the trip is planned and executed
    ]
  };
</script>

<svelte:head>
  <title>Korea 2025 - Busan to Seoul Adventure | Kicking Miles</title>
  <meta name="description" content="An upcoming kick scooter journey across South Korea from Busan to Seoul in October 2025. Follow the planning and preparation for this exciting 10-day, 500km adventure with Michael and Alex." />
  <meta property="og:title" content="Korea 2025 - Busan to Seoul Adventure | Kicking Miles" />
  <meta property="og:description" content="An upcoming kick scooter journey across South Korea from Busan to Seoul in October 2025. Follow the planning and preparation for this exciting 10-day, 500km adventure with Michael and Alex." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://kickingmiles.com/trips/korea-2025/" />
  <meta property="og:image" content="https://kickingmiles.com/images/korea-2025/overview/korea-2025-hero.webp" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Korea 2025 - Busan to Seoul Adventure | Kicking Miles" />
  <meta name="twitter:description" content="An upcoming kick scooter journey across South Korea from Busan to Seoul in October 2025. Follow the planning and preparation for this exciting 10-day, 500km adventure with Michael and Alex." />
  <meta name="twitter:image" content="https://kickingmiles.com/images/korea-2025/overview/korea-2025-hero.webp" />
  <link rel="canonical" href="https://kickingmiles.com/trips/korea-2025/" />
</svelte:head>

<TripOverview {trip} />