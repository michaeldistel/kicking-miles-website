<script lang="ts">
  export let showSettings = false;
  // Consent management logic would go here
</script>

<div class="fixed bottom-0 left-0 w-full bg-slate-800 text-gray-100 p-4 shadow-lg z-50" style:display={showSettings ? 'block' : 'none'}>
  <div class="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between">
    <span class="mb-2 md:mb-0">This site uses cookies for analytics. You can manage your preferences.</span>
    <div>
      <button class="bg-blue-600 text-white px-4 py-2 rounded mr-2">Accept</button>
      <button class="bg-gray-600 text-white px-4 py-2 rounded">Decline</button>
    </div>
  </div>
</div>
