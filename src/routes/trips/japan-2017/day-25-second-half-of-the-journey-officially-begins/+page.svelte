<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';
	import { onMount } from 'svelte';
	import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

	const stats = [
		{ value: '1217km', label: 'Distance' },
		{ value: '1800km', label: 'Total' },
		{ value: '12 hours', label: 'Scooting' },
		{ value: 'Nervous but recovered', label: 'Mood' }
	];

	const images = [
		{ src: '/images/japan-2017/day-25/route-map-01-1x1.webp', alt: 'Route map from Tokyo to Utsunomiya - Day 25 beginning the second half' },
		{ src: '/images/japan-2017/day-25/photo-01-16x9.webp', alt: 'Morning departure from Tokyo starting the second half of our journey' },
		{ src: '/images/japan-2017/day-25/photo-03-3x4.webp', alt: 'Taking breaks during the long 12-hour journey day' },
		{ src: '/images/japan-2017/day-25/photo-04-4x3.webp', alt: 'Beautiful countryside views as we leave the Tokyo metropolitan area' },
		{ src: '/images/japan-2017/day-25/photo-05-3x4.webp', alt: 'Scenic route through Japanese rural landscape toward Utsunomiya' },
		{ src: '/images/japan-2017/day-25/photo-06-4x3.webp', alt: 'Team taking well-deserved rest stops during the challenging day' },
		{ src: '/images/japan-2017/day-25/photo-07-1x1.webp', alt: 'Arriving in Utsunomiya marking the official start of our journey second half' },
		{ src: '/images/japan-2017/day-25/updates-01-16x9.webp', alt: 'Day 25 updates and reflections on beginning the second half of the journey' }
	];

	let pswpImages: any[] = [];

	onMount(() => {
		pswpImages = prepareImagesForPhotoSwipe(images);
	});
</script>

<svelte:head>
	<title>Day 25: Second half of the journey officially begins! - Japan 2017 - Kicking Miles</title>
	<meta name="description" content="Day 25 from Tokyo to Utsunomiya after a 3-day rest. Best pace ever but stiffened muscles. Paths diverge as the second half begins - 1,217km of 1,800km completed." />
	<meta name="keywords" content="Japan scooter journey, Tokyo to Utsunomiya, second half journey, team separation, muscle recovery, travel friendship" />
	
	<meta property="og:title" content="Day 25: Second half of the journey officially begins! - Japan 2017" />
	<meta property="og:description" content="After 3 days rest in Tokyo, the second half begins. Best pace ever but muscles have stiffened. Team paths diverge as the journey continues." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/day-25-second-half-of-the-journey-officially-begins" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Day 25: Second half of the journey officially begins!" />
	<meta name="twitter:description" content="Tokyo to Utsunomiya - the second half begins with mixed emotions as paths diverge." />
	
	<link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/day-25-second-half-of-the-journey-officially-begins" />
</svelte:head>

<div class="km-container">
  <div class="km-content-wrapper">
		
		<!-- Header -->
		<TripHeader 
			backUrl="/trips/japan-2017"
			backText="Japan 2017 Daily Journal"
			dayNumber="DAY 25"
			date="20 April 2017"
			title="Second half of the journey officially begins!"
			progress="1,217 kilometres of 1,800"
			subtitle="Day 25"
		/>

		<div class="mb-8 mt-12">
			<StatsBox {stats} columns={4} fullWidth={true} />
		</div>

		<!-- Content sections -->
		<div class="km-prose-content space-y-8">
			<section>
				<p class="km-body-text">
					We left Tokyo in high spirits this morning, firstly because we felt well-rested and secondly because we are on the second half of the journey, yay!!!
				</p>

				<p class="km-body-text">
					We did the best pace ever today at 7.5km per hr including stopping for meals and rests! Our muscles feel alot less fatigued but our joints and ligaments have stiffen up. I daresay the real pains in our bodies have officially begun. The miles are catching up to us! My fingers even feel fatigued from gripping the handle bar.
				</p>

				<p class="km-body-text">
					Tresha's decided to continue the trip by backpack and catch up to us because of her lacerations and injuries. Gordon has decided to keep her company. It's sad to go our separate ways but everyone's journey is different.
				</p>

				<p class="km-body-text">
					So many people we meet in life, some join us at the beginning, others halfway. Some stay for a while, some leave early... no one stays forever, but we make the best of the times we have and when we look back one day, we'd realise that we became rich in spirit
				</p>

			<p class="text-sm text-km-subtle italic mt-8">
				Michelle Yang
			</p>
		</section>

		<!-- Photo Gallery -->
		<div>
			<PhotoSwipeGallery images={pswpImages} title="Day 25 - Second Half Begins" galleryId="day25-all" />
		</div>
	</div>

		
    <!-- Day navigation -->
    <DayNavigation 
      currentDay={25}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-21-we-have-officially-hit-our-1000km-mark", label: "Day 21" }}
      nextDay={{ url: "/trips/japan-2017/day-26-more-than-1200km-scooted", label: "Day 26" }}
    />

  </div>
</div>