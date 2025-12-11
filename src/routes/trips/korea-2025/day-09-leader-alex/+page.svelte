<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';

  const stats = [
    { value: '70km', label: 'Distance Today' },
    { value: '444/560km', label: 'Total Progress' },
    { value: 'October 22', label: 'Date' },
    { value: '9/11', label: 'Day Progress' },
    { value: '7 hours', label: 'Total Time' }
  ];

  // Photo gallery - Day 9 Alex leading photos
  const images = [
    { src: '/images/korea-2025/day-09/photo-01-1x1.webp', alt: 'Day 9 journey with Alex leading the way', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-09/photo-02-1x1.webp', alt: 'Foggy morning departure from Chungju', width: 1280, height: 1279, ratio: '1x1' },
    { src: '/images/korea-2025/day-09/photo-03-1x1.webp', alt: 'Alex racing ahead like a happy puppy', width: 1280, height: 1279, ratio: '1x1' },
    { src: '/images/korea-2025/day-09/photo-04-3x4.webp', alt: 'Portrait shot during Day 9 journey', width: 959, height: 1280, ratio: '3x4' },
    { src: '/images/korea-2025/day-09/photo-05-1x1.webp', alt: 'Day 9 journey photo with Alex in the lead', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-09/photo-06-1x1.webp', alt: 'Scenic views on the path to Yeoju', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-09/photo-07-1x1.webp', alt: 'Alex maintaining his energetic pace', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-09/photo-08-3x4.webp', alt: 'Portrait during rest stop on Day 9', width: 959, height: 1280, ratio: '3x4' },
    { src: '/images/korea-2025/day-09/photo-09-1x1.webp', alt: 'Michael trying to keep up with Alex', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-09/photo-10-4x3.webp', alt: 'Landscape view during the 70km journey', width: 1280, height: 959, ratio: '4x3' },
    { src: '/images/korea-2025/day-09/photo-11-1x1.webp', alt: 'Day 9 adventure continues towards Yeoju', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-09/photo-12-1x1.webp', alt: 'Alex still energetic after 70km', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-09/photo-13-1x1.webp', alt: 'Journey photo showing the path ahead', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-09/photo-14-1x1.webp', alt: 'Day 9 scenery on route to Yeoju', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-09/photo-15-1x1.webp', alt: 'Alex buying more apples in Yeoju', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-09/photo-16-3x4.webp', alt: 'Portrait of exhausted Michael in Yeoju', width: 960, height: 1280, ratio: '3x4' },
    { src: '/images/korea-2025/day-09/photo-17-3x4.webp', alt: 'Final photo of Day 9 in Yeoju', width: 960, height: 1280, ratio: '3x4' }
  ];
</script>

<svelte:head>
  <title>Day 9: Leader Alex - Korea 2025 | Kicking Miles</title>
  <meta name="description" content="Michael's perspective on Day 9 as Alex takes the lead with endless energy, racing 70km to Yeoju while Michael struggles to keep up with his determined pace." />
  <meta property="og:title" content="Day 9: Leader Alex - Korea 2025 | Kicking Miles" />
  <meta property="og:description" content="Michael's perspective on Day 9 as Alex takes the lead with endless energy, racing 70km to Yeoju while Michael struggles to keep up with his determined pace." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kickingmiles.com/trips/korea-2025/day-09-leader-alex" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Day 9: Leader Alex - Korea 2025 | Kicking Miles" />
  <meta name="twitter:description" content="Michael's perspective on Day 9 as Alex takes the lead with endless energy, racing 70km to Yeoju while Michael struggles to keep up with his determined pace." />
  <link rel="canonical" href="https://kickingmiles.com/trips/korea-2025/day-09-leader-alex" />
</svelte:head>

<!-- Section: Day 9 Alex Leadership -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/korea-2025"
      backText="Korea 2025"
      title="Day 9: Leader Alex"
      subtitle="October 22, 2025"
    />

    <!-- Stats Box -->
    <div class="mt-8">
      <StatsBox {stats} />
    </div>

    <!-- Content sections -->
    <div class="km-prose-content space-y-8 mt-12">
      
      <section>
        <p class="km-lead-text">
          We left Chungju early, with fog over the city and a cold chill in the air.
        </p>
        
        <p class="km-body-text">
          Today it was Alex's turn to lead, find the route, and set the pace. In no time he was off into the fog, racing ahead like a happy puppy, free to push forward as fast as he could.
        </p>
      </section>

      <section>
        <h3 class="km-section-title">Endless Energy</h3>
        
        <p class="km-body-text">
          Alex has endless energy and fitness, and I was finding it hard to keep up. A few times he would stop and check on me to see if I was okay. I would give him an evil look, growl something rude, and scoot past. It was not anger, just determination. I knew I could not match his pace, but I was not going to let him get too far ahead without a fight.
        </p>
      </section>

      <section>
        <h3 class="km-section-title">Grateful Interruptions</h3>
        
        <p class="km-body-text">
          Thankfully a few people stopped us along the way to chat, ask what we were doing, and take photos. It gave me a chance to rest without needing to admit it.
        </p>
      </section>

      <section>
        <h3 class="km-section-title">Seven Hours Later</h3>
        
        <p class="km-body-text">
          Seven hours and 70 kilometres later we made it to Yeoju, our next stop. I will not lie, my legs are still killing me. What is worse is that Alex is skipping around the small town with a big smile and buying apples again. I would kill him if I could move my legs fast enough to catch him.
        </p>
      </section>

      <section>
        <h3 class="km-section-title">The Final Push</h3>
        
        <p class="km-body-text">
          We are now only about 100 kilometres from Seoul. Tomorrow will be our last big push, taking us to the edge of the city, and the morning after we will make our way to Namsan Tower, our final destination.
        </p>
        
        <p class="km-body-text">
          After that, I plan to go straight to the nearest place that sells chicken, beer, and soju, and drink until there is no pain in my legs.
        </p>
      </section>

      <!-- Photo Gallery Section -->
      <section>
        <h3 class="km-section-title">Photos from Day 9</h3>
        <PhotoSwipeGallery 
          {images} 
          title="Day 9: Alex Takes the Lead to Yeoju"
          galleryId="day-09-gallery"
        />
      </section>

    </div>

    <!-- Day Navigation -->
    <div class="mt-12">
      <DayNavigation 
        previousDay={{
          url: '/trips/korea-2025/day-08-tape-fixes-all',
          label: 'Day 8'
        }}
        nextDay={{
          url: '/trips/korea-2025/day-10-through-pain-misery-and-blood',
          label: 'Day 10'
        }}
      />
    </div>

  </div>
</div>