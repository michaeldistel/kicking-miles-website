<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';
	import { onMount } from 'svelte';
	import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

	const stats = [
		{ value: '1347', label: 'Distance' },
		{ value: '1800km', label: 'Journey Total' },
		{ value: 'Rest', label: 'Activity' },
		{ value: 'Family', label: 'Focus' }
	];

	const images = [
		{ src: '/images/japan-2017/day-27/route-map-01-1x1.webp', alt: 'Route map showing Koriyama to Motomiya - visiting Fukushima family' },
		{ src: '/images/japan-2017/day-27/photo-01-4x3.webp', alt: 'Arriving at my Fukushima family home in Motomiya' },
		{ src: '/images/japan-2017/day-27/photo-02-4x3.webp', alt: 'Okasan preparing her wholesome dinner with love' },
		{ src: '/images/japan-2017/day-27/photo-04-4x3.webp', alt: 'Traditional Japanese home hospitality and warmth' },
		{ src: '/images/japan-2017/day-27/photo-05-4x3.webp', alt: 'Spending quality time with my Fukushima host family' },
		{ src: '/images/japan-2017/day-27/photo-07-4x3.webp', alt: 'Rest and recovery in the comfort of family' },
		{ src: '/images/japan-2017/day-27/photo-08-4x3.webp', alt: 'Grateful moments with my Japanese family' },
		{ src: '/images/japan-2017/day-27/updates-01-1x1.webp', alt: 'Day 27 updates and reflections on family connections in Fukushima' }
	];

	let pswpImages: any[] = [];

	onMount(() => {
		pswpImages = prepareImagesForPhotoSwipe(images);
	});
</script>

<svelte:head>
	<title>Day 27: My Fukushima family - Japan 2017 - Kicking Miles</title>
	<meta name="description" content="Day 27 from Koriyama to Motomiya. A heartwarming visit with my Fukushima family - 1,347km of 1,800km. Simple dinners, loving hearth, and the warm embrace of chosen family." />
	<meta name="keywords" content="Japan scooter journey, Fukushima family, Motomiya, chosen family, Japanese hospitality, okasan, wholesome dinner" />
	
	<meta property="og:title" content="Day 27: My Fukushima family - Japan 2017" />
	<meta property="og:description" content="A heartwarming visit with my chosen Fukushima family in Motomiya. Simple dinners full of love and the warm embrace of home." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/day-27-my-fukushima-family" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Day 27: My Fukushima family" />
	<meta name="twitter:description" content="Can't scoot by Motomiya without spending time with my Fukushima family - love, warmth, and wholesome dinners." />
	
	<link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/day-27-my-fukushima-family" />
</svelte:head>

<div class="min-h-screen py-16 px-4">
	<div class="container mx-auto max-w-4xl">
		
		<!-- Header -->
		<TripHeader 
			backUrl="/trips/japan-2017"
			backText="Japan 2017 Daily Journal"
			dayNumber="DAY 27"
			date="23 April 2017"
			title="My Fukushima family"
			progress="1347 / 1800km"
			subtitle="Koriyama to Motomiya"
		/>
		
		<div class="mb-8 mt-12">
			<StatsBox {stats} columns={4} fullWidth={true} />
		</div>

		<!-- Content sections -->
		<div class="space-y-8 mb-8">
			
			<!-- Main Content -->
			<section>
				<p class="km-body-text">
					Can't go by Motomiya without stopping by and spending an evening with my Fukushima family
				</p>

				<p class="km-body-text">
					Can't scoot by Motomiya without spending time with my Fukushima family. What Fukushima means to me has changed over the years. Yet it is not the city that has changed. It is where I have come on my journey of life.
				</p>

				<p class="km-body-text">
					We had another lovely dinner prepared by okasan, my Fukushima mom. She always worries about not preparing a feast but her simple dinners are full of wholesomeness for our body, heart and soul
				</p>

				<p class="km-body-text">
					Always thankful for the loving hearth and warm embrace of my Fukushima family
				</p>

			<p class="km-body-text font-medium">
				Michelle Yang
			</p>
		</section>

		<!-- Photo Gallery -->
		<div>
			<PhotoSwipeGallery images={pswpImages} title="Day 27 - My Fukushima Family" galleryId="day27-all" />
		</div>
	</div>

		<!-- Day navigation -->
		<DayNavigation 
			currentDay={27}
			totalDays={40}
			previousDay={{ url: "/trips/japan-2017/day-26-more-than-1200km-scooted", label: "Day 26" }}
			nextDay={{ url: "/trips/japan-2017/day-28-forest-park-adatara-is-my-meditation-sanctuary", label: "Day 28" }}
		/>

	</div>
</div>