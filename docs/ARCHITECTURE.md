# Architecture

## High-level

```text
Desktop Browser / iPhone PWA
            |
            v
        Next.js App
   +--------+---------+
   |        |         |
   v        v         v
Better   Services   AI Router
Auth       |          |
           |          +------ Cloud AI Provider
           |
   +-------+----------+
   |                  |
PostgreSQL           TMDB
(Drizzle)        external metadata
```

## Principles

1. **One deployable application in V1.**
2. Server Components by default.
3. Client boundaries exist only for real interaction.
4. Domain services own mutations.
5. Route handlers/server actions validate via Zod.
6. AI tools call domain services, never raw database mutations.
7. External movie metadata and personal history are modeled separately.
8. Provider abstractions exist for unstable external services.

## Suggested source layout

```text
src/
  app/
    (auth)/
    (product)/
      home/
      library/
      search/
      stats/
      movie/[tmdbId]/
    api/
  components/
    cinema/
    movie/
    search/
    motion/
    stats/
    ui/
  features/
    library/
    viewings/
    watchlist/
    favorites/
    search/
    ai/
    stats/
  lib/
    auth/
    db/
    tmdb/
    ai/
    validation/
    motion/
  styles/
```

Do not over-enforce folder ideology. Keep feature ownership obvious.

## Data flow

### Read movie page

1. route receives TMDB ID
2. server queries local movie record
3. server queries user's library/viewings
4. movie metadata loaded from local cache or TMDB
5. page renders Server Component shell
6. interactive controls hydrate independently

### Log viewing

1. client submits form
2. server authenticates
3. Zod validates payload
4. viewing service resolves movie/library record
5. transaction creates viewing + updates derived fields if required
6. affected cache paths/tags revalidate
7. optimistic UI can settle to server result

### AI action

1. user message hits unified search
2. router determines deterministic vs AI path
3. LLM returns structured intent/tool call
4. tool payload validated
5. permission enforced
6. domain service executes
7. typed result converted to UI blocks
8. concise natural-language acknowledgement only when useful

## Database

PostgreSQL.

Use Drizzle v1 schemas and migrations.

Recommended hosting should remain adapter-friendly:
- local PostgreSQL in development
- Neon/Vercel Postgres/Supabase Postgres-compatible production are acceptable
- do not tightly couple domain code to host-specific APIs

## Authentication

Better Auth 1.7+.

V1 target:
- email/password or secure magic-link/passkey depending implementation simplicity
- single known owner
- session-backed private routes
- rate limiting for auth routes

Schema still includes `userId` everywhere personal state exists.

## TMDB

TMDB supplies:
- movie identity
- titles
- artwork
- runtime
- genres
- credits
- release metadata
- external IDs

Store the TMDB ID as canonical external key.

Caching:
- cache metadata server-side
- avoid refetching static metadata on every navigation
- refresh stale movie metadata opportunistically

## IMDb rating

IMDb score is an explicit user requirement.

Do not fabricate it.
Do not map TMDB vote average to "IMDb".

Implement as a provider interface:

```ts
interface ExternalRatingProvider {
  getIMDbRating(imdbId: string): Promise<number | null>
}
```

The actual source must be lawful, reliable and documented.

If unavailable, UI should omit or mark the value unavailable.

## PWA

Requirements:
- manifest
- app icons
- installable shell
- safe-area support
- sensible offline shell/asset cache only
- do not pretend dynamic TMDB/AI requests work offline

## Performance architecture

- Server Components for movie/list data
- streaming/Suspense where beneficial
- image sizes tailored to poster/backdrop context
- virtualize only when library scale actually warrants it
- avoid global animation listeners
- pointer systems mounted only on pointer-capable devices
- use CSS media query `(pointer: fine)`
- dynamic-import GSAP/3D experiences

## Error handling

External provider failure must not destroy personal history.

Examples:
- TMDB down -> local library remains available
- AI quota unavailable -> deterministic search still works
- IMDb source unavailable -> movie page renders without IMDb score

## Observability

V1:
- structured server logs
- AI provider errors
- TMDB failure rate
- auth failures
- web vitals

Keep analytics privacy-conscious because this is a private product.
