<script lang="ts">
  import { countUp, parallax, reveal } from '$lib/utils/motion';

  const stats = [
    { value: 2552, suffix: 'km', label: 'Total distance kicked', delay: 0 },
    { value: 3, suffix: '', label: 'Major expeditions', delay: 80 },
    { value: 55, suffix: '', label: 'Days on the road', delay: 160 },
    { value: 45, suffix: '+', label: 'Cities passed through', delay: 240 }
  ];

  const trips = [
    {
      year: 'October 2025',
      status: 'Complete',
      route: 'Busan to Seoul / South Korea',
      title: 'Busan to Seoul',
      blurb:
        "Alex and Michael's epic 560km journey following South Korea's purpose-built bike path network - the Nakdonggang, Saejae, Namhangang and Hangang paths from coast to capital over eleven incredible days.",
      km: '560 km',
      days: '11',
      cities: '8+',
      img: '/images/korea-2025/overview/alex-michael-korea-2025-team-new-1x1.webp',
      href: '/trips/korea-2025',
      colsClass: 'md:grid-cols-[1.1fr_1fr]',
      imgOrderClass: 'md:order-1',
      textOrderClass: 'md:order-2'
    },
    {
      year: 'October 2023',
      status: 'Complete',
      route: 'Tokyo to Nasu / Japan',
      title: 'Tokyo to Nasu',
      blurb:
        "A contemplative return to Japan six years on. Three days of mindful travel with Alex from the urban energy of Tokyo to the autumn serenity of Nasu Tochigi - intimate, focused, perfectly timed for the season's most spectacular display.",
      km: '150 km',
      days: '3',
      cities: '2',
      img: '/images/kick-scooters-explanation.webp',
      href: '/trips/japan-2023',
      colsClass: 'md:grid-cols-[1fr_1.1fr]',
      imgOrderClass: 'md:order-2',
      textOrderClass: 'md:order-1'
    },
    {
      year: 'March - May 2017',
      status: 'Complete',
      route: 'Fukuoka to Hakodate / Japan',
      title: 'The length of Japan',
      blurb:
        'The original adventure that started it all. Four friends, four kick scooters, and 1,842km from the southern tip of Kyushu to the northern island of Hokkaido. Rain, hail, convenience-store meals, and the kindness of strangers - proof that long-distance kick scooter travel was possible.',
      km: '1,842 km',
      days: '41',
      cities: '35',
      img: '/images/homepage-hero-team-kick-scooters-16x9.webp',
      href: '/trips/japan-2017',
      colsClass: 'md:grid-cols-[1.1fr_1fr]',
      imgOrderClass: 'md:order-1',
      textOrderClass: 'md:order-2'
    }
  ];

  const marqueeItems = [
    'JAPAN 2017',
    '1,842 KM',
    'JAPAN 2023',
    'KOREA 2025',
    '2,552 KM TOTAL'
  ];
</script>

