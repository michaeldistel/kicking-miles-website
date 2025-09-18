<script lang="ts">
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import { onMount } from 'svelte';
  import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

  const stats = [
    { value: 'DAY 14', label: 'Scooting Adventures' },
    { value: '655km / 1800km', label: 'Nara to Iga' },
    { value: '7 hours', label: 'Estimated scooting time' },
    { value: 'Wet & muggy', label: 'Weather' }
  ];

  const images = [
    // Route map and updates  
    { src: '/images/japan-2017/day-14/route-map-01-4x3.webp', alt: 'Route map from Nara to Iga through challenging mountain passes' },
    { src: '/images/japan-2017/day-14/updates-01-1x1.webp', alt: 'Legendary bowing deer encounters and ninja territory discovery in Nara' },
    
    // Photo gallery
    { src: '/images/japan-2017/day-14/photo-01-3x4.webp', alt: 'Competing with tourists for deer attention' },
    { src: '/images/japan-2017/day-14/photo-03-3x4.webp', alt: 'Getting our moment of bowing glory on camera' },
    { src: '/images/japan-2017/day-14/photo-04-4x3.webp', alt: 'Mountainous regions of Mie province' },
    { src: '/images/japan-2017/day-14/photo-05-4x3.webp', alt: 'Steep inclines testing quads and calves' },
    { src: '/images/japan-2017/day-14/photo-06-1x1.webp', alt: 'Arriving in Iga, land of ninjas' }
  ];

  let pswpImages: any[] = [];

  onMount(() => {
    pswpImages = prepareImagesForPhotoSwipe(images);
  });
</script>

<svelte:head>
  <title>Day 14 - The Legendary Bowing Deer | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 14 of our Japan kick scooter adventure: Encountering Nara's famous bowing deer and exploring ancient temples where legend meets reality." />
</svelte:head>

<!-- Day 14: Nara to Iga -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 14"
      date="8 April 2017"
      title="The legendary bowing deer"
      progress="655 kilometres of 1,800"
      subtitle="Day 14 updates!"
    />

    <div class="mb-8 mt-12">
      <StatsBox {stats} fullWidth />
    </div>

    <!-- Main content -->
    <div class="km-prose-content space-y-8">
      <section>
        <p class="km-body-text">
          We made our way pass Nara park and through the mountainous regions of Mie to head to Iga. From Nara where the legendary bowing deer reside, to the land of ninjas in Iga, we passed through so many slopes our quads and calves were aching badly by the time we got to our hotel. It was only when we hit Iga that we realised this town is known for its ninja history.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          We made our way pass Nara park and through the mountainous regions of Mie to head to Iga. From Nara where the legendary bowing deer reside, to the land of ninjas in Iga, we passed through so many slopes our quads and calves were aching badly by the time we got to our hotel. It was only when we hit Iga that we realised this town is known for its ninja history.
        </p>

        <p class="km-body-text">
          According to wikipedia, "The remoteness and inaccessibility of the surrounding mountains may have had a role in the ninja's secretive development. Historical documents regarding the ninja's origins in these mountainous regions are considered generally correct."
        </p>

        <p class="km-body-text">
          And no wonder we took so many hours for such a short distance. The roads were on an incline and we were constantly going through the mountains. We made it anyway!
        </p>

        <p class="km-body-text">
          But today can't be completed without talking about the bowing deer at Nara. We thought we were the only foolish tourists bowing to random herbivores but we found out we had to fight for the deers attention from other throngs of fellow foolish tourists, so we could get our moment of bowing glory on the camera. The lengths humans would go for anthropomorphism!
        </p>
      </section>

      <section>
        <p class="text-sm text-km-subtle italic mt-8">
          - Michelle Yang
        </p>
      </section>

      <!-- PhotoSwipe Gallery -->
      <div class="mt-12">
        <PhotoSwipeGallery images={pswpImages} title="Day 14: Legendary Bowing Deer" />
      </div>
    </div>

    
    <!-- Day navigation -->
  <!-- Day navigation -->
  <DayNavigation 
    currentDay={14}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017/day-13-let-no-war-banner-fall", label: "Day 13" }}
    nextDay={{ url: "/trips/japan-2017/day-15-food-poisoning", label: "Day 15" }}
  />

  </div>
</div>
