<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import WeatherBox from '$lib/components/WeatherBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';

	const day = 40;
	const title = 'OMG it\'s the last boss!';
	const date = '7 May';
	const description = 'The epic finale - battling extreme 47km/hr headwinds on our last major scooting day, like facing the final boss in a video game!';

	const stats = [
		{ value: 'DAY 40', label: 'FINAL DAY!' },
		{ value: 'Towada to Aomori', label: 'Route' },
		{ value: '1829km / 1842km', label: 'Progress' },
		{ value: '12 hours', label: 'Scooting Time' }
	];

	const photoImages = [
		{ src: '/images/japan-2017/day-40/day40-photo-01.webp', alt: 'The final boss challenge - extreme headwinds along the coast' },
		{ src: '/images/japan-2017/day-40/day40-photo-02.webp', alt: 'Battling the 47km/hr winds on our last major day' },
		{ src: '/images/japan-2017/day-40/day40-photo-03.webp', alt: 'Coastal route proving more challenging than expected' },
		{ src: '/images/japan-2017/day-40/day40-photo-04.webp', alt: 'The hardest day of our entire trip' },
		{ src: '/images/japan-2017/day-40/day40-photo-05.webp', alt: 'Fighting through the head gales along the coastline' },
		{ src: '/images/japan-2017/day-40/day40-photo-06.webp', alt: 'The Wind Gods trying to stop us in our tracks' },
		{ src: '/images/japan-2017/day-40/day40-photo-07.webp', alt: 'Satisfaction of overcoming our greatest challenge' },
		{ src: '/images/japan-2017/day-40/day40-photo-08.webp', alt: 'The final boss battle of our video game journey' },
		{ src: '/images/japan-2017/day-40/day40-photo-09.webp', alt: 'Beautiful coastal scenery despite the brutal conditions' },
		{ src: '/images/japan-2017/day-40/day40-photo-10.webp', alt: 'Pushing through the most challenging weather' },
		{ src: '/images/japan-2017/day-40/day40-photo-11.webp', alt: 'The epic struggle toward Aomori city' },
		{ src: '/images/japan-2017/day-40/day40-photo-12.webp', alt: 'Conquering the final major challenge' },
		{ src: '/images/japan-2017/day-40/day40-photo-13.webp', alt: 'Coastal views from our most demanding day' },
		{ src: '/images/japan-2017/day-40/day40-photo-14.webp', alt: 'The triumph of reaching Aomori against all odds' }
	];
</script>

<svelte:head>
	<title>Day 40 - OMG it's the last boss! | Japan 2017 | Kicking Miles</title>
	<meta name="description" content="{description}" />
	<meta property="og:title" content="Day 40 - OMG it's the last boss! | Japan 2017 | Kicking Miles" />
	<meta property="og:description" content="{description}" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/day-40-omg-its-the-last-boss/" />
	<meta property="og:image" content="https://kickingmiles.com/images/japan-2017/day-40/day40-photo-01.webp" />
	<meta property="article:published_time" content="2017-05-07" />
	<meta property="article:author" content="Michael Distel" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Day 40 - OMG it's the last boss! | Japan 2017 | Kicking Miles" />
	<meta name="twitter:description" content="{description}" />
	<meta name="twitter:image" content="https://kickingmiles.com/images/japan-2017/day-40/day40-photo-01.webp" />
	<link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/day-40-omg-its-the-last-boss/" />
</svelte:head>

<TripHeader 
	backUrl="/trips/japan-2017/"
	backText="Japan 2017 Daily Journal"
	dayNumber="DAY 40"
	date="7 May 2017"
	title="OMG it's the last boss!"
	progress="1829km / 1842km"
	subtitle="Towada to Aomori"
/>

<div class="km-container">
  <div class="km-content-wrapper">
	<!-- Section: Trip Stats -->
	<StatsBox {stats} />

	<!-- Section: Weather -->
	<WeatherBox 
		weather={{
			title: "Weather",
			description: "16 degrees c, wind is 47km/hr"
		}}
	/>

	<!-- Section: Content -->
	<div class="km-prose-content space-y-8">
		<section>
			<img src="/images/japan-2017/day-40/day40-photo-01.webp" alt="The final boss challenge - extreme headwinds along the coast" class="w-full mb-4" />
			<p class="km-body-text">
				Mood: Nervous about our last leg! Some slopes but we're taking the coastal path after Noheji to avoid the ranges. Headwinds are over 40km/hr
			</p>
		</section>

		<section>
			<p class="km-body-text">
				Today's marks the last major scoot and also the hardest day of our trip! Our nervousness was nothing compared to the force of the headwinds! Average wind speed recorded today in the city was 47km/hour. I daresay it was way higher than that along the coastline.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				This crazy winds lasted for more than half our journey. When we decided to take the coastal route, we swore it would be much better than the mountain ranges. Now we're questioning if that was the right choice.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				As we battled what should be more correctly termed head gales, instead of headwinds, there was also a certain sense of satisfaction that our last major day of scooting wasn't a walk in the park. You know that really awesome feeling of finally getting something that you've worked hard for? That feeling of satisfaction only ever comes when a real challenge is overcome or when things are not easy to get. It really felt like the Wind Gods were trying to stop us in our tracks!
			</p>
		</section>

		<section>
			<p class="km-body-text">
				I recall Eric said something similar, "You know what? It's like on video games, the final boss must be the hardest to beat so that you are so proud when you finish the game!" And so it was, today felt like the final boss of a computer game.
			</p>
		</section>

		<ContentBox type="highlight">
			<p>And you know what? We beat it!</p>
		</ContentBox>

		<section>
			<hr class="border-km-subtle my-8" />
			<p class="km-body-text">
				<strong>PS:</strong> Tomorrow will be our last day! It's a 3 hr ferry ride from Aomori city to Hakodate and then a 10km scoot up the moutain! We expect to summit between 4-6pm JP time!
		</p>
	</section>

	<p class="text-sm text-km-subtle italic mt-8">Michelle Yang</p>
    </div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={40}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-39-golden-week-holiday-madness", label: "Day 39" }}
      nextDay={{ url: "/trips/japan-2017/mission-complete-we-made-it", label: "Mission Complete" }}
    />

  </div>
</div>