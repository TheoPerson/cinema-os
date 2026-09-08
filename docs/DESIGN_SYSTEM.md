# Visual & UI Design System

## Direction

Working art direction:

# CINEMATIC EDITORIAL

The site should feel like:
- a premium cinema publication
- a modern film title sequence
- a polished first-party Apple-quality app
- a bespoke interactive portfolio

It should **not** visibly inherit a component library's aesthetic.

## Core visual idea

> **The movie poster is the interface.**

UI chrome should recede. Posters, backdrops, typography and spatial transitions create the identity.

## Experience pillars

### 1. Artwork-first
Movie artwork receives more visual weight than cards, borders, panels or controls.

### 2. Editorial composition
Use whitespace, scale, asymmetry and typography deliberately.

### 3. Dark without being generic
Avoid pure-black-everywhere.

Suggested semantic palette:

```css
--canvas: #090909;
--surface-1: #0f0f10;
--surface-2: #151517;
--surface-3: #1c1c1f;
--text-primary: #f4f1ea;
--text-secondary: #aaa7a1;
--hairline: rgba(255,255,255,.10);
```

These are starting values, not an immutable brand palette.

### 4. Artwork-driven accents
Per-movie optional tokens:

```text
movieAccent
movieGlow
movieGradient
movieMuted
```

Derive them from artwork asynchronously/cache them.

Do not turn the entire UI into saturated colors.
Use them for:
- backdrop haze
- focus/accent line
- ambient pointer glow
- hero gradient
- small active states

### 5. Minimal chrome
Avoid:
- nested cards inside cards
- excessive borders
- always-visible filter panels
- dense dashboard headers
- tiny SaaS typography

## Typography

Use variable type where licensing permits.

Desired pairing:
- editorial/display face for selected hero/movie titles
- highly readable modern grotesk/sans for UI
- tabular numerals for ratings/stats

Rules:
- giant title type is allowed on Movie Page
- UI labels stay compact
- metadata uses deliberate tracking and rhythm
- never use five font families

## Radius

Do not make everything a pill.

Suggested scale:
- `xs`: 6px
- `sm`: 10px
- `md`: 14px
- `lg`: 20px
- `poster`: 14–18px depending size
- pills only for actual chips/compact controls

## Poster system

Canonical aspect ratio: `2 / 3`.

States:
- idle
- hover/focus
- selected
- watched
- watchlisted
- loading

Desktop hover:
- 1.0 -> ~1.02/1.025 scale maximum
- optional 1–3° perspective tilt
- restrained sheen
- metadata reveal where density permits

Do not obscure poster artwork with large overlays by default.

## Movie Page

This is the showcase surface.

Composition:
- full-bleed or wide cinematic backdrop
- gradient falloff into canvas
- poster anchored into hero
- large title
- compact metadata
- IMDb and personal rating clearly separated
- key actions
- personal viewing history immediately recognizable as personal data

Preferred feel:
the selected library poster should appear to *become* the Movie Page poster.

## Search

Search is a cinematic command surface, not a utility text box.

Default:
> `Search your cinema or ask anything`

Desktop:
- `/` or `⌘K` focus/open
- dim background
- large centered/anchored command input
- results become visual rows/grids
- AI refinements animate existing result layout where possible

Mobile:
- full-width search surface
- bottom-sheet refinements where useful
- keyboard-safe layout

## Home

Home can be more editorial than Library.

Possible sections:
- recent viewings
- "continue your cinema"
- watchlist spotlight
- yearly/monthly pulse
- hero editorial feature based on a recent/favorite movie

Avoid a metric-card wall.

## Library

Library prioritizes utility:
- strong poster grid
- fast filters
- sort
- search
- dense enough to browse
- visually calm

This page should handle large collections gracefully.

## Stats

Stats should look editorial, not BI software.

Use:
- large numerical statements
- sparse charts
- poster/portrait context for actors/directors
- decade/genre composition
- subtle motion on entry

No gratuitous donut-chart zoo.

## Desktop navigation

Navigation should be visually light and persistent enough to orient the user.

Potential pattern:
- slim top bar or restrained side rail
- search command always accessible
- profile/settings low priority

## Mobile navigation

Recommended:
- Home
- Search
- central Add/Log
- Library
- You

Use safe-area padding and thumb-reachable actions.

## Loading states

Movie images:
- dominant-color placeholder
- blur-up
- crossfade
- preserve aspect ratio

Do not show giant grey skeleton rectangles where a cinematic placeholder can exist.

## Empty states

Empty states should drive action:
- no library -> "Build your cinema"
- empty watchlist -> direct search affordance
- no AI result -> show deterministic refinements, not generic error prose

## Accessibility

- focus ring must be visually designed, not removed
- keyboard parity for hover-only actions
- color is never the only status cue
- text contrast preserved over artwork via gradients/scrims
