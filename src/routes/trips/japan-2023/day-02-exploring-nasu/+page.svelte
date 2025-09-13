<script lang="ts">
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import InstagramEmbed from '$lib/components/InstagramEmbed.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

  const stats = [
    { value: '8h 32m', label: 'Time' },
    { value: 'Yaita', label: 'Destination' },
    { value: 'Longest day', label: 'Challenge' },
    { value: 'Endurance', label: 'Mood' },
    { value: '16°C', label: 'Temp' },
    { value: '64.0km', label: 'Distance' }
  ];

  const photos = [
    { src: '/images/japan-2023/day-02/day02-photo-01-3x4.webp', alt: 'Morning exploration of Nasu region' },
    { src: '/images/japan-2023/day-02/day02-photo-02-3x4.webp', alt: 'Midday mountain scenery' },
    { src: '/images/japan-2023/day-02/day02-photo-03-4x3.webp', alt: 'Afternoon discoveries' },
    { src: '/images/japan-2023/day-02/day02-photo-04-3x4.webp', alt: 'Late afternoon mountain light' },
    { src: '/images/japan-2023/day-02/day02-photo-05-3x4.webp', alt: 'Day 2 activity tracking' }
  ];

  $: photosForPhotoSwipe = prepareImagesForPhotoSwipe(photos);

  const title = 'Oyama to Yaita';
  const date = '17 October';
  const description = 'Day two was not about freshness or excitement. It was about grind.';
</script>

<svelte:head>
  <title>Day 02 - Exploring Nasu | Japan 2023 | Kicking Miles</title>
  <meta name="description" content="{description}" />
  <meta property="og:title" content="Day 02 - Exploring Nasu | Japan 2023 | Kicking Miles" />
  <meta property="og:description" content="{description}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kickingmiles.com/trips/japan-2023/day-02-exploring-nasu/" />
  <meta property="og:image" content="https://kickingmiles.com/images/japan-2023/day-02/day02-photo-01.webp" />
  <meta property="article:published_time" content="2023-10-17" />
  <meta property="article:author" content="Michael Distel" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Day 02 - Exploring Nasu | Japan 2023 | Kicking Miles" />
  <meta name="twitter:description" content="{description}" />
  <meta name="twitter:image" content="https://kickingmiles.com/images/japan-2023/day-02/day02-photo-01.webp" />
  <link rel="canonical" href="https://kickingmiles.com/trips/japan-2023/day-02-exploring-nasu/" />
</svelte:head>

<!-- Day 02: Exploring Nasu -->
<div class="km-container">
  <div class="km-content-wrapper">

    <TripHeader 
      backUrl="/trips/japan-2023/"
      backText="Japan 2023 Daily Journal"
      dayNumber="DAY 02"
      date="17 OCTOBER 2023"
      {title}
      {description}
    />

    <div class="mb-8 mt-12">
      <StatsBox {stats} fullWidth={true} />
    </div>

    <!-- Content sections -->
    <div class="km-prose-content space-y-8">

      <section>
        <p class="km-body-text">
          Day two was not about freshness or excitement. It was about grind. Eight and a half hours of steady kicking, sixty-four kilometres in total, and the hills beginning to rise.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          We found places to stop where we could. A patch of shade outside a shop, bottles lined up at our feet, silence between us while we caught our breath.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          The road gave us one clear marker. A small Route 4 sign, nothing special, just a number: 100 km to Tokyo. We stood there for a photo, smiling because it meant something. For me, Route 4 carries memories from 2017, when I spent days moving along it. Coming back felt like reconnecting with an old part of myself.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          The rest of the day blurred into repetition. Kick, roll, pause. Trucks passing, towns slipping by. No drama, just the slow work of distance.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          By the time we reached Yaita, the tiredness was heavy. Hotel Route Inn gave us a place to stop, nothing more needed. Dinner was curry rice with hamburger steak, miso soup, a salad, and cold Asahi. Ordinary food, but it landed perfectly.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          This is the beauty of Japan. There is always somewhere to get a drink or some food. The roads are always clean and nice.
        </p>
      </section>

      <div class="text-right mt-8 mb-8">
        <p class="text-sm text-km-subtle italic">— Michael Distel</p>
      </div>

      <PhotoSwipeGallery 
        images={photosForPhotoSwipe} 
        title="Day 02 - Exploring Nasu"
        galleryId="day-02-photos"
      />

    </div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={2}
      totalDays={3}
      previousDay={{ url: "/trips/japan-2023/day-01-tokyo-to-nasu", label: "Day 01" }}
      nextDay={{ url: "/trips/japan-2023/day-03-nasu-reflections", label: "Day 03" }}
    />

  </div>
</div>
