<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  // Photo gallery setup
  /** @type {Array<{src: string, alt: string, width: number, height: number, ratio: string}>} */
  const images = [
    {
      src: '/images/korea-2025/day-02/photo-01-3x4.webp',
      alt: 'Clear blue sky welcoming them over the city at the start of Day 2',
      width: 597,
      height: 1280,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-02/photo-02-4x3.webp',
      alt: 'The Nakdong River path early in the morning with determination to make up lost distance',
      width: 1280,
      height: 959,
      ratio: '4x3'
    },
    {
      src: '/images/korea-2025/day-02/photo-03-1x1.webp',
      alt: 'Alex gliding effortlessly on his new scooter while Michael struggles with his aging equipment',
      width: 1279,
      height: 1280,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-02/photo-04-3x4.webp',
      alt: 'The contrast between Alex\'s machine-like fitness and Michael\'s aging reality',
      width: 960,
      height: 1280,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-02/photo-05-1x1.webp',
      alt: 'Steady scooting with heads down, focused on covering the 70km distance',
      width: 1280,
      height: 1279,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-02/photo-06-1x1.webp',
      alt: 'Meeting the young Korean guy walking from Seoul to Busan with his flag of signatures',
      width: 1279,
      height: 1280,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-02/photo-07-1x1.webp',
      alt: 'The Korean walker carrying his small Korean flag covered with signatures from his journey',
      width: 1279,
      height: 1280,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-02/photo-08-1x1.webp',
      alt: 'Conversation with the friendly walker who made their own journey seem less crazy',
      width: 1279,
      height: 1280,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-02/photo-09-3x4.webp',
      alt: 'Arriving in town exhausted and heading straight for the first place serving food',
      width: 959,
      height: 1280,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-02/photo-10-1x1.webp',
      alt: 'Simple Korean dishes like bibimbap that turned out surprisingly good',
      width: 1279,
      height: 1280,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-02/photo-11-3x4.webp',
      alt: 'Michael remembering to photograph their meal for once before hunger took over',
      width: 960,
      height: 1280,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-02/photo-12-3x4.webp',
      alt: 'The random food stop that served surprisingly good bibimbap and other simple dishes',
      width: 960,
      height: 1280,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-02/photo-13-3x4.webp',
      alt: 'Reflecting on missing out on seafood and the exhaustion after 70km in seven and a half hours',
      width: 960,
      height: 1280,
      ratio: '3x4'
    }
  ];

  const stats = [
    { value: '67km', label: 'Distance Today' },
    { value: '7.5hrs', label: 'Time Scooting' },
    { value: 'Clear Blue', label: 'Sky Conditions' },
    { value: 'Nakdong River', label: 'Path Continued' },
    { value: '2/10', label: 'Day Progress' },
    { value: '89/560km', label: 'Total Progress' }
  ];
</script>

<svelte:head>
  <title>Day 2: Old vs Young - Korea 2025 | Kicking Miles</title>
  <meta name="description" content="Michael reflects on age catching up as they cover 70km to make up lost distance. Clear skies, aging equipment, and the contrast between youth and experience." />
  <meta property="og:title" content="Day 2: Old vs Young - Korea 2025 | Kicking Miles" />
  <meta property="og:description" content="Michael reflects on age catching up as they cover 70km to make up lost distance. Clear skies, aging equipment, and the contrast between youth and experience." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kickingmiles.com/trips/korea-2025/day-02-old-vs-young" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Day 2: Old vs Young - Korea 2025 | Kicking Miles" />
  <meta name="twitter:description" content="Michael reflects on age catching up as they cover 70km to make up lost distance. Clear skies, aging equipment, and the contrast between youth and experience." />
  <link rel="canonical" href="https://kickingmiles.com/trips/korea-2025/day-02-old-vs-young" />
</svelte:head>

<!-- Section: Day 2 Old vs Young -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/korea-2025"
      backText="Korea 2025"
      title="Day 2: Old vs Young"
      subtitle="October 15, 2025"
      description="Making up distance and accepting reality"
    />

    <!-- Stats Box -->
    <div class="mt-8">
      <StatsBox {stats} />
    </div>

    <!-- Content sections -->
    <div class="km-prose-content space-y-8 mt-12">
      
      <section>
        <p class="km-lead-text">
          Michael here. It looks like Alex and I will be taking turns writing the daily posts.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          After a good night's sleep, we got up early, excited to start the day. A clear blue sky welcomed us over the city.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Today there was only one goal, to make up the distance we lost yesterday. So we put our heads down, turned on some music, and hit the path again with the Nakdong River guiding us forward. In the end we covered 67 km in about seven and a half hours. A solid day.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          After an hour or so, something became clear to me while watching Alex glide along on his new scooter. Age was catching up to mine. Each kick and push felt heavier than before, like someone had turned up the resistance on a gym bike. I could not figure it out, but something felt off, maybe the bearings, maybe just time. Either way, it is not something I can fix on this trip.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          If I am honest, it is not only my scooter that is getting older. It is me too. Every kick aches a little more in the hips, and recovery takes a bit longer. I am not what I was nearly ten years ago when I was in Japan in 2017. What makes it worse is that Alex is a machine. For those who do not know him, he goes to the gym almost every day, sometimes twice, sometimes three or four times. CrossFit, Muay Thai, Brazilian jiu-jitsu, you name it. Watching him cruise along so easily is humbling to say the least.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          To be fair, he means well. He keeps offering to carry my gear, swap scooters, or check if I am okay. But every offer lands like a small punch to the ego. As a few of my friends often remind me, I need to accept I am not as young as I once was. That is life.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          There is not much more to say about today's ride, since most of it was just steady scooting with our heads down, focused on the path. But we did meet a young Korean guy who was walking from Seoul to Busan. If you think Alex and I are crazy, imagine that. He was friendly and even carried a small Korean flag covered with signatures.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Once we reached town, we headed straight for the first place serving food, a small shop selling simple dishes like bibimbap. It turned out to be surprisingly good for such a random stop. I realised I have not been sharing many photos of our meals because by the time we arrive, I am too hungry to remember. This time I made sure not to forget.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          On a side note, I wish I liked seafood. So many places here serve it, and I feel like I am missing out.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          That is it for tonight. I am exhausted and need to be up again at 6 a.m. Tomorrow will be another long day on the road.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Once again, thank you to everyone for following along and for all the support. It really keeps us going.
        </p>
      </section>

    </div>

    <!-- Photo Gallery -->
    {#if images.length > 0}
    <div class="mt-12">
      <h2 class="km-subsection-title mb-6">Day 2 - Old vs Young</h2>
      <PhotoSwipeGallery 
        {images} 
        title="Day 2 old vs young" 
        galleryId="day-02-gallery" 
      />
    </div>
    {/if}

    <!-- Day Navigation -->
    <div class="mt-12">
      <DayNavigation 
        previousDay={{
          url: '/trips/korea-2025/day-01-starting-off-with-rain',
          label: 'Day 1'
        }}
        nextDay={{
          url: '/trips/korea-2025/day-03-life-death-recognition',
          label: 'Day 3'
        }}
      />
    </div>

  </div>
</div>