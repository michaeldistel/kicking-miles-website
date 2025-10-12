<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const images = [
    {
      src: '/images/korea-2025/day-minus-5/photo-02-1x1.webp',
      alt: 'Team preparation for Korea 2025 adventure',
      width: 1279,
      height: 1280,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-minus-5/photo-03-16x9.webp',
      alt: 'Pre-departure planning and preparation',
      width: 1280,
      height: 598,
      ratio: '16x9'
    },
    {
      src: '/images/korea-2025/day-minus-5/contact-card-korea-16x9.webp',
      alt: 'Korea contact card for the adventure',
      width: 1050,
      height: 600,
      ratio: '16x9'
    }
  ];
</script>

<svelte:head>
  <title>Day -5: Flags are done, ready to go - Korea 2025 | Kicking Miles</title>
  <meta name="description" content="Five days before departing for our 560km kick scooter journey from Busan to Seoul. Flags are complete and final preparations are underway." />
  <meta property="og:title" content="Day -5: Flags are done, ready to go - Korea 2025 | Kicking Miles" />
  <meta property="og:description" content="Five days before departing for our 560km kick scooter journey from Busan to Seoul. Flags are complete and final preparations are underway." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kickingmiles.com/trips/korea-2025/day-minus-5-pre-departure" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Day -5: Flags are done, ready to go - Korea 2025 | Kicking Miles" />
  <meta name="twitter:description" content="Five days before departing for our 560km kick scooter journey from Busan to Seoul. Flags are complete and final preparations are underway." />
  <link rel="canonical" href="https://kickingmiles.com/trips/korea-2025/day-minus-5-pre-departure" />
</svelte:head>

<!-- Section: Day -5 Pre-departure -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/korea-2025"
      backText="Korea 2025"
      title="Day -5: Flags are done, ready to go"
      subtitle="October 9, 2025"
      description="Five days before the journey begins"
    />

    <!-- Team Photo -->
    <div class="mt-8 mb-8">
      <img 
        src="/images/korea-2025/day-minus-5/photo-01-1x1.webp" 
        alt="Alex and Michael preparing for the Korea 2025 adventure"
        class="w-full max-w-md mx-auto rounded-lg"
        width="1279"
        height="1280"
      />
    </div>

    <!-- Content sections -->
    <div class="km-prose-content space-y-8 mt-12">
      
      <section>
        <p class="km-lead-text">
          Alex and I are getting ready for our next journey, this time in Korea. Starting on 14 October, we will be kick scooting from Busan → Seoul, following the rivers, paths and small towns that connect the two cities.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          The scooters are packed, the equipment is ready, and we have made our own flags by hand. They read "Busan → Seoul" (부산 → 서울) in Korean. The countdown has started.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          We fly out from Singapore on the 12th, land in Seoul early the next morning, then take the train straight down to Busan, hope we don't see any zombies along the way. Our first night will be near the Nakdonggang River (낙동강), close to the start of the path north.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          I am really looking forward to being back on the scooter again. There is a rhythm that comes from moving under your own power. The sound of the wheels, the steady push of each kick, the small moments between effort and rest. After a while it becomes almost meditative. The road stretches out ahead, and thoughts start to drift in and out without any pressure to hold onto them. It is the kind of quiet that is hard to find in daily life.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          I am also looking forward to the food. Korea has this way of feeding both body and spirit at the same time. Cold noodles after a long day, rice and kimchi in a roadside diner, a cup of hot coffee a rest stop. Simple things that taste better when you have worked for them.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          The landscape itself is part of the draw. The open farmland, the small towns, the rivers and the hills that seem endless. Travelling long distances like this strips life down to what really matters. You wake, you move, you eat, you rest. It clears the head and resets the rhythm of life in a way that no holiday or break ever quite does.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          It will also be good to have Alex along again. We did our first trip together in <a href="/trips/japan-2023" class="text-km-primary hover:text-km-dark underline">Japan in 2023</a>, and it was a memorable one. He brings a steady energy and determination that keeps things moving forward. When the weather turns or the road gets steep, he just keeps going without complaint. It helps to have someone like that beside you. I will need to work hard to keep up with him, but that is part of the fun.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          혹시 이 글을 보고 있는 한국 분들이 있다면, 여행하면서 한국의 멋진 풍경과 사람들을 만나는 게 정말 기대돼요.
          길에서 저나 Alex를 보게 되면, 편하게 인사해 주세요.
          제가 번역기를 사용하고 있어서 문장에 어색한 부분이 있을 수도 있어요. 그래도 너그럽게 봐주세요.
        </p>
      </section>

      <section>
        <ContentBox type="highlight">
          <p>You can follow the trip here: <a href="/trips/korea-2025" class="text-km-primary hover:text-km-dark underline">kickingmiles.com/trips/korea-2025</a></p>
        </ContentBox>
      </section>

    </div>

    <!-- Photo Gallery -->
    <div class="mt-12">
      <h2 class="km-subsection-title mb-6">Pre-departure preparations</h2>
      <PhotoSwipeGallery 
        {images} 
        title="Day -5 preparations" 
        galleryId="day-minus-5-gallery" 
      />
    </div>

    <!-- Day Navigation -->
    <div class="mt-12">
      <DayNavigation 
        previousDay={null}
        nextDay={{
          url: '/trips/korea-2025/day-minus-4-last-minute-prep',
          label: 'Day -4'
        }}
      />
    </div>

  </div>
</div>