<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: 'DAY 11', label: 'Scooting Adventures' },
    { value: '591km / 1800km', label: 'Kobe to Osaka' },
    { value: '4 hours', label: 'Estimated scooting time' },
    { value: 'Relaxed!', label: 'Mood' }
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
    description: '20 degrees c, another beautiful day. Just an easy distance today, feeling relaxed.'
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
      title="Rebellious heterogeneity in a homogenous culture"
      progress="591 kilometres of 1,800"
      subtitle="Day 11"
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
          <strong>DAY 11 of our scooting adventures!</strong><br>
          Kobe to Osaka - 591km / 1800km<br>
          Estimated scooting time: 4 hours<br>
          Weather: 20 degrees c, another beautiful day<br>
          Mood: Just an easy distance today, feeling relaxed
        </p>
      </section>

      <section>
        <p class="km-body-text">
          We hit the main town of Osaka and partook in their culinary delights. As Japan's third's biggest city, and the economic crossroads of East and West Japan in the 1800s, Osaka boasts its own unique culture, in particular what is known as 'kuidaore' or 'eat until you burst!'. This culture of insatiable gluttony is perhaps a reflection of their passionate dynamism that comes from being at ease with themselves and waves of foreign influence.
        </p>

        <p class="km-body-text">
          Almost all heterogenous cultures feature some form of coordinated haphazardness, as each incumbent culture sets aside their differences to blend into one whole. Osaka is no different. You can see it in their dressing, their mannerisms and even their language. There is more than a truce; there is acceptance and ease. What seems wordy and formal in Tokyo is shortened and friendly here. This casualness and an easy-going attitude is what comes with being comfortable with where one is in life...
        </p>

        <p class="km-body-text">
          If evolution is the response to the change of environmental characteristics, the question to ask is, what was it about the societal environment in Osaka that gave rise to this rebellious heterogeneity in a homogenous culture that is characteristic of the rest of Japan?
        </p>
      </section>

      <section>
        <p class="km-body-text font-medium mt-8">
          - Michelle Yang
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
