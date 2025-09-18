<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

  const stats = [
    { value: '8 hours', label: 'Time' },
    { value: 'Kitakyushu', label: 'Destination' },
    { value: 'Rain & hail', label: 'Challenge' },
    { value: 'Nervous', label: 'Mood' },
    { value: '8-12°C', label: 'Temp' },
    { value: '70km', label: 'Distance' }
  ];

  const routeImages = [
    { src: '/images/japan-2017/day-01/route-map-1x1.webp', alt: 'Route map showing the path from Fukuoka to Kitakyushu' },
    { src: '/images/japan-2017/day-01/updates-3x4.webp', alt: 'Journey updates and progress notes from Fukuoka to Kitakyushu' }
  ];

  const photoImages = [
    { src: '/images/japan-2017/day-01/photo-02-4x3.webp', alt: 'First moments on the kickboards beginning the Japan adventure' },
    { src: '/images/japan-2017/day-01/photo-03-4x3.webp', alt: 'Caught in a severe storm with heavy rain and strong winds' },
    { src: '/images/japan-2017/day-01/photo-04-4x3.webp', alt: 'Seeking shelter from rain and hail under cover' },
    { src: '/images/japan-2017/day-01/photo-05-16x9.webp', alt: 'Finding refuge and warmth inside McDonald\'s during the storm' },
    { src: '/images/japan-2017/day-01/photo-06-4x3.webp', alt: 'Wet and cold but determined to continue the journey' },
    { src: '/images/japan-2017/day-01/photo-07-4x3.webp', alt: 'Beautiful rainbow appearing after the storm passes' },
    { src: '/images/japan-2017/day-01/photo-08-4x3.webp', alt: 'Arriving in Kitakyushu tired but successful at midnight' },
    { src: '/images/japan-2017/day-01/photo-09-4x3.webp', alt: 'Exhausted but celebrating a successful completion of the challenging first day' },
    { src: '/images/japan-2017/day-01/photo-10-4x3.webp', alt: 'Hotel arrival and rest after 10-hour adventure' }
  ];

  // Combine all images for PhotoSwipe gallery
  const allImages = [...routeImages, ...photoImages];
  const galleryImages = prepareImagesForPhotoSwipe(allImages);
</script>

<svelte:head>
  <title>Day 01 - A beautiful start to our trip! | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 01 of our Japan kick scooter adventure: A beautiful start with 70km from Fukuoka to Kitakyushu, complete with rain, hail, and our first taste of the journey ahead." />
</svelte:head>

<!-- Day 01: Fukuoka to Kitakyushu -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="Day 01"
      date="26 March 2017"
      title="A beautiful start to our trip!"
      subtitle="Day one"
      progress="70 kilometres of 1,800"
    />
  </div>
  
  <!-- Full-width stats box outside content wrapper -->
  <div class="mt-12 mb-8">
    <StatsBox {stats} columns={6} fullWidth={true} />
  </div>

  <div class="km-content-wrapper">

    <!-- Main content -->
    <div class="km-prose-content space-y-8">
      <section>
        <p class="km-body-text">
          We finally made it to Kitakyushu in one piece after about 10 hours on the road and were greeted by the sight of a beautiful rainbow. Shortly after we hit the main town, it started pouring. We took cover in Macdonalds for about 2 hours when we finally decided to brave the rain and complete the last 15 kms to the hotel.... when... it started to hail! After more taking shelter, we got to our hotel at 12am.
        </p>

        <p class="km-body-text">
          Temperature was cooool. We started at 12 degrees c but one stage it dropped to 8. It was hard when we stopped scooting, for example to take a drink. Had to keep going.
        </p>

        <p class="km-body-text">
          Calories burnt: ~6000 kcal
        </p>

        <p class="km-body-text">
          We subsisted on convenience food the whole day and didnt manage to have time for a full meal. Whatevs we have enough fats on us to last 😂
        </p>

        <p class="km-body-text">
          By the time we went to bed it was 2am. So tmr will be a shorter day. Calves aching, feeling exhausted but otherwise doing okay!
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
        title="Journey Photos & Route Map" 
        galleryId="day01-gallery"
      />
    </div>

  
    <!-- Day navigation -->
  <DayNavigation 
    currentDay={1}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017/day-00-before-the-adventure", label: "Day 0" }}
    nextDay={{ url: "/trips/japan-2017/day-02-kyushu-to-honshu", label: "Day 2" }}
  />

  </div>
</div>
