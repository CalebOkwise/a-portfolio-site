# AGENTS.md

## Project Overview

This project is a modern personal brand portfolio for **Pete McPherson** (digital marketer + web developer), built as a conversion-focused landing experience with newsletter capture as a core goal.

Primary goals:

1. Clearly communicate Pete's positioning and value.
2. Capture newsletter subscribers with a simple email form.

Tech stack:

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Poppins** font via `next/font/google`

---

## Current File Structure

```txt
/
  AGENTS.md
  package.json
  tsconfig.json
  next.config.ts
  next-env.d.ts
  eslint.config.mjs
  postcss.config.mjs
  tailwind.config.ts
  .gitignore
  /src
    /app
      globals.css
      layout.tsx
      page.tsx
      /about
        page.tsx
      /projects
        page.tsx
    /components
      navbar.tsx
      footer.tsx
      newsletter-form.tsx
      project-card.tsx
    /data
      projects.ts
```

---

## Pages Implemented

### Home (`src/app/page.tsx`)

Includes:

- Hero section with bold value proposition
- Intro positioning copy for Pete
- Primary CTA button
- Newsletter signup section
- Featured projects preview grid
- Conversion-focused layout and spacing

### About (`src/app/about/page.tsx`)

Includes:

- Pete's story/journey
- What he does (marketing + web dev)
- Philosophy/approach section
- Newsletter CTA

### Projects (`src/app/projects/page.tsx`)

Includes:

- Results-oriented intro copy
- Grid of project cards
- Each card has title, description, outcome, placeholder image label, and link
- Newsletter CTA at bottom

---

## Reusable Components

### `src/components/navbar.tsx`

- Sticky top navigation
- Horizontal menu styling
- Explicit no-bullets rendering
- Active route highlighting using `usePathname()`

### `src/components/footer.tsx`

- Minimal brand-supporting footer copy
- Consistent spacing and subdued styling

### `src/components/newsletter-form.tsx`

- Email-only form (no backend)
- Reusable title/description props
- Styled input + CTA button with modern focus and hover states

### `src/components/project-card.tsx`

- Reusable card for project display
- Gradient placeholder image area
- Result callout block
- Subtle hover elevation and transition

---

## Styling & Design Decisions

Global styles are in `src/app/globals.css`.

Applied design system principles:

- Clean whitespace-first layout
- Soft card surfaces with rounded corners
- Minimal color palette (blue primary + slate neutrals)
- Subtle shadows and hover transitions
- Gentle fade-in animation utilities (`soft-fade-in`, `soft-fade-in-delay`)
- Improved readability through line-height and spacing rhythm

Typography:

- Poppins configured in `src/app/layout.tsx`
- Strong heading hierarchy with clean body text

---

## Tailwind Setup Notes

The project initially used a Tailwind v4-style import path, but utilities were not rendering reliably in this environment.

Final stable setup uses:

- `tailwindcss` v3
- `postcss`
- `autoprefixer`
- `postcss.config.mjs`
- `tailwind.config.ts`
- `@tailwind base/components/utilities` directives in `globals.css`

This is the active and working configuration.

---

## Dev Server Notes

- Default dev command: `npm run dev`
- In this environment, port `3000` was occupied, so dev server bound to `3001`.
- Current local URL during testing: `http://localhost:3001`

If styles appear stale after edits, perform a hard refresh:

- Windows: `Ctrl + F5`

---

## Content/Tone Guidelines Used

Content uses realistic placeholder copy (no lorem ipsum), with tone:

- Confident
- Modern
- Slightly conversational
- Outcome-focused

Positioning emphasis:

- Results-driven digital marketer
- Skilled web developer
- Focus on growth, conversion, and transformation

---

## What Was Improved in Polish Passes

1. Initial full site scaffold with reusable components and 3 required pages.
2. Tailwind pipeline fix for reliable utility generation.
3. UI enhancement pass for stronger modern look (hero card, cleaner depth, richer button/card states).
4. Final premium polish pass:
   - Active nav highlight
   - Explicit list-style reset to avoid bullet nav
   - Better typography rhythm
   - Subtle entrance animations
   - Footer refinement

---

## Constraints and Intent

- No backend implementation
- No CMS
- No database
- Newsletter form is front-end only, ready for future integration
- Focused on performance, clarity, and conversion-oriented UX

