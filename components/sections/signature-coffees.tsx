import { Reveal } from '@/components/motion/reveal';
import { SignatureCoffeesGallery } from './signature-coffees-gallery';

export function SignatureCoffees() {
  return (
    <section
      id="coffees"
      aria-labelledby="coffees-heading"
      className="shell pt-[clamp(120px,16vw,240px)]"
    >
      <Reveal className="flex items-baseline gap-6 border-t-2 border-rule pt-5 text-xs uppercase tracking-[.18em]">
        <span className="text-copper">02</span>
        <span>Signature Coffees</span>
        <span className="ml-auto text-muted">Autumn 2026</span>
      </Reveal>

      <Reveal className="mt-[clamp(40px,6vw,88px)] mb-[clamp(48px,6vw,96px)] max-w-[820px]">
        <h2
          id="coffees-heading"
          className="m-0 font-serif text-[clamp(40px,6.2vw,96px)] leading-[1.02] tracking-[-0.02em] text-cream [text-wrap:pretty]"
        >
          Three cups, chosen for the season.
        </h2>
      </Reveal>

      <SignatureCoffeesGallery />
    </section>
  );
}
