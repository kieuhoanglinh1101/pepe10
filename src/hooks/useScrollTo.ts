/**
 * Centralised anchor navigation that stays in sync with Lenis smooth scrolling.
 *
 * Two sections — "how-to-buy" and "community" — live inside the
 * HowToBuyCommunityTransition: a 200vh container with a sticky 100vh viewport.
 * Because they are pinned via position:sticky, their getBoundingClientRect()
 * shifts as the user scrolls, so we cannot rely on the section's own position.
 * Instead we scroll to the transition container's top for both, which lands the
 * pinned panel flush under the navbar.
 */

const NAV_OFFSET = 88; // floating navbar height + a little breathing room

function getLenis() {
  return typeof window !== 'undefined' ? window.__lenis : undefined;
}

export function scrollToId(id: string) {
  const lenis = getLenis();

  // Pinned transition sections — target the container, not the section itself.
  if (id === 'how-to-buy' || id === 'community') {
    const container = document.getElementById('htb-transition');
    if (container && lenis) {
      lenis.scrollTo(container, { offset: -NAV_OFFSET });
      return;
    }
    if (container) {
      const top = container.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
      return;
    }
  }

  const el = document.getElementById(id);
  if (!el) return;

  if (lenis) {
    lenis.scrollTo(el, { offset: -NAV_OFFSET });
    return;
  }

  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}
