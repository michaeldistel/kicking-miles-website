<script>
  import PageHeader from '$lib/components/PageHeader.svelte';
  export const status = 404;
</script>

<!-- Section: 404 Error -->
<div class="min-h-screen flex items-center justify-center py-16 px-4">
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
      
      <a href="/" class="text-gray-800 font-medium px-8 py-3 rounded-full transition-all duration-300 bg-km-green">
        Back to base camp
      </a>
      <div class="mt-12 text-sm font-light text-km-secondary">
        <div class="w-full h-px mx-auto mb-4 bg-km-gray"></div>
        Kicking Miles — 1,800 kilometres, 35 cities, 40 days
      </div>
    </div>
  </div>
</div>
