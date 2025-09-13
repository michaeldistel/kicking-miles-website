<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

  const stats = [
    { value: 'Rest day', label: 'Time' },
    { value: 'Hiroshima', label: 'Location' },
    { value: 'Sakura spotted', label: 'Discovery' },
    { value: 'Recuperating', label: 'Mood' },
    { value: 'Cool weather', label: 'Temp' }
  ];

  const routeImages = [
    { src: '/images/japan-2017/day-05/route-map-3x4.webp', alt: 'Rest day location in Hiroshima for sakura discovery' },
    { src: '/images/japan-2017/day-05/updates-1x1.webp', alt: 'Sakura discovery and rest day highlights in Hiroshima' }
  ];

  const photoImages = [
    { src: '/images/japan-2017/day-05/photo-01-4x3.webp', alt: 'Rest day in Hiroshima' },
    { src: '/images/japan-2017/day-05/photo-02-4x3.webp', alt: 'Maintaining and repairing scooters' },
    { src: '/images/japan-2017/day-05/photo-03-3x4.webp', alt: 'Hiroshima Peace Memorial Park visit' },
    { src: '/images/japan-2017/day-05/photo-04-3x4.webp', alt: 'First sakura blooms spotted!' },
    { src: '/images/japan-2017/day-05/photo-05-3x4.webp', alt: 'Cherry blossom chase begins' },
    { src: '/images/japan-2017/day-05/photo-06-3x4.webp', alt: 'Peaceful moments at the memorial park' },
    { src: '/images/japan-2017/day-05/photo-07-4x3.webp', alt: 'Beautiful cool weather in Hiroshima' }
  ];

  // Combine all images for PhotoSwipe gallery
  const allImages = [...routeImages, ...photoImages];
  const galleryImages = prepareImagesForPhotoSwipe(allImages);
</script>

<svelte:head>
  <title>Day 05 - The Sakura Chase Begins | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 05 of our Japan kickboard adventure: A rest day in Hiroshima brings our first glimpse of cherry blossoms and visits to the Peace Memorial Park." />
</svelte:head>

<!-- Day 05: Hiroshima Rest Day -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="Day 05"
      date="30 March 2017"
      title="The sakura chase has begun!"
      progress="274 kilometres of 1,800"
      subtitle="Day five"
    />
  </div>
  
  <!-- Full-width stats box outside content wrapper -->
  <div class="mt-12 mb-8">
    <StatsBox {stats} columns={5} fullWidth={true} />
  </div>

  <div class="km-content-wrapper">

    <!-- Main content -->
    <div class="km-prose-content space-y-8">
      <section>
        <p class="km-body-text">
          It has officially begun!!! First blooms spotted! Chasing the cherry blossoms across Japan on scooter!
        </p>

        <p class="km-body-text">
          We spent today loading up on calories, repairing and maintaining our scooters and having a few quiet moments at the Hiroshima Peace Memorial Park.
        </p>

        <p class="km-body-text">
          Today is a rest day for our muscles and maintenance day for our scooters. Scooting pass a Pepper Lunch wannabe place, we hopped in and ordered a 300g sirloin steak (and steak only LOL) for a much needed replenishment! We devoured the medium-rare sirloin steak to make up for the three days of convenience store food! (For those who don't know, Pepper Lunch is one of those delicious hot plate food where the food is cooked on the plate that they serve you)
        </p>

        <p class="km-body-text">
          A trip to Don Quijote and Daiso also got us some supplies! We had a generally lazy day, updating our website, looking for tools, restocking our supplies... and enjoying the wonderful weather at the park.
        </p>

        <p class="km-body-text">
          Guess what we saw while chatting on the bench across from the Atomic Bomb Dome?!? The very first blooms of the sakura flowers above us!!! The first flowers spotted on this trip!!! It has officially begun! Chasing the cherry blossom front across Japan, from Kyushu to Hokkaido, north to south of Japan!!! Within each city, the cherry blossoms stay in bloom for perhaps one week of the entire year. They travel from south to north of Japan over the course of a month as they bloom in response to the increasing weather changes in altitude, ushering spring. Can we make it to Hokkaido in time before they wilt?
        </p>

        <p class="km-body-text">
          With that beautiful thought comes other things to ponder. Perhaps we'll spend an evening appreciating how far life has come since the atomic bomb. We'll sit under the first blooms of the sakura tonight and say a silent appreciation in our hearts for the rebirth and acknowledgement of the transience of life. Thank you.
        </p>
      </section>

      <section>
        <p class="text-sm text-km-subtle italic mt-8">
          - Michelle Yang
        </p>
      </section>

      <!-- PhotoSwipe Gallery -->
      <PhotoSwipeGallery 
        images={galleryImages} 
        title="Sakura Discovery & Memorial Park" 
        galleryId="day05-gallery"
      />
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
