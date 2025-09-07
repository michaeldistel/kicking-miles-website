<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: '90km', label: 'Distance' },
    { value: '3hrs', label: 'Scooting time' },
    { value: '8°C', label: 'Temperature' },
    { value: 'Rain', label: 'Weather' }
  ];

  const photos = [
    { src: '/images/japan-2017/day-02/day02-photo-01.webp', alt: 'Morning departure from Kitakyushu' },
    { src: '/images/japan-2017/day-02/day02-photo-02.webp', alt: 'Sore but determined after Day 1' },
    { src: '/images/japan-2017/day-02/day02-photo-03.webp', alt: 'Approaching the Kyushu-Honshu crossing' },
    { src: '/images/japan-2017/day-02/day02-photo-04.webp', alt: 'Bridge crossing between the islands of Kyushu and Honshu' },
    { src: '/images/japan-2017/day-02/day02-photo-05.webp', alt: 'Milestone moment - leaving Kyushu island behind' },
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
    title: 'Weather Report',
    description: '8°C with light rain. Much better conditions than yesterday\'s hailstorm, allowing for steady progress.'
  };
</script>

<svelte:head>
  <title>Day 02 - Kyushu to Honshu | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 02 of our Japan kickboard adventure: A significant milestone as we cross from Kyushu to Honshu island." />
</svelte:head>

<!-- Day 02: Kyushu to Honshu -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="Day 02"
      date="27 March 2017"
      title="Kyushu to Honshu"
      progress="90 kilometres of 1,800"
      subtitle="Crossing islands"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-8">
      <section>
        <!-- Section: Recovery morning -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Recovering from the storm</h3>
        <p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
          DAY TWO of our scooting adventures! Kitakyushu to Shimonoseki - a little sore and tired but otherwise okay. We woke up extremely exhausted, having gone to bed at 2am last night because we were waiting out the rain and hailstorm.
        </p>
        
        <p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
          Surprisingly, our bodies held up fine, not too much tiredness today either. We decided to take it easy today, and spend time repacking and readjusting our pack.
        </p>

        <ContentBox type="mood">
          <p class="font-light">
            Sometimes the best strategy is to listen to your body. After yesterday's baptism by hail, taking it easy feels like wisdom.
          </p>
        </ContentBox>
      </section>

      <section>
        <!-- Section: The crossing -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Crossing to Honshu</h3>
        <p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
          Today we officially crossed from the island of Kyushu into Honshu! So begins the main leg of our journey in this curious and fabulous country. This feels like a significant milestone - we have left the starting island behind and entered Japan's main island.
        </p>

        <ContentBox type="quote">
          <p class="font-light">
            Today marks a significant milestone - we have left Kyushu behind and entered Honshu, Japan's main island. The adventure truly begins now.
          </p>
        </ContentBox>
      </section>

      <section>
        <!-- Section: Looking ahead -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Preparing for tomorrow</h3>
        <p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
          70 kilometres tomorrow! We're building our confidence and rhythm. The gear is adjusting to our needs, our bodies are adapting to the demands, and Japan is starting to reveal itself to us.
        </p>

        <ContentBox type="highlight">
          <p class="font-light">
            160 kilometres down, 1,640 to go. From island to island, step by step.
          </p>
        </ContentBox>
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
