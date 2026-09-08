# PROJECT.md — Executive Context

## One sentence

CINEMA OS is a **private, standalone, AI-native personal cinema history PWA** with a cinematic editorial visual identity and unusually polished motion/pointer interactions.

## User decisions, frozen

- standalone app
- single user in V1
- real secure login
- TMDB + personal DB
- personal rating `/10`
- show IMDb rating separately when legitimately available
- Viewing fields: date, cinema/home, language, rating, rewatch
- watchlist: yes
- favorite: simple heart
- AI can search + query personal data + perform validated actions
- AI context: session only in V1
- AI: cloud only
- initial data: mostly start from scratch
- initial population: Quick Add / Bulk Add
- advanced stats: yes if foundation makes them cheap
- PWA: yes
- top user priorities: Import/Quick Add, AI Search, Movie Page
- architecture: one Next.js full-stack repo
- visual quality target: extraordinary, bespoke, high-refresh, cinematic
- pointer interaction matters strongly on desktop
- mobile must feel purpose-built, not compressed desktop

## Product thesis

This is not primarily a movie database.

It is the user's **memory of cinema**.

Public metadata answers:
> What is this movie?

Personal data answers:
> What does this movie mean in my history?

The Movie Page combines both.

## Visual thesis

**The artwork is the interface.**

Avoid excessive UI chrome. Let posters, backdrops, typography, negative space and motion create the product identity.

## AI thesis

**Conversation controls the interface.**

AI should transform queries into:
- filters
- movie cards
- stats
- actions

not pages of assistant prose.

## Engineering thesis

Use deterministic systems first and AI only where language understanding/reasoning adds value.

Every AI action passes through authenticated, validated domain services.

## Absolute anti-goals

Never ship:
- generic shadcn dashboard
- Netflix clone
- Letterboxd clone
- chatbot bolted onto a CRUD movie app
- local LLM requirement
- separate backend service in V1
- fake IMDb score
- always-on WebGL
- animation that causes input lag
