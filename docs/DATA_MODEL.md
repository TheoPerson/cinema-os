# Domain & Data Model

## Non-negotiable concept

A movie is not a viewing.

One movie can have many viewings.

## Entities

### users
Owned by Better Auth plus application relationship.

### movies
Local cached representation of canonical external movie.

Key fields:
- id UUID
- tmdbId unique integer
- imdbId nullable string
- title
- originalTitle
- releaseDate
- runtimeMinutes
- posterPath
- backdropPath
- metadata JSON cache
- createdAt
- updatedAt

### library_entries
Personal relationship to a movie.

Key fields:
- id UUID
- userId
- movieId
- favorite boolean
- watchlist boolean
- createdAt
- updatedAt

Unique:
- `(userId, movieId)`

Do not use `watched:boolean` as the source of truth.
Watched can be derived from `viewings`.

### viewings
Historical watch event.

Fields:
- id UUID
- userId
- movieId
- watchedOn date
- locationType enum: CINEMA | HOME
- language enum: VO | VOSTFR | VF | OTHER
- personalRating numeric(3,1) nullable
- rewatch boolean
- createdAt
- updatedAt

Personal rating constraint:
- 0.0 to 10.0

### movie_palette
Optional cached artwork-derived visual palette.

Fields:
- movieId
- accent
- muted
- glow
- gradientData
- generatedAt

This may be JSON instead if implementation is simpler.

### ai_sessions
V1 optional persistence for short-lived conversation context.

If persisted:
- userId
- sessionId
- summarizedContext
- expiresAt

Do not create permanent AI "memory" in V1.

## Derived values

### watched
`exists(viewings where userId + movieId)`

### rewatch
A viewing is a rewatch when an earlier viewing exists.
User can override/fix if imported chronology is incomplete.

### latest personal rating
May be derived from latest rated viewing.

### movie-level personal rating
Do not invent a second independent rating system in V1.
Use latest rated viewing unless product later explicitly introduces an aggregate rating.

## Indexing

At minimum:
- movies(tmdbId) unique
- movies(imdbId) where not null
- library_entries(userId, movieId) unique
- library_entries(userId, watchlist)
- library_entries(userId, favorite)
- viewings(userId, watchedOn desc)
- viewings(userId, movieId, watchedOn desc)

## Deletion

Deleting a viewing does not delete the movie.

Removing from watchlist does not remove historical viewings.

If a user removes a library entry but historical viewings exist:
- either keep the relationship implicitly or disallow destructive semantic mismatch
- V1 recommended: library entry remains while any viewing exists

## Import

Quick Add can create:
- movie
- library entry

Bulk "mark watched" may create approximate viewing records only if the UX clearly asks for/accepts a date.

Do not fabricate dates.

If initial population lacks dates:
- allow library membership without a viewing
- optionally mark "watched, date unknown" only if schema is extended explicitly
- do not silently use today's date
