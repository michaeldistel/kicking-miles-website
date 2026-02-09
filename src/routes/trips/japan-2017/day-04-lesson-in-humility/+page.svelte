<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

  const stats = [
    { value: '9 hours', label: 'Time' },
    { value: 'Hiroshima', label: 'Destination' },
    { value: 'Brake failure', label: 'Challenge' },
    { value: 'Humbled', label: 'Mood' },
    { value: 'Train', label: 'Transport' }
  ];

  const routeImages = [
    { src: '/images/japan-2017/day-04/route-map-4x3.webp', alt: 'Route map showing the planned path from Hofu to Hiroshima' },
    { src: '/images/japan-2017/day-04/updates-1x1.webp', alt: 'Journey updates documenting the lessons learned and humble moments' }
  ];

  const photoImages = [
    { src: '/images/japan-2017/day-04/photo-01-4x3.webp', alt: 'Starting the journey from Hofu' },
    { src: '/images/japan-2017/day-04/photo-02-4x3.webp', alt: 'Mountain passes of Hofu' },
    { src: '/images/japan-2017/day-04/photo-03-3x4.webp', alt: 'The challenging terrain and broken brakes incident' },
    { src: '/images/japan-2017/day-04/photo-04-3x4.webp', alt: 'Taking the train to Hiroshima after learning a lesson in humility' }
  ];

  // Combine all images for PhotoSwipe gallery
  const allImages = [...routeImages, ...photoImages];
  const galleryImages = prepareImagesForPhotoSwipe(allImages);
</script>

<svelte:head>
  <title>Day 04 - A Lesson in Humility | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 04 of our Japan kick scooter adventure: When Michelle's brakes fail, we learn that humility and confidence go hand in hand." />
</svelte:head>

<!-- Day 04: Hofu to Hiroshima -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="Day 04"
      date="29 March 2017"
      title="A lesson in humility"
      progress="274 kilometres of 1,800"
      subtitle="Day four"
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
          We set off into the chilly morning with a tired and aching body to head up into the mountain passes of Hofu. It wasn't long into the morning that Michelle's breaks were busted. Cruising down one of the gentle slopes, she couldn't break properly and had to slide to a stop, throwing herself off the scooter. All the flipping and parkour training we did paid off because she landed safely on her feet!
        </p>

        <p class="km-body-text">
          There was a moment of alarmingly fear, when the reality that the fall could have happened down a mountain pass, but also a sigh of blessing to know that nothing serious actually happened. With sombre thoughts, we decided to walk down to the nearest station and take the train to Hiroshima instead of pushing through or walking.
        </p>

        <p class="km-body-text">
          A lesson in humility. We set off from Fukuoka with brash confidence, boldness enveloping our every step, certainty that our bodies can hold up to the gruelling task and our goals easily met. Having what we'd refer to as a tiny setback, has become a stark reminder that perhaps, arrogance is only for the fool-hearted and that to truly succeed in a great challenge, requires both humility and confidence.
        </p>

        <p class="km-body-text">
          Thanking the mountain gods for a lesson learnt!
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
        title="Humility Lesson & Route Map" 
        galleryId="day04-gallery"
      />
    </div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={4}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-03-shimonoseki-to-hofu", label: "Day 3" }}
      nextDay={{ url: "/trips/japan-2017/day-05-sakura-chase", label: "Day 5" }}
    />

  </div>
</div>
