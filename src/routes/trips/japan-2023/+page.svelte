<script>
  import TripOverview from '$lib/components/TripOverview.svelte';

  const trip = {
    title: 'Japan 2023',
    subtitle: '16 - 18 October 2023',
    description: 'Tokyo to Nasu Tochigi',
    stats: [
      { value: '~150km', label: 'Total Distance' },
      { value: '3', label: 'Days' },
      { value: '2', label: 'Cities' },
      { value: 'Michael & Alex', label: 'Team' }
    ],
    leadText: 'A shorter but meaningful return to Japan. Three days of exploration with <a href="https://www.instagram.com/alekseev_a_i/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Alex</a> from the urban energy of Tokyo to the autumn serenity of Nasu Tochigi.',
    bodyText: 'Six years after the epic 2017 journey, this trip represents a different kind of adventure - intimate, focused, and perfectly timed for autumn\'s most spectacular display. Written by <a href="https://www.instagram.com/michaeldistel/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Michael</a>, documenting our shared adventure with <a href="https://www.instagram.com/alekseev_a_i/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Alex</a>.',
    days: [
      {
        url: '/trips/japan-2023/day-01-tokyo-to-nasu',
        title: 'Day 01: Back on the Road',
        date: '16 October 2023',
        meta: ['Urban escape', 'Autumn colours', 'Two friends'],
        description: 'My first kickboard adventure with <a href="https://www.instagram.com/alekseev_a_i/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Alex</a> as we find our rhythm through Tokyo suburbs to Oyama. Six years since my last Japanese adventure, muscle memory slowly returns. The urban sprawl gives way to quieter roads as autumn colours begin to show. A gentle reintroduction to the meditative pace of kickboard travel, now shared with a friend.'
      },
      {
        url: '/trips/japan-2023/day-02-exploring-nasu',
        title: 'Day 02: The Grind',
        date: '17 October 2023',
        meta: ['Mountain views', 'Hot springs', 'Local culture'],
        description: 'Day two was not about freshness or excitement for me. It was about grind. The longest day of our journey tests my endurance over enthusiasm. Hours stretch ahead with only my determination for company. This is where my real journey begins - in the quiet spaces between destinations.'
      },
      {
        url: '/trips/japan-2023/day-03-nasu-reflections',
        title: 'Day 03: Climbing for Love',
        date: '18 October 2023',
        meta: ['Final day', 'Reflections', 'Journey complete'],
        description: 'My last day. Short distance but climbing into the mountains for Gordon\'s wedding. Purpose drives my final push through autumn landscapes. A journey that began with my wanderlust ends with celebration. Sometimes the best adventures lead us exactly where we need to be.'
      }
    ]
  };
</script>

<svelte:head>
  <title>Japan 2023 - Tokyo to Nasu Adventure | Kicking Miles</title>
  <meta name="description" content="A 3-day solo kickboard journey from Tokyo to Nasu Tochigi in autumn 2023. Exploring Japan's natural beauty and seasonal colours." />
  <meta property="og:title" content="Japan 2023 - Tokyo to Nasu Adventure | Kicking Miles" />
  <meta property="og:description" content="A 3-day solo kickboard journey from Tokyo to Nasu Tochigi in autumn 2023. Exploring Japan's natural beauty and seasonal colours." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://kickingmiles.com/trips/japan-2023/" />
  <meta property="og:image" content="https://kickingmiles.com/images/japan-2023/overview/japan-2023-hero.webp" />
  <meta property="article:published_time" content="2023-10-16" />
  <meta property="article:author" content="Michael Distel" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Japan 2023 - Tokyo to Nasu Adventure | Kicking Miles" />
  <meta name="twitter:description" content="A 3-day solo kickboard journey from Tokyo to Nasu Tochigi in autumn 2023. Exploring Japan's natural beauty and seasonal colours." />
  <meta name="twitter:image" content="https://kickingmiles.com/images/japan-2023/overview/japan-2023-hero.webp" />
  <link rel="canonical" href="https://kickingmiles.com/trips/japan-2023/" />
</svelte:head>

<!-- Japan 2023 Trip Overview -->
<TripOverview {trip} />
