<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  // Photo gallery setup
  /** @type {Array<{src: string, alt: string, width: number, height: number, ratio: string}>} */
  const images = [
    {
      src: '/images/korea-2025/day-01/photo-01-1x1.webp',
      alt: 'Early morning scooter setup with gear and maps ready for the first day of the journey',
      width: 1681,
      height: 1681,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-01/photo-02-3x4.webp',
      alt: 'Rain starting to fall during the morning ride through Busan residential areas',
      width: 1337,
      height: 1784,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-01/photo-03-3x4.webp',
      alt: 'Nakdong River path with overcast skies and gentle rain beginning',
      width: 1024,
      height: 1367,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-01/photo-04-3x4.webp',
      alt: 'Alex taking shelter from the rain under a bridge while checking the route',
      width: 1171,
      height: 1563,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-01/photo-05-3x4.webp',
      alt: 'Michael and Alex posing with local Korean woman who offered encouragement in the rain',
      width: 1664,
      height: 2220,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-01/photo-06-3x4.webp',
      alt: 'Wet scooter wheels and path showing the challenging rainy conditions of day one',
      width: 1154,
      height: 1540,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-01/photo-07-4x3.webp',
      alt: 'River path view during brief break in the rain with city skyline in distance',
      width: 1258,
      height: 1537,
      ratio: '4x3'
    },
    {
      src: '/images/korea-2025/day-01/photo-08-4x3.webp',
      alt: 'Clear pathway along Nakdong River showing the route towards Gimhae',
      width: 1440,
      height: 1073,
      ratio: '4x3'
    },
    {
      src: '/images/korea-2025/day-01/photo-09-3x4.webp',
      alt: 'End of day shelter with scooters secured and tired but accomplished riders',
      width: 750,
      height: 1245,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-01/photo-10-3x4.webp',
      alt: 'Alex and Michael taking a break during the heavy rain under shelter',
      width: 960,
      height: 1280,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-01/photo-11-3x4.webp',
      alt: 'Soaked scooters and gear after refusing to put rain jackets back on',
      width: 960,
      height: 1280,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-01/photo-12-3x4.webp',
      alt: 'Local Korean woman who offered encouragement and shared stories during the rain',
      width: 960,
      height: 1280,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-01/photo-13-3x4.webp',
      alt: 'Coffee shop interior where they found refuge and warmth from the cold rain',
      width: 960,
      height: 1280,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-01/photo-14-3x4.webp',
      alt: 'The kind café owner who asked why they do this journey and served hot drinks',
      width: 960,
      height: 1280,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-01/photo-15-3x4.webp',
      alt: 'Hotel room with the amazing clothes drying machine that saved the day',
      width: 958,
      height: 1280,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-01/photo-16-3x4.webp',
      alt: 'Wet clothes and gear being prepared for the hotel drying machine',
      width: 960,
      height: 1280,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-01/photo-17-1x1.webp',
      alt: 'Reflection on the stubborn pride and mental challenges of the journey',
      width: 960,
      height: 960,
      ratio: '1x1'
    }
  ];

  const stats = [
    { value: '22km', label: 'Distance Today' },
    { value: '6:30am', label: 'Start Time' },
    { value: 'Heavy', label: 'Rain Level' },
    { value: 'Nakdong River', label: 'Path Started' },
    { value: '1/10', label: 'Day Progress' },
    { value: '22/560km', label: 'Total Progress' }
  ];
</script>

<svelte:head>
  <title>Day 1: The Fight of Stubbornness - Korea 2025 | Kicking Miles</title>
  <meta name="description" content="Alex shares Day 1 of the Korea journey - stubborn pride meets pouring rain, meeting kind locals, and discovering what this adventure is really about." />
  <meta property="og:title" content="Day 1: The Fight of Stubbornness - Korea 2025 | Kicking Miles" />
  <meta property="og:description" content="Alex shares Day 1 of the Korea journey - stubborn pride meets pouring rain, meeting kind locals, and discovering what this adventure is really about." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kickingmiles.com/trips/korea-2025/day-01-starting-off-with-rain" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Day 1: The Fight of Stubbornness - Korea 2025 | Kicking Miles" />
  <meta name="twitter:description" content="Alex shares Day 1 of the Korea journey - stubborn pride meets pouring rain, meeting kind locals, and discovering what this adventure is really about." />
  <link rel="canonical" href="https://kickingmiles.com/trips/korea-2025/day-01-starting-off-with-rain" />
