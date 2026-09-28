'use client';

import { useEffect, useRef } from 'react';
import { observeReveal } from '@/lib/motion/reveal-observer';
import { useReducedMotion } from '@/lib/motion/use-reduced-motion';

type RevealProps = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
  'aria-hidden'?: React.AriaAttributes['aria-hidden'];
};

/**
 * Generic "fade up" scroll reveal, used for headings, text blocks and rows.
 * Renders a single div — pass layout classes (flex-basis, grid, etc.)
 * through `className` since this element often doubles as the layout item.
 */
export function Reveal({ delay = 0, className, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    el.style.opacity = '0';
    el.style.transform = 'translate3d(0,36px,0)';

    return observeReveal(el, () => {
      el.style.transition = `opacity 1.5s cubic-bezier(.33,1,.68,1) ${delay}ms, transform 1.6s cubic-bezier(.22,1,.36,1) ${delay}ms`;
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }, [delay, reduced]);

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
}
