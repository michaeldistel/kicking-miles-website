<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils.js';

  const stats = [
    { value: 'DAY TEN', label: 'Scooting Adventures' },
    { value: '547km / 1800km', label: 'Himeji to Kobe' },
    { value: '9 hours', label: 'Estimated scooting time' },
    { value: 'Beautiful day!', label: 'Weather' },
    { value: 'Economics', label: 'Observations' }
  ];

  // Combined gallery images with new filenames
  const galleryImages = prepareImagesForPhotoSwipe([
    { src: '/images/japan-2017/day-10/route-map-01-1x1.webp', alt: 'Route map from Himeji to Kobe approaching the major cities' },
    { src: '/images/japan-2017/day-10/updates-01-1x1.webp', alt: 'Reflections on Japanese UX design and economic success observations' }
  ]);
</script>

<svelte:head>
  <title>Day 10 - Economic Success | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 10 of our Japan kick scooter adventure: Riding through areas showcasing Japan's economic success and observing the contrast between tradition and modernity." />
</svelte:head>

<!-- Day 10: Modern Japan -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY TEN"
      date="4 April 2017"
      title="The ingredient to economic success?"
      progress="547 kilometres of 1,800"
      subtitle="Day ten"
    />
  </div>
  
  <!-- Full-width stats box outside content wrapper -->
  <div class="mt-12 mb-8">
    <StatsBox {stats} columns={5} fullWidth={true} />
  </div>

  <div class="km-content-wrapper">

    <!-- Main content -->
    <div class="km-prose-content space-y-8">
      <section>
        <p class="km-body-text">
          Dinner at Kurasushi the last 10km before Kobe. Kurashushi is an extremely affordable fast food sushi chain. You place your order on a screen and it delivers your food to you through a high speed conveyor belt.
        </p>

        <p class="km-body-text">
          UX or user experience is given high priority in most Japanese service, even low-priced consumer goods companies. The Japanese have their UX damn packed for optimum customer experience. Their attention to the UX is perhaps a reflection of the value they place on the 'process'. It can be said to be synonymous with high quality, attention-to-detail and refined experience.
        </p>

        <p class="km-body-text">
          Yet if attention-to-detail is a key ingredient to success, why is Japan slowly losing its hegemony as one of the world's leading economies?
        </p>
      </section>

      <section>
        <p class="text-sm text-km-subtle italic mt-8">
          - Michelle Yang
        </p>
      </section>

      <!-- PhotoSwipe Gallery -->
      <PhotoSwipeGallery 
        images={galleryImages} 
        title="Economic Observations" 
        galleryId="day10-gallery"
      />
    </div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={10}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-09-no-right-or-wrong", label: "Day 9" }}
      nextDay={{ url: "/trips/japan-2017/day-11-rebellious-heterogeneity", label: "Day 11" }}
    />

  </div>
</div>
