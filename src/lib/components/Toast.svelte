<script lang="ts">
  export let message = '';
</script>

{#if message}
  <div class="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow-lg z-50">
    {message}
  </div>
{/if}
