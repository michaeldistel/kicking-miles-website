<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

  const stats = [
    { value: 'Night before', label: 'Time' },
    { value: 'Hotel room', label: 'Location' },
    { value: 'Sukiyaki meal', label: 'Challenge' },
    { value: 'Nervous energy', label: 'Mood' }
  ];

  const photoImages = [
    { src: '/images/japan-2017/day-00/photo-01-4x3.webp', alt: 'Before the main event - the night before departure' },
    { src: '/images/japan-2017/day-00/photo-02-4x3.webp', alt: 'Nervous energy and final preparations' },
    { src: '/images/japan-2017/day-00/photo-03-4x3.webp', alt: 'Ready for tomorrow\'s adventure to begin' }
  ];

  // Prepare images for PhotoSwipe gallery
  const galleryImages = prepareImagesForPhotoSwipe(photoImages);
</script>

<svelte:head>
  <title>Day 00 - Before the Main Event | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 00 of our Japan kickboard adventure: The night before departure with nervous energy, butterflies, and memories of yesterday's sukiyaki meal." />
</svelte:head>

<!-- Day 00: Before the Adventure -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="Day 00"
      date="25 March 2017"
      title="Before the Main Event"
      progress="The night before departure"
      subtitle="Nervous energy and sukiyaki"
    />
  </div>
  
  <!-- Full-width stats box outside content wrapper -->
  <div class="mt-12 mb-8">
    <StatsBox {stats} columns={4} fullWidth={true} />
  </div>

  <div class="km-content-wrapper">

    <!-- Main content -->
    <div class="km-prose-content space-y-8">
      <section>
        <p class="km-body-text">
          As the hours tick by and we're supposed to be sleeping, some of us are restless with a bundle of nervous energy... Half feels like butterflies in our stomach, the other half, a hearty sukiyaki meal the day before 🤤😂
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
        title="Before the Main Event" 
        galleryId="day00-gallery"
      />
    </div>

  
    <!-- Day navigation -->
    <DayNavigation 
      currentDay={0}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017", label: "Japan 2017" }}
      nextDay={{ url: "/trips/japan-2017/day-01-fukuoka-to-kitakyushu", label: "Day 1" }}
    />

  </div>
</div>
