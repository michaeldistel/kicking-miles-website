<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: 'DAY SIX', label: 'Scooting Adventures' },
    { value: '329km / 1800km', label: 'Hiroshima to Takehara' },
    { value: '8 hours', label: 'Estimated scooting time' },
    { value: 'Snow!', label: 'Weather challenge' }
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
    description: '8 degrees c, rains. Feeling abit cold, wet and nervous about the mountain passes.'
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
      dayNumber="DAY SIX"
      date="31 March 2017"
      title="Adventurer vs Nature; who wins?"
      progress="329 kilometres of 1,800"
      subtitle="Day six"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-8">
      <section>
        <p class="km-body-text">
          <strong>DAY SIX of our scooting adventures!</strong><br>
          Hiroshima to Takehara - 329km / 1800km<br>
          Estimated scooting time: 8 hours<br>
          Weather: 8 degrees c, rains<br>
          Mood: Feeling abit cold, wet and nervous about the mountain passes
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Every adventurer starts off thinking they're a hero but it doesn't take long before nature puts them back into place.
        </p>

        <p class="km-body-text">
          We left Hiroshima in eager spirits despite the rain. All rugged up in our rain protection, we left the warm cafe of Choco Cro behind and scooted out into the rain. It didn't take long before we slipped on the pavement a few times, none resulting in a fall but our scooters gained an extra scratch or two.
        </p>

        <p class="km-body-text">
          Still stubborn and eager to move forwards like a strapping young buck, we persevered into the mountain passes to make up for lost time. It started getting really frigid and wet and we had to exchange our soaking gloves for waterproof kitchen ones bought at 7-11. After another extra 2 hours of scooting, soggy shoes and wet clothes (because the water resistance didn't work as we'd hope), we couldn't feel our fingers and toes.
        </p>

        <p class="km-body-text">
          And that's about when the snow hit us in the passes...
        </p>

        <p class="km-body-text">
          When I messaged Cheryl, a friend who lives in Tokyo, about what happened, she had but an apt quote for me, "Never challenge nature, can always do it again when timing is right."
        </p>
      </section>

      <section>
        <p class="km-body-text font-medium mt-8">
          - Michelle Yang
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
