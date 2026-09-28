import { Reveal } from '@/components/motion/reveal';
import { RevealImage } from '@/components/motion/reveal-image';
import { business } from '@/data/business';

export function Story() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="shell pt-[clamp(96px,14vw,200px)]"
    >
      <Reveal className="flex items-baseline gap-6 border-t-2 border-rule pt-5 text-xs uppercase tracking-[.18em]">
        <span className="text-copper">01</span>
        <span>The Ritual</span>
      </Reveal>

      <Reveal className="mt-[clamp(40px,6vw,88px)] max-w-[1120px]">
        <h2
          id="story-heading"
          className="m-0 font-serif text-[clamp(40px,6.2vw,96px)] leading-[1.02] tracking-[-0.02em] text-cream [text-wrap:pretty]"
        >
          We roast in small lots, brew by hand, and pour for{' '}
          <em className="italic text-copper">one person</em> at a time.
        </h2>
      </Reveal>

      <div className="mt-[clamp(56px,8vw,128px)] flex flex-wrap items-start gap-[clamp(40px,6vw,96px)]">
        <RevealImage
          src="/images/coffie/coffie-story-hands.jpg"
          alt="Hands adjusting a burr grinder as fresh grounds fall into a ceramic cup"
          objectPosition="42% 50%"
          sizes="(min-width: 860px) 45vw, 100vw"
          className="aspect-[4/5] flex-[1.15_1_340px]"
          parallax={0.07}
          inset={10}
        />

        <div className="flex flex-[1_1_340px] flex-col gap-[clamp(40px,5vw,72px)] pt-[clamp(0px,8vw,140px)]">
          <Reveal className="grid max-w-[480px] gap-6">
            <p className="m-0 text-lg leading-[1.65] text-warm [text-wrap:pretty]">
              Coffee began as eleven seats on a quiet street in Porto. No menu boards, no queue — a
              bar, a kettle, and the time it takes to do one thing properly.
            </p>
            <p className="m-0 text-lg leading-[1.65] text-muted [text-wrap:pretty]">
              We buy from farms we visit, roast on Tuesdays, and rest every lot until it tastes the
              way its grower intended. Grind, bloom, pour, wait. The ritual is the point.
            </p>
            <p className="mt-2 font-serif text-[26px] italic text-copper">{business.founders}</p>
          </Reveal>

          <RevealImage
            src="/images/coffie/coffie-story-beans.jpg"
            alt="Freshly roasted coffee beans in a dark wooden bowl"
            objectPosition="75% 50%"
            sizes="(min-width: 860px) 360px, 90vw"
            className="ml-auto aspect-square w-full max-w-[360px]"
            delay={200}
            parallax={0.12}
            inset={14}
          />
        </div>
      </div>
    </section>
  );
}
