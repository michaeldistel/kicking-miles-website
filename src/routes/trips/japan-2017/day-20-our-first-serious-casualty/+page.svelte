<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import WeatherBox from '$lib/components/WeatherBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';

	const stats = [
		{ value: '948km', label: 'Distance' },
		{ value: '1,800km', label: 'Journey Total' },
		{ value: '12 hours', label: 'Estimated Time' },
		{ value: '20°C', label: 'Temperature' }
	];

	const routeMapImages = [
		{
			src: '/images/japan-2017/day-20/day20-route-map.webp',
			alt: 'Route map from Hamamatsu to Shizuoka - Day 20 journey'
		}
	];

	const hamamatsuImages = [
		{
			src: '/images/japan-2017/day-20/day20-photo-01.webp',
			alt: 'Farewell from hotel staff in Hamamatsu'
		},
		{
			src: '/images/japan-2017/day-20/day20-photo-02.webp',
			alt: 'Making our way through friendly Hamamatsu town'
		},
		{
			src: '/images/japan-2017/day-20/day20-photo-03.webp',
			alt: 'Wonderful encounters with locals on our way out'
		}
	];

	const journeyImages = [
		{
			src: '/images/japan-2017/day-20/day20-photo-04.webp',
			alt: 'School safety volunteer waving and wishing us safe travels'
		},
		{
			src: '/images/japan-2017/day-20/day20-photo-05.webp',
			alt: 'Farm roads and scenic countryside before the accident'
		},
		{
			src: '/images/japan-2017/day-20/day20-photo-06.webp',
			alt: 'Taking corners like gregarious racers'
		}
	];

	const accidentImages = [
		{
			src: '/images/japan-2017/day-20/day20-photo-07.webp',
			alt: 'Aftermath of the serious accident - first aid administration'
		},
		{
			src: '/images/japan-2017/day-20/day20-photo-08.webp',
			alt: 'Tresha recovering after the face plant crash'
		},
		{
			src: '/images/japan-2017/day-20/day20-photo-09.webp',
			alt: 'Team gathering after the emergency'
		}
	];

	const recoveryImages = [
		{
			src: '/images/japan-2017/day-20/day20-photo-10.webp',
			alt: 'Decision made to take the train to Shizuoka for rest'
		},
		{
			src: '/images/japan-2017/day-20/day20-photo-11.webp',
			alt: 'Reflecting on adventure, risk, and the courage to live boldly'
		}
	];

	const weather = {
		title: 'Weather Report',
		description: '20 degrees Celsius with good conditions. Starting to feel exhausted after 3 consecutive days of scooting.'
	};
</script>

<svelte:head>
	<title>Day 20 - Our first serious casualty! | Japan 2017 | Kicking Miles</title>
	<meta name="description" content="Day 20 of our Japan kickboard adventure: Hamamatsu to Shizuoka with our first serious accident and reflections on adventure, risk, and courage." />
</svelte:head>

