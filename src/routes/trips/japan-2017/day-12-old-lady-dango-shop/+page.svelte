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
    { value: '591km', label: 'Progress' },
    { value: 'Warmth', label: 'Experience' }
  ];

  const photos = [
    { src: '/images/japan-2017/day-12/day12-photo-01.webp', alt: 'Police scene in dodgy part of Osaka' },
    { src: '/images/japan-2017/day-12/day12-photo-02.webp', alt: 'Making sengoku war banners at the hostel' },
    { src: '/images/japan-2017/day-12/day12-photo-03.webp', alt: 'Warm and supportive people at Osaka Guesthouse Nest' },
    { src: '/images/japan-2017/day-12/day12-photo-04.webp', alt: 'Clean and cozy hostel environment' },
    { src: '/images/japan-2017/day-12/day12-photo-05.webp', alt: 'Working on website and preparing for journey' },
    { src: '/images/japan-2017/day-12/day12-photo-06.webp', alt: 'Osaka people expressing more freely' },
    { src: '/images/japan-2017/day-12/day12-photo-07.webp', alt: 'Less reservation in Osaka culture' },
    { src: '/images/japan-2017/day-12/day12-photo-08.webp', alt: 'Carefree and open expressions' },
    { src: '/images/japan-2017/day-12/day12-photo-09.webp', alt: 'Visit to the dango shop' },
    { src: '/images/japan-2017/day-12/day12-photo-10.webp', alt: 'Wonderful old lady at dango shop' },
    { src: '/images/japan-2017/day-12/day12-photo-11.webp', alt: 'Dango - chewy mochi rice with soy bean powder' },
    { src: '/images/japan-2017/day-12/day12-photo-12.webp', alt: 'Triple portion gift from kindly obasan' },
    { src: '/images/japan-2017/day-12/day12-photo-13.webp', alt: 'Big cheer for the journey ahead' }
  ];

  const featuredImages = [
    { src: '/images/japan-2017/day-12/day12-updates.webp', alt: 'Rest day highlights and memorable dango shop encounter with the old lady' }
  ];

  const weather = {
    title: 'Rest Day',
    description: 'An unexpected rest day in Osaka, spent preparing for the journey ahead and meeting wonderful local people.'
  };
</script>

<svelte:head>
  <title>Day 12 - An Old Lady in a Dango Shop | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 12 of our Japan kickboard adventure: Rest day in Osaka featuring a memorable encounter with an elderly lady in a traditional dango shop." />
</svelte:head>

<!-- Day 12: Osaka Rest Day -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 12"
      date="7 April 2017"
      title="Osaka"
      progress="591 kilometres of 1,800"
      subtitle="An old lady in a dango shop"
    />

    <StatsBox {stats} columns={2} />

    <!-- Weather -->
    <div class="mb-12">
      <WeatherBox {weather} />
    </div>

    <!-- Main content -->
    <div class="space-y-8 mb-8">
      <section>
        <!-- Section: Unexpected rest day -->
        <ContentBox type="highlight">
          Today is an unexpected rest day. We had an eventful time at the Osaka Guesthouse Nest, 
          preparing our 'war banners' and meeting wonderful people.
        </ContentBox>

        <p class="km-body-text">
          Osaka - 591km of our 1,800km journey. A day of preparation, cultural observation, and 
          unexpected kindness.
        </p>

        <p class="km-body-text">
          We went through a dodgy part of town on our way to our hostel when we saw a crowd of 
          policemen reprimanding a group of young punks. This is a scene that, even after visiting 
          Japan more than 10 times and travelling north to south twice, I have ever only seen once. 
          And this in Osaka. Perhaps casualness and passion comes with an intrinsic price?
        </p>
      </section>

      <section>
        <!-- Section: Hostel experience -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Sengoku war banners</h3>
        
        <p class="km-body-text">
          Making our 'sengoku' war banner to be carried on our backpacks!!! Everyone here at Osaka 
          Guesthouse Nest have been really warm and supportive of our adventure! Their cheers and 
          encouragement brings a smile to all our faces. It has been a good time in Osaka!
        </p>

        <p class="km-body-text">
          We spent our whole day fixing our website and preparing our 'war banners'. Why do I have 
          this feeling we will embarrass ourselves! We seem to have a penchant for that!
        </p>
      </section>

      <section>
        <!-- Section: Osaka character -->
        <h3 class="text-xl font-light mb-4 text-km-primary">Extremes and expression</h3>
        
        <p class="km-body-text">
          People in Osaka behave in more extremes than the rest of Japan. There seems to be less 
          reservation and care about how they come across, so their expression is a lot more carefree 
          and open.
        </p>
      </section>

      <section>
        <!-- Section: Dango shop encounter -->
        <h3 class="text-xl font-light mb-4 text-km-primary">The kindly obasan</h3>
        
        <p class="km-body-text">
          Aside from the wonderful people at the hostel, we also met a wonderful old lady at the 
          dango shop. Dango is a Japanese dessert made of chewy mochi rice sprinkled with soy bean 
          powder. Oh so yummylicious!
        </p>

        <ContentBox type="quote">
          We went in to buy a small box of dango but ended up with three times more; a gift from 
          the kindly obasan and a big cheer from her for our journey ahead!
        </ContentBox>

        <p class="km-body-text">
          These moments of unexpected generosity and encouragement from strangers remind us why 
          travel opens the heart. The old lady's kindness was not just about the dango - it was 
          about human connection and support for our adventure.
        </p>
      </section>
    </div>

    <!-- Image galleries -->
    <div class="space-y-8 mb-8">
      <div>
        <ImageGallery title="Day Twelve Rest" routeImages={featuredImages} />
      </div>
      <div>
        <ImageGallery photoImages={photos} galleryType="compact" />
      </div>
    </div>

    <!-- Day navigation -->
  <!-- Day navigation -->
  <DayNavigation 
    currentDay={12}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017/day-11-rebellious-heterogeneity", label: "Day 11" }}
    nextDay={{ url: "/trips/japan-2017/day-13-let-no-war-banner-fall", label: "Day 13" }}
  />

  </div>
</div>
