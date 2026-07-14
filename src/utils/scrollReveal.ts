export function initScrollReveal(root: ParentNode = document): void {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (reduce || !('IntersectionObserver' in window) || !els.length) return;

  els.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(26px)';
    el.style.filter = 'blur(4px)';
    el.style.transition = 'opacity .8s var(--ease), transform .8s var(--ease), filter .8s var(--ease)';
    el.style.willChange = 'opacity, transform';
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const parent = el.parentElement;
        const sibs = parent ? Array.from(parent.querySelectorAll<HTMLElement>(':scope > [data-reveal]')) : [el];
        const idx = Math.max(0, sibs.indexOf(el));
        el.style.transitionDelay = Math.min(idx * 70, 420) + 'ms';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        el.style.filter = 'blur(0)';
        io.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  els.forEach((el) => io.observe(el));
}
