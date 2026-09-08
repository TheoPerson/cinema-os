# Roadmap

Agents should implement vertically. A phase is complete when the feature works, is tested, and meets visual/accessibility basics.

## Phase 0 — Foundation
- [ ] Next.js app boots
- [ ] TypeScript strict
- [ ] Tailwind v4
- [ ] global tokens
- [ ] lint/typecheck/test scripts
- [ ] env validation
- [ ] PostgreSQL + Drizzle
- [ ] Better Auth
- [ ] protected product shell
- [ ] CI

Exit: authenticated owner can reach an empty private app.

## Phase 1 — TMDB + Movie Foundation
- [ ] TMDB client
- [ ] movie search
- [ ] metadata normalization
- [ ] image helpers
- [ ] movie local cache/upsert
- [ ] external IDs
- [ ] error/failure states

Exit: title search returns polished movie cards.

## Phase 2 — Library + Viewings
- [ ] library entry
- [ ] add/remove watchlist
- [ ] favorite
- [ ] log viewing
- [ ] `/10` rating
- [ ] cinema/home
- [ ] VO/VOSTFR/VF/OTHER
- [ ] rewatch
- [ ] library filters
- [ ] recent viewings

Exit: complete personal history can be created without AI.

## Phase 3 — Movie Page Showcase
- [ ] hero composition
- [ ] backdrop/poster
- [ ] metadata
- [ ] IMDb provider interface
- [ ] personal score
- [ ] actions
- [ ] viewing history
- [ ] artwork palette
- [ ] responsive mobile layout
- [ ] poster -> movie transition prototype
- [ ] reduced-motion version

Exit: Movie Page is portfolio-quality and fully useful.

## Phase 4 — Quick Add / Bulk Population
- [ ] multi-select search results
- [ ] bulk add library
- [ ] optional mark-watched flow
- [ ] progressive enrichment
- [ ] duplicate safety

Exit: owner can populate hundreds of movies efficiently.

## Phase 5 — Unified Search
- [ ] command/search overlay
- [ ] keyboard shortcuts
- [ ] exact search
- [ ] personal filters
- [ ] deterministic natural filter parser
- [ ] result reflow motion
- [ ] mobile search UX

Exit: search is the main product command surface.

## Phase 6 — AI Layer
- [ ] AIProvider abstraction
- [ ] structured intent schema
- [ ] session context
- [ ] tool registry
- [ ] validated safe actions
- [ ] structured UI blocks
- [ ] cost/router rules
- [ ] quota/failure degradation

Exit: conversational refinements and actions work without a traditional chat page.

## Phase 7 — Stats
- [ ] totals
- [ ] monthly trend
- [ ] cinema/home
- [ ] languages
- [ ] genres
- [ ] directors
- [ ] actors
- [ ] decades
- [ ] countries
- [ ] rewatch rate
- [ ] performant aggregation queries
- [ ] editorial visualization

## Phase 8 — Motion & Pointer Refinement
- [ ] ambient pointer
- [ ] selective magnetism
- [ ] poster tilt
- [ ] dynamic artwork accents
- [ ] route view transitions
- [ ] smooth reflow
- [ ] touch mapping
- [ ] high-refresh performance audit
- [ ] reduced-motion audit

## Phase 9 — PWA / Production
- [ ] manifest
- [ ] icons
- [ ] install test iOS
- [ ] safe areas
- [ ] production DB
- [ ] production auth hardening
- [ ] rate limits
- [ ] security headers
- [ ] web vitals
- [ ] deployment
- [ ] backup/export path for personal data

## Later
- Letterboxd import
- IMDb import
- custom lists
- notifications
- cinema showtimes
- native app
- social features only if product direction changes
