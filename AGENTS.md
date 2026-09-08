# AGENTS.md — CINEMA OS operating contract

This is the authoritative implementation brief for any coding agent working in this repository.

## Mission

Build **CINEMA OS**, a private standalone personal movie-history application whose quality target is:

- application-grade reliability
- portfolio/Awwwards-level visual polish where appropriate
- excellent desktop pointer feel
- excellent iPhone/PWA ergonomics
- fast movie logging
- AI-native discovery without turning the product into a chat window

The user values UI/UX, motion, responsiveness and product feel at least as highly as backend completeness.

A merely functional CRUD app is **not an acceptable interpretation** of this project.

---

## 1. Product truth

CINEMA OS is:

> **Your personal history of cinema.**

The core domain is not `User -> Movie -> watched:boolean`.

It is:

`User -> Movie -> Viewings[]`

A single movie can be watched multiple times. Each viewing is a historical event.

### Viewing fields in V1

- date
- location type: `CINEMA | HOME`
- language: `VO | VOSTFR | VF | OTHER`
- personal rating `/10`, optional until rated
- rewatch boolean

Do not collapse viewings into a single `watchedAt` field.

---

## 2. User / access model

V1 is deliberately single-user in product UX.

However:
- real authentication is mandatory
- all writes require an authenticated server-side session
- schema should retain a `userId` boundary
- no public mutation endpoint
- future multi-user support must not require redesigning the domain model

Do **not** build social features in V1.

---

## 3. Primary V1 priorities

The user's explicit top priorities are:

1. **Import / initial population**
2. **AI Search**
3. **Movie Page**

Interpret "Import" for V1 primarily as **Quick Add + Bulk Add**, because the user currently intends to start from scratch.

A proper Letterboxd/IMDb CSV importer is a later extension unless it can be added cheaply without destabilizing V1.

Library is a required foundation even though it was not in the top-three list.

---

## 4. Search and AI product behavior

There is **one search surface**, not separate "Search" and "AI Chat" products.

Preferred primary input:

> `Search your cinema or ask anything`

Examples:
- `Interstellar`
- `Mark Wahlberg`
- `Fincher movies I haven't seen`
- `dark thriller under 2 hours I haven't watched`
- `show everything I watched at the cinema this summer`
- `add the second one to my watchlist`
- `what are my highest-rated directors?`

Routing principle:

1. direct deterministic search if possible
2. personal DB query if possible
3. TMDB query if possible
4. cloud LLM only when natural-language interpretation/reasoning is needed

The AI must be used as an **intent and action layer**, not as an expensive universal database.

### V1 AI memory

Conversation context is **session-scoped**, not permanent memory.

### V1 AI hosting

**Cloud only.**

The user must be able to use the PWA on iPhone while the Windows PC is off, and using the site must not consume local GPU/RAM.

### AI cost rule

"Free + unlimited" cannot be guaranteed by an external provider.

Therefore:
- minimize LLM calls
- use structured outputs
- route trivial searches deterministically
- keep `AIProvider` abstract
- support provider replacement without touching product logic
- support graceful degradation when provider quota is unavailable

Never hard-code product behavior to one AI vendor.

---

## 5. Visual quality bar

The application must **not** look like:
- a generic shadcn dashboard
- an AI SaaS admin panel
- Netflix
- Letterboxd with different colors
- Plex
- a component-library demo

Visual direction:

> **Cinematic editorial. Dark, premium, artwork-driven, minimal chrome, highly tactile.**

Target balance:
- 70% restrained premium minimalism
- 20% cinema identity
- 10% unforgettable "how did the site do that?" moments

The movie artwork is the primary visual material.

### Color strategy

Base:
- obsidian / warm-black surfaces
- graphite layers
- warm off-white typography

Accent:
- derived from current movie artwork where appropriate
- subtle, not RGB-gaming
- backdrop / glow / active states may respond to artwork palette

### Core visual surfaces

The three showcase experiences are:

1. **Movie Page**
2. **Search / AI Search**
3. **Poster -> Movie shared transition**

Home and Stats must be polished, but do not steal complexity budget from these three.

---

## 6. Pointer and motion quality bar

Desktop pointer feel is a signature feature.

