<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';

  const stats = [
    { value: '33km', label: 'Distance Today' },
    { value: '560/560km', label: 'Total Distance' },
    { value: 'October 24', label: 'Date' },
    { value: '11/11', label: 'Day Progress' },
    { value: 'COMPLETE', label: 'Mission Status' }
  ];

  // Photo gallery - Day 11 mission completion photos
  const images = [
    { src: '/images/korea-2025/day-11/photo-01-1x1.webp', alt: 'Reaching Namsan Tower - mission completed', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-11/photo-02-3x4.webp', alt: 'Standing at Namsan Tower after completing the journey', width: 959, height: 1280, ratio: '3x4' },
    { src: '/images/korea-2025/day-11/photo-03-3x4.webp', alt: 'Victory at the heart of Seoul', width: 598, height: 1280, ratio: '3x4' },
    { src: '/images/korea-2025/day-11/photo-04-1x1.webp', alt: 'Looking out over Seoul from Namsan Tower', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-11/photo-05-1x1.webp', alt: 'The surreal feeling of completion', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-11/photo-06-1x1.webp', alt: 'Grateful at the end of an amazing journey', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-11/photo-07-3x4.webp', alt: 'Final portrait at Namsan Tower', width: 960, height: 1280, ratio: '3x4' },
    { src: '/images/korea-2025/day-11/photo-08-3x4.webp', alt: 'Celebrating the completion of 560km journey', width: 960, height: 1280, ratio: '3x4' },
    { src: '/images/korea-2025/day-11/photo-09-3x4.webp', alt: 'Thank you Korea - mission accomplished', width: 960, height: 1280, ratio: '3x4' }
  ];
</script>

<svelte:head>
  <title>Day 11: Mission Completed - Korea 2025 | Kicking Miles</title>
  <meta name="description" content="Michael reaches Namsan Tower completing the epic 560km journey from Busan to Seoul. A reflection on gratitude, accomplishment, and the incredible adventure through Korea." />
  <meta property="og:title" content="Day 11: Mission Completed - Korea 2025 | Kicking Miles" />
  <meta property="og:description" content="Michael reaches Namsan Tower completing the epic 560km journey from Busan to Seoul. A reflection on gratitude, accomplishment, and the incredible adventure through Korea." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kickingmiles.com/trips/korea-2025/day-11-mission-completed" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Day 11: Mission Completed - Korea 2025 | Kicking Miles" />
  <meta name="twitter:description" content="Michael reaches Namsan Tower completing the epic 560km journey from Busan to Seoul. A reflection on gratitude, accomplishment, and the incredible adventure through Korea." />
  <link rel="canonical" href="https://kickingmiles.com/trips/korea-2025/day-11-mission-completed" />
</svelte:head>

<!-- Section: Day 11 Mission Completion -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/korea-2025"
      backText="Korea 2025"
      title="Day 11: Mission Completed"
      subtitle="October 24, 2025"
    />

    <!-- Stats Box -->
    <div class="mt-8">
      <StatsBox {stats} />
    </div>

    <!-- Content sections -->
    <div class="km-prose-content space-y-8 mt-12">
      
      <section>
        <p class="km-lead-text">
          We have reached Namsan Tower at the heart of Seoul.
        </p>
        
        <p class="km-body-text">
          It has been an amazing journey travelling from Busan to Seoul, over 550 kilometres through mountain passes and long days on the road, some lasting more than ten hours of kicking.
        </p>
        
        <p class="km-body-text">
          Standing here, looking out over Seoul, it feels a bit surreal. Knowing that tomorrow I do not need to wake up early, that my legs can finally rest, and that public transport is once again an option, brings a strange mix of relief and pride.
        </p>
        
        <p class="km-body-text">
          For now, I am just grateful. Grateful to everyone who followed along, sent messages, and supported us from afar. Grateful to Alex for being the best travel partner anyone could ask for. And grateful to Korea for the kindness, smiles, food, and random people who stopped to cheer us on.
        </p>
        
        <p class="km-body-text">
          It has been tough, cold, wet, and at times painful, but it was worth every kilometre.
        </p>
        
        <p class="km-body-text">
          한국 감사합니다 사랑해요 🇰🇷❤️<br>
          (Thank you Korea, we love you.)
        </p>
      </section>

      <!-- Photo Gallery Section -->
      <section>
        <PhotoSwipeGallery 
          {images} 
          title="Mission Completed at Namsan Tower"
          galleryId="day-11-gallery"
        />
      </section>

    </div>

    <!-- Day Navigation -->
    <div class="mt-12">
      <DayNavigation 
        previousDay={{
          url: '/trips/korea-2025/day-10-through-pain-misery-and-blood',
          label: 'Day 10'
        }}
        nextDay={null}
      />
    </div>

  </div>
</div>