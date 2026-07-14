export function initHeroSlideshow(root: HTMLElement): () => void {
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const slides = Array.from(root.querySelectorAll<HTMLElement>('[data-slide]'));
  const dotsRoot = root.querySelector('[data-dots]');
  const dots = dotsRoot ? Array.from(dotsRoot.querySelectorAll<HTMLButtonElement>('[data-dot]')) : [];
  const videos = slides.map((s) => s.querySelector('video'));
  if (!slides.length) return () => {};

  videos.forEach((v) => {
    if (!v) return;
    v.muted = true;
    v.setAttribute('muted', '');
    v.play().catch(() => {});
  });

  let i = 0;
  const DUR = 6200;
  let timer: ReturnType<typeof setInterval> | null = null;

  const paint = () => {
    slides.forEach((s, n) => {
      s.style.opacity = n === i ? '1' : '0';
    });
    dots.forEach((d, n) => {
      d.style.background = n === i ? 'rgba(253,251,244,.9)' : 'rgba(253,251,244,.32)';
      d.setAttribute('aria-current', n === i ? 'true' : 'false');
    });
    videos.forEach((v, n) => {
      if (!v) return;
      if (n === i) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  };

  const go = (n: number) => {
    i = (n + slides.length) % slides.length;
    paint();
  };
  const next = () => go(i + 1);
  const start = () => {
    if (!reduce) {
      if (timer) clearInterval(timer);
      timer = setInterval(next, DUR);
    }
  };
  const stop = () => {
    if (timer) clearInterval(timer);
  };

  dots.forEach((d, n) =>
    d.addEventListener('click', () => {
      go(n);
      start();
    })
  );

  paint();
  if (reduce) {
    videos.forEach((v) => v && v.pause());
    return () => {};
  }
  start();

  let io: IntersectionObserver | null = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) start();
          else stop();
        });
      },
      { threshold: 0.15 }
    );
    io.observe(root);
  }

  return () => {
    stop();
    if (io) io.disconnect();
  };
}
