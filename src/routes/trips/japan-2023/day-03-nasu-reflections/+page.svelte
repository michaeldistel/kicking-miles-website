<script lang="ts">
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import InstagramEmbed from '$lib/components/InstagramEmbed.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

  const stats = [
    { value: '4h 30m', label: 'Time' },
    { value: 'Épinard Nasu', label: 'Destination' },
    { value: 'Mountain climb', label: 'Challenge' },
    { value: 'Wedding bound', label: 'Mood' },
    { value: '19°C', label: 'Temp' },
    { value: '~30km', label: 'Distance' }
  ];

  const photos = [
    { src: '/images/japan-2023/day-03/day03-photo-01-4x3.webp', alt: 'Final morning in the Nasu region' },
    { src: '/images/japan-2023/day-03/day03-photo-03-3x4.webp', alt: 'Afternoon return journey moments' },
    { src: '/images/japan-2023/day-03/day03-photo-04-3x4.webp', alt: 'Late afternoon return to Tokyo area' },
    { src: '/images/japan-2023/day-03/day03-photo-05-3x4.webp', alt: 'Final day activity summary' },
    { src: '/images/japan-2023/day-03/day03-photo-06-3x4.webp', alt: 'Afternoon reflections on the journey' },
    { src: '/images/japan-2023/day-03/day03-photo-07-4x3.webp', alt: 'Final moments of the three-day adventure' }
  ];

  $: photosForPhotoSwipe = prepareImagesForPhotoSwipe(photos);

  const title = 'Yaita to Nasu';
  const date = '18 October';
  const description = 'The last day. Short distance but climbing into the mountains for Gordon\'s wedding.';
</script>

<svelte:head>
  <title>Day 03 - Nasu Reflections | Japan 2023 | Kicking Miles</title>
  <meta name="description" content="{description}" />
  <meta property="og:title" content="Day 03 - Nasu Reflections | Japan 2023 | Kicking Miles" />
  <meta property="og:description" content="{description}" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kickingmiles.com/trips/japan-2023/day-03-nasu-reflections/" />
  <meta property="og:image" content="https://kickingmiles.com/images/japan-2023/day-03/day03-photo-01.webp" />
  <meta property="article:published_time" content="2023-10-18" />
  <meta property="article:author" content="Michael Distel" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Day 03 - Nasu Reflections | Japan 2023 | Kicking Miles" />
  <meta name="twitter:description" content="{description}" />
  <meta name="twitter:image" content="https://kickingmiles.com/images/japan-2023/day-03/day03-photo-01.webp" />
  <link rel="canonical" href="https://kickingmiles.com/trips/japan-2023/day-03-nasu-reflections/" />
</svelte:head>

<!-- Day 03: Nasu Reflections -->
<div class="km-container">
  <div class="km-content-wrapper">

    <TripHeader 
      backUrl="/trips/japan-2023/"
      backText="Japan 2023 Daily Journal"
      dayNumber="DAY 03"
      date="18 OCTOBER 2023"
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
          The last day. The distance was short, but the road tilted up as we left Yaita behind. This was the climb, the one that had been waiting. Each push felt slower, the gradient asking for more, but the mountains ahead pulled us on.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          The destination was not just another hotel. <a href="https://www.instagram.com/epinard_nasu/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Épinard Nasu</a> sat in the hills, tucked into the green. Reaching it meant arriving in the mountains, not just finishing a route. The views opened as we gained height, valleys stretching below and ridges stacked against the horizon.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          This trip had a purpose. To be at <a href="https://www.instagram.com/gordonwoon/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Gordon's</a> wedding. Not just a good friend but a fellow member of the <a href="https://kickingmiles.com/trips/japan-2017" class="text-km-primary hover:text-km-dark underline">2017 Japan scooting trip</a>. Rolling into Nasu by scooter tied the two journeys together, six years apart but connected by the same simple way of moving.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          By afternoon I checked into <a href="https://www.instagram.com/epinard_nasu/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Épinard Nasu</a>. The room looked out to trees turning with the season, a quiet space after the climb.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          The next day I stood among friends including <a href="https://www.instagram.com/forevayang/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Tresha</a> who was also a member of the 2017 team, and family, watching <a href="https://www.instagram.com/gordonwoon/" target="_blank" rel="noopener noreferrer" class="text-km-primary hover:text-km-dark underline">Gordon</a> and his bride in the centre. To arrive there by scooter felt improbable and exactly right.
        </p>
      </section>

      <div class="text-right mt-8 mb-8">
        <p class="text-sm text-km-subtle italic">Michael Distel</p>
      </div>

    </div>

    <!-- Images at the bottom -->
    <PhotoSwipeGallery 
      images={photosForPhotoSwipe} 
      title="Day 03 - Nasu Reflections"
      galleryId="day-03-photos"
    />

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={3}
      totalDays={3}
      previousDay={{ url: "/trips/japan-2023/day-02-exploring-nasu", label: "Day 02" }}
    />

  </div>
</div>
