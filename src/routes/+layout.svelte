<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import CookieBanner from '$lib/components/CookieBanner.svelte';
  import '../app.css';
  export let data;
</script>

<svelte:head>
  <link rel="canonical" href={data.canonicalUrl} />
</svelte:head>

<main class="min-h-screen bg-white text-gray-800">
  <slot />
  <Footer />
  <CookieBanner />
</main>
