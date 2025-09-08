<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: 'DAY TEN', label: 'Scooting Adventures' },
    { value: '547km / 1800km', label: 'Himeji to Kobe' },
    { value: '9 hours', label: 'Estimated scooting time' },
    { value: 'Beautiful day!', label: 'Weather' }
  ];

  const featuredImages = [
    { src: '/images/japan-2017/day-10/day10-route-map.webp', alt: 'Route map from Himeji to Kobe approaching the major cities' },
    { src: '/images/japan-2017/day-10/day10-updates.webp', alt: 'Reflections on Japanese UX design and economic success observations' }
  ];

  const weather = {
    title: 'Weather Report',
    description: '15 degrees c, another beautiful day. Getting tired again.'
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
      dayNumber="DAY TEN"
      date="4 April 2017"
      title="The ingredient to economic success?"
      progress="547 kilometres of 1,800"
      subtitle="Day ten"
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
          <strong>DAY TEN of our scooting adventures!</strong><br>
          Himeji to Kobe - 547km / 1800km<br>
          Estimated scooting time: 9 hours<br>
          Weather: 15 degrees c, another beautiful day<br>
          Mood: Getting tired again
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Dinner at Kurasushi the last 10km before Kobe. Kurashushi is an extremely affordable fast food sushi chain. You place your order on a screen and it delivers your food to you through a high speed conveyor belt.
        </p>

        <p class="km-body-text">
          UX or user experience is given high priority in most Japanese service, even low-priced consumer goods companies. The Japanese have their UX damn packed for optimum customer experience. Their attention to the UX is perhaps a reflection of the value they place on the 'process'. It can be said to be synonymous with high quality, attention-to-detail and refined experience.
        </p>

        <p class="km-body-text">
          Yet if attention-to-detail is a key ingredient to success, why is Japan slowly losing its hegemony as one of the world's leading economies?
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
