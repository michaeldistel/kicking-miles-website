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
		{ value: '3 hours', label: 'Estimated scooting time' },
		{ value: 'Countryside', label: 'Setting' }
	];

	const routeMapImages = [
		{
			src: '/images/japan-2017/day-31/day31-route-map.webp',
			alt: 'Route map from Ogawara to Sendai through countryside roads'
		}
	];

	const countrysideImages = [
		{
			src: '/images/japan-2017/day-31/day31-photo-01.webp',
			alt: 'Semi-countryside feel of Tohoku putting us at ease'
		},
		{
			src: '/images/japan-2017/day-31/day31-photo-02.webp',
			alt: 'The stillness and warmth of countryside scenery'
		},
		{
			src: '/images/japan-2017/day-31/day31-photo-03.webp',
			alt: 'Waved at and cheered on by the most people yet'
		},
		{
			src: '/images/japan-2017/day-31/day31-photo-04.webp',
			alt: 'Meeting Yuki who made a u-turn to cheer us on'
		},
		{
			src: '/images/japan-2017/day-31/day31-photo-05.webp',
			alt: 'Small token of cash for a boost from kind stranger'
		},
		{
			src: '/images/japan-2017/day-31/day31-photo-06.webp',
			alt: 'Coffee from ojisan at 7-11 and kindness everywhere'
		},
		{
			src: '/images/japan-2017/day-31/day31-photo-07.webp',
			alt: 'Home made meal by Yuki\'s mom - Sendai family warmth'
		}
	];

	const photos = [...routeMapImages, ...countrysideImages];
</script>

<svelte:head>
	<title>Day 31: There's something about the countryside… - Japan 2017 - Kicking Miles</title>
	<meta name="description" content="Day 31 from Ogawara to Sendai. The soul of Tohoku countryside and meeting Sendai family - 1,451km of 1,800km. Introvert's paradise in quiet spaces and human connection." />
	<meta name="keywords" content="Japan scooter journey, Ogawara to Sendai, Tohoku countryside, introvert, Sendai family, quiet spaces, countryside soul, human connection" />
	
	<meta property="og:title" content="Day 31: There's something about the countryside… - Japan 2017" />
	<meta property="og:description" content="Finding peace in Tohoku countryside - the soul of Japan. Meeting kind strangers and Sendai family in the quiet spaces that restore an introvert's spirit." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/day-31-theres-something-about-the-countryside" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Day 31: There's something about the countryside…" />
	<meta name="twitter:description" content="If Tokyo is Japan's heart, Tohoku is its soul. Finding peace in countryside stillness and warmth, meeting strangers who become family." />
	
	<link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/day-31-theres-something-about-the-countryside" />
</svelte:head>

<div class="km-container">
  <div class="km-content-wrapper">
		
		<!-- Header -->
		<TripHeader 
			backUrl="/trips/japan-2017"
			backText="Japan 2017 Daily Journal"
			dayNumber="DAY 31"
			date="26 April 2017"
			title="There's something about the countryside…"
			progress="1451km / 1800km"
			subtitle="Ogawara to Sendai"
		/>

		<!-- Stats -->
		<StatsBox {stats} />

		<!-- Weather -->
		<WeatherBox 
			weather={{
				title: "Weather Report",
				description: "17 degrees c! Can't wait to meet my Sendai family!"
			}}
		/>

		<!-- Content sections -->
		<div class="km-prose-content space-y-8">
			
			<!-- Main Content -->
			<section>
				<p class="km-body-text">
					DAY 31 of our scooting adventures!
				</p>

				<p class="km-body-text">
					Ogawara to Sendai - 1451km / 1800km
				</p>

				<p class="km-body-text">
					Estimated scooting time: 3 hours
				</p>

				<p class="km-body-text">
					Weather: 17 degrees c!
				</p>

				<p class="km-body-text">
					Mood: Can't wait to meet my Sendai family!
				</p>

				<p class="km-body-text">
					If you know me well, you would know that I'm a massive introvert who enjoys quiet spaces and a lot of alone time. I feel more centered and calm, less tired and more at peace. Away from the hustle and bustle of busy Singapore, I love spending my time, not chasing after famous tourist sites, but simply hiding in a mountain cabin, camping in the wilderness or going for a walk in the woods.
				</p>

				<p class="km-body-text">
					Today's trip from Ogawara to Sendai is not entirely a mountainous country like in Adatara, but its semi-countryside feel puts me at immediate ease. I enjoy the Tohoku scenery (aka north of Tokyo for those who don't know) so much more than the cities. There is a certain stillness and warmth to the place, the way countrysides are. I once remarked to Yuki that she's a city girl from Sendai, the biggest city north of Tokyo but she immediately quipped back with a happy smile, "... only to those in Tohoku. To the rest of Japan, Sendai is the countryside."
				</p>

				<p class="km-body-text">
					If Tokyo is the vibrant heart of Japan, its economic lifeblood, then Tohoku is its soul, at once wild and hidden away but present and comfortable with her own identity at the same time. The people it seems, reflect this confidence with natural ease. Today was the day that we were waved at and cheered on by the most number of people I can remember.
				</p>

				<p class="km-body-text">
					We mostly see many shy smiles from people in cars and wide-eyed passerbys, so when someone does approach us, we know it took a small bit of courage on their part to approach these 2 crazy looking foreigners with an equally crazy war banner hanging from their backs
				</p>

				<p class="km-body-text">
					The most touching one was when a guy, also named Yuki (written differently in Japanese), made a u-turn just to stop by the roadside to cheer us on. You know when someone smiles from their heart, you can see it in their eyes. He leaned out over the passenger seat of his car, his arms casually waving and he chatted earnestly. As his way of showing his support and feelings, he gave us a small token of cash and insisted we buy something that will give us a boost. His small act has touched our hearts just as surely as we have touched his.
				</p>

				<p class="km-body-text">
					That day, we received so much love from people, including coffee from an ojisan at 7-11 and of course a home made meal by Yuki's mom! Our trip has been so much more enjoyable because of these little interactions. And all this could only have happened because two strangers have decided to let go of their fears to meet at the side of a random road to see what beautiful experiences would bloom.
				</p>

			<p class="km-body-text font-medium">
				Michelle Yang
			</p>
		</section>

		<!-- Photo Gallery -->
		<div>
			<ImageGallery photoImages={photos} galleryType="mixed" />
		</div>
	</div>

		
    <!-- Day navigation -->
		<DayNavigation 
			currentDay={31}
			totalDays={40}
			previousDay={{ url: "/trips/japan-2017/day-30-wonderful-people-everywhere", label: "Day 30" }}
			nextDay={{ url: "/trips/japan-2017/day-32-updates", label: "Day 32" }}
		/>

	</div>
</div>