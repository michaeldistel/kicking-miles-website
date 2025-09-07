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
    { value: '412km', label: 'Progress' },
    { value: 'Recovery', label: 'Focus' }
  ];

  const photos = [
    { src: '/images/japan-2017/day-08/day08-photo-01.webp', alt: 'Overview of Okayama city from hotel' },
    { src: '/images/japan-2017/day-08/day08-photo-02.webp', alt: 'Rest day in Okayama, birthplace of Momotaro' }
  ];

  const featuredImages = [
    { src: '/images/japan-2017/day-08/day08-route-map.webp', alt: 'Rest day location in Okayama - home of Momotaro legend' },
    { src: '/images/japan-2017/day-08/day08-updates.webp', alt: 'Rest day reflections and Momotaro folklore discovery' }
  ];

  const weather = {
    title: 'Weather Report',
    description: 'Good weather. Perfect for a rest day and exploring Okayama culture.'
  };
</script>

<svelte:head>
  <title>Day 08 - Momotaro the Peach Boy | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 08 of our Japan kickboard adventure: Rest day in Okayama exploring the legend of Momotaro the Peach Boy and immersing in local folklore." />
</svelte:head>

<!-- Day 08: Okayama Rest Day -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 08"
      date="2 April 2017"
      title="Okayama"
      progress="412 kilometres of 1,800"
      subtitle="Momotaro the peach boy"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-8">
      <section>
        <!-- Section: Rest and recovery -->
        <ContentBox type="highlight">
          A little tired, day of recuperation. Sometimes kindness and compassion at the right time 
          is what is needed to bring balance and success to our goals.
        </ContentBox>

        <p class="km-body-text">
          DAY EIGHT of our scooting adventures! Okayama - 412km of our 1,800km journey.
        </p>

        <p class="km-body-text">
          Today is a rest day for our muscles. We finally arrived at 11pm+ to our accommodation last 
          night after knocking on many hotel doors! By the time we knocked out, it was 1am+. For the 
          first time since we started, exhaustion hit us and we overslept past checkout time, haha!
        </p>

        <p class="km-body-text">
          There was a strong desire to reprimand ourselves and push forwards to our goal but a bit of 
          kindness and compassion at the right time is what is sometimes needed to bring balance and 
          success to our goals. Resting today and updating our website. Early start tomorrow for Himeji!
        </p>
      </section>

      <section>
        <!-- Section: Okayama overview -->
        <h3 class="text-xl font-light mb-4 text-km-primary">The city of Okayama</h3>
        
        <p class="km-body-text">
          An overview of the city of Okayama from our hotel. Aside from the famous Korakuen gardens, 
          Okayama castle, Okayama is also believed to be the birthplace of the folklore Momotaro.
        </p>

        <p class="km-body-text">
          Momo, meaning peach and Taro, a boy's name, is a common folklore in Japan that represents 
          kindness, bravery, courage and care of the family. While both English and Japanese have 
          many similarities, there is a difference.
        </p>
      </section>

      <section>
        <!-- Section: Cultural reflection -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Folklore and culture</h3>
        
        <p class="km-body-text">
          Japanese and indeed many Asian folklore feature filial piety as a theme. If folklores are 
          simply a reflection of a culture and cultures are a reflection of history, then my question is:
        </p>

        <ContentBox type="quote">
          What in social history necessitated the need for filial piety?
        </ContentBox>

        <p class="km-body-text">
          It is fascinating to consider how stories passed down through generations reveal the values 
          and challenges of the societies that created them. Perhaps the emphasis on family loyalty 
          and respect arose from times when community bonds were essential for survival.
        </p>
      </section>
    </div>

    <!-- Image galleries -->
    <div class="space-y-8 mb-8">
      <div>
        <ImageGallery title="Day Eight Rest" routeImages={featuredImages} />
      </div>
      <div>
        <ImageGallery photoImages={photos} galleryType="compact" />
      </div>
    </div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={8}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-07-route-2-countryside", label: "Day 7" }}
      nextDay={{ url: "/trips/japan-2017/day-09-no-right-or-wrong", label: "Day 9" }}
    />

  </div>
</div>
