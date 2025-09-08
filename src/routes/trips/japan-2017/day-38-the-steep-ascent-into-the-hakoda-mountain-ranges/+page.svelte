<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import WeatherBox from '$lib/components/WeatherBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';

	const day = 38;
	const title = 'The steep ascent into the Hakoda mountain ranges';
	const date = '5 May';
	const description = 'Facing the most challenging mountain passes yet and discovering profound insights about managing fear, embracing uncertainty, and building confidence through boundary-pushing.';

	const stats = [
		{ value: 'DAY 38', label: 'Journey Day' },
		{ value: 'Ninohe to Towada', label: 'Route' },
		{ value: '1759km / 1800km', label: 'Progress' },
		{ value: '8 hours', label: 'Scooting Time' }
	];

	const photoImages = [
		{ src: '/images/japan-2017/day-38/day38-photo-01.webp', alt: 'The challenging Hakoda mountain ranges stretching ahead' },
		{ src: '/images/japan-2017/day-38/day38-photo-02.webp', alt: 'Steep mountain ascents through multiple passes' },
		{ src: '/images/japan-2017/day-38/day38-photo-03.webp', alt: 'Beautiful but demanding mountain scenery' },
		{ src: '/images/japan-2017/day-38/day38-photo-04.webp', alt: 'Narrow mountain roads without sidewalks' },
		{ src: '/images/japan-2017/day-38/day38-photo-05.webp', alt: 'The physical challenge of ascending slopes' },
		{ src: '/images/japan-2017/day-38/day38-photo-06.webp', alt: 'Mountain landscapes testing our endurance' },
		{ src: '/images/japan-2017/day-38/day38-photo-07.webp', alt: 'Sparse settlements in the mountainous terrain' },
		{ src: '/images/japan-2017/day-38/day38-photo-08.webp', alt: 'The demanding route through Hakoda ranges' },
		{ src: '/images/japan-2017/day-38/day38-photo-09.webp', alt: 'Challenging mountain passes we conquered' },
		{ src: '/images/japan-2017/day-38/day38-photo-10.webp', alt: 'Beautiful views from the steep ascents' },
		{ src: '/images/japan-2017/day-38/day38-photo-11.webp', alt: 'The rugged terrain that tested our limits' },
		{ src: '/images/japan-2017/day-38/day38-photo-12.webp', alt: 'Mountain road challenges without public transport backup' },
		{ src: '/images/japan-2017/day-38/day38-photo-13.webp', alt: 'Scenic but demanding Hakoda mountain landscapes' },
		{ src: '/images/japan-2017/day-38/day38-photo-14.webp', alt: 'The physical and mental challenge of mountain scooting' },
		{ src: '/images/japan-2017/day-38/day38-photo-15.webp', alt: 'Beautiful mountain vistas along our route' },
		{ src: '/images/japan-2017/day-38/day38-photo-16.webp', alt: 'The confidence-building journey through mountain passes' },
		{ src: '/images/japan-2017/day-38/day38-photo-17.webp', alt: 'Challenging terrain that pushed our boundaries' },
		{ src: '/images/japan-2017/day-38/day38-photo-18.webp', alt: 'Mountain scenery from our most demanding leg' },
		{ src: '/images/japan-2017/day-38/day38-photo-19.webp', alt: 'The steep ascents into Hakoda ranges' },
		{ src: '/images/japan-2017/day-38/day38-photo-20.webp', alt: 'Beautiful but challenging mountain landscape' },
		{ src: '/images/japan-2017/day-38/day38-photo-21.webp', alt: 'The reward of conquering difficult mountain passes' },
		{ src: '/images/japan-2017/day-38/day38-photo-22.webp', alt: 'Final mountain views from our challenging ascent' }
	];
</script>

<svelte:head>
	<title>Day 38 - The steep ascent into the Hakoda mountain ranges | Japan 2017 | Kicking Miles</title>
	<meta name="description" content="{description}" />
	<meta property="og:title" content="Day 38 - The steep ascent into the Hakoda mountain ranges | Japan 2017 | Kicking Miles" />
	<meta property="og:description" content="{description}" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://www.kickingmiles.com/trips/japan-2017/day-38-the-steep-ascent-into-the-hakoda-mountain-ranges/" />
	<meta property="og:image" content="https://www.kickingmiles.com/images/japan-2017/day-38/day38-photo-01.webp" />
	<meta property="article:published_time" content="2017-05-05" />
	<meta property="article:author" content="Michael Distel" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Day 38 - The steep ascent into the Hakoda mountain ranges | Japan 2017 | Kicking Miles" />
	<meta name="twitter:description" content="{description}" />
	<meta name="twitter:image" content="https://www.kickingmiles.com/images/japan-2017/day-38/day38-photo-01.webp" />
	<link rel="canonical" href="https://www.kickingmiles.com/trips/japan-2017/day-38-the-steep-ascent-into-the-hakoda-mountain-ranges/" />
</svelte:head>

