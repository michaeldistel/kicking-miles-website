<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils.js';

  const stats = [
    { value: 'Rest day', label: 'Osaka' },
    { value: '581 / 1800km', label: 'Progress' },
    { value: 'War banners', label: 'Preparation' },
    { value: 'Dango shop!', label: 'Discovery' },
    { value: 'Kindness', label: 'Experience' }
  ];

  // Combined gallery images with new filenames - Day 12 only has updates, no route-map
  const galleryImages = prepareImagesForPhotoSwipe([
    { src: '/images/japan-2017/day-12/updates-01-1x1.webp', alt: 'Rest day highlights and memorable dango shop encounter with the old lady' },
    { src: '/images/japan-2017/day-12/photo-01-4x3.webp', alt: 'Police scene in dodgy part of Osaka' },
    { src: '/images/japan-2017/day-12/photo-02-4x3.webp', alt: 'Making sengoku war banners at the hostel' },
    { src: '/images/japan-2017/day-12/photo-03-4x3.webp', alt: 'Warm and supportive people at Osaka Guesthouse Nest' },
    { src: '/images/japan-2017/day-12/photo-04-16x9.webp', alt: 'Clean and cozy hostel environment' },
    { src: '/images/japan-2017/day-12/photo-05-3x4.webp', alt: 'Working on website and preparing for journey' },
    { src: '/images/japan-2017/day-12/photo-06-4x3.webp', alt: 'Osaka people expressing more freely' },
    { src: '/images/japan-2017/day-12/photo-07-4x3.webp', alt: 'Less reservation in Osaka culture' },
    { src: '/images/japan-2017/day-12/photo-08-4x3.webp', alt: 'Carefree and open expressions' },
    { src: '/images/japan-2017/day-12/photo-09-4x3.webp', alt: 'Visit to the dango shop' },
    { src: '/images/japan-2017/day-12/photo-10-1x1.webp', alt: 'Wonderful old lady at dango shop' },
    { src: '/images/japan-2017/day-12/photo-11-3x4.webp', alt: 'Dango - chewy mochi rice with soy bean powder' },
    { src: '/images/japan-2017/day-12/photo-12-3x4.webp', alt: 'Triple portion gift from kindly obasan' },
    { src: '/images/japan-2017/day-12/photo-13-4x3.webp', alt: 'Big cheer for the journey ahead' }
  ]);
</script>

<svelte:head>
  <title>Day 12 - An Old Lady in a Dango Shop | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 12 of our Japan kickboard adventure: Rest day in Osaka featuring a memorable encounter with an elderly lady in a traditional dango shop." />
</svelte:head>

<!-- Day 12: Osaka Rest Day -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 12"
      date="6 April 2017"
      title="An old lady in a dango shop"
      progress="581 kilometres of 1,800"
      subtitle="Day 12"
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
          Today is an unexpected rest day. We went through a dodgy part of town on our way to our hostel when we saw a crowd of policemen reprimanding a group young punks. This is a scene that, even after visiting Japan more than 10 times and travelling north to south twice, I've ever only seen once. And this in Osaka. Perhaps casualness and passion comes with an intrinsic price?
        </p>

        <p class="km-body-text">
          Making our 'sengoku' war banner to be carried on our backpacks!!! Everyone here at @osakaguesthousenest have been really warm and supportive of our adventure! Their cheers and encouragement brings a smile to all our faces. It has been a food time in Osaka!
        </p>

        <p class="km-body-text">
          We had an eventful rest day at the Osaka Guesthouse Nest. People were very warm and friendly and the place was clean and cozy too! We spent our whole day fixing our website and preparing our 'war banners'. Why do I have this feeling we will embarrass ourselves! We seem to have a penchant for that!
        </p>

        <p class="km-body-text">
          People in Osaka behave in more extremes than the rest of Japan. There seems to be less reservation and care about how they come across, so their expression is alot more carefree and open. Aside from the wonderful people at the hostel, we also met a wonderful old lady at the dango shop. Dango is a Japanese desert made of chewy mochi rice sprinkled with soy bean powder. Oh so yummylicious!
        </p>

        <p class="km-body-text">
          We went in to buy a small box of dango but ended up with three times more; a gift from the kindly obasan and a big cheer from her for our journey ahead!
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
        title="Dango Shop & Rest Day" 
        galleryId="day12-gallery"
      />
    </div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={12}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-11-rebellious-heterogeneity", label: "Day 11" }}
      nextDay={{ url: "/trips/japan-2017/day-13-let-no-war-banner-fall", label: "Day 13" }}
    />

  </div>
</div>
