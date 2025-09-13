<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';
	import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

	const day = 39;
	const title = 'Golden week holiday madness';
	const date = '6 May';
	const description = 'Experiencing Japanese Golden Week firsthand and reflecting on cultural attitudes toward holidays, responsibility, and collective behavior.';

	const stats = [
		{ value: 'DAY 39', label: 'Journey Day' },
		{ value: 'Towada (Rest Day)', label: 'Location' },
		{ value: '1759km / 1842km', label: 'Progress' },
		{ value: 'Rain Day', label: 'Status' }
	];

	// Photo gallery images with alt text
	const photoImagesData = [
		{ src: '/images/japan-2017/day-39/day39-photo-01-1x1.webp', alt: 'Golden Week crowds at the onsen hot springs' },
		{ src: '/images/japan-2017/day-39/day39-photo-02-3x4.webp', alt: 'Packed hotel during Golden Week celebrations' },
		{ src: '/images/japan-2017/day-39/day39-photo-03-4x3.webp', alt: 'The contrast between busy Friday and empty Saturday morning' },
		{ src: '/images/japan-2017/day-39/day39-photo-04-4x3.webp', alt: 'Golden Week holiday atmosphere in Towada' },
		{ src: '/images/japan-2017/day-39/day39-photo-05-4x3.webp', alt: 'Cultural observations during the holiday period' },
		{ src: '/images/japan-2017/day-39/day39-photo-06-4x3.webp', alt: 'The madness and beauty of Japanese Golden Week' }
	];
	
	// Prepare images for PhotoSwipe
	const photoImages = prepareImagesForPhotoSwipe(photoImagesData);
</script>

<svelte:head>
	<title>Day 39 - Golden week holiday madness | Japan 2017 | Kicking Miles</title>
	<meta name="description" content="{description}" />
	<meta property="og:title" content="Day 39 - Golden week holiday madness | Japan 2017 | Kicking Miles" />
	<meta property="og:description" content="{description}" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/day-39-golden-week-holiday-madness/" />
	<meta property="og:image" content="https://kickingmiles.com/images/japan-2017/day-39/day39-photo-01.webp" />
	<meta property="article:published_time" content="2017-05-06" />
	<meta property="article:author" content="Michael Distel" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Day 39 - Golden week holiday madness | Japan 2017 | Kicking Miles" />
	<meta name="twitter:description" content="{description}" />
	<meta name="twitter:image" content="https://kickingmiles.com/images/japan-2017/day-39/day39-photo-01.webp" />
	<link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/day-39-golden-week-holiday-madness/" />
</svelte:head>

<TripHeader 
	backUrl="/trips/japan-2017/"
	backText="Japan 2017 Daily Journal"
	dayNumber="DAY 39"
	date="6 May 2017"
	title="Golden week holiday madness"
	progress="1759km / 1842km"
	subtitle="Towada"
/>

<div class="km-container">
  <div class="km-content-wrapper">
	<!-- Section: Trip Stats -->
	<StatsBox stats={[
		...stats,
		{ value: 'Rainy', label: 'Weather' }
	]} fullWidth={true} />

	<!-- Section: Content -->
	<div class="km-prose-content space-y-8">
		<section>
			<p class="km-body-text">
				The final distance will be 1842km because we are bypassing the direct mountain path to scoot along the coast.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				We're currently stuck in Towada because of the rains. The rain front will pass this evening so we will begin our last major day of scooting tomorrow. Cloudy skies forecasted but no rain, phew!
			</p>
		</section>

		<section>
			<p class="km-body-text">
				After that, it will be a 3 hr ferry across to Hakodate, and then a short 10km hike up Mt Hakodate!
			</p>
		</section>

		<section>
			<p class="km-body-text">
				We expect to summit on Monday late afternoon between 4-6pm! Stay tuned! We're nearly there!
			</p>
		</section>

		<section>
			<p class="km-body-text">
				Have you heard of the Japanese golden week holidays? It is a long stretch of public holidays beginning on the end of April and lasts until early May. In a culture where long holidays are not a perogative of employees, Golden week is a holy period for all! Almost everyone takes the whole week off to travel, making it a really challenging and expensive time for tourists. Flights, hotels and car rentals are usually booked months in advance to secure a spot.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				Without really realising it, we're once again scooting during a busy period. If you know us well, you'd know that we never book more than a few days in advance of anything. This time though, we've stretched our limits of risk-taking to the max by booking only when we arrive. In many ways, we've decided to do that because we could never really be sure where we'll be at the end of each day. So we learned to get comfortable rocking up to hotels when we arrive; two tired and haggard foreigners with scooters and war banners asking in broken Japanese, "Erm, I don't have a reservation but I would like a room." If that's already deemed crazy, you can guess what people's response were when we said we haven't planned for Golden week.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				As usual, we did fine and even managed to get a room only after asking one other hotel, yay! The "onsen" or hot springs were packed like sardines with people and we had to take a queue number for the free breakfast buffet. The carpark was also full to the last lot. This was on the Friday night. Come Saturday morning which is the end of the Golden week celebrations, the place emptied out instantly and felt like an abandoned hotel in the middle of a ghost town.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				It got us discussing about the reasons why Japanese don't take long holidays and try to pack most of their holidays into Golden week. According to many friends I've asked, there seems to be a sense of responsibility to the company and to their colleagues. It is uncommon to take leave for anything more than a few days. One week is apparently stretching it. But taking Golden week off is fine.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				We wonder if the reason why it's okay is because everyone is taking it at the same time. Expectations are set, business can plan accordingly for it and no one is letting anyone down. Perhaps the attitude towards the Golden week holiday is a reflection of a deeper cultural sense of responsibility that is prevalent in Japan.
			</p>
		</section>

		<ContentBox type="highlight">
			<p>Then the real question to ask is, where is this strong sense of responsibility stemming from? Perhaps to really understand any culture, we need to remain curious and open to look beyond what's obvious.</p>
		</ContentBox>

		<p class="text-sm text-km-subtle italic mt-8">Michelle Yang</p>

		<PhotoSwipeGallery 
			images={photoImages} 
			galleryId="day39-photos" 
			title="Day 39 Photos" 
		/>
	</div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={39}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-38-the-steep-ascent-into-the-hakoda-mountain-ranges", label: "Day 38" }}
      nextDay={{ url: "/trips/japan-2017/day-40-omg-its-the-last-boss", label: "Day 40" }}
    />

  </div>
</div>
