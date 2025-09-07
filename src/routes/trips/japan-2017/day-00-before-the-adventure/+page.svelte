<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import ImageGallery from '$lib/components/ImageGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const preparationImages = [
    { src: '/images/japan-2017/day-00/before-adventure-01.webp', alt: 'Preparing for the journey - evening before departure' },
    { src: '/images/japan-2017/day-00/before-adventure-02.webp', alt: 'Final preparations and nervous energy' },
    { src: '/images/japan-2017/day-00/before-adventure-03.webp', alt: 'The night before the adventure begins' }
  ];
</script>

<svelte:head>
  <title>Day 00 - Before the Adventure | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 00 of our Japan kickboard adventure: The night before departure with restless energy, sukiyaki dinner, and final preparations for the journey ahead." />
</svelte:head>

<!-- Day 00: Before the Adventure -->
<div class="min-h-screen py-16 px-4">
  <div class="container mx-auto max-w-4xl">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="Day 00"
      date="25 March 2017"
      title="Before the Adventure"
      progress="The night before departure"
      subtitle="Restless energy and sukiyaki"
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
          As the hours tick by and we are supposed to be sleeping, some of us are restless 
          with a bundle of nervous energy.
        </p>

        <p class="leading-relaxed">
          Half feels like butterflies in our stomach, the other half, a hearty sukiyaki meal 
          from the day before 🤤😂
        </p>

        <ContentBox type="highlight">
          Tomorrow we begin. 1,800 kilometres ahead of us. Four kickboards. 
          One impossible dream that somehow feels within reach.
        </ContentBox>

        <p class="leading-relaxed">
          Final preparations complete. Route mapped. Kickboards ready. 
          The only question now is whether we can actually sleep before the alarm goes off 
          at dawn.
        </p>

        <!-- Preparation notes -->
        <div class="mt-8 p-4 rounded-lg bg-km-accent border border-km">
          <div class="flex items-center mb-2">
            <span class="text-sm font-medium text-km-primary">Final Checklist</span>
          </div>
          <ul class="text-sm space-y-1 text-km-secondary">
            <li>✓ Kickboards serviced and ready</li>
            <li>✓ Route planned from Fukuoka to Kitakyushu</li>
            <li>✓ Weather forecast checked (rain expected)</li>
            <li>✓ Gear packed and repacked</li>
            <li>⏳ Sleep (still working on this one)</li>
          </ul>
        </div>

        <ImageGallery title="Before the Adventure" photoImages={preparationImages} galleryType="grid" />

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
