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
- `src/data/images.ts`: authentic image paths, English descriptions, captions and linked source credits.
- `public/images/`: images published by Vingroup, Grab Vietnam, VietNamNet and SAI Digital. Original text is preserved; display captions are English. Existing generated assets are unused.
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


## Source images

The current site uses real source-published imagery, not generated replacements. Source URLs and publisher credits appear beside each image and in each story. Source publication is verified; no open reuse license or separate republication permission has been established. Attribution does not imply a license grant. The site remains owner-private.

## Expanded case research

Edit long-form dossiers in src/data/research.ts: timelines, paragraph-level citations, evidence distinctions and explicit unknowns. Each case has four cited sources (16 in total). src/data/exhibits.ts retains collection-card metadata, original source records and curatorial questions. Its original short story fields remain background data and are not displayed in the dossier.

Research reviewed September 28, 2026. This is desk research, not interviews, internal financial analysis or a legal investigation. Moca reconciles conflicting dates against the original announcement and a December 2024 follow-up. WeFit distinguishes a reported petition from a court ruling. Adayroi distinguishes suspension from planned integration. VinSmart market commentary is attributed rather than treated as an audited cause.

Six automated tests cover search, proposal validation and citation completeness. Native WebMCP and screen-reader testing remain unverified. Image source publication is verified; separate republication permission has not been established.

## Exhibit visual archives
Each research dossier contains a three-image gallery (12 source-published images total), with descriptive captions, source links, thumbnails, previous/next controls, and full-size image links. Additional photographs show manufacturing, payments in use, service venues, historical notices and shopping interfaces. Image metadata is in `src/data/galleries.ts`; optimized local assets are in `public/images`. Source publication and attribution do not establish an open reuse license. The existing owner-only audience is preserved.
