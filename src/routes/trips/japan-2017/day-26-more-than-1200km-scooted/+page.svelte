<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';
	import { onMount } from 'svelte';
	import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

	const stats = [
		{ value: '1333km', label: 'Distance' },
		{ value: '1800km', label: 'Journey Total' },
		{ value: '15 hours', label: 'Estimated scooting time' },
		{ value: '14°C', label: 'Temperature' }
	];

	const images = [
		{ src: '/images/japan-2017/day-26/route-map-01-1x1.webp', alt: 'Route map from Utsunomiya to Koriyama - Day 26 journey with train assistance' },
		{ src: '/images/japan-2017/day-26/updates-01-4x3.webp', alt: 'Day 26 updates and reflections on exhaustion and practical decisions' }
	];

	let pswpImages: any[] = [];

	onMount(() => {
		pswpImages = prepareImagesForPhotoSwipe(images);
	});
</script>

<svelte:head>
	<title>Day 26: More than 1200km scooted - Japan 2017 - Kicking Miles</title>
	<meta name="description" content="Day 26 from Utsunomiya to Koriyama. Exhaustion takes its toll, leading to our first train ride. Deep reflections on failure, acceptance, and what we truly need in life - 1,333km of 1,800km completed." />
	<meta name="keywords" content="Japan scooter journey, exhaustion, train ride, failure acceptance, minimalism, Utsunomiya to Koriyama, travel reflection" />
	
	<meta property="og:title" content="Day 26: More than 1200km scooted - Japan 2017" />
	<meta property="og:description" content="A profound day of exhaustion leading to our first train ride. Reflections on failure, acceptance, and discovering what we truly need." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/day-26-more-than-1200km-scooted" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Day 26: More than 1200km scooted" />
	<meta name="twitter:description" content="When exhaustion forces difficult decisions - taking the train and learning about acceptance." />
	
	<link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/day-26-more-than-1200km-scooted" />
</svelte:head>

<div class="km-container">
  <div class="km-content-wrapper">
		
		<!-- Header -->
		<TripHeader 
			backUrl="/trips/japan-2017"
			backText="Japan 2017 Daily Journal"
			dayNumber="DAY 26"
			date="22 April 2017"
			title="more than 1200km scooted"
			progress="1333km / 1800km"
			subtitle="Utsunomiya to Koriyama"
		/>

		<div class="mb-8 mt-12">
			<StatsBox {stats} columns={4} fullWidth={true} />
		</div>

		<!-- Content sections -->
		<div class="km-prose-content space-y-8">
			
			<!-- Main Content -->
			<section>
				<p class="km-body-text">
					Exhaustion has taken its toll on us. We sat lost somewhere on the roadside, catching our breath. On journeys like these, there's always an infernal desire to push until you reach your goal, but the initiated knows that idealism cannot exist on such arduous undertakings. Reality is a humbling experience for the arrogant. We ended up taking the train halfway on this section of the trip. This train ride was the very first one done out of tiredness and fatigue. In many ways, this seemingly simple decision to take the train was a very confronting experience that required alot of courage to acknowledge and to sit with.
				</p>

				<p class="km-body-text">
					For me personally, it is a reflection of my relationship with failure. Many people have told me that we have done well and that a small train ride doesn't define the failure of the trip as a whole, but for me, that short train ride represented not just my physical inability to 'tahan' through, but also the acknowledgement that I didn't plan well, among other things. In this fight for perfection, I also realise that it is a never-ending bandaid for a deeper pain, one that can only be healed with acceptance.
				</p>

				<p class="km-body-text">
					With acceptance comes stillness and that's when clarity appears. Imperfection is a core nature of the human being and failure, a part of what it takes to be successful. In embracing and acknowledging failure, I make space for future success. I'm starting to understand the phrase, 'it's the journey not the goal', in a different light now.
				</p>

				<p class="km-body-text">
					This was what we started with at the beginning of the trip. You won't believe the amount of things we threw away as we went along hahaha! We go through life thinking we absolutely need certain 'essential' things but we come to realise that half of what we think we need, we can actually survive without. In the end, we take nothing to our grave but our birthday suit. All that matters is a life well lived, in honesty and in love.
				</p>

			<p class="km-body-text font-medium">
				Michelle Yang
			</p>
		</section>

		<!-- Photo Gallery -->
		<div>
			<PhotoSwipeGallery images={pswpImages} title="Day 26 - More than 1200km" galleryId="day26-all" />
		</div>
	</div>

		
    <!-- Day navigation -->
    <!-- Day navigation -->
    <DayNavigation 
      currentDay={26}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-25-second-half-of-the-journey-officially-begins", label: "Day 25" }}
      nextDay={{ url: "/trips/japan-2017/day-27-my-fukushima-family", label: "Day 27" }}
    />
  </div>
</div>