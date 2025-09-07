<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import WeatherBox from '$lib/components/WeatherBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import ImageGallery from '$lib/components/ImageGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';

	const stats = [
		{ value: '817km', label: 'Distance' },
		{ value: '1,800km', label: 'Journey Total' },
		{ value: '10 hours', label: 'Estimated Time' },
		{ value: '16°C', label: 'Temperature' }
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
		description: '16 degrees Celsius with bright sunny conditions. Perfect weather for tackling mechanical challenges!'
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
			title="Nagoya to Gamagori"
			progress="817 kilometres of 1,800"
			subtitle="Dental floss makes good repair tape"
		/>

		<StatsBox {stats} columns={2} />

		<!-- Weather -->
		<div class="mb-12">
			<WeatherBox {weather} />
		</div>

		<!-- Main content -->
		<div class="space-y-8 mb-8">
			<div>
				<ImageGallery title="Morning Departure" routeImages={heroImages} />
			</div>

			<section>
				<!-- Section: Sunny departure -->
				<h3 class="text-xl font-light mb-4 text-km-primary">Sunny spirits and perfect weather</h3>
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					We left Nagoya in sunny spirits today. The weather was a perfect 18 degrees and the sun was glorious! Today was destined to be a day of stopping for repairs, but we could not have asked for better conditions to tackle the challenges ahead.
				</p>
			</section>

			<section>
				<!-- Section: First repair -->
				<h3 class="text-xl font-light mb-4 text-km-primary">Early troubles</h3>
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					Halfway in we had to stop for repairs. Michael's bolts came loose barely after 10 kilometres. 45 minutes later, some handiwork and hyper restlessness, we were off again!
				</p>
				
				<ContentBox type="highlight">
					<p class="font-light">
						Sometimes the journey teaches you patience whether you want to learn it or not. Roadside repairs are becoming part of our daily rhythm.
					</p>
				</ContentBox>

				<div class="mt-6">
					<ImageGallery title="Emergency Repairs" photoImages={repairImages} />
				</div>
			</section>

			<section>
				<!-- Section: Girl's cafe discovery -->
				<h3 class="text-xl font-light mb-4 text-km-primary">An inviting discovery</h3>
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					On the way we saw an inviting cafe and hopped in for lunch. Turns out it was a cafe designed for women, everything thoughtfully set up: music at the right noise level, lights not too glaring. The toilets even had pretty paper and sanitary napkins. These people know their target audience.
				</p>
				
				<ContentBox type="quote">
					<p class="font-light">
						It is remarkable how attention to detail can transform a simple meal into a genuinely welcoming experience. Good design speaks quietly but powerfully.
					</p>
				</ContentBox>
			</section>

			<section>
				<!-- Section: Creative solutions -->
				<h3 class="text-xl font-light mb-4 text-km-primary">Dental floss engineering</h3>
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					We headed off again only to have the bolts come loose for the second time today. We stopped beside another convenience store "combini" to repair our scooters. When you are on the roads and there is no obvious solution visible for miles, you have to become creative and make do with what you have.
				</p>
				
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					Out comes Oral B dental floss in place of plumbing tape. For those who do not know, plumbing tape is wound around the screw thread of pipes so it seals better. Necessity breeds innovation, even when that innovation involves repurposing oral hygiene products.
				</p>

				<ContentBox type="quote">
					<p class="font-light italic">
						"Another 35 minutes later, we were off again... this time we made it all the way to Gamagori!"
					</p>
				</ContentBox>

				<div class="mt-6">
					<ImageGallery title="Creative Solutions" photoImages={journeyImages} />
				</div>
			</section>

			<section>
				<!-- Section: Success -->
				<h3 class="text-xl font-light mb-4 text-km-primary">Resourcefulness pays off</h3>
				<p class="text-lg leading-relaxed mb-6" style="color: var(--km-text)">
					The dental floss solution held beautifully for the remainder of our journey. Sometimes the most unexpected items become exactly what you need. Today reminded us that adventure often requires equal parts determination and creativity.
				</p>

				<div>
					<ImageGallery title="Arrival in Gamagori" photoImages={arrivalImages} />
				</div>
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
