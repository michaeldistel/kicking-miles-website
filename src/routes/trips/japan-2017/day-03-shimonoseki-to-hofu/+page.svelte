<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

  const stats = [
    { value: '12 hours', label: 'Time' },
    { value: 'Hofu', label: 'Destination' },
    { value: 'Mountain passes', label: 'Challenge' },
    { value: 'Great breakfast', label: 'Mood' },
    { value: '12°C', label: 'Temp' },
    { value: '75km', label: 'Distance' }
  ];

  const routeImages = [
    { src: '/images/japan-2017/day-03/route-map-1x1.webp', alt: 'Route map showing the mountain path from Shimonoseki to Hofu' },
    { src: '/images/japan-2017/day-03/updates-3x4.webp', alt: 'Journey updates and highlights from the mountain crossing adventure' }
  ];

  const photoImages = [
    { src: '/images/japan-2017/day-03/photo-01-4x3.webp', alt: 'Starting the journey from Shimonoseki' },
    { src: '/images/japan-2017/day-03/photo-02-4x3.webp', alt: 'Coastal scenery on the way to Hofu' },
    { src: '/images/japan-2017/day-03/photo-03-4x3.webp', alt: 'Beautiful seaside views along the route' },
    { src: '/images/japan-2017/day-03/photo-04-4x3.webp', alt: 'Taking a well-deserved break during the long mountain stretch' },
    { src: '/images/japan-2017/day-03/photo-05-4x3.webp', alt: 'Challenging mountain terrain with steep winding roads ahead' },
    { src: '/images/japan-2017/day-03/photo-06-4x3.webp', alt: 'Navigating the demanding mountain passes on kickboards' },
    { src: '/images/japan-2017/day-03/photo-07-4x3.webp', alt: 'Brief rest stop along the scenic coastal route' },
    { src: '/images/japan-2017/day-03/photo-08-4x3.webp', alt: 'Beautiful scenic views rewarding the difficult mountain ascent' },
    { src: '/images/japan-2017/day-03/photo-09-4x3.webp', alt: 'Pushing through the demanding mountain terrain together' },
    { src: '/images/japan-2017/day-03/photo-10-4x3.webp', alt: 'Making steady progress towards the Hofu destination' },
    { src: '/images/japan-2017/day-03/photo-11-4x3.webp', alt: 'Successful completion of the challenging third day of the journey' }
  ];

  // Combine all images for PhotoSwipe gallery
  const allImages = [...routeImages, ...photoImages];
  const galleryImages = prepareImagesForPhotoSwipe(allImages);
</script>

<svelte:head>
  <title>Day 03 - Shimonoseki to Hofu | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 03 of our Japan kick scooter adventure: Our first long stretch with coastal scenery and treacherous mountain passes." />
</svelte:head>

<!-- Day 03: Shimonoseki to Hofu -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="Day 03"
      date="28 March 2017"
      title="Our first long stretch!"
      progress="165 kilometres of 1,800"
      subtitle="Day three"
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
          We started off with a wonderful sendoff from the staff at Starbucks! Our tummies full of nourishment and caffeine, we set off along the coast to a beautiful seaside scenery. The weather was glorious!
        </p>

        <p class="km-body-text">
          This 75km stretch is the beginning of a steep ascent into the mountains. We made awesome time in the first half only to slow down, lol. About 50kms in, we got hopelessly lost and were so tired Michelle fell asleep beside the cemetary. We also navigated the treacherous mountain passes that had nary a sidewalk and many oncoming trucks. Felt like our lives flashed before our eyes twice today.
        </p>

        <p class="km-body-text">
          Today's trip can't be completed without talking about the two wonderful groups of people we met along the way. We get a lot of people asking us what we're doing and where we're going. Curious stares are common. Sometimes we come across special people who are genuinely interested in sharing our dream. In their small ways, they show their support with a thoughtful gift here, encouraging words there and warm smiles everywhere.
        </p>

        <p class="km-body-text">
          This time we had two special send offs in one day - the group at Starbucks in Shimonoseki and another at the 7-11 in Asa! With their words, "ganbatte", trailing behind us, we headed further into the mountains with our trusty scooters!
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
        title="Mountain Journey & Route Map" 
        galleryId="day03-gallery"
      />
    </div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={3}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-02-kyushu-to-honshu", label: "Day 2" }}
      nextDay={{ url: "/trips/japan-2017/day-04-lesson-in-humility", label: "Day 4" }}
    />

  </div>
</div>
