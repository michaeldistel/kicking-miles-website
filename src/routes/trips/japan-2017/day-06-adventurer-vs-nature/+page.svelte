<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: '55km', label: 'Distance' },
    { value: '8 hours', label: 'Scooting time' },
    { value: '329km', label: 'Progress' },
    { value: 'Snow!', label: 'Challenge' }
  ];

  const photos = [
    { src: '/images/japan-2017/day-06/day06-photo-01.webp', alt: 'Leaving Hiroshima in the rain' },
    { src: '/images/japan-2017/day-06/day06-photo-02.webp', alt: 'Rugged up in rain protection gear' },
    { src: '/images/japan-2017/day-06/day06-photo-03.webp', alt: 'Slippery wet pavement conditions' },
    { src: '/images/japan-2017/day-06/day06-photo-04.webp', alt: 'Mountain pass challenges ahead' },
    { src: '/images/japan-2017/day-06/day06-photo-05.webp', alt: 'Cold and wet conditions testing resolve' },
    { src: '/images/japan-2017/day-06/day06-photo-06.webp', alt: 'Emergency 7-Eleven supply stop' },
    { src: '/images/japan-2017/day-06/day06-photo-07.webp', alt: 'Snow hitting in the mountain passes' },
    { src: '/images/japan-2017/day-06/day06-photo-08.webp', alt: 'Nature wins this round' }
  ];

  const featuredImages = [
    { src: '/images/japan-2017/day-06/day06-route-map.webp', alt: 'Route map from Hiroshima to Takehara through challenging terrain' },
    { src: '/images/japan-2017/day-06/day06-updates.webp', alt: 'Weather challenges and mountain pass struggles against nature' }
  ];

  const weather = {
    title: 'Weather Report',
    description: '8 degrees Celsius with rain turning to snow in the mountain passes. Cold, wet, and challenging conditions.'
  };
</script>

<svelte:head>
  <title>Day 06 - Adventurer vs Nature | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 06 of our Japan kickboard adventure: The classic battle between adventurer and nature unfolds with rain, snow, and challenging terrain." />
</svelte:head>

<!-- Day 06: Hiroshima to Takehara -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 06"
      date="31 March 2017"
      title="Hiroshima to Takehara"
      progress="329 kilometres of 1,800"
      subtitle="Adventurer vs Nature; who wins?"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-8">
      <section>
        <!-- Section: The reality check -->
        <ContentBox type="highlight">
          Every adventurer starts off thinking they're a hero but it doesn't take long before nature puts them back into place.
        </ContentBox>

        <p class="km-body-text">
          DAY SIX of our scooting adventures! Hiroshima to Takehara - 329km of our 1,800km journey.
        </p>

        <p class="km-body-text">
          We left Hiroshima in eager spirits despite the rain. All rugged up in our rain protection, 
          we left the warm cafe of Choco Cro behind and scooted out into the rain. It did not take long 
          before we slipped on the pavement a few times, none resulting in a fall but our scooters 
          gained an extra scratch or two.
        </p>
      </section>

      <section>
        <!-- Section: Mountain pass struggles -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Into the mountain passes</h3>
        
        <p class="km-body-text">
          Still stubborn and eager to move forwards like a strapping young buck, we persevered into 
          the mountain passes to make up for lost time. It started getting really frigid and wet and 
          we had to exchange our soaking gloves for waterproof kitchen ones bought at 7-Eleven.
        </p>

        <p class="km-body-text">
          After another extra 2 hours of scooting, soggy shoes and wet clothes (because the water 
          resistance did not work as we had hoped), we could not feel our fingers and toes.
        </p>

        <ContentBox type="quote">
          And that's about when the snow hit us in the passes...
        </ContentBox>
      </section>

      <section>
        <!-- Section: Wisdom from experience -->
        <p class="km-body-text">
          When I messaged Cheryl, a friend who lives in Tokyo, about what happened, she had but an 
          apt quote for me:
        </p>

        <ContentBox type="quote">
          "Never challenge nature, can always do it again when timing is right."
        </ContentBox>

        <p class="km-body-text">
          Today was a lesson in humility. Sometimes the weather wins, and that is perfectly fine. 
          We learned about our limits and the importance of respecting the conditions around us.
        </p>
      </section>
    </div>

    <!-- Image galleries -->
    <div class="space-y-8 mb-8">
      <div>
        <ImageGallery title="Day Six Journey" routeImages={featuredImages} />
      </div>
      <div>
        <ImageGallery photoImages={photos} galleryType="compact" />
      </div>
    </div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={6}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-05-sakura-chase", label: "Day 5" }}
      nextDay={{ url: "/trips/japan-2017/day-07-route-2-countryside", label: "Day 7" }}
    />

  </div>
</div>
