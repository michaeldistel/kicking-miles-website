<script lang="ts">
  import { BUILD_COMMIT } from '$lib/build-info';
</script>

<footer class="container mx-auto px-4 py-8 max-w-4xl text-center mt-12">
  <div class="w-full h-px mx-auto mb-6" style="background-color: #7E797C;"></div>
  <div class="mb-3 text-xs font-light" style="color: #7E797C;">
    Build: {BUILD_COMMIT}
  </div>
  <div class="mb-4 space-x-4">
    <a href="/privacy-settings" class="font-medium transition-colors duration-200 text-sm" style="color: #C5007C;">Privacy Settings</a>
    <span style="color: #7E797C;">•</span>
    <a href="/" class="font-medium transition-colors duration-200 text-sm" style="color: #C5007C;">Home</a>
  </div>
</footer>
