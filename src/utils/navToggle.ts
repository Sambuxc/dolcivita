const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function initNavToggle(root: HTMLElement): void {
  const toggle = root.querySelector<HTMLButtonElement>('[data-nav-toggle]');
  const panel = root.querySelector<HTMLElement>('[data-nav-panel]');
  if (!toggle || !panel) return;

  let open = false;

  const setOpen = (next: boolean) => {
    open = next;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    panel.classList.toggle('is-open', open);
    panel.toggleAttribute('inert', !open);
    document.body.style.overflow = open ? 'hidden' : '';

    if (open) {
      const first = panel.querySelector<HTMLElement>(FOCUSABLE);
      first?.focus();
    } else {
      toggle.focus();
    }
  };

  toggle.addEventListener('click', () => setOpen(!open));

  panel.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'A') setOpen(false);
  });

  document.addEventListener('keydown', (e) => {
    if (!open) return;
    if (e.key === 'Escape') {
      setOpen(false);
      return;
    }
    if (e.key === 'Tab') {
      const focusables = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  document.addEventListener('click', (e) => {
    if (!open) return;
    const target = e.target as Node;
    if (!panel.contains(target) && !toggle.contains(target)) setOpen(false);
  });

  const mq = window.matchMedia('(min-width: 861px)');
  mq.addEventListener('change', (e) => {
    if (e.matches && open) setOpen(false);
  });
}
