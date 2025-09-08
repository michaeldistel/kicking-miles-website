<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import WeatherBox from '$lib/components/WeatherBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';

	const day = 34;
	const title = 'Allergy attack!';
	const date = '30 Apr';
	const description = 'Battling exhausting allergies and reflecting on the deeper motivations that keep me kicking every mile to the end.';

	const stats = [
		{ value: 'DAY 34', label: 'Journey Day' },
		{ value: 'Osaki to Ichinoseki', label: 'Route' },
		{ value: '1538km / 1800km', label: 'Progress' },
		{ value: '8 hours', label: 'Estimated scooting time' }
	];

	const photoImages = [
		{ src: '/images/japan-2017/day-34/day34-photo-01.webp', alt: 'Scenic countryside view during our scooting journey' },
		{ src: '/images/japan-2017/day-34/day34-photo-02.webp', alt: 'Mountain landscape along the route' },
		{ src: '/images/japan-2017/day-34/day34-photo-03.webp', alt: 'Rural road through beautiful green fields' },
		{ src: '/images/japan-2017/day-34/day34-photo-04.webp', alt: 'Peaceful valley scenery' },
		{ src: '/images/japan-2017/day-34/day34-photo-05.webp', alt: 'Traditional Japanese countryside architecture' },
		{ src: '/images/japan-2017/day-34/day34-photo-06.webp', alt: 'Rolling hills and farmland view' },
		{ src: '/images/japan-2017/day-34/day34-photo-07.webp', alt: 'Scenic mountain backdrop during our journey' },
		{ src: '/images/japan-2017/day-34/day34-photo-08.webp', alt: 'Beautiful rural landscape with mountains' },
		{ src: '/images/japan-2017/day-34/day34-photo-09.webp', alt: 'Countryside road winding through green fields' },
		{ src: '/images/japan-2017/day-34/day34-photo-10.webp', alt: 'Panoramic view of the Japanese countryside' },
		{ src: '/images/japan-2017/day-34/day34-photo-11.webp', alt: 'Beautiful scenery capturing the essence of our journey' }
	];
</script>

<svelte:head>
	<title>Day 34 - Allergy attack! | Japan 2017 | Kicking Miles</title>
	<meta name="description" content="{description}" />
	<meta property="og:title" content="Day 34 - Allergy attack! | Japan 2017 | Kicking Miles" />
	<meta property="og:description" content="{description}" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://www.kickingmiles.com/trips/japan-2017/day-34-allergy-attack/" />
	<meta property="og:image" content="https://www.kickingmiles.com/images/japan-2017/day-34/day34-photo-01.webp" />
	<meta property="article:published_time" content="2017-04-30" />
	<meta property="article:author" content="Michael Distel" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Day 34 - Allergy attack! | Japan 2017 | Kicking Miles" />
	<meta name="twitter:description" content="{description}" />
	<meta name="twitter:image" content="https://www.kickingmiles.com/images/japan-2017/day-34/day34-photo-01.webp" />
	<link rel="canonical" href="https://www.kickingmiles.com/trips/japan-2017/day-34-allergy-attack/" />
</svelte:head>

<TripHeader 
	backUrl="/trips/japan-2017/"
	backText="Japan 2017 Daily Journal"
	dayNumber="DAY 34"
	date="30 April 2017"
	title="Allergy attack!"
	progress="1538km / 1800km"
	subtitle="Osaki to Ichinoseki"
/>

<div class="container mx-auto px-4 py-4 pb-2 max-w-4xl">
	<!-- Section: Trip Stats -->
	<StatsBox {stats} />

	<!-- Section: Weather -->
	<WeatherBox 
		weather={{
			title: "Weather Report",
			description: "19 degrees c, rains threatened! Starting to feel exhausted from allergies"
		}}
	/>

	<!-- Section: Main Content -->
	<div class="space-y-8 mb-8">
		<section>
			<p class="km-body-text">
				DAY 34 of our scooting adventures!
			</p>

			<p class="km-body-text">
				Osaki to Ichinoseki - 1538km / 1800km
			</p>

			<p class="km-body-text">
				Estimated scooting time: 8 hours
			</p>

			<p class="km-body-text">
				Weather: 19 degrees c, rains threatened!
			</p>

			<p class="km-body-text">
				Mood: Starting to feel exhausted from allergies
			</p>

			<p class="km-body-text">
				As we go further up north each day, we find that we're both starting to get massive allergies. Yuki's mom reckons it's the cedar pollen that's found in the region. I only know that I sneezed so much that my whole body feels extremely exhausted, as if I ran a marathon on high intensity mode. If you suffer from hay fever like us, you would understand that feeling of exhaustion.
			</p>

			<p class="km-body-text">
				In fact, there were only two times in this whole trip I felt so miserable, I found it hard to find motivation to continue. One of those times was today. Jills, my good friend, asked me the question, "what keeps you going?". I pondered her words carefully as I scooted along today. My motivation was dipping drastically with each sneeze I did and I wondered to myself what the trip meant.
			</p>

			<p class="km-body-text">
				Just like that, the answer came to me. I made a promise to myself more than 10 years ago. At that time, I had never done anything remotely this adventurous before. It was a challenge on so many levels for me. Identifying my boundaries was constantly on my mind as a young pup. Fast forward more than 10 years later, I've even done part of this trip solo before. I understand myself on a much deeper level and I know where my physical, emotional and mental boundaries lie. That's why, this trip isn't so much overcoming the difficulties for me but more the mental determination to see my promise to the end.
			</p>

			<p class="km-body-text">
				And why does this keep me going? Because I truly believe that all good things never come easy. In fact, they are the ones worth fighting for. Fulfilling my promise to myself is a hundred times more important that the discomfort I face. It is easy to run away, but in the act of running away, you deny yourself the beautiful things that you so deserve to have in life. I want to wake up everyday and face the world knowing that I have lived true to myself.
			</p>

			<p class="km-body-text">
				And so I am kicking every mile to the end, no matter the pain, no matter the exhaustion and no matter the allergies, because I deserve to live the good life.
			</p>

			<p class="km-body-text font-medium">
				Michelle Yang
			</p>
		</section>

		<!-- Day navigation -->
		<DayNavigation 
			currentDay={34}
			totalDays={40}
			previousDay={{ url: "/trips/japan-2017/day-33-a-fond-farewell-to-sendai", label: "Day 33" }}
			nextDay={{ url: "/trips/japan-2017/day-35-when-life-throws-you-yet-another-curve-ball", label: "Day 35" }}
		/>
	</div>
</div>
