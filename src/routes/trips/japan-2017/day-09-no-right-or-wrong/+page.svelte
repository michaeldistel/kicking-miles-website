<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils.js';

  const stats = [
    { value: 'DAY NINE', label: 'Scooting Adventures' },
    { value: '492km / 1800km', label: 'Okayama to Himeji' },
    { value: '12 hours', label: 'Estimated scooting time' },
    { value: 'Clear skies!', label: 'Weather' },
    { value: 'Philosophy', label: 'Life lessons' }
  ];

  // Combined gallery images with new filenames
  const galleryImages = prepareImagesForPhotoSwipe([
    { src: '/images/japan-2017/day-09/route-map-01-4x3.webp', alt: 'Route map from Okayama to Himeji along the coastal path' },
    { src: '/images/japan-2017/day-09/updates-01-1x1.webp', alt: 'Philosophical reflections on perseverance and finding the right path' },
    { src: '/images/japan-2017/day-09/photo-01-3x4.webp', alt: 'Feeling adjusted to daily physical challenges' },
    { src: '/images/japan-2017/day-09/photo-03-4x3.webp', alt: 'Mental and emotional challenges of the journey' }
  ]);
</script>

<svelte:head>
  <title>Day 09 - No Right or Wrong | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 09 of our Japan kickboard adventure: Learning that sometimes there is no right or wrong path - only different experiences." />
</svelte:head>

<!-- Day 09: Philosophical Journey -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY NINE"
      date="3 April 2017"
      title="There is no right or wrong!"
      progress="492 kilometres of 1,800"
      subtitle="Day nine"
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
          Nine days in and we're feeling more adjusted to the daily physical punishment. One of the biggest challenge in doing a trip like this, would really be the ability to lean into discomfort and hanging on through it to give the body time to adjust. Physically, it might sound really difficult but anyone with a slightly above average fitness level will find this pace easy to conquer. It's not so much strenuous as it is tiring.
        </p>

        <p class="km-body-text">
          For the most part, the real challenge is more emotional and mental. Sometimes those take up more of our energy than the actual physical task itself. Some of the questions we had to face were... what do we do when the uphill climb becomes exhausting on the quads we feel like stopping, when the rain chills us to the bone and we're shivering or when we get lost and don't know how to navigate out of the maze of streets? A simple question, do we quit or go on?
        </p>

        <p class="km-body-text">
          The idealist will tell you that the decision is clear. You either do or don't. But the realist knows that life is not so simple. There is no black and white. Everything exists in greys. And because it exists in greys, there is no right or wrong... good or bad. Life just is and we just live the present moment the best we can.
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
        title="Philosophical Journey" 
        galleryId="day09-gallery"
      />
    </div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={9}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-08-momotaro-peach-boy", label: "Day 8" }}
      nextDay={{ url: "/trips/japan-2017/day-10-economic-success", label: "Day 10" }}
    />

  </div>
</div>
