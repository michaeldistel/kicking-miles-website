<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';

  const stats = [
    { value: '83km', label: 'Distance Today' },
    { value: '527/560km', label: 'Total Progress' },
    { value: 'October 23', label: 'Date' },
    { value: '10/11', label: 'Day Progress' },
    { value: '15km to Namsan Tower', label: 'Remaining' }
  ];

  // Photo gallery - Day 10 pain, misery, and blood photos
  const images = [
    { src: '/images/korea-2025/day-10/photo-01-1x1.webp', alt: 'Day 10 journey pushing through pain towards Seoul', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-10/photo-02-1x1.webp', alt: 'Morning departure on the final push to Seoul', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-10/photo-03-1x1.webp', alt: 'Alex and Michael pushing through the pain', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-10/photo-04-1x1.webp', alt: 'The relentless journey towards Seoul', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-10/photo-05-1x1.webp', alt: 'Fueled by caffeine and stubborn pride', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-10/photo-06-16x9.webp', alt: 'Seoul skyline finally in sight', width: 1280, height: 598, ratio: '16x9' },
    { src: '/images/korea-2025/day-10/photo-07-1x1.webp', alt: 'The final approach to Seoul', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-10/photo-08-1x1.webp', alt: 'Exhausted but spirits soaring', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-10/photo-09-3x4.webp', alt: 'Portrait of determination on Day 10', width: 598, height: 1280, ratio: '3x4' },
    { src: '/images/korea-2025/day-10/photo-10-1x1.webp', alt: 'The price of perseverance', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-10/photo-11-3x4.webp', alt: 'Final moments of Day 10 journey', width: 960, height: 1280, ratio: '3x4' }
  ];
</script>

<svelte:head>
  <title>Day 10: Through Pain, Misery, and Blood - Korea 2025 | Kicking Miles</title>
  <meta name="description" content="Alex's intense Day 10 reflection as they push through pain and exhaustion to reach Seoul's outskirts, covering 83km fueled by caffeine, stubborn pride, and the city calling them forward." />
  <meta property="og:title" content="Day 10: Through Pain, Misery, and Blood - Korea 2025 | Kicking Miles" />
  <meta property="og:description" content="Alex's intense Day 10 reflection as they push through pain and exhaustion to reach Seoul's outskirts, covering 83km fueled by caffeine, stubborn pride, and the city calling them forward." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kickingmiles.com/trips/korea-2025/day-10-through-pain-misery-and-blood" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Day 10: Through Pain, Misery, and Blood - Korea 2025 | Kicking Miles" />
  <meta name="twitter:description" content="Alex's intense Day 10 reflection as they push through pain and exhaustion to reach Seoul's outskirts, covering 83km fueled by caffeine, stubborn pride, and the city calling them forward." />
  <link rel="canonical" href="https://kickingmiles.com/trips/korea-2025/day-10-through-pain-misery-and-blood" />
</svelte:head>

<!-- Section: Day 10 Final Push -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/korea-2025"
      backText="Korea 2025"
      title="Day 10: Through Pain, Misery, and Blood"
      subtitle="October 23, 2025"
    />

    <!-- Stats Box -->
    <div class="mt-8">
      <StatsBox {stats} />
    </div>

    <!-- Content sections -->
    <div class="km-prose-content space-y-8 mt-12">
      
      <section>
        <p class="km-lead-text">
          Alex here.
        </p>
        
        <p class="km-body-text">
          Blood! Morning. So close to Seoul. So close to our friends.
        </p>
        
        <p class="km-body-text">
          We have to reach them, the mission is clear, the goal confirmed. No more excuses. Muscles are burning, joints are tearing, and the screams we held inside finally burst free. Nothing can stop us now…
        </p>
        
        <p class="km-body-text">
          Well, maybe except a 7-Eleven and a forty-minute, multi-course coffee break.
        </p>
        
        <p class="km-body-text">
          Fueled by caffeine and stubborn pride, we pushed harder than ever. Some demonic force was driving us forward, maybe it was the smell of Seoul in the air… maybe the birthplace of BLACKPINK itself calling us to glory. Whatever it was, we rode like possessed men, unstoppable, unbreakable.
        </p>
        
        <p class="km-body-text">
          And then, we made it.
        </p>
        
        <p class="km-body-text">
          Fifteen kilometres from Namsan Tower. The city skyline finally in sight.
        </p>
        
        <p class="km-body-text">
          But before I end this post: a confession.
        </p>
        
        <p class="km-body-text">
          Michael and I had a bet: who would crash first, who would spill the first blood.
        </p>
        
        <p class="km-body-text">
          For days, neither of us broke.
        </p>
        
        <p class="km-body-text">
          Until today.
        </p>
        
        <p class="km-body-text">
          Give a man a nearly broken scooter, the heaviest backpack in Korea, and a long downhill path… and fate will take its course. Michael's blood christened the bike trail, a sacrifice to the gods of perseverance.
        </p>
        
        <p class="km-body-text">
          Now we sit here, barely able to move, bones and muscles screaming, but our spirits soaring.
        </p>
        
        <p class="km-body-text">
          Because we did it.
        </p>
        
        <p class="km-body-text">
          We saw my wonderful friends.
        </p>
        
        <p class="km-body-text">
          (And yes, I hope they'll leave some likes under this post, we earned them.)
        </p>
        
        <p class="km-body-text">
          Seoul, well, we may crawl rather than ride tomorrow, but nothing will stop us from reaching that tower.
        </p>
        
        <p class="km-body-text">
          We will touch it.
        </p>
        
        <p class="km-body-text">
          We will smell it.
        </p>
        
        <p class="km-body-text">
          And yes… we might even lick it.
        </p>
      </section>

      <!-- Photo Gallery Section -->
      <section>
        <PhotoSwipeGallery 
          {images} 
          title="The Final Push Through Pain"
          galleryId="day-10-gallery"
        />
      </section>

    </div>

    <!-- Day Navigation -->
    <div class="mt-12">
      <DayNavigation 
        previousDay={{
          url: '/trips/korea-2025/day-09-leader-alex',
          label: 'Day 9'
        }}
        nextDay={{
          url: '/trips/korea-2025/day-11-mission-completed',
          label: 'Day 11'
        }}
      />
    </div>

  </div>
</div>