# Ylva Landoff Lindberg - Personal Website

Welcome to my personal website repository! This is a space where I showcase my visual art and creative work.

🌐 **Live Website:** [ylvalandofflindberg.com](https://ylvalandofflindberg.com/)

## Overview

This site is my personal portfolio, showcasing visual art, code projects, video, and contact details. It's built with modern web tools and designed for a smooth, responsive experience.

## Technology Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Styled Components (with SSR registry)
- **Content Management:** Contentful CMS
- **Language:** TypeScript
- **UI Components:** Material-UI (MUI) icons and image grid
- **Media:** React Player for video content
- **Responsive Design:** React Responsive

## Development

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build the application
npm run build

# Start the production server
npm start

# Lint
npm run lint
```

### Environment variables

Contentful access is configured via a `.env` file (see `src/lib/contentfulServer.ts`):

- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_DELIVERY_TOKEN`
- `CONTENTFUL_PREVIEW_TOKEN`
- `CONTENTFUL_IS_PREVIEW` (optional, `true`/`false`)

## Project Structure

- `/src/app` - Next.js App Router pages and layouts (`art`, `code`, `contact`, `cv`, `video`)
- `/src/components` - Reusable UI components
- `/src/styles` - Global styles (`globals.css`) and shared styled-components
- `/src/lib` - Contentful client and data fetching
- `/src/context` - React context providers
- `/src/data` - Static data and configurations
- `/src/types` - Shared TypeScript types
- `/public` - Static assets and images

Each page is split into a server component (`page.tsx`) that fetches Contentful data and a client component (`*Client.tsx`) that handles rendering and interactivity.

## Features

- Responsive design for all device sizes
- Dynamic content management through Contentful
- Image and video galleries
- Contact information
- Portfolio sections for different art categories

## License

All rights reserved. The code and artwork in this repository are proprietary.
