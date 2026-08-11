@AGENTS.md

# ylva-homepage-next

Personal portfolio for Ylva Landoff Lindberg. Next.js 16 App Router, TypeScript, styled-components.

## Stack

- Next.js 16 (App Router)
- TypeScript
- styled-components with SSR registry (`src/app/registry.tsx`)
- Contentful CMS for art, video and CV content
- MUI for icons and image grid on the art page

## Architecture

Pages are split into a server component (`page.tsx`) that fetches Contentful data,
and a client component (`*Client.tsx`) that handles rendering and interactivity.

## Conventions

- Styled-components files are `.ts` (except `src/styles/globalStyledComponents.tsx`)
- Colors are CSS variables defined in `src/styles/globals.css`, not ThemeProvider
- CSS variables cannot be used inside `@media` queries in styled-components — hardcode breakpoints (991px, 820px, 520px)
- Keyframe animations: use block-level css interpolation, not inline value interpolation
- All components with event handlers have `"use client"`

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
