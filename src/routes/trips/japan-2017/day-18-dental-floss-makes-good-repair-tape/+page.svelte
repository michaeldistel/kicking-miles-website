<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';
	import { onMount } from 'svelte';
	import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

	const stats = [
		{ value: '817km', label: 'Distance' },
		{ value: '1800km', label: 'Total' },
		{ value: '10 hours', label: 'Scooting' },
		{ value: 'Bright and sunny', label: 'Mood' }
	];

	const images = [
		{ src: '/images/japan-2017/day-18/photo-01-3x4.webp', alt: 'Beautiful sunny morning starting Day 18 of our journey' },
		{ src: '/images/japan-2017/day-18/photo-02-1x1.webp', alt: 'Scooters ready for the 817km journey from Nagoya to Gamagori' },
		{ src: '/images/japan-2017/day-18/photo-03-1x1.webp', alt: 'Team preparing for the long journey ahead with clear skies' },
		{ src: '/images/japan-2017/day-18/photo-04-4x3.webp', alt: 'Scenic route through Japanese countryside towards Gamagori' },
		{ src: '/images/japan-2017/day-18/photo-05-16x9.webp', alt: 'Panoramic view of the journey with mountains in distance' },
		{ src: '/images/japan-2017/day-18/photo-06-16x9.webp', alt: 'Wide landscape shot showing the beautiful travel route' },
		{ src: '/images/japan-2017/day-18/photo-07-4x3.webp', alt: 'Dental floss repair technique demonstration on scooter' },
		{ src: '/images/japan-2017/day-18/photo-08-4x3.webp', alt: 'Improvised repair work using dental floss as emergency fix' },
		{ src: '/images/japan-2017/day-18/photo-09-4x3.webp', alt: 'Team working together on scooter maintenance and repairs' },
		{ src: '/images/japan-2017/day-18/photo-10-4x3.webp', alt: 'Successful repair job completed with makeshift tools' },
		{ src: '/images/japan-2017/day-18/photo-11-3x4.webp', alt: 'Team celebration after successful repair and continued journey' },
		{ src: '/images/japan-2017/day-18/photo-12-3x4.webp', alt: 'Final stretch towards Gamagori with repaired scooter' },
		{ src: '/images/japan-2017/day-18/photo-13-3x4.webp', alt: 'Arrival in Gamagori after 10-hour journey and successful repair' }
	];

	let pswpImages: any[] = [];

	onMount(() => {
		pswpImages = prepareImagesForPhotoSwipe(images);
	});
</script>

<svelte:head>
	<title>Day 18 - Dental floss makes good repair tape | Japan 2017 | Kicking Miles</title>
	<meta name="description" content="Day 18 of our Japan kick scooter adventure: Nagoya to Gamagori with creative roadside repairs using dental floss as emergency plumbing tape." />
</svelte:head>

<!-- Day 18: Nagoya to Gamagori -->
<div class="km-container">
  <div class="km-content-wrapper">
		
		<TripHeader 
			backUrl="/trips/japan-2017"
			backText="Japan 2017 Daily Journal"
			dayNumber="DAY 18"
			date="12 April 2017"
			title="Dental floss makes good repair tape"
			progress="817 kilometres of 1,800"
			subtitle="Day 18"
		/>

    <div class="mb-8 mt-12">
      <StatsBox {stats} columns={4} fullWidth={true} />
    </div>

		<!-- Main content -->
		<div class="km-prose-content space-y-8">
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

			<p class="text-sm text-km-subtle italic mt-8">
				Michelle Yang
			</p>
		</section>

		<!-- Photo Gallery -->
		<div>
			<PhotoSwipeGallery images={pswpImages} title="Day 18 - Journey and Repairs" galleryId="day18-all" />
		</div>
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