<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: '99km', label: 'Distance' },
    { value: '9hrs', label: 'Estimated time' },
    { value: '274km', label: 'Progress' },
    { value: 'Train', label: 'Mode change' }
  ];

  const photos = [
    { src: '/images/japan-2017/day-04/day04-photo-01.webp', alt: 'Starting the journey from Hofu' },
    { src: '/images/japan-2017/day-04/day04-photo-02.webp', alt: 'Mountain passes of Hofu' },
    { src: '/images/japan-2017/day-04/day04-photo-03.webp', alt: 'The challenging terrain and broken brakes incident' },
    { src: '/images/japan-2017/day-04/day04-photo-04.webp', alt: 'Taking the train to Hiroshima after learning a lesson in humility' }
  ];

  const featuredImages = [
    { src: '/images/japan-2017/day-04/day04-route-map.webp', alt: 'Route map showing the planned path from Hofu to Hiroshima' },
    { src: '/images/japan-2017/day-04/day04-updates.webp', alt: 'Journey updates documenting the lessons learned and humble moments' }
  ];

  const weather = {
    title: 'Weather Report',
    description: 'Didn\'t take note! Too focused on the challenges of the day to record weather conditions.'
  };
</script>

<svelte:head>
  <title>Day 04 - A Lesson in Humility | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 04 of our Japan kickboard adventure: When Michelle's brakes fail, we learn that humility and confidence go hand in hand." />
</svelte:head>

<!-- Day 04: Hofu to Hiroshima -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 04"
      date="29 March 2017"
      title="Hofu to Hiroshima"
      progress="274 kilometres of 1,800"
      subtitle="A lesson in humility"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-12">
      <section>
        <!-- Section: The start -->
        <p class="km-body-text">
          DAY FOUR of our scooting adventures! Hofu to Hiroshima - 274km of our 1,800km journey.
        </p>

        <p class="km-body-text">
          We set off into the chilly morning with tired and aching bodies to head up into the 
          mountain passes of Hofu. It was not long into the morning that Michelle's brakes were 
          busted.
        </p>
      </section>

      <section>
        <!-- Section: The incident -->
        <p class="km-body-text">
          Cruising down one of the gentle slopes, she could not brake properly and had to slide 
          to a stop, throwing herself off the scooter. All the flipping and parkour training we 
          did paid off because she landed safely on her feet!
        </p>

        <ContentBox type="highlight">
          There was a moment of alarming fear, when the reality hit that the fall could have 
          happened down a mountain pass, but also a sigh of blessing to know that nothing 
          serious actually happened.
        </ContentBox>

        <p class="km-body-text">
          With sombre thoughts, we decided to walk down to the nearest station and take the train 
          to Hiroshima instead of pushing through or walking.
        </p>
      </section>

      <section>
        <!-- Section: The lesson -->
        <h3 class="text-xl font-light mb-4 text-km-primary">A lesson in humility</h3>
        
        <p class="km-body-text">
          We set off from Fukuoka with brash confidence, boldness enveloping our every step, 
          certainty that our bodies could hold up to the gruelling task and our goals easily met.
        </p>

        <p class="km-body-text">
          Having what we would refer to as a tiny setback has become a stark reminder that perhaps 
          arrogance is only for the fool-hearted and that to truly succeed in a great challenge 
          requires both humility and confidence.
        </p>

        <ContentBox type="quote">
          Thanking the mountain gods for a lesson learnt!
        </ContentBox>
      </section>
    </div>

    <!-- Image galleries -->
    <div class="space-y-8 mb-12">
      <div>
        <ImageGallery title="Day Four Journey" routeImages={featuredImages} />
      </div>
      <div>
        <ImageGallery photoImages={photos} galleryType="compact" />
      </div>
    </div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={4}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-03-shimonoseki-to-hofu", label: "Day 3" }}
      nextDay={{ url: "/trips/japan-2017/day-05-sakura-chase", label: "Day 5" }}
    />

  </div>
</div>
