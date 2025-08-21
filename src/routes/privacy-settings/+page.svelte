<script lang="ts">
  import CookieBanner from '$lib/components/CookieBanner.svelte';
</script>

<!-- Section: Privacy Settings -->
<div class="container mx-auto px-4 py-8">
  <div class="theme-card">
    <h1 class="theme-title text-3xl sm:text-4xl mb-4">Privacy Settings</h1>
    <p class="theme-text">You are in control. Adjust your privacy preferences for the journey.</p>
    <CookieBanner showSettings={true} />
  </div>
</div>
