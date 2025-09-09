<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import WeatherBox from '$lib/components/WeatherBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';

	const day = 36;
	const title = 'Going slow and being present';
	const date = '2 May';
	const description = 'Reflecting on the importance of slowing down, enjoying the journey, and being present in the moment rather than just pushing toward the goal.';

	const stats = [
		{ value: 'DAY 36', label: 'Journey Day' },
		{ value: 'Hanamaki to Morioka', label: 'Route' },
		{ value: '1635km / 1800km', label: 'Progress' },
		{ value: '4 hours', label: 'Scooting Time' }
	];

	// Note: No images were provided in the content, so creating empty array for consistency
	const photoImages: { src: string; alt: string; }[] = [
		{ src: '/images/japan-2017/day-36/day36-photo-01.webp', alt: 'Beautiful scenery along the straight path of Route 4' },
		{ src: '/images/japan-2017/day-36/day36-photo-02.webp', alt: 'Relaxing moments during our easy day to Morioka' },
		{ src: '/images/japan-2017/day-36/day36-photo-03.webp', alt: 'Countryside views during our best pace day' },
		{ src: '/images/japan-2017/day-36/day36-photo-04.webp', alt: 'Taking time to chat with people and enjoy the journey' },
		{ src: '/images/japan-2017/day-36/day36-photo-05.webp', alt: 'Scenic landscapes as we approached Morioka' },
		{ src: '/images/japan-2017/day-36/day36-photo-06.webp', alt: 'Moments of connection and appreciation for the beauty around us' },
		{ src: '/images/japan-2017/day-36/day36-photo-07.webp', alt: 'The peaceful journey giving us time to be present' },
		{ src: '/images/japan-2017/day-36/day36-photo-08.webp', alt: 'Capturing the essence of going slow and being present' }
	];
</script>

<svelte:head>
	<title>Day 36 - Going slow and being present | Japan 2017 | Kicking Miles</title>
	<meta name="description" content="{description}" />
	<meta property="og:title" content="Day 36 - Going slow and being present | Japan 2017 | Kicking Miles" />
	<meta property="og:description" content="{description}" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/day-36-going-slow-and-being-present/" />
	<meta property="og:image" content="https://kickingmiles.com/images/japan-2017/day-36/day36-photo-01.webp" />
	<meta property="article:published_time" content="2017-05-02" />
	<meta property="article:author" content="Michael Distel" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Day 36 - Going slow and being present | Japan 2017 | Kicking Miles" />
	<meta name="twitter:description" content="{description}" />
	<meta name="twitter:image" content="https://kickingmiles.com/images/japan-2017/day-36/day36-photo-01.webp" />
	<link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/day-36-going-slow-and-being-present/" />
</svelte:head>

<TripHeader 
	backUrl="/trips/japan-2017/"
	backText="Japan 2017 Daily Journal"
	dayNumber="DAY 36"
	date="2 May 2017"
	title="Going slow and being present"
	progress="1635km / 1800km"
	subtitle="Hanamaki to Morioka"
/>

<div class="container mx-auto px-4 py-4 pb-2 max-w-4xl">
	<!-- Section: Trip Stats -->
	<StatsBox {stats} />

	<!-- Section: Weather -->
	<WeatherBox 
		weather={{
			title: "Weather",
			description: "14 degrees c"
		}}
	/>

	<!-- Section: Content -->
	<div class="space-y-8 mb-8">
		<section>
			<p class="km-body-text">
				Mood: Excited to hit the next big town Morioka!
			</p>
		</section>

		<section>
			<p class="km-body-text">
				Hanamaki to Morioka was one of the easiest days we've ever done. It was a straight path along our trusty Route 4. On adventure trips like this, a straight path with no obstacles is a luxury to the max!
			</p>
		</section>

		<section>
			<p class="km-body-text">
				We were clocking our best pace ever, more than 10km/hr. At twice our previous pace in Western Honshu, we had alot of free time to stop and take photos, chat with people, chill in a cafe with coffee.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				A wave from a construction worker standing on top of the roof, a honk from many motorbikers and a friendly cheer from the MOS burger staff... it was a relaxing and "raku" day. I even exchanged my scooter for a guy's bike and we rode along side by side for a kilometre or two, haha!
			</p>
		</section>

		<section>
			<p class="km-body-text">
				As I pondered about it all while scooting, it occurred to me how much we have been pushing to reach our goal and how little time we've had to actually fully enjoy the experience. Had we given it more time, how would our experiences have changed? I wondered how our friendship would have developed if we stayed the night at Kyoko's place or accepted someone's offer for coffee or rode for longer than a kilometre or two on someone else's bike. Would we have had many more such spontaneous moments if we gave ourselves more time?
			</p>
		</section>

		<section>
			<p class="km-body-text">
				One thing is for sure, if we were to plan this trip again, we would allocate a longer time to stay in more places and connect with more people. The goal is fundamentally essential because it gives us a direction but through this trip, it has become more clear than ever how important it is not to lose sight of the present and to enjoy the journey.
			</p>
		</section>

		<ContentBox type="highlight">
			<p>That's why we're taking today slow to give us the time and space to be present and show appreciation to the beauty that's around us.</p>
		</ContentBox>

		<p class="text-sm text-gray-600 mt-4">Michelle Yang</p>
	</div>
</div>
