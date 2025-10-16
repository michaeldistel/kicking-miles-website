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
    bodyText: '<div class="km-image-container mb-8 text-center"><img src="/images/korea-2025/overview/alex-michael-korea-2025-team-new-1x1.webp" alt="Alex and Michael, the team planning the Korea 2025 kick scooter adventure from Busan to Seoul" class="w-64 h-64 mx-auto rounded-lg shadow-lg object-cover" /></div>This adventure builds on lessons learned from Japan 2017 and 2023. Instead of discovering routes as we go, we plan to follow South Korea\'s purpose-built bike path network: the <a href="https://en.wikipedia.org/wiki/Nakdong_River" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Nakdonggang</a>, Saejae, <a href="https://en.wikipedia.org/wiki/Namhan_River" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Namhangang</a>, and <a href="https://en.wikipedia.org/wiki/Han_River_(Korea)" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Hangang</a> paths that connect the peninsula from coast to capital.',
    bodyTextPart2: '<strong>The Route</strong><br><br><div class="km-image-container mb-6"><img src="/images/korea-2025/overview/korea-route-map.webp" alt="Map showing the planned 560km kick scooter route from Busan to Seoul through South Korea, following the Nakdonggang, Saejae, Namhangang and Hangang bike path network" class="w-full h-auto rounded-lg shadow-lg" /></div>Starting from Busan\'s beaches, we expect to follow the <a href="https://en.wikipedia.org/wiki/Nakdong_River" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Nakdong River</a> inland for roughly 300 kilometres, watching the peninsula\'s geography shift from maritime to mountainous. The historic Saejae pass, an ancient trading route between regions, will likely challenge us physically while connecting us to centuries of Korean travellers who crossed these same mountains. The final stretch along the <a href="https://en.wikipedia.org/wiki/Namhan_River" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Nam Han</a> and <a href="https://en.wikipedia.org/wiki/Han_River_(Korea)" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Han Rivers</a> should lead directly into Seoul\'s heart, where modern Korea meets its traditional roots.<br><br>Unlike our Japanese adventures on public roads, these dedicated bike paths should offer safe passage through landscapes specifically designed for long-distance travel. Fifty kilometres per day should be manageable. Some days may stretch to 70, others compress to 35. Rest and weather will dictate reality over planning.<br><br><strong>Major Cities & Stops</strong><br><br>Over approximately 11 days, we expect to pass through these cities:<br><br>• <strong>Busan</strong> (Start) - Coastal energy and departure point<br>• <strong>Yangsan</strong> - First inland stop<br>• <strong>Daegu</strong> - Major metropolitan hub<br>• <strong>Gumi & Sangju</strong> - Traditional Korean countryside<br>• <strong>Mungyeong</strong> - Gateway to the mountain pass<br>• <strong>Chungju</strong> - Valley town and river confluence<br>• <strong>Yangpyeong</strong> - Final rural stop<br>• <strong>Seoul</strong> (Finish) - Urban arrival and destination<br><br><strong>Music for the Journey</strong><br><br>We have created a <a href="https://open.spotify.com/playlist/2vWLyfu8VVjaAsme0nkZKV?si=u7Gv6JgmSgq3gSSHbTW7Hw" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Korea 2025 Spotify playlist</a> to keep us motivated on the road. Music always makes the kilometres feel shorter and helps capture the rhythm of long-distance travel.<br><br><strong>Documentation</strong><br><br>We will document this journey here on the website, with daily journal entries capturing what actually happens versus what we expect. Photos, route details, and honest reflections on the reality of kick scooter travel in South Korea. Live updates and behind-the-scenes content will be shared on <a href="https://www.instagram.com/heykickingmiles/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Instagram</a> and <a href="https://www.facebook.com/HeyKickingMiles/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Facebook</a>.',
    days: [
      {
        url: '/trips/korea-2025/day-03-life-death-recognition',
        title: 'Day 3: Life, Death, and Recognition',
        date: 'October 16, 2025',
        meta: ['65km scooted', '8.5 hours', 'Highway shortcuts'],
        description: 'Alex and Michael take highway shortcuts to beat rain delays, receive unexpected kindness from strangers, and get recognized by locals on their Korean adventure.'
      },
      {
        url: '/trips/korea-2025/day-02-old-vs-young',
        title: 'Day 2: Old vs Young',
        date: 'October 15, 2025',
        meta: ['67km scooted', '7.5 hours', 'Clear blue skies'],
        description: 'Michael reflects on age catching up as they cover 67km to make up lost distance. Clear skies, aging equipment, and the contrast between youth and experience.'
      },
      {
        url: '/trips/korea-2025/day-01-starting-off-with-rain',
        title: 'Day 1: Starting Off with Rain',
        date: 'October 14, 2025',
        meta: ['~40km scooted', 'Nakdong River path', 'Heavy rain'],
        description: 'Day 1 of the Korea journey begins at sunrise with grey skies and rain. Following the Nakdong River path, meeting kind locals, and finding shelter from the weather.'
      },
      {
        url: '/trips/korea-2025/day-minus-1-arrival-seoul-busan',
        title: 'Day -1: Arrival in Seoul and journey to Busan',
        date: 'October 13, 2025',
        meta: ['30km scooted', '4 hours total', 'First day in Korea'],
        description: 'Landing in Seoul, catching the KTX to Busan, first scoot in Korea covering 30km including a helpful encounter with locals and discovering a bare-feet walking park.'
      },
      {
        url: '/trips/korea-2025/day-minus-2-final-hours',
        title: 'Day -2: Final hours',
        date: 'October 12, 2025',
        meta: ['Flight departure day', 'Final preparations'],
        description: 'A few hours before departure to Korea. Final packing complete, scooters wrapped and ready. The story behind Tresha\'s name on the scooter.'
      },
      {
        url: '/trips/korea-2025/day-minus-4-last-minute-prep',
        title: 'Day -4: Grateful for the support',
        date: 'October 10, 2025',
        meta: ['1 day until departure', 'Flag signing thanks'],
        description: 'One day before flying to Korea. Thanks to everyone who signed our flags and all the last minute preparations for the journey.'
      },
      {
        url: '/trips/korea-2025/day-minus-5-pre-departure',
        title: 'Day -5: Flags are done, ready to go',
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
  <meta property="og:image" content="https://kickingmiles.com/images/korea-2025/overview/alex-michael-korea-2025-team-new-1x1.webp" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Korea 2025 - 560km Busan to Seoul Adventure | Kicking Miles" />
  <meta name="twitter:description" content="Following South Korea's bike path network from Busan to Seoul in October 2025. 560km over 11 days via Nakdonggang, Saejae, Namhangang and Hangang paths with Michael and Alex." />
  <meta name="twitter:image" content="https://kickingmiles.com/images/korea-2025/overview/alex-michael-korea-2025-team-new-1x1.webp" />
  <link rel="canonical" href="https://kickingmiles.com/trips/korea-2025/" />
</svelte:head>

<TripOverview {trip} />