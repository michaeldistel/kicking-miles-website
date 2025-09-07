<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: '80km', label: 'Distance' },
    { value: '12 hours', label: 'Scooting time' },
    { value: '492km', label: 'Progress' },
    { value: '17°C', label: 'Temperature' }
  ];

  const photos = [
    { src: '/images/japan-2017/day-09/day09-photo-01.webp', alt: 'Feeling adjusted to daily physical challenges' },
    { src: '/images/japan-2017/day-09/day09-photo-02.webp', alt: 'Beautiful clear skies on route to Himeji' },
    { src: '/images/japan-2017/day-09/day09-photo-03.webp', alt: 'Mental and emotional challenges of the journey' }
  ];

  const featuredImages = [
    { src: '/images/japan-2017/day-09/day09-route-map.webp', alt: 'Route map from Okayama to Himeji along the coastal path' },
    { src: '/images/japan-2017/day-09/day09-updates.webp', alt: 'Philosophical reflections on perseverance and finding the right path' }
  ];

  const weather = {
    title: 'Weather Report',
    description: '17 degrees Celsius with beautiful clear skies. Perfect conditions for a long day of scooting.'
  };
</script>

<svelte:head>
  <title>Day 09 - No Right or Wrong | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 09 of our Japan kickboard adventure: Learning that sometimes there is no right or wrong path - only different experiences." />
</svelte:head>

<!-- Day 09: Philosophical Journey -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 09"
      date="3 April 2017"
      title="Okayama to Himeji"
      progress="492 kilometres of 1,800"
      subtitle="There is no right or wrong!"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-8">
      <section>
        <!-- Section: Physical adaptation -->
        <ContentBox type="highlight">
          Raring to go! Nine days in and we're feeling more adjusted to the daily physical punishment.
        </ContentBox>

        <p class="km-body-text">
          DAY NINE of our scooting adventures! Okayama to Himeji - 492km of our 1,800km journey.
        </p>

        <p class="km-body-text">
          One of the biggest challenges in doing a trip like this, would really be the ability to 
          lean into discomfort and hanging on through it to give the body time to adjust. Physically, 
          it might sound really difficult but anyone with a slightly above average fitness level will 
          find this pace easy to conquer. It is not so much strenuous as it is tiring.
        </p>
      </section>

      <section>
        <!-- Section: Mental challenges -->
        <h3 class="text-xl font-light mb-4 text-km-primary">The real challenge</h3>
        
        <p class="km-body-text">
          For the most part, the real challenge is more emotional and mental. Sometimes those take up 
          more of our energy than the actual physical task itself.
        </p>

        <p class="km-body-text">
          Some of the questions we had to face were... what do we do when the uphill climb becomes 
          exhausting on the quads we feel like stopping, when the rain chills us to the bone and we 
          are shivering or when we get lost and do not know how to navigate out of the maze of streets? 
          A simple question, do we quit or go on?
        </p>
      </section>

      <section>
        <!-- Section: Philosophy of grey areas -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Life in the grey areas</h3>
        
        <p class="km-body-text">
          The idealist will tell you that the decision is clear. You either do or do not. But the 
          realist knows that life is not so simple. There is no black and white. Everything exists 
          in greys.
        </p>

        <ContentBox type="quote">
          And because it exists in greys, there is no right or wrong... good or bad. Life just is 
          and we just live the present moment the best we can.
        </ContentBox>

        <p class="km-body-text">
          This journey is teaching us about acceptance and presence. Perhaps the answer is not about 
          finding the "right" choice, but about embracing the uncertainty and responding with 
          compassion for ourselves and our circumstances.
        </p>
      </section>
    </div>

    <!-- Image galleries -->
    <div class="space-y-8 mb-8">
      <div>
        <ImageGallery title="Day Nine Journey" routeImages={featuredImages} />
      </div>
      <div>
        <ImageGallery photoImages={photos} galleryType="compact" />
      </div>
    </div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={9}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-08-momotaro-peach-boy", label: "Day 8" }}
      nextDay={{ url: "/trips/japan-2017/day-10-economic-success", label: "Day 10" }}
    />

  </div>
</div>
