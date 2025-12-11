<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';

  const stats = [
    { value: '53km', label: 'Distance Today' },
    { value: '348/560km', label: 'Total Progress' },
    { value: 'October 20', label: 'Date' },
    { value: '7/11', label: 'Day Progress' },
    { value: '819m', label: 'Elevation Climbed' }
  ];

  // Photo gallery - Day 7 mountain crossing photos
  const images = [
    { src: '/images/korea-2025/day-07/photo-01-1x1.webp', alt: 'Day 7 journey photo', width: 1280, height: 1278, ratio: '1x1' },
    { src: '/images/korea-2025/day-07/photo-02-1x1.webp', alt: 'Day 7 journey photo', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-07/photo-03-4x3.webp', alt: 'Day 7 journey photo', width: 1280, height: 959, ratio: '4x3' },
    { src: '/images/korea-2025/day-07/photo-04-1x1.webp', alt: 'Day 7 journey photo', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-07/photo-05-3x4.webp', alt: 'Day 7 journey photo', width: 959, height: 1280, ratio: '3x4' },
    { src: '/images/korea-2025/day-07/photo-06-1x1.webp', alt: 'Day 7 journey photo', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-07/photo-07-1x1.webp', alt: 'Day 7 journey photo', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-07/photo-08-3x4.webp', alt: 'Day 7 journey photo', width: 959, height: 1280, ratio: '3x4' },
    { src: '/images/korea-2025/day-07/photo-09-1x1.webp', alt: 'Day 7 journey photo', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-07/photo-10-1x1.webp', alt: 'Day 7 journey photo', width: 1279, height: 1280, ratio: '1x1' }
  ];
</script>

<svelte:head>
  <title>Day 7: Over the Mountains, Amazing Apples, and Downhill Glory - Korea 2025 | Kicking Miles</title>
  <meta name="description" content="Day 7 brought the biggest challenge yet - crossing the mountain pass with 600m+ elevation gain. From tough climbs to exhilarating descents, amazing local apples, and gratitude to friend Alf for the route recommendation." />
  <meta property="og:title" content="Day 7: Over the Mountains, Amazing Apples, and Downhill Glory - Korea 2025 | Kicking Miles" />
  <meta property="og:description" content="Day 7 brought the biggest challenge yet - crossing the mountain pass with 600m+ elevation gain. From tough climbs to exhilarating descents, amazing local apples, and gratitude to friend Alf for the route recommendation." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kickingmiles.com/trips/korea-2025/day-07-over-mountains-amazing-apples" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Day 7: Over the Mountains, Amazing Apples, and Downhill Glory - Korea 2025 | Kicking Miles" />
  <meta name="twitter:description" content="Day 7 brought the biggest challenge yet - crossing the mountain pass with 600m+ elevation gain. From tough climbs to exhilarating descents, amazing local apples, and gratitude to friend Alf for the route recommendation." />
  <link rel="canonical" href="https://kickingmiles.com/trips/korea-2025/day-07-over-mountains-amazing-apples" />
</svelte:head>

<!-- Section: Day 7 Mountain Challenge -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/korea-2025"
      backText="Korea 2025"
      title="Day 7: Over the Mountains, Amazing Apples, and Downhill Glory"
      subtitle="October 20, 2025"
    />

    <!-- Stats Box -->
    <div class="mt-8">
      <StatsBox {stats} />
    </div>

    <!-- Content sections -->
    <div class="km-prose-content space-y-8 mt-12">
      
      <section>
        <p class="km-lead-text">
          Today was one of the most challenging and hardest days we have had so far, and I will not lie, we are both super proud. Today we crossed over the mountain pass, climbing more than 600 metres in elevation.
        </p>
        
        <p class="km-body-text">
          It was tough. Hours of walking uphill, pain shooting up my legs, and Alex having to stop now and then to ease the pressure on his back. But when we finally reached the top, it felt amazing. First, because of the incredible view of the valley below, and second, because there was a small shop selling hot coffee. I think the moment we sat down, Alex's body and mind just shut down for a bit, he sat there quietly, staring at his phone in a daze.
        </p>
      </section>

      <section>
        <h3 class="km-section-title">The Descent</h3>
        
        <p class="km-body-text">
          What goes up must come down. What took us hours to climb took only minutes to descend, flying down the mountain path at around 40 km/h. It was exhilarating, the cold air rushing past and the kilometres flying by without a single kick.
        </p>
      </section>

      <section>
        <h3 class="km-section-title">Amazing Local Apples</h3>
        
        <p class="km-body-text">
          At the bottom of the valley, we stopped at a small apple shop for some fresh local apples. It was fun watching Alex try to talk to the uncle running the place, who just kept handing us different slices to taste. The apples were amazing, crisp, juicy, and perfect after a long ride.
        </p>
      </section>

      <section>
        <h3 class="km-section-title">Thanks to Alf</h3>
        
        <p class="km-body-text">
          You might have noticed I was wearing a very colourful singlet today. It was a gift from my friend Alf, who has his own line of sporting gear, jerseys, t-shirts, singlets, swimming trunks, all in bright, playful designs. Alf is also the reason we are taking this particular route through Korea. A few years ago, when he heard about my trip in Japan, he recommended it. Thanks Alf, Alex and I really appreciate it.
        </p>
      </section>

      <section>
        <h3 class="km-section-title">The Final Push</h3>
        
        <p class="km-body-text">
          Tomorrow we start our direct run toward Seoul. If all goes well, we should be there in three or four days.
        </p>
      </section>

      <!-- Photo Gallery Section -->
      <section>
        <h3 class="km-section-title">Photos from Day 7</h3>
        <PhotoSwipeGallery 
          {images} 
          title="Day 7: Mountain Crossing and Local Hospitality"
          galleryId="day-07-gallery"
        />
      </section>

    </div>

    <!-- Day Navigation -->
    <div class="mt-12">
      <DayNavigation 
        previousDay={{
          url: '/trips/korea-2025/day-06-halfway-longest-fastest',
          label: 'Day 6'
        }}
        nextDay={{
          url: '/trips/korea-2025/day-08-tape-fixes-all',
          label: 'Day 8'
        }}
      />
    </div>

  </div>
</div>