<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
  import DayNavigation from '$lib/components/DayNavigation.svelte';

  // Photo gallery setup
  /** @type {Array<{src: string, alt: string, width: number, height: number, ratio: string}>} */
  const images = [
    {
      src: '/images/korea-2025/day-05/photo-01-1x1.webp',
      alt: 'Alex at the Nakdong River Peace Festival entrance',
      width: 1000,
      height: 1000,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-05/photo-02-1x1.webp',
      alt: 'Historical military equipment display at the peace festival',
      width: 1000,
      height: 1000,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-05/photo-03-1x1.webp',
      alt: 'Children playing around tanks at the peace memorial',
      width: 1000,
      height: 1000,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-05/photo-04-3x4.webp',
      alt: 'Memorial wall with names of Korean War casualties',
      width: 3000,
      height: 4000,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-05/photo-05-3x4.webp',
      alt: 'Alex reflecting at the peace monument',
      width: 3000,
      height: 4000,
      ratio: '3x4'
    },
    {
      src: '/images/korea-2025/day-05/photo-06-1x1.webp',
      alt: 'Traditional Korean peace ceremony at the festival',
      width: 1000,
      height: 1000,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-05/photo-07-1x1.webp',
      alt: 'Cultural performances celebrating peace and unity',
      width: 1000,
      height: 1000,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-05/photo-08-1x1.webp',
      alt: 'Korean families attending the peace festival together',
      width: 1000,
      height: 1000,
      ratio: '1x1'
    },
    {
      src: '/images/korea-2025/day-05/photo-09-1x1.webp',
      alt: 'Alex and Michael processing the day\'s emotional experiences',
      width: 1000,
      height: 1000,
      ratio: '1x1'
    }
  ];

  const stats = [
    { value: '52km', label: 'Distance Today' },
    { value: 'Peace Festival', label: 'Discovery' },
    { value: 'Cold Weather', label: 'Conditions' },
    { value: 'War Memorial', label: 'Reflection' },
    { value: '5/10', label: 'Day Progress' },
    { value: '206/560km', label: 'Total Progress' }
  ];
</script>

<svelte:head>
  <title>Day 5: Peace and War - Korea 2025 | Kicking Miles</title>
  <meta name="description" content="Alex shares a deeply personal reflection on war, peace, and humanity after discovering the Nakdong River Peace Festival during their Korean adventure." />
  <meta property="og:title" content="Day 5: Peace and War - Korea 2025 | Kicking Miles" />
  <meta property="og:description" content="Alex shares a deeply personal reflection on war, peace, and humanity after discovering the Nakdong River Peace Festival during their Korean adventure." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://kickingmiles.com/trips/korea-2025/day-05-peace-and-war" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Day 5: Peace and War - Korea 2025 | Kicking Miles" />
  <meta name="twitter:description" content="Alex shares a deeply personal reflection on war, peace, and humanity after discovering the Nakdong River Peace Festival during their Korean adventure." />
  <link rel="canonical" href="https://kickingmiles.com/trips/korea-2025/day-05-peace-and-war" />
</svelte:head>

