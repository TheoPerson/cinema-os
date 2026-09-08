# AI Search & Action Architecture

## Product rule

There is one search experience.

Do not ship a separate generic chatbot page.

## Goals

The user can type:
- exact movie/person names
- natural filters
- questions about personal history
- recommendations
- actions

The system should return structured UI whenever possible.

## Router

Conceptual:

```text
message
  |
  +-- exact/direct search? ----------> deterministic
  |
  +-- parseable structured filter? --> deterministic parser + DB/TMDB
  |
  +-- personal stats query? ---------> typed DB query
  |
  +-- natural/ambiguous intent? -----> cloud LLM
                                      |
                                      v
                               structured intent
                                      |
                                      v
                              validated tools
```

## Why

This minimizes:
- cost
- latency
- hallucination
- provider dependency

And maximizes:
- reliability
- "free-tier" longevity
- deterministic actions

## Provider abstraction

```ts
export interface AIProvider {
  interpret(input: AIInterpretInput): Promise<AIInterpretResult>
}
```

Do not expose vendor types to feature code.

## UI result types

Prefer a discriminated union:

```ts
type SearchBlock =
  | { type: "movie-grid"; movies: MovieCardData[] }
  | { type: "movie-row"; movies: MovieCardData[] }
  | { type: "stats"; data: StatsBlockData }
  | { type: "filter-summary"; filters: AppliedFilter[] }
  | { type: "action-result"; action: string; success: boolean }
  | { type: "text"; markdown: string }
```

Text is a fallback, not the default.

## Core tools

V1 target:

```text
searchMovies
getMovie
searchPersonalLibrary
getViewingHistory
getPersonalStats
addToWatchlist
removeFromWatchlist
setFavorite
logViewing
```

Potential later:
- updateViewing
- deleteViewing
- createCustomList
- compareMovies

## Tool security

The LLM is never trusted.

Every tool:
1. validates schema
2. authenticates user
3. authorizes resource
4. executes through domain service
5. returns typed result

The model never receives DB credentials.

## Context

V1 session-scoped context supports follow-ups:

User:
> Fincher movies I haven't seen

Then:
> only above 7.5 IMDb

Then:
> add the first two

Store enough state to resolve:
- current result IDs
- current filters
- short summary of user intent

Do not store full permanent conversation history by default.

## Cost control

- no AI call for exact title lookup
- no AI call for known filter tokens when parser is confident
- cache equivalent intent parsing briefly
- keep prompt minimal
- structured output only
- short context summary instead of whole transcript
- limit result list passed to model
- use inexpensive model tier by default
- provider fallback is optional but architecture should allow it

## Graceful failure

If AI unavailable:
- normal search still works
- user sees a concise "AI interpretation unavailable" state
- no personal data corruption
- actions do not execute speculatively

## Recommendation behavior

Recommendations should be grounded in:
- public metadata
- user's watched history
- user ratings
- unseen constraint
- requested mood/genre/runtime/etc.

AI should explain only briefly:
> "Because you rated Prisoners 9.1 and Zodiac 8.8."

Avoid vague personality claims.
