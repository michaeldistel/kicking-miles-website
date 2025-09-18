<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

  const stats = [
    { value: '3 hours', label: 'Time' },
    { value: 'Shimonoseki', label: 'Destination' },
    { value: 'Island crossing', label: 'Challenge' },
    { value: 'Sore but okay', label: 'Mood' },
    { value: '8°C', label: 'Temp' },
    { value: '90km', label: 'Distance' }
  ];

  const routeImages = [
    { src: '/images/japan-2017/day-02/route-map-1x1.webp', alt: 'Route map showing the crossing from Kitakyushu to Shimonoseki between Kyushu and Honshu' },
    { src: '/images/japan-2017/day-02/updates-3x4.webp', alt: 'Journey updates and notes from the historic island crossing' }
  ];

  const photoImages = [
    { src: '/images/japan-2017/day-02/photo-01-3x4.webp', alt: 'Morning departure from Kitakyushu' },
    { src: '/images/japan-2017/day-02/photo-02-3x4.webp', alt: 'Sore but determined after Day 1' },
    { src: '/images/japan-2017/day-02/photo-03-4x3.webp', alt: 'Approaching the Kyushu-Honshu crossing' },
    { src: '/images/japan-2017/day-02/photo-04-3x4.webp', alt: 'Bridge crossing between the islands of Kyushu and Honshu' },
    { src: '/images/japan-2017/day-02/photo-06-3x4.webp', alt: 'First views and arrival onto Honshu island' },
    { src: '/images/japan-2017/day-02/photo-07-4x3.webp', alt: 'Celebrating the successful crossing between islands' },
    { src: '/images/japan-2017/day-02/photo-08-4x3.webp', alt: 'Taking a more relaxed approach after yesterday\'s challenging storm' },
    { src: '/images/japan-2017/day-02/photo-09-4x3.webp', alt: 'Repacking and adjusting gear for the continued journey' },
    { src: '/images/japan-2017/day-02/photo-10-4x3.webp', alt: 'Arriving in Shimonoseki successfully after the island crossing' },
    { src: '/images/japan-2017/day-02/photo-11-4x3.webp', alt: 'Mission accomplished - first major island crossing completed successfully' }
  ];

  // Combine all images for PhotoSwipe gallery
  const allImages = [...routeImages, ...photoImages];
  const galleryImages = prepareImagesForPhotoSwipe(allImages);
</script>

<svelte:head>
  <title>Day 02 - From Kyushu to Honshu | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 02 of our Japan kick scooter adventure: From Kyushu to Honshu - crossing islands and beginning the main leg of our journey through this curious and fabulous country." />
</svelte:head>

<!-- Day 02: Kyushu to Honshu -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="Day 02"
      date="27 March 2017"
      title="From Kyushu to Honshu"
      progress="90 kilometres of 1,800"
      subtitle="Day two"
    />
  </div>
  
  <!-- Full-width stats box outside content wrapper -->
  <div class="mt-12 mb-8">
    <StatsBox {stats} columns={6} fullWidth={true} />
  </div>

  <div class="km-content-wrapper">

    <!-- Main content -->
    <div class="km-prose-content space-y-8">
      <section>
        <p class="km-body-text">
          We woke up extremely exhausted, having gone to bed at 2am last night because we were waiting out the rain and hailstorm. Surprisingly, our bodies held up fine, not too much tiredness today either.
        </p>

        <p class="km-body-text">
          We decided to take it easy today, and spend time repacking and readjusting our pack. Today we officially crossed from the island of Kyushu into Honshu!!!! So begins the main leg of our journey in this curious and fabulous country!
        </p>

        <p class="km-body-text">
          70kms tomorrow!
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
        title="Journey Photos & Route Map" 
        galleryId="day02-gallery"
      />
    </div>

  
    <!-- Day navigation -->
    <DayNavigation 
      currentDay={2}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-01-fukuoka-to-kitakyushu", label: "Day 1" }}
      nextDay={{ url: "/trips/japan-2017/day-03-shimonoseki-to-hofu", label: "Day 3" }}
    />

  </div>
</div>
