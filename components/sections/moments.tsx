import { Reveal } from '@/components/motion/reveal';
import { RevealImage } from '@/components/motion/reveal-image';
import { moments } from '@/data/moments';

function Caption({ time, label }: { time: string; label: string }) {
  return (
    <figcaption className="flex gap-4 pt-3.5 text-xs uppercase tracking-[.14em] text-muted">
      <span className="text-copper">{time}</span>
      {label}
    </figcaption>
  );
}

export function Moments() {
  const [firstPour, roaster, bloom, elevenSeats] = moments;

  return (
    <section
      id="gallery"
      aria-labelledby="moments-heading"
      className="shell pt-[clamp(120px,16vw,240px)]"
    >
      <Reveal className="flex items-baseline gap-6 border-t-2 border-rule pt-5 text-xs uppercase tracking-[.18em]">
        <span className="text-copper">04</span>
        <span id="moments-heading">Moments</span>
      </Reveal>

      <div className="mt-[clamp(40px,6vw,88px)] flex flex-wrap items-start gap-[clamp(20px,3vw,40px)]">
        <figure className="m-0 flex-[1.45_1_340px]">
          <RevealImage
            src={firstPour.src}
            alt={firstPour.alt}
            objectPosition="50% 50%"
            sizes="(min-width: 860px) 55vw, 100vw"
            className="aspect-[1200/896]"
            parallax={0.06}
            inset={7}
          />
          <Caption time={firstPour.time} label={firstPour.label} />
        </figure>

        <div className="flex flex-[1_1_260px] flex-col gap-[clamp(20px,3vw,40px)] pt-[clamp(0px,14vw,220px)]">
          <Reveal>
            <p className="m-0 font-serif text-[clamp(30px,3.2vw,46px)] leading-[1.1] tracking-[-0.01em] text-cream [text-wrap:pretty]">
              Nothing here is rushed — <em className="italic text-copper">least of all you.</em>
            </p>
          </Reveal>
          <figure className="m-0">
            <RevealImage
              src={roaster.src}
              alt={roaster.alt}
              objectPosition="60% 50%"
              sizes="(min-width: 860px) 35vw, 100vw"
              className="aspect-[1200/896]"
              delay={150}
              parallax={0.1}
              inset={9}
            />
            <Caption time={roaster.time} label={roaster.label} />
          </figure>
        </div>
      </div>

      <div className="mt-[clamp(20px,3vw,40px)] flex flex-wrap items-end gap-[clamp(20px,3vw,40px)]">
        <figure className="m-0 flex-[1_1_240px]">
          <RevealImage
            src={bloom.src}
            alt={bloom.alt}
            objectPosition="50% 50%"
            sizes="(min-width: 860px) 30vw, 100vw"
            className="aspect-[1200/896]"
            parallax={0.08}
            inset={8}
          />
          <Caption time={bloom.time} label={bloom.label} />
        </figure>

        <figure className="m-0 flex-[2.2_1_420px]">
          <RevealImage
            src={elevenSeats.src}
            alt={elevenSeats.alt}
            objectPosition="50% 50%"
            sizes="(min-width: 860px) 60vw, 100vw"
            className="aspect-[1376/768]"
            delay={150}
            parallax={0.06}
            inset={6}
          />
          <Caption time={elevenSeats.time} label={elevenSeats.label} />
        </figure>
      </div>
    </section>
  );
}
