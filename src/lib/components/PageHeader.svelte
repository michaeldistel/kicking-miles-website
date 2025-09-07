<script lang="ts">
  export let title: string;
  export let subtitle: string = '';
  export let description: string = '';
  export let alignment: 'center' | 'left' = 'center';
  export let size: 'normal' | 'large' = 'normal';
  
  $: titleClass = size === 'large' ? 'km-page-title' : 'text-3xl md:text-4xl font-light mb-4 text-km-primary';
  $: containerClass = `mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`;
  $: dividerClass = alignment === 'center' ? 'divider-km-wide mx-auto mb-6' : 'divider-km-wide mb-6';
  $: descriptionClass = alignment === 'center' 
    ? 'text-lg leading-relaxed max-w-2xl mx-auto text-km-primary' 
    : 'text-lg leading-relaxed text-km-primary';
</script>

<div class={containerClass}>
  <h1 class={titleClass}>
    {title}
  </h1>
  
  {#if subtitle}
    <div class="text-lg text-km-secondary mb-4">
      {subtitle}
    </div>
  {/if}
  
  <div class={dividerClass}></div>
  
  {#if description}
    <p class={descriptionClass}>
      {description}
    </p>
  {/if}
</div>
