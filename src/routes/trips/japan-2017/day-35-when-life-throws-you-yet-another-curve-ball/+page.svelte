<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';
	import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

	const day = 35;
	const title = 'When life throws you yet another curve ball...';
	const date = '1 May';
	const description = 'Facing unexpected construction obstacles and reflecting on the power of leaning into discomfort to find creative solutions.';

	const stats = [
		{ value: '1592km', label: 'Distance' },
		{ value: '1800km', label: 'Journey Total' },
		{ value: '10 hours', label: 'Scooting Time' },
		{ value: 'Obstacles', label: 'Challenge' },
		{ value: '20°C', label: 'Weather' }
	];

	const photoImages = [
		{ src: '/images/japan-2017/day-35/photo-01-4x5.webp', alt: 'Mr and Mrs Terui from the 7-11 at Kitakami showing their love and support' },
		{ src: '/images/japan-2017/day-35/photo-02-4x3.webp', alt: 'Beautiful scenery along our journey to Hanamaki' },
		{ src: '/images/japan-2017/day-35/photo-03-3x4.webp', alt: 'Countryside landscapes during our scooting adventure' },
		{ src: '/images/japan-2017/day-35/photo-04-3x4.webp', alt: 'Rural road through Japanese countryside' },
		{ src: '/images/japan-2017/day-35/photo-05-3x4.webp', alt: 'Mountain views and natural scenery' },
		{ src: '/images/japan-2017/day-35/photo-06-3x4.webp', alt: 'Peaceful valley landscape along our route' },
		{ src: '/images/japan-2017/day-35/photo-07-3x4.webp', alt: 'Traditional Japanese architecture and countryside' },
		{ src: '/images/japan-2017/day-35/photo-08-3x4.webp', alt: 'The love and support shown by people along our way' }
	];

	const preparedImages = prepareImagesForPhotoSwipe(photoImages);
</script>

<svelte:head>
	<title>Day 35 - When life throws you yet another curve ball... | Japan 2017 | Kicking Miles</title>
	<meta name="description" content="{description}" />
	<meta property="og:title" content="Day 35 - When life throws you yet another curve ball... | Japan 2017 | Kicking Miles" />
	<meta property="og:description" content="{description}" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/day-35-when-life-throws-you-yet-another-curve-ball/" />
	<meta property="og:image" content="https://kickingmiles.com/images/japan-2017/day-35/day35-photo-01.webp" />
	<meta property="article:published_time" content="2017-05-01" />
	<meta property="article:author" content="Michael Distel" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Day 35 - When life throws you yet another curve ball... | Japan 2017 | Kicking Miles" />
	<meta name="twitter:description" content="{description}" />
	<meta name="twitter:image" content="https://kickingmiles.com/images/japan-2017/day-35/day35-photo-01.webp" />
	<link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/day-35-when-life-throws-you-yet-another-curve-ball/" />
</svelte:head>

<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/trips/japan-2017/"
      backText="Japan 2017 Daily Journal"
      dayNumber="DAY 35"
      date="1 May 2017"
      title="When life throws you yet another curve ball..."
      progress="1592km / 1800km"
      subtitle="Ichinoseki to Hanamaki"
    />

    <!-- Section: Trip Stats -->
    <StatsBox {stats} fullWidth={true} />

	<!-- Section: Content -->
	<div class="km-prose-content space-y-8">
		<section>
			<p class="km-body-text">
				Look at the love people have shown us along the way! Mr and Mrs Terui, who both work in the 7-11 at Kitakami, showered us with their "ganbattes" and more! I returned their love with an invitation to take them sight-seeing by scooters when they come by Singapore, haha!
			</p>
		</section>

		<section>
			<p class="km-body-text">
				We left Ichinoseki after a big brekkie at Macdonald's and clocked a mean pace despite the slopes! The lovely hotel receptionist came out to cheer us off but not before trying out our scooters. Her happy smile was enough to warm the cold morning
			</p>
		</section>

		<section>
			<p class="km-body-text">
				Everything was progressing smoothly until somewhere along the way, we hit a dirt path and some construction signs. Both sides of the road were closed off. Dang! We stood under the bridge and stared at what felt like one minute at each other. When you're already so tired and then life throws you yet another curve ball...
			</p>
		</section>

		<section>
			<p class="km-body-text">
				We were faced with only one choice and one choice alone-to back track at least 5km and lose more than an hour. Times like this stress me out to no end because I am extremely nervous about scooting in the dark. Backtracking 5km equals exactly that. So... entrepreneur's rule 101, when faced with an unavoidable problem, what do you do? You think of a creative solution. We whipped out the drone out for a reconnaissance scouting mission!
			</p>
		</section>

		<section>
			<p class="km-body-text">
				I have been asked many questions by family, friends and people along the way. One of them was how I deal with the stress of the unknown aka things going potentially wrong. Just this morning, the receptionist asked where we were heading. We both looked at her cluelessly and said with a grin that we hadn't decided. This response usually leads to astonished looks. It has happened oh-so-very often I have almost memorised the way their eyes pop open and their mouth does an "Ooo" shape
			</p>
		</section>

		<section>
			<p class="km-body-text">
				Yet it doesn't mean that I'm not afraid. In fact many times, I feel that same sense of nervousness and uncertainty rise within me, for example, when we found out we couldn't move forwards at the construction site. Perhaps the only small difference I can think of, is the willingness to lean into discomfort. Through years of conscious practise, I set aside immediate comfort for future gain. In that acknowledgement, I opened up, the opportunity to choose and respond to situations rather than react to them.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				And little by little, through all that practise and training since I was young, it has given me the confidence that when life throws me another curve ball, I can handle it.
			</p>
		</section>

		<section>
			<p class="km-body-text">
				And so that construction obstacle, guess what happened? We found a way out of course, through a little forest dirt track. We had to lug our scooters about 1km but that was better than backtracking 5km.
			</p>
		</section>

		<ContentBox type="highlight">
			<p>Life always finds a way if we let it</p>
		</ContentBox>

		<p class="text-sm text-km-subtle italic mt-8">Michelle Yang</p>

		<!-- Section: Image Gallery -->
		<PhotoSwipeGallery images={preparedImages} title="Day 35: When life throws you curve balls" galleryId="day-35-curve-balls" />
	</div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={35}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-34-allergy-attack", label: "Day 34" }}
      nextDay={{ url: "/trips/japan-2017/day-36-going-slow-and-being-present", label: "Day 36" }}
    />

  </div>
</div>
