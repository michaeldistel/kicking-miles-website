<script lang="ts">
  import { page } from '$app/stores';

  const links = [
    { href: '/trips', label: 'Adventures' },
    { href: '/#about', label: 'About' },
    { href: '/#scooter', label: "What's a kick scooter?", hideOnTablet: true }
  ];

  $: pathname = $page.url.pathname;
</script>

<nav
  class="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[clamp(20px,5vw,64px)] py-[18px] backdrop-blur-[14px] bg-km-page/70 border-b border-km-ink/10"
>
  <a href="/" class="flex items-center gap-3 text-km-ink">
    <!-- Decorative: the wordmark beside it carries the name -->
    <img src="/kickingmiles-logo-200.webp" alt="" class="w-[34px] h-[34px] object-contain" />
    <span class="font-display font-bold text-lg tracking-[-0.02em]">Kicking Miles</span>
  </a>

  <div class="flex items-center gap-[clamp(14px,2.5vw,34px)] font-display font-medium text-[15px]">
    {#each links as link}
      <a
        href={link.href}
        class="hover:text-km-blue-text transition-colors {link.hideOnTablet
          ? 'hidden lg:inline'
          : 'hidden sm:inline'} {pathname === link.href ? 'text-km-blue-text' : 'text-km-ink'}"
      >
        {link.label}
      </a>
    {/each}
    <a
      href="https://www.instagram.com/heykickingmiles/"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 bg-km-ink text-white px-[18px] py-[9px] rounded-full font-semibold hover:bg-km-blue transition-colors"
    >
      Follow<span class="w-1.5 h-1.5 rounded-full bg-km-mint inline-block"></span>
    </a>
  </div>
</nav>
