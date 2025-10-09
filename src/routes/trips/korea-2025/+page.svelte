<script>
  import TripOverview from '$lib/components/TripOverview.svelte';

  const trip = {
    title: 'Korea 2025',
    subtitle: 'Planned for October 2025',
    description: '560 kilometres across South Korea by kick scooter',
    stats: [
      { value: '~560km', label: 'Planned Distance' },
      { value: '~11', label: 'Estimated Days' },
      { value: '8+', label: 'Cities' },
      { value: 'Michael & Alex', label: 'Team Members' }
    ],
    leadText: 'In October 2025, Alex and Michael plan to kick scooter roughly 560 kilometres from Busan to Seoul. Approximately eleven days, eight major cities, averaging about 50 kilometres daily. The plan looks achievable on paper. Reality will undoubtedly prove more interesting. Follow our progress on <a href="https://www.instagram.com/heykickingmiles/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Instagram</a> and <a href="https://www.facebook.com/HeyKickingMiles/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Facebook</a>.',
    bodyText: '<div class="km-image-container mb-8 text-center"><img src="/images/korea-2025/overview/alex-michael-korea-2025-team-new-1x1.webp" alt="Alex and Michael, the team planning the Korea 2025 kick scooter adventure from Busan to Seoul" class="w-64 h-64 mx-auto rounded-lg shadow-lg object-cover" /></div>This adventure builds on lessons learned from Japan 2017 and 2023. Instead of discovering routes as we go, we plan to follow South Korea\'s purpose-built bike path network: the <a href="https://en.wikipedia.org/wiki/Nakdong_River" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Nakdonggang</a>, Saejae, <a href="https://en.wikipedia.org/wiki/Namhan_River" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Namhangang</a>, and <a href="https://en.wikipedia.org/wiki/Han_River_(Korea)" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Hangang</a> paths that connect the peninsula from coast to capital.<br><br><strong>The Route</strong><br><br><div class="km-image-container mb-6"><img src="/images/korea-2025/overview/korea-route-map.png" alt="Map showing the planned 560km kick scooter route from Busan to Seoul through South Korea, following the Nakdonggang, Saejae, Namhangang and Hangang bike path network" class="w-full h-auto rounded-lg shadow-lg" /></div>Starting from Busan\'s beaches, we expect to follow the <a href="https://en.wikipedia.org/wiki/Nakdong_River" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Nakdong River</a> inland for roughly 300 kilometres, watching the peninsula\'s geography shift from maritime to mountainous. The historic Saejae pass, an ancient trading route between regions, will likely challenge us physically while connecting us to centuries of Korean travellers who crossed these same mountains. The final stretch along the <a href="https://en.wikipedia.org/wiki/Namhan_River" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Nam Han</a> and <a href="https://en.wikipedia.org/wiki/Han_River_(Korea)" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Han Rivers</a> should lead directly into Seoul\'s heart, where modern Korea meets its traditional roots.<br><br>Unlike our Japanese adventures on public roads, these dedicated bike paths should offer safe passage through landscapes specifically designed for long-distance travel. Fifty kilometres per day should be manageable. Some days may stretch to 70, others compress to 35. Rest and weather will dictate reality over planning.<br><br><strong>Major Cities & Stops</strong><br><br>Over approximately 11 days, we expect to pass through these cities:<br><br>• <strong>Busan</strong> (Start) - Coastal energy and departure point<br>• <strong>Yangsan</strong> - First inland stop<br>• <strong>Daegu</strong> - Major metropolitan hub<br>• <strong>Gumi & Sangju</strong> - Traditional Korean countryside<br>• <strong>Mungyeong</strong> - Gateway to the mountain pass<br>• <strong>Chungju</strong> - Valley town and river confluence<br>• <strong>Yangpyeong</strong> - Final rural stop<br>• <strong>Seoul</strong> (Finish) - Urban arrival and destination<br><br><strong>Documentation</strong><br><br>We will document this journey here on the website, with daily journal entries capturing what actually happens versus what we expect. Photos, route details, and honest reflections on the reality of kick scooter travel in South Korea. Live updates and behind-the-scenes content will be shared on <a href="https://www.instagram.com/heykickingmiles/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Instagram</a> and <a href="https://www.facebook.com/HeyKickingMiles/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Facebook</a>.',
    days: [
      {
        url: '/trips/korea-2025/day-minus-5-pre-departure',
        title: 'Day -5: Pre-departure',
        date: 'October 9, 2025',
        meta: ['5 days until departure', 'Final preparations'],
        description: 'Five days before the journey begins. Final preparations, anticipation, and thoughts before our 560km kick scooter adventure from Busan to Seoul.'
      }
    ]
  };
</script>

<svelte:head>
  <title>Korea 2025 - 560km Busan to Seoul Adventure | Kicking Miles</title>
  <meta name="description" content="Following South Korea's bike path network from Busan to Seoul in October 2025. 560km over 11 days via Nakdonggang, Saejae, Namhangang and Hangang paths with Michael and Alex." />
  <meta property="og:title" content="Korea 2025 - 560km Busan to Seoul Adventure | Kicking Miles" />
  <meta property="og:description" content="Following South Korea's bike path network from Busan to Seoul in October 2025. 560km over 11 days via Nakdonggang, Saejae, Namhangang and Hangang paths with Michael and Alex." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://kickingmiles.com/trips/korea-2025/" />
  <meta property="og:image" content="https://kickingmiles.com/images/korea-2025/overview/korea-2025-hero.webp" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Korea 2025 - 560km Busan to Seoul Adventure | Kicking Miles" />
  <meta name="twitter:description" content="Following South Korea's bike path network from Busan to Seoul in October 2025. 560km over 11 days via Nakdonggang, Saejae, Namhangang and Hangang paths with Michael and Alex." />
  <meta name="twitter:image" content="https://kickingmiles.com/images/korea-2025/overview/korea-2025-hero.webp" />
  <link rel="canonical" href="https://kickingmiles.com/trips/korea-2025/" />
</svelte:head>

<TripOverview {trip} />