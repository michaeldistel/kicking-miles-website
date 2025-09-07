<script>
  import TripHeader from '$lib/components/TripHeader.svelte';
  import StatsBox from '$lib/components/StatsBox.svelte';
  import TripCard from '$lib/components/TripCard.svelte';

  const overviewStats = [
    { value: '1,800km', label: 'Total Distance' },
    { value: '40', label: 'Days' },
    { value: '35', label: 'Cities' },
    { value: '4', label: 'Kickboarders' }
  ];

  const days = [
    {
      url: '/trips/japan-2017/day-00-before-the-adventure',
      title: 'Day 00: Before the Adventure',
      date: '25 March 2017',
      meta: ['Preparation', 'Nervous energy', 'Sukiyaki'],
      description: 'The night before departure. Restless with a bundle of nervous energy - half butterflies in the stomach, half a hearty sukiyaki meal from the day before.'
    },
    {
      url: '/trips/japan-2017/day-01-fukuoka-to-kitakyushu',
      title: 'Day 01: Fukuoka to Kitakyushu',
      date: '26 March 2017',
      meta: ['70km', '10 hours', 'Rain & hail'],
      description: 'The adventure begins with nervous energy and a bundle of challenges. Rain, hail, and 8°C temperatures welcome us to Japan as we complete our first 70 kilometres.'
    },
    {
      url: '/trips/japan-2017/day-02-kyushu-to-honshu',
      title: 'Day 02: Kyushu to Honshu',
      date: '27 March 2017',
      meta: ['90km', '3 hours', 'Island crossing'],
      description: 'A significant milestone as we cross from Kyushu to Honshu. Taking it easy today, repacking and readjusting after yesterday\'s exhausting hailstorm adventure.'
    },
    {
      url: '/trips/japan-2017/day-03-shimonoseki-to-hofu',
      title: 'Day 03: Shimonoseki to Hofu',
      date: '28 March 2017',
      meta: ['75km', '12 hours', 'Mountain ascent'],
      description: 'Our first long stretch! From coastal scenery to treacherous mountain passes. Special sendoffs from Starbucks staff and 7-11 friends fuel our spirits with "ganbatte".'
    },
    {
      url: '/trips/japan-2017/day-04-lesson-in-humility',
      title: 'Day 04: Hofu to Hiroshima',
      date: '29 March 2017',
      meta: ['99km', 'Train assist', 'Equipment failure'],
      description: 'A lesson in humility when Michelle\'s brakes fail on a mountain slope. A sobering reminder that arrogance has no place in great challenges - only humility and confidence.'
    },
    {
      url: '/trips/japan-2017/day-05-sakura-chase',
      title: 'Day 05: Hiroshima - The Sakura Chase',
      date: '30 March 2017',
      meta: ['Rest day', 'Sakura blooms', 'Peace Memorial'],
      description: 'A rest day in Hiroshima brings the first glimpse of cherry blossoms. Visits to the Peace Memorial Park and time for equipment maintenance while the sakura chase begins.'
    },
    {
      url: '/trips/japan-2017/day-06-adventurer-vs-nature',
      title: 'Day 06: Adventurer vs Nature',
      date: '31 March 2017',
      meta: ['Hiroshima to Mihara', 'Nature challenges', 'Equipment tests'],
      description: 'The classic battle between adventurer and nature unfolds. Testing both our resolve and our equipment as we push forward from Hiroshima.'
    },
    {
      url: '/trips/japan-2017/day-07-route-2-countryside',
      title: 'Day 07: Route 2 Countryside',
      date: '1 April 2017',
      meta: ['Coastal riding', 'Rural Japan', 'Route 2'],
      description: 'Following Japan\'s famous Route 2 through countryside and coastal areas. Discovering the quieter side of Japan away from the major cities.'
    },
    {
      url: '/trips/japan-2017/day-08-momotaro-peach-boy',
      title: 'Day 08: Momotaro the Peach Boy',
      date: '2 April 2017',
      meta: ['Okayama', 'Local legends', 'Cultural discovery'],
      description: 'Rest day in Okayama exploring the legend of Momotaro the Peach Boy. Immersing ourselves in local folklore and Japanese cultural stories.'
    },
    {
      url: '/trips/japan-2017/day-09-no-right-or-wrong',
      title: 'Day 09: No Right or Wrong',
      date: '3 April 2017',
      meta: ['Philosophical journey', 'Route decisions', 'Team dynamics'],
      description: 'Sometimes there is no right or wrong path - only different experiences. Learning to navigate both physical routes and team decision-making.'
    },
    {
      url: '/trips/japan-2017/day-10-economic-success',
      title: 'Day 10: Economic Success',
      date: '4 April 2017',
      meta: ['Urban observations', 'Japanese society', 'Modern Japan'],
      description: 'Riding through areas showcasing Japan\'s economic success. Observing the contrast between traditional culture and modern prosperity.'
    },
    {
      url: '/trips/japan-2017/day-11-rebellious-heterogeneity',
      title: 'Day 11: Rebellious Heterogeneity',
      date: '5 April 2017',
      meta: ['Cultural diversity', 'Individual expression', 'Social observations'],
      description: 'Discovering pockets of rebellious heterogeneity within Japan\'s famously homogeneous society. Finding individual expression in unexpected places.'
    },
    {
      url: '/trips/japan-2017/day-12-old-lady-dango-shop',
      title: 'Day 12: An Old Lady in a Dango Shop',
      date: '6 April 2017',
      meta: ['Osaka', 'Local encounters', 'Traditional sweets'],
      description: 'Rest day in Osaka featuring a memorable encounter with an elderly lady in a traditional dango shop. Simple moments that capture the heart of Japan.'
    },
    {
      url: '/trips/japan-2017/day-13-let-no-war-banner-fall',
      title: 'Day 13: Let No War Banner Fall',
      date: '7 April 2017',
      meta: ['Osaka to Nara', 'Historical reflection', 'Peace messages'],
      description: 'From Osaka to Nara carrying messages of peace. Reflecting on history and the importance of remembrance in preventing future conflicts.'
    },
    {
      url: '/trips/japan-2017/day-14-legendary-bowing-deer',
      title: 'Day 14: The Legendary Bowing Deer',
      date: '8 April 2017',
      meta: ['Nara to Iga', 'Deer encounters', 'Temple visits'],
      description: 'Encountering Nara\'s famous bowing deer and exploring ancient temples. A magical day where legend meets reality in Japan\'s ancient capital.'
    },
    {
      url: '/trips/japan-2017/day-15-food-poisoning',
      title: 'Day 15: Food Poisoning',
      date: '9 April 2017',
      meta: ['Health challenges', 'Team support', 'Recovery'],
      description: 'When adventure meets adversity through food poisoning. Learning about team support and resilience when facing unexpected health challenges.'
    },
    {
      url: '/trips/japan-2017/day-16-simple-appreciation',
      title: 'Day 16: Simple Appreciation',
      date: '10 April 2017',
      meta: ['Yokkaichi to Nagoya', 'Simple joys', 'Gratitude'],
      description: 'Finding simple appreciation and simple joys on the road to Nagoya. Sometimes the most profound moments come from the smallest observations.'
    },
    {
      url: '/trips/japan-2017/day-17-update',
      title: 'Day 17: Nagoya Update',
      date: '11 April 2017',
      meta: ['Rest day', 'Nagoya', 'Progress check'],
      description: 'A rest day in Nagoya for updates and reflection. Taking stock of our progress and preparing for the challenges ahead.'
    },
    {
      url: '/trips/japan-2017/day-18-dental-floss-makes-good-repair-tape',
      title: 'Day 18: Dental Floss Makes Good Repair Tape',
      date: '12 April 2017',
      meta: ['Nagoya to Gamagori', 'Creative repairs', 'Problem solving'],
      description: 'When dental floss becomes essential repair equipment. Creative problem-solving on the road from Nagoya to Gamagori.'
    },
    {
      url: '/trips/japan-2017/day-19-7-eleven-is-not-just-for-refuelling',
      title: 'Day 19: 7-Eleven Is Not Just for Refuelling',
      date: '13 April 2017',
      meta: ['Gamagori to Hamamatsu', 'Convenience stores', 'Cultural insights'],
      description: 'Discovering that Japan\'s convenience stores are cultural institutions, not just refuelling stops. A day of unexpected insights from Gamagori to Hamamatsu.'
    },
    {
      url: '/trips/japan-2017/day-20-our-first-serious-casualty',
      title: 'Day 20: Our First Serious Casualty',
      date: '14 April 2017',
      meta: ['Hamamatsu to Shizuoka', 'Accident', 'Emergency response'],
      description: 'A sobering day when Tresha crashes hard, resulting in our first serious injury. An important lesson about adventure, risk, and the courage to continue living boldly.'
    }
  ];
