<script>
  import PageHeader from '$lib/components/PageHeader.svelte';
  export const status = 500;
</script>

<!-- Section: Server Error -->
<div class="km-container-center">
  <div class="max-w-2xl mx-auto text-center">
    <!-- Logo -->
    <div class="mb-8">
      <div class="w-24 h-24 mx-auto mb-6 relative">
        <div class="w-full h-full rounded-full flex items-center justify-center bg-km-magenta">
          <span class="text-3xl font-bold text-white">!</span>
        </div>
      </div>
    </div>
    
    <!-- Error content -->
    <div class="mb-8">
      <PageHeader 
        title="Detour ahead"
        description="Sorry, there was a server error. The journey hit a snag. I will look into it."
      />
      
      <a href="/" class="text-white font-medium px-8 py-3 rounded-full transition-all duration-300 bg-km-magenta">
        Back to base camp
      </a>
            <p class="text-sm text-km-secondary mb-4">
        Kicking Miles: 1,800 kilometres, 35 cities, 40 days
      </p>
    </div>
  </div>
</div>