<TripHeader 
	backUrl="/trips/japan-2017/"
	backText="Japan 2017 Daily Journal"
	dayNumber="DAY 38"
	date="5 May 2017"
	title="The steep ascent into the Hakoda mountain ranges"
	progress="1759km / 1800km"
	subtitle="Ninohe to Towada"
/>

<div class="container mx-auto px-4 py-4 pb-2 max-w-4xl">
	<!-- Section: Trip Stats -->
	<StatsBox {stats} />

	<!-- Section: Weather -->
	<WeatherBox 
		weather={{
			title: "Weather",
			description: "26 degrees c"
		}}
	/>

	<!-- Section: Content -->
	<div class="space-y-8 mb-8">
		<section>
			<img src="/images/japan-2017/day-38/day38-photo-01.webp" alt="The challenging Hakoda mountain ranges stretching ahead" class="w-full mb-4" />
			<p class="km-body-text">
				Mood: It felt like a furnace. We were nervous about crossing the next 3 mountain passes, many parts without a side walk, and apprehensive about the physical exertion. We made it eventually but got sunburnt
			</p>
		</section>

		<section>
			<p class="km-body-text">
				Day 37 marked our entry into the hilly terrain of the Aomori region. Out of the total of 70km+, there would have been about 15km of ascending slopes. Day 38 on the other hand, marked our real steep ascent into the mountains, as we scoot deeper into the Hakoda ranges through the multiple mountain passes. Out of the 50km+, about nearly three-quarters of it were ascending slopes, some of them without sidewalks once again.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				In our tiredness, we would sometimes hop off our scooters and walk up instead. Other times we stubbornly try to scoot up, going against all muscle fatigue. Once we even stopped right at the roadside curb to eat in sun because there was nowhere else. As the towns get sparser, the region more hilly, we also noticed there are lesser convenience stores around too. Those "conbini" that have been our lifeblood throughout this trip have become increasingly harder to find. So we try to stock up on as much as we can just in case. I ended up having my whole backpack full of snacks from fear and desperation!
			</p>
		</section>

		<section>
			<p class="km-body-text">
				This trip was by far, one of the most challenging leg on so many levels. Physically, it had the most distance in ascent. Emotionally, there was doubt and fear on whether we would make it and if we did could we do it before nightfall. Mentally, there was no failsafe to rely on because there simply was no backup plan. Public transport was zero along the passes. You can imagine the tension that was present early this morning. Neither of us had crossed this many mountain passes without sidewalks on a scooter before.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				Yet on a journey like this, such issues have to be confronted everyday whether we like it or not. And they have to be confronted at point blank to move forwards. During times like these, there is a natural response to focus on our fears and other negatives, like "what ifs" because they protect us from potential harm and keep us safe. And yet in that safe refuge, we peer outside hungrily wondering what's out there. The desire to be an adventurer is strong and curious in all of us. The fear of the unknown is perhaps also equally strong.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				How do you manage the fight between the two then? The answer is simple. You don't.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				If we sit back and take a deep breath, we come to realise that oftentimes it's not so much the practical and logical aspects of things that we are afraid of as it is the emotions that are running rampant in us. Our decisions end up being driven by what seems to be practical and logical justifications but are actually underlaid by fear and stress.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				Embracing our natural response to uncertainty and discomfort is perhaps the first step towards building confidence within ourselves. The way Michael handles uncertainy is by using plain logic and mathematical probabilities. The way I deal with uncertainty is through sheer confidence from having had my boundaries constantly pushed my whole life.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				Through pushing my boundaries, I learn to identify what I'm comfortable taking on physically, emotionally and mentally. This simple identification gives me my identity. It helps me know who I am, what I want and how far I'm willing to go for what I want. When we begin to operate from a space of ownership, we feel empowered to make choices that serve us, instead of feeling cornered to make a decision out of fear. One simple change in mindset and a rainbow of colours appear on the horizon.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				And what's the best way to kickstart this journey? By being present to what you feel and then doing the hard work of leaning into the discomfort.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				There definitely was one thing we got out of leaning into today's discomfort: the confidence of knowing that if those similar mountain passes appear on the road ahead, whether in Japan or some other country, we will be able to handle them somehow!
			</p>
		</section>

		<ContentBox type="highlight">
			<p>And that is why we will continue leaning into the challenges that tomorrow will surely throw at us.</p>
		</ContentBox>

		<p class="text-sm text-gray-600 mt-4">Michelle Yang</p>

		<!-- Section: Image Gallery -->
		<ImageGallery photoImages={photoImages} title="Hakoda Mountain Challenge" />

		<!-- Day navigation -->
		<DayNavigation 
			currentDay={38}
			totalDays={40}
			previousDay={{ url: "/trips/japan-2017/day-37-the-beginning-of-the-last-hard-leg", label: "Day 37" }}
			nextDay={{ url: "/trips/japan-2017/day-39-golden-week-holiday-madness", label: "Day 39" }}
		/>
	</div>
</div>
