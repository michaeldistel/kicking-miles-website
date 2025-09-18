<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils.js';

  const stats = [
    { value: 'DAY 13', label: 'Scooting Adventures' },
    { value: '615km / 1800km', label: 'Osaka to Nara' },
    { value: '6 hours', label: 'Estimated scooting time' },
    { value: 'Kuidaore!', label: 'Mood' },
    { value: 'War banners', label: 'Mission' }
  ];

  // Combined gallery images with new filenames - Day 13 doesn't have route-map or updates files
  const galleryImages = prepareImagesForPhotoSwipe([
    { src: '/images/japan-2017/day-13/photo-01-1x1.webp', alt: 'Leaving Osaka with newly constructed sengoku war banners' },
    { src: '/images/japan-2017/day-13/photo-02-3x4.webp', alt: 'Proud soldiers ready to proclaim ascendency' },
    { src: '/images/japan-2017/day-13/photo-03-3x4.webp', alt: 'Rain getting steadily heavier through Osaka streets' },
    { src: '/images/japan-2017/day-13/photo-04-3x4.webp', alt: 'All rain defenses deployed - waterproof jackets and covers' },
    { src: '/images/japan-2017/day-13/photo-05-4x3.webp', alt: 'Looking like mismatched homeless wannabes' },
    { src: '/images/japan-2017/day-13/photo-06-3x4.webp', alt: 'War banners exposed to the elements' },
    { src: '/images/japan-2017/day-13/photo-07-3x4.webp', alt: 'Michael sacrificing raincoat to protect war banners' },
    { src: '/images/japan-2017/day-13/photo-08-4x3.webp', alt: 'Marker ink running despite protection efforts' },
    { src: '/images/japan-2017/day-13/photo-09-3x4.webp', alt: 'Platoon arriving in Nara - zero casualties!' }
  ]);
</script>

<svelte:head>
  <title>Day 13 - Let No War Banner Fall | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 13 of our Japan kick scooter adventure: From Osaka to Nara carrying messages of peace and reflecting on history and remembrance." />
</svelte:head>

<!-- Day 13: Osaka to Nara -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 13"
      date="7 April 2017"
      title="Let no war banner fall!"
      progress="615 kilometres of 1,800"
      subtitle="Day 13"
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
          We left Osaka in high spirits with our newly constructed 'sengoku' war banners! Stuck into our backpacks, we scooted on like proud soldiers ready to proclaim our ascendency over the challenging journey. We have 2/3 more to go or roughly 1,200km.
        </p>

        <p class="km-body-text">
          The rain got steadily heavy as we marched through the streets of Osaka. Out came all our defenses against the rain; waterproof jackets, backpack covers, gardening gloves and plastic bags over our backpack. We looked like a mismatched bunch of homeless wannabes.
        </p>

        <p class="km-body-text">
          The only things left uncovered were our war banners. We had no more plastic bags left and there was no way to slot them in our bags. Major dilemma! Eventually we decided that our war banners had to be protected at all costs. So Michael sacrificed his raincoat to scoot in the rain, so our war banners had a protected place to ride.
        </p>

        <p class="km-body-text">
          PS: In the end, the marker ink ran down the cloth anyway but the platoon made it to Nara! Zero casualties reported!
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
        title="War Banner Mission" 
        galleryId="day13-gallery"
      />
    </div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={13}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-12-old-lady-dango-shop", label: "Day 12" }}
      nextDay={{ url: "/trips/japan-2017/day-14-legendary-bowing-deer", label: "Day 14" }}
    />

  </div>
</div>
