# Security

CINEMA OS is a private personal application.

## Rules

- Never commit `.env*` secrets.
- Keep TMDB and AI API credentials server-side.
- Every mutation requires server-side authentication.
- Validate all external input with Zod.
- Treat AI tool arguments as hostile input.
- Never expose raw database credentials to the client or model.
- Apply auth and AI rate limits before public deployment.
- Use current security-patched Next.js and auth dependencies.
- Personal viewing history should not be made public by default.

Report security-sensitive defects privately rather than opening a public issue if this repository becomes public.
