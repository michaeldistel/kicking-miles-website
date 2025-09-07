<script lang="ts">
  export let stats: Array<{
    value: string;
    label: string;
  }>;
  export let size: 'normal' | 'large' = 'normal';
  export let columns: number | undefined = undefined;
  
  // Generate responsive grid classes using predefined Tailwind classes
  $: gridClass = (() => {
    if (columns === 2) {
      return 'grid gap-4 text-center grid-cols-2 md:grid-cols-2';
    } else if (columns === 3) {
      return 'grid gap-4 text-center grid-cols-3 md:grid-cols-3';
    } else if (columns === 4) {
      return 'grid gap-4 text-center grid-cols-2 md:grid-cols-4';
    } else {
      // Default behavior based on stats count
      const cols = Math.min(stats.length, 2);
      const mdCols = Math.min(stats.length, 4);
      return `grid gap-4 text-center ${cols === 1 ? 'grid-cols-1' : 'grid-cols-2'} ${mdCols === 1 ? 'md:grid-cols-1' : mdCols === 2 ? 'md:grid-cols-2' : mdCols === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'}`;
    }
  })();
</script>

<!-- Stats Box -->
<div class="km-stats-box">
  <div class={gridClass}>
    {#each stats as stat}
      <div>
        <div class={size === 'large' ? 'km-stat-value-large' : 'km-stat-value'}>
          {stat.value}
        </div>
        <div class={size === 'large' ? 'km-stat-label-large' : 'km-stat-label'}>
          {stat.label}
        </div>
      </div>
    {/each}
  </div>
</div>
