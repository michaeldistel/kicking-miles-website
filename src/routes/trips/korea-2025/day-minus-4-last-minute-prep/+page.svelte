<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const images = [
    {
      src: '/images/korea-2025/day-minus-4/flags-signed-1x1.webp',
      alt: 'Signed flags ready for the Korea adventure',
      width: 896,
      height: 888,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-minus-4/last-minute-prep-1x1.webp',
      alt: 'Last minute preparations for departure',
      width: 893,
      height: 893,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-minus-4/spotify-playlist-3x4.webp',
      alt: 'Korea 2025 Spotify playlist for the journey',
      width: 1388,
      height: 2405,
      ratio: '3x4'
    }
  ];
</script>

<svelte:head>
  <title>Day -4: Grateful for the support - Korea 2025 | Kicking Miles</title>
  <meta name="description" content="One day before flying to Korea. Thanks to everyone who signed our flags and all the support for the journey from Busan to Seoul." />
  <meta property="og:title" content="Day -4: Grateful for the support - Korea 2025 | Kicking Miles" />
  <meta property="og:description" content="One day before flying to Korea. Thanks to everyone who signed our flags and all the support for the journey from Busan to Seoul." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kickingmiles.com/trips/korea-2025/day-minus-4-last-minute-prep" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Day -4: Grateful for the support - Korea 2025 | Kicking Miles" />
  <meta name="twitter:description" content="One day before flying to Korea. Thanks to everyone who signed our flags and all the support for the journey from Busan to Seoul." />
  <link rel="canonical" href="https://kickingmiles.com/trips/korea-2025/day-minus-4-last-minute-prep" />
</svelte:head>

<!-- Section: Day -4 Last minute prep -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/korea-2025"
      backText="Korea 2025"
      title="Day -4: Grateful for the support"
      subtitle="October 10, 2025"
      description="One day before flying to Korea"
    />

    <!-- Content sections -->
    <div class="km-prose-content space-y-8 mt-12">
      
      <section>
        <p class="km-lead-text">
          Just want to say a big thanks to everyone for signing our flags and for all the support. Honestly, thanks a million.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Alex and I will guard these flags with our lives and make sure they make it all the way to Seoul. Seeing all the names and messages from friends has made this feel more real. We are not just carrying our own hopes across Korea, but a piece of everyone who believes in this journey.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Only one night left before we fly off to Korea. As usual, I have left everything to the last moment, lol. I have not started to pack, but I don't worry much about it. I'm known for just winging it and seeing what happens. No point in worrying, and besides, it's Korea - it's easy to find anything I need if I forget something.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          The reality of it is starting to hit. Tomorrow we will be on a plane. The day after that, we will be standing in Busan with our scooters, looking at the path that leads north to Seoul. All the planning and preparation comes down to that first push of the foot, that first metre of what will become 560 kilometres.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Also created a Korea 2025 Spotify playlist to keep us motivated on the road. Music always makes the kilometres feel shorter, and there is something about having the right song at the right moment that can turn a hard stretch into a memorable one. The playlist has everything from energetic tracks for the morning starts to more reflective songs for the long afternoon stretches.
        </p>
      </section>

      <section>
        <ContentBox type="highlight">
          <p>Tomorrow: Flying Singapore to Seoul to Busan. The adventure begins for real.</p>
        </ContentBox>
      </section>

    </div>

    <!-- Photo Gallery -->
    <div class="mt-12">
      <h2 class="km-subsection-title mb-6">Last minute preparations</h2>
      <PhotoSwipeGallery 
        {images} 
        title="Day -4 preparations" 
        galleryId="day-minus-4-gallery" 
      />
    </div>

    <!-- Day Navigation -->
    <div class="mt-12">
      <DayNavigation 
        previousDay={{
          url: '/trips/korea-2025/day-minus-5-pre-departure',
          label: 'Day -5'
        }}
        nextDay={null}
      />
    </div>

  </div>
</div>