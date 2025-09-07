<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: '0km', label: 'Distance' },
    { value: 'Train', label: 'Transport' },
    { value: '714km', label: 'Progress' },
    { value: '16°C', label: 'Temperature' }
  ];

  const photos = [
    { src: '/images/japan-2017/day-15/day15-photo-01.webp', alt: 'Unexpected ninja festival in Iga' },
    { src: '/images/japan-2017/day-15/day15-photo-02.webp', alt: 'Whole town out at Iga castle' },
    { src: '/images/japan-2017/day-15/day15-photo-03.webp', alt: 'Lovers having picnic under blooming sakura' },
    { src: '/images/japan-2017/day-15/day15-photo-04.webp', alt: 'Families attending ninja performances' },
    { src: '/images/japan-2017/day-15/day15-photo-05.webp', alt: 'Shiba-ken dogs dressed as ninjas' },
    { src: '/images/japan-2017/day-15/day15-photo-06.webp', alt: 'Dogs posing for crowds at festival' },
    { src: '/images/japan-2017/day-15/day15-photo-07.webp', alt: 'Learning about ninja history and roles' },
    { src: '/images/japan-2017/day-15/day15-photo-08.webp', alt: 'Political espionage and bodyguard duties' },
    { src: '/images/japan-2017/day-15/day15-photo-09.webp', alt: 'Secret messenger carriers protecting information' },
    { src: '/images/japan-2017/day-15/day15-photo-10.webp', alt: 'Documents committed to memory' },
    { src: '/images/japan-2017/day-15/day15-photo-11.webp', alt: 'Information carved on skin if needed' },
    { src: '/images/japan-2017/day-15/day15-photo-12.webp', alt: 'Risk of human life for simple messages' },
    { src: '/images/japan-2017/day-15/day15-photo-13.webp', alt: 'Modern communication technology contrast' },
    { src: '/images/japan-2017/day-15/day15-photo-14.webp', alt: 'WhatsApp, email, social media platforms' },
    { src: '/images/japan-2017/day-15/day15-photo-15.webp', alt: 'Life changed for the better over centuries' },
    { src: '/images/japan-2017/day-15/day15-photo-16.webp', alt: 'Commoners today vs kings of yesterday' },
    { src: '/images/japan-2017/day-15/day15-photo-17.webp', alt: 'Modern advancement in perspective' }
  ];

  const featuredImages = [
    { src: '/images/japan-2017/day-15/day15-route-map.webp', alt: 'Train journey route to Yokkaichi due to food poisoning setback' },
    { src: '/images/japan-2017/day-15/day15-updates.webp', alt: 'Ninja festival discovery and historical reflections from the recovery day' }
  ];

  const weather = {
    title: 'Weather Report',
    description: '16 degrees Celsius. Travel plans changed due to team food poisoning - taking the train instead.'
  };
</script>

<svelte:head>
  <title>Day 15 - Food Poisoning | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 15 of our Japan kickboard adventure: When adventure meets adversity through food poisoning, learning about team support and resilience." />
</svelte:head>

<!-- Day 15: Iga to Yokkaichi -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 15"
      date="9 April 2017"
      title="Iga to Yokkaichi"
      progress="714 kilometres of 1,800"
      subtitle="Oh no the boys have food poisoning!"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-8">
      <section>
        <!-- Section: Food poisoning crisis -->
        <ContentBox type="highlight">
          Two of our team mates are down with food poisoning and diarrhoea. We're taking it easy 
          and hopping on a train to the next town.
        </ContentBox>

        <p class="km-body-text">
          DAY 15 of our scooting adventures! Iga to Yokkaichi - 714km of our 1,800km journey.
        </p>

        <p class="km-body-text">
          When in Iga do as the ninjas do! It was an unexpected stop over and an even more unexpected 
          city fare! When we were about to leave Iga, we found out that there was a ninja festival 
          of sorts!
        </p>

        <p class="km-body-text">
          Having decided to take the train to Yokkaichi because both the boys were down with food 
          poisoning and diarrhoea, we took a detour and joined the local throng at the Iga castle.
        </p>
      </section>

      <section>
        <!-- Section: Festival discovery -->
        <h3 class="text-xl font-light mb-4 text-km-primary">An unexpected festival</h3>
        
        <p class="km-body-text">
          It was a pleasant surprise to see the whole town out in the field; many lovers having a 
          picnic under the blooming sakura trees, families going for the ninja performances at the 
          museum and even the shiba-ken dogs dressing as ninjas and posing for the crowds!
        </p>
      </section>

      <section>
        <!-- Section: Ninja education -->
        <h3 class="text-xl font-light mb-4 text-km-primary">More than secret agents</h3>
        
        <p class="km-body-text">
          We learnt that aside from political espionage and being body guards of the lords, they 
          were also secret messenger carriers who protected important information with their lives. 
          Highly sensitive documents were to be committed to memory and even carved on their skin 
          if needed.
        </p>
      </section>

      <section>
        <!-- Section: Historical perspective -->
        <h3 class="text-xl font-light mb-4 text-km-primary">The privilege of modern life</h3>
        
        <p class="km-body-text">
          At that moment it occurred to us that here we are easily communicating with each other 
          over technology - WhatsApp, email, social media platforms - while it took them the risk 
          of a human life for a simple message.
        </p>

        <ContentBox type="quote">
          Life has changed over the centuries and for better. We might be commoners but the 
          commoners of today live a better life than the kings and lords of yesterday.
        </ContentBox>

        <p class="km-body-text">
          Puts our modern advancement in perspective. Sometimes it takes stepping into history to 
          fully appreciate the extraordinary ordinariness of our daily lives. What we consider 
          mundane - instant communication, safe travel, accessible information - would have been 
          miraculous to previous generations.
        </p>
      </section>
    </div>

    <!-- Image galleries -->
    <div class="space-y-8 mb-8">
      <div>
        <ImageGallery title="Day Fifteen Discovery" routeImages={featuredImages} />
      </div>
      <div>
        <ImageGallery photoImages={photos} galleryType="compact" />
      </div>
    </div>

    <!-- Day navigation -->
  <!-- Day navigation -->
  <DayNavigation 
    currentDay={15}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017/day-14-legendary-bowing-deer", label: "Day 14" }}
    nextDay={{ url: "/trips/japan-2017/day-16-simple-appreciation", label: "Day 16" }}
  />

  </div>
</div>
