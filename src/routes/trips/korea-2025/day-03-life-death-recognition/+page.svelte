<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  // Photo gallery setup
  /** @type {Array<{src: string, alt: string, width: number, height: number, ratio: string}>} */
  const images = [
    {
      src: '/images/korea-2025/day-03/photo-01-1x1.webp',
      alt: 'Morning start before the rain with determination to cover 60-90km',
      width: 1868,
      height: 1870,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-03/photo-02-3x4.webp',
      alt: 'Highway shortcut with trucks flying by - two crazy Ang Mohs fighting for survival',
      width: 1868,
      height: 2493,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-03/photo-03-1x1.webp',
      alt: 'Kick-scooting uphill on bumpy road with no shoulder - praying to every god',
      width: 1868,
      height: 1870,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-03/photo-04-3x4.webp',
      alt: 'The moment when a stranger stopped to give rice cake and apple',
      width: 1868,
      height: 2493,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-03/photo-05-4x3.webp',
      alt: 'Michael\'s pure joy face when biting into that perfect Korean apple',
      width: 4000,
      height: 3000,
      ratio: '4x3'
    },
    {
      src: '/images/korea-2025/day-03/photo-06-1x1.webp',
      alt: 'Getting recognized by someone from another city - our craziness makes people remember us',
      width: 1868,
      height: 1870,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-03/photo-07-3x4.webp',
      alt: 'Back on the bike trail where cheerful uncles and aunties play Park Golf',
      width: 1868,
      height: 2493,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-03/photo-08-1x1.webp',
      alt: 'Park Golf (파크골프) players smiling, waving, and shouting 화이팅 (you can do it)',
      width: 1280,
      height: 1280,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-03/photo-09-1x1.webp',
      alt: 'Cheerful locals encouraging them through pain, rain, and wrong turns',
      width: 1280,
      height: 1280,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-03/photo-10-1x1.webp',
      alt: 'Michael showing his iron will and never-quit spirit on the trail',
      width: 1280,
      height: 1280,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-03/photo-11-1x1.webp',
      alt: 'Alex appreciating Michael as the heart and soul of the trip',
      width: 1280,
      height: 1280,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-03/photo-12-1x1.webp',
      alt: 'The strength that isn\'t in legs but in spirit - pushing everyone to be their best',
      width: 1280,
      height: 1280,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-03/photo-13-1x1.webp',
      alt: 'Alex\'s promise to name his third child after Michael (education fees included)',
      width: 1280,
      height: 1280,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-03/photo-14-1x1.webp',
      alt: 'End of Day 3 - life, death, and recognition on the Korean trails',
      width: 1280,
      height: 1280,
      ratio: '1x1'
    }
  ];

  const stats = [
    { value: '65km', label: 'Distance Today' },
    { value: '8.5hrs', label: 'Time Scooting' },
    { value: 'Highway + Trail', label: 'Route Taken' },
    { value: 'Rain Delays', label: 'Challenge' },
    { value: '3/10', label: 'Day Progress' },
    { value: '154/560km', label: 'Total Progress' }
  ];
</script>

<svelte:head>
  <title>Day 3: Life, Death, and Recognition - Korea 2025 | Kicking Miles</title>
  <meta name="description" content="Alex and Michael take highway shortcuts to beat rain delays, receive unexpected kindness from strangers, and get recognized by locals on their Korean adventure." />
  <meta property="og:title" content="Day 3: Life, Death, and Recognition - Korea 2025 | Kicking Miles" />
  <meta property="og:description" content="Alex and Michael take highway shortcuts to beat rain delays, receive unexpected kindness from strangers, and get recognized by locals on their Korean adventure." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kickingmiles.com/trips/korea-2025/day-03-life-death-recognition" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Day 3: Life, Death, and Recognition - Korea 2025 | Kicking Miles" />
  <meta name="twitter:description" content="Alex and Michael take highway shortcuts to beat rain delays, receive unexpected kindness from strangers, and get recognized by locals on their Korean adventure." />
  <link rel="canonical" href="https://kickingmiles.com/trips/korea-2025/day-03-life-death-recognition" />
</svelte:head>

<!-- Section: Day 3 Life, Death, and Recognition -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/korea-2025"
      backText="Korea 2025"
      title="Day 3: Life, Death, and Recognition"
      subtitle="October 16, 2025"
      description="Highway shortcuts, unexpected kindness, and local fame"
    />

    <!-- Stats Box -->
    <div class="mt-8">
      <StatsBox {stats} />
    </div>

    <!-- Content sections -->
    <div class="km-prose-content space-y-8 mt-12">
      
      <section>
        <p class="km-lead-text">
          Michael here: Today is Alex's turn to post. What he didn't think about is that since I'm the one posting to Instagram and the website, I can add interjections, corrections, and quietly edit out anything I don't like. :)
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Hey hey, dear followers! (And if you're not one yet, go on, smash that follow and like button!)
        </p>
      </section>

      <section>
        <p class="km-body-text">
          <strong>Michael:</strong> I told him not to write that line, but here we are.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Today's story? Rain. Again. But this time we were smarter. We waited for it to stop before kicking off. Brilliant plan… except we lost hours and had 60 to 90 km to cover before dark. So what did we do? Took a shortcut, the highway.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Imagine kick-scooting uphill on a bumpy road with trucks flying by and no shoulder to stand on. That's when you start praying to every god you know. Two crazy "Ang Mohs" fighting for survival.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          But that madness paid off: one guy stopped just to give us rice cake and an apple. You should've seen Michael's face when he bit into that apple, pure joy! Another recognized us from another city. That's when we realized our craziness makes people remember us.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          <strong>Michael:</strong> The apple really was that good though, I honestly wish Singapore sold good apples like this.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Eventually, we got back on the bike trail where cheerful uncles and aunties were playing Park Golf (파크골프). Everyone smiled, waved, and shouted "화이팅!" which means "you can do it." And we did, through pain, rain, and wrong turns (which we'll never admit).
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Before I end, I need to say this:<br>
          Michael, you're a man of iron will. You never quit, never complain, and push everyone to be their best. You're the reason we keep going, the heart and soul of this trip. Maybe you can't scoot as fast as before, but your strength isn't in your legs, it's in your spirit.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          <strong>Michael:</strong> Thanks for the sweet words, but not quite true. I have been complaining the whole time!
        </p>
      </section>

      <section>
        <p class="km-body-text">
          And yes… I'm still naming my third child after you.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          <strong>Michael:</strong> Only because I promised to pay for their education! lol
        </p>
      </section>

    </div>

    <!-- Photo Gallery -->
    {#if images.length > 0}
    <div class="mt-12">
      <h2 class="km-subsection-title mb-6">Day 3 - Life, Death, and Recognition</h2>
      <PhotoSwipeGallery 
        {images} 
        title="Day 3 life, death, and recognition" 
        galleryId="day-03-gallery" 
      />
    </div>
    {/if}

    <!-- Day Navigation -->
    <div class="mt-12">
      <DayNavigation 
        previousDay={{
          url: '/trips/korea-2025/day-02-old-vs-young',
          label: 'Day 2'
        }}
        nextDay={{
          url: '/trips/korea-2025/day-04-rest-day-daegu',
          label: 'Day 4'
        }}
      />
    </div>

  </div>
</div>