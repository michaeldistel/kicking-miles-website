<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';
	import { onMount } from 'svelte';
	import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

	const stats = [
		{ value: '1347km', label: 'Distance' },
		{ value: '1800km', label: 'Journey Total' },
		{ value: 'Rest', label: 'Activity' },
		{ value: 'Sanctuary', label: 'Mode' }
	];

	const images = [
		{ src: '/images/japan-2017/day-28/route-map-01-1x1.webp', alt: 'Mt Adatara - Forest Park Adatara meditation sanctuary location' },
		{ src: '/images/japan-2017/day-28/photo-01-4x3.webp', alt: 'Forest Park Adatara luxury glamping cabin nestled in the forest' },
		{ src: '/images/japan-2017/day-28/photo-02-4x3.webp', alt: 'Beautiful manicured wild landscaping with stone demarcations' },
		{ src: '/images/japan-2017/day-28/photo-03-4x3.webp', alt: 'Peaceful forest sanctuary environment perfect for meditation' },
		{ src: '/images/japan-2017/day-28/photo-04-4x3.webp', alt: 'Natural hot spring and relaxation facilities at the sanctuary' },
		{ src: '/images/japan-2017/day-28/photo-05-4x3.webp', alt: 'Evening reflections in the tranquil forest environment' }
	];

	let pswpImages: any[] = [];

	onMount(() => {
		pswpImages = prepareImagesForPhotoSwipe(images);
	});
</script>

<svelte:head>
	<title>Day 28: Forest Park Adatara is my meditation sanctuary - Japan 2017 - Kicking Miles</title>
	<meta name="description" content="Day 28 at Mt Adatara. Resting at Forest Park Adatara luxury glamping sanctuary - 1,347km of 1,800km. A special place for recuperation, connection, and renewal." />
	<meta name="keywords" content="Japan scooter journey, Forest Park Adatara, Mt Adatara, glamping, onsen, Fukushima, meditation sanctuary, rest day" />
	
	<meta property="og:title" content="Day 28: Forest Park Adatara is my meditation sanctuary - Japan 2017" />
	<meta property="og:description" content="A special rest day at Forest Park Adatara luxury glamping sanctuary. Reconnecting with a meaningful place and dear friends." />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/day-28-forest-park-adatara-is-my-meditation-sanctuary" />
	
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Day 28: Forest Park Adatara is my meditation sanctuary" />
	<meta name="twitter:description" content="Spending the day resting at a cabin sponsored by the wonderful people at Forest Park Adatara - a place of deep meaning and connection." />
	
	<link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/day-28-forest-park-adatara-is-my-meditation-sanctuary" />
</svelte:head>

<div class="km-container">
  <div class="km-content-wrapper">
		
		<!-- Header -->
		<TripHeader 
			backUrl="/trips/japan-2017"
			backText="Japan 2017 Daily Journal"
			dayNumber="DAY 28"
			date="24 April 2017"
			title="Forest Park Adatara is my meditation sanctuary"
			progress="1347km / 1800km"
			subtitle="Mt Adatara"
		/>

	<!-- Stats -->
	<StatsBox {stats} fullWidth />

	<!-- Content sections -->
	<div class="km-prose-content space-y-8">
			
			<!-- Main Content -->
			<section>
				<p class="km-body-text">
					Spending the day resting at a cabin sponsored by the wonderful people at Forest Park Adatara!
				</p>

				<p class="km-body-text">
					Mt Bandai is an active volcano located in Fukushima Prefecture Japan, with a height of 1819m. Behind the mountain lies the city of Fukushima.
				</p>

				<p class="km-body-text">
					Two years ago I accidentally stumbled upon this glamping sanctuary on my solo roadtrip to Japan. I got the guys in my office to randomly pick a campsite to surprise me and I drove to where the GPS directed without questioning what it was going to be like. Having camped in many places across the globe, I was more than ready for whatever conditions would appear, even toilet or not, but I wasn't expecting this.
				</p>

				<p class="km-body-text">
					Two years later, I'm back again at this luxurious glampsite, where the campsites are carefully demarcated with pretty stones, the park thoughtfully manicured in a wild way and the cabin cozily snugged amidst the forest floors. There's even an unexpectedly beautiful onsen with an outdoor bath area.
				</p>

				<p class="km-body-text">
					Yet physical beauty isn't just the only thing it offered. I made some wonderful connections with the people at the park. A certain Teddy bear, a fuzzy eyebrow guy, a big smiley bear among many others and of course a very special person who has come to be my dear friend, Emi.
				</p>

				<p class="km-body-text">
					They say places only have meaning when attached to people and memories and Fukushima is that one special place for me. The place where I rested and recuperated my weary soul. Today it became a place where I rest and recuperate my weary feet and body. Just like that, I am ready to be on my way again.
				</p>

				<p class="km-body-text">
					Thanks to everyone who sponsored our night's stay at this beautiful cabin!!! What an apt analogy... a cabin in the mountains for travellers to rest their tired bodies and be on their way... except I know that I'll always be back!
				</p>

			<p class="km-body-text font-medium">
				Michelle Yang
			</p>
		</section>

		<!-- Photo Gallery -->
		<div>
			<PhotoSwipeGallery 
				images={pswpImages}
				title="Forest Park Adatara Sanctuary" 
				galleryId="day28-sanctuary"
			/>
		</div>
	</div>

		
    <!-- Day navigation -->
		<DayNavigation 
			currentDay={28}
			totalDays={40}
			previousDay={{ url: "/trips/japan-2017/day-27-my-fukushima-family", label: "Day 27" }}
			nextDay={{ url: "/trips/japan-2017/day-29-wonderful-sendoff-and-a-lovely-ride-through-the-mountains", label: "Day 29" }}
		/>

	</div>
</div>