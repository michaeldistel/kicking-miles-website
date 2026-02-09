<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';
	import { onMount } from 'svelte';
	import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

	const stats = [
		{ value: '1006km', label: 'Distance' },
		{ value: '1800km', label: 'Total' },
		{ value: '5 hours', label: 'Scooting' },
		{ value: 'Exhausted but 1000km!!!', label: 'Mood' }
	];

	const images = [
		{ src: '/images/japan-2017/day-21/route-map-01-1x1.webp', alt: 'Route map from Shizuoka to Mishima - Day 21 journey marking our 1000km milestone' },
		{ src: '/images/japan-2017/day-21/photo-02-3x4.webp', alt: 'McDonald\'s celebratory meal after reaching 1000km mark' },
		{ src: '/images/japan-2017/day-21/photo-03-3x4.webp', alt: 'Team photo marking our major milestone achievement' },
		{ src: '/images/japan-2017/day-21/photo-04-9x16.webp', alt: 'The physical toll visible - worn Asics Noosa Tri shoes after 1000km' },
		{ src: '/images/japan-2017/day-21/photo-05-9x16.webp', alt: 'Salt trails on black shirts from vigorous daily sweating' },
		{ src: '/images/japan-2017/day-21/photo-06-4x3.webp', alt: 'Scooters in Mishima town showing remarkable durability after 1000km' },
		{ src: '/images/japan-2017/day-21/photo-07-4x3.webp', alt: 'Reflective moment at Lake Hamana after reaching 1000km' },
		{ src: '/images/japan-2017/day-21/updates-01-3x4.webp', alt: 'Day 21 updates and reflections on hitting 1000km mark' }
	];

	let pswpImages: any[] = [];

	onMount(() => {
		pswpImages = prepareImagesForPhotoSwipe(images);
	});
</script>

<svelte:head>
	<title>Day 21: We have officially hit our 1000km mark! - Japan 2017 - Kicking Miles</title>
	<meta name="description" content="Day 21 from Shizuoka to Mishima. A milestone celebration as we officially hit our 1000km mark! McDonald's celebration, physical reflections, and looking ahead to Tokyo in two days." />
	<meta name="keywords" content="Japan scooter journey, 1000km milestone, Shizuoka to Mishima, physical conditioning, travel celebration, Tokyo approach" />
	
	<meta property="og:title" content="Day 21: We have officially hit our 1000km mark! - Japan 2017" />
	<meta property="og:description" content="Celebrating our 1000km milestone in Mishima! Reflections on physical condition, scooter maintenance, and the mental game of long-distance travel." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/day-21-we-have-officially-hit-our-1000km-mark" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Day 21: We have officially hit our 1000km mark!" />
	<meta name="twitter:description" content="Milestone celebration in Mishima as we cross the 1000km mark of our Japan scooter adventure." />
	
	<link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/day-21-we-have-officially-hit-our-1000km-mark" />
</svelte:head>

