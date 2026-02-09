<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';
	import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

	const stats = [
		{ value: '1417km', label: 'Distance' },
		{ value: '1800km', label: 'Journey Total' },
		{ value: '6 hours', label: 'Estimated scooting time' },
		{ value: 'Pleasant', label: 'Experience' },
		{ value: '22°C', label: 'Weather' }
	];

	const routeMapImages = [
		{
			src: '/images/japan-2017/day-30/route-map-1x1.webp',
			alt: 'Route map from Fukushima to Odawara - wonderful people everywhere'
		}
	];

	const wonderfulPeopleImages = [
		{
			src: '/images/japan-2017/day-30/photo-01-4x3.webp',
			alt: 'Friendly people buying us energy drinks along the way'
		},
		{
			src: '/images/japan-2017/day-30/photo-02-3x4.webp',
			alt: 'Generous locals offering Vitamin C sweets'
		},
		{
			src: '/images/japan-2017/day-30/photo-03-3x4.webp',
			alt: 'Police quietly holding up traffic to help us navigate'
		},
		{
			src: '/images/japan-2017/day-30/photo-04-1x1.webp',
			alt: 'Waves and smiles from car windows - warmer than sunshine'
		},
		{
			src: '/images/japan-2017/day-30/photo-05-3x4.webp',
			alt: 'Well-maintained smooth roads and friendly encounters'
		},
		{
			src: '/images/japan-2017/day-30/photo-06-4x3.webp',
			alt: 'Understanding drivers sharing small roads with us'
		},
		{
			src: '/images/japan-2017/day-30/photo-07-4x3.webp',
			alt: 'Moments of human kindness that keep us going'
		},
		{
			src: '/images/japan-2017/day-30/photo-08-4x3.webp',
			alt: 'The warmth of connection on the open road'
		},
		{
			src: '/images/japan-2017/day-30/updates-4x3.webp',
			alt: 'Day 30 travel updates and wonderful people experiences'
		}
	];

	const allImages = [...routeMapImages, ...wonderfulPeopleImages];
	const preparedImages = prepareImagesForPhotoSwipe(allImages);
</script>

<svelte:head>
	<title>Day 30: Wonderful people everywhere! - Japan 2017 - Kicking Miles</title>
	<meta name="description" content="Day 30 from Fukushima to Odawara. After 30 days on the road, only nice people met - 1,417km of 1,800km. Energy drinks, smiles, and human kindness warmer than sunshine." />
	<meta name="keywords" content="Japan scooter journey, Fukushima to Odawara, wonderful people, human kindness, police help, energy drinks, smiles, road generosity" />
	
	<meta property="og:title" content="Day 30: Wonderful people everywhere! - Japan 2017" />
	<meta property="og:description" content="30 days on the road and only wonderful people encountered. From police holding traffic to strangers buying energy drinks - human kindness everywhere." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/day-30-wonderful-people-everywhere" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Day 30: Wonderful people everywhere!" />
	<meta name="twitter:description" content="Amazing realization - 30 days of travel and not a single bad soul met. Just endless kindness, understanding, and generosity from strangers." />
	
	<link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/day-30-wonderful-people-everywhere" />
</svelte:head>

<div class="km-container">
  <div class="km-content-wrapper">
		
		<!-- Header -->
		<TripHeader 
			backUrl="/trips/japan-2017"
			backText="Japan 2017 Daily Journal"
			dayNumber="DAY 30"
			date="25 April 2017"
			title="Wonderful people everywhere!"
			progress="1417km / 1800km"
			subtitle="Fukushima to Odawara"
		/>

		<!-- Stats -->
		<StatsBox {stats} fullWidth={true} />

		<!-- Content sections -->
		<div class="km-prose-content space-y-8">
			
			<!-- Main Content -->
			<section>
				<p class="km-body-text">
					And wow, today we just realised that after 30 days of being on the road, we have only met nice people! Not a single bad soul! No one who's been rude, aggressive, nasty... In fact, people have been understanding and even supportive when we might have been an annoyance to road drivers as we sometimes share small roads.
				</p>

				<p class="km-body-text">
					One of the days when heading from Koriyama to Motomiya, we even had the police quietly hold up traffic for 5 minutes while we navigated a small road up the slope. All the while Michelle was oblivious to it and had such an embarrassment when she realised that almost 20 cars were behind her!
				</p>

				<p class="km-body-text">
					Today's trip was one of the most pleasant ones we've had so far! It wasn't just the roads that were well-maintained and smooth, the people were so friendly and generous! Some bought us energy drinks, others Vitamin C sweets and many waved at us from their car!
				</p>

				<p class="km-body-text">
					I say it again, maybe it's just a wave but that flash of smile that comes with it is warmer than even the warmest sunshine. When it gets cold as it sometimes does here, these little warm moments are what keeps us going!
				</p>

			<p class="km-body-text font-medium">
				Michelle Yang
			</p>
		</section>

		<!-- Photo Gallery -->
		<div>
			<PhotoSwipeGallery images={preparedImages} title="Day 30: Wonderful people everywhere" galleryId="day-30-wonderful-people" />
		</div>
	</div>

		
    <!-- Day navigation -->
		<DayNavigation 
			currentDay={30}
			totalDays={40}
			previousDay={{ url: "/trips/japan-2017/day-29-wonderful-sendoff-and-a-lovely-ride-through-the-mountains", label: "Day 29" }}
			nextDay={{ url: "/trips/japan-2017/day-31-theres-something-about-the-countryside", label: "Day 31" }}
		/>

	</div>
</div>