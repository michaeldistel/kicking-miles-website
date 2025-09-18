<script lang="ts">
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import { onMount } from 'svelte';
  import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

  const stats = [
    { value: '754km', label: 'Distance' },
    { value: '1800km', label: 'Total' },
    { value: '8 hours', label: 'Scooting' },
    { value: 'Boys slightly unwell', label: 'Mood' }
  ];

  const images = [
    // Updates
    { src: '/images/japan-2017/day-16/updates-01-1x1.webp', alt: 'Day 16 updates and reflections on simple appreciation' },
    
    // Photo gallery
    { src: '/images/japan-2017/day-16/photo-01-3x4.webp', alt: 'Friendly send-off by hotel staff' },
    { src: '/images/japan-2017/day-16/photo-02-4x3.webp', alt: 'Taking it easy at slow pace to Nagoya' },
    { src: '/images/japan-2017/day-16/photo-03-4x3.webp', alt: 'Lunch at Sukiya with role-reversed ordering' }
  ];

  let pswpImages: any[] = [];

  onMount(() => {
    pswpImages = prepareImagesForPhotoSwipe(images);
  });
</script>

<svelte:head>
  <title>Day 16 - Simple Appreciation | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 16 of our Japan kick scooter adventure: Finding simple appreciation and simple joys on the road to Nagoya, discovering profound moments in small observations." />
</svelte:head>

<!-- Day 16: Yokkaichi to Nagoya -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 16"
      date="10 April 2017"
      title="Simple appreciation, simple joys"
      progress="754 kilometres of 1,800"
      subtitle="Day 16"
    />

    <div class="mb-8 mt-12">
      <StatsBox {stats} fullWidth />
    </div>

    <!-- Main content -->
    <div class="km-prose-content space-y-8">
      <section>
        <p class="km-body-text">
          We had a very friendly send off by the hotel staff! The boys were still down with mild diarrhoea so we took it easy and went at a slow pace to Nagoya today. The elevation was in our favour and the grey weather held!
        </p>

        <p class="km-body-text">
          During lunch at Sukiya, a type of beef bowl, and also for the last two days, the girls were ordering twice as much as the boys. It was funny because almost all the waitresses wanted to serve the bigger orders to the boys before we tell them its ours,
        </p>

        <p class="km-body-text">
          One of the things that we have come to appreciate this trip are the convenience stores along the way. These common, unremarkable shops have supported us in more ways than one. They serve as a rest stop for replenishment and refuelling, they allow us a place to rest and use the washroom and they are also a distance marker that when passed, tells us that we have moved forwards from our last spot.
        </p>

        <p class="km-body-text">
          Without them, our trip would be twice as gruelling and three times more difficult to complete. Perhaps, these common and apparently insignificant things, serve society in more ways than they are given credit for. Many things we take for granted are simply because they are just there. And in taking things for granted, perhaps we lose sight of the small ways that we can live happily. Expectation is always the nemesis to joy.
        </p>

        <p class="km-body-text">
          Perhaps a simple appreciation is all that is required to spark joy in our daily life.
        </p>

        <p class="text-sm text-km-subtle italic mt-8">
          Michelle Yang
        </p>
      </section>

      <!-- PhotoSwipe Gallery -->
      <div class="mt-12">
        <PhotoSwipeGallery images={pswpImages} title="Day 16: Simple Appreciation" />
      </div>
    </div>

    
    <!-- Day navigation -->
  <!-- Day navigation -->
  <DayNavigation 
    currentDay={16}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017/day-15-food-poisoning", label: "Day 15" }}
    nextDay={{ url: "/trips/japan-2017/day-17-update", label: "Day 17" }}
  />

  </div>
</div>
