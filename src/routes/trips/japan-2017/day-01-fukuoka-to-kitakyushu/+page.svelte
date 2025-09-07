<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';

  const stats = [
    { value: '70km', label: 'Distance' },
    { value: '10hrs', label: 'Total time' },
    { value: '8°C', label: 'Low temp' },
    { value: '6,000', label: 'Calories burnt' }
  ];

  const routeImages = [
    { src: '/images/japan-2017/day-01/day01-route-map.webp', alt: 'Route map showing the path from Fukuoka to Kitakyushu' },
    { src: '/images/japan-2017/day-01/day01-updates.webp', alt: 'Journey updates and progress notes from Fukuoka to Kitakyushu' }
  ];

  const photoImages = [
    { src: '/images/japan-2017/day-01/day01-photo-01.webp', alt: 'Final preparations and gear check at the starting point in Fukuoka' },
    { src: '/images/japan-2017/day-01/day01-photo-02.webp', alt: 'First moments on the kickboards beginning the Japan adventure' },
    { src: '/images/japan-2017/day-01/day01-photo-03.webp', alt: 'Caught in a severe storm with heavy rain and strong winds' },
    { src: '/images/japan-2017/day-01/day01-photo-04.webp', alt: 'Seeking shelter from rain and hail under cover' },
    { src: '/images/japan-2017/day-01/day01-photo-05.webp', alt: 'Finding refuge and warmth inside McDonald\'s during the storm' },
    { src: '/images/japan-2017/day-01/day01-photo-06.webp', alt: 'Wet and cold but determined to continue the journey' },
    { src: '/images/japan-2017/day-01/day01-photo-07.webp', alt: 'Beautiful rainbow appearing after the storm passes' },
    { src: '/images/japan-2017/day-01/day01-photo-08.webp', alt: 'Arriving in Kitakyushu tired but successful at midnight' },
    { src: '/images/japan-2017/day-01/day01-photo-09.webp', alt: 'Exhausted but celebrating a successful completion of the challenging first day' },
    { src: '/images/japan-2017/day-01/day01-photo-10.webp', alt: 'Hotel arrival and rest after 10-hour adventure' }
  ];

  const weather = {
    title: 'Weather Report',
    description: 'Expected rains turned into a proper storm with hail. Temperature dropped from 12°C to 8°C. Welcome to Japan, indeed.'
  };
</script>

<svelte:head>
  <title>Day 01 - Fukuoka to Kitakyushu | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 01 of our Japan kickboard adventure: The journey begins with rain, hail, and our first 70 kilometres from Fukuoka to Kitakyushu." />
</svelte:head>

<!-- Day 01: Fukuoka to Kitakyushu -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="Day 01"
      date="26 March 2017"
      title="Fukuoka to Kitakyushu"
      subtitle="The journey begins"
      progress="70 kilometres of 1,800"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-8">
      <section>
        <!-- Section: The beginning -->
        <h3 class="text-xl font-light mb-4 text-km-primary">DAY ONE - The adventure begins</h3>
        <p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
          Extremely nervous on our first day, with expected rains and a bundle of nervous energy keeping us restless the night before. This is it - the moment we've been preparing for. Four friends, four kickboards, and 1,800 kilometres of Japan ahead of us.
        </p>
        
        <p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
          We finally made it to Kitakyushu in one piece after about 10 hours on the road and were greeted by the sight of a beautiful rainbow. Shortly after we hit the main town, it started pouring.
        </p>

        <ContentBox type="quote">
          <p class="font-light">
            Temperature was cool. We started at 12 degrees but at one stage it dropped to 8. It was hard when we stopped scooting, for example to take a drink. Had to keep going.
          </p>
        </ContentBox>
      </section>

      <section>
        <!-- Section: The storm -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Baptism by hail</h3>
        <p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
          We took cover in McDonald's for about 2 hours when we finally decided to brave the rain and complete the last 15 kilometres to the hotel... when it started to hail! After more taking shelter, we got to our hotel at 12am.
        </p>
        
        <p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
          We subsisted on convenience food the whole day and did not manage to have time for a full meal. Whatever, we have enough fats on us to last 😂
        </p>

        <ContentBox type="mood">
          <p class="font-light">
            Japan's welcome: a rainbow, followed by rain, followed by hail. If this is Day One, what will Day Forty bring?
          </p>
        </ContentBox>
      </section>

      <section>
        <!-- Section: First night -->
        <h3 class="text-xl font-light mb-4 text-km-primary">First night reflections</h3>
        <p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
          By the time we went to bed it was 2am. So tomorrow will be a shorter day. Calves aching, feeling exhausted but otherwise doing okay! We've survived Day One - only 39 more to go.
        </p>

        <ContentBox type="highlight">
          <p class="font-light">
            70 kilometres down, 1,730 to go. The adventure has truly begun.
          </p>
        </ContentBox>
      </section>

      <div>
        <ImageGallery title="Route Map" routeImages={routeImages} />
      </div>

      <div>
        <ImageGallery title="Journey Photos" photoImages={photoImages} />
      </div>
    </div>

  <!-- Day navigation -->
  <DayNavigation 
    currentDay={1}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017/day-00-before-the-adventure", label: "Day 0" }}
    nextDay={{ url: "/trips/japan-2017/day-02-kyushu-to-honshu", label: "Day 2" }}
  />

  </div>
</div>
