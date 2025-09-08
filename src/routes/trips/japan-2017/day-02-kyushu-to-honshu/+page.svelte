<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: 'DAY TWO', label: 'Scooting Adventures' },
    { value: '90kms / 1800kms', label: 'Kitakyushu to Shimonoseki' },
    { value: '3 hours', label: 'Estimated scooting time' },
    { value: '8 degrees c', label: 'Weather: expected rains' }
  ];

  const photos = [
    { src: '/images/japan-2017/day-02/day02-photo-01.webp', alt: 'Morning departure from Kitakyushu' },
    { src: '/images/japan-2017/day-02/day02-photo-02.webp', alt: 'Sore but determined after Day 1' },
    { src: '/images/japan-2017/day-02/day02-photo-03.webp', alt: 'Approaching the Kyushu-Honshu crossing' },
    { src: '/images/japan-2017/day-02/day02-photo-04.webp', alt: 'Bridge crossing between the islands of Kyushu and Honshu' },
    { src: '/images/japan-2017/day-02/day02-photo-06.webp', alt: 'First views and arrival onto Honshu island' },
    { src: '/images/japan-2017/day-02/day02-photo-07.webp', alt: 'Celebrating the successful crossing between islands' },
    { src: '/images/japan-2017/day-02/day02-photo-08.webp', alt: 'Taking a more relaxed approach after yesterday\'s challenging storm' },
    { src: '/images/japan-2017/day-02/day02-photo-09.webp', alt: 'Repacking and adjusting gear for the continued journey' },
    { src: '/images/japan-2017/day-02/day02-photo-010.webp', alt: 'Arriving in Shimonoseki successfully after the island crossing' },
    { src: '/images/japan-2017/day-02/day02-photo-011.webp', alt: 'Mission accomplished - first major island crossing completed successfully' }
  ];

  const featuredImages = [
    { src: '/images/japan-2017/day-02/day02-route-map.webp', alt: 'Route map showing the crossing from Kitakyushu to Shimonoseki between Kyushu and Honshu' },
    { src: '/images/japan-2017/day-02/day02-updates.webp', alt: 'Journey updates and notes from the historic island crossing' }
  ];

  const weather = {
    title: 'Weather',
    description: '8 degrees c, expected rains. Mood: A little sore and tired but otherwise okay!'
  };
</script>

<svelte:head>
  <title>Day 02 - From Kyushu to Honshu | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 02 of our Japan kickboard adventure: From Kyushu to Honshu - crossing islands and beginning the main leg of our journey through this curious and fabulous country." />
</svelte:head>

<!-- Day 02: Kyushu to Honshu -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="Day 02"
      date="27 March 2017"
      title="From Kyushu to Honshu"
      progress="90 kilometres of 1,800"
      subtitle="Day two"
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
          <strong>DAY TWO of our scooting adventures!</strong><br>
          Kitakyushu to Shimonoseki - 90kms / 1800kms<br>
          Estimated scooting time: 3 hours<br>
          Weather: 8 degrees c, expected rains<br>
          Mood: A little sore and tired but otherwise okay!
        </p>
      </section>

      <section>
        <p class="km-body-text">
          We woke up extremely exhausted, having gone to bed at 2am last night because we were waiting out the rain and hailstorm. Surprisingly, our bodies held up fine, not too much tiredness today either.
        </p>

        <p class="km-body-text">
          We decided to take it easy today, and spend time repacking and readjusting our pack. Today we officially crossed from the island of Kyushu into Honshu!!!! So begins the main leg of our journey in this curious and fabulous country!
        </p>

        <p class="km-body-text">
          70kms tomorrow!
        </p>
      </section>

      <section>
        <p class="km-body-text font-medium mt-8">
          - Michelle Yang
        </p>
      </section>

      <div>
        <ImageGallery title="Route Map" routeImages={featuredImages} />
      </div>

      <div>
        <ImageGallery title="Journey Photos" photoImages={photos} />
      </div>
    </div>

  <!-- Day navigation -->
  <DayNavigation 
    currentDay={2}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017/day-01-fukuoka-to-kitakyushu", label: "Day 1" }}
    nextDay={{ url: "/trips/japan-2017/day-03-shimonoseki-to-hofu", label: "Day 3" }}
  />

  </div>
</div>
