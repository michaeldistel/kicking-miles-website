<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: '0km', label: 'Distance' },
    { value: 'Rest', label: 'Activity' },
    { value: '754km', label: 'Progress' },
    { value: '8°C', label: 'Temperature' }
  ];

  const featuredImages = [
    { src: '/images/japan-2017/day-17/day17-updates.webp', alt: 'Weather delay update and team rest day planning in Nagoya' }
  ];

  const weather = {
    title: 'Weather Report',
    description: '8 degrees Celsius with rain all day. Decision made to stay an extra day in Nagoya. Tomorrow forecast: sunny 18°C!'
  };
</script>

<svelte:head>
  <title>Day 17 - Nagoya Update | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 17 of our Japan kickboard adventure: A rest day in Nagoya for updates and reflection, taking stock of progress and preparing for challenges ahead." />
</svelte:head>

<!-- Day 17: Nagoya Rest Day -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 17"
      date="11 April 2017"
      title="Nagoya"
      progress="754 kilometres of 1,800"
      subtitle="Update"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-8">
      <section>
        <!-- Section: Weather delay -->
        <ContentBox type="highlight">
          It was raining the whole day today and temperature was about 8 degrees Celsius, so we 
          decided to stay in Nagoya for an extra day.
        </ContentBox>

        <p class="km-body-text">
          DAY 17 of our scooting adventures! Nagoya - 754km of our 1,800km journey.
        </p>

        <p class="km-body-text">
          Sometimes the weather makes decisions for you, and today was one of those days. With rain 
          throughout the day and cold temperatures, the sensible choice was to take shelter and wait 
          for better conditions.
        </p>
      </section>

      <section>
        <!-- Section: Team activities -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Different ways to spend a rest day</h3>
        
        <p class="km-body-text">
          The girls went out shopping while the boys lazed in the hotel room, lol. Everyone has their 
          own way of recharging and making the most of unexpected downtime.
        </p>

        <p class="km-body-text">
          These unplanned pauses in the journey often become as memorable as the days on the road. 
          They give us time to process experiences, rest our bodies, and appreciate simple comforts 
          like a warm, dry room when it is cold and wet outside.
        </p>
      </section>

      <section>
        <!-- Section: Looking forward -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Onwards to Gamagori</h3>
        
        <ContentBox type="quote">
          Tomorrow is gonna be a sunny day at 18 degrees Celsius! Onwards to Gamagori!
        </ContentBox>

        <p class="km-body-text">
          The forecast brings optimism and renewed energy. After a day of rest and recovery, we are 
          ready to get back on the road with much better weather conditions ahead.
        </p>

        <p class="km-body-text">
          These contrasts - between challenging weather and sunshine, between rest and activity, 
          between indoor comfort and outdoor adventure - make the journey richer and help us 
          appreciate each different phase.
        </p>
      </section>
    </div>

    <!-- Image galleries -->
    <div class="space-y-8 mb-8">
      <div>
        <ImageGallery title="Day Seventeen Rest" routeImages={featuredImages} />
      </div>
    </div>

  <!-- Day navigation -->
  <DayNavigation 
    currentDay={17}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017/day-16-simple-appreciation", label: "Day 16" }}
    nextDay={{ url: "/trips/japan-2017/day-18-dental-floss-makes-good-repair-tape", label: "Day 18" }}
  />

  </div>
</div>
