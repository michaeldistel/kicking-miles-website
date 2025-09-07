<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: '24km', label: 'Distance' },
    { value: '6 hours', label: 'Scooting time' },
    { value: '615km', label: 'Progress' },
    { value: '20°C', label: 'Temperature' }
  ];

  const photos = [
    { src: '/images/japan-2017/day-13/day13-photo-01.webp', alt: 'Leaving Osaka with newly constructed sengoku war banners' },
    { src: '/images/japan-2017/day-13/day13-photo-02.webp', alt: 'Proud soldiers ready to proclaim ascendency' },
    { src: '/images/japan-2017/day-13/day13-photo-03.webp', alt: 'Rain getting steadily heavier through Osaka streets' },
    { src: '/images/japan-2017/day-13/day13-photo-04.webp', alt: 'All rain defenses deployed - waterproof jackets and covers' },
    { src: '/images/japan-2017/day-13/day13-photo-05.webp', alt: 'Looking like mismatched homeless wannabes' },
    { src: '/images/japan-2017/day-13/day13-photo-06.webp', alt: 'War banners exposed to the elements' },
    { src: '/images/japan-2017/day-13/day13-photo-07.webp', alt: 'Michael sacrificing raincoat to protect war banners' },
    { src: '/images/japan-2017/day-13/day13-photo-08.webp', alt: 'Marker ink running despite protection efforts' },
    { src: '/images/japan-2017/day-13/day13-photo-09.webp', alt: 'Platoon arriving in Nara - zero casualties!' }
  ];

  const weather = {
    title: 'Weather Report',
    description: '20 degrees Celsius but feeling warm from the food. Rain getting steadily heavier as we left Osaka.'
  };
</script>

<svelte:head>
  <title>Day 13 - Let No War Banner Fall | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 13 of our Japan kickboard adventure: From Osaka to Nara carrying messages of peace and reflecting on history and remembrance." />
</svelte:head>

<!-- Day 13: Osaka to Nara -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 13"
      date="7 April 2017"
      title="Osaka to Nara"
      progress="615 kilometres of 1,800"
      subtitle="Let no war banner fall!"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-8">
      <section>
        <!-- Section: High spirits departure -->
        <ContentBox type="highlight">
          食い倒れ kuidaore or bursting with food! We left Osaka in high spirits with our newly 
          constructed 'sengoku' war banners!
        </ContentBox>

        <p class="km-body-text">
          DAY 13 of our scooting adventures! Osaka to Nara - 615km of our 1,800km journey.
        </p>

        <p class="km-body-text">
          Stuck into our backpacks, we scooted on like proud soldiers ready to proclaim our 
          ascendancy over the challenging journey. We have 2/3 more to go or roughly 1,200km.
        </p>
      </section>

      <section>
        <!-- Section: Rain battle -->
        <h3 class="text-xl font-light mb-4 text-km-primary">The rain offensive</h3>
        
        <p class="km-body-text">
          The rain got steadily heavy as we marched through the streets of Osaka. Out came all our 
          defences against the rain; waterproof jackets, backpack covers, gardening gloves and 
          plastic bags over our backpack. We looked like a mismatched bunch of homeless wannabes.
        </p>

        <p class="km-body-text">
          The only things left uncovered were our war banners. We had no more plastic bags left and 
          there was no way to slot them in our bags. Major dilemma!
        </p>
      </section>

      <section>
        <!-- Section: The sacrifice -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Protecting the colours</h3>
        
        <ContentBox type="quote">
          Eventually we decided that our war banners had to be protected at all costs. So Michael 
          sacrificed his raincoat to scoot in the rain, so our war banners had a protected place to ride.
        </ContentBox>

        <p class="km-body-text">
          PS: In the end, the marker ink ran down the cloth anyway but the platoon made it to Nara! 
          Zero casualties reported!
        </p>

        <p class="km-body-text">
          Sometimes the most important battles are not about winning, but about the commitment to 
          protect what matters to you. Our war banners may have been damaged, but our spirits and 
          our solidarity remained intact.
        </p>
      </section>
    </div>

    <!-- Image galleries -->
    <div class="space-y-8 mb-8">
      <div>
        <ImageGallery photoImages={photos} galleryType="compact" />
      </div>
    </div>

    <!-- Day navigation -->
  <!-- Day navigation -->
  <DayNavigation 
    currentDay={13}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017/day-12-old-lady-dango-shop", label: "Day 12" }}
    nextDay={{ url: "/trips/japan-2017/day-14-legendary-bowing-deer", label: "Day 14" }}
  />

  </div>
</div>
