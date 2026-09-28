import type { Metadata } from 'next';
import { Archivo, Instrument_Serif } from 'next/font/google';
import { SiteHeader } from '@/components/layout/site-header';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Coffee — Specialty Coffee, Porto',
  description:
    'Single-origin coffee, roasted in small lots and poured by hand at a counter of eleven seats in Porto.',
};

const GRAIN_OVERLAY =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${archivo.variable} ${instrumentSerif.variable}`}>
      <body className="bg-espresso font-sans text-cream antialiased">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[90] opacity-[.07]"
          style={{ backgroundImage: `url('${GRAIN_OVERLAY}')` }}
        />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
