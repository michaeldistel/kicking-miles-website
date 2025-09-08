<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: 'DAY THREE', label: 'Scooting Adventures' },
    { value: '75km', label: 'Total distance travelled' },
    { value: '12 hours', label: 'Total time including stops' },
    { value: '165km / 1800km', label: 'Shimonoseki to Hofu' }
  ];

  const photos = [
    { src: '/images/japan-2017/day-03/day03-photo-01.webp', alt: 'Starting the journey from Shimonoseki' },
    { src: '/images/japan-2017/day-03/day03-photo-02.webp', alt: 'Coastal scenery on the way to Hofu' },
    { src: '/images/japan-2017/day-03/day03-photo-03.webp', alt: 'Beautiful seaside views along the route' },
    { src: '/images/japan-2017/day-03/day03-photo-04.webp', alt: 'Taking a well-deserved break during the long mountain stretch' },
    { src: '/images/japan-2017/day-03/day03-photo-05.webp', alt: 'Challenging mountain terrain with steep winding roads ahead' },
    { src: '/images/japan-2017/day-03/day03-photo-06.webp', alt: 'Navigating the demanding mountain passes on kickboards' },
    { src: '/images/japan-2017/day-03/day03-photo-07.webp', alt: 'Brief rest stop along the scenic coastal route' },
    { src: '/images/japan-2017/day-03/day03-photo-08.webp', alt: 'Beautiful scenic views rewarding the difficult mountain ascent' },
    { src: '/images/japan-2017/day-03/day03-photo-09.webp', alt: 'Pushing through the demanding mountain terrain together' },
    { src: '/images/japan-2017/day-03/day03-photo-10.webp', alt: 'Making steady progress towards the Hofu destination' },
    { src: '/images/japan-2017/day-03/day03-photo-11.webp', alt: 'Successful completion of the challenging third day of the journey' }
  ];

  const featuredImages = [
    { src: '/images/japan-2017/day-03/day03-route-map.webp', alt: 'Route map showing the mountain path from Shimonoseki to Hofu' },
    { src: '/images/japan-2017/day-03/day03-updates.webp', alt: 'Journey updates and highlights from the mountain crossing adventure' }
  ];

  const weather = {
    title: 'Weather',
    description: '12 degrees c, glorious weather. Mood: Had a hearty breakfast at Starbucks and a wonderful send off by the staff there!'
  };
</script>

<svelte:head>
  <title>Day 03 - Shimonoseki to Hofu | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 03 of our Japan kickboard adventure: Our first long stretch with coastal scenery and treacherous mountain passes." />
</svelte:head>

<!-- Day 03: Shimonoseki to Hofu -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 03"
      date="28 March 2017"
      title="Our first long stretch!"
      progress="165 kilometres of 1,800"
      subtitle="Day three"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-12">
      <section>
        <p class="km-body-text">
          <strong>DAY THREE of our scooting adventures!</strong><br>
          Shimonoseki to Hofu - 165km / 1800km<br>
          Estimated scooting time: 10 hours<br>
          Weather: 12 degrees c, glorious weather<br>
          Mood: Had a hearty breakfast at Starbucks and a wonderful send off by the staff there!
        </p>
      </section>

      <section>
        <p class="km-body-text">
          We started off with a wonderful sendoff from the staff at Starbucks! Our tummies full of nourishment and caffeine, we set off along the coast to a beautiful seaside scenery. The weather was glorious!
        </p>

        <p class="km-body-text">
          This 75km stretch is the beginning of a steep ascent into the mountains. We made awesome time in the first half only to slow down, lol. About 50kms in, we got hopelessly lost and were so tired Michelle fell asleep beside the cemetary. We also navigated the treacherous mountain passes that had nary a sidewalk and many oncoming trucks. Felt like our lives flashed before our eyes twice today.
        </p>

        <p class="km-body-text">
          Today's trip can't be completed without talking about the two wonderful groups of people we met along the way. We get a lot of people asking us what we're doing and where we're going. Curious stares are common. Sometimes we come across special people who are genuinely interested in sharing our dream. In their small ways, they show their support with a thoughtful gift here, encouraging words there and warm smiles everywhere.
        </p>

        <p class="km-body-text">
          This time we had two special send offs in one day - the group at Starbucks in Shimonoseki and another at the 7-11 in Asa! With their words, "ganbatte", trailing behind us, we headed further into the mountains with our trusty scooters!
        </p>

        <p class="km-body-text">
          Total distance travelled: 75km<br>
          Total time including stops: 12 hours
        </p>
      </section>

      <section>
        <p class="km-body-text font-medium mt-8">
          - Michelle Yang
        </p>
      </section>
    </div>

    <!-- Image galleries -->
    <div class="space-y-8 mb-12">
      <div>
        <ImageGallery title="Day Three Journey" routeImages={featuredImages} />
      </div>
      <div>
        <ImageGallery photoImages={photos} galleryType="compact" />
      </div>
    </div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={3}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-02-kyushu-to-honshu", label: "Day 2" }}
      nextDay={{ url: "/trips/japan-2017/day-04-lesson-in-humility", label: "Day 4" }}
    />

  </div>
</div>
