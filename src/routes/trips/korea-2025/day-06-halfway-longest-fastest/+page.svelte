<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';

  const stats = [
    { value: '88.7km', label: 'Distance Today' },
    { value: '295/560km', label: 'Total Progress' },
    { value: 'October 19', label: 'Date' },
    { value: '6/11', label: 'Day Progress' },
    { value: '~10 hours', label: 'Time on Road' }
  ];

  // Photo gallery - Day 6 milestone photos
  const images = [
    { src: '/images/korea-2025/day-06/photo-10-1x1.webp', alt: 'Day 6 journey photo', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-06/photo-13-3x4.webp', alt: 'Day 6 journey photo', width: 959, height: 1280, ratio: '3x4' },
    { src: '/images/korea-2025/day-06/photo-14-1x1.webp', alt: 'Day 6 journey photo', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-06/photo-15-3x4.webp', alt: 'Day 6 journey photo', width: 959, height: 1280, ratio: '3x4' },
    { src: '/images/korea-2025/day-06/photo-16-3x4.webp', alt: 'Day 6 journey photo', width: 959, height: 1280, ratio: '3x4' },
    { src: '/images/korea-2025/day-06/photo-17-1x1.webp', alt: 'Day 6 journey photo', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-06/photo-18-1x1.webp', alt: 'Day 6 journey photo', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-06/photo-19-1x1.webp', alt: 'Day 6 journey photo', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-06/photo-22-1x1.webp', alt: 'Day 6 journey photo', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-06/photo-23-1x1.webp', alt: 'Day 6 journey photo', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-06/photo-24-1x1.webp', alt: 'Day 6 journey photo', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-06/photo-25-1x1.webp', alt: 'Day 6 journey photo', width: 1280, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-06/photo-26-1x1.webp', alt: 'Day 6 journey photo', width: 1279, height: 1280, ratio: '1x1' },
    { src: '/images/korea-2025/day-06/photo-27-1x1.webp', alt: 'Day 6 journey photo', width: 1280, height: 1279, ratio: '1x1' },
    { src: '/images/korea-2025/day-06/photo-28-4x3.webp', alt: 'Day 6 journey photo', width: 1280, height: 960, ratio: '4x3' },
    { src: '/images/korea-2025/day-06/photo-29-3x4.webp', alt: 'Day 6 journey photo', width: 598, height: 1280, ratio: '3x4' },
    { src: '/images/korea-2025/day-06/photo-30-3x4.webp', alt: 'Day 6 journey photo', width: 598, height: 1280, ratio: '3x4' },
    { src: '/images/korea-2025/day-06/photo-31-1x1.webp', alt: 'Day 6 journey photo', width: 1279, height: 1280, ratio: '1x1' }
  ];
</script>

<svelte:head>
  <title>Day 6: Half Way, Longest, Fastest, at the End of the Nakdong River - Korea 2025 | Kicking Miles</title>
  <meta name="description" content="Day 6 brought major milestones: 88.7km (our longest day), reaching halfway point, and the end of the Nakdong River. Plus an amazing encounter with Korean locals sharing ramen and hospitality." />
  <meta property="og:title" content="Day 6: Half Way, Longest, Fastest, at the End of the Nakdong River - Korea 2025 | Kicking Miles" />
  <meta property="og:description" content="Day 6 brought major milestones: 88.7km (our longest day), reaching halfway point, and the end of the Nakdong River. Plus an amazing encounter with Korean locals sharing ramen and hospitality." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kickingmiles.com/trips/korea-2025/day-06-halfway-longest-fastest" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Day 6: Half Way, Longest, Fastest, at the End of the Nakdong River - Korea 2025 | Kicking Miles" />
  <meta name="twitter:description" content="Day 6 brought major milestones: 88.7km (our longest day), reaching halfway point, and the end of the Nakdong River. Plus an amazing encounter with Korean locals sharing ramen and hospitality." />
  <link rel="canonical" href="https://kickingmiles.com/trips/korea-2025/day-06-halfway-longest-fastest" />
</svelte:head>

<!-- Section: Day 6 Milestone Day -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/korea-2025"
      backText="Korea 2025"
      title="Day 6: Half Way, Longest, Fastest, at the End of the Nakdong River"
      subtitle="October 19, 2025"
    />

    <!-- Stats Box -->
    <div class="mt-8">
      <StatsBox {stats} />
    </div>

    <!-- Content sections -->
    <div class="km-prose-content space-y-8 mt-12">
      
      <section>
        <p class="km-lead-text">
          Today was a crazy day with us hitting a few big milestones.
        </p>
        
        <p class="km-body-text">
          It was our longest scoot so far, 88.7 km and just under ten hours on the road. One hell of a long day.
        </p>
        
        <p class="km-body-text">
          We officially reached the halfway point. We have now covered more than 300 km, with only about 240 km left until Seoul.
        </p>
        
        <p class="km-body-text">
          We reached the end of the Nakdong River, right at the entrance to the Saejae Pass. From here on it is going to be uphill for the next two days.
        </p>
      </section>

      <section>
        <h3 class="km-section-title">A Long Day on the Road</h3>
        
        <p class="km-body-text">
          Most of the day we had our heads down and legs working. We did not stop much along the way, but near the end something amazing happened.
        </p>
        
        <p class="km-body-text">
          We came across a group of Koreans having a ramen, beer, and soju party by the river. They waved us over with big smiles and loud shouts. One of the ladies was standing over a huge pot on a gas stove, cooking ramen while shouting things in Korean and laughing.
        </p>
      </section>

      <section>
        <h3 class="km-section-title">Korean Hospitality</h3>
        
        <p class="km-body-text">
          Alex and I were pushed to one of the tables, and bowls of steaming ramen were placed in front of us. It was perfect, we were starving. Then came the beer, then the soju, which we politely declined as we were too tired to drink, and finally small apples. No one spoke English, but with a lot of hand waving and smiles it worked fine.
        </p>
        
        <p class="km-body-text">
          Then the ramen lady suddenly yelled to Alex, "I love you!" It was hilarious. Everyone burst out laughing. We stayed just a short while, took a chaotic group photo with our new friends, and then headed off to find a hotel as we had not booked one yet.
        </p>
        
        <p class="km-body-text">
          Moments like these make all the pain and discomfort of the last nine hours worth it.
        </p>
      </section>

      <!-- Photo Gallery Section -->
      <section>
        <h3 class="km-section-title">Photos from Day 6</h3>
        <PhotoSwipeGallery 
          {images} 
          title="Day 6: Milestones and Korean Hospitality"
          galleryId="day-06-gallery"
        />
      </section>

    </div>

    <!-- Day Navigation -->
    <div class="mt-12">
      <DayNavigation 
        previousDay={{
          url: '/trips/korea-2025/day-05-peace-and-war',
          label: 'Day 5'
        }}
        nextDay={null}
      />
    </div>

  </div>
</div>