<!-- Section: Day 5 Peace and War -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/korea-2025"
      backText="Korea 2025"
      title="Day 5: Peace and War"
      subtitle="October 18, 2025"
      description="A deeply personal reflection on humanity and conflict"
    />

    <!-- Stats Box -->
    <div class="mt-8">
      <StatsBox {stats} />
    </div>

    <!-- Content sections -->
    <div class="km-prose-content space-y-8 mt-12">
      
      <section>
        <p class="km-lead-text">
          Hi everyone, it's Alex here.
        </p>
        
        <p class="km-body-text">
          Today's post is going to be a little heavier, a bit serious, even political. But I feel I have to share this.
        </p>
        
        <p class="km-body-text">
          Two moments sparked it.
        </p>
        
        <p class="km-body-text">
          The first, someone asked what's the difference between Korean and Japanese people, since Michael did a similar trip in Japan.
        </p>
        
        <p class="km-body-text">
          The second, we accidentally kicked our way right into the Nakdong River Peace Festival. A memorial that honors the battles fought along the Nakdong River and promotes peace. The festival mixes solemn ceremonies and historical exhibits with concerts and cultural performances. We even saw kids playing around tanks and other military equipment, and that hit me hard.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          Before I go deeper, I want to say thank you.
        </p>
        
        <p class="km-body-text">
          Everyone we met today was incredibly kind. Warm smiles, friendly questions, small gestures that made a cold day feel lighter.
        </p>
        
        <p class="km-body-text">
          To all the people who waved and wished us luck, thank you for reminding me how good humans can be.
        </p>
        
        <p class="km-body-text">
          Now… the heavy part.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          I was born in 1991, in what used to be the Soviet Union in a small republic called Tajikistan.
        </p>
        
        <p class="km-body-text">
          That same year, the USSR collapsed.
        </p>
        
        <p class="km-body-text">
          And soon after, a civil war tore the country apart. My family ran, we became refugees, living in a small Russian town inside a refugee camp. Conditions were rough. My mum got sick. Not with something deadly, just something treatable, something that anywhere else could have been cured.
        </p>
        
        <p class="km-body-text">
          But there was no medicine. No help.
        </p>
        
        <p class="km-body-text">
          And she kept working, taking care of me, until her body simply gave up.
        </p>
        
        <p class="km-body-text">
          She died not from disease, but from exhaustion, poverty, and war's invisible cruelty.
        </p>
        
        <p class="km-body-text">
          That was my first lesson: not every victim of war dies on the battlefield.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          And yet, as a child, I loved playing war.
        </p>
        
        <p class="km-body-text">
          Toy guns, plastic soldiers, heroic movies, I built my own little battles, dreaming of being a soldier one day.
        </p>
        
        <p class="km-body-text">
          When it came time to choose a path, I was this close to signing up for a military academy.
        </p>
        
        <p class="km-body-text">
          Because the uniform looked cool. Because it felt noble. Because I thought that's what being a man meant, to fight, to serve, to be a hero.
        </p>
        
        <p class="km-body-text">
          But now, I think, if I had joined, maybe I'd be in Ukraine right now.
        </p>
        
        <p class="km-body-text">
          Maybe I'd be one of the names no one remembers, buried under the same ideals that took my mother.
        </p>
      </section>

      <section>
        <p class="km-body-text">
          This is not a plea for sympathy. It's a plea to stop normalizing war. War should not be entertainment or a rite of passage. We must remember the victims — not glorify the instruments of war. We should promote peace and compassion.
        </p>
        
        <p class="km-body-text">
          About your question on the differences between Japanese and Korean people: really, there's not much. Everyone wants a good life, love, and a place to belong. That is true across nations. But there are people who try to divide us, building walls, searching for enemies, blaming groups for everything. That can be based on race, religion, ethnicity, or sexuality. We should resist that. Build bridges, not walls.
        </p>
        
        <p class="km-body-text">
          And maybe one day, when a leader gives the order to invade, people will simply say "no."
        </p>
        
        <p class="km-body-text">
          Because the ones who suffer most are never the politicians, never the generals.
        </p>
        
        <p class="km-body-text">
          It's us.
        </p>
      </section>

    </div>

    <!-- Photo Gallery -->
    {#if images.length > 0}
    <div class="mt-12">
      <h2 class="km-subsection-title mb-6">Day 5 - Peace and War</h2>
      <PhotoSwipeGallery 
        {images} 
        title="Day 5 peace and war" 
        galleryId="day-05-gallery" 
      />
    </div>
    {/if}

    <!-- YouTube Videos -->
    <div class="mt-12">
      <h2 class="km-subsection-title mb-6">Day 5 Videos</h2>
      <div class="space-y-8">
        <div class="km-video-container">
          <div class="relative w-full" style="padding-bottom: 56.25%;">
            <iframe 
              class="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/0yBHq2HUwa0"
              title="Korea 2025 Day 5 Video 1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </div>
        <div class="km-video-container">
          <div class="relative w-full" style="padding-bottom: 56.25%;">
            <iframe 
              class="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/9NCh0S6EtAs"
              title="Korea 2025 Day 5 Video 2"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </div>
        <div class="km-video-container">
          <div class="relative w-full" style="padding-bottom: 56.25%;">
            <iframe 
              class="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/9rInjy-Roo4"
              title="Korea 2025 Day 5 Video 3"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- Day Navigation -->
    <div class="mt-12">
      <DayNavigation 
        previousDay={{
          url: '/trips/korea-2025/day-04-rest-day-daegu',
          label: 'Day 4'
        }}
        nextDay={{
          url: '/trips/korea-2025/day-06-halfway-longest-fastest',
          label: 'Day 6'
        }}
      />
    </div>

  </div>
</div>