<script>
  import TripOverview from '$lib/components/TripOverview.svelte';

  const trip = {
    title: 'Japan 2017',
    subtitle: '26 March - 4 May 2017',
    description: 'Fukuoka to Hakodate',
    stats: [
      { value: '1,842km', label: 'Total Distance' },
      { value: '41', label: 'Days' },
      { value: '35', label: 'Cities' },
      { value: '4', label: 'Kickboarders' }
    ],
    leadText: 'The adventure that started it all. Four friends, four kickboards, and a dream to travel the length of Japan under human power alone.',
    bodyText: 'From the southern tip of Kyushu to the northern island of Hokkaido, this 40-day adventure proved that slow travel reveals hidden corners of a country that speed cannot touch.',
    days: [
      {
        url: '/trips/japan-2017/day-00-before-the-adventure',
        title: 'Day 00: Before the Main Event',
        date: '25 March 2017',
        meta: ['Preparation', 'Nervous energy', 'Sukiyaki'],
        description: 'The night before departure. Restless with a bundle of nervous energy - half butterflies in the stomach, half a hearty sukiyaki meal from the day before.'
      },
      {
        url: '/trips/japan-2017/day-01-fukuoka-to-kitakyushu',
        title: 'Day 01: A beautiful start to our trip!',
        date: '26 March 2017',
        meta: ['70km', '10 hours', 'Rain & hail'],
        description: 'The adventure begins with nervous energy and a bundle of challenges. Rain, hail, and 8°C temperatures welcome us to Japan as we complete our first 70 kilometres.'
      },
      {
        url: '/trips/japan-2017/day-02-kyushu-to-honshu',
        title: 'Day 02: From Kyushu to Honshu',
        date: '27 March 2017',
        meta: ['90km', '3 hours', 'Island crossing'],
        description: 'A significant milestone as we cross from Kyushu to Honshu. Taking it easy today, repacking and readjusting after yesterday\'s exhausting hailstorm adventure.'
      },
      {
        url: '/trips/japan-2017/day-03-shimonoseki-to-hofu',
        title: 'Day 03: Our first long stretch!',
        date: '28 March 2017',
        meta: ['75km', '12 hours', 'Mountain ascent'],
        description: 'Our first long stretch! From coastal scenery to treacherous mountain passes. Special sendoffs from Starbucks staff and 7-11 friends fuel our spirits with "ganbatte".'
      },
      {
        url: '/trips/japan-2017/day-04-lesson-in-humility',
        title: 'Day 04: A lesson in humility',
        date: '29 March 2017',
        meta: ['99km', 'Train assist', 'Equipment failure'],
        description: 'A lesson in humility when Michelle\'s brakes fail on a mountain slope. A sobering reminder that arrogance has no place in great challenges - only humility and confidence.'
      },
      {
        url: '/trips/japan-2017/day-05-sakura-chase',
        title: 'Day 05: The sakura chase has begun!',
        date: '30 March 2017',
        meta: ['Rest day', 'Sakura blooms', 'Peace Memorial'],
        description: 'A rest day in Hiroshima brings the first glimpse of cherry blossoms. Visits to the Peace Memorial Park and time for equipment maintenance while the sakura chase begins.'
      },
      {
        url: '/trips/japan-2017/day-06-adventurer-vs-nature',
        title: 'Day 06: Adventurer vs Nature; who wins?',
        date: '31 March 2017',
        meta: ['Hiroshima to Mihara', 'Nature challenges', 'Equipment tests'],
        description: 'The classic battle between adventurer and nature unfolds. Testing both our resolve and our equipment as we push forward from Hiroshima.'
      },
      {
        url: '/trips/japan-2017/day-07-route-2-countryside',
        title: 'Day 07: Route 2 and the countryside',
        date: '2 April 2017',
        meta: ['Coastal riding', 'Rural Japan', 'Route 2'],
        description: 'Following Japan\'s famous Route 2 through countryside and coastal areas. Discovering the quieter side of Japan away from the major cities.'
      },
      {
        url: '/trips/japan-2017/day-08-momotaro-peach-boy',
        title: 'Day 08: Momotaro the peach boy',
        date: '2 April 2017',
        meta: ['Okayama', 'Local legends', 'Cultural discovery'],
        description: 'Rest day in Okayama exploring the legend of Momotaro the Peach Boy. Immersing ourselves in local folklore and Japanese cultural stories.'
      },
      {
        url: '/trips/japan-2017/day-09-no-right-or-wrong',
        title: 'Day 09: There is no right or wrong!',
        date: '3 April 2017',
        meta: ['Philosophical journey', 'Route decisions', 'Team dynamics'],
        description: 'Sometimes there is no right or wrong path - only different experiences. Learning to navigate both physical routes and team decision-making.'
      },
      {
        url: '/trips/japan-2017/day-10-economic-success',
        title: 'Day 10: The ingredient to economic success?',
        date: '4 April 2017',
        meta: ['Urban observations', 'Japanese society', 'Modern Japan'],
        description: 'Riding through areas showcasing Japan\'s economic success. Observing the contrast between traditional culture and modern prosperity.'
      },
      {
        url: '/trips/japan-2017/day-11-rebellious-heterogeneity',
        title: 'Day 11: Rebellious heterogeneity in a homogenous culture',
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
      },
      {
        url: '/trips/japan-2017/day-21-we-have-officially-hit-our-1000km-mark',
        title: 'Day 21: We Have Officially Hit Our 1000km Mark',
        date: '15 April 2017',
        meta: ['1000km milestone', 'Achievement', 'Progress'],
        description: 'A major milestone as we officially hit our 1000km mark! Celebrating this incredible achievement and reflecting on how far we have come.'
      },
      {
        url: '/trips/japan-2017/day-25-second-half-of-the-journey-officially-begins',
        title: 'Day 25: Second Half of the Journey Officially Begins',
        date: '19 April 2017',
        meta: ['Halfway point', 'New phase', 'Determination'],
        description: 'The second half of our epic journey officially begins. With renewed energy and determination, we tackle the challenges ahead.'
      },
      {
        url: '/trips/japan-2017/day-26-more-than-1200km-scooted',
        title: 'Day 26: More Than 1200km Scooted',
        date: '20 April 2017',
        meta: ['Distance milestone', 'Progress update', 'Endurance'],
        description: 'Another distance milestone achieved! More than 1200km scooted as we continue our incredible journey through Japan.'
      },
      {
        url: '/trips/japan-2017/day-27-my-fukushima-family',
        title: 'Day 27: My Fukushima Family',
        date: '21 April 2017',
        meta: ['Fukushima', 'Local family', 'Human connection'],
        description: 'A heartwarming encounter with a local family in Fukushima. Discovering the power of human connection and unexpected kindness.'
      },
      {
        url: '/trips/japan-2017/day-28-forest-park-adatara-is-my-meditation-sanctuary',
        title: 'Day 28: Forest Park Adatara is My Meditation Sanctuary',
        date: '22 April 2017',
        meta: ['Forest Park Adatara', 'Meditation', 'Natural beauty'],
        description: 'Finding peace and tranquility in Forest Park Adatara. A natural meditation sanctuary that soothes the soul and rejuvenates the spirit.'
      },
      {
        url: '/trips/japan-2017/day-29-wonderful-sendoff-and-a-lovely-ride-through-the-mountains',
        title: 'Day 29: Wonderful Sendoff and a Lovely Ride Through the Mountains',
        date: '23 April 2017',
        meta: ['Mountain riding', 'Sendoff', 'Scenic beauty'],
        description: 'A wonderful sendoff leads to a lovely ride through spectacular mountain scenery. The beauty of Japan continues to amaze and inspire.'
      },
      {
        url: '/trips/japan-2017/day-30-wonderful-people-everywhere',
        title: 'Day 30: Wonderful People Everywhere',
        date: '24 April 2017',
        meta: ['Human kindness', 'Local interactions', 'Warmth'],
        description: 'Discovering wonderful people everywhere we go. The warmth and kindness of strangers continues to be the highlight of our journey.'
      },
      {
        url: '/trips/japan-2017/day-31-theres-something-about-the-countryside',
        title: 'Day 31: There\'s Something About the Countryside',
        date: '25 April 2017',
        meta: ['Countryside', 'Rural beauty', 'Peaceful moments'],
        description: 'There is something magical about the Japanese countryside. Finding peace and beauty in rural landscapes and simple moments.'
      },
      {
        url: '/trips/japan-2017/day-32-updates',
        title: 'Day 32: Updates',
        date: '26 April 2017',
        meta: ['Progress update', 'Journey status', 'Reflection'],
        description: 'A day for updates and reflection on our incredible journey. Taking stock of our progress and the adventures still to come.'
      },
      {
        url: '/trips/japan-2017/day-33-a-fond-farewell-to-sendai',
        title: 'Day 33: A Fond Farewell to Sendai',
        date: '27 April 2017',
        meta: ['Sendai', 'Farewell', 'City memories'],
        description: 'Bidding a fond farewell to the wonderful city of Sendai. Grateful for the memories and connections made in this special place.'
      },
      {
        url: '/trips/japan-2017/day-34-allergy-attack',
        title: 'Day 34: Allergy Attack',
        date: '28 April 2017',
        meta: ['Pollen season', 'Health challenges', 'Determination'],
        description: 'Spring pollen creates unexpected health challenges, but our determination to continue the adventure remains unshaken. Sometimes the smallest obstacles test us most.'
      },
      {
        url: '/trips/japan-2017/day-35-when-life-throws-you-yet-another-curve-ball',
        title: 'Day 35: When Life Throws You Yet Another Curve Ball',
        date: '29 April 2017',
        meta: ['Unexpected challenges', 'Resilience', 'Adaptation'],
        description: 'When life throws unexpected challenges our way, we learn to adapt and find strength in resilience. Every curveball teaches us something new.'
      },
      {
        url: '/trips/japan-2017/day-36-going-slow-and-being-present',
        title: 'Day 36: Going Slow and Being Present',
        date: '30 April 2017',
        meta: ['Mindfulness', 'Present moment', 'Slow travel'],
        description: 'Discovering the art of going slow and being truly present. Finding beauty in mindful travel and appreciating each moment of the journey.'
      },
      {
        url: '/trips/japan-2017/day-37-the-beginning-of-the-last-hard-leg',
        title: 'Day 37: The Beginning of the Last Hard Leg',
        date: '1 May 2017',
        meta: ['Final stretch', 'Challenge ahead', 'Preparation'],
        description: 'Beginning the last hard leg of our epic journey. Preparing mentally and physically for the final challenges that lie ahead.'
      },
      {
        url: '/trips/japan-2017/day-38-the-steep-ascent-into-the-hakoda-mountain-ranges',
        title: 'Day 38: The Steep Ascent into the Hakoda Mountain Ranges',
        date: '2 May 2017',
        meta: ['Hakoda Mountains', 'Steep climbs', 'Mountain challenge'],
        description: 'Tackling the steep ascent into the formidable Hakoda Mountain ranges. Our most challenging climbs yet as we push toward the final stretches of our journey.'
      },
      {
        url: '/trips/japan-2017/day-39-golden-week-holiday-madness',
        title: 'Day 39: Golden Week Holiday Madness',
        date: '3 May 2017',
        meta: ['Golden Week', 'Holiday crowds', 'Cultural experience'],
        description: 'Experiencing the controlled chaos of Golden Week holiday celebrations. The entire country seems to be on holiday, creating a festive atmosphere everywhere we travel.'
      },
      {
        url: '/trips/japan-2017/day-40-omg-its-the-last-boss',
        title: 'Day 40: OMG it\'s the last boss!',
        date: '7 May 2017',
        meta: ['Final challenge', '47km/hr headwinds', 'Epic finale'],
        description: 'The epic finale! Battling extreme 47km/hr headwinds on our last major scooting day - like facing the final boss in a video game before victory!'
      },
      {
        url: '/trips/japan-2017/mission-complete-we-made-it',
        title: 'Mission Complete! We made it!!!',
        date: '8 May 2017',
        meta: ['Summit reached', 'Mission complete', '1,842km'],
        description: 'The triumphant finale! After 41 days and 1,842 kilometres, we have reached Mount Hakodate summit. The moment of victory and profound human connection.'
      },
      {
        url: '/trips/japan-2017/thank-you',
        title: 'Thank You :)',
        date: '7 June 2017',
        meta: ['Video tribute', 'Gratitude', 'Beautiful souls'],
        description: 'A heartfelt video tribute to all the beautiful souls we met along the way. Thank you for making our adventure so meaningful with your warmth and kindness.'
      }
    ]
  };
