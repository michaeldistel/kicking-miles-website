<script lang="ts">
  import { BUILD_COMMIT } from '$lib/build-info';
</script>

<footer class="container mx-auto px-4 py-8 max-w-4xl text-center mt-12">
  <div class="w-full h-px mx-auto mb-6" style="background-color: #7E797C;"></div>
    <div class="container mx-auto px-4 text-center">
    <div class="text-sm" style="color: #7E797C;">
      Build: {BUILD_COMMIT}
    </div>
  </div>
</footer>
