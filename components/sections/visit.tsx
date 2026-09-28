import { Reveal } from '@/components/motion/reveal';
import { RevealImage } from '@/components/motion/reveal-image';
import { ArrowUpRightIcon } from '@/components/ui/icons';
import { business } from '@/data/business';

export function Visit() {
  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="shell pt-[clamp(120px,16vw,240px)] pb-[clamp(120px,16vw,240px)]"
    >
      <Reveal className="flex items-baseline gap-6 border-t-2 border-rule pt-5 text-xs uppercase tracking-[.18em]">
        <span className="text-copper">05</span>
        <span>Visit</span>
      </Reveal>

      <div className="mt-[clamp(40px,6vw,88px)] flex flex-wrap items-start gap-x-[clamp(40px,6vw,96px)] gap-y-14">
        <div className="flex flex-[1_1_360px] flex-col gap-[clamp(40px,5vw,64px)]">
          <Reveal>
            <h2
              id="visit-heading"
              className="m-0 font-serif text-[clamp(44px,6.2vw,96px)] leading-none tracking-[-0.02em] text-cream"
            >
              {business.addressLine1}
              <br />
              <em className="italic text-copper">{business.addressLine2}</em>
            </h2>
          </Reveal>

          <Reveal>
            <p className="m-0 max-w-[400px] text-[17px] text-muted [text-wrap:pretty]">
              {business.locationNote}
            </p>
          </Reveal>

          <Reveal className="grid max-w-[460px] border-b-2 border-rule">
            {business.hours.map((row) => (
              <div
                key={row.days}
                className="flex justify-between gap-4 border-t-2 border-rule py-3.5"
              >
                <span className="text-muted">{row.days}</span>
                <span className="tabular-nums text-cream">{row.time}</span>
              </div>
            ))}
          </Reveal>

          <Reveal className="flex flex-wrap gap-x-10 gap-y-4 text-xs uppercase tracking-[.16em]">
            <a
              href="#"
              className="flex items-center gap-3 text-copper transition-colors hover:text-cream"
            >
              Directions <ArrowUpRightIcon />
            </a>
            <a
              href={`mailto:${business.email}`}
              className="text-cream transition-colors hover:text-copper"
            >
              {business.email}
            </a>
          </Reveal>
        </div>

        <RevealImage
          src="/images/coffie/coffie-storefront.jpg"
          alt="The lit Coffee storefront on a cobbled Porto street at dusk"
          objectPosition="60% 45%"
          sizes="(min-width: 860px) 50vw, 100vw"
          className="aspect-[1200/896] flex-[1.3_1_400px]"
          parallax={0.08}
          inset={7}
        />
      </div>
    </section>
  );
}
