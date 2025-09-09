<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';

	const title = 'Mission complete! We made it!!!';
	const date = '8 May';
	const description = 'The triumphant finale! After 41 days and 1,842 kilometres, we have reached the summit and completed our epic Japan kickboard adventure!';

	const stats = [
		{ value: 'MISSION COMPLETE!', label: 'STATUS' },
		{ value: '1,842km', label: 'Total Distance' },
		{ value: '41 Days', label: 'Journey Duration' },
		{ value: 'Fukuoka to Mount Hakodate', label: 'Route Completed' }
	];

	const photoImages = [
		{ src: '/images/japan-2017/mission-complete/mission-complete-photo-01.webp', alt: 'Mission complete! We made it to the summit!' },
		{ src: '/images/japan-2017/mission-complete/mission-complete-photo-02.webp', alt: 'Standing at the top after 41 days of adventure' },
		{ src: '/images/japan-2017/mission-complete/mission-complete-photo-03.webp', alt: 'The moment of triumph at Mount Hakodate observatory' },
		{ src: '/images/japan-2017/mission-complete/mission-complete-photo-04.webp', alt: 'Celebrating with our kickboards at the summit' },
		{ src: '/images/japan-2017/mission-complete/mission-complete-photo-05.webp', alt: 'The view from the top - we actually made it!' },
		{ src: '/images/japan-2017/mission-complete/mission-complete-photo-06.webp', alt: 'Sharing the moment with the lovely elderly couple' },
		{ src: '/images/japan-2017/mission-complete/mission-complete-photo-07.webp', alt: 'Heart-to-heart connections at the summit' },
		{ src: '/images/japan-2017/mission-complete/mission-complete-photo-08.webp', alt: 'The final photo opportunity at the observatory' }
	];
</script>

<svelte:head>
	<title>Mission Complete! We made it!!! | Japan 2017 | Kicking Miles</title>
	<meta name="description" content="{description}" />
	<meta property="og:title" content="Mission Complete! We made it!!! | Japan 2017 | Kicking Miles" />
	<meta property="og:description" content="{description}" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/mission-complete-we-made-it/" />
	<meta property="og:image" content="https://kickingmiles.com/images/japan-2017/mission-complete/mission-complete-photo-01.webp" />
	<meta property="article:published_time" content="2017-05-08" />
	<meta property="article:author" content="Michael Distel" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Mission Complete! We made it!!! | Japan 2017 | Kicking Miles" />
	<meta name="twitter:description" content="{description}" />
	<meta name="twitter:image" content="https://kickingmiles.com/images/japan-2017/mission-complete/mission-complete-photo-01.webp" />
	<link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/mission-complete-we-made-it/" />
</svelte:head>

<TripHeader 
	backUrl="/trips/japan-2017/"
	backText="Japan 2017 Daily Journal"
	dayNumber="FINALE"
	date="8 May 2017"
	title="Mount Hakodate Summit"
	progress="1,842 kilometres complete!"
	subtitle="Mission complete! We made it!!!"
/>

