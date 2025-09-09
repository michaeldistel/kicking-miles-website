<script lang="ts">
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import InstagramEmbed from '$lib/components/InstagramEmbed.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: '6h 30m', label: 'Time' },
    { value: 'Oyama', label: 'Destination' },
    { value: 'First day', label: 'Challenge' },
    { value: 'Excited', label: 'Mood' },
    { value: '18°C', label: 'Temp' },
    { value: '57.2km', label: 'Distance' }
  ];

  const photos = [
    { src: '/images/japan-2023/day-01/day01-photo-01.webp', alt: 'Evening setup and preparation for the journey', orientation: 'landscape' as const },
    { src: '/images/japan-2023/day-01/day01-photo-02.webp', alt: 'Early morning departure from Tokyo', orientation: 'portrait' as const },
    { src: '/images/japan-2023/day-01/day01-photo-03.webp', alt: 'Morning light on Tokyo outskirts', orientation: 'portrait' as const },
    { src: '/images/japan-2023/day-01/day01-photo-04.webp', alt: 'Urban landscape giving way to suburbs', orientation: 'portrait' as const },
    { src: '/images/japan-2023/day-01/day01-photo-05.webp', alt: 'Kickboards ready for the day ahead' },
    { src: '/images/japan-2023/day-01/day01-photo-06.webp', alt: 'Midday progress through changing landscape', orientation: 'portrait' as const },
    { src: '/images/japan-2023/day-01/day01-photo-07.webp', alt: 'Rural roads and first autumn colours', orientation: 'portrait' as const },
    { src: '/images/japan-2023/day-01/day01-photo-08.webp', alt: 'Approaching the Nasu region', orientation: 'portrait' as const },
    { src: '/images/japan-2023/day-01/day01-photo-10.webp', alt: 'Daily fitness tracking data', orientation: 'portrait' as const }
  ];

  const weather = {
    title: 'Weather Report',
    description: '18°C, clear skies, perfect autumn day'
  };

  const title = 'Tokyo to Oyama';
  const date = '16 October';
  const description = 'Back on the road with <a href="https://www.instagram.com/alekseev_a_i/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Alex</a>, finding familiar rhythm through Tokyo suburbs to Oyama.';
</script>

<svelte:head>
  <title>Day 01 - Tokyo to Oyama | Japan 2023 | Kicking Miles</title>
  <meta name="description" content="{description}" />
  <meta property="og:title" content="Day 01 - Tokyo to Oyama | Japan 2023 | Kicking Miles" />
  <meta property="og:description" content="{description}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kickingmiles.com/trips/japan-2023/day-01-tokyo-to-oyama/" />
  <meta property="og:image" content="https://kickingmiles.com/images/japan-2023/day-01/day01-photo-01.webp" />
  <meta property="article:published_time" content="2023-10-16" />
  <meta property="article:author" content="Michael Distel" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Day 01 - Tokyo to Oyama | Japan 2023 | Kicking Miles" />
  <meta name="twitter:description" content="{description}" />
  <meta name="twitter:image" content="https://kickingmiles.com/images/japan-2023/day-01/day01-photo-01.webp" />
  <link rel="canonical" href="https://kickingmiles.com/trips/japan-2023/day-01-tokyo-to-oyama/" />
</svelte:head>

<!-- Day 01: Tokyo to Nasu -->
<div class="km-container">
  <div class="km-content-wrapper">

    <TripHeader 
      backUrl="/trips/japan-2023/"
      backText="Japan 2023 Daily Journal"
      dayNumber="DAY 01"
      date="16 OCTOBER 2023"
      {title}
      {description}
    />

    <div class="grid md:grid-cols-2 gap-8 mb-8 mt-12">
      <StatsBox {stats} />
      <WeatherBox {weather} />
    </div>

    <!-- Content sections -->
    <div class="km-prose-content space-y-8">

      <section>
        <h2 class="text-xl font-light mb-4 text-km-primary">Back on the Road</h2>
        <p class="km-body-text">
          We started from a small business hotel on the edge of Tokyo, packs strapped down and scooters ready. It was early, the streets still quiet, though the sun was already sharp against the buildings.
        </p>
        <p class="km-body-text">
          We dragged ourselves out of bed, excited and ready for the day ahead. It felt good to be back on the scooters again. Just free, moving across the countryside one kick at a time.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          {@html `It was nice starting the day with <a href="https://www.instagram.com/alekseev_a_i/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Alex</a>. His passion and excitement carried through everything. The way he spoke about the road ahead, the places we might pass, even the small details lifted the mood straight away.`}
        </p>
        <p class="km-body-text">
          The air was cooler than the day before, and the first kilometres slipped by easily. Suburban streets soon turned into open stretches of farmland. Back in rhythm, steady kicks, quiet roads, short pauses to drink or just look around.
        </p>
      </section>

      <ContentBox type="highlight">
        <p>{@html `We stopped often. A wall in the sun, a quick photo, or a longer break inside 7-Eleven where <a href="https://www.instagram.com/alekseev_a_i/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Alex</a> nearly drifted off over his snack.`}</p>
      </ContentBox>

      <section>
        <p class="km-body-text">
          Later we joined Route 4. Something very familiar for me. I had spent time in 2017 kicking along this road, and coming back felt like meeting an old friend I had not seen for years. The trucks roared past and the blue signs pointed towards Utsunomiya, but I felt strangely at home on that stretch.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          By the time we reached Oyama the kilometres had added up. Fifty-seven in total, six and a half hours moving, 2,349 calories burnt according to the watch.
        </p>
        <p class="km-body-text">
          Dinner was at Orion Gyoza near Oyama Station. A lively, bright spot, gyoza and beer filling the gap the numbers had left.
        </p>
      </section>

      <!-- Example Instagram embed - replace with actual Instagram post URL -->
      <!-- <InstagramEmbed 
        postUrl="https://www.instagram.com/p/YOUR_POST_ID/"
        caption="Kickboarding through Tokyo's outskirts"
        maxWidth="400px"
      /> -->

      <section>
        <p class="km-body-text">
          It felt good to complete the first day. A part of me felt relief that my body and soul had not forgotten the scooter, the feel of the road, and Japan itself. I have spent so much time here over the years, and finishing the day reminded me why. Japan is a place I truly love and miss.
        </p>
      </section>

      <div class="text-right mt-8 mb-8">
        <p class="text-sm text-km-subtle italic">— Michael Distel</p>
      </div>

      <ImageGallery photoImages={photos} galleryType="mixed" />

    </div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={1}
      totalDays={3}
      previousDay={{ url: "/trips/japan-2023", label: "Japan 2023" }}
      nextDay={{ url: "/trips/japan-2023/day-02-exploring-nasu", label: "Day 02" }}
    />

  </div>
</div>
