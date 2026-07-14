export function initMenuFilter(root: HTMLElement): void {
  const filters = root.querySelector<HTMLElement>('[data-filters]');
  const grid = root.querySelector<HTMLElement>('[data-grid]');
  if (!filters || !grid) return;

  const pills = Array.from(filters.querySelectorAll<HTMLButtonElement>('[data-cat]'));
  const items = Array.from(grid.querySelectorAll<HTMLElement>('[data-item]'));
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function applyFilter(cat: string) {
    pills.forEach((p) => {
      const active = p.dataset.cat === cat;
      p.classList.toggle('active', active);
      p.setAttribute('aria-pressed', String(active));
    });

    let visibleIndex = 0;
    items.forEach((el) => {
      const show = cat === 'All' || el.dataset.cat === cat;
      el.style.display = show ? '' : 'none';
      if (!show) return;
      if (!reduce) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px) scale(.98)';
        el.style.transition = 'none';
        void el.offsetWidth;
        el.style.transition = 'opacity .5s var(--ease), transform .5s var(--ease)';
        el.style.transitionDelay = Math.min(visibleIndex * 45, 400) + 'ms';
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) scale(1)';
        });
      }
      visibleIndex++;
    });
  }

  pills.forEach((p) => {
    p.addEventListener('click', () => applyFilter(p.dataset.cat || 'All'));
  });
}
