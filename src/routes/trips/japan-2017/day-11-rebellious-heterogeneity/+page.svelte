<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils.js';

  const stats = [
    { value: 'DAY 11', label: 'Scooting Adventures' },
    { value: '591km / 1800km', label: 'Kobe to Osaka' },
    { value: '4 hours', label: 'Estimated scooting time' },
    { value: 'Relaxed!', label: 'Mood' },
    { value: 'Culture', label: 'Observations' }
  ];

  // Combined gallery images with new filenames - Day 11 doesn't have route-map or updates files
  const galleryImages = prepareImagesForPhotoSwipe([
    { src: '/images/japan-2017/day-11/photo-01-1x1.webp', alt: 'Arriving in Osaka, Japan\'s third biggest city' },
    { src: '/images/japan-2017/day-11/photo-02-4x3.webp', alt: 'Osaka\'s unique kuidaore culture - eat until you burst!' },
    { src: '/images/japan-2017/day-11/photo-03-3x4.webp', alt: 'Heterogeneous culture blending in Osaka' },
    { src: '/images/japan-2017/day-11/photo-04-4x3.webp', alt: 'Casual dress and mannerisms of Osaka' },
    { src: '/images/japan-2017/day-11/photo-05-3x4.webp', alt: 'Easy-going attitude and friendly language' },
    { src: '/images/japan-2017/day-11/photo-06-3x4.webp', alt: 'Rebellious heterogeneity in homogeneous Japan' },
    { src: '/images/japan-2017/day-11/photo-07-3x4.webp', alt: 'Coordinated haphazardness of mixed cultures' }
  ]);
</script>

<svelte:head>
  <title>Day 11 - Rebellious Heterogeneity | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 11 of our Japan kickboard adventure: Discovering pockets of rebellious heterogeneity within Japan's famously homogeneous society." />
</svelte:head>

<!-- Day 11: Kobe to Osaka -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 11"
      date="5 April 2017"
      title="Rebellious heterogeneity in a homogenous culture"
      progress="591 kilometres of 1,800"
      subtitle="Day 11"
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
        <p class="text-sm text-km-subtle italic mt-8">
          - Michelle Yang
        </p>
      </section>

      <!-- PhotoSwipe Gallery -->
      <PhotoSwipeGallery 
        images={galleryImages} 
        title="Osaka Cultural Observations" 
        galleryId="day11-gallery"
      />
    </div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={11}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-10-economic-success", label: "Day 10" }}
      nextDay={{ url: "/trips/japan-2017/day-12-old-lady-dango-shop", label: "Day 12" }}
    />

  </div>
</div>