</svelte:head>

<!-- Section: Day 1 Starting Off with Rain -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/korea-2025"
      backText="Korea 2025"
      title="Day 1: The Fight of Stubbornness"
      subtitle="October 14, 2025"
      description="When pride meets weather and coffee conquers all"
    />

    <!-- Stats Box -->
    <div class="mt-8">
      <StatsBox {stats} />
    </div>

    <!-- Content sections -->
    <div class="km-prose-content space-y-8 mt-12">
      
      <section>
        <p class="km-lead-text">
          Hi there! Alex here and let me share what Day 1 had in store for us.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Every adventure begins in the morning, and ours started under cloudy skies with a light drizzle. Well, we expected that, so we had our rain jackets ready. Nothing could shake our confidence… or so we thought.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          The first hour was actually great, warm, smooth, and full of curious locals watching us roll by. But soon, one simple thought crept into our heads:
        </p>
      </section>

      <section>
        <p class="km-body-text">
          "Why are we even wearing rain jackets? It's just a light drizzle. Two strong men can handle it."
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Of course, we took them off.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          And what could possibly go wrong?
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Right - pouring rain.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Did we stop to put the jackets back on? Ha-ha, absolutely not! We were committed. I wasn't going to be the first to give in and clearly, neither was the "old man." So we kept gliding through puddles, rain, and strong wind, water dripping from Michael's flag straight into my mouth. Two stubborn men, both soaked, both pretending it was fine.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Eventually, we stopped under a small wooden hut for a quick meal. There, we saw people casually walking on the path, aunties and uncles out for a stroll, one even barefoot! He joined us in the hut and shared his life story and philosophy with us, it was such a random and heartwarming moment.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Later, we reached the next town and ducked into the first café we saw, desperate for something hot to drink. It turned out to be cozy and welcoming, and the guy who served us was incredibly kind. Like many others, he asked:
        </p>
      </section>

      <section>
        <p class="km-body-text">
          "Why? Why do you do this?"
        </p>
      </section>

      <section>
        <p class="km-body-text">
          The answer is simple: because without it, we'd never meet people like him. We'd never see the quiet life of small towns or hear a stranger's story over rain and coffee.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          And here's the real revelation, scooting isn't physically hard. You don't need to be fast; you can take breaks. The real challenge is mental. Can you keep going when you're cold, wet, hungry, or unsure where you'll sleep that night? Can you keep pushing through the discomfort?
        </p>
      </section>

      <section>
        <p class="km-body-text">
          That's what this journey is really about.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          For now, I'm relaxing in the hotel room, watching our clothes dry in the coolest little drying machine ever and wondering what surprises Day 2 will bring.
        </p>
      </section>

    </div>

    <!-- Photo Gallery -->
    {#if images.length > 0}
    <div class="mt-12">
      <h2 class="km-subsection-title mb-6">Day 1 - Starting the Journey</h2>
      <PhotoSwipeGallery 
        {images} 
        title="Day 1 starting off with rain" 
        galleryId="day-01-gallery" 
      />
    </div>
    {/if}

    <!-- Day Navigation -->
    <div class="mt-12">
      <DayNavigation 
        previousDay={{
          url: '/trips/korea-2025/day-minus-1-arrival-seoul-busan',
          label: 'Day -1'
        }}
        nextDay={{
          url: '/trips/korea-2025/day-02-old-vs-young',
          label: 'Day 2'
        }}
      />
    </div>

  </div>
</div>