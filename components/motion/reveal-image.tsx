'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { observeReveal } from '@/lib/motion/reveal-observer';
import { subscribeScroll } from '@/lib/motion/scroll-bus';
import { useReducedMotion } from '@/lib/motion/use-reduced-motion';

type RevealImageProps = {
  src: string;
  alt: string;
  objectPosition: string;
  sizes: string;
  /** Outer aspect-ratio / flex-basis / sticky classes for the frame. */
  className?: string;
  delay?: number;
  /** Scroll parallax strength, matching the reference's data-parallax factor. */
  parallax: number;
  /** Oversize inset (%) so the parallax layer has room to drift. */
  inset: number;
};

/**
 * A single photograph that wipes in via clip-path on scroll-into-view (with
 * an inner scale-down), and drifts gently with scroll via a shared rAF loop.
 * Covers every "art-directed photo" instance in Story / Moments / Visit.
 */
export function RevealImage({
  src,
  alt,
  objectPosition,
  sizes,
  className,
  delay = 0,
  parallax,
  inset,
}: RevealImageProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const box = boxRef.current;
    const clipTarget = parallaxRef.current;
    const inner = innerRef.current;
    if (!box || !clipTarget || !inner || reduced) return;

    clipTarget.style.clipPath = 'inset(100% 0 0 0)';
    inner.style.transform = 'scale(1.16)';

    return observeReveal(box, () => {
      clipTarget.style.transition = `clip-path 1.7s cubic-bezier(.77,0,.18,1) ${delay}ms`;
      clipTarget.style.clipPath = 'inset(0% 0 0 0)';
      inner.style.transition = `transform 2.6s cubic-bezier(.22,1,.36,1) ${delay}ms`;
      inner.style.transform = 'scale(1)';
    });
  }, [delay, reduced]);

  useEffect(() => {
    if (reduced) return;
    const el = parallaxRef.current;
    if (!el) return;

    return subscribeScroll(() => {
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < -200 || rect.top > vh + 200) return;

      const offset = rect.top + rect.height / 2 - vh / 2;
      const limit = (el.offsetHeight - parent.offsetHeight) / 2;
      let t = -offset * parallax;
      if (limit > 0) t = Math.max(-limit, Math.min(limit, t));
      el.style.transform = `translate3d(0,${t.toFixed(1)}px,0)`;
    });
  }, [parallax, reduced]);

  return (
    <div ref={boxRef} className={`relative overflow-hidden bg-ink ${className ?? ''}`}>
      <div ref={parallaxRef} className="absolute" style={{ inset: `-${inset}%` }}>
        <div ref={innerRef} className="absolute inset-0">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            loading="lazy"
            style={{ objectFit: 'cover', objectPosition }}
          />
        </div>
      </div>
    </div>
  );
}
