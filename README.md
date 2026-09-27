# FabAgain

An English-language digital exhibition created and curated by FABCOM, Vietnam. React, TypeScript and Vite; no backend. The visual identity is a proposed direction, not an established FABCOM brand standard.

## Run locally

Install Node.js 24 and pnpm 11, then run from this directory:

```sh
pnpm install
pnpm dev
```

Open the local URL printed by Vite. Production and verification:

```sh
pnpm build
pnpm lint
pnpm test
pnpm exec vite preview --configLoader runner
```

## Editing

- `src/data/exhibits.ts`: typed exhibit records, story sections, dates, source metadata and illustration credits. Keep factual claims attributed and reflections clearly identified.
- `src/App.tsx`: branding, navigation, introductory copy, lesson themes and editorial approach.
- `src/styles.css`: design tokens, typography, responsive layouts and reduced-motion rules.
- `public/favicon.svg`: original typographic favicon.
- `public/artifacts.webp` and the four individual `.webp` exhibit images: original AI-generated symbolic still life. Not a historical product photograph, screenshot, logo or authenticated artifact. Each exhibit has its own representative object illustration.
- `src/lib/search.ts`: accent-insensitive search and combined filters.
- `src/lib/storage.ts`: proposal validation, local storage and JSON export.
- `src/components`: accessible native dialog and proposal form.

## Editorial scope

The four supplied sources and conceptual reference were opened and reviewed on September 27, 2026. Story panels attach the relevant source, publication date and supported claims. The source set is intentionally limited: announcements do not independently verify completion, customer outcomes or current company status. The collection does not characterize all Vietnamese innovation.

## Privacy and limitations

Proposals stay in the browser's local storage until deleted. No proposal is transmitted to FABCOM; JSON export is a local download. Storage failures preserve the current form and export capability. No authentication, CMS, payment service or submission backend is included. Fonts are requested from Google Fonts, with system-font fallbacks. Illustrations are bundled locally.

Native HTML dialog supports focus containment, Escape, scroll locking and focus restoration. Optional WebMCP filtering is feature-detected; unsupported browsers retain all ordinary controls. Screen-reader testing and testing across multiple browser engines have not been performed.

## Verification

TypeScript, ESLint, production build and five automated unit tests passed. Browser automation used headless Microsoft Edge at desktop (1440), tablet (768) and mobile (390) widths. Checks cover overflow, mobile navigation, combined filters, empty state, reset, random selection, all four dialogs, keyboard focus and Escape, scroll locking, validation, draft save/restore/export/delete and reduced motion. Storage-blocked behavior and export were also verified. Source URLs were opened during editorial review.

