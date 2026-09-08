# Motion & Interaction Specification

## Principle

Motion communicates spatial continuity, hierarchy and anticipation.

It is not decoration.

Target:
> calm 90% of the time, unforgettable 10% of the time.

## Libraries

Primary:
- Motion for React

Exceptional:
- GSAP for complex editorial timelines only
- Lenis for selected desktop smooth-scroll contexts only
- View Transition API for cross-route shared visual continuity
- Three.js/R3F optional, maximum one or two isolated signature modules

## Motion tokens

Create centralized tokens rather than random duration values.

Suggested semantic families:

```text
instant
snap
ui
smooth
cinematic
ambient
```

Example starting values:

```ts
export const duration = {
  instant: 0.08,
  snap: 0.16,
  ui: 0.24,
  smooth: 0.42,
  cinematic: 0.72,
  ambient: 1.2,
}
```

Springs should also be tokenized.

## Poster -> Movie transition

Highest-priority signature transition.

Expected choreography:
1. selected poster acknowledges press
2. route transition begins
3. poster preserves identity/spatial continuity
4. backdrop expands/fades behind
5. title and metadata reveal
6. actions settle
7. ambient movie palette becomes active

Do not block navigation waiting for every flourish.

Reduced motion:
- simple crossfade/positionless transition

## Pointer system

Desktop only when:
- `(pointer: fine)`
- user has not requested reduced motion

### Ambient pointer
A very subtle radial luminance/colored haze follows the cursor with inertia.

Requirements:
- no React `setState` per pointer event
- CSS custom properties, MotionValues or RAF-safe loop
- pointer haze must never reduce text contrast
- effect should fade out when pointer leaves viewport/window
- movie accent can interpolate based on dominant hovered/active movie

### Magnetic targets
Use only:
- primary hero action
- compact iconic favorite button
- selected high-value CTA

Magnitude:
- a few pixels
- never makes target harder to hit

### Poster tilt
- 1–3° max
- perspective must be subtle
- disable on dense/small cards if noisy
- keyboard focus gets an equivalent non-pointer affordance

## Search result reflow

When conversation changes filters:
- preserve existing cards where still valid
- animate position changes
- new cards enter restrainedly
- removed cards fade/scale slightly
- avoid complete flash/reload

The UI should visually communicate:
> "the same result set is being refined."

## Rating interaction

Personal `/10` input should feel premium.

Possible desktop behavior:
- slider/drag or stepper
- rolling numerals
- immediate preview
- keyboard arrows supported

Do not make precise decimal rating frustrating on touch.

## Favorite

Heart transition:
- outline -> filled
- small scale impulse
- no confetti

## Watched

Check/confirmation:
- concise path-draw or spring
- update local state instantly when optimistic write is safe

## Mobile gesture mapping

Desktop hover/magnetism becomes:
- press feedback
- long-press context action
- sheets
- haptic signal when available
- swipe only when discoverable/natural

Do not port hover-only functionality.

## Smooth scroll

Lenis is not global by default.

Use only where it improves:
- editorial home
- movie storytelling sections

Avoid where it hurts:
- modal/sheet internals
- command search
- dense Library
- accessibility expectations

## Performance

- transforms/opacity preferred
- `will-change` only when justified
- no unbounded blur animation
- no layout trashing mouse effects
- use passive listeners where relevant
- dynamically import heavy sequences
- test at 60Hz and high-refresh
- test Safari iOS

## Reduced motion

`prefers-reduced-motion: reduce` must:
- disable ambient pointer movement
- disable tilt/magnetism
- simplify route morph
- keep instant status feedback
- preserve all functionality
