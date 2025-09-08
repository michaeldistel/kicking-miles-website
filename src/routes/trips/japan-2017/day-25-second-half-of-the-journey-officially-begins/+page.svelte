<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import WeatherBox from '$lib/components/WeatherBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';

	const stats = [
		{ value: '1217km', label: 'Distance' },
		{ value: '1800km', label: 'Total' },
		{ value: '12 hours', label: 'Scooting' },
		{ value: 'Nervous but recovered', label: 'Mood' }
	];

	const routeMapImages = [
		{
			src: '/images/japan-2017/day-25/day25-route-map.webp',
			alt: 'Route map from Tokyo to Utsunomiya - Day 25 beginning the second half'
		}
	];

	const journeyImages = [
		{
			src: '/images/japan-2017/day-25/day25-photo-01.webp',
			alt: 'Leaving Tokyo in high spirits after 3-day rest'
		},
		{
			src: '/images/japan-2017/day-25/day25-photo-02.webp',
			alt: 'Best pace ever at 7.5km per hour including stops'
		},
		{
			src: '/images/japan-2017/day-25/day25-photo-03.webp',
			alt: 'The reality of stiffened joints and ligaments after rest'
		},
		{
			src: '/images/japan-2017/day-25/day25-photo-04.webp',
			alt: 'Farewell moment as paths diverge - Tresha and Gordon'
		},
		{
			src: '/images/japan-2017/day-25/day25-photo-05.webp',
			alt: 'Second half of the journey officially begins'
		},
		{
			src: '/images/japan-2017/day-25/day25-photo-06.webp',
			alt: 'Reflecting on the journey and friendships made'
		},
		{
			src: '/images/japan-2017/day-25/day25-photo-07.webp',
			alt: 'Continuing onwards towards Utsunomiya'
		}
	];
</script>

<svelte:head>
	<title>Day 25: Second half of the journey officially begins! - Japan 2017 - Kicking Miles</title>
	<meta name="description" content="Day 25 from Tokyo to Utsunomiya after a 3-day rest. Best pace ever but stiffened muscles. Paths diverge as the second half begins - 1,217km of 1,800km completed." />
	<meta name="keywords" content="Japan scooter journey, Tokyo to Utsunomiya, second half journey, team separation, muscle recovery, travel friendship" />
	
	<meta property="og:title" content="Day 25: Second half of the journey officially begins! - Japan 2017" />
	<meta property="og:description" content="After 3 days rest in Tokyo, the second half begins. Best pace ever but muscles have stiffened. Team paths diverge as the journey continues." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/day-25-second-half-of-the-journey-officially-begins" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Day 25: Second half of the journey officially begins!" />
	<meta name="twitter:description" content="Tokyo to Utsunomiya - the second half begins with mixed emotions as paths diverge." />
	
	<link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/day-25-second-half-of-the-journey-officially-begins" />
</svelte:head>

<div class="min-h-screen py-16 px-4">
	<div class="container mx-auto max-w-4xl">
		
		<!-- Header -->
		<TripHeader 
			backUrl="/trips/japan-2017"
			backText="Japan 2017 Daily Journal"
			dayNumber="DAY 25"
			date="20 April 2017"
			title="Second half of the journey officially begins!"
			progress="1,217 kilometres of 1,800"
			subtitle="Day 25"
		/>

		<!-- Stats -->
		<StatsBox {stats} />

		<!-- Weather -->
		<WeatherBox 
			weather={{
				title: "Weather Report",
				description: "17 degrees c"
			}}
		/>

		<!-- Content sections -->
		<div class="space-y-8 mb-8">
			<section>
				<p class="km-body-text">
					<strong>DAY 25 of our scooting adventures!</strong><br><br>

					Tokyo to Utsunomiya - 1217km / 1800km<br><br>

					Estimated scooting time: 12 hours<br><br>

					Weather: 17 degrees c<br><br>

					Mood: Abit nervous about our muscles stiffening up after our 3-day rest but feeling more recovered overall
				</p>

				<p class="km-body-text">
					We left Tokyo in high spirits this morning, firstly because we felt well-rested and secondly because we are on the second half of the journey, yay!!!
				</p>

				<p class="km-body-text">
					We did the best pace ever today at 7.5km per hr including stopping for meals and rests! Our muscles feel alot less fatigued but our joints and ligaments have stiffen up. I daresay the real pains in our bodies have officially begun. The miles are catching up to us! My fingers even feel fatigued from gripping the handle bar.
				</p>

				<p class="km-body-text">
					Tresha's decided to continue the trip by backpack and catch up to us because of her lacerations and injuries. Gordon has decided to keep her company. It's sad to go our separate ways but everyone's journey is different.
				</p>

				<p class="km-body-text">
					So many people we meet in life, some join us at the beginning, others halfway. Some stay for a while, some leave early... no one stays forever, but we make the best of the times we have and when we look back one day, we'd realise that we became rich in spirit
				</p>

				<p class="km-body-text font-medium mt-8">
					Michelle Yang
				</p>
			</section>
		</div>

		<!-- Day navigation -->
		<DayNavigation 
			currentDay={25}
			totalDays={40}
			previousDay={{ url: "/trips/japan-2017/day-21-we-have-officially-hit-our-1000km-mark", label: "Day 21" }}
			nextDay={{ url: "/trips/japan-2017/day-26-more-than-1200km-scooted", label: "Day 26" }}
		/>

	</div>
</div>
