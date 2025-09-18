<script lang="ts">
	import TripHeader from '$lib/components/TripHeader.svelte';
	import ContentBox from '$lib/components/ContentBox.svelte';
	import DayNavigation from '$lib/components/DayNavigation.svelte';

	const title = 'Thank you :)';
	const date = '7 June';
	const description = 'A heartfelt video tribute to all the beautiful souls we met on our 41-day Japan kick scooter journey - thank you for making our adventure so meaningful.';
</script>

<svelte:head>
	<title>Thank You :) | Japan 2017 | Kicking Miles</title>
	<meta name="description" content="{description}" />
	<meta property="og:title" content="Thank You :) | Japan 2017 | Kicking Miles" />
	<meta property="og:description" content="{description}" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/thank-you/" />
	<meta property="og:image" content="https://kickingmiles.com/images/japan-2017/mission-complete/mission-complete-photo-01.webp" />
	<meta property="article:published_time" content="2017-06-07" />
	<meta property="article:author" content="Michael Distel" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Thank You :) | Japan 2017 | Kicking Miles" />
	<meta name="twitter:description" content="{description}" />
	<meta name="twitter:image" content="https://kickingmiles.com/images/japan-2017/mission-complete/mission-complete-photo-01.webp" />
	<link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/thank-you/" />
</svelte:head>

<TripHeader 
	backUrl="/trips/japan-2017/"
	backText="Japan 2017 Daily Journal"
	dayNumber="EPILOGUE"
	date="7 June 2017"
	title="Thank You Video"
	progress="Journey Complete"
	subtitle="Thank you :)"
/>

<div class="container mx-auto px-4 py-4 pb-2 max-w-4xl">
	<!-- Section: Content -->
	<div class="space-y-8 mb-8">
		<!-- Section: Video Introduction -->
		<section>
			<p class="km-body-text">
				When we came on this trip, we had a rough idea in our minds how it would be like. One thing that was a really pleasant surprise, was the warmth and friendliness of the people we met along the way. That is why this trip cannot be complete without this video, a little tribute to remember all the beautiful souls that we met.
			</p>
		</section>

		<!-- Section: YouTube Video -->
		<section>
			<div class="relative w-full h-0 pb-[56.25%] bg-km-subtle rounded-lg overflow-hidden">
				<iframe 
					src="https://www.youtube.com/embed/JzzxerzVCpQ" 
					title="Japan 2017 Thank You Video - A Tribute to Beautiful Souls" 
					frameborder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					allowfullscreen
					class="absolute top-0 left-0 w-full h-full"
				></iframe>
			</div>
			<p class="text-sm text-center mt-2" style="color: #7E797C;">
				<a href="https://www.youtube.com/watch?v=JzzxerzVCpQ" target="_blank" rel="noopener noreferrer" class="hover:underline">
					Watch on YouTube →
				</a>
			</p>
		</section>

		<!-- Section: English Message -->
		<section>
			<p class="km-body-text">
				People have told us that the way we choose to live our lives has touched them. But you know what? We feel humbled by this experience. We did not expect to be shown so much genuine love, joy and happiness by everyone. Your courage and openness in reaching out to us has made our experience so much meaningful and rewarding. Your smiles, cheers and hugs have given us strength when we felt like giving up. Because you guys were there, it gave us energy, purpose and motivation to kick one more kick!
			</p>

			<p class="km-body-text">
				Thank you everyone for all the cheers and shouts of ganbatte along the road side, the warmth and genuine excitement of everyone we chatted with, all the lovely gifts of support: drinks, food and green tea, coffee, snacks, Pocky sticks and mochi. We even exchanged our scooters and bicycles with each other.
			</p>
		</section>

		<!-- Section: Heartfelt Conclusion -->
		<ContentBox type="highlight">
			<p>You have touched our lives in more ways than you can imagine, that is why, we will remember this trip not just by the miles that have passed but by the people who have come into our lives. So thank you for being a part of our journey and perhaps one day, we can be a part of yours too!</p>
		</ContentBox>

		<!-- Section: Japanese Translation -->
		<section>
			<hr class="border-km-subtle my-8" />
			<h3 class="text-xl font-light text-km-primary mb-6">日本語 (Japanese)</h3>
			
			<p class="km-body-text leading-relaxed">
				今回の旅に際し期待以上に嬉しかった事は旅の先々で出会った皆さんの暖かい友情でした。この思い出を忘れない為にもこのビデオを作りました。私達が出会った美しい方々へのわずかばかりの贈り物です。
			</p>

			<p class="km-body-text leading-relaxed">
				旅先で出会った皆さんは私達が選んだ生き方に感動した、と言って下さいました。しかし私達こそ皆さんが与えて下さった真の愛情や喜び、幸せに頭の下がる思いです。皆さんの勇気や私達に対する呼びかけにより私達の経験は一層意味深い、そして報いの大きいものになりました。皆さんの笑顔や声援は私達に勇気を下さり、諦めそうになった時には前に進む力をくれました。皆さんがいて下さったからこそ、私達はキックし続けるエネルギーと目的そしてモチベーションを得られたのです。
			</p>

			<p class="km-body-text leading-relaxed">
				皆さん、本当に熱い声援、「頑張って！」の掛け声を有難うございました。お話し出来た方々が私達に示して下さった興味、数々の素敵なプレゼント、エネルギー補助食品、コーヒー、お茶、お菓子や食品、それにスクーターと自転車の交換など本当に有難うございました。
			</p>

			<p class="km-body-text leading-relaxed">
				皆さんの事は皆さんが思っていらっしゃる以上に私達の心に深く刻まれました。私達はこの旅を旅した距離ではなく、出会った方々との思い出として思い出す事でしょう。私達の旅の一部となって下さり本当に有難うございました。いつか私達が皆さんの旅の一部になれますように！
			</p>
		</section>

		<!-- Section: Signature -->
		<section>
			<p class="km-body-text font-medium mt-8">
				- Michelle Yang
			</p>
		</section>

		<!-- Day navigation -->
		<DayNavigation 
			currentDay={42}
			totalDays={41}
			previousDay={{ url: "/trips/japan-2017/mission-complete-we-made-it", label: "Mission Complete!" }}
			nextDay={null}
		/>
	</div>
</div>
