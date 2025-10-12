<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const images = [
    {
      src: '/images/korea-2025/day-minus-2/packed-bags-3x4.webp',
      alt: 'Final packing complete - bags ready for Korea departure',
      width: 926,
      height: 1067,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-minus-2/scooters-wrapped-3x4.webp',
      alt: 'Kick scooters wrapped and ready for transport to Korea',
      width: 893,
      height: 1177,
      ratio: '3x4'
    }
  ];
</script>

<svelte:head>
  <title>Day -2: Final hours - Korea 2025 | Kicking Miles</title>
  <meta name="description" content="Just hours before departure to Korea. Final packing complete, scooters wrapped and ready. The story behind Tresha's name on Michael's scooter from Japan 2017." />
  <meta property="og:title" content="Day -2: Final hours - Korea 2025 | Kicking Miles" />
  <meta property="og:description" content="Just hours before departure to Korea. Final packing complete, scooters wrapped and ready. The story behind Tresha's name on Michael's scooter from Japan 2017." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kickingmiles.com/trips/korea-2025/day-minus-2-final-hours" />
  <meta property="og:image" content="https://kickingmiles.com/images/korea-2025/day-minus-2/packed-bags-3x4.webp" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Day -2: Final hours - Korea 2025 | Kicking Miles" />
  <meta name="twitter:description" content="Just hours before departure to Korea. Final packing complete, scooters wrapped and ready. The story behind Tresha's name on Michael's scooter from Japan 2017." />
  <meta name="twitter:image" content="https://kickingmiles.com/images/korea-2025/day-minus-2/packed-bags-3x4.webp" />
  <link rel="canonical" href="https://kickingmiles.com/trips/korea-2025/day-minus-2-final-hours" />
</svelte:head>

<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/korea-2025" 
      backText="Korea 2025" 
      title="Day -2: Final hours"
      subtitle="October 12, 2025"
      description="A few more hours until we get on the flight to Korea"
    />

    <div class="space-y-8">

      <!-- Main content -->
      <section>
        <p class="km-body-text">
          A few more hours until we get on the flight to Korea.
        </p>
        
        <p class="km-body-text">
          Alex and I have finally finished packing. I planned to bring only one bag but somehow ended up with two. Alex is carrying about 9 kg and I have around 14 kg across my two bags.
        </p>
        
        <p class="km-body-text">
          Scooters are wrapped and ready.
        </p>
      </section>

      <!-- Tresha's scooter story -->
      <section>
        <ContentBox type="highlight">
          <p class="km-body-text">
            Just a small note, people have been asking why Tresha's name is on my scooter. During our Japan 2017 trip, the handlebar shaft on mine broke. I could still use it, but it caused a lot of problems each day and I kept needing to fix it. When Tresha finished her leg of the trip she passed me hers, which was still working. Everything else is still my original one apart from the wheels, which I have replaced a few times.
          </p>
        </ContentBox>
      </section>

    </div>

    <!-- Photo gallery -->
    <div class="mt-12">
      <h2 class="km-subsection-title mb-6">Final preparations</h2>
      <PhotoSwipeGallery 
        {images} 
        title="Day -2 final hours" 
        galleryId="day-minus-2-gallery" 
      />
    </div>

    <!-- Day Navigation -->
    <div class="mt-12">
      <DayNavigation 
        previousDay={{
          url: '/trips/korea-2025/day-minus-4-last-minute-prep',
          label: 'Day -4'
        }}
        nextDay={null}
      />
    </div>

  </div>
</div>