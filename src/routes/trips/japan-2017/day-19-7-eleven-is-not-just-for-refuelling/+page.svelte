<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import StatsBox from '$lib/components/StatsBox.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import PhotoSwipeGallery from '$lib/components/PhotoSwipeGallery.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';
	import { onMount } from 'svelte';
	import { prepareImagesForPhotoSwipe } from '$lib/utils/imageUtils';

	const stats = [
		{ value: '872km', label: 'Distance' },
		{ value: '1800km', label: 'Total' },
		{ value: '10 hours', label: 'Scooting' },
		{ value: 'Genki and happy', label: 'Mood' }
	];

	const images = [
		// Yoneko cafe special encounter
		{ src: '/images/japan-2017/day-19/yoneko-cafe-1x1.webp', alt: 'Special encounter with Yoneko-san at 7-Eleven in Hamamatsu' },
		
		// Photo gallery
		{ src: '/images/japan-2017/day-19/photo-01-4x3.webp', alt: 'Morning departure from Gamagori continuing the coastal journey' },
		{ src: '/images/japan-2017/day-19/photo-02-4x3.webp', alt: 'Stopping at 7-Eleven for dinner before reaching our hotel' },
		{ src: '/images/japan-2017/day-19/photo-03-4x3.webp', alt: 'Scenic route from Gamagori to Hamamatsu' },
		{ src: '/images/japan-2017/day-19/photo-04-4x3.webp', alt: 'Taking a moment to rest and catch our breath' },
		{ src: '/images/japan-2017/day-19/photo-05-16x9.webp', alt: 'Beautiful countryside along our 872km journey' },
		{ src: '/images/japan-2017/day-19/photo-06-4x3.webp', alt: 'Continuing the journey towards Hamamatsu' },
		{ src: '/images/japan-2017/day-19/photo-07-4x3.webp', alt: 'Final stretch of our day\'s adventure' }
	];

	let pswpImages: any[] = [];

	onMount(() => {
		pswpImages = prepareImagesForPhotoSwipe(images);
	});
</script>

<svelte:head>
	<title>Day 19 - 7-eleven is not just for refuelling! | Japan 2017 | Kicking Miles</title>
	<meta name="description" content="Day 19 of our Japan kick scooter adventure: A magical encounter with Yoneko-san at 7-Eleven leads to stories, coffee, and connections across generations." />
</svelte:head>

<!-- Day 19: Gamagori to Hamamatsu -->
<div class="km-container">
  <div class="km-content-wrapper">
		
		<TripHeader 
			backUrl="/trips/japan-2017"
			backText="Japan 2017 Daily Journal"
			dayNumber="DAY 19"
			date="13 April 2017"
			title="7-eleven is not just for refuelling!"
			progress="872 kilometres of 1,800"
			subtitle="Day 19"
		/>

		<div class="mb-8 mt-12">
			<StatsBox {stats} fullWidth />
		</div>

		<!-- Main content -->
		<div class="km-prose-content space-y-8">
			<section>
				<p class="km-body-text">
					Stopping by 7-11 to takeaway our dinner just before we hit our hotel, we spent a couple of minutes resting and catching our breath. We were chatting abt last night's haunted hotel when Gordon told us abt his dream of dementors and sleep paralysis (where reality and dreams combine). At the point when Yoneko san walked out, Tresha and Michelle were laughing at having sleep paralysis filled with yakiniku bbq and cream buns.
				</p>

				<p class="km-body-text">
					Our laughter caught her attention and she beamed us a smile and said that laughter and happiness is the best thing in life. She had a purposeful step and a happy aura about her. In a country where outward expressions of feelings are seldom voiced, this honest sharing of thoughts caught our attention. I immediately lapsed into my broken Japanese. We made some small talk about our scooting adventure and her trip to Singapore 50 years ago when she was in her 20s. Out came her recounting of the happy memories she had of her travels. I could almost see the glow of her smile in the dark. She spoke about visiting the bird park even though she was petrified of birds, lol, and remembered Bugis village and the gay scene.
				</p>

				<p class="km-body-text">
					The vividness with which she recounted her memories was crisp and her passion warm, as if it happened yesterday. I felt transported back into the Singapore of the 60s as I walked along the dark streets of the Hamamatsu town in Japan at 8pm. There's something about listening to older people recount their stories, it is almost always bursting with feelings... feelings of their memories. You know how time somehow cleanses our experiences of the baggage of emotions and leaves the memory somehow simpler and purer, perhaps even more true to what was present? That was the sense of simplicity and pureness I felt when I listened to Yoneko san recount her stories.
				</p>

				<p class="km-body-text">
					She invited us into her cafe, which she does as a hobby, for free coffee. We sat and listened with the wonder and curiosity that young children have when listening to their heroine's exploits. As she spoke, she interspersed her recounting with, "nan te iu no", meaning, "what's that called..." and alot of animated hand movements.
				</p>

				<p class="km-body-text">
					Watching her chat while making coffee for us brought to mind a passionate, energetic woman in her younger years, keen to explore the world, with so much curiosity, openness and love. I wondered what her life has been like, and I wondered about the thoughts and feelings that go through her mind today. What beautiful and ugly, happy but sad, loving but painful experiences did she have to make her who she is today? Did she fall in love and had her heart broken. Does she still think of her lover? What does she feel about her younger years travelling? Does she wish to travel now? So many questions to ask and so much desire to paint a clearer picture of this beautiful and happy 73 year old lady who lives in a random Japanese town.
				</p>

				<p class="km-body-text">
					I would have loved to spend a few more days getting to know Yoneko san, but we had to be on our way and she had an English class to attend. Yet for a moment, our paths crossed and a wonderful exchange happened that touched our hearts. A truly random meeting of souls at a cross junction.
				</p>

				<p class="km-body-text">
					We said our goodbyes with a promise to contact us if she ever comes to Singapore. Thank you for a beautiful moment Yoneko san
				</p>

			<p class="text-sm text-km-subtle italic mt-8">
				Michelle Yang
			</p>
		</section>

		<!-- PhotoSwipe Gallery -->
		<div class="mt-12">
			<PhotoSwipeGallery images={pswpImages} title="Day 19: 7-Eleven Encounters" />
		</div>
	</div>

    <!-- Day navigation -->
    <DayNavigation 
      currentDay={19}
      totalDays={40}
      previousDay={{ url: "/trips/japan-2017/day-18-dental-floss-makes-good-repair-tape", label: "Day 18" }}
      nextDay={{ url: "/trips/japan-2017/day-20-our-first-serious-casualty", label: "Day 20" }}
    />

  </div>
</div>