<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: '40km', label: 'Distance' },
    { value: '7 hours', label: 'Scooting time' },
    { value: '655km', label: 'Progress' },
    { value: '17°C', label: 'Temperature' }
  ];

  const photos = [
    { src: '/images/japan-2017/day-14/day14-photo-01.webp', alt: 'Competing with tourists for deer attention' },
    { src: '/images/japan-2017/day-14/day14-photo-02.webp', alt: 'The legendary bowing deer of Nara Park' },
    { src: '/images/japan-2017/day-14/day14-photo-03.webp', alt: 'Getting our moment of bowing glory on camera' },
    { src: '/images/japan-2017/day-14/day14-photo-04.webp', alt: 'Mountainous regions of Mie province' },
    { src: '/images/japan-2017/day-14/day14-photo-05.webp', alt: 'Steep inclines testing quads and calves' },
    { src: '/images/japan-2017/day-14/day14-photo-06.webp', alt: 'Arriving in Iga, land of ninjas' }
  ];

  const featuredImages = [
    { src: '/images/japan-2017/day-14/day14-route-map.webp', alt: 'Route map from Nara to Iga through challenging mountain passes' },
    { src: '/images/japan-2017/day-14/day14-updates.webp', alt: 'Legendary bowing deer encounters and ninja territory discovery in Nara' }
  ];

  const weather = {
    title: 'Weather Report',
    description: '17 degrees Celsius, wet and muggy conditions. Mountain terrain making progress challenging.'
  };
</script>

<svelte:head>
  <title>Day 14 - The Legendary Bowing Deer | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 14 of our Japan kickboard adventure: Encountering Nara's famous bowing deer and exploring ancient temples where legend meets reality." />
</svelte:head>

<!-- Day 14: Nara to Iga -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 14"
      date="8 April 2017"
      title="Nara to Iga"
      progress="655 kilometres of 1,800"
      subtitle="The legendary bowing deer"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-8">
      <section>
        <!-- Section: Mountain challenge -->
        <ContentBox type="highlight">
          Wet and muggy today. We made our way past Nara park and through the mountainous regions 
          of Mie to head to Iga.
        </ContentBox>

        <p class="km-body-text">
          DAY 14 of our scooting adventures! Nara to Iga - 655km of our 1,800km journey.
        </p>

        <p class="km-body-text">
          From Nara where the legendary bowing deer reside, to the land of ninjas in Iga, we passed 
          through so many slopes our quads and calves were aching badly by the time we got to our hotel. 
          It was only when we hit Iga that we realised this town is known for its ninja history.
        </p>
      </section>

      <section>
        <!-- Section: Ninja territory -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Land of the ninjas</h3>
        
        <p class="km-body-text">
          According to Wikipedia, "The remoteness and inaccessibility of the surrounding mountains 
          may have had a role in the ninja's secretive development. Historical documents regarding 
          the ninja's origins in these mountainous regions are considered generally correct."
        </p>

        <p class="km-body-text">
          And no wonder we took so many hours for such a short distance. The roads were on an incline 
          and we were constantly going through the mountains. We made it anyway!
        </p>

        <p class="km-body-text">
          Now we understand why ninjas chose this terrain for their training. The mountains that 
          challenged us today have been testing travellers for centuries.
        </p>
      </section>

      <section>
        <!-- Section: Bowing deer -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Anthropomorphism at its finest</h3>
        
        <p class="km-body-text">
          But today cannot be completed without talking about the bowing deer at Nara. We thought we 
          were the only foolish tourists bowing to random herbivores but we found out we had to fight 
          for the deer's attention from other throngs of fellow foolish tourists, so we could get our 
          moment of bowing glory on the camera.
        </p>

        <ContentBox type="quote">
          The lengths humans would go for anthropomorphism!
        </ContentBox>

        <p class="km-body-text">
          There is something delightfully absurd about queuing up to bow to deer, yet also something 
          deeply human about our desire to connect with other creatures through familiar gestures. 
          Perhaps the deer understand more than we give them credit for.
        </p>
      </section>
    </div>

    <!-- Image galleries -->
    <div class="space-y-8 mb-8">
      <div>
        <ImageGallery title="Day Fourteen Journey" routeImages={featuredImages} />
      </div>
      <div>
        <ImageGallery photoImages={photos} galleryType="compact" />
      </div>
    </div>

    <!-- Day navigation -->
  <!-- Day navigation -->
  <DayNavigation 
    currentDay={14}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017/day-13-let-no-war-banner-fall", label: "Day 13" }}
    nextDay={{ url: "/trips/japan-2017/day-15-food-poisoning", label: "Day 15" }}
  />

  </div>
</div>
