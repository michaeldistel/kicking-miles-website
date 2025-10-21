<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';

  const stats = [
    { value: '26km', label: 'Distance Today' },
    { value: '374/560km', label: 'Total Progress' },
    { value: 'October 21', label: 'Date' },
    { value: '8/11', label: 'Day Progress' },
    { value: 'Downhill', label: 'Terrain' }
  ];

  // Photo gallery - Day 8 tape adventure photos
  const images = [
    { src: '/images/korea-2025/day-08/photo-01-1x1.webp', alt: 'Day 8 journey photo', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-08/photo-02-1x1.webp', alt: 'Day 8 journey photo', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-08/photo-03-1x1.webp', alt: 'Day 8 journey photo', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-08/photo-04-1x1.webp', alt: 'Day 8 journey photo', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-08/photo-05-1x1.webp', alt: 'Day 8 journey photo', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-08/photo-06-1x1.webp', alt: 'Day 8 journey photo', width: 1279, height: 1280, ratio: '1x1' }
  ];
</script>

<svelte:head>
  <title>Day 8: The Tape Fixes All - Korea 2025 | Kicking Miles</title>
  <meta name="description" content="Alex's Day 8 reflection on downhill glory, civilization returning, and the universal truth that anything can be fixed with tape - including a broken flag!" />
  <meta property="og:title" content="Day 8: The Tape Fixes All - Korea 2025 | Kicking Miles" />
  <meta property="og:description" content="Alex's Day 8 reflection on downhill glory, civilization returning, and the universal truth that anything can be fixed with tape - including a broken flag!" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kickingmiles.com/trips/korea-2025/day-08-tape-fixes-all" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Day 8: The Tape Fixes All - Korea 2025 | Kicking Miles" />
  <meta name="twitter:description" content="Alex's Day 8 reflection on downhill glory, civilization returning, and the universal truth that anything can be fixed with tape - including a broken flag!" />
  <link rel="canonical" href="https://kickingmiles.com/trips/korea-2025/day-08-tape-fixes-all" />
</svelte:head>

<!-- Section: Day 8 Tape Adventure -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/korea-2025"
      backText="Korea 2025"
      title="Day 8: The Tape Fixes All"
      subtitle="October 21, 2025"
    />

    <!-- Stats Box -->
    <div class="mt-8">
      <StatsBox {stats} />
    </div>

    <!-- Content sections -->
    <div class="km-prose-content space-y-8 mt-12">
      
      <section>
        <p class="km-lead-text">
          Another day, another journey, but this time, a short one.
        </p>
        
        <p class="km-body-text">
          No more endless farmlands; civilization is finally embracing us.
        </p>
      </section>

      <section>
        <h3 class="km-section-title">Downhill Glory</h3>
        
        <p class="km-body-text">
          After days of suffering, the reward has come: instead of kicking (or, let's be honest, walking) uphill, we're now gliding downhill, following the river's current and feeling the wind in my beard.
        </p>
        
        <p class="km-body-text">
          We were flying, like rockets, like lightning in a storm, like travelers racing toward the end of a vacation.
        </p>
      </section>

      <section>
        <h3 class="km-section-title">The Flag Incident</h3>
        
        <p class="km-body-text">
          So fast, in fact, that my flag couldn't handle the excitement… and snapped in half!
        </p>
      </section>

      <section>
        <h3 class="km-section-title">Universal Truth</h3>
        
        <p class="km-body-text">
          But as every true adventurer knows: anything can be fixed with tape.
        </p>
        
        <p class="km-body-text">
          And if it can't? Well, that just means you don't have enough tape!
        </p>
      </section>

      <!-- Photo Gallery Section -->
      <section>
        <h3 class="km-section-title">Photos from Day 8</h3>
        <PhotoSwipeGallery 
          {images} 
          title="Day 8: Downhill Speed and Tape Solutions"
          galleryId="day-08-gallery"
        />
      </section>

    </div>

    <!-- Day Navigation -->
    <div class="mt-12">
      <DayNavigation 
        previousDay={{
          url: '/trips/korea-2025/day-07-over-mountains-amazing-apples',
          label: 'Day 7'
        }}
        nextDay={null}
      />
    </div>

  </div>
</div>