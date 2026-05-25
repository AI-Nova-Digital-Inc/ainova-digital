# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server at 0.0.0.0 (access via localhost)
npm run build    # production build → dist/
npm run preview  # preview dist/ locally
```

No test runner configured.

## Stack

- **React 19** + **TypeScript** — all components are `.tsx`
- **Vite 7** bundler with `@vitejs/plugin-react`
- **Tailwind CSS v4** via `@tailwindcss/vite` (no `tailwind.config.js` — configured in CSS)
- **shadcn/ui** component library in `src/components/ui/`
- **wouter** for routing (not react-router)
- **@tanstack/react-query** for async state (QueryClient in `App.tsx`)
- **framer-motion** for animations
- **lucide-react** for icons
- Path alias `@/` maps to `src/`

## Architecture

Single-page marketing site. One page (`Home`) composed of ordered sections.

```
src/
  main.tsx          # createRoot entry
  App.tsx           # QueryClientProvider + TooltipProvider + wouter Router
  index.css         # Tailwind directives + global styles + CSS variables
  pages/
    Home.tsx        # assembles all sections in order
    not-found.tsx   # 404 fallback
  sections/         # full-width page sections (Hero, Services, … Contact)
  components/
    Navbar.tsx
    Footer.tsx
    CustomCursor.tsx
    ParticleBackground.tsx
    ui/             # shadcn/ui primitives — do not hand-edit
  hooks/
    use-mobile.tsx
    use-toast.ts
  lib/
    utils.ts        # cn() helper (clsx + tailwind-merge)
```

**Section order in Home.tsx:** Hero → Services → Industries → Portfolio → Process → WhyUs → Pricing → Testimonials → FAQ → Contact

## Key conventions

- `cn()` from `@/lib/utils` for conditional className merging
- Dark background: `#0b1220` set inline on the root `<div>` in `Home.tsx`
- `ParticleBackground` renders a canvas overlay behind all sections
- `CustomCursor` replaces the default OS cursor site-wide
- Contact form submits to Formspree endpoint `/f/mykoyzgv`
- `wouter` base path set from `import.meta.env.BASE_URL` to support subdirectory deploys
- No TypeScript strict errors expected — build must pass `vite build` cleanly
