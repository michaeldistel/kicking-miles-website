<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: '44km', label: 'Distance' },
    { value: '4 hours', label: 'Scooting time' },
    { value: '591km', label: 'Progress' },
    { value: '20°C', label: 'Temperature' }
  ];

  const photos = [
    { src: '/images/japan-2017/day-11/day11-photo-01.webp', alt: 'Arriving in Osaka, Japan\'s third biggest city' },
    { src: '/images/japan-2017/day-11/day11-photo-02.webp', alt: 'Osaka\'s unique kuidaore culture - eat until you burst!' },
    { src: '/images/japan-2017/day-11/day11-photo-03.webp', alt: 'Heterogeneous culture blending in Osaka' },
    { src: '/images/japan-2017/day-11/day11-photo-04.webp', alt: 'Casual dress and mannerisms of Osaka' },
    { src: '/images/japan-2017/day-11/day11-photo-05.webp', alt: 'Easy-going attitude and friendly language' },
    { src: '/images/japan-2017/day-11/day11-photo-06.webp', alt: 'Rebellious heterogeneity in homogeneous Japan' },
    { src: '/images/japan-2017/day-11/day11-photo-07.webp', alt: 'Coordinated haphazardness of mixed cultures' }
  ];

  const weather = {
    title: 'Weather Report',
    description: '20 degrees Celsius with another beautiful day. Perfect weather for exploring Osaka\'s unique culture.'
  };
</script>

<svelte:head>
  <title>Day 11 - Rebellious Heterogeneity | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 11 of our Japan kickboard adventure: Discovering pockets of rebellious heterogeneity within Japan's famously homogeneous society." />
</svelte:head>

<!-- Day 11: Kobe to Osaka -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 11"
      date="5 April 2017"
      title="Kobe to Osaka"
      progress="591 kilometres of 1,800"
      subtitle="Rebellious heterogeneity in a homogenous culture"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-8">
      <section>
        <!-- Section: Easy day -->
        <ContentBox type="highlight">
          Just an easy distance today, feeling relaxed. DAY 11 of our scooting adventures!
        </ContentBox>

        <p class="km-body-text">
          Kobe to Osaka - 591km of our 1,800km journey. A shorter day with only 4 hours of scooting, 
          giving us time to truly explore what makes Osaka special.
        </p>
      </section>

      <section>
        <!-- Section: Osaka's culture -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Kuidaore - eat until you burst!</h3>
        
        <p class="km-body-text">
          We hit the main town of Osaka and partook in their culinary delights. As Japan's third 
          biggest city, and the economic crossroads of East and West Japan in the 1800s, Osaka boasts 
          its own unique culture, in particular what is known as 'kuidaore' or 'eat until you burst!'.
        </p>

        <p class="km-body-text">
          This culture of insatiable gluttony is perhaps a reflection of their passionate dynamism 
          that comes from being at ease with themselves and waves of foreign influence.
        </p>
      </section>

      <section>
        <!-- Section: Cultural observations -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Coordinated haphazardness</h3>
        
        <p class="km-body-text">
          Almost all heterogeneous cultures feature some form of coordinated haphazardness, as each 
          incumbent culture sets aside their differences to blend into one whole. Osaka is no different. 
          You can see it in their dressing, their mannerisms and even their language.
        </p>

        <p class="km-body-text">
          There is more than a truce; there is acceptance and ease. What seems wordy and formal in 
          Tokyo is shortened and friendly here. This casualness and an easy-going attitude is what 
          comes with being comfortable with where one is in life...
        </p>
      </section>

      <section>
        <!-- Section: Evolutionary question -->
        <h3 class="text-xl font-light mb-4 text-km-primary">The evolution of culture</h3>
        
        <ContentBox type="quote">
          If evolution is the response to the change of environmental characteristics, the question 
          to ask is, what was it about the societal environment in Osaka that gave rise to this 
          rebellious heterogeneity in a homogeneous culture that is characteristic of the rest of Japan?
        </ContentBox>

        <p class="km-body-text">
          Perhaps it was Osaka's position as a trading hub, where different cultures naturally 
          collided and blended. Or maybe it was the economic necessity of adaptation that fostered 
          this openness to change and difference.
        </p>

        <p class="km-body-text">
          Whatever the cause, Osaka stands as a fascinating example of how geography, economics, 
          and cultural exchange can create islands of diversity within otherwise homogeneous societies.
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
    currentDay={11}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017/day-10-economic-success", label: "Day 10" }}
    nextDay={{ url: "/trips/japan-2017/day-12-old-lady-dango-shop", label: "Day 12" }}
  />

  </div>
</div>
