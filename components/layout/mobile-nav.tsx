'use client';

import { useEffect, useRef } from 'react';
import { navItems, reserveHref } from '@/data/nav';
import { ArrowUpRightIcon } from '@/components/ui/icons';

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className="fixed inset-0 z-[80] flex flex-col bg-espresso px-5 pb-10 sm:px-8 lg:px-[72px]"
    >
      <div className="flex h-[76px] items-center border-b-2 border-rule">
        <span className="font-serif text-3xl leading-none text-cream">Coffee</span>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="ml-auto py-3.5 pl-3.5 text-xs uppercase tracking-[.16em] text-cream"
        >
          Close
        </button>
      </div>
      <nav className="mt-8 flex flex-col" aria-label="Sections">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="flex items-baseline gap-5 border-b-2 border-rule py-[18px] font-serif text-5xl leading-none text-cream"
          >
            <span className="font-sans text-xs tracking-[.1em] text-copper">{item.num}</span>
            {item.label}
          </a>
        ))}
      </nav>
      <a
        href={reserveHref}
        onClick={onClose}
        className="mt-auto flex items-center justify-between bg-copper px-5 py-5 text-[13px] uppercase tracking-[.16em] text-espresso"
      >
        Reserve a seat <ArrowUpRightIcon size={16} />
      </a>
    </div>
  );
}