</script>

<!-- Japan 2017 Trip Overview -->
<div class="km-container">
  <div class="km-content-wrapper">
    
    <TripHeader 
      backUrl="/"
      backText="Adventures"
      title="Japan 2017"
      subtitle="26 March - 4 May 2017"
      description="Fukuoka to Hakodate"
    />

    <StatsBox stats={overviewStats} columns={2} size="large" />

    <!-- Adventure intro -->
    <div class="mb-12 km-prose-content">
      <p class="km-lead-text mb-6">
        The adventure that started it all. Four friends, four kickboards, and a dream to travel 
        the length of Japan under human power alone.
      </p>
      <p class="km-body-text mb-6">
        From the southern tip of Kyushu to the northern island of Hokkaido, this 40-day 
        adventure proved that slow travel reveals hidden corners of a country that speed 
        cannot touch.
      </p>
    </div>

    <!-- Daily posts list -->
    <div class="space-y-6">
      <div class="mb-8">
        <h2 class="text-2xl font-light mb-4 text-km-primary">Daily Journal</h2>
        <div class="w-16 h-px bg-km-secondary"></div>
      </div>
      
      {#each days as day}
        <TripCard {day} />
      {/each}

      <!-- Placeholder for future days -->
      <div class="text-center py-12 border rounded-lg border-km text-km-secondary">
        <div class="text-lg mb-2">More days coming soon...</div>
        <div class="text-sm">19 days remaining</div>
      </div>

    </div>

  </div>
</div>
