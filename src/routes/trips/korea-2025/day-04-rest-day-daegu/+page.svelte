<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  const stats = [
    { value: '0 km', label: 'Distance Today' },
    { value: 'Rest Day', label: 'Status' },
    { value: 'October 17', label: 'Date' },
    { value: '4/10', label: 'Day Progress' },
    { value: '154/560km', label: 'Total Progress' }
  ];
</script>

<svelte:head>
  <title>Day 4: Rest Day in Daegu - Korea 2025 | Kicking Miles</title>
  <meta name="description" content="Day 4 was a rest day in Daegu during the Korea 2025 kick scooter journey. FAQ videos from this recovery day coming soon." />
  <meta property="og:title" content="Day 4: Rest Day in Daegu - Korea 2025 | Kicking Miles" />
  <meta property="og:description" content="Day 4 was a rest day in Daegu during the Korea 2025 kick scooter journey. FAQ videos from this recovery day coming soon." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kickingmiles.com/trips/korea-2025/day-04-rest-day-daegu" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Day 4: Rest Day in Daegu - Korea 2025 | Kicking Miles" />
  <meta name="twitter:description" content="Day 4 was a rest day in Daegu during the Korea 2025 kick scooter journey. FAQ videos from this recovery day coming soon." />
  <link rel="canonical" href="https://kickingmiles.com/trips/korea-2025/day-04-rest-day-daegu" />
</svelte:head>

<!-- Section: Day 4 Coming Soon -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/korea-2025"
      backText="Korea 2025"
      title="Day 4: Rest Day in Daegu"
      subtitle="October 17, 2025"
      description="Recovery and reflection after three intense days on the road"
    />

    <!-- Stats Box -->
    <div class="mt-8">
      <StatsBox {stats} />
    </div>

    <!-- Content sections -->
    <div class="km-prose-content space-y-8 mt-12">
      
      <section>
        <p class="km-lead-text">
          A well-deserved rest day in Daegu for Alex and myself.
        </p>
        
        <p class="km-body-text">
          After three intense days of riding through challenging weather and terrain, Day 4 was a welcome break in Daegu. We took time to recover, explore the city, and reflect on the journey so far.
        </p>
        
        <p class="km-body-text">
          FAQ question and answer videos from this rest day will be added here soon, where we discuss the journey, equipment, experiences, and answer questions from our followers about the Korea 2025 adventure.
        </p>
      </section>

    </div>

    <!-- Day Navigation -->
    <div class="mt-12">
      <DayNavigation 
        previousDay={{
          url: '/trips/korea-2025/day-03-life-death-recognition',
          label: 'Day 3'
        }}
        nextDay={{
          url: '/trips/korea-2025/day-05-peace-and-war',
          label: 'Day 5'
        }}
      />
    </div>

  </div>
</div>