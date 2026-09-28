'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { coffees, type SignatureCoffee } from '@/data/coffees';
import { observeReveal } from '@/lib/motion/reveal-observer';
import { useReducedMotion } from '@/lib/motion/use-reduced-motion';

export function SignatureCoffeesGallery() {
  const [active, setActive] = useState(0);
  const stickyRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const sticky = stickyRef.current;
    const clip = clipRef.current;
    const scale = scaleRef.current;
    if (!sticky || !clip || !scale || reduced) return;
    clip.style.clipPath = 'inset(100% 0 0 0)';
    scale.style.transform = 'scale(1.16)';
    // Observe the stable sticky container, not the element being clipped/
    // transformed: a target that is itself being animated with `transform`
    // stops receiving IntersectionObserver updates once it settles into its
    // sticky position in some browsers, so the reveal would never fire.
    return observeReveal(sticky, () => {
      clip.style.transition = 'clip-path 1.7s cubic-bezier(.77,0,.18,1)';
      clip.style.clipPath = 'inset(0% 0 0 0)';
      scale.style.transition = 'transform 2.6s cubic-bezier(.22,1,.36,1)';
      scale.style.transform = 'scale(1)';
    });
  }, [reduced]);

  return (
    <div className="flex items-start gap-[clamp(40px,6vw,96px)]">
      <div
        ref={stickyRef}
        className="sticky top-[14vh] hidden aspect-[4/5] flex-[0_0_38%] overflow-hidden bg-ink nav:block"
      >
        <div ref={clipRef} className="absolute inset-0">
          <div ref={scaleRef} className="absolute inset-0">
            {coffees.map((coffee, i) => (
              <div
                key={coffee.key}
                className="absolute inset-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)]"
                style={{ opacity: i === active ? 1 : 0, pointerEvents: i === active ? 'auto' : 'none' }}
              >
                <Image
                  src={coffee.src}
                  alt={coffee.alt}
                  fill
                  sizes="38vw"
                  loading="lazy"
                  style={{ objectFit: 'cover', objectPosition: coffee.posWide }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="min-w-0 flex-1 border-b-2 border-rule">
        {coffees.map((coffee, i) => (
          <CoffeeRow
            key={coffee.key}
            coffee={coffee}
            active={i === active}
            onActivate={() => setActive(i)}
          />
        ))}
      </div>
    </div>
  );
}

function CoffeeRow({
  coffee,
  active,
  onActivate,
}: {
  coffee: SignatureCoffee;
  active: boolean;
  onActivate: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    el.style.opacity = '0';
    el.style.transform = 'translate3d(0,36px,0)';
    return observeReveal(el, () => {
      el.style.transition = 'opacity 1.4s cubic-bezier(.33,1,.68,1), transform 1.6s cubic-bezier(.22,1,.36,1)';
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }, [reduced]);

  return (
    <article
      ref={ref}
      onMouseEnter={onActivate}
      onClick={onActivate}
      className="flex flex-wrap items-baseline gap-x-8 gap-y-4 border-t-2 border-rule py-[clamp(28px,4vw,48px)]"
    >
      <div className="relative mb-2 aspect-[4/3] w-full overflow-hidden bg-ink nav:hidden">
        <Image
          src={coffee.src}
          alt={coffee.alt}
          fill
          sizes="100vw"
          loading="lazy"
          style={{ objectFit: 'cover', objectPosition: coffee.posNarrow }}
        />
      </div>

      <span className="flex-none basis-[52px] text-xs tracking-[.16em] text-copper">
        {coffee.num}
      </span>

      <div
        data-active={active}
        className="min-w-[260px] flex-1 translate-x-0 transition-transform duration-1000 ease-[cubic-bezier(.22,1,.36,1)] nav:data-[active=true]:translate-x-3"
      >
        <h3
          data-active={active}
          className="m-0 font-serif text-[clamp(38px,4.4vw,64px)] leading-none tracking-[-0.015em] text-cream transition-colors duration-[800ms] ease-[cubic-bezier(.22,1,.36,1)] nav:data-[active=false]:text-dim"
        >
          {coffee.name}
        </h3>
        <p className="mt-3 text-base text-muted">{coffee.notes}</p>
      </div>

      <dl className="m-0 grid flex-none grid-cols-2 gap-x-5 gap-y-1.5 text-[13px]">
        <dt className="pt-0.5 text-[11px] uppercase tracking-[.12em] text-faint">Origin</dt>
        <dd className="m-0 text-warm">{coffee.origin}</dd>
        <dt className="pt-0.5 text-[11px] uppercase tracking-[.12em] text-faint">Process</dt>
        <dd className="m-0 text-warm">{coffee.process}</dd>
        <dt className="pt-0.5 text-[11px] uppercase tracking-[.12em] text-faint">Brewed</dt>
        <dd className="m-0 text-warm">{coffee.brew}</dd>
      </dl>

      <span className="ml-auto flex-none font-serif text-3xl leading-none text-cream">
        {coffee.price}
      </span>
    </article>
  );
}
