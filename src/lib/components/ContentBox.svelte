<script lang="ts">
  import type { ContentBoxProps } from '$lib/types';

  export let type: ContentBoxProps['type'] = 'quote';
  export let title: ContentBoxProps['title'] = null;

  const typeClasses: Record<NonNullable<ContentBoxProps['type']>, string> = {
    'quote': 'km-quote-box',
    'mood': 'km-mood-box',
    'highlight': 'km-highlight-box'
  };

  const contentClasses: Record<NonNullable<ContentBoxProps['type']>, string> = {
    'quote': 'km-content-quote',
    'mood': 'km-content-mood',
    'highlight': 'km-content-highlight'
  };

  $: actualType = type || 'quote';
  $: boxClass = typeClasses[actualType];
  $: contentClass = contentClasses[actualType];
</script>

<!-- Content Box -->
<div class={boxClass}>
  {#if title}
    <div class="km-content-box-title-wrapper">
      <span class="km-content-box-title">{title}</span>
    </div>
  {/if}
  
  <div class={contentClass}>
    <slot />
  </div>
</div>
