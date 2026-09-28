'use client';

import { useEffect, useRef, useState } from 'react';
import { navItems, reserveHref } from '@/data/nav';
import { ArrowUpRightIcon } from '@/components/ui/icons';
import { subscribeScroll } from '@/lib/motion/scroll-bus';
import { useReducedMotion } from '@/lib/motion/use-reduced-motion';
import { MobileNav } from './mobile-nav';

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();

  useEffect(
    () =>
      subscribeScroll(() => {
        const isScrolled = window.scrollY > window.innerHeight * 0.6;
        setScrolled((prev) => (prev === isScrolled ? prev : isScrolled));
      }),
    []
  );

  // One-time mount fade, matching the hero's staggered entrance (index 0, 1400ms).
  // Uses the Web Animations API so it never fights the header's own
  // background/border-color transition, which is class-driven.
  useEffect(() => {
    const el = headerRef.current;
    if (!el || reduced) return;
    const animation = el.animate(
      [
        { opacity: 0, transform: 'translate3d(0,14px,0)' },
        { opacity: 1, transform: 'translate3d(0,0,0)' },
      ],
      { duration: 1600, delay: 1400, easing: 'cubic-bezier(.33,1,.68,1)', fill: 'backwards' }
    );
    return () => animation.cancel();
  }, [reduced]);

  const closeMenu = () => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 border-b-2 transition-[background-color,border-color] duration-[800ms] ease-[cubic-bezier(.22,1,.36,1)] ${
        scrolled ? 'border-rule bg-[rgba(18,14,11,0.94)]' : 'border-transparent bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-[76px] max-w-[1440px] items-center gap-10 px-5 sm:px-8 lg:px-[72px]"
        aria-label="Primary"
      >
        <a href="#top" className="font-serif text-3xl leading-none text-cream">
          Coffee
        </a>
        <div className="ml-auto hidden items-center gap-9 nav:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[.16em] text-cream transition-colors hover:text-copper"
            >
              {item.label}
            </a>
          ))}
          <a
            href={reserveHref}
            className="flex items-center gap-7 bg-copper px-4 py-3 text-xs uppercase tracking-[.16em] text-espresso transition-colors hover:bg-cream"
          >
            Reserve <ArrowUpRightIcon />
          </a>
        </div>
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className="ml-auto flex items-center gap-3 py-3.5 pl-3.5 text-xs uppercase tracking-[.16em] text-cream nav:hidden"
        >
          Menu
          <span className="grid gap-[5px]">
            <span className="block h-[2px] w-[22px] bg-cream" />
            <span className="block h-[2px] w-[22px] bg-cream" />
          </span>
        </button>
      </nav>
      <MobileNav open={menuOpen} onClose={closeMenu} />
    </header>
  );
}
