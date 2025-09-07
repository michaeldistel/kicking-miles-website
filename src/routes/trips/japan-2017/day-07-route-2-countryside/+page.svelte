<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: '83km', label: 'Distance' },
    { value: '8 hours', label: 'Scooting time' },
    { value: '412km', label: 'Progress' },
    { value: 'Clear skies', label: 'Weather' }
  ];

  const photos = [
    { src: '/images/japan-2017/day-07/day07-photo-01.webp', alt: 'Clear skies after leaving the rain behind' },
    { src: '/images/japan-2017/day-07/day07-photo-02.webp', alt: 'Route 2 countryside scenery' },
    { src: '/images/japan-2017/day-07/day07-photo-03.webp', alt: 'Flat terrain and manageable roads' },
    { src: '/images/japan-2017/day-07/day07-photo-04.webp', alt: 'Countryside people waving and being friendly' },
    { src: '/images/japan-2017/day-07/day07-photo-05.webp', alt: 'Rosy-cheeked farmer encounter' },
    { src: '/images/japan-2017/day-07/day07-photo-06.webp', alt: 'Father and daughter running down slope' },
    { src: '/images/japan-2017/day-07/day07-photo-07.webp', alt: 'Grandmother and granddaughter walking together' },
    { src: '/images/japan-2017/day-07/day07-photo-08.webp', alt: 'Arriving in Okayama at 7pm' },
    { src: '/images/japan-2017/day-07/day07-photo-09.webp', alt: 'Hotel room with nightview of the city' }
  ];

  const featuredImages = [
    { src: '/images/japan-2017/day-07/day07-route-map.webp', alt: 'Route map from Fukuyama to Okayama through the countryside' },
    { src: '/images/japan-2017/day-07/day07-updates.webp', alt: 'Countryside encounters and accommodation challenges along Route 2' }
  ];

  const weather = {
    title: 'Weather Report',
    description: '13 degrees Celsius with beautiful clear skies. A welcome change from yesterday\'s rain and snow.'
  };
</script>

<svelte:head>
  <title>Day 07 - Route 2 Countryside | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 07 of our Japan kickboard adventure: Following Japan's famous Route 2 through countryside and coastal areas, discovering the quieter side of Japan." />
</svelte:head>

<!-- Day 07: Fukuyama to Okayama -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 07"
      date="2 April 2017"
      title="Fukuyama to Okayama"
      progress="412 kilometres of 1,800"
      subtitle="Route 2 and the countryside"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-8">
      <section>
        <!-- Section: Good progress -->
        <ContentBox type="highlight">
          Optimistic! Left the rain and snows behind to head into clear skies!
        </ContentBox>

        <p class="km-body-text">
          DAY SEVEN of our scooting adventures! Fukuyama to Okayama - 412km of our 1,800km journey.
        </p>

        <p class="km-body-text">
          We made it to Okayama at 7pm and plonked ourselves in a warm and yummy udon shop. The 
          terrain was relatively flat and manageable and we made awesome time overall. We were not 
          even feeling that tired, until...
        </p>
      </section>

      <section>
        <!-- Section: Accommodation struggles -->
        <h3 class="text-xl font-light mb-4 text-km-primary">The accommodation hunt</h3>
        
        <p class="km-body-text">
          We checked and checked and could not find accommodation at a reasonable price for almost 
          3 hours. Then, we got tired of sitting at the udon shop. I found out from my friend Sayana, 
          that this week is an awfully busy period that marks not just the sakura season, but also 
          the starting period of most companies' calendar year, as well as college entrances!
        </p>

        <p class="km-body-text">
          And no wonder the cheapest prices of average accommodation doubled in price. The same room 
          that was $100 a week ago is now $200.
        </p>

        <p class="km-body-text">
          Eventually, after much searching by her very kind husband Yasu and us knocking around hotel 
          doors around the Okayama station, we found a fancy one with a bathtub that has a nightview 
          of the city. It was over budget but at least we got a respite with the beautiful scenery. 
          It was 1am by the time we settled in. We slept the night away, missing breakfast and waking 
          up after checkout time.
        </p>
      </section>

      <section>
        <!-- Section: Countryside encounters -->
        <h3 class="text-xl font-light mb-4 text-km-primary">People of the countryside</h3>
        
        <p class="km-body-text">
          Most of today was uneventful. We met many wonderful people who waved at us. This is why I 
          love the countryside. People slow down and have more time for the present things, where 
          rushing exists only in a past life.
        </p>

        <p class="km-body-text">
          There were many people we met; a rosy cheeked farmer, a father and daughter running down 
          the slope laughing with abandon and a salary man honking and waving at us while we scooted 
          along Route 2.
        </p>

        <p class="km-body-text">
          The one that stuck out in our minds was a grandmother and granddaughter pair, holding hands 
          walking down a steep-sloped driveway. There was a certain gentleness and attentiveness in 
          the grandmother; one that could only come from love. And her granddaughter walked with open 
          curiosity, confidence in her every step in exploring life. You know from the way a child 
          behaves, what her family environment is like.
        </p>
      </section>

      <section>
        <!-- Section: Reflection -->
        <p class="km-body-text">
          It got us begging the question... In our perpetual pursuit for having more, becoming stronger, 
          growing richer, have we neglected being present to the important things in life?
        </p>

        <ContentBox type="quote">
          Perhaps an extended hand to your stumbling child (instead of impatience), a friendly smile 
          to stranger (instead of indifference) and warm hug to your loved ones might make all the 
          difference in having a fulfilling life...
        </ContentBox>
      </section>
    </div>

    <!-- Image galleries -->
    <div class="space-y-8 mb-8">
      <div>
        <ImageGallery title="Day Seven Journey" routeImages={featuredImages} />
      </div>
      <div>
        <ImageGallery photoImages={photos} galleryType="compact" />
      </div>
    </div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={7}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-06-adventurer-vs-nature", label: "Day 6" }}
      nextDay={{ url: "/trips/japan-2017/day-08-momotaro-peach-boy", label: "Day 8" }}
    />

  </div>
</div>
