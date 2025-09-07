<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import WeatherBox from '$lib/components/WeatherBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';

	const stats = [
		{ value: '872km', label: 'Distance' },
		{ value: '1,800km', label: 'Journey Total' },
		{ value: '10 hours', label: 'Estimated Time' },
		{ value: '19°C', label: 'Temperature' }
	];

	const routeMapImages = [
		{
			src: '/images/japan-2017/day-19/day19-yoneko-cafe.webp',
			alt: 'Route map showing the location of our encounter with Yoneko-san in Hamamatsu'
		}
	];

	const sevenElevenImages = [
		{
			src: '/images/japan-2017/day-19/day19-photo-01.webp',
			alt: 'Morning departure from Gamagori continuing the coastal journey'
		},
		{
			src: '/images/japan-2017/day-19/day19-photo-02.webp',
			alt: 'Stopping at 7-Eleven for dinner before reaching our hotel'
		}
	];

	const journeyImages = [
		{
			src: '/images/japan-2017/day-19/day19-photo-03.webp',
			alt: 'Scenic route from Gamagori to Hamamatsu'
		},
		{
			src: '/images/japan-2017/day-19/day19-photo-04.webp',
			alt: 'Taking a moment to rest and catch our breath'
		},
		{
			src: '/images/japan-2017/day-19/day19-photo-05.webp',
			alt: 'Beautiful countryside along our 872km journey'
		}
	];

	const weather = {
		title: 'Weather Report',
		description: '19 degrees Celsius with pleasant and mild conditions. A little tired from our 100-year-old haunted hotel but overall \'genki\' and happy!'
	};
</script>

<svelte:head>
	<title>Day 19 - 7-eleven is not just for refuelling! | Japan 2017 | Kicking Miles</title>
	<meta name="description" content="Day 19 of our Japan kickboard adventure: A magical encounter with Yoneko-san at 7-Eleven leads to stories, coffee, and connections across generations." />
</svelte:head>

