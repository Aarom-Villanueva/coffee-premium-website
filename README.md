# Coffee

A premium specialty coffee website concept, rebuilt from an interactive design prototype into a production-quality Next.js implementation. The original was a Claude Design prototype; this repository is a from-scratch rebuild of that design using the App Router, TypeScript, and Tailwind CSS — no design-tool runtime code carried over.

## Overview

Coffee is a single-page marketing site for a fictional specialty coffee shop in Porto. It covers a cinematic hero, the shop's story, three signature coffees, a full menu, a photo gallery, visiting information, and a reservation call-to-action — built as a showcase of editorial, motion-driven web design implemented with modern, production-grade practices rather than a page builder or animation library.

## Key visual & interaction features

- Cinematic hero entrance with a staggered headline reveal and settling image scale
- Scroll-driven hero and image parallax
- Scroll-triggered reveal animations (fade-up and clip-path image wipes) across every section
- Transparent-to-solid navbar transition on scroll
- Desktop navigation with a fullscreen overlay menu on mobile (Escape to close, body scroll lock)
- Signature Coffees: sticky, cross-fading image panel on desktop; per-item inline photos on mobile
- Subtle film grain overlay and square, editorial geometry throughout
- Full `prefers-reduced-motion` support — all motion is skipped, content renders in its final state

## Tech stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (CSS-first `@theme` configuration, no `tailwind.config.ts`)
- **next/image** and **next/font** for image and font optimization
- No animation library (no GSAP, no Framer Motion) — see [Motion system](#motion-system)

## Architecture summary

Server Components by default; a component only becomes a Client Component when it needs to react to something the server can't know ahead of time (scroll position, intersection, hover, viewport width, a click). Static content — copy, images, layout — stays server-rendered and is passed as `children` into small, content-free client wrappers that only add behavior. Page content lives in typed data files rather than being duplicated across markup.

## Project structure

```
app/
  layout.tsx          root layout: fonts, metadata, header, grain overlay
  page.tsx             assembles all sections in order
  globals.css          design tokens, breakpoints, global rules
components/
  layout/              site header, mobile navigation overlay
  motion/               reusable scroll-reveal / parallax primitives
  sections/             one component per page section
  ui/                    small stateless visual atoms (icons)
data/                   typed static content (coffees, menu, moments, nav, business info)
lib/motion/             shared scroll-listener and IntersectionObserver singletons
public/images/          source photography
```

## Motion system

All motion is built on native browser APIs, coordinated through two small shared singletons rather than a per-component listener:

- **A single `requestAnimationFrame`-batched scroll listener** drives every scroll-parallax effect (hero image/copy, image drift, navbar state) — regardless of how many animated elements are on the page, there is exactly one `scroll` listener.
- **A single `IntersectionObserver`** drives every scroll-triggered reveal (fade-up text, clip-path image wipes); each element unobserves itself once it has revealed.
- The hero's one-time entrance animation and the Signature Coffees hover crossfade are handled with plain CSS transitions and `Element.animate`, triggered imperatively.

This kept the animation system to a few hundred lines of plain DOM code with no added runtime dependency, while still sharing infrastructure the way a framework would.

## Responsive behavior

A single custom breakpoint (`860px`) governs the split between desktop and mobile layouts — matching the original design's split between a desktop navigation bar / sticky coffee gallery and a mobile hamburger menu / inline coffee photos. Both layouts exist in the DOM and are toggled with CSS; only the Signature Coffees hover state needs JavaScript, and it has no effect on mobile.

## Accessibility considerations

- Semantic landmarks (`header`, `nav`, `main`, `section`, `address`, `footer`)
- Keyboard-accessible navigation, with Escape closing the mobile menu
- Focus is moved to the mobile menu's close control on open and returned to the trigger on close
- Body scroll is locked while the mobile menu is open
- Visible `:focus-visible` outlines are preserved globally
- Every animated element respects `prefers-reduced-motion`
- Descriptive alt text on all photography; decorative elements are `aria-hidden`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

`npm run build` runs a full TypeScript check and static export of the single route. `npm run lint` runs ESLint (`eslint-config-next`).

## Current demo limitations / placeholders

This is a design and engineering showcase, not a live business. Several elements are intentionally placeholder:

- **Reserve**, **Order Ahead**, **Directions**, and the **Menu PDF** link are non-functional (`#`) — no booking or ordering backend is wired up
- **Instagram**, **Newsletter**, and **Wholesale** links are placeholders, not real accounts or services
- The address, hours, and contact email are design copy carried over from the original prototype, not a real business's details
- No SEO metadata beyond a title and description (no Open Graph image, sitemap, or structured data yet)

## Live demo

_Not yet deployed. This section will be updated with the Vercel deployment URL once available._

## Screenshots

_Screenshots will be added here._

## Credit

Developed by **Aarom**.
