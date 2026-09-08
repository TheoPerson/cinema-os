# Settled Decisions

This file records decisions that should not be reopened casually by coding agents.

## D-001 — Standalone product
**Decision:** CINEMA OS is a new standalone application, not `/movies` inside another project.

## D-002 — V1 is single-user
**Decision:** Product UX is for the owner only.

Schema retains user boundaries for safety/future expansion.

## D-003 — Real authentication
**Decision:** Private login/security is mandatory.

## D-004 — Movie != viewing
**Decision:** Model movies separately from viewing events.

## D-005 — Personal rating
**Decision:** `/10`, decimal-capable.

## D-006 — External rating
**Decision:** Show IMDb rating separately when a legitimate source is available.

Never relabel another source as IMDb.

## D-007 — Viewing fields
**Decision:** date, cinema/home, language, personal rating, rewatch.

## D-008 — Watchlist
**Decision:** included in V1.

## D-009 — Favorites
**Decision:** simple favorite/heart in V1, not arbitrary custom lists.

## D-010 — AI capability
**Decision:** AI may search, query personal data and perform validated actions.

## D-011 — AI context
**Decision:** session context only for V1, not permanent AI memory.

## D-012 — AI hosting
**Decision:** cloud only. No local model dependency.

## D-013 — Search source
**Decision:** TMDB + personal DB.

## D-014 — Initial population
**Decision:** start mostly from scratch. Prioritize Quick Add / Bulk Add rather than complex import integrations.

## D-015 — Stats
**Decision:** advanced stats are desirable in V1 if core foundations make them inexpensive.

## D-016 — Design ownership
**Decision:** visual direction is owned by the implementation team/agent under the Cinematic Editorial brief, not selected from a template.

## D-017 — Mobile
**Decision:** responsive web + installable PWA.

## D-018 — Backend topology
**Decision:** one Next.js full-stack app in V1. No separate backend service.

## D-019 — Core visual signatures
**Decision:** Movie Page, unified Search/AI, and poster-to-movie transitions receive the highest visual investment.

## D-020 — Desktop pointer identity
**Decision:** subtle ambient pointer + selective magnetic/tilt interactions are signature behavior, with strict performance/accessibility constraints.

## D-021 — Visual anti-pattern
**Decision:** do not output a generic shadcn/SaaS dashboard aesthetic.
