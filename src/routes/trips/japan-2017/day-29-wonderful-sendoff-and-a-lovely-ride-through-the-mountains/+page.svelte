<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';
	import { onMount } from 'svelte';
	import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

	const stats = [
		{ value: '1374', label: 'Distance' },
		{ value: '1800km', label: 'Journey Total' },
		{ value: '4 hours', label: 'Estimated scooting time' },
		{ value: 'Mountains', label: 'Route' }
	];

	const images = [
		{ src: '/images/japan-2017/day-29/route-map-01-1x1.webp', alt: 'Route map from Mt Adatara to Fukushima through mountain roads' },
		{ src: '/images/japan-2017/day-29/photo-01-4x3.webp', alt: 'Warm farewell from everyone at Forest Park Adatara' },
		{ src: '/images/japan-2017/day-29/photo-02-1x1.webp', alt: 'Hugs and thoughtful presents from dear friends' },
		{ src: '/images/japan-2017/day-29/photo-03-3x4.webp', alt: 'Heat packs from Emi and many "ki o tsuketes"' },
		{ src: '/images/japan-2017/day-29/photo-04-1x1.webp', alt: 'Our scooters getting curious attention before departure' },
		{ src: '/images/japan-2017/day-29/photo-05-4x3.webp', alt: 'First time ditching the main highways for mountain roads' },
		{ src: '/images/japan-2017/day-29/photo-06-3x4.webp', alt: 'Beautiful ride through the mountain scenery' },
		{ src: '/images/japan-2017/day-29/photo-07-4x3.webp', alt: 'Meeting wonderful people along the mountain roads' },
		{ src: '/images/japan-2017/day-29/photo-08-3x4.webp', alt: 'Waves and smiles from locals along the way' },
		{ src: '/images/japan-2017/day-29/photo-09-4x3.webp', alt: 'The little things that cheer us on to move forwards' },
		{ src: '/images/japan-2017/day-29/photo-10-4x3.webp', alt: 'Scenic mountain views on our way to Fukushima' },
		{ src: '/images/japan-2017/day-29/photo-11-3x4.webp', alt: 'Choosing gratitude for what happens right now' }
	];

	let pswpImages: any[] = [];

	onMount(() => {
		pswpImages = prepareImagesForPhotoSwipe(images);
	});
</script>

<svelte:head>
	<title>Day 29: Wonderful sendoff and a lovely ride through the mountains - Japan 2017 - Kicking Miles</title>
	<meta name="description" content="Day 29 from Mt Adatara to Fukushima. Warm farewell from Forest Park friends and first mountain road adventure - 1,374km of 1,800km. Choosing gratitude for the little things." />
	<meta name="keywords" content="Japan scooter journey, Mt Adatara to Fukushima, mountain roads, farewell, gratitude, ki o tsukete, wonderful people, Route 4" />
	
	<meta property="og:title" content="Day 29: Wonderful sendoff and a lovely ride through the mountains - Japan 2017" />
	<meta property="og:description" content="A heartwarming sendoff from Forest Park Adatara and our first adventure on mountain roads instead of highways. The power of little acts of kindness." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/day-29-wonderful-sendoff-and-a-lovely-ride-through-the-mountains" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Day 29: Wonderful sendoff and lovely mountain ride" />
	<meta name="twitter:description" content="Ditching Route 4 for beautiful mountain roads, meeting wonderful people, and choosing gratitude for the little things that cheer us forward." />
	
	<link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/day-29-wonderful-sendoff-and-a-lovely-ride-through-the-mountains" />
</svelte:head>

<div class="km-container">
  <div class="km-content-wrapper">
		
		<!-- Header -->
		<TripHeader 
			backUrl="/trips/japan-2017"
			backText="Japan 2017 Daily Journal"
			dayNumber="DAY 29"
			date="25 April 2017"
			title="Wonderful sendoff and a lovely ride through the mountains"
			progress="1374 / 1800km"
			subtitle="Mt Adatara to Fukushima"
		/>

	<!-- Stats -->
	<StatsBox {stats} fullWidth />

	<!-- Content sections -->
	<div class="km-prose-content space-y-8">
			
			<!-- Main Content -->
			<section>
				<p class="km-body-text">
					Weather: 17 degrees c, sunny!
				</p>

				<p class="km-body-text">
					Mood: Ditching our trusty Route 4 and looking forward to the lovely ride through the mountains today!
				</p>

				<p class="km-body-text">
					We woke up bleary-eyed, having doused ourselves the night before with horse sashimi, yummy beef and a bottle of wine. Feeling like we had to forcefully pluck ourselves out of our cozy futons, we reluctantly packed our bags and made our way to the checkout. Something about this place compels me to want to rest, over the excitement of continuing my trip.
				</p>

				<p class="km-body-text">
					At the reception, we had a warm farewell from everyone! Our scooters got much curious attention but we received even more warmth and regard with each person we bid farewell to. After a couple of hugs, thoughtful presents among them heat packs from Emi and many "ki o tsuketes" later, meaning "take care and be safe", we were on our way down the mountains to Fukushima.
				</p>

				<p class="km-body-text">
					Today was the first time we ditched the main national highways, the one here called "yon go sen" , and enjoyed a nice scoot through the mountain roads. Along the way, we met even more wonderful people who offered to let us stay at their house and more. Many also waved at us along the roads!
				</p>

				<p class="km-body-text">
					It's the little things that cheer us on to move forwards to see what's over the next hill. It might only be a smile here and a wave there but on big journeys like this, the little cheer goes a long way. Sometimes when we are so focused on the goal, we lose sight and appreciation of what's happening right now. In the end, a mindset and nothing more. These little things help us get over the next hill and I'm choosing Gratitude.
				</p>

				<p class="km-body-text font-medium">
				Michelle Yang
			</p>
		</section>

		<!-- Photo Gallery -->
		<div>
			<PhotoSwipeGallery 
				images={pswpImages}
				title="Mountain Sendoff Journey" 
				galleryId="day29-sendoff"
			/>
		</div>
	</div>

		
    <!-- Day navigation -->
		<DayNavigation 
			currentDay={29}
			totalDays={40}
			previousDay={{ url: "/trips/japan-2017/day-28-forest-park-adatara-is-my-meditation-sanctuary", label: "Day 28" }}
			nextDay={{ url: "/trips/japan-2017/day-30-wonderful-people-everywhere", label: "Day 30" }}
		/>

	</div>
</div>