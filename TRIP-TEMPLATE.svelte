<script>
  import TripOverview from '$lib/components/TripOverview.svelte';

  // Configure your trip details here
  const trip = {
    title: 'Trip Name',
    subtitle: 'Date Range',
    description: 'Route Description',
    stats: [
      { value: 'Distance', label: 'Total Distance' },
      { value: 'Number', label: 'Days' },
      { value: 'Number', label: 'Cities' },
      { value: 'Number', label: 'Kickboarders' }
    ],
    leadText: 'A compelling opening paragraph that captures the essence of this adventure.',
    bodyText: 'A second paragraph that provides more context about what makes this trip unique or meaningful.',
    days: [
      {
        url: '/trips/trip-name/day-01-location',
        title: 'Day 01: Title',
        date: 'Date',
        meta: ['Tag 1', 'Tag 2', 'Tag 3'],
        description: 'Brief description of what happens on this day.'
      }
      // Add more days as needed
    ]
  };
</script>

<svelte:head>
  <title>Trip Name | Kicking Miles</title>
  <meta name="description" content="Description for search engines and social media" />
  <meta property="og:title" content="Trip Name | Kicking Miles" />
  <meta property="og:description" content="Description for social media sharing" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.kickingmiles.com/trips/trip-name/" />
  <meta property="og:image" content="https://www.kickingmiles.com/images/trip-name/overview/hero.webp" />
  <meta property="article:published_time" content="YYYY-MM-DD" />
  <meta property="article:author" content="Michael Distel" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Trip Name | Kicking Miles" />
  <meta name="twitter:description" content="Description for Twitter" />
  <meta name="twitter:image" content="https://www.kickingmiles.com/images/trip-name/overview/hero.webp" />
  <link rel="canonical" href="https://www.kickingmiles.com/trips/trip-name/" />
</svelte:head>

<!-- Trip Overview -->
<TripOverview {trip} />
