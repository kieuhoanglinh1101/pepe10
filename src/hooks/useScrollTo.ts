const NAV_OFFSET = 0;

function getLenis() {
  return typeof window !== 'undefined' ? window.__lenis : undefined;
}

export function scrollToId(id: string) {
  const lenis = getLenis();

  // How To Buy
  if (id === 'how-to-buy') {
    const container = document.getElementById('htb-transition');

    if (!container) return;

    if (lenis) {
      lenis.scrollTo(container);
      return;
    }

    window.scrollTo({
      top: container.offsetTop,
      behavior: 'smooth',
    });

    return;
  }

  // Community
  if (id === 'community') {
    const container = document.getElementById('htb-transition');

    if (!container) return;

    const target = container.offsetTop + window.innerHeight;

    if (lenis) {
      lenis.scrollTo(target);
      return;
    }

    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });

    return;
  }

  // All other sections
  const el = document.getElementById(id);

  if (!el) return;

  if (lenis) {
    lenis.scrollTo(el);
    return;
  }

  window.scrollTo({
    top: el.offsetTop,
    behavior: 'smooth',
  });
}