# Mariano (Yano) Perdices: portfolio

Personal site, live at https://mariano-perdices.vercel.app

Built with Next.js 15 (App Router) and plain CSS. No UI framework.

## Editing content

Everything personal lives in two files:

- `src/data/profile.ts`: intro, experience, education, awards, certifications, skills, and the timeline chart data
- `src/data/projects.ts`: project cards and the `/work/[slug]` case-study pages

Project images go in `public/images/projects/<project>/`.

## Running locally

```bash
npm install
npm run dev
```

Pushing to `main` deploys to production on Vercel; other branches get preview URLs.
