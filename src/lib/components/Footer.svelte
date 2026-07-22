<script lang="ts">
  import { BUILD_COMMIT } from '$lib/build-info';
</script>

<footer class="km-footer px-[clamp(20px,5vw,64px)] pt-[clamp(56px,7vw,100px)] pb-12">
  <div class="max-w-[1400px] mx-auto">
    <div class="flex flex-wrap justify-between items-end gap-10 pb-14 border-b border-white/[0.12]">
      <h2
        class="font-display font-bold text-[clamp(38px,6vw,88px)] leading-[0.9] tracking-[-0.03em] max-w-[640px]"
      >
        Follow the next<br />push forward.
      </h2>
      <div class="flex gap-3.5">
        <a
          href="https://www.instagram.com/heykickingmiles/"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white text-km-ink px-[30px] py-[15px] rounded-full font-display font-semibold text-base hover:bg-km-mint transition-colors"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/HeyKickingMiles/"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white/[0.12] text-white px-[30px] py-[15px] rounded-full font-display font-semibold text-base border border-white/25 hover:bg-white/25 transition-colors"
        >
          Facebook
        </a>
      </div>
    </div>

    <div class="mt-9 flex flex-wrap justify-between items-center gap-4 text-white/50 text-sm">
      <a href="/" class="flex items-center gap-3">
        <img src="/kickingmiles-logo-200.webp" alt="" class="w-7 h-7 object-contain" />
        <span class="font-display font-semibold text-white">Kicking Miles</span>
      </a>
      <div>&copy; {new Date().getFullYear()} Kicking Miles - Japan / Korea / beyond.</div>
      <div class="km-build-info">Build: {BUILD_COMMIT}</div>
    </div>
  </div>
</footer>
