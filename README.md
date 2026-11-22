# LUMA Life

An Arabic, right-to-left informational website for LUMA Life. It introduces
the brand and its physical 90-day notebook, and provides static guidance for
using the notebook, its printed scoreboard, and optional digital resources.
The website does not collect personal information, track activity, or process
purchases.

## Routes

- `/` — Brand introduction and notebook overview
- `/about` — Brand purpose, mission, vision, and values
- `/scoreboard` — Static reference for the confirmed category totals
- `/qr-guide` — Mobile-first directory of digital tools that complement the notebook

## Project structure

- `app/` — Next.js routes, root layout, metadata, and global styles
- `components/` — Shared layout and presentation components
- `features/` — Page sections grouped by website feature
- `data/` — Static company, notebook, navigation, guide, and scoreboard content
- `features/qr-guide/data/` — Static resource listings grouped by notebook category

## Development

```bash
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

The scoreboard values live in `data/scoreboard.data.ts`. Add only values
verified against the printed scoreboard source; the site intentionally does
not calculate or store scores.
