<script>
  export let totalDistance = 0;
  export let targetDistance = 560;
  export let label = "Distance Progress";

  $: progressPercentage = Math.min((totalDistance / targetDistance) * 100, 100);
  $: remainingDistance = Math.max(targetDistance - totalDistance, 0);
</script>

<div class="km-distance-counter bg-km-subtle rounded-lg p-6 text-center">
  <h3 class="text-2xl font-light text-km-dark mb-4">{label}</h3>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
    <div class="km-distance-stat">
      <div class="text-3xl font-light text-km-primary mb-2">{totalDistance}km</div>
      <div class="text-sm text-km-dark tracking-wide">Completed</div>
    </div>
    
    <div class="km-distance-stat">
      <div class="text-3xl font-light text-km-magenta mb-2">{remainingDistance}km</div>
      <div class="text-sm text-km-dark tracking-wide">Remaining</div>
    </div>
    
    <div class="km-distance-stat">
      <div class="text-3xl font-light text-km-dark mb-2">{targetDistance}km</div>
      <div class="text-sm text-km-dark tracking-wide">Target</div>
    </div>
  </div>

  <!-- Progress Bar -->
  <div class="km-progress-container">
    <div class="w-full bg-gray-200 rounded-full h-3 mb-2">
      <div 
        class="bg-km-primary h-3 rounded-full transition-all duration-500 ease-out"
        style="width: {progressPercentage}%"
      ></div>
    </div>
    <div class="text-sm text-km-dark tracking-wide">
      {progressPercentage.toFixed(1)}% Complete
    </div>
  </div>
</div>

<style>
  .km-distance-counter {
    border: 1px solid #e5e7eb;
  }
  
  .km-distance-stat {
    text-align: center;
  }
  
  .km-progress-container {
    max-width: 400px;
    margin: 0 auto;
  }
</style>