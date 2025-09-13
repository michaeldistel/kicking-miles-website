<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';
	import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

	const day = 37;
	const title = 'The beginning of the last hard leg';
	const date = '3 May';
	const description = 'Facing the mountainous terrain north of Morioka and reflecting on the satisfaction that comes from honest-to-goodness hard work.';

	const stats = [
		{ value: 'DAY 37', label: 'Journey Day' },
		{ value: 'Morioka to Ninohe', label: 'Route' },
		{ value: '1709km / 1800km', label: 'Progress' },
		{ value: '10 hours', label: 'Scooting Time' }
	];

	// Photo gallery images with alt text
	const photoImagesData = [
		{ src: '/images/japan-2017/day-37/day37-photo-01-1x1.webp', alt: 'The challenging mountainous terrain north of Morioka' },
		{ src: '/images/japan-2017/day-37/day37-photo-02-4x3.webp', alt: 'Beautiful mountain scenery along our route' },
		{ src: '/images/japan-2017/day-37/day37-photo-03-4x3.webp', alt: 'Winding mountain roads through the valleys' },
		{ src: '/images/japan-2017/day-37/day37-photo-04-4x3.webp', alt: 'Steep slopes and narrow paths we encountered' },
		{ src: '/images/japan-2017/day-37/day37-photo-05-4x3.webp', alt: 'Valley settlements built on flat land between mountains' },
		{ src: '/images/japan-2017/day-37/day37-photo-06-3x4.webp', alt: 'Route 4 hugging the valley floor between mountains' },
		{ src: '/images/japan-2017/day-37/day37-photo-07-3x4.webp', alt: 'Mountainous landscape stretching ahead' },
		{ src: '/images/japan-2017/day-37/day37-photo-08-3x4.webp', alt: 'The challenging terrain that tested our limits' },
		{ src: '/images/japan-2017/day-37/day37-photo-09-4x3.webp', alt: 'Beautiful but demanding mountain passes' },
		{ src: '/images/japan-2017/day-37/day37-photo-10-4x3.webp', alt: 'Scenic views from the mountain roads' },
		{ src: '/images/japan-2017/day-37/day37-photo-11-16x9.webp', alt: 'The rugged beauty of northern Honshu mountains' },
		{ src: '/images/japan-2017/day-37/day37-photo-12-4x3.webp', alt: 'Narrow roads winding through the mountainous terrain' },
		{ src: '/images/japan-2017/day-37/day37-photo-13-4x3.webp', alt: 'Valley views from our challenging route' },
		{ src: '/images/japan-2017/day-37/day37-photo-14-4x3.webp', alt: 'Mountain landscapes that define northern Japan' },
		{ src: '/images/japan-2017/day-37/day37-photo-15-4x3.webp', alt: 'The demanding but beautiful terrain ahead' },
		{ src: '/images/japan-2017/day-37/day37-photo-16-3x4.webp', alt: 'Steep mountain roads testing our endurance' },
		{ src: '/images/japan-2017/day-37/day37-photo-17-16x9.webp', alt: 'The gateway to torture for scooters - mountainous northern routes' },
		{ src: '/images/japan-2017/day-37/day37-photo-18-4x3.webp', alt: 'Beautiful mountain scenery along our challenging journey' }
	];
	
	// Prepare images for PhotoSwipe
	const photoImages = prepareImagesForPhotoSwipe(photoImagesData);
</script>

<svelte:head>
	<title>Day 37 - The beginning of the last hard leg | Japan 2017 | Kicking Miles</title>
	<meta name="description" content="{description}" />
	<meta property="og:title" content="Day 37 - The beginning of the last hard leg | Japan 2017 | Kicking Miles" />
	<meta property="og:description" content="{description}" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/day-37-the-beginning-of-the-last-hard-leg/" />
	<meta property="og:image" content="https://kickingmiles.com/images/japan-2017/day-37/day37-photo-01.webp" />
	<meta property="article:published_time" content="2017-05-03" />
	<meta property="article:author" content="Michael Distel" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Day 37 - The beginning of the last hard leg | Japan 2017 | Kicking Miles" />
	<meta name="twitter:description" content="{description}" />
	<meta name="twitter:image" content="https://kickingmiles.com/images/japan-2017/day-37/day37-photo-01.webp" />
	<link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/day-37-the-beginning-of-the-last-hard-leg/" />
</svelte:head>

<TripHeader 
	backUrl="/trips/japan-2017/"
	backText="Japan 2017 Daily Journal"
	dayNumber="DAY 37"
	date="3 May 2017"
	title="The beginning of the last hard leg"
	progress="1709km / 1800km"
	subtitle="Morioka to Ninohe"
/>

<div class="km-container">
  <div class="km-content-wrapper">
	<!-- Section: Trip Stats -->
	<StatsBox stats={[
		...stats,
		{ value: '23°C', label: 'Temperature' }
	]} fullWidth={true} />

	<!-- Section: Content -->
	<div class="km-prose-content space-y-8">
		<section>
			<p class="km-body-text">
				We've generally had it easy the whole trip when it came to terrain. North of Morioka is where the fun stuff begins. From here onwards, it's mountainous all the way up to Aomori. If Aomori is known as the gateway to Hokkaido, then north of Morioka is known as the gateway to torture for scooters.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				If you've traversed the land of the rising sun, you would know how hilly it is. But nowhere in Japan is as mountainous as where we are. Settlements are built on all the flat land that exists. The main routes, such as our trusty Route 4, hugs the valley floor between mountains. It runs flat for miles and miles on end until it can run flat no longer. And today was the day we came face to face with our nemesis.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				The roads soon started becoming windy and narrow. We passed through what felt like 3 mountain passes. If you think that sounds tame, wait until you try to scoot up a steep slope for 5km and repeat that up and down 3 times. Some parts were so narrow there were no sidewalks and we literally scooted on the road itself. While we weren't in any immediate danger, it kept us on high alert the whole day, tension and stress rising to the max. This is on top of the physical exertion of scooting up hills. At this point I reflected on my answer to Jills about what keeps me going.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				It's simple. All good things come with hard work. There is no shortcut to success. There is an immense satisfaction that comes with identifying our boundaries. When we know where our borders lie, physically, emotionally and mentally, we become one step closer to accepting ourselves for who we are. All the "what-ifs" get blown away by the wind and the regrets melt away like snow. There is no questioning who you are because you already know your limits. And the only way to get here, is through honest-to-goodness hard work.
			</p>
		</section>

		<ContentBox type="highlight">
			<p>And that's why we kick the miles everyday so that when we wake up tomorrow, we will wake with happiness and peace on our face, knowing that we have given our very best.</p>
		</ContentBox>

		<p class="text-sm text-km-subtle italic mt-8">Michelle Yang</p>

		<PhotoSwipeGallery 
			images={photoImages} 
			galleryId="day37-photos" 
			title="Day 37 Photos" 
		/>
	</div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={37}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-36-going-slow-and-being-present", label: "Day 36" }}
      nextDay={{ url: "/trips/japan-2017/day-38-the-steep-ascent-into-the-hakoda-mountain-ranges", label: "Day 38" }}
    />

  </div>
</div>
