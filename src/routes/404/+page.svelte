<script>
  import PageHeader from '$lib/components/PageHeader.svelte';
  export const status = 404;
</script>

<!-- Section: 404 Error -->
<div class="km-container-center">
  <div class="max-w-2xl mx-auto text-center">
    <!-- Logo -->
    <div class="mb-8">
      <div class="w-24 h-24 mx-auto mb-6 relative">
        <div class="w-full h-full rounded-full flex items-center justify-center bg-km-green">
          <span class="text-3xl font-bold text-black">K</span>
        </div>
      </div>
    </div>
    
    <!-- Error content -->
    <div class="mb-8">
      <PageHeader 
        title="Lost on the trail"
        description="I could not find that page. Maybe the path changed, or the adventure took a new turn."
      />
      
      <a href="/" class="km-button-primary">
        Back to base camp
      </a>
      <div class="mt-12 text-sm font-light text-km-secondary">
        <div class="w-full h-px mx-auto mb-4 bg-km-gray"></div>
        <p class="text-sm text-km-secondary mb-4">
        Kicking Miles: 1,800 kilometres, 35 cities, 40 days
      </p>
      </div>
    </div>
  </div>
</div>
