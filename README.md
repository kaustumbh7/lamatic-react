# lamatic-react

A minimal React starter: **React 19 + TypeScript + Vite + Tailwind CSS v4 + shadcn/ui**.

## Stack

| Piece | Notes |
| --- | --- |
| Vite | dev server + build (`@vitejs/plugin-react`) |
| TypeScript | `@/*` path alias → `./src/*` |
| Tailwind CSS v4 | via `@tailwindcss/vite` — no `tailwind.config.js`, theming lives in CSS variables |
| shadcn/ui | Radix-backed components, `nova` preset (Geist font, Lucide icons), neutral base color |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

## Scripts

```bash
npm run dev      # start the dev server
npm run build    # tsc -b && vite build
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Layout

```
src/
  App.tsx            demo page (card, input, label, buttons, dark-mode toggle)
  main.tsx           entry point
  index.css          @import "tailwindcss" + shadcn theme tokens (:root / .dark)
  lib/utils.ts       cn() helper
  components/ui/     button, card, input, label
components.json      shadcn config
vite.config.ts       Tailwind plugin + "@" alias
```

## Adding components

```bash
npx shadcn@latest add dialog dropdown-menu table
```

## Theming

Colors are CSS variables in `src/index.css` under `:root` and `.dark`. Dark mode is
toggled by adding the `dark` class to `<html>` — `App.tsx` does this from local state;
swap in a context/localStorage provider if you want it to persist.
