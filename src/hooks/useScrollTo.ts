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

const NAV_OFFSET = 0; // floating navbar height + a little breathing room

function getLenis() {
  return typeof window !== 'undefined' ? window.__lenis : undefined;
}

export function scrollToId(id: string) {
  const lenis = getLenis();

  // Pinned transition sections — target the container, not the section itself.
  if (id === 'how-to-buy') {
    const container = document.getElementById('htb-transition');

    if (container && lenis) {
        lenis.scrollTo(container, { offset: 0 });
        return;
    }

    if (container) {
        window.scrollTo({
            top: container.offsetTop,
            behavior: 'smooth',
        });
        return;
    }
}

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