<svelte:head>
	<title>Kick Scooter Adventures | Kicking Miles</title>
	<meta name="description" content="Join kick scooter adventures across Japan and beyond. Travel stories, route maps, and daily journals from unique transportation experiences." />
	<meta name="keywords" content="kick scooter, travel, Japan, adventure, route maps, travel journal, transportation, scooter travel" />
	<link rel="canonical" href="https://kickingmiles.com" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://kickingmiles.com" />
	<meta property="og:title" content="Kick Scooter Adventures | Kicking Miles" />
	<meta property="og:description" content="Join kick scooter adventures across Japan and beyond. Travel stories, route maps, and daily journals from unique transportation experiences." />
	<meta property="og:image" content="https://kickingmiles.com/images/homepage-hero-team-kick-scooters-16x9.webp" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://kickingmiles.com" />
	<meta property="twitter:title" content="Kick Scooter Adventures | Kicking Miles" />
	<meta property="twitter:description" content="Join kick scooter adventures across Japan and beyond. Travel stories, route maps, and daily journals from unique transportation experiences." />
	<meta property="twitter:image" content="https://kickingmiles.com/images/homepage-hero-team-kick-scooters-16x9.webp" />

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Kicking Miles",
  "alternateName": "Kick Scooter Adventures",
  "url": "https://kickingmiles.com",
  "description": "A personal travel website documenting kick scooter adventures across different countries, featuring daily journals, route maps, and travel insights.",
  "author": {
    "@type": "Person",
    "name": "Michael Distel",
    "url": "https://kickingmiles.com"
  },
  "@graph": [
    {
      "@type": "TravelBlog",
      "name": "Kicking Miles",
      "description": "Personal travel blog featuring kick scooter adventures across Japan and Asia with detailed route maps and daily travel journals.",
      "url": "https://kickingmiles.com",
      "author": {
        "@type": "Person",
        "name": "Michael Distel"
      }
    }
  ]
}
</script>`}
</svelte:head>

<div class="overflow-x-hidden">
  <!-- Section: Hero -->
  <section
    id="top"
    class="relative min-h-screen flex flex-col justify-end px-[clamp(20px,5vw,64px)] pb-[clamp(30px,4vw,56px)] overflow-hidden"
  >
    <div class="absolute inset-0 z-0">
      <img
        src="/images/homepage-hero-team-kick-scooters-16x9.webp"
        alt="Team of four kick scooter adventurers posing with their loaded kick scooters at a traditional Japanese gate structure, ready for their cross-country journey"
        class="w-full h-[120%] object-cover"
        use:parallax
      />
      <div
        class="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,17,32,0.55)_0%,rgba(9,17,32,0.15)_35%,rgba(9,17,32,0.35)_70%,rgba(9,17,32,0.88)_100%)]"
      ></div>
    </div>

    <div class="relative z-[2] text-white max-w-[1200px]">
      <div
        use:reveal
        class="inline-flex items-center gap-2.5 px-4 py-2 border border-white/35 rounded-full font-display text-[13px] font-medium tracking-[0.04em] uppercase backdrop-blur-[6px] mb-[26px]"
      >
        <span class="w-[7px] h-[7px] rounded-full bg-km-mint"></span> Human-powered travel since 2017
      </div>

      <h1
        use:reveal
        class="font-display font-bold text-[clamp(52px,11vw,168px)] leading-[0.88] tracking-[-0.04em] text-balance"
      >
        The world,<br />one kick<br />at a time.
      </h1>

      <p
        use:reveal={120}
        class="mt-7 max-w-[560px] text-[clamp(17px,1.6vw,21px)] leading-[1.5] text-white/[0.86]"
      >
        Four friends. A handful of kick scooters. Thousands of kilometres across Japan and Korea -
        moving slowly, noticing everything, documenting what actually happens.
      </p>

      <div use:reveal={220} class="mt-9 flex flex-wrap gap-3.5">
        <a
          href="#trips"
          class="inline-flex items-center gap-2.5 bg-km-blue hover:bg-km-blue-dark text-white px-7 py-[15px] rounded-full font-display font-semibold text-base transition-colors"
        >
          Explore the adventures &rarr;
        </a>
        <a
          href="#scooter"
          class="inline-flex items-center gap-2.5 bg-white/[0.14] hover:bg-white/25 text-white px-7 py-[15px] rounded-full font-display font-semibold text-base border border-white/30 transition-colors"
        >
          Wait, a kick scooter?
        </a>
      </div>
    </div>

    <div
      class="absolute bottom-[30px] right-[clamp(20px,5vw,64px)] z-[2] animate-floaty text-white/70 font-display text-xs tracking-[0.15em] uppercase [writing-mode:vertical-rl]"
      aria-hidden="true"
    >
      Scroll
    </div>
  </section>

  <!-- Section: Marquee -->
  <div class="bg-km-ink text-white overflow-hidden py-5 border-y border-white/[0.08]">
    <div
      class="flex w-max animate-marquee font-display font-semibold text-[clamp(22px,3vw,40px)] tracking-[-0.02em]"
    >
      {#each [0, 1] as copy}
        <span class="flex items-center gap-[34px] pr-[34px]" aria-hidden={copy === 1}>
          {#each marqueeItems as item}
            {item} <span class="text-km-mint">/</span>
          {/each}
        </span>
      {/each}
    </div>
  </div>

  <!-- Section: By the numbers -->
  <section class="px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,120px)] max-w-[1400px] mx-auto">
    <div use:reveal class="km-section-title">By the numbers</div>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[clamp(40px,6vw,96px)]">
      {#each stats as stat}
        <div use:reveal={stat.delay} class="border-t-2 border-km-ink pt-[18px]">
          <div
            class="font-display font-bold text-[clamp(40px,4.4vw,68px)] leading-[0.95] tracking-[-0.03em] whitespace-nowrap"
          >
            <span use:countUp={stat.value}>{stat.value.toLocaleString('en-GB')}</span><span
              class="text-[0.55em] align-baseline ml-0.5 text-km-muted">{stat.suffix}</span
            >
          </div>
          <div class="mt-2.5 text-[15px] font-medium text-km-muted">{stat.label}</div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Section: Adventures -->
  <section
    id="trips"
    class="px-[clamp(20px,5vw,64px)] pt-[clamp(30px,4vw,60px)] pb-[clamp(56px,8vw,120px)] max-w-[1400px] mx-auto"
  >
    <div class="flex items-end justify-between flex-wrap gap-5 mb-[clamp(40px,6vw,72px)]">
      <div>
        <div use:reveal class="km-section-title">The archive</div>
        <h2
          use:reveal
          class="font-display font-bold text-[clamp(38px,6vw,76px)] leading-[0.95] tracking-[-0.03em]"
        >
          Every journey,<br />start to finish.
        </h2>
      </div>
      <p use:reveal class="max-w-[340px] text-base leading-[1.55] text-km-muted">
        Three expeditions, each with its own character - from the raw 41-day epic that started it all
        to a contemplative autumn return.
      </p>
    </div>

    <div class="flex flex-col gap-[clamp(28px,4vw,48px)]">
      {#each trips as trip}
        <a
          href={trip.href}
          use:reveal
          class="group grid grid-cols-1 {trip.colsClass} bg-white rounded-3xl overflow-hidden text-km-ink shadow-[0_1px_0_rgba(15,27,45,0.06)] transition-[transform,box-shadow] duration-500 ease-km hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(15,27,45,0.28)]"
        >
          <div class="relative min-h-[clamp(260px,32vw,440px)] overflow-hidden {trip.imgOrderClass}">
            <img
              src={trip.img}
              alt={trip.title}
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-km group-hover:scale-[1.06]"
            />
            <div class="absolute top-5 left-5 flex gap-2">
              <span
                class="bg-km-ink/[0.82] text-white backdrop-blur-[4px] px-3.5 py-[7px] rounded-full font-display font-semibold text-[13px]"
              >
                {trip.year}
              </span>
              <span
                class="bg-km-mint text-km-ink px-3.5 py-[7px] rounded-full font-display font-semibold text-[13px]"
              >
                {trip.status}
              </span>
            </div>
          </div>

          <div class="p-[clamp(28px,3.5vw,52px)] flex flex-col justify-center {trip.textOrderClass}">
            <div class="font-display text-[13px] font-semibold tracking-[0.08em] uppercase text-km-blue mb-3.5">
              {trip.route}
            </div>
            <h3
              class="font-display font-bold text-[clamp(30px,4vw,52px)] leading-none tracking-[-0.03em]"
            >
              {trip.title}
            </h3>
            <p class="mt-[18px] text-base leading-[1.6] text-km-muted max-w-[520px]">
              {trip.blurb}
            </p>

            <div class="mt-7 flex flex-wrap gap-[clamp(20px,3vw,44px)]">
              {#each [{ value: trip.km, label: 'distance' }, { value: trip.days, label: 'days' }, { value: trip.cities, label: 'cities' }] as item}
                <div>
                  <div
                    class="font-display font-bold text-[clamp(24px,2.6vw,34px)] tracking-[-0.02em]"
                  >
                    {item.value}
                  </div>
                  <div class="text-[13px] font-medium text-km-faint">{item.label}</div>
                </div>
              {/each}
            </div>

            <div
              class="mt-[30px] font-display font-semibold text-base text-km-blue inline-flex items-center gap-2"
            >
              Read the full journey
              <span class="transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </section>

  <!-- Section: About -->
  <section
    id="about"
    class="bg-km-ink text-white px-[clamp(20px,5vw,64px)] py-[clamp(64px,9vw,140px)]"
  >
    <div class="max-w-[1000px] mx-auto">
      <div
        use:reveal
        class="font-display text-[13px] font-semibold tracking-[0.16em] uppercase text-km-mint mb-8"
      >
        About these adventures
      </div>
      <p
        use:reveal
        class="font-display font-medium text-[clamp(26px,3.6vw,52px)] leading-[1.22] tracking-[-0.02em] text-pretty"
      >
        A group of friends exploring the world on kick scooters. We document where we've been and
        what we learned along the way. It started in 2017 with Japan - four friends and 1,842
        kilometres from Fukuoka to Hakodate.
      </p>
      <p use:reveal={120} class="mt-8 max-w-[640px] text-lg leading-[1.65] text-white/70">
        Each journey since follows the same approach:
        <span class="text-white font-semibold">
          move slowly, notice everything, document what actually happens.
        </span>
      </p>
    </div>
  </section>

  <!-- Section: What's a kick scooter -->
  <section
    id="scooter"
    class="px-[clamp(20px,5vw,64px)] py-[clamp(56px,8vw,130px)] max-w-[1400px] mx-auto"
  >
    <div
      class="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-[clamp(32px,5vw,72px)] items-center"
    >
      <div use:reveal class="relative rounded-3xl overflow-hidden">
        <img
          src="/images/kick-scooters-explanation.webp"
          alt="Four kick scooters with travel gear including panniers, dry bags, and camping equipment, demonstrating how kick scooters are used for multi-day travel adventures"
          class="w-full block"
        />
      </div>
      <div>
        <div use:reveal class="km-section-title">The vehicle</div>
        <h2
          use:reveal
          class="font-display font-bold text-[clamp(34px,4.5vw,60px)] leading-[0.98] tracking-[-0.03em]"
        >
          What's a kick scooter?
        </h2>
        <p use:reveal={100} class="mt-[22px] text-[17px] leading-[1.65] text-km-body max-w-[520px]">
          A human-powered vehicle with a handlebar, deck, and wheels. You propel it by pushing off
          the ground with one foot while the other stays on the deck - a cross between a skateboard
          and a bicycle. Perfect for covering long distances at a walking pace while carrying gear
          for multi-day journeys.
        </p>
        <div use:reveal={180} class="mt-8 flex flex-wrap gap-4">
          <div class="bg-white border border-km rounded-2xl px-6 py-[18px]">
            <div class="text-[13px] font-medium text-km-faint mb-1">In Japanese</div>
            <div class="font-display font-semibold text-[22px]">キックボード (kikkubōdo)</div>
          </div>
          <div class="bg-white border border-km rounded-2xl px-6 py-[18px]">
            <div class="text-[13px] font-medium text-km-faint mb-1">In Korean</div>
            <div class="font-display font-semibold text-[22px]">킥보드 (kikbodeu)</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
