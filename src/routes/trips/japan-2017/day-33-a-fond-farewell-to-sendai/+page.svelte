<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import WeatherBox from '$lib/components/WeatherBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';

	const stats = [
		{ value: '1491km', label: 'Distance' },
		{ value: '1800km', label: 'Journey Total' },
		{ value: '8 hours', label: 'Estimated scooting time' },
		{ value: 'Genki', label: 'Energy' }
	];

	const routeMapImages = [
		{
			src: '/images/japan-2017/day-33/day33-route-map.webp',
			alt: 'Route map from Sendai to Osaki - fond farewell and perspective shift'
		}
	];

	const farewellImages = [
		{
			src: '/images/japan-2017/day-33/day33-photo-01.webp',
			alt: 'Genki hearty breakfast prepared by Yuki\'s momma at 6:30am'
		},
		{
			src: '/images/japan-2017/day-33/day33-photo-02.webp',
			alt: 'Fond farewell to momma and papa before leaving Sendai'
		},
		{
			src: '/images/japan-2017/day-33/day33-photo-03.webp',
			alt: 'Leaving Sendai in happy spirits, well rested and ready'
		},
		{
			src: '/images/japan-2017/day-33/day33-photo-04.webp',
			alt: 'Perfect weather for kicking merrily and chatting jovially'
		}
	];

	const journeyImages = [
		{
			src: '/images/japan-2017/day-33/day33-photo-05.webp',
			alt: 'Deep conversations about life and what this trip means'
		},
		{
			src: '/images/japan-2017/day-33/day33-photo-06.webp',
			alt: 'Distant shouts of "ganbatte!" cheering us on'
		},
		{
			src: '/images/japan-2017/day-33/day33-photo-07.webp',
			alt: 'Junior high school girl giving us her last pack of Pocky sticks'
		},
		{
			src: '/images/japan-2017/day-33/day33-photo-08.webp',
			alt: 'Beautiful sunset on bridge - sun dropping into snow-capped mountains'
		}
	];

	const hotelImages = [
		{
			src: '/images/japan-2017/day-33/day33-photo-09.webp',
			alt: 'Hotel that initially seemed abandoned - apocalyptic scene'
		},
		{
			src: '/images/japan-2017/day-33/day33-photo-10.webp',
			alt: 'Wide open areas and abandoned bowling center'
		},
		{
			src: '/images/japan-2017/day-33/day33-photo-11.webp',
			alt: 'Hotel built for tsunami reconstruction workers - beacon of hope'
		}
	];
</script>

<svelte:head>
	<title>Day 33: A fond farewell to Sendai - Japan 2017 - Kicking Miles</title>
	<meta name="description" content="Day 33 from Sendai to Osaki. Heartwarming farewell, beautiful sunset, and profound perspective shift - 1,491km of 1,800km. From apocalyptic to meaningful through understanding." />
	<meta name="keywords" content="Japan scooter journey, Sendai to Osaki, fond farewell, Yuki family, ganbatte, Pocky sticks, tsunami reconstruction hotel, perspective shift" />
	
	<meta property="og:title" content="Day 33: A fond farewell to Sendai - Japan 2017" />
	<meta property="og:description" content="A beautiful day of farewells, deep conversations, and discovering how perspective can transform our understanding of the world around us." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/day-33-a-fond-farewell-to-sendai" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Day 33: A fond farewell to Sendai" />
	<meta name="twitter:description" content="From hearty breakfast to profound perspective shift - how understanding context can transform fear into meaning and hope." />
	
	<link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/day-33-a-fond-farewell-to-sendai" />
</svelte:head>

