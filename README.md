# AI Learning Ecosystem (Next.js)

A structured AI & Machine Learning learning platform built with Next.js App Router, React, Tailwind CSS, and TypeScript.

## Architecture overview

- **App Router pages (`/app`)**
  - Route-based sections: `start-here`, `roadmap`, `lessons`, `projects`, `notes`, `about`.
  - Dynamic routes for reusable content pages:
    - `app/lessons/[slug]/page.tsx`
    - `app/projects/[slug]/page.tsx`
- **Reusable UI components (`/components`)**
  - `Navbar`, `Footer`, `LessonLayout`, `RoadmapDiagram`, `ProjectCard`, `CodeBlock`.
  - `InteractiveVisualizations` provides beginner-friendly math/ML visual tools.
- **Content data (`/data`)**
  - `lessons.json` and `projects.json` power list pages and dynamic detail pages.
- **Styling (`/styles/globals.css`)**
  - Tailwind CSS with a clean minimalist design and dark mode default.
- **Static assets (`/public`)**
  - Downloadable notes PDF at `public/downloads/ml-complete-notes.pdf`.

## Learning path

Python → Mathematics → Machine Learning → Deep Learning → AI Systems

## Run locally

```bash
npm install
npm run dev
```

## Build and quality

```bash
npm run lint
npm run build
```
