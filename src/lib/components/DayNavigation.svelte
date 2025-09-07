<script lang="ts">
  // Support both old and new interfaces for backwards compatibility
  export let previousDay: {
    url?: string;
    label?: string;
    href?: string;
    number?: number;
    title?: string;
  } | null = null;
  export let nextDay: {
    url?: string;
    label?: string;
    href?: string;
    number?: number;
    title?: string;
  } | null = null;
  export let currentDay: number | undefined = undefined;
  export let totalDays: number | undefined = undefined;

  // Helper functions to get the correct values regardless of interface
  function getPreviousUrl() {
    return previousDay?.url || previousDay?.href || '';
  }
  
  function getPreviousLabel() {
    return previousDay?.label || (previousDay?.number ? `Day ${previousDay.number}` : '');
  }
  
  function getNextUrl() {
    return nextDay?.url || nextDay?.href || '';
  }
  
  function getNextLabel() {
    return nextDay?.label || (nextDay?.number ? `Day ${nextDay.number}` : '');
  }
</script>

<!-- Navigation -->
<div class="km-navigation">
  <div class="flex justify-between items-center">
    <div>
      {#if previousDay}
        <a href={getPreviousUrl()} class="km-nav-link">
          ← {getPreviousLabel()}
        </a>
      {:else}
        <div></div>
      {/if}
    </div>
    
    {#if currentDay && totalDays}
      <div class="text-center">
        <div class="text-sm text-km-secondary">Day {currentDay} of {totalDays}</div>
      </div>
    {:else}
      <div></div>
    {/if}
    
    <div>
      {#if nextDay}
        <a href={getNextUrl()} class="km-nav-link">
          {getNextLabel()} →
        </a>
      {:else if currentDay && totalDays}
        <div class="font-medium text-sm text-km-secondary">
          {#if currentDay < totalDays}
            Day {currentDay + 1} coming soon
          {:else}
            Journey complete
          {/if}
        </div>
      {:else}
        <div></div>
      {/if}
    </div>
  </div>
</div>
