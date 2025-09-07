<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: '55km', label: 'Distance' },
    { value: '9 hours', label: 'Scooting time' },
    { value: '547km', label: 'Progress' },
    { value: '15°C', label: 'Temperature' }
  ];

  const featuredImages = [
    { src: '/images/japan-2017/day-10/day10-route-map.webp', alt: 'Route map from Himeji to Kobe approaching the major cities' },
    { src: '/images/japan-2017/day-10/day10-updates.webp', alt: 'Reflections on Japanese UX design and economic success observations' }
  ];

  const weather = {
    title: 'Weather Report',
    description: '15 degrees Celsius with another beautiful day. Perfect conditions for the journey to Kobe.'
  };
</script>

<svelte:head>
  <title>Day 10 - Economic Success | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 10 of our Japan kickboard adventure: Riding through areas showcasing Japan's economic success and observing the contrast between tradition and modernity." />
</svelte:head>

<!-- Day 10: Modern Japan -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 10"
      date="4 April 2017"
      title="Himeji to Kobe"
      progress="547 kilometres of 1,800"
      subtitle="The ingredient to economic success?"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-8">
      <section>
        <!-- Section: Journey status -->
        <ContentBox type="highlight">
          Getting tired again. DAY TEN of our scooting adventures!
        </ContentBox>

        <p class="km-body-text">
          Himeji to Kobe - 547km of our 1,800km journey. Another beautiful day with clear skies, 
          though we are starting to feel the cumulative effects of ten days on the road.
        </p>
      </section>

      <section>
        <!-- Section: Kurasushi experience -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Dinner at Kurasushi</h3>
        
        <p class="km-body-text">
          Dinner at Kurasushi the last 10km before Kobe. Kurasushi is an extremely affordable fast 
          food sushi chain. You place your order on a screen and it delivers your food to you through 
          a high speed conveyor belt.
        </p>

        <p class="km-body-text">
          UX or user experience is given high priority in most Japanese service, even low-priced 
          consumer goods companies. The Japanese have their UX damn packed for optimum customer 
          experience. Their attention to the UX is perhaps a reflection of the value they place on 
          the 'process'.
        </p>

        <p class="km-body-text">
          It can be said to be synonymous with high quality, attention-to-detail and refined experience.
        </p>
      </section>

      <section>
        <!-- Section: Economic reflection -->
        <h3 class="text-xl font-light mb-4 text-km-primary">The paradox of excellence</h3>
        
        <ContentBox type="quote">
          Yet if attention-to-detail is a key ingredient to success, why is Japan slowly losing its 
          hegemony as one of the world's leading economies?
        </ContentBox>

        <p class="km-body-text">
          This question strikes at the heart of a fascinating paradox. Japan's commitment to process, 
          refinement, and user experience is legendary. Yet economic leadership requires more than 
          just excellence in execution.
        </p>

        <p class="km-body-text">
          Perhaps the answer lies in the difference between perfecting existing systems and creating 
          entirely new paradigms. Or maybe it is about the balance between process and speed, 
          refinement and disruption.
        </p>

        <p class="km-body-text">
          It makes me wonder: what are the true ingredients of sustained economic success in a 
          rapidly changing world?
        </p>
      </section>
    </div>

    <!-- Image galleries -->
    <div class="space-y-8 mb-8">
      <div>
        <ImageGallery title="Day Ten Journey" routeImages={featuredImages} />
      </div>
    </div>

    <!-- Day navigation -->
  <!-- Day navigation -->
  <DayNavigation 
    currentDay={10}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017/day-09-no-right-or-wrong", label: "Day 9" }}
    nextDay={{ url: "/trips/japan-2017/day-11-rebellious-heterogeneity", label: "Day 11" }}
  />

  </div>
</div>
