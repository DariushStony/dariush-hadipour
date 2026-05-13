# Dariush Hadipour — Portfolio

A comic-book themed portfolio built with Vite + React 18 + TypeScript. Halftones, ink, starbursts, panel grids, speech bubbles.

**Live:** [dariushstony.github.io/dariush-hadipour](https://dariushstony.github.io/dariush-hadipour/)

## Getting started

```bash
pnpm install
pnpm dev
```

Then open <http://localhost:5173>.

## Scripts

```bash
pnpm dev          # dev server
pnpm build        # production build → dist/
pnpm preview      # preview the production build locally
pnpm type-check   # TypeScript check (no emit)
pnpm lint         # ESLint
pnpm format       # Prettier
```

## Structure

```
src/
├── domain/
│   └── types.ts                       # All shared types (Work, Era, TweakSettings…)
├── data/
│   ├── site.ts                        # Personal info, nav links, social links
│   └── works.ts                       # WORKS array, SKILLS, PANEL_LAYOUT
├── application/
│   ├── context/
│   │   └── theme-context.tsx          # Era / halftone / cursor state → document.body.dataset
│   └── hooks/
│       ├── use-cursor.ts              # RAF mouse-follow cursor
│       ├── use-key-down.ts            # Generic keydown hook
│       └── use-panel-hover.ts         # Panel hover detection
├── presentation/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── starburst.tsx          # POW! / BAM! / ZAP! badge
│   │   │   ├── cursor.tsx             # Custom comic cursor
│   │   │   ├── panel-stat-display.tsx # Stat number + label block
│   │   │   └── tweaks-panel.tsx       # Floating ⚙ panel (era / halftone / cursor)
│   │   ├── masthead.tsx               # Sticky top bar
│   │   ├── cover.tsx                  # Hero / front cover (Page 01)
│   │   ├── work.tsx                   # Selected works panel grid (Page 02)
│   │   ├── origin.tsx                 # About / origin story (Page 03)
│   │   ├── principles.tsx             # Design manifesto (Page 04)
│   │   ├── contact.tsx                # Contact splash (Page 05)
│   │   └── project-modal.tsx          # Case-study overlay (Esc to close)
│   └── styles/
│       ├── index.scss                 # Imports all partials
│       ├── _variables.scss            # CSS custom properties + era palettes
│       ├── _reset.scss
│       ├── _base.scss
│       ├── _cursor.scss
│       ├── _layout.scss
│       ├── _masthead.scss
│       ├── _cover.scss
│       ├── _starburst.scss
│       ├── _work.scss
│       ├── _origin.scss
│       ├── _principles.scss
│       ├── _contact.scss
│       ├── _modal.scss
│       ├── _tweaks.scss
│       └── _responsive.scss
├── App.tsx                            # Root shell (default export)
└── main.tsx                           # Vite entry point
```

## Customising

- **Personal info** — edit `src/data/site.ts` (name, email, links, company, timezone…)
- **Projects** — edit the `WORKS` array in `src/data/works.ts`
- **Skills** — edit the `SKILLS` array in `src/data/works.ts`
- **Palette / era** — edit CSS variables in `src/presentation/styles/_variables.scss`
- **Design principles** — edit the `PRINCIPLES` array in `src/presentation/components/principles.tsx`

## Deployment

Deployed automatically to GitHub Pages via GitHub Actions on every push to `main`.
Workflow: `.github/workflows/deploy.yml`

## Tech

- Vite 5 · React 18 · TypeScript (strict)
- SCSS partials via `sass`
- ESLint (flat config) + Prettier
- pnpm

## Fonts

Loaded from Google Fonts — Bowlby One, Bangers, Special Elite, Comic Neue, Space Grotesk.
