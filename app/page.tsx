import { Hero } from '@/components/sections/hero';
import { Story } from '@/components/sections/story';
import { SignatureCoffees } from '@/components/sections/signature-coffees';
import { Menu } from '@/components/sections/menu';
import { Moments } from '@/components/sections/moments';
import { Visit } from '@/components/sections/visit';
import { Reserve } from '@/components/sections/reserve';
import { SiteFooter } from '@/components/sections/site-footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Story />
        <SignatureCoffees />
        <Menu />
        <Moments />
        <Visit />
        <Reserve />
      </main>
      <SiteFooter />
    </>
  );
}