<!-- Day 20: Hamamatsu to Shizuoka -->
<div class="min-h-screen py-16 px-4">
	<div class="container mx-auto max-w-4xl">
		
		<TripHeader 
			backUrl="/trips/japan-2017"
			backText="Japan 2017 Daily Journal"
			dayNumber="DAY 20"
			date="14 April 2017"
			title="Hamamatsu to Shizuoka"
			progress="948 kilometres of 1,800"
			subtitle="Our first serious casualty!"
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
				<ImageGallery title="Farewell from Hamamatsu" photoImages={hamamatsuImages} />
			</div>

			<section>
				<!-- Section: Hamamatsu hospitality -->
				<h3 class="text-xl font-light mb-4 text-km-primary">Something about Hamamatsu</h3>
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					After a fond farewell from the staff at our hotel, we made our way through Hamamatsu town. There is something about Hamamatsu... everyone was really spontaneous and friendly here for some reason! Aside from Yoneko-san we met yesterday, we came across three more wonderful groups of people on the way out.
				</p>
				
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					During travels like these, we sometimes get horrible experiences but more often than not, the wonderful experiences outweigh the bad and Hamamatsu was a good example. We left in happy spirits!
				</p>

				<ContentBox type="quote">
					<p class="font-light">
						The balance of travel: sometimes horrible experiences, but more often than not, the wonderful ones outweigh the bad.
					</p>
				</ContentBox>
			</section>

			<section>
				<!-- Section: The kind safety volunteer -->
				<h3 class="text-xl font-light mb-4 text-km-primary">Kiotsukete - be careful</h3>
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					About three-quarters of the way along, we went past a jolly old man ushering children along the road, one of those school safety volunteers. He smiled and waved happily to each of us as we passed him and wished us safe travels or "kiotsukete" in a very earnest voice.
				</p>
				
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					At the next traffic light stop, we all spoke about how friendly but also how cautious he was and we attributed it to his age. Who knew that soon after this, we would have our very first serious casualty!
				</p>

				<div class="mt-6">
					<ImageGallery title="Journey Moments" photoImages={journeyImages} />
				</div>
			</section>

			<section>
				<!-- Section: The accident -->
				<h3 class="text-xl font-light mb-4 text-km-primary">A loud thud and crash</h3>
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					Along one of the farm roads going downslope 90 degrees around the bend, we went one by one like gregarious racers, turning lower to the ground to take the corner sharply. First, second, third person passes and suddenly we heard a loud thud and crash.
				</p>
				
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					We immediately jammed our brakes, flipped our heads around and saw Tresha face plant into the asphalt road, her scooter flung away from her. We threw our scooters off and sprinted to her rescue, no idea why we did not scoot instead, and found her lying dazed on the ground.
				</p>

				<ContentBox type="highlight">
					<p class="font-light">
						She managed to sit herself up in the time we got to her. All of us on this trip have had the luck to be privy to such an experience. I could see the look on her face, trying to process what had happened.
					</p>
				</ContentBox>

				<div class="mt-6">
					<ImageGallery title="Emergency Response" photoImages={accidentImages} />
				</div>
			</section>

			<section>
				<!-- Section: Assessment and recovery -->
				<h3 class="text-xl font-light mb-4 text-km-primary">First aid and decisions</h3>
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					After some inspection, it turned out that she hit herself on the chin, rolled off to her right and landed face down. There were wounds in four spots, the deepest one being on her right hip. Her palms took the second brunt and she had deep asphalt chafing on the other spots.
				</p>
				
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					After some first aid administration and intense squirming, we were eventually good to go again. We all made an executive decision to take the train to Shizuoka so she could rest her wounds. Tresha was saying, "if only I wore my tights higher, I would have less of a wound" and she was right.
				</p>

				<div class="mt-6">
					<ImageGallery title="Recovery and Reflection" photoImages={recoveryImages} />
				</div>
			</section>

			<section>
				<!-- Section: Philosophy of adventure -->
				<h3 class="text-xl font-light mb-4 text-km-primary">What adventure really means</h3>
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					But at the same time that is what an adventure is, a risk taken for a gain in spirit. The words "if only", or "we should have", do not exist on an adventure because there is no space for them.
				</p>
				
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					Adventures breathe and flow along, happening in split second blocks, the concept of safety flashing by, the risk taken, a deep reminder of what we are sacrificing and the beautiful moments passing by, a wonderful reward for our sacrifice.
				</p>

				<ContentBox type="quote">
					<p class="font-light italic">
						"And the only way to really know if we are truly living life, is when you shed the cloak of safety to ride the wave of the bold, to go where we've never been before."
					</p>
				</ContentBox>
			</section>

			<section>
				<!-- Section: Final reflection -->
				<h3 class="text-xl font-light mb-4 text-km-primary">The courage to live</h3>
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					And that place is different for each and every one of us. In the end, every day is simply another opportunity and a reminder to be brave and courageous. No more, no less.
				</p>

				<ContentBox type="highlight">
					<p class="font-light">
						Every day: another opportunity and reminder to be brave and courageous. The essence of what it means to truly live.
					</p>
				</ContentBox>
			</section>
		</div>

  <!-- Day navigation -->
  <DayNavigation 
    currentDay={20}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017/day-19-7-eleven-is-not-just-for-refuelling", label: "Day 19" }}
  />

	</div>
</div>
