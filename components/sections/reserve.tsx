import { Reveal } from '@/components/motion/reveal';
import { ArrowUpRightIcon } from '@/components/ui/icons';

export function Reserve() {
  return (
    <section id="reserve" aria-labelledby="reserve-heading" className="bg-copper-deep text-espresso">
      <div className="shell py-[clamp(96px,12vw,180px)]">
        <Reveal className="flex items-baseline gap-6 border-t-2 border-espresso pt-5 text-xs uppercase tracking-[.18em]">
          <span>06</span>
          <span>Reserve</span>
        </Reveal>

        <Reveal className="mt-[clamp(40px,6vw,88px)] max-w-[1200px]">
          <h2
            id="reserve-heading"
            className="m-0 font-serif text-[clamp(60px,10.5vw,176px)] leading-[.9] tracking-[-0.03em] text-espresso"
          >
            Take a seat at <em className="italic">the counter.</em>
          </h2>
        </Reveal>

        <div className="mt-[clamp(48px,6vw,96px)] flex flex-wrap items-end gap-10 gap-x-[clamp(40px,6vw,96px)]">
          <Reveal className="max-w-[440px] flex-[1_1_320px]">
            <p className="m-0 text-[17px] leading-[1.6] text-espresso [text-wrap:pretty]">
              Seats are held for ninety minutes. Walk-ins are welcome whenever the bar has room.
              Saturday tastings at 10:00, six guests, €28.
            </p>
          </Reveal>

          <Reveal delay={120} className="flex max-w-[560px] flex-[0_1_560px] flex-wrap gap-3">
            <a
              href="#"
              className="flex flex-[1_1_240px] items-center justify-between gap-6 bg-espresso px-6 py-[22px] text-[13px] uppercase tracking-[.16em] text-cream transition-colors hover:bg-[#2e231c] active:bg-black"
            >
              Reserve a seat <ArrowUpRightIcon size={16} />
            </a>
            <a
              href="#"
              className="flex flex-[1_1_240px] items-center justify-between gap-6 border-2 border-espresso px-[22px] py-5 text-[13px] uppercase tracking-[.16em] text-espresso transition-colors hover:bg-[#b98252] active:bg-[#a8733f]"
            >
              Order ahead <ArrowUpRightIcon size={16} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
