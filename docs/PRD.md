# Product Requirements Document

## Product

Working name: **CINEMA OS**

Status: V1 planning / implementation.

Product type: private single-user web application + installable PWA.

## Problem

Movie lovers accumulate fragmented memory:
- what they watched
- when
- where
- in what language
- how they rated it
- whether it was a rewatch
- what they still want to watch
- how their taste changes over time

Most products either focus on social discovery, generic lists, streaming availability, or public reviews.

CINEMA OS focuses on one person's **cinema history** and makes it beautiful, searchable and conversational.

## Product promise

> One place to remember everything you watch and explore your own cinema taste.

## Core jobs to be done

### Log
"When I finish a movie, I want to save it in seconds without filling a giant form."

### Remember
"When I think about a movie later, I want to know if/when/how I watched it."

### Discover
"When I want something to watch, I want to search naturally across public movie metadata and my own history."

### Decide
"When I am unsure what to watch, I want recommendations filtered by what I have already seen and what I tend to like."

### Reflect
"I want interesting stats that reveal my taste, habits and changes over time."

## Primary personas

### V1 persona
One authenticated owner, cinema enthusiast, heavy desktop + iPhone use, values:
- original language
- movie metadata
- beautiful posters/backdrops
- fast interaction
- personal ratings
- strong visual polish

No public audience is required for V1.

## Domain concepts

### Movie
External/canonical movie identity, usually linked to TMDB.

### Library entry
A relationship between the user and a movie:
- in personal collection/history
- favorite
- watchlist
- optional aggregate/latest personal rating

### Viewing
An actual watch event:
- date
- cinema or home
- language
- rating
- rewatch

A movie can have zero, one or many viewings.

## Main navigation

Desktop:
- Home
- Library
- Search
- Stats
- Profile/settings

Mobile PWA:
- Home
- Search
- central Add/Log action
- Library
- You

The exact labels can evolve, but interaction hierarchy should remain.

## Required V1 flows

### 1. Quick movie search
- focus search
- type title/person/natural request
- results appear quickly
- select movie
- open Movie Page

### 2. Add watched
- search movie
- log viewing
- minimum required fields should be low-friction
- successful log updates movie page/library/stats immediately

### 3. Bulk initial population
- search actor/director/franchise or multiple movies
- select many results
- add as watched/library items
- viewing detail can be enriched later

### 4. Movie Page
Must display:
- poster
- backdrop
- title
- year
- runtime
- genres
- director
- major cast
- TMDB metadata
- IMDb rating when source is available
- personal `/10` rating
- favorite state
- watchlist state
- watched state
- viewing history
- actions

### 5. Watchlist
- add/remove quickly from cards or Movie Page
- accessible from Library filters

### 6. Favorite
- simple heart/favorite toggle
- no custom list system required V1

### 7. AI search
Unified with normal search.

The user can:
- find movies
- filter by personal history
- filter by movie attributes
- ask stats questions
- ask recommendations
- issue safe actions

### 8. Stats
V1 target set:
- total movies watched
- total viewings
- cinema vs home
- average personal rating
- watch frequency by month
- genres
- directors
- actors
- countries
- decades
- languages
- rewatch rate
- top-rated groups where statistically meaningful

## Rating

Primary personal score:
- decimal `/10`
- do not force rating when logging

External:
- IMDb score shown separately when lawful/reliable source is configured
- never label TMDB score as IMDb

## Language

Enum:
- VO
- VOSTFR
- VF
- OTHER

The UI can later preserve audio/subtitle details separately, but V1 keeps this concise.

## Rewatch

Rewatch belongs to the viewing event.

Server may also derive it automatically when earlier viewings exist, but the user should be able to correct it.

## AI UX requirements

Do not lead with a traditional chat transcript.

The input can behave conversationally while output becomes:
- movie cards
- filters
- stats
- confirmations
- compact explanatory text

Avoid long generic assistant prose.

## Non-functional requirements

### Performance
- fast first paint
- optimized image delivery
- minimal client JS
- no animation-induced input lag
- instant-feeling navigation

### Accessibility
- keyboard-first search
- proper focus management
- labels
- contrast
- reduced motion
- touch targets

### Security
- private by default
- authenticated writes
- secrets server-side only
- AI tool args validated
- rate limiting for auth/AI routes

## Success criteria

V1 succeeds when:
- a movie can be found and logged in <10 seconds under normal conditions
- the user prefers this Movie Page over opening TMDB/IMDb for their own history
- AI search can answer useful mixed personal/public queries
- the product feels first-class on both desktop and iPhone
- the interface remains smooth with a library of thousands of movies
