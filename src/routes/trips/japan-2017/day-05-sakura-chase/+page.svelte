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
    { value: '274km', label: 'Progress' },
    { value: 'Sakura!', label: 'Discovery' }
  ];

  const photos = [
    { src: '/images/japan-2017/day-05/day05-photo-01.webp', alt: 'Rest day in Hiroshima' },
    { src: '/images/japan-2017/day-05/day05-photo-02.webp', alt: 'Maintaining and repairing scooters' },
    { src: '/images/japan-2017/day-05/day05-photo-03.webp', alt: 'Hiroshima Peace Memorial Park visit' },
    { src: '/images/japan-2017/day-05/day05-photo-04.webp', alt: 'First sakura blooms spotted!' },
    { src: '/images/japan-2017/day-05/day05-photo-05.webp', alt: 'Cherry blossom chase begins' },
    { src: '/images/japan-2017/day-05/day05-photo-06.webp', alt: 'Peaceful moments at the memorial park' },
    { src: '/images/japan-2017/day-05/day05-photo-07.webp', alt: 'Beautiful cool weather in Hiroshima' }
  ];

  const featuredImages = [
    { src: '/images/japan-2017/day-05/day05-route-map.webp', alt: 'Rest day location in Hiroshima for sakura discovery' },
    { src: '/images/japan-2017/day-05/day05-updates.webp', alt: 'Sakura discovery and rest day highlights in Hiroshima' }
  ];

  const weather = {
    title: 'Weather Report',
    description: 'Beautiful cool weather! Perfect conditions for a rest day and exploring Hiroshima.'
  };
</script>

<svelte:head>
  <title>Day 05 - The Sakura Chase Begins | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 05 of our Japan kickboard adventure: A rest day in Hiroshima brings our first glimpse of cherry blossoms and visits to the Peace Memorial Park." />
</svelte:head>

<!-- Day 05: Hiroshima Rest Day -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 05"
      date="30 March 2017"
      title="Hiroshima"
      progress="274 kilometres of 1,800"
      subtitle="The sakura chase has begun!"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-12">
      <section>
        <!-- Section: The discovery -->
        <ContentBox type="highlight">
          It has officially begun!!! First blooms spotted! Chasing the cherry blossoms across Japan on scooter!
        </ContentBox>

        <p class="km-body-text">
          DAY FIVE of our scooting adventures! Hiroshima - 274km of our 1,800km journey.
        </p>

        <p class="km-body-text">
          We spent today loading up on calories, repairing and maintaining our scooters and having 
          a few quiet moments at the Hiroshima Peace Memorial Park.
        </p>
      </section>

      <section>
        <!-- Section: Rest and maintenance -->
        <p class="km-body-text">
          Today is a rest day for our muscles and maintenance day for our scooters. Scooting past 
          a Pepper Lunch wannabe place, we hopped in and ordered a 300g sirloin steak (and steak 
          only LOL) for much needed replenishment!
        </p>

        <p class="km-body-text">
          We devoured the medium-rare sirloin steak to make up for the three days of convenience 
          store food! (For those who do not know, Pepper Lunch is one of those delicious hot plate 
          food where the food is cooked on the plate that they serve you.)
        </p>

        <p class="km-body-text">
          A trip to Don Quijote and Daiso also got us some supplies! We had a generally lazy day, 
          updating our website, looking for tools, restocking our supplies... and enjoying the 
          wonderful weather at the park.
        </p>
      </section>

      <section>
        <!-- Section: Sakura discovery -->
        <h3 class="text-xl font-light mb-4 text-km-primary">The sakura chase begins</h3>
        
        <p class="km-body-text">
          Guess what we saw while chatting on the bench across from the Atomic Bomb Dome?!? The 
          very first blooms of the sakura flowers above us!!! The first flowers spotted on this trip!!!
        </p>

        <ContentBox type="quote">
          It has officially begun! Chasing the cherry blossom front across Japan, from Kyushu to 
          Hokkaido, south to north of Japan!!!
        </ContentBox>

        <p class="km-body-text">
          Within each city, the cherry blossoms stay in bloom for perhaps one week of the entire year. 
          They travel from south to north of Japan over the course of a month as they bloom in response 
          to the increasing weather changes in altitude, ushering spring. Can we make it to Hokkaido 
          in time before they wilt?
        </p>
      </section>

      <section>
        <!-- Section: Reflection -->
        <p class="km-body-text">
          With that beautiful thought comes other things to ponder. Perhaps we will spend an evening 
          appreciating how far life has come since the atomic bomb. We will sit under the first blooms 
          of the sakura tonight and say a silent appreciation in our hearts for the rebirth and 
          acknowledgement of the transience of life.
        </p>

        <ContentBox type="quote">
          Thank you.
        </ContentBox>
      </section>
    </div>

    <!-- Image galleries -->
    <div class="space-y-8 mb-8">
      <div>
        <ImageGallery title="Day Five Journey" routeImages={featuredImages} />
      </div>
      <div>
        <ImageGallery photoImages={photos} galleryType="compact" />
      </div>
    </div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={5}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-04-lesson-in-humility", label: "Day 4" }}
      nextDay={{ url: "/trips/japan-2017/day-06-adventurer-vs-nature", label: "Day 6" }}
    />

  </div>
</div>
