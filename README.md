# My Portfolio (Vite + React)

Personal portfolio site built with Vite, React 18, PrimeReact, PrimeFlex, and PrimeIcons.

## Requirements

- Node.js 18+ (recommended)
- npm

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production (outputs to `dist/`):

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

- `index.html` – Vite entry HTML
- `src/` – React app source
  - `src/components/` – shared UI components (e.g. navbar)
  - `src/sections/` – page sections (hero, about, services, portfolio, footer)
  - `src/data/` – static data (e.g. portfolio projects)
  - `src/utils/` – helpers/utilities
- `public/` – static assets served as-is
  - `public/assets/` – images and video referenced as `/assets/...`

## Assets

This app references assets via absolute paths like `/assets/images/...` and `/assets/video/...`.
Place files under `public/assets/` to make them available at runtime.

## Deployment

Deploy the contents of `dist/` to any static host.

Examples:

- GitHub Pages: build and publish `dist/`
- Netlify/Vercel: build command `npm run build`, output directory `dist`

