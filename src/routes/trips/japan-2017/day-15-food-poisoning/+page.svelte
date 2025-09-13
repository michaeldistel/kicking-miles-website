<script lang="ts">
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import WeatherBox from '$lib/components/WeatherBox.svelte';
  import ContentBox from '$lib/components/ContentBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';
  import { onMount } from 'svelte';
  import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

  const stats = [
    { value: '714km', label: 'Distance' },
    { value: '1800km', label: 'Total' },
    { value: '0 hours', label: 'Scooting' },
    { value: 'Two teammates down', label: 'Mood' }
  ];

  const images = [
    // Route map and updates  
    { src: '/images/japan-2017/day-15/route-map-01-4x3.webp', alt: 'Train journey route to Yokkaichi due to food poisoning setback' },
    { src: '/images/japan-2017/day-15/updates-01-1x1.webp', alt: 'Ninja festival discovery and historical reflections from the recovery day' },
    
    // Photo gallery
    { src: '/images/japan-2017/day-15/photo-02-3x4.webp', alt: 'Whole town out at Iga castle' },
    { src: '/images/japan-2017/day-15/photo-03-3x4.webp', alt: 'Lovers having picnic under blooming sakura' },
    { src: '/images/japan-2017/day-15/photo-04-4x3.webp', alt: 'Families attending ninja performances' },
    { src: '/images/japan-2017/day-15/photo-05-3x4.webp', alt: 'Shiba-ken dogs dressed as ninjas' },
    { src: '/images/japan-2017/day-15/photo-06-4x3.webp', alt: 'Dogs posing for crowds at festival' },
    { src: '/images/japan-2017/day-15/photo-07-3x4.webp', alt: 'Learning about ninja history and roles' },
    { src: '/images/japan-2017/day-15/photo-08-4x3.webp', alt: 'Political espionage and bodyguard duties' },
    { src: '/images/japan-2017/day-15/photo-09-3x4.webp', alt: 'Secret messenger carriers protecting information' },
    { src: '/images/japan-2017/day-15/photo-10-3x4.webp', alt: 'Documents committed to memory' },
    { src: '/images/japan-2017/day-15/photo-11-3x4.webp', alt: 'Information carved on skin if needed' },
    { src: '/images/japan-2017/day-15/photo-12-3x4.webp', alt: 'Risk of human life for simple messages' },
    { src: '/images/japan-2017/day-15/photo-13-4x3.webp', alt: 'Modern communication technology contrast' },
    { src: '/images/japan-2017/day-15/photo-14-3x4.webp', alt: 'WhatsApp, email, social media platforms' },
    { src: '/images/japan-2017/day-15/photo-15-4x3.webp', alt: 'Life changed for the better over centuries' },
    { src: '/images/japan-2017/day-15/photo-16-3x4.webp', alt: 'Commoners today vs kings of yesterday' },
    { src: '/images/japan-2017/day-15/photo-17-3x4.webp', alt: 'Modern advancement in perspective' }
  ];

  let pswpImages: any[] = [];

  onMount(() => {
    pswpImages = prepareImagesForPhotoSwipe(images);
  });
</script>

<svelte:head>
  <title>Day 15 - Food Poisoning | Japan 2017 | Kicking Miles</title>
  <meta name="description" content="Day 15 of our Japan kickboard adventure: When adventure meets adversity through food poisoning, learning about team support and resilience." />
</svelte:head>

<!-- Day 15: Iga to Yokkaichi -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/japan-2017"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 15"
      date="9 April 2017"
      title="Oh no the boys have food poisoning!"
      progress="714 kilometres of 1,800"
      subtitle="Day 15 updates"
    />

    <div class="mb-8 mt-12">
      <StatsBox {stats} fullWidth />
    </div>

    <!-- Main content -->
    <div class="km-prose-content space-y-8">
      <section>
        <!-- Section: Food poisoning crisis -->
        <ContentBox type="highlight">
          Two of our team mates are down with food poisoning and diarrhoea. We're taking it easy 
          and hopping on a train to the next town.
        </ContentBox>

        <p class="km-body-text">
          When in Iga do as the ninjas do! It was an unexpected stop over and an even more unexpected city fare! When we were about to leave Iga, we found out that there was a ninja festival of sorts!
        </p>

        <p class="km-body-text">
          Having decided to take the train to Yokkaichi because both the boys were down with food poisoning and diarrhoea, we took a detour and joined the local throng at the Iga castle. It was a pleasant surprise to see the whole town out in the field; many lovers having a picnic under the blooming sakura trees, families going for the ninja performances at the museum and even the shiba-ken dogs dressing as ninjas and posing for the crowds!
        </p>

        <p class="km-body-text">
          We learnt that aside from political espionage and being body guards of the lords, they were also secret messenger carriers who protected important information with their lives. Highly sensitive documents were to be committed to memory and even carved on their skin if needed.
        </p>

        <p class="km-body-text">
          At that moment it occurred to us that here we are easily communicating with each other over technology - Whatsapp, email, social media platforms - while it took them the risk of a human life for a simple message. Life has changed over the centuries and for better. We might be commoners but the commoners of today live a better life than than the kings and lords of yesterday.
        </p>

        <p class="km-body-text">
          Puts our modern advancement in perspective.
        </p>

        <p class="text-sm text-km-subtle italic mt-8">
          Michelle Yang
        </p>
      </section>

      <!-- PhotoSwipe Gallery -->
      <div class="mt-12">
        <PhotoSwipeGallery images={pswpImages} title="Day 15: Food Poisoning Recovery" />
      </div>
    </div>

    
    <!-- Day navigation -->
  <!-- Day navigation -->
  <DayNavigation 
    currentDay={15}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017/day-14-legendary-bowing-deer", label: "Day 14" }}
    nextDay={{ url: "/trips/japan-2017/day-16-simple-appreciation", label: "Day 16" }}
  />

  </div>
</div>