<div class="min-h-screen py-16 px-4">
	<div class="container mx-auto max-w-4xl">
		
		<!-- Header -->
		<TripHeader 
			backUrl="/trips/japan-2017"
			backText="Japan 2017 Daily Journal"
			dayNumber="DAY 33"
			date="29 April 2017"
			title="A fond farewell to Sendai"
			progress="1491km / 1800km"
			subtitle="Sendai to Osaki"
		/>

		<!-- Stats -->
		<StatsBox {stats} />

		<!-- Weather -->
		<WeatherBox 
			weather={{
				title: "Weather Report",
				description: "23 degrees c, warm and sunny! Genki, well rested and ready for more!"
			}}
		/>

		<!-- Content sections -->
		<div class="space-y-8 mb-8">
			
			<!-- Main Content -->
			<section>
				<p class="km-body-text">
					DAY 33 of our scooting adventures!
				</p>

				<p class="km-body-text">
					Sendai to Osaki - 1491km / 1800km
				</p>

				<p class="km-body-text">
					Estimated scooting time: 8 hours
				</p>

				<p class="km-body-text">
					Weather: 23 degrees c, warm and sunny!
				</p>

				<p class="km-body-text">
					Mood: Genki, well rested and ready for more!
				</p>

				<p class="km-body-text">
					We woke up at 6.30am this morning to a genki, hearty breakfast prepared by Yuki's momma. Both momma and papa had to go to leave for work early. After a fond farewell to both of them, we left Sendai in happy spirits!
				</p>

				<p class="km-body-text">
					Today felt easy because we rested well. The weather was perfect and we kicked merrily, chatting jovially along the way. Don't be deceived by all our happy posts though because sometimes we become cranky and whingey. But today wasn't one of those days. We had deep conversations about life today, what this trip meant to us, what we hope to achieve when we go back...
				</p>

				<p class="km-body-text">
					Occasionally, we would hear the distant shouts of someone yelling, "ganbatte!", to us. We even had a junior high school girl wishing us good luck and giving us her last pack of Pocky sticks. People everywhere have been very friendly but people around Sendai are not shy to express it! We wonder if this openness is because people in the countryside focus more on the community and also being present to life than city people.
				</p>

				<p class="km-body-text">
					Aside from a beautiful sunset on the bridge where we literally saw the sun drop into the snow-capped mountains, the other highlight was staying in a hotel that initially seemed abandoned. We later found out that that hotel was built to house the workers and builders who worked on rebuilding the destruction of the Sendai tsunami.
				</p>

				<p class="km-body-text">
					If you arrived at the hotel in the evening as we did, you might feel like it's a scene from the game, "Fallout". There was nothing much around in the vincinity. There were wide open areas and an abandoned bowling center and arcade. Do-not-enter ropes were drapped across entrances and dim flashing lights where the light bulbs needed replacement lit up some areas. I swore the hair on my neck stood up. The hotel lobby itself was wide and big but there was no one around except a receptionist. There were three slot machines flashing, their lights casting an eerie glow on the wall as we walked passed. When we spoke, there was also a slight echo. I can't stress enough the vivid images of an apocalyptic disaster wasteland.
				</p>

				<p class="km-body-text">
					When we found out what the hotel was constructed for, it all fell into place. The hotel was built to house the volunteers, builders and construction workers who were working to rebuild the destruction zone after the tsunami aftermath. And there were 5 such spots that have now turned into a hotel. Just that one piece of information changed the whole scene from freaky to humbling, scary to meaningful. From a disaster zone to a purposeful beacon of hope in one small piece of information.
				</p>

				<p class="km-body-text">
					Funny that isn't it? And then it follows that if life is simply a matter of interpretation, then perhaps there are so many more perspectives from which we can potentially view our lives right now.
				</p>

				<p class="km-body-text font-medium">
					Michelle Yang
				</p>
			</section>
		</div>

		<!-- Day navigation -->
		<DayNavigation 
			currentDay={33}
			totalDays={40}
			previousDay={{ url: "/trips/japan-2017/day-32-updates", label: "Day 32" }}
			nextDay={{ url: "/trips/japan-2017/day-34-allergy-attack", label: "Day 34" }}
		/>

	</div>
</div>
