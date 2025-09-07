<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: '40km', label: 'Distance' },
    { value: '8 hours', label: 'Scooting time' },
    { value: '754km', label: 'Progress' },
    { value: '13°C', label: 'Temperature' }
  ];

  const photos = [
    { src: '/images/japan-2017/day-16/day16-photo-01.webp', alt: 'Friendly send-off by hotel staff' },
    { src: '/images/japan-2017/day-16/day16-photo-02.webp', alt: 'Taking it easy at slow pace to Nagoya' },
    { src: '/images/japan-2017/day-16/day16-photo-03.webp', alt: 'Lunch at Sukiya with role-reversed ordering' }
  ];

  const featuredImages = [
    { src: '/images/japan-2017/day-16/day16-updates.webp', alt: 'Reflections on convenience stores and finding simple appreciation in daily life' }
  ];

  const weather = {
    title: 'Weather Report',
    description: '13 degrees Celsius with grey weather holding. Elevation in our favour for easier travel.'
  };
</script>

<svelte:head>
  <title>Day 16 - Simple Appreciation | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 16 of our Japan kickboard adventure: Finding simple appreciation and simple joys on the road to Nagoya, discovering profound moments in small observations." />
</svelte:head>

<!-- Day 16: Yokkaichi to Nagoya -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 16"
      date="10 April 2017"
      title="Yokkaichi to Nagoya"
      progress="754 kilometres of 1,800"
      subtitle="Simple appreciation, simple joys"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-8">
      <section>
        <!-- Section: Recovery day -->
        <ContentBox type="highlight">
          The boys are still slightly unwell, so we took it easy today. We had a very friendly 
          send off by the hotel staff!
        </ContentBox>

        <p class="km-body-text">
          DAY 16 of our scooting adventures! Yokkaichi to Nagoya - 754km of our 1,800km journey.
        </p>

        <p class="km-body-text">
          The boys were still down with mild diarrhoea so we took it easy and went at a slow pace 
          to Nagoya today. The elevation was in our favour and the grey weather held!
        </p>
      </section>

      <section>
        <!-- Section: Gender role reversal -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Assumptions and expectations</h3>
        
        <p class="km-body-text">
          During lunch at Sukiya, a type of beef bowl, and also for the last two days, the girls 
          were ordering twice as much as the boys. It was funny because almost all the waitresses 
          wanted to serve the bigger orders to the boys before we tell them its ours.
        </p>

        <p class="km-body-text">
          Small moments like these reveal how deeply embedded our assumptions about gender and 
          appetite can be, even in something as simple as serving food.
        </p>
      </section>

      <section>
        <!-- Section: Convenience store appreciation -->
        <h3 class="text-xl font-light mb-4 text-km-primary">The unsung heroes of our journey</h3>
        
        <p class="km-body-text">
          One of the things that we have come to appreciate this trip are the convenience stores 
          along the way. These common, unremarkable shops have supported us in more ways than one.
        </p>

        <p class="km-body-text">
          They serve as a rest stop for replenishment and refuelling, they allow us a place to rest 
          and use the washroom and they are also a distance marker that when passed, tells us that 
          we have moved forwards from our last spot.
        </p>

        <p class="km-body-text">
          Without them, our trip would be twice as gruelling and three times more difficult to complete.
        </p>
      </section>

      <section>
        <!-- Section: Philosophy of gratitude -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Taking things for granted</h3>
        
        <p class="km-body-text">
          Perhaps, these common and apparently insignificant things, serve society in more ways than 
          they are given credit for. Many things we take for granted are simply because they are 
          just there.
        </p>

        <ContentBox type="quote">
          And in taking things for granted, perhaps we lose sight of the small ways that we can 
          live happily. Expectation is always the nemesis to joy.
        </ContentBox>

        <p class="km-body-text">
          Perhaps a simple appreciation is all that is required to spark joy in our daily life.
        </p>

        <p class="km-body-text">
          This journey is teaching us to notice the infrastructure of kindness that surrounds us 
          everywhere - the small businesses, helpful people, and simple services that make life 
          possible. When we stop expecting and start appreciating, everything becomes a gift.
        </p>
      </section>
    </div>

    <!-- Image galleries -->
    <div class="space-y-8 mb-8">
      <div>
        <ImageGallery title="Day Sixteen Reflection" routeImages={featuredImages} />
      </div>
      <div>
        <ImageGallery photoImages={photos} galleryType="compact" />
      </div>
    </div>

    <!-- Day navigation -->
  <!-- Day navigation -->
  <DayNavigation 
    currentDay={16}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017/day-15-food-poisoning", label: "Day 15" }}
    nextDay={{ url: "/trips/japan-2017/day-17-update", label: "Day 17" }}
  />

  </div>
</div>
