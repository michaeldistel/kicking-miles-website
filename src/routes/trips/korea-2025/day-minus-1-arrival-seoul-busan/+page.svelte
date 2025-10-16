<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const images = [
    {
      src: '/images/korea-2025/day-minus-1/photo-01-3x4.webp',
      alt: 'Seoul Station food court with view of Seoul streets',
      width: 598,
      height: 1280,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-minus-1/photo-02-3x4.webp',
      alt: 'Jump seat on KTX train from Seoul to Busan',
      width: 598,
      height: 1280,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-minus-1/photo-03-3x4.webp',
      alt: 'Korean countryside viewed from KTX train window at 270 km/h',
      width: 598,
      height: 1280,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-minus-1/photo-04-3x4.webp',
      alt: 'Kind Korean man helping with directions at Busan park',
      width: 597,
      height: 1280,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-minus-1/photo-05-1x1.webp',
      alt: 'Bare-feet walking park in Busan with red earth circuit',
      width: 1279,
      height: 1280,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-minus-1/photo-06-3x4.webp',
      alt: 'Meal at Mum\'s Touch Korean fried chicken restaurant',
      width: 598,
      height: 1280,
      ratio: '3x4'
    }
  ];

  const stats = [
    { value: '30km', label: 'Distance Scooted' },
    { value: '4hr', label: 'Total Time' },
    { value: '270km/h', label: 'KTX Speed' },
    { value: '3hr', label: 'Seoul → Busan' },
    { value: '21km', label: 'To Hotel' },
    { value: '$36', label: 'Hotel Cost' }
  ];
</script>

<svelte:head>
  <title>Day -1: Arrival in Seoul and journey to Busan - Korea 2025 | Kicking Miles</title>
  <meta name="description" content="Landing in Seoul, catching the KTX to Busan, first scoot in Korea covering 30km including a helpful encounter with locals and discovering a bare-feet walking park." />
  <meta property="og:title" content="Day -1: Arrival in Seoul and journey to Busan - Korea 2025 | Kicking Miles" />
  <meta property="og:description" content="Landing in Seoul, catching the KTX to Busan, first scoot in Korea covering 30km including a helpful encounter with locals and discovering a bare-feet walking park." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kickingmiles.com/trips/korea-2025/day-minus-1-arrival-seoul-busan" />
  <meta property="og:image" content="https://kickingmiles.com/images/korea-2025/day-minus-1/photo-01-3x4.webp" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Day -1: Arrival in Seoul and journey to Busan - Korea 2025 | Kicking Miles" />
  <meta name="twitter:description" content="Landing in Seoul, catching the KTX to Busan, first scoot in Korea covering 30km including a helpful encounter with locals and discovering a bare-feet walking park." />
  <meta name="twitter:image" content="https://kickingmiles.com/images/korea-2025/day-minus-1/photo-01-3x4.webp" />
  <link rel="canonical" href="https://kickingmiles.com/trips/korea-2025/day-minus-1-arrival-seoul-busan" />
</svelte:head>

<!-- Section: Day -1 Arrival -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/korea-2025"
      backText="Korea 2025"
      title="Day -1: Arrival in Seoul and journey to Busan"
      subtitle="October 13, 2025"
      description="First day in Korea, first scoot, first kindness"
    />

    <!-- Stats Box -->
    <div class="mt-8">
      <StatsBox {stats} />
    </div>

    <!-- Content sections -->
    <div class="km-prose-content space-y-8 mt-12">
      
      <section>
        <p class="km-lead-text">
          Alex and I landed in Seoul and quickly made our way to catch the express to Seoul Station. We needed to buy tickets for the KTX to Busan and grab a quick breakfast in the food court on level 2. It has a good view of the streets of Seoul, and the food was solid and satisfying.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          After breakfast we went downstairs to buy our KTX tickets to Busan on the first available train. We managed to get discounted tickets, but sadly they were standing tickets, which meant we did not have reserved seats for the first part of the trip. I ended up using one of the jump seats, which you can see in the photo.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          The train ride gave Alex and me a bit of time apart with our own thoughts, as our seats were far from each other. For those who know us, you know we manage to argue about nearly every topic known to man, from politics to history or whatever else we happen to feel strongly about that day.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          For me, I used the time to look out the window and watch the countryside slide past at 270 km/h. The route even passed some of the locations we will be scooting through over the next ten days. It is amazing to think that the train covers the whole journey in just three hours. The rest of the time I spent walking up and down the eighteen cars of the train, just observing people living their lives, Korean boys in military uniforms, perhaps returning home from service, 할머니 and 할아버지 (Korean grandmothers and grandfathers), tourists from all over the world, office workers in shirts and ties, young couples sitting close together, and older couples looking after their children.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Once we reached Busan, we unpacked the scooters and went for a quick scoot to a local park to complete a secret mission that Alex had. On the way, we ended up on the wrong side of the road, caught between an expressway ramp and a busy four-lane road with trucks and cars. A random Korean man noticed and came over to help. Not only did he give us directions to the park, but he also guided us safely across the road, holding up his hands to stop the traffic. He was a genuinely kind person.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          When we reached the park, we realised it was a bare-feet walking park, where people walk through soft red earth. It was interesting to watch everyone slowly make their way around the circuit while Alex worked on his mission.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          After finishing there, we made our way back to the hotel, which we soon realised was on the other side of Busan, nearly 21 km away. The park was already 14 km from the station, so our small scoot around Busan ended up being more than 30 km and taking about four hours in total.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          While scooting back, we stopped for a quick meal at Mum's Touch, a fast-food chicken chain you can find all over Korea. It is nothing fancy, but it hit the spot and was surprisingly tasty.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          We had booked the hotel completely at random, last minute, while scooting to the park earlier in the day. It cost about USD 36 a night, and when we arrived I was pleasantly surprised. The room was simple and very clean, and it even had a washing machine. Good value for money and a nice way to end the day.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Now it is time to sleep. Tomorrow we plan to get up with the sun at 6:20am to officially start the journey. The real adventure begins in the morning when we head out from Busan and start making our way north towards Seoul. After today's 30 kilometres, we have a taste of what Korea has to offer. The people are kind, the food is good, and the roads are manageable. Tomorrow we begin the 560-kilometre journey in earnest.
        </p>
      </section>

    </div>

    <!-- Photo Gallery -->
    {#if images.length > 0}
    <div class="mt-12">
      <h2 class="km-subsection-title mb-6">Day -1 in Seoul and Busan</h2>
      <PhotoSwipeGallery 
        {images} 
        title="Day -1 arrival and first scoot" 
        galleryId="day-minus-1-gallery" 
      />
    </div>
    {/if}

    <!-- Day Navigation -->
    <div class="mt-12">
      <DayNavigation 
        previousDay={{
          url: '/trips/korea-2025/day-minus-2-final-hours',
          label: 'Day -2'
        }}
        nextDay={{
          url: '/trips/korea-2025/day-01-starting-off-with-rain',
          label: 'Day 1'
        }}
      />
    </div>

  </div>
</div>