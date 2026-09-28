import { Reveal } from '@/components/motion/reveal';
import { ArrowUpRightIcon } from '@/components/ui/icons';
import { menuSections } from '@/data/menu';

export function Menu() {
  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="shell pt-[clamp(120px,16vw,240px)]"
    >
      <Reveal className="flex items-baseline gap-6 border-t-2 border-rule pt-5 text-xs uppercase tracking-[.18em]">
        <span className="text-copper">03</span>
        <span>The Menu</span>
      </Reveal>

      <div className="mt-[clamp(40px,6vw,88px)] mb-[clamp(48px,6vw,96px)] flex flex-wrap items-end gap-8 gap-x-[clamp(40px,6vw,96px)]">
        <Reveal className="min-w-[420px] flex-1">
          <h2
            id="menu-heading"
            className="m-0 font-serif text-[clamp(40px,6.2vw,96px)] leading-[1.02] tracking-[-0.02em] text-cream"
          >
            Served at <em className="italic text-copper">the counter.</em>
          </h2>
        </Reveal>
        <Reveal delay={120} className="grid max-w-[360px] flex-none gap-4">
          <p className="m-0 text-[15px] text-muted [text-wrap:pretty]">
            The list changes with the harvest. Oat or whole milk from Quinta do Vale, at no
            charge. Prices in euros.
          </p>
          <a
            href="#"
            className="flex items-center justify-between gap-5 border-t-2 border-b-2 border-rule py-3.5 text-xs uppercase tracking-[.16em] text-cream transition-colors hover:text-copper"
          >
            Full menu, PDF <ArrowUpRightIcon />
          </a>
        </Reveal>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,290px),1fr))] gap-x-[clamp(32px,4vw,64px)] gap-y-14">
        {menuSections.map((section, i) => (
          <Reveal key={section.title} delay={i * 120} className="border-t-2 border-cream pt-5">
            <h3 className="m-0 mb-7 text-xs font-medium uppercase tracking-[.18em] text-copper">
              {section.title}
            </h3>
            <div className="grid gap-6">
              {section.items.map((item) => (
                <div key={item.name} className="flex items-baseline gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="font-serif text-[26px] leading-[1.1] text-cream">
                      {item.name}
                    </div>
                    <div className="text-sm text-muted">{item.description}</div>
                  </div>
                  <span className="text-[15px] tabular-nums text-cream">{item.price}</span>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