<div class="container mx-auto px-4 py-4 pb-2 max-w-4xl">
	<!-- Section: Trip Stats -->
	<StatsBox {stats} />

	<!-- Section: Content -->
	<div class="space-y-8 mb-8">
		<!-- Section: The Summit -->
		<section>
			<h2 class="text-2xl font-light text-km-primary mb-4">And we made it!!!!!!!!!!!!</h2>
			<p class="km-body-text text-xl font-medium" style="color: #C5007C;">
				Mission complete! We made it!!!
			</p>
		</section>

		<!-- Section: The Moment of Arrival -->
		<section>
			<p class="km-body-text">
				At the moment of ascent, we stood in stunned silence for more than a couple of moments, unsure of what to feel. Our mantra everyday since the 41 days ago, was to just "kick one step further". Now that we have reached the last kick, it took a while to tell ourselves we did not need to kick anymore.
			</p>

			<p class="km-body-text">
				For those who have done a long distance race before and know the feeling of relief when you reach the end, this feels somewhat different. We had already pushed ourselves way beyond what we initially perceived as "the end" such that when we came to the real end, there was a moment of stark uncertainty.
			</p>
		</section>

		<!-- Section: At the Observatory -->
		<section>
			<p class="km-body-text">
				We picked up our scooters and climbed to the top of the observatory and took our queue with a lovely old couple. After all Chinese tourists were done, it was our turn to plant our Singapore tourist footprint.
			</p>

			<p class="km-body-text">
				As it has always been on the whole trip, I am usually the one chirping away with all the strangers that we meet, in my smattering of broken Japanese, interspersed with English and hand signs. From strangers to friends, one chirp at a time. But somehow at that moment, I was too shell shocked that it has ended to chirp away to anyone.
			</p>
		</section>

		<!-- Section: Then It Happened -->
		<ContentBox type="highlight">
			<p><strong>Then it happened.</strong></p>
			<p>A nod from the old lady. An offer of help to take the photo for us from the old man. Some small talk. Then the chirps started to flow out.</p>
		</ContentBox>

		<!-- Section: The Connection -->
		<section>
			<p class="km-body-text">
				We took pictures together and excitedly shared what we did, how far we have come from. Those words, "hehhhhh, Fukuoka kara?!", wow, from Fukuoka?!, with that expellation of breathe, I have also come to memorise on this trip. She spoke briefly about where she lived. He mentioned that he is retired and enjoying the city life in Tokyo. She had a distant look as if she was reflecting on something.
			</p>
		</section>

		<!-- Section: The Realisation -->
		<section>
			<p class="km-body-text">
				And as I stood there chirping away with the lovely couple, it reminded me truly of what this trip was about. For me, this trip was about connecting with people, sharing our stories, our hopes and dreams, joys and regret and exchanging a small piece of our hearts with each other. In that moment it dawned on me, it was not the goal that was important, it was something else.
			</p>
		</section>

		<!-- Section: The Heart of the Journey -->
		<ContentBox type="quote">
			<p>Each of these special moments and pieces of hearts that we have exchanged - a genuine smile, nods from car windows, maniac waves across the sidewalks, frequent shouts of "ganbatte", sometimes heartfelt tears of joys and connection - has made my life more meaningful than it was each moment before.</p>
		</ContentBox>

		<!-- Section: The Moment of Clarity -->
		<section>
			<p class="km-body-text">
				And right at that very second when I told her that she was the first person on the mountain that I am telling, I saw the tears across the old lady's face, and knew that another piece of heart had been exchanged. And so with sudden clarity, I realised that this journey I have embarked on has not really ended with the summit.
			</p>
		</section>

		<!-- Section: The True Ending -->
		<ContentBox type="highlight">
			<p><strong>The journey will continue for as long as we are all sharing pieces of our hearts with each other.</strong></p>
			<p>And through that we all live on in each other hearts...</p>
		</ContentBox>

		<!-- Section: What's Next -->
		<section>
			<hr class="border-km-subtle my-8" />
			<h3 class="text-xl font-light text-km-primary mb-4">Coming Soon</h3>
			<p class="km-body-text">
				Will be posting 3 more updates in the next few days:
			</p>
			<ul class="list-disc list-inside space-y-2 mt-4 ml-4">
				<li class="km-body-text">A thank you video for everyone who has supported us</li>
				<li class="km-body-text">An equipment update and review video</li>
				<li class="km-body-text">A breakdown on the details of the journey, eg: trip costs, terrain, weight lost (if any lols), etc etc</li>
			</ul>
		</section>

		<!-- Section: Evening Update -->
		<section>
			<hr class="border-km-subtle my-8" />
			<p class="km-body-text font-medium">
				<strong>Post from this evening:</strong> So much happiness, satisfaction and joy to share with everyone! We are having dinner now and then going for the night view! So hang in there for our final drone shots of the mountain later tonight. Meanwhile enjoy the photo we took when we ascended!
			</p>
			<p class="km-body-text text-sm mt-2" style="color: #7E797C;">
				- Michelle Yang
			</p>
		</section>

		<!-- Section: Image Gallery -->
		<ImageGallery photoImages={photoImages} title="Mission Complete!" />

		<!-- Day navigation -->
		<DayNavigation 
			currentDay={41}
			totalDays={41}
			previousDay={{ url: "/trips/japan-2017/day-40-omg-its-the-last-boss", label: "Day 40" }}
			nextDay={{ url: "/trips/japan-2017/thank-you", label: "Thank You" }}
		/>
	</div>
</div>
