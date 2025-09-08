<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import WeatherBox from '$lib/components/WeatherBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';

	const stats = [
		{ value: '1451km', label: 'Distance' },
		{ value: '1800km', label: 'Journey Total' },
		{ value: 'Updates', label: 'Status' },
		{ value: 'Behind', label: 'Schedule' }
	];

	const routeMapImages = [
		{
			src: '/images/japan-2017/day-32/day32-route-map.webp',
			alt: 'Sendai - visiting tsunami destruction zone and updates'
		}
	];

	const tsunamiSiteImages = [
		{
			src: '/images/japan-2017/day-32/day32-photo-01.webp',
			alt: 'Tsunami destruction zone in Sendai - only 10 minutes from house'
		},
		{
			src: '/images/japan-2017/day-32/day32-photo-02.webp',
			alt: 'Learning about the 2012 tsunami impact on Sendai'
		},
		{
			src: '/images/japan-2017/day-32/day32-photo-03.webp',
			alt: 'Observing the lasting effects of the tsunami'
		},
		{
			src: '/images/japan-2017/day-32/day32-photo-04.webp',
			alt: 'Reflection on the scale of destruction'
		},
		{
			src: '/images/japan-2017/day-32/day32-photo-05.webp',
			alt: 'Understanding the recovery process'
		},
		{
			src: '/images/japan-2017/day-32/day32-photo-06.webp',
			alt: 'Documenting the visit to the affected area'
		}
	];

	const journeyUpdateImages = [
		{
			src: '/images/japan-2017/day-32/day32-photo-07.webp',
			alt: 'Exhausted by the time we arrive at hotels'
		},
		{
			src: '/images/japan-2017/day-32/day32-photo-08.webp',
			alt: 'Reduced from 60-80km per day to lucky if we do 50km'
		},
		{
			src: '/images/japan-2017/day-32/day32-photo-09.webp',
			alt: 'One day behind on updates but catching up'
		},
		{
			src: '/images/japan-2017/day-32/day32-photo-10.webp',
			alt: 'Will have time to get up to speed once we hit Morioka'
		},
		{
			src: '/images/japan-2017/day-32/day32-photo-11.webp',
			alt: 'Journey reality - fatigue setting in'
		},
		{
			src: '/images/japan-2017/day-32/day32-photo-12.webp',
			alt: 'Planning to write detailed tsunami observations'
		}
	];
</script>

<svelte:head>
	<title>Day 32: Updates! - Japan 2017 - Kicking Miles</title>
	<meta name="description" content="Day 32 in Sendai. Visiting tsunami destruction zone and journey updates - 1,451km of 1,800km. Fatigue setting in, falling behind schedule but pushing forward." />
	<meta name="keywords" content="Japan scooter journey, Sendai, tsunami destruction zone, 2012 tsunami, journey updates, fatigue, Morioka, travel challenges" />
	
	<meta property="og:title" content="Day 32: Updates! - Japan 2017" />
	<meta property="og:description" content="Visiting the 2012 tsunami destruction zone in Sendai and honest updates about journey fatigue and falling behind schedule." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/day-32-updates" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Day 32: Updates!" />
	<meta name="twitter:description" content="Reality check: visiting tsunami site, journey fatigue, and honest updates about the challenges of long-distance travel." />
	
	<link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/day-32-updates" />
</svelte:head>

<div class="min-h-screen py-16 px-4">
	<div class="container mx-auto max-w-4xl">
		
		<!-- Header -->
		<TripHeader 
			backUrl="/trips/japan-2017"
			backText="Japan 2017 Daily Journal"
			dayNumber="DAY 32"
			date="28 April 2017"
			title="updates!"
			progress="1451km / 1800km"
			subtitle="Sendai"
		/>

		<!-- Stats -->
		<StatsBox {stats} />

		<!-- Weather -->
		<WeatherBox 
			weather={{
				title: "Status Report",
				description: "Exhausted but learning. One day behind updates but will catch up in Morioka."
			}}
		/>

		<!-- Content sections -->
		<div class="space-y-8 mb-8">
			
			<!-- Main Content -->
			<section>
				<p class="km-body-text">
					DAY 32 of our scooting adventures! Sendai - 1451km / 1800km
				</p>

				<p class="km-body-text">
					We visited the destruction zone of the 2012 tsunami site in Sendai. It was only a 10 minute drive from her house. More details to be written in Facebook or the blog.
				</p>

				<p class="km-body-text">
					I meant to write a detailed one on everything I observed and learnt about the Sendai tsunami but you'll all have to pardon me and give me a couple of days because we're so exhausted by the time we arrive in our hotel. We were initially pushing out 60km - 80km per day at the start of the trip. Now we're lucky if we do 50km. I'm one day behind our updates again but will have time to get up to speed once we hit the major town Morioka.
				</p>

				<p class="km-body-text font-medium">
					Michelle Yang
				</p>
			</section>
		</div>

		<!-- Day navigation -->
		<DayNavigation 
			currentDay={32}
			totalDays={40}
			previousDay={{ url: "/trips/japan-2017/day-31-theres-something-about-the-countryside", label: "Day 31" }}
			nextDay={{ url: "/trips/japan-2017/day-33-a-fond-farewell-to-sendai", label: "Day 33" }}
		/>

	</div>
</div>
