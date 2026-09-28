'use client';

/**
 * A single passive scroll/resize listener shared by every motion primitive on
 * the page, batched through one requestAnimationFrame per frame. This keeps
 * the page at "one scroll listener" regardless of how many parallax layers,
 * or nav-background toggles are mounted at once.
 */

type Listener = () => void;

let listeners: Listener[] = [];
let ticking = false;
let started = false;

function runFrame() {
  ticking = false;
  for (const listener of listeners) listener();
}

function onScrollOrResize() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(runFrame);
}

function ensureStarted() {
  if (started || typeof window === 'undefined') return;
  started = true;
  window.addEventListener('scroll', onScrollOrResize, { passive: true });
  window.addEventListener('resize', onScrollOrResize, { passive: true });
}

export function subscribeScroll(listener: Listener): () => void {
  ensureStarted();
  listeners.push(listener);
  listener();
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}
