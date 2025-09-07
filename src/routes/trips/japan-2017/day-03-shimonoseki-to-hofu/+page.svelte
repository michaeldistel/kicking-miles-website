<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: '75km', label: 'Distance' },
    { value: '12hrs', label: 'Total time' },
    { value: '12°C', label: 'Temperature' },
    { value: '165km', label: 'Progress' }
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
    title: 'Weather Report',
    description: '12 degrees celsius, glorious weather! Perfect conditions for our longest stretch yet.'
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
      title="Shimonoseki to Hofu"
      progress="165 kilometres of 1,800"
      subtitle="Our first long stretch!"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-12">
      <section>
        <!-- Section: Journey begins -->
        <p class="km-body-text">
          DAY THREE of our scooting adventures! Shimonoseki to Hofu - 165km of our 1,800km journey.
        </p>

        <p class="km-body-text">
          We started off with a wonderful sendoff from the staff at Starbucks! Our tummies full of 
          nourishment and caffeine, we set off along the coast to beautiful seaside scenery. 
          The weather was glorious!
        </p>
      </section>

      <section>
        <!-- Section: The challenge -->
        <p class="km-body-text">
          This 75km stretch marked the beginning of a steep ascent into the mountains. We made 
          awesome time in the first half only to slow down considerably. About 50km in, we got 
          hopelessly lost and were so tired Michelle fell asleep beside the cemetery.
        </p>

        <ContentBox type="highlight">
          We navigated treacherous mountain passes that had nary a sidewalk and many oncoming trucks. 
          Felt like our lives flashed before our eyes twice today.
        </ContentBox>
      </section>

      <section>
        <!-- Section: Special encounters -->
        <p class="km-body-text">
          Today's trip cannot be completed without talking about the two wonderful groups of people 
          we met along the way. We get a lot of people asking us what we are doing and where we 
          are going. Curious stares are common.
        </p>

        <p class="km-body-text">
          Sometimes we come across special people who are genuinely interested in sharing our dream. 
          In their small ways, they show their support with a thoughtful gift here, encouraging 
          words there and warm smiles everywhere.
        </p>

        <ContentBox type="quote">
          This time we had two special sendoffs in one day - the group at Starbucks in Shimonoseki 
          and another at the 7-11 in Asa! With their words, "ganbatte", trailing behind us, we 
          headed further into the mountains with our trusty scooters!
        </ContentBox>
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
