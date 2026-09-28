import { Reveal } from '@/components/motion/reveal';
import { business } from '@/data/business';
import { navItems } from '@/data/nav';

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'Newsletter', href: '#' },
  { label: 'Wholesale', href: '#' },
];

function FooterColumn({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t-2 border-cream pt-5">
      <h3 className="m-0 mb-6 text-xs font-medium uppercase tracking-[.18em] text-copper">
        {label}
      </h3>
      {children}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-espresso">
      <div className="shell pt-[clamp(96px,14vw,200px)] pb-12">
        <Reveal className="flex items-baseline gap-6 border-t-2 border-rule pt-5 text-xs uppercase tracking-[.18em]">
          <span className="text-copper">07</span>
          <span>Get in Touch</span>
        </Reveal>

        <Reveal
          className="mt-[clamp(40px,6vw,72px)] grid gap-x-8 gap-y-12"
          delay={0}
        >
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-x-8 gap-y-12">
            <FooterColumn label="Visit">
              <address className="m-0 text-lg leading-[1.4] text-cream not-italic">
                {business.addressLine1}
                <br />
                {business.addressLine2}
              </address>
              <p className="mt-4 max-w-[220px] text-sm leading-[1.6] text-muted [text-wrap:pretty]">
                {business.locationNote}
              </p>
            </FooterColumn>

            <FooterColumn label="Hours">
              <div className="grid gap-3 text-sm">
                {business.hours.map((row) => (
                  <div key={row.days} className="flex justify-between gap-4">
                    <span className="text-muted">{row.days}</span>
                    <span className="tabular-nums text-cream">{row.time}</span>
                  </div>
                ))}
              </div>
            </FooterColumn>

            <FooterColumn label="Explore">
              <nav aria-label="Footer sections">
                <ul className="m-0 grid list-none gap-3 p-0 text-sm">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="text-cream transition-colors hover:text-copper"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </FooterColumn>

            <FooterColumn label="Connect">
              <ul className="m-0 grid list-none gap-3 p-0 text-sm">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-cream transition-colors hover:text-copper"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href={`mailto:${business.email}`}
                    className="text-copper transition-colors hover:text-cream"
                  >
                    {business.email}
                  </a>
                </li>
              </ul>
            </FooterColumn>
          </div>
        </Reveal>

        <div className="mt-[clamp(48px,8vw,80px)] flex flex-wrap items-center gap-x-10 gap-y-4 border-t-2 border-rule pt-5 text-xs uppercase tracking-[.16em]">
          <span className="text-faint">
            © {business.copyrightYear} {business.name}, {business.city}
            <span aria-hidden="true"> · </span>
            Desarrollado por Aarom
          </span>
          <a
            href="#top"
            className="ml-auto text-cream transition-colors hover:text-copper"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
