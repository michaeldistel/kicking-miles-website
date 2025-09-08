<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import WeatherBox from '$lib/components/WeatherBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';

	const stats = [
		{ value: '817km', label: 'Distance' },
		{ value: '1800km', label: 'Total' },
		{ value: '10 hours', label: 'Scooting' },
		{ value: 'Bright and sunny', label: 'Mood' }
	];

	const heroImages = [
		{
			src: '/images/japan-2017/day-18/day18-photo-01.webp',
			alt: 'Beautiful sunny morning starting Day 18 of our journey'
		},
		{
			src: '/images/japan-2017/day-18/day18-photo-02.webp',
			alt: 'Scooters ready for the 817km journey from Nagoya to Gamagori'
		}
	];

	const repairImages = [
		{
			src: '/images/japan-2017/day-18/day18-photo-03.webp',
			alt: 'Emergency repair stop beside a convenience store'
		},
		{
			src: '/images/japan-2017/day-18/day18-photo-04.webp',
			alt: 'Making do with creative solutions on the road'
		},
		{
			src: '/images/japan-2017/day-18/day18-photo-05.webp',
			alt: 'Dental floss as emergency plumbing tape replacement'
		}
	];

	const journeyImages = [
		{
			src: '/images/japan-2017/day-18/day18-photo-06.webp',
			alt: 'Scenic countryside views during our journey'
		},
		{
			src: '/images/japan-2017/day-18/day18-photo-07.webp',
			alt: 'Roadside moments between repair stops'
		},
		{
			src: '/images/japan-2017/day-18/day18-photo-08.webp',
			alt: 'Beautiful Japanese landscape along the route'
		},
		{
			src: '/images/japan-2017/day-18/day18-photo-09.webp',
			alt: 'Taking breaks to appreciate the sunny weather'
		}
	];

	const arrivalImages = [
		{
			src: '/images/japan-2017/day-18/day18-photo-10.webp',
			alt: 'Successfully arriving in Gamagori after repairs'
		},
		{
			src: '/images/japan-2017/day-18/day18-photo-11.webp',
			alt: 'Celebrating another successful day of adventure'
		},
		{
			src: '/images/japan-2017/day-18/day18-photo-12.webp',
			alt: 'Scooters parked safely after the eventful journey'
		},
		{
			src: '/images/japan-2017/day-18/day18-photo-13.webp',
			alt: 'End of day reflections on our resourcefulness'
		}
	];

	const weather = {
		title: 'Weather Report',
		description: '16 degrees c'
	};
</script>

<svelte:head>
	<title>Day 18 - Dental floss makes good repair tape | Japan 2017 | Kicking Miles</title>
	<meta name="description" content="Day 18 of our Japan kickboard adventure: Nagoya to Gamagori with creative roadside repairs using dental floss as emergency plumbing tape." />
</svelte:head>

<!-- Day 18: Nagoya to Gamagori -->
<div class="min-h-screen py-16 px-4">
	<div class="container mx-auto max-w-4xl">
		
		<TripHeader 
			backUrl="/trips/japan-2017"
			backText="Japan 2017 Daily Journal"
			dayNumber="DAY 18"
			date="12 April 2017"
			title="Dental floss makes good repair tape"
			progress="817 kilometres of 1,800"
			subtitle="Day 18"
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
					<strong>DAY 18 of our scooting adventures!</strong><br><br>

					Nagoya to Gamagori - 817km / 1800km<br><br>

					Estimated scooting time: 10 hours<br><br>

					Weather: 16 degrees c<br><br>

					Mood: Bright and sunny, just like the weather today!
				</p>

				<p class="km-body-text">
					We left Nagoya in sunny spirits today. The weather was a perfect 18 degrees c and the sun was glorious! Today was a day of stopping for repairs.
				</p>

				<p class="km-body-text">
					Halfway in we had to stop for repairs. Michael's bolts came lose barely after 10kms. 45 mins later, some handiwork and hyper restlessness, we were off again!
				</p>

				<p class="km-body-text">
					On the way we an inviting cafe and hopped in for lunch. Turns out it was a cafe for girls, everything thoughtfully setup, music at the right noise level, lights not too glaring etc... the toilets even had pretty paper and sanitary napkins These people know their target audience.
				</p>

				<p class="km-body-text">
					We headed off again only to have the bolts come loose. For the second time today, we stopped beside another convenience store "combini" to repair our scooters. When we are on the roads and there is no obvious solution visible for miles, we have to become creative and make do with what we have. Out comes Oral B dental floss in place of plumbing tape. (For those who don't know, plumbing tape is wound around the screw thread of pipes so it seals better.)
				</p>

				<p class="km-body-text">
					Another 35 minutes later, we were off again... this time we made it all the way to Gamagori!!!
				</p>

				<p class="km-body-text font-medium mt-8">
					Michelle Yang
				</p>
			</section>
		</div>

  <!-- Day navigation -->
  <DayNavigation 
    currentDay={18}
    totalDays={40}
    previousDay={{ url: "/trips/japan-2017/day-17-update", label: "Day 17" }}
    nextDay={{ url: "/trips/japan-2017/day-19-7-eleven-is-not-just-for-refuelling", label: "Day 19" }}
  />

	</div>
</div>
