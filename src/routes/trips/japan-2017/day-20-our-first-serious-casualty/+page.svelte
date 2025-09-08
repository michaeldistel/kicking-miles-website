<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import WeatherBox from '$lib/components/WeatherBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';

	const stats = [
		{ value: '948km', label: 'Distance' },
		{ value: '1800km', label: 'Total' },
		{ value: '12 hours', label: 'Scooting' },
		{ value: 'Exhausted after 3 days', label: 'Mood' }
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
		description: '20 degrees c'
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
			title="Our first serious casualty!"
			progress="948 kilometres of 1,800"
			subtitle="Day 20"
		/>

		<StatsBox {stats} columns={2} />

		<!-- Weather -->
		<div class="mb-12">
			<WeatherBox {weather} />
		</div>

		<!-- Main content -->
		<div class="space-y-8 mb-8">
			<section>
				<p class="km-body-text">
					<strong>DAY 20 of our scooting adventures!</strong><br><br>

					Hammamatsu to Shizuoka - 948km / 1800km<br><br>

					Estimated scooting time: 12 hours<br><br>

					Weather: 20 degrees c<br><br>

					Mood: Starting to feel exhausted again after 3 consecutive days of scooting.
				</p>

				<p class="km-body-text">
					After a fond farewell from the staff at our hotel, we made our way through Hamamatsu town. There's something about Hamamatsu... everyone was really spontaneous and friendly here for some reason! Aside from Yoneko san we met yesterday, we came across 3 more wonderful groups of people on the way out. During travels like these, we sometimes get horrible experiences but more often than not, the wonderful experiences outweigh the bad and Hamamatsu was a good example. We left in happy spirits!
				</p>

				<p class="km-body-text">
					About 3/4 of the way along, we went pass a jolly old man ushering children along the road, one of those school safety volunteers. He smiled and waved happily to each of us as we passed him and wished us safe travels or "kiotsukete" in a very earnest voice. At the next traffic light stop, we all spoke about how friendly but also how cautious he was and we attributed it to his age.
				</p>

				<p class="km-body-text">
					Who knew that soon after this, we'd have our very first serious casualty! Along one of the farm roads going downslope 90 degrees around the bend, we went one by one like gregarious racers, turning lower to the ground to take the corner sharply. 1st, 2nd, 3rd person passes and suddenly we heard a loud thud and crash. We immediately jammed our breaks, flipped out heads around and saw Tresha face plant into the asphalt road, her scooter flung away from her.
				</p>

				<p class="km-body-text">
					We threw our scooters off and sprinted to her rescue, no idea why we didn't scoot instead, and found her lying dazed on the ground. She managed to sit herself up in the time we got to her. All of us on this trip have had the luck to be privy to such an experience. I could see the look on her face, trying to process what had happened.
				</p>

				<p class="km-body-text">
					After some inspection, it turned out that she hit herself on the chin, rolled off to her right and landed face down. There were wounds in four spots, the deepest one being on her right hip. Her palms took the second brunt and she had deep asphalt chafing on the other spots.
				</p>

				<p class="km-body-text">
					After some first aid administration and intense squirming, we were eventually good to go again. We all made an executive decision to take the train to Shizuoka so she could rest her wounds. Tresha was saying, "if only I wore my tights higher, I would have less of a wound" and she was right.
				</p>

				<p class="km-body-text">
					But at the same time that's what an adventure is, a risk taken for a gain in spirit. The words, "if only", or "we should have", doesn't exist on an adventure because there is no space for them. Adventures breathe and flow along, happening in spilt second blocks, the concept of safety flashing by, the risk taken, a deep reminder of what we're sacrificing and the beautiful moments passing by, a wonderful reward for our sacrifice.
				</p>

				<p class="km-body-text">
					And the only way to really know if we are truly living life, is when you shed the cloak of safety to ride the wave of the bold, to go where we've never been to before. And that place is different for each and everyone of us.
				</p>

				<p class="km-body-text">
					In the end, everyday is simply another opportunity and a reminder to be brave and courageous. No more, no less.
				</p>

				<p class="km-body-text font-medium mt-8">
					Michelle Yang
				</p>
			</section>
		</div>

  <!-- Day navigation -->
  <DayNavigation 
    currentDay={20}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017/day-19-7-eleven-is-not-just-for-refuelling", label: "Day 19" }}
    nextDay={{ url: "/trips/japan-2017/day-21-we-have-officially-hit-our-1000km-mark", label: "Day 21" }}
  />

	</div>
</div>
