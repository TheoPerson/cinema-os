import Link from "next/link";

export default async function MoviePage({
  params
}: {
  params: Promise<{ tmdbId: string }>;
}) {
  const { tmdbId } = await params;

  return (
    <main className="min-h-dvh bg-[var(--canvas)]">
      <div className="relative min-h-[72dvh] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(214,180,122,.18),transparent_34%),linear-gradient(to_bottom,rgba(255,255,255,.03),rgba(9,9,9,1))]" />

        <div className="relative mx-auto flex min-h-[72dvh] max-w-[1500px] flex-col justify-end px-5 pb-12 pt-8 md:px-10 lg:px-14 lg:pb-16">
          <Link
            href="/"
            className="absolute left-5 top-6 text-sm text-white/60 transition hover:text-white md:left-10 lg:left-14"
          >
            ← Library
          </Link>

          <p className="text-xs uppercase tracking-[0.22em] text-white/50">TMDB {tmdbId}</p>
          <h1 className="mt-4 max-w-5xl text-6xl font-medium leading-[0.88] tracking-[-0.06em] md:text-8xl lg:text-[7.5rem]">
            Movie Page
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/55">
            This starter deliberately leaves real TMDB data wiring to the first implementation phase.
            The visual shell exists so the project never begins life as a generic dashboard.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">
              Log viewing
            </button>
            <button className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm">
              + Watchlist
            </button>
            <button className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/[0.04]">
              ♡
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
