# Quality Bar & Acceptance Checklist

## Every surface

- [ ] desktop 1440px inspected
- [ ] laptop ~1280px inspected
- [ ] iPhone-class 390–430px inspected
- [ ] keyboard usable
- [ ] visible focus
- [ ] reduced motion works
- [ ] loading state designed
- [ ] empty state designed
- [ ] error state designed
- [ ] no horizontal overflow
- [ ] no layout shift from images
- [ ] no console errors

## Performance

- [ ] no state update on every pointermove
- [ ] motion uses transform/opacity where possible
- [ ] images correctly sized
- [ ] heavy animation packages dynamically imported where possible
- [ ] route does not require client-side fetching when server rendering is enough
- [ ] no unnecessary global client provider

## Movie Page

- [ ] source ratings clearly labeled
- [ ] personal history visually distinct from public metadata
- [ ] poster/backdrop remain legible
- [ ] CTA states obvious
- [ ] mobile hero not a shrunken desktop hero

## AI

- [ ] no tool executes from unvalidated args
- [ ] deterministic request avoids LLM
- [ ] failure does not break normal search
- [ ] output uses structured UI when appropriate
- [ ] no hallucinated personal facts

## "Wow" test

Before calling a major visual feature done:
1. screenshot test: would it look bespoke without motion?
2. screen-recording test: does motion improve spatial understanding?
3. five-minute test: is it still pleasant after novelty wears off?
4. 60fps test: does effect remain smooth under real content?
5. restraint test: can one effect be removed and make the page better?

If the answer to #5 is yes, remove it.
