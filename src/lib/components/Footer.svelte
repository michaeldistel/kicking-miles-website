<script lang="ts">
  import { BUILD_COMMIT } from '$lib/build-info';
</script>

<footer class="km-footer">
  <div class="w-full h-px bg-km-secondary mb-4"></div>
  <div class="km-footer-content">
    <div class="km-build-info">
      Build: {BUILD_COMMIT}
    </div>
  </div>
</footer>
