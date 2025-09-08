<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import WeatherBox from '$lib/components/WeatherBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';

	const stats = [
		{ value: '1333km', label: 'Distance' },
		{ value: '1800km', label: 'Journey Total' },
		{ value: '15 hours', label: 'Estimated scooting time' },
		{ value: '14°C', label: 'Temperature' }
	];

	const routeMapImages = [
		{
			src: '/images/japan-2017/day-26/day26-route-map.webp',
			alt: 'Route map from Utsunomiya to Koriyama - Day 26 journey with train assistance'
		}
	];

	const exhaustionImages = [
		{
			src: '/images/japan-2017/day-26/day26-photo-01.webp',
			alt: 'Sitting lost somewhere on the roadside, catching our breath'
		},
		{
			src: '/images/japan-2017/day-26/day26-photo-02.webp',
			alt: 'The reality of exhaustion - arch of our soles in severe pain'
		}
	];

	const reflectionImages = [
		{
			src: '/images/japan-2017/day-26/day26-photo-03.webp',
			alt: 'Taking the train - our first ride out of tiredness and fatigue'
		},
		{
			src: '/images/japan-2017/day-26/day26-photo-04.webp',
			alt: 'What we started with at the beginning of the trip'
		},
		{
			src: '/images/japan-2017/day-26/day26-photo-05.webp',
			alt: 'All the things we threw away as we went along the journey'
		}
	];
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

<div class="min-h-screen py-16 px-4">
	<div class="container mx-auto max-w-4xl">
		
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

		<!-- Stats -->
		<StatsBox {stats} />

		<!-- Weather -->
		<WeatherBox 
			weather={{
				title: "Weather Report",
				description: "14 degrees c, sunny! Feel really exhausted from yesterday's pace. Arch of our soles in alot of pain."
			}}
		/>

		<!-- Content sections -->
		<div class="space-y-8 mb-8">
			
			<!-- Main Content -->
			<section>
				<p class="km-body-text">
					DAY 26 of our scooting adventures!
				</p>

				<p class="km-body-text">
					Utsunomiya to Koriyama - 1333km / 1800km
				</p>

				<p class="km-body-text">
					Estimated scooting time: 15 hours
				</p>

				<p class="km-body-text">
					Weather: 14 degrees c, sunny!
				</p>

				<p class="km-body-text">
					Mood: Feel really exhausted from yesterday's pace. Arch of our soles in alot of pain.
				</p>

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
		</div>

		<!-- Day navigation -->
		<!-- Day navigation -->
		<DayNavigation 
			currentDay={26}
			totalDays={40}
			previousDay={{ url: "/trips/japan-2017/day-25-second-half-of-the-journey-officially-begins", label: "Day 25" }}
			nextDay={{ url: "/trips/japan-2017/day-27-my-fukushima-family", label: "Day 27" }}
		/>	</div>
</div>