</script>

<svelte:head>
  <title>Japan 2017 - 1,842km Kickboard Adventure | Kicking Miles</title>
  <meta name="description" content="Follow our epic 41-day kickboard journey from Fukuoka to Hakodate. Four friends, four kickboards, and 1,842km of adventure across Japan." />
  <meta property="og:title" content="Japan 2017 - 1,842km Kickboard Adventure | Kicking Miles" />
  <meta property="og:description" content="Follow our epic 41-day kickboard journey from Fukuoka to Hakodate. Four friends, four kickboards, and 1,842km of adventure across Japan." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://kickingmiles.com/trips/japan-2017/" />
  <meta property="og:image" content="https://kickingmiles.com/images/japan-2017/day-00/day00-photo-01.webp" />
  <meta property="article:published_time" content="2017-03-26" />
  <meta property="article:author" content="Michael Distel" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Japan 2017 - 1,842km Kickboard Adventure | Kicking Miles" />
  <meta name="twitter:description" content="Follow our epic 41-day kickboard journey from Fukuoka to Hakodate. Four friends, four kickboards, and 1,842km of adventure across Japan." />
  <meta name="twitter:image" content="https://kickingmiles.com/images/japan-2017/day-00/day00-photo-01.webp" />
  <link rel="canonical" href="https://kickingmiles.com/trips/japan-2017/" />
</svelte:head>

<!-- Japan 2017 Trip Overview -->
<TripOverview {trip} />
