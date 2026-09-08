# CINEMA OS

> A private, cinematic, AI-native personal movie history.

CINEMA OS is a standalone personal web app for logging movies, remembering every viewing, building a watchlist, exploring personal statistics, and searching both TMDB and the user's own cinema history through one natural-language search surface.

The product is intentionally **not** a Letterboxd clone, Netflix clone, dashboard, or generic "AI chatbot with movie cards". It should feel like a premium editorial cinema product with world-class interaction design.

## North star

**Your personal history of cinema.**

The user should be able to:
1. Find a movie fast.
2. Log a viewing in under 10 seconds.
3. See a beautiful movie page that feels cinematic.
4. Ask natural-language questions across TMDB + personal history.
5. Let the AI perform safe actions such as adding a movie to the watchlist or logging a viewing.
6. Build a useful, increasingly rich personal cinema archive over years.

## Read this first if you are an AI coding agent

Read these files in this order before coding:

1. [`AGENTS.md`](./AGENTS.md) — operating contract and non-negotiables
2. [`PROJECT.md`](./PROJECT.md) — executive project context
3. [`docs/PRD.md`](./docs/PRD.md) — product requirements
4. [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) — technical architecture
5. [`docs/DESIGN_SYSTEM.md`](./docs/DESIGN_SYSTEM.md) — visual/UI direction
6. [`docs/MOTION.md`](./docs/MOTION.md) — interaction and animation system
7. [`docs/DATA_MODEL.md`](./docs/DATA_MODEL.md) — domain model
8. [`docs/AI.md`](./docs/AI.md) — AI search/tool architecture
9. [`docs/SCREENS.md`](./docs/SCREENS.md) — screen-by-screen behavior
10. [`docs/ROADMAP.md`](./docs/ROADMAP.md) — implementation order
11. [`docs/DECISIONS.md`](./docs/DECISIONS.md) — settled decisions; do not reopen casually

If these docs conflict, precedence is:

`AGENTS.md > DECISIONS.md > PRD.md > ARCHITECTURE.md > DESIGN_SYSTEM.md/MOTION.md > ROADMAP.md > code comments`

## Current product scope

### V1
- Real private login, single-user product
- TMDB-backed movie discovery
- Personal library
- Movie pages
- Watchlist
- Favorite
- `/10` personal rating
- IMDb rating shown when available from a lawful/reliable source
- Multiple viewings per movie
- Viewing fields: date, cinema/home, language, personal rating, rewatch
- Quick Add / bulk initial library population
- AI-native search with short-lived conversation context
- AI actions with explicit server-side validation
- Advanced personal stats
- Responsive PWA
- Premium cinematic UI
- Mouse-driven ambient/magnetic interactions on desktop
- Touch-native interaction model on mobile

### Explicitly not V1
- Public profiles
- Social feed
- Friends/follows
- Native iOS application
- Complex cinema showtime scraping
- Community reviews
- Multi-tenant product UX

## Stack

- Next.js 16 Active LTS / App Router
- React 19
- TypeScript strict
- Tailwind CSS v4 + substantial custom CSS
- Base UI / shadcn-style local primitives, visually bespoke
- Motion for React as the primary animation engine
- GSAP only for exceptional cinematic sequences
- Lenis only where smooth scrolling materially improves desktop experience
- View Transition API + Motion for shared-element page transitions
- PostgreSQL
- Drizzle ORM v1
- Better Auth 1.7+
- Zod
- TMDB API
- Cloud-only AI provider behind a provider abstraction
- Vitest + Playwright
- Vercel-friendly deployment
- PWA

The versions above reflect the September 2026 architecture choice. Security releases should always override documentation pinning.

## Development

```bash
cp .env.example .env.local
pnpm install
pnpm db:generate
pnpm db:migrate
pnpm dev
```

Then open `http://localhost:3000`.

## AI agent entry point

If using Codex, Claude Code, Cursor, Windsurf, Antigravity, or another coding agent:

> Read `AGENTS.md` completely, then execute `docs/ROADMAP.md` from Phase 0 onward. Do not redesign the product, replace the visual direction with a generic dashboard, or bypass the domain model.
