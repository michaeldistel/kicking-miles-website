<script lang="ts">
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import { onMount } from 'svelte';
  import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

  const stats = [
    { value: '754', label: 'Distance' },
    { value: '1800km', label: 'Total' },
    { value: '8 degrees c', label: 'Temperature' },
    { value: 'Rest day', label: 'Activity' }
  ];

  const images = [
    { src: '/images/japan-2017/day-17/updates-01-1x1.webp', alt: 'Weather delay update and team rest day planning in Nagoya' }
  ];

  let pswpImages: any[] = [];

  onMount(() => {
    pswpImages = prepareImagesForPhotoSwipe(images);
  });

  const weather = {
    title: 'Weather Report',
    description: 'It was raining the whole day today and temperature was about 8 degrees c'
  };
</script>

<svelte:head>
  <title>Day 17 - Nagoya Update | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 17 of our Japan kick scooter adventure: A rest day in Nagoya for updates and reflection, taking stock of progress and preparing for challenges ahead." />
</svelte:head>

<!-- Day 17: Nagoya Rest Day -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 17"
      date="11 April 2017"
      title="Nagoya"
      progress="754 kilometres of 1,800"
      subtitle="Update"
    />

    <div class="mb-8 mt-12">
      <StatsBox {stats} columns={4} fullWidth={true} />
    </div>

    <!-- Main content -->
    <div class="km-prose-content space-y-8">
      <section>
        <p class="km-body-text">
          <strong>DAY 17 of our scooting adventures!</strong><br><br>

          Nagoya - 754 / 1800km
        </p>

        <p class="km-body-text">
          It was raining the whole day today and temperature was about 8 degrees c, so we decided to stay in Nagoya for an extra day. The girls went out shopping while the boys lazed in the hotel room, lol. Tomorrow is gonna be a sunny day at 18 degrees c! Onwards to Gamagori!
        </p>

        <p class="text-sm text-km-subtle italic mt-8">
          Michelle Yang
        </p>
      </section>

      <!-- Image galleries -->
      <div>
        <PhotoSwipeGallery images={pswpImages} title="Day 17 Updates" galleryId="day17-all" />
      </div>
    </div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={17}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-16-simple-appreciation", label: "Day 16" }}
      nextDay={{ url: "/trips/japan-2017/day-18-dental-floss-makes-good-repair-tape", label: "Day 18" }}
  />

  </div>
</div>