<div class="min-h-screen py-16 px-4">
	<div class="container mx-auto max-w-4xl">
		
		<!-- Header -->
		<TripHeader 
			backUrl="/trips/japan-2017"
			backText="Japan 2017 Daily Journal"
			dayNumber="DAY 21"
			date="15 April 2017"
			title="We have officially hit our 1000km mark!"
			progress="1,006 kilometres of 1,800"
			subtitle="Day 21"
		/>

	<!-- Stats -->
	<StatsBox {stats} fullWidth />

	<!-- Content sections -->
	<div class="km-prose-content space-y-8">
			<section>
				<p class="km-body-text">
					As our scooters pulled into the town of Mishima this afternoon, we hi-fived each other for hitting our 1000km mark and then danced a little jig and had a little celebratory meal at Macdonalds! More than halfway!!! And it felt like it wasn't that many days ago when we started.
				</p>

				<p class="km-body-text">
					We are in overall relatively good physical, emotional and mental condition. Our feet are extremely sore with some water retention. My back hurts from trying to overcompensate for my tight quadriceps and I feel generally exhausted. The most tired muscle in my body must be my calves as I kick off from my tippy toes so I don't need to do as many semi-squats for a full heel strike.
				</p>

				<p class="km-body-text">
					Many people have asked about our strokes. I'd say I use my "quads + full heel strike" 50% of the time and "calves + toe strike" the remaining 50%. The quad combo requires us to use our whole body, including the back muscles to support us as we do a squat with each kick. It is the most economical movement for speed and is ideal when moving for long distances without stopping. The calves and toe combo is easier when navigating the streets. It is also great for short sprints, but it doesn't give as much power as the full heel strike combo.
				</p>

				<p class="km-body-text">
					My hands are also sore from gripping the handlebar, especially when going down bumpy surfaces. The padding on my Giro gloves help to absorb some of the shock but our bodies take most of it as the scooter is very stiff. Because the gloves are not fully-covered gloves, my fingers look like they are half dyed in henna ink from the sunburn, haha!
				</p>

				<p class="km-body-text">
					We lose alot of salts everyday from the vigorous sweating. Our black shirts look like there's a salt trail on them at the end of each day. It is fundamentally important that we consume electrolytes to replace them at regular intervals. I know when I don't have enough because a splitting headache will ensue.
				</p>

				<p class="km-body-text">
					Emotionally, I'm still feeling motivated to get to Hakodate. Aside from some mountain slopes and the initial horrible weather conditions, the journey had been pretty pleasant. My bag happens to be the heaviest as I somehow load unnecessary things like books, extra clothes, moisturiser etc, but that just means that I am indirectly conditioning my fitness over the 1800kms LOL.
				</p>

				<p class="km-body-text">
					Mentally, the terrain is starting to get dull, the people predictable and the scenery repetitive. I have a scooting playlist that I use throughout the day. Rihanna always starts the morning with her high energy songs. I do electro in the mid mornings, pop songs like Justin Bieber in the late afternoon and then I slow down with some slow crooning or even meditation music in the evening. I've never been a run-and-blast-music kinda person but on long haul scoots like this, some music does help.
				</p>

				<p class="km-body-text">
					Gordon and Michael were chatting about their "Beast mode" music when Tresha asked me what I had on. I looked at her and said, "Meditation for Deep Sleep" is playing right now, LOL! And somehow it really does work for me.
				</p>

				<p class="km-body-text">
					My relatively new Asics Noosa Tri shoes have almost worn down such that I lose traction when I kick off sandy surfaces. Aside from wear and tear, our scooters are holding up surprisingly well for the distances they have travelled.
				</p>

				<p class="km-body-text">
					Calories-wise, we loose about 1000kcal per 10km we do. This averages out the easy and difficult days and factors in the weight of our luggages. I'm starting to feel my metabolism rise after the second week. It also helps to drink three shots of caffeine throughout the day.
				</p>

				<p class="km-body-text">
					We've met so many people along the way, some excited and inspired, some happily cheering us but most were indifferent. In two days we will finally hit Tokyo, one of my favourite cities in the world. Right now I'm laying in bed, almost done updating today's posts and my eyes are about to close... Almost 80km tomorrow. Onwards to Kanagawa!
				</p>

				<p class="km-body-text">
					And PS: if we haven't replied your messages, it's not because we don't love you but because we're exhausted every night. We're truly thankful for everyone's support and will keep going until we reach our final destination at Hakodate!
				</p>

				<p class="km-body-text font-medium mt-8">
					Michelle Yang
				</p>
			</section>

			<!-- Photo Gallery -->
			<div>
				<PhotoSwipeGallery 
					images={pswpImages}
					title="1000km Milestone Journey" 
					galleryId="day21-milestone"
				/>
			</div>
		</div>

		<!-- Day navigation -->
		<DayNavigation 
			currentDay={21}
			totalDays={40}
			previousDay={{ url: "/trips/japan-2017/day-20-our-first-serious-casualty", label: "Day 20" }}
			nextDay={{ url: "/trips/japan-2017/day-25-second-half-of-the-journey-officially-begins", label: "Day 25" }}
		/>

	</div>
</div>
