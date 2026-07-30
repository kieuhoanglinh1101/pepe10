import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Lightweight Lenis smooth scrolling, initialized once at the app root.
 * Uses requestAnimationFrame — no GSAP, no Locomotive.
 *
 * The instance is exposed on window.__lenis so the Navbar and Footer can call
 * lenis.scrollTo() for anchor navigation that stays in sync with Lenis (native
 * window.scrollTo fights Lenis and lands short of the target).
 */
declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    window.__lenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);
}
