<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const preparationImages = [
    { src: '/images/japan-2017/day-00/day00-photo-01.webp', alt: 'Before the main event - the night before departure' },
    { src: '/images/japan-2017/day-00/day00-photo-02.webp', alt: 'Nervous energy and final preparations' },
    { src: '/images/japan-2017/day-00/day00-photo-03.webp', alt: 'Ready for tomorrow\'s adventure to begin' }
  ];
</script>

<svelte:head>
  <title>Day 00 - Before the Main Event | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 00 of our Japan kickboard adventure: The night before departure with nervous energy, butterflies, and memories of yesterday's sukiyaki meal." />
</svelte:head>

<!-- Day 00: Before the Adventure -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="Day 00"
      date="25 March 2017"
      title="Before the Main Event"
      progress="The night before departure"
      subtitle="Nervous energy and sukiyaki"
    />

    <!-- Mood indicator -->
    <div class="mb-12 p-6 rounded-lg border text-center border-km bg-km-subtle">
      <div class="space-y-2">
        <div class="text-lg font-medium text-km-primary">Mood</div>
        <div class="text-2xl font-light text-km-accent">Nervous Energy</div>
        <div class="text-sm text-km-secondary">Half butterflies, half sukiyaki</div>
      </div>
    </div>

    <!-- Content -->
    <div class="prose max-w-none">
      <div class="space-y-6 text-km-primary">
        
        <p class="text-lg md:text-xl leading-relaxed">
          As the hours tick by and we're supposed to be sleeping, some of us are restless with a bundle of nervous energy... Half feels like butterflies in our stomach, the other half, a hearty sukiyaki meal the day before 🤤😂
        </p>

        <section>
          <p class="km-body-text font-medium mt-8">
            - Michelle Yang
          </p>
        </section>

        <ImageGallery title="Before the Main Event" photoImages={preparationImages} galleryType="grid" />

      </div>
    </div>

  <!-- Day navigation -->
  <DayNavigation 
    currentDay={0}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017", label: "Japan 2017" }}
    nextDay={{ url: "/trips/japan-2017/day-01-fukuoka-to-kitakyushu", label: "Day 1" }}
  />

  </div>
</div>
