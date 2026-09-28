'use client';

import { useEffect, useRef } from 'react';
import { subscribeScroll } from '@/lib/motion/scroll-bus';
import { useReducedMotion } from '@/lib/motion/use-reduced-motion';

/**
 * Owns the hero's one-time mount entrance (headline lines, fades, image
 * scale-in) and its scroll parallax. Content is passed as children and
 * targeted via data-attributes, so this file stays free of markup/copy.
 */
export function HeroMotion({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    const lines = root.querySelectorAll<HTMLElement>('[data-line]');
    const fades = root.querySelectorAll<HTMLElement>('[data-hero-fade]');
    const img = root.querySelector<HTMLElement>('[data-hero-scale]');

    lines.forEach((line) => {
      line.style.transform = 'translate3d(0,108%,0)';
    });
    fades.forEach((fade) => {
      fade.style.opacity = '0';
      fade.style.transform = 'translate3d(0,14px,0)';
    });
    if (img) {
      img.style.transform = 'scale(1.14)';
      img.style.opacity = '0';
    }

    // Force layout before flipping to the settled state so the transition runs.
    root.getBoundingClientRect();

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (img) {
          img.style.transition =
            'transform 4.6s cubic-bezier(.16,1,.3,1), opacity 2.4s cubic-bezier(.33,1,.68,1)';
          img.style.transform = 'scale(1.02)';
          img.style.opacity = '1';
        }
        lines.forEach((line, i) => {
          line.style.transition = `transform 2s cubic-bezier(.16,1,.3,1) ${700 + i * 200}ms`;
          line.style.transform = 'translate3d(0,0,0)';
        });
        // Header fades in first at 1400ms (see SiteHeader); these continue the stagger.
        fades.forEach((fade, i) => {
          const d = 1560 + i * 160;
          fade.style.transition = `opacity 1.6s cubic-bezier(.33,1,.68,1) ${d}ms, transform 1.8s cubic-bezier(.16,1,.3,1) ${d}ms`;
          fade.style.opacity = '1';
          fade.style.transform = 'none';
        });
      });
    });

    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    if (!root) return;
    const heroImg = root.querySelector<HTMLElement>('[data-hero-img]');
    const heroCopy = root.querySelector<HTMLElement>('[data-hero-copy]');

    return subscribeScroll(() => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      if (y >= vh * 1.3) return;
      if (heroImg) heroImg.style.transform = `translate3d(0,${(y * 0.32).toFixed(1)}px,0)`;
      if (heroCopy) {
        heroCopy.style.transform = `translate3d(0,${(y * 0.1).toFixed(1)}px,0)`;
        heroCopy.style.opacity = String(Math.max(0, 1 - y / (vh * 0.75)));
      }
    });
  }, [reduced]);

  return (
    <div ref={rootRef} className="relative h-full">
      {children}
    </div>
  );
}
