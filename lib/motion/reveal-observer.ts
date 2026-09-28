'use client';

/**
 * A single shared IntersectionObserver used by every scroll-reveal element on
 * the page. Each element fires its reveal callback once, then is unobserved.
 */

type RevealCallback = () => void;

let observer: IntersectionObserver | null = null;
const callbacks = new WeakMap<Element, RevealCallback>();

function getObserver(): IntersectionObserver {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const callback = callbacks.get(entry.target);
          callback?.();
          observer?.unobserve(entry.target);
          callbacks.delete(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
  }
  return observer;
}

export function observeReveal(el: Element, onReveal: RevealCallback): () => void {
  callbacks.set(el, onReveal);
  getObserver().observe(el);
  return () => {
    observer?.unobserve(el);
    callbacks.delete(el);
  };
}
