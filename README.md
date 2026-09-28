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

## Exploration features (September 28, 2026)
- Direct exhibit links use #exhibit=vsmart (also moca, wefit, adayroi); direct loads and browser Back/Forward are supported. Copy-link failure exposes a selectable URL.
- Compare two different cases, including source-linked ambition, model, turning point, stakeholder effects, and curatorial takeaway. Selecting the same case swaps the previous selection.
- The shared timeline has 14 dated events, per-exhibit filters, source links, and contextual imagery. March 2020 is sorted at month precision; no exact event day is claimed.
- Four hypothetical decision activities show trade-offs and then a cited historical outcome, without scoring or claiming a preventative counterfactual.
- Two accessible numbered annotations per primary exhibit image connect visible elements to the case research.
- Saved exhibits and private notes use browser-local storage with JSON export, per-note clearing and entry removal. No account, server sync or transmission. Storage errors retain session content and offer export.
- EN/VI controls translate museum navigation, dossiers, source descriptions, galleries and learning activities. Original source documents, original image text, proper names and visitor notes remain unchanged. Language preference is browser-local.
- Claim-to-source accordions and an editorial-history entry supplement the existing evidence limits and sources. History begins with this release, not a fabricated earlier log.

Nine unit tests pass, including corrupt notebook handling and bounded restoration. Browser checks cover all eight feature flows, direct routes, history, fallback clipboard, denied storage, note export/removal, bilingual persistence and unaccented Vietnamese search. Layout checked at 1440, 768 and 390 pixels. Keyboard focus wrapping includes notes, links and disclosure controls; screen-reader speech has not been manually audited.

## Collection expansion: BAEMIN Vietnam and Air Mekong
The collection now contains six dossiers, 25 research-source records, 18 authentic source-published images, and 22 timeline entries. Added cases live in `src/data/newCases.ts`, with paired English/Vietnamese text and all supporting source, gallery, decision and annotation data.

BAEMIN distinguishes Vietnam withdrawal from the global brand, the mid-2019 introduction/commercial launch descriptions, and announced settlements from verified completion. Its company farewell is a public LinkedIn source that may require platform access. Air Mekong distinguishes the 2013 flight suspension, the proposed return and the licence-revocation report in January 2015; publication dates are not substituted for exact administrative decision dates. Management interviews and supplier case studies are identified as such.

Routing and notebook restoration now resolve IDs from the exhibit registry. Category/outcome filters deduplicate their options; proposal categories, comparisons and lessons include the expanded collection. The timeline uses month-level sort anchors for mid-2019 and October 2010 without displaying invented exact event days.

Ten unit tests and browser checks cover the expanded data, bilingual content, six new images, all new activities, direct links, comparison, timeline filters, note restoration and search. Layout verified at 1440, 768 and 390 pixels. Photo credits appear in each gallery; no new image reuse licence is asserted.

## GitHub Pages deployment
This React/Vite app must be built before publishing. Do not publish the source `index.html` directly: it references TypeScript that browsers cannot run as a deployed bundle.

1. In GitHub, open **Settings → Pages → Build and deployment → Source**, and choose **GitHub Actions**.
2. Push this project, including `.github/workflows/deploy-pages.yml`, to `main`.
3. Wait for **Deploy FabAgain to GitHub Pages** in the Actions tab to succeed.
4. Open `https://thangl2411.github.io/FabAgain/`.

The workflow installs dependencies from the pnpm lockfile, compiles the app and publishes only `dist`. It reads the site's base path from GitHub Pages metadata; public image links use the same base. Ordinary local and domain-root builds keep `/`. To simulate this repository deployment in PowerShell, set `$env:PAGES_BASE_PATH='/FabAgain/'` before running the build. Clear that variable for domain-root builds.
