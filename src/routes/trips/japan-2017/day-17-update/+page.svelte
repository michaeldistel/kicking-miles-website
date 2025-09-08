<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: '754', label: 'Distance' },
    { value: '1800km', label: 'Total' },
    { value: '8 degrees c', label: 'Temperature' },
    { value: 'Rest day', label: 'Activity' }
  ];

  const featuredImages = [
    { src: '/images/japan-2017/day-17/day17-updates.webp', alt: 'Weather delay update and team rest day planning in Nagoya' }
  ];

  const weather = {
    title: 'Weather Report',
    description: 'It was raining the whole day today and temperature was about 8 degrees c'
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
        <p class="km-body-text">
          <strong>DAY 17 of our scooting adventures!</strong><br><br>

          Nagoya - 754 / 1800km
        </p>

        <p class="km-body-text">
          It was raining the whole day today and temperature was about 8 degrees c, so we decided to stay in Nagoya for an extra day. The girls went out shopping while the boys lazed in the hotel room, lol. Tomorrow is gonna be a sunny day at 18 degrees c! Onwards to Gamagori!
        </p>

        <p class="km-body-text font-medium mt-8">
          Michelle Yang
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
