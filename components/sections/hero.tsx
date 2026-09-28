import Image from 'next/image';
import { HeroMotion } from '@/components/motion/hero-motion';
import { ArrowDownIcon } from '@/components/ui/icons';
import { business } from '@/data/business';

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Hero"
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-espresso"
    >
      <HeroMotion>
        <div data-hero-img className="absolute inset-0 will-change-transform">
          <div data-hero-scale className="absolute inset-0">
            <Image
              src="/images/coffie/coffie-hero.jpg"
              alt="Barista pouring water from a black gooseneck kettle into a pour-over dripper at a wooden counter"
              fill
              preload
              loading="eager"
              sizes="100vw"
              className="hero-image-position"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,14,11,.6)_0%,rgba(18,14,11,.05)_30%,rgba(18,14,11,.1)_55%,rgba(18,14,11,.88)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,14,11,.5)_0%,rgba(18,14,11,.15)_45%,rgba(18,14,11,0)_70%)]"
        />

        <div
          data-hero-copy
          className="pointer-events-none absolute inset-0 flex flex-col justify-end"
        >
          <div className="shell w-full pb-[clamp(28px,4vw,48px)]">
            <p
              data-hero-fade
              className="mb-[clamp(16px,2vw,28px)] text-xs uppercase tracking-[.2em] text-copper"
            >
              {business.tagline}
            </p>
            <h1 className="m-0 font-serif text-[clamp(68px,13.5vw,228px)] leading-[.86] tracking-[-0.025em] text-cream">
              <span className="block overflow-hidden pb-[.05em]">
                <span data-line className="block">
                  Coffee,
                </span>
              </span>
              <span className="block overflow-hidden pb-[.08em]">
                <span data-line className="block pl-[clamp(0px,9vw,160px)]">
                  as a <em className="italic text-copper">ritual.</em>
                </span>
              </span>
            </h1>
            <div
              data-hero-fade
              className="mt-[clamp(28px,4vw,56px)] flex flex-wrap items-end gap-y-5 gap-x-12 border-t-2 border-[rgba(239,228,210,.28)] pt-5"
            >
              <p className="m-0 max-w-[420px] text-base leading-[1.6] text-warm">
                Single-origin coffee, roasted in our back room and poured by hand at a counter of
                eleven seats.
              </p>
              <a
                href="#story"
                className="pointer-events-auto ml-auto flex items-center gap-3.5 text-xs uppercase tracking-[.2em] text-cream transition-colors hover:text-copper"
              >
                Begin <ArrowDownIcon />
              </a>
            </div>
          </div>
        </div>
      </HeroMotion>
    </section>
  );
}