<!-- Day 19: Gamagori to Hamamatsu -->
<div class="min-h-screen py-16 px-4">
	<div class="container mx-auto max-w-4xl">
		
		<TripHeader 
			backUrl="/trips/japan-2017"
			backText="Japan 2017 Daily Journal"
			dayNumber="DAY 19"
			date="13 April 2017"
			title="Gamagori to Hamamatsu"
			progress="872 kilometres of 1,800"
			subtitle="7-eleven is not just for refuelling!"
		/>

		<StatsBox {stats} columns={2} />

		<!-- Weather -->
		<div class="mb-12">
			<WeatherBox {weather} />
		</div>

		<!-- Main content -->
		<div class="space-y-8 mb-8">
			<div>
				<ImageGallery title="Route Map" routeImages={routeMapImages} />
			</div>

			<div>
				<ImageGallery title="Journey Photos" photoImages={sevenElevenImages} />
			</div>

			<section>
				<!-- Section: 7-Eleven stop -->
				<h3 class="text-xl font-light mb-4 text-km-primary">More than convenience</h3>
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					Stopping by 7-Eleven to take away our dinner just before we hit our hotel, we spent a couple of minutes resting and catching our breath. We were chatting about last night's haunted hotel when Gordon told us about his dream of dementors and sleep paralysis, where reality and dreams combine.
				</p>
				
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					At the point when Yoneko-san walked out, Tresha and Michelle were laughing at having sleep paralysis filled with yakiniku barbecue and cream buns. Our laughter caught her attention and she beamed us a smile and said that laughter and happiness is the best thing in life.
				</p>

				<ContentBox type="quote">
					<p class="font-light italic">
						"She had a purposeful step and a happy aura about her. In a country where outward expressions of feelings are seldom voiced, this honest sharing of thoughts caught our attention."
					</p>
				</ContentBox>

				<div class="mt-6">
					<ImageGallery title="Journey Moments" photoImages={journeyImages} />
				</div>
			</section>

			<section>
				<!-- Section: Singapore memories -->
				<h3 class="text-xl font-light mb-4 text-km-primary">Stories from Singapore, 50 years ago</h3>
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					I immediately lapsed into my broken Japanese. We made some small talk about our scooting adventure and her trip to Singapore 50 years ago when she was in her twenties. Out came her recounting of the happy memories she had of her travels. I could almost see the glow of her smile in the dark.
				</p>
				
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					She spoke about visiting the bird park even though she was petrified of birds, and remembered Bugis village and the gay scene. The vividness with which she recounted her memories was crisp and her passion warm, as if it happened yesterday.
				</p>

				<ContentBox type="quote">
					<p class="font-light">
						I felt transported back into the Singapore of the 1960s as I walked along the dark streets of Hamamatsu town in Japan at 8pm. There is something magical about how memories can bridge time and distance.
					</p>
				</ContentBox>
			</section>

			<section>
				<!-- Section: The power of memory -->
				<h3 class="text-xl font-light mb-4 text-km-primary">Feelings of memories</h3>
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					There is something about listening to older people recount their stories, it is almost always bursting with feelings... feelings of their memories. You know how time somehow cleanses our experiences of the baggage of emotions and leaves the memory somehow simpler and purer, perhaps even more true to what was present?
				</p>
				
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					That was the sense of simplicity and pureness I felt when I listened to Yoneko-san recount her stories.
				</p>
			</section>

			<section>
				<!-- Section: The cafe invitation -->
				<h3 class="text-xl font-light mb-4 text-km-primary">Free coffee and open hearts</h3>
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					She invited us into her cafe, which she does as a hobby, for free coffee. We sat and listened with the wonder and curiosity that young children have when listening to their heroine's exploits. As she spoke, she interspersed her recounting with "nan te iu no", meaning "what's that called..." and a lot of animated hand movements.
				</p>
				
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					Watching her chat while making coffee for us brought to mind a passionate, energetic woman in her younger years, keen to explore the world, with so much curiosity, openness and love.
				</p>
			</section>

			<section>
				<!-- Section: Wondering about lives -->
				<h3 class="text-xl font-light mb-4 text-km-primary">Questions unasked</h3>
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					I wondered what her life has been like, and I wondered about the thoughts and feelings that go through her mind today. What beautiful and ugly, happy but sad, loving but painful experiences did she have to make her who she is today?
				</p>
				
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					Did she fall in love and have her heart broken? Does she still think of her lover? What does she feel about her younger years travelling? Does she wish to travel now? So many questions to ask and so much desire to paint a clearer picture of this beautiful and happy 73-year-old lady who lives in a random Japanese town.
				</p>

				<ContentBox type="highlight">
					<p class="font-light">
						I would have loved to spend a few more days getting to know Yoneko-san, but we had to be on our way and she had an English class to attend.
					</p>
				</ContentBox>
			</section>

			<section>
				<!-- Section: Beautiful goodbye -->
				<h3 class="text-xl font-light mb-4 text-km-primary">A crossing of paths</h3>
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					Yet for a moment, our paths crossed and a wonderful exchange happened that touched our hearts. A truly random meeting of souls at a cross junction.
				</p>
				
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					We said our goodbyes with a promise to contact us if she ever comes to Singapore. Thank you for a beautiful moment, Yoneko-san.
				</p>

				<ContentBox type="quote">
					<p class="font-light italic">
						"Sometimes the most meaningful encounters happen when we least expect them. A 7-Eleven stop becomes a window into someone's soul."
					</p>
				</ContentBox>
			</section>
		</div>

  <!-- Day navigation -->
  <DayNavigation 
    currentDay={19}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017/day-18-dental-floss-makes-good-repair-tape", label: "Day 18" }}
    nextDay={{ url: "/trips/japan-2017/day-20-our-first-serious-casualty", label: "Day 20" }}
  />

	</div>
</div>
