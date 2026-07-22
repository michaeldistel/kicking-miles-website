/**
 * Scroll-driven motion helpers used by the homepage.
 *
 * Both actions no-op when the visitor prefers reduced motion, and both are
 * safe on the server: SvelteKit only runs actions in the browser.
 */

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Fade and lift an element in once it scrolls into view. */
export function reveal(node: HTMLElement, delay = 0) {
  if (prefersReducedMotion()) return;

  node.style.opacity = '0';
  node.style.transform = 'translateY(28px)';
  node.style.transition = `opacity .8s cubic-bezier(.2,.8,.2,1) ${delay}ms, transform .8s cubic-bezier(.2,.8,.2,1) ${delay}ms`;
  node.style.willChange = 'opacity, transform';

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        node.style.opacity = '1';
        node.style.transform = 'none';
        observer.unobserve(node);
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}

/** Count an integer up from zero when the element scrolls into view. */
export function countUp(node: HTMLElement, value: number) {
  const format = (n: number) => n.toLocaleString('en-GB');

  if (prefersReducedMotion()) {
    node.textContent = format(value);
    return;
  }

  node.textContent = '0';

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(node);

        const duration = 1400;
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          node.textContent = format(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}

/** Drift an element vertically as the page scrolls. */
export function parallax(node: HTMLElement, factor = 0.18) {
  if (prefersReducedMotion()) return;

  const onScroll = () => {
    node.style.transform = `translateY(${window.scrollY * factor}px) scale(1.02)`;
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  return {
    destroy() {
      window.removeEventListener('scroll', onScroll);
    }
  };
}