Implement:
- subtle ambient radial illumination following pointer with inertia
- movie-derived ambient color where safe
- magnetic attraction on selected high-value controls
- poster micro-tilt, approximately 1–3 degrees maximum
- restrained highlight/parallax
- contextual cursor labels only when they increase clarity
- smooth springs
- layout reflow animations on filtered search results

Never:
- replace the native cursor with a laggy decorative blob
- update React state on every mousemove
- animate layout-heavy CSS properties unnecessarily
- apply tilt/magnetism globally
- make every element move

Use MotionValues, transforms and requestAnimationFrame-safe techniques.

### Mobile

Do not imitate hover.

Translate the interaction language into:
- press scale
- bottom sheets
- swipe where natural
- long-press quick actions
- haptic feedback when the platform/API permits
- proper safe areas
- large touch targets

Responsive design means **different interaction architecture**, not desktop compressed to 390px.

---

## 7. Performance contract

Visual ambition must not produce a slow product.

Goals:
- high refresh-rate capable on modern desktop and ProMotion-class mobile hardware where browser/device permits
- avoid unnecessary hydration
- Server Components by default
- Client Components only where interaction requires them
- animate transform/opacity first
- lazy-load heavy visual systems
- no always-on WebGL
- no giant JS animation bundle for simple effects
- respect `prefers-reduced-motion`
- correctly size and cache posters/backdrops
- avoid stacked live `backdrop-filter` effects

Three.js/R3F is optional and limited to one or two exceptional signature experiences. Never make it a foundation.

---

## 8. Technical choices

Use:

- Next.js 16.3.x Active LTS or latest compatible security patch in 16.3
- React 19
- TypeScript strict
- Tailwind v4 + custom CSS
- local UI primitives based on Base UI / shadcn philosophy
- Motion as primary motion library
- GSAP only for complex timeline sequences
- PostgreSQL
- Drizzle ORM v1
- Better Auth 1.7+
- Zod validation
- TMDB
- cloud AI abstraction
- Vitest
- Playwright
- PWA

Do not introduce:
- a separate Adonis/Nest backend for V1
- Redux by default
- a design-system dependency that owns the visual identity
- GraphQL without a concrete need
- microservices
- Redis without a measured use case

---

## 9. Code architecture rules

- Organize by domain/feature where practical.
- Server owns writes.
- Validate every external payload.
- Never trust LLM tool arguments.
- AI actions call the same validated service layer as normal UI actions.
- TMDB data is external metadata, not the user's historical truth.
- User data and external movie metadata should not be conflated.
- Make loading/error/empty states first-class UI.
- Accessibility is mandatory.
- Prefer semantic HTML.
- Every animation must have a reason and a reduced-motion fallback.

---

## 10. Agent working protocol

Before implementing:
1. read all linked docs
2. inspect existing code
3. identify the smallest roadmap phase that can be completed end-to-end
4. preserve decisions in `docs/DECISIONS.md`
5. update `docs/ROADMAP.md` progress when a phase lands

For each substantial change:
- implement
- typecheck
- lint
- unit test affected logic
- run relevant Playwright smoke test
- inspect the UI at mobile + desktop breakpoints
- check reduced motion
- check keyboard navigation

Do not ask the user questions already answered in this repository.

When a choice is genuinely unspecified:
- choose the option that best supports the product principles
- document it in `docs/DECISIONS.md`
- continue

Partial working product > endless clarification.

---

## 11. Definition of "stunning"

"Stunning" does **not** mean more effects.

It means:
- composition is intentional
- typography feels editorial
- posters dominate
- spacing feels expensive
- interactions anticipate the user
- transitions preserve spatial continuity
- loading feels designed
- mobile feels native
- animation never compromises responsiveness
- every surface has a clear visual hierarchy
- no stock dashboard visual language

A screenshot should look premium.
A screen recording should look even better.
Using it for five minutes should still feel fast and obvious.

---

## 12. First implementation target

Build the vertical slice in this order:

1. authenticated shell
2. TMDB movie search
3. add movie to personal library
4. log a viewing
5. premium Movie Page
6. library
7. unified command/search surface
8. AI intent routing
9. AI safe actions
10. stats
11. PWA polish
12. advanced motion refinement

Do not begin with a 3D hero.